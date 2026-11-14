/**
 * =============================================================================
 * SAFINUM WEB NUMBER ENGINE — GAPLESS WEB AUDIO STITCHER & PLAYER (JS RUNTIME)
 * =============================================================================
 * File: audioStitcherPlayer.js
 * Target: Chrome Extension (Manifest V3) & Node/CommonJS Test Runner
 *
 * Implements sample-accurate gapless audio playback using Web Audio API
 * (AudioContext + AudioBufferSourceNode) with in-memory AudioBuffer caching,
 * HTML5 Audio queue fallback, and phonetic SpeechSynthesis fallback.
 *
 * Asset path resolver rule for Chrome Extension:
 *   `chrome.runtime.getURL('assets/audio/' + lang + '/' + key + '.ogg')`
 *
 * All comments and documentation are strictly in English.
 * =============================================================================
 */

(function (root) {
  "use strict";

  const decomposer =
    (typeof root !== "undefined" && root.SafinumNumberDecomposer) ||
    (typeof require === "function" ? require("./numberDecomposer.js") : {});

  const AUDIO_KEY_LEXICON = decomposer.AUDIO_KEY_LEXICON || {};

  /**
   * Resolves an audio key and language code to its Chrome Extension Manifest V3 asset URL.
   * Strictly adheres to: `chrome.runtime.getURL('assets/audio/' + lang + '/' + key + '.ogg')`
   *
   * @param {string} key
   * @param {string} lang
   * @returns {string}
   */
  function resolveAudioAssetUrl(key, lang) {
    const safeLang = String(lang || "fub")
      .trim()
      .toLowerCase();
    const safeKey = String(key).trim();
    const relativePath = safeKey.endsWith(".webm")
      ? "assets/audio/" + safeKey.replace(/^\/+/, "")
      : "assets/audio/" + safeLang + "/" + safeKey + ".ogg";

    if (
      typeof chrome !== "undefined" &&
      chrome !== null &&
      typeof chrome.runtime !== "undefined" &&
      typeof chrome.runtime.getURL === "function"
    ) {
      try {
        return chrome.runtime.getURL(relativePath);
      } catch (_) {
        return relativePath;
      }
    }

    return relativePath;
  }

  /**
   * Gapless Web Audio API stitcher with in-memory AudioBuffer caching.
   */
  class AudioStitcherPlayer {
    constructor(options) {
      const opts = options || {};
      this.audioContext = null;
      this.bufferCache = new Map();
      this.inFlightLoads = new Map();
      this.activeSourceNodes = [];
      this.activeHtmlAudios = [];
      this.activeAbortController = null;
      this.pendingResolve = null;
      this.sessionId = 0;
      this._isPlaying = false;
      this.callbacks = Object.assign({}, opts.callbacks || {});
      this.assetResolver = opts.assetResolver || resolveAudioAssetUrl;
      this.playbackRate = typeof opts.playbackRate === "number" ? opts.playbackRate : 1.0;
    }

    /**
     * Indicates whether an audio sequence is currently playing.
     * @returns {boolean}
     */
    get isPlaying() {
      return this._isPlaying;
    }

    /**
     * Returns the number of decoded AudioBuffers currently cached in memory.
     * @returns {number}
     */
    get cachedBufferCount() {
      return this.bufferCache.size;
    }

    /**
     * Updates lifecycle callbacks dynamically.
     * @param {Object} callbacks
     */
    setCallbacks(callbacks) {
      this.callbacks = Object.assign({}, this.callbacks, callbacks || {});
    }

    /**
     * Lazily initializes or resumes the shared Web Audio API AudioContext.
     * @returns {Promise<AudioContext>}
     */
    async ensureAudioContext() {
      if (!this.audioContext) {
        const AudioCtxConstructor =
          typeof window !== "undefined"
            ? window.AudioContext || window.webkitAudioContext
            : undefined;

        if (!AudioCtxConstructor) {
          throw new Error(
            "[SafinumWebNumberEngine] Web Audio API is not supported in this environment."
          );
        }

        this.audioContext = new AudioCtxConstructor();
      }

      if (this.audioContext.state === "suspended") {
        await this.audioContext.resume();
      }

      return this.audioContext;
    }

    /**
     * Builds the unique cache key for a given language and audio corpus key.
     * @param {string} lang
     * @param {string} key
     * @returns {string}
     */
    getCacheKey(lang, key) {
      return `${String(lang || "fub").trim().toLowerCase()}:${String(key).trim()}`;
    }

    /**
     * Loads and decodes a single .ogg file into an AudioBuffer, utilizing the
     * in-memory cache and deduplicating concurrent requests for the same key.
     * @param {string} key
     * @param {string} lang
     * @param {AbortSignal} [signal]
     * @returns {Promise<AudioBuffer>}
     */
    async loadAudioBuffer(key, lang, signal) {
      const cacheKey = this.getCacheKey(lang, key);
      const cached = this.bufferCache.get(cacheKey);
      if (cached) {
        return cached;
      }

      const existingPromise = this.inFlightLoads.get(cacheKey);
      if (existingPromise) {
        return existingPromise;
      }

      const loadPromise = (async () => {
        try {
          const ctx = await this.ensureAudioContext();
          const url = this.assetResolver(key, lang);
          const response = await fetch(url, signal ? { signal } : undefined);

          if (!response.ok) {
            throw new Error(
              `Failed to fetch audio asset "${url}" (HTTP ${response.status} ${response.statusText})`
            );
          }

          const arrayBuffer = await response.arrayBuffer();
          const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
          this.bufferCache.set(cacheKey, decodedBuffer);
          return decodedBuffer;
        } finally {
          this.inFlightLoads.delete(cacheKey);
        }
      })();

      this.inFlightLoads.set(cacheKey, loadPromise);
      return loadPromise;
    }

    /**
     * Preloads an array of audio keys into the in-memory AudioBuffer cache.
     * @param {string} lang
     * @param {readonly string[]} keys
     * @returns {Promise<void>}
     */
    async preloadKeys(lang, keys) {
      const uniqueKeys = Array.from(new Set(keys || []));
      await Promise.allSettled(uniqueKeys.map((k) => this.loadAudioBuffer(k, lang)));
    }

    /**
     * Clears the in-memory decoded AudioBuffer cache.
     */
    clearCache() {
      this.bufferCache.clear();
      this.inFlightLoads.clear();
    }

    /**
     * Immediately halts any active or pending playback and cleans up audio nodes.
     */
    stop() {
      this.sessionId += 1;

      if (this.activeAbortController) {
        try {
          this.activeAbortController.abort();
        } catch (_) {
          // Ignore abort errors
        }
        this.activeAbortController = null;
      }

      for (const node of this.activeSourceNodes) {
        try {
          node.onended = null;
          node.stop();
        } catch (_) {
          // Node may have already ended
        }
        try {
          node.disconnect();
        } catch (_) {
          // Ignore disconnect errors
        }
      }
      this.activeSourceNodes = [];

      for (const audio of this.activeHtmlAudios) {
        try {
          audio.onended = null;
          audio.onerror = null;
          audio.pause();
          audio.currentTime = 0;
        } catch (_) {
          // Ignore HTMLAudio cleanup errors
        }
      }
      this.activeHtmlAudios = [];

      this._isPlaying = false;

      if (this.pendingResolve) {
        const resolve = this.pendingResolve;
        this.pendingResolve = null;
        resolve();
      }
    }

    /**
     * Plays an ordered sequence of audio keys gaplessly in the specified language.
     * @param {string[]} audioKeys
     * @param {string} lang
     * @param {Object} [perCallCallbacks]
     * @returns {Promise<void>}
     */
    async playSequence(audioKeys, lang, perCallCallbacks) {
      this.stop();

      if (!Array.isArray(audioKeys) || audioKeys.length === 0) {
        return;
      }

      const currentSession = ++this.sessionId;
      const abortController =
        typeof AbortController !== "undefined" ? new AbortController() : null;
      this.activeAbortController = abortController;
      this._isPlaying = true;

      const mergedCallbacks = {
        onStart: (perCallCallbacks && perCallCallbacks.onStart) || this.callbacks.onStart,
        onSegmentChange:
          (perCallCallbacks && perCallCallbacks.onSegmentChange) || this.callbacks.onSegmentChange,
        onEnded: (perCallCallbacks && perCallCallbacks.onEnded) || this.callbacks.onEnded,
        onError: (perCallCallbacks && perCallCallbacks.onError) || this.callbacks.onError
      };

      try {
        const buffers = await Promise.all(
          audioKeys.map((key) =>
            this.loadAudioBuffer(key, lang, abortController ? abortController.signal : undefined)
          )
        );

        if (currentSession !== this.sessionId) {
          return;
        }

        const ctx = await this.ensureAudioContext();
        if (currentSession !== this.sessionId) {
          return;
        }

        await this.scheduleGaplessBuffers(
          ctx,
          audioKeys,
          buffers,
          currentSession,
          mergedCallbacks
        );
      } catch (err) {
        if (currentSession !== this.sessionId) {
          return;
        }

        try {
          await this.playWithHtmlAudioFallback(audioKeys, lang, currentSession, mergedCallbacks);
        } catch (fallbackErr) {
          if (currentSession !== this.sessionId) {
            return;
          }
          await this.playWithPhoneticSpeechFallback(
            audioKeys,
            lang,
            currentSession,
            mergedCallbacks
          );
          if (typeof mergedCallbacks.onError === "function") {
            const normalizedError =
              fallbackErr instanceof Error ? fallbackErr : new Error(String(err));
            mergedCallbacks.onError(normalizedError);
          }
        }
      }
    }

    /**
     * Schedules decoded AudioBuffers back-to-back on the hardware audio clock.
     */
    scheduleGaplessBuffers(ctx, audioKeys, buffers, currentSession, callbacks) {
      return new Promise((resolve) => {
        this.pendingResolve = resolve;

        const rate = this.playbackRate > 0 ? this.playbackRate : 1.0;
        let cursorTime = ctx.currentTime + 0.012;
        const nodes = [];

        for (let i = 0; i < buffers.length; i++) {
          const buffer = buffers[i];
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.playbackRate.value = rate;
          source.connect(ctx.destination);

          const segmentIndex = i;
          source.onended = () => {
            if (currentSession !== this.sessionId) {
              return;
            }

            const nextIndex = segmentIndex + 1;
            if (nextIndex < audioKeys.length) {
              if (typeof callbacks.onSegmentChange === "function") {
                callbacks.onSegmentChange(audioKeys[nextIndex], nextIndex);
              }
            } else {
              this._isPlaying = false;
              this.activeSourceNodes = [];
              this.pendingResolve = null;
              if (typeof callbacks.onEnded === "function") {
                callbacks.onEnded();
              }
              resolve();
            }
          };

          source.start(cursorTime);
          cursorTime += buffer.duration / rate;
          nodes.push(source);
        }

        this.activeSourceNodes = nodes;

        if (typeof callbacks.onStart === "function") {
          callbacks.onStart();
        }
        if (typeof callbacks.onSegmentChange === "function") {
          callbacks.onSegmentChange(audioKeys[0], 0);
        }
      });
    }

    /**
     * Secondary fallback using preloaded HTMLAudioElement instances.
     */
    playWithHtmlAudioFallback(audioKeys, lang, currentSession, callbacks) {
      return new Promise((resolve, reject) => {
        this.pendingResolve = resolve;

        const elements = audioKeys.map((key) => {
          const audio = new Audio(this.assetResolver(key, lang));
          audio.preload = "auto";
          audio.playbackRate = this.playbackRate > 0 ? this.playbackRate : 1.0;
          audio.load();
          return audio;
        });

        this.activeHtmlAudios = elements;
        let currentIndex = 0;

        const playNext = () => {
          if (currentSession !== this.sessionId) {
            resolve();
            return;
          }

          if (currentIndex >= elements.length) {
            this._isPlaying = false;
            this.activeHtmlAudios = [];
            this.pendingResolve = null;
            if (typeof callbacks.onEnded === "function") {
              callbacks.onEnded();
            }
            resolve();
            return;
          }

          const idx = currentIndex;
          const currentAudio = elements[idx];
          if (typeof callbacks.onSegmentChange === "function") {
            callbacks.onSegmentChange(audioKeys[idx], idx);
          }

          currentAudio.onended = () => {
            currentIndex += 1;
            playNext();
          };

          currentAudio.onerror = () => {
            this.pendingResolve = null;
            reject(new Error(`HTMLAudioElement failed to play key "${audioKeys[idx]}"`));
          };

          currentAudio.play().catch((err) => {
            this.pendingResolve = null;
            reject(err instanceof Error ? err : new Error(String(err)));
          });
        };

        if (typeof callbacks.onStart === "function") {
          callbacks.onStart();
        }
        playNext();
      });
    }

    /**
     * Tertiary fallback using Web Speech API phonetic synthesis.
     */
    playWithPhoneticSpeechFallback(audioKeys, lang, currentSession, callbacks) {
      return new Promise((resolve) => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) {
          this._isPlaying = false;
          resolve();
          return;
        }

        this.pendingResolve = resolve;
        const dict = AUDIO_KEY_LEXICON[lang] || AUDIO_KEY_LEXICON.fub || {};
        const fubDict = AUDIO_KEY_LEXICON.fub || {};
        const spokenSentence = audioKeys
          .map((k) => {
            const entry = dict[k] || fubDict[k];
            return entry ? entry.phonetic : k;
          })
          .join(" ");

        const utterance = new SpeechSynthesisUtterance(spokenSentence);
        utterance.lang = "fr-FR";
        utterance.rate = 0.92;

        utterance.onstart = () => {
          if (currentSession !== this.sessionId) return;
          if (typeof callbacks.onStart === "function") callbacks.onStart();
          if (typeof callbacks.onSegmentChange === "function") {
            callbacks.onSegmentChange(audioKeys[0], 0);
          }
        };

        utterance.onend = () => {
          if (currentSession !== this.sessionId) return;
          this._isPlaying = false;
          this.pendingResolve = null;
          if (typeof callbacks.onEnded === "function") callbacks.onEnded();
          resolve();
        };

        utterance.onerror = () => {
          if (currentSession !== this.sessionId) return;
          this._isPlaying = false;
          this.pendingResolve = null;
          resolve();
        };

        window.speechSynthesis.speak(utterance);
      });
    }
  }

  const exported = {
    resolveAudioAssetUrl,
    AudioStitcherPlayer
  };

  if (typeof root !== "undefined") {
    root.SafinumAudioStitcher = exported;
    root.AudioStitcherPlayer = AudioStitcherPlayer;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);


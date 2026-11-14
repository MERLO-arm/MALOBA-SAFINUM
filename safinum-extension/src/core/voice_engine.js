/**
 * =============================================================================
 * MALOBA ANYDOC — REAL AUDIO PLAYBACK ENGINE (WEBM / OPUS)
 * =============================================================================
 * Plays verified human-recorded native audio (.webm / Opus) bundled from
 * EXPORT_DATASET_MALOBA via extension web-accessible resources.
 *
 * Production features:
 *   - Sequential playback (UI phrase audio -> pause -> pedagogical explanation)
 *   - Configurable playback speed (1.0x normal, 0.8x slow for accessibility)
 *   - Race-free cancellation via monotonic playback token
 *   - Graceful handling of missing audio files without crashing
 *   - Event-driven state notifications (`safinum-voice-state`) for UI highlight
 * =============================================================================
 */

(function () {
  "use strict";

  class SafinumVoiceEngine {
    constructor() {
      this.isSpeaking = false;
      this.activeAudio = null;
      this.sequenceTimer = null;
      this.playbackRate = 1.0;
      this.playbackToken = 0;
    }

    /**
     * Resolves an extension-relative audio path to a chrome-extension:// URL.
     * @param {string|null} relativePath - Path under assets/audio/ (e.g. "eton/saf_ui_001_take1_xxx.webm")
     * @returns {string|null}
     */
    resolveAudioUrl(relativePath) {
      if (!relativePath || typeof relativePath !== "string") return null;
      const cleanPath = relativePath.replace(/^\/+/, "");
      const assetPath = cleanPath.startsWith("assets/audio/")
        ? cleanPath
        : `assets/audio/${cleanPath}`;

      if (
        typeof chrome !== "undefined" &&
        chrome.runtime &&
        typeof chrome.runtime.getURL === "function"
      ) {
        try {
          return chrome.runtime.getURL(assetPath);
        } catch (_) {
          // Extension context invalidated after reload; page refresh required
          return null;
        }
      }
      return assetPath;
    }

    /**
     * Emits a standardized voice state event on window.
     * @param {boolean} speaking
     * @param {Object} [extra]
     */
    emitState(speaking, extra = {}) {
      window.dispatchEvent(
        new CustomEvent("safinum-voice-state", {
          detail: { speaking, ...extra }
        })
      );
    }

    /**
     * Halts any active audio playback, number stitching, and sequence timers.
     */
    stop() {
      this.playbackToken++;
      if (this.sequenceTimer) {
        clearTimeout(this.sequenceTimer);
        this.sequenceTimer = null;
      }
      if (
        typeof window !== "undefined" &&
        window.safinumNumberEngine &&
        typeof window.safinumNumberEngine.stop === "function"
      ) {
        try {
          window.safinumNumberEngine.stop();
        } catch (_) {
          // Ignore number engine teardown errors
        }
      }
      if (this.activeAudio) {
        try {
          this.activeAudio.onended = null;
          this.activeAudio.onerror = null;
          this.activeAudio.pause();
          this.activeAudio.currentTime = 0;
          this.activeAudio.src = "";
        } catch (_) {
          // Ignore teardown errors on detached Audio elements
        }
        this.activeAudio = null;
      }
      if (this.isSpeaking) {
        this.isSpeaking = false;
        this.emitState(false);
      }
    }

    /**
     * Speaks a numeric financial amount (0 to 999,999,999 FCFA) using gapless
     * Web Audio number stitching (`safinumNumberEngine`).
     * @param {number|string} amount - Monetary amount
     * @param {Object} [options]
     * @returns {Promise<void>}
     */
    async speakAmount(amount, options = {}) {
      this.stop();
      const numEngine = typeof window !== "undefined" ? window.safinumNumberEngine : null;
      if (!numEngine || typeof numEngine.speakAmount !== "function") {
        this.emitState(false, { missingAudio: true });
        return;
      }
      const lang = options.lang || "eto";
      this.isSpeaking = true;
      this.emitState(true, { amount, lang });
      try {
        await numEngine.speakAmount(amount, {
          ...options,
          lang,
          onEnded: () => {
            this.isSpeaking = false;
            this.emitState(false, { amount, lang });
            if (typeof options.onEnded === "function") options.onEnded();
          },
          onError: (err) => {
            this.isSpeaking = false;
            this.emitState(false, { amount, lang });
            if (typeof options.onError === "function") options.onError(err);
          }
        });
      } catch (err) {
        this.isSpeaking = false;
        this.emitState(false, { amount, lang });
        if (typeof options.onError === "function") options.onError(err);
      }
    }

    /**
     * Plays a single bundled .webm audio file.
     * @param {string} audioPath - Relative path under assets/audio/
     * @param {Object} [options]
     * @param {string} [options.displayText] - Text associated with this audio
     * @param {number} [options.rate] - Playback rate (default: this.playbackRate)
     * @param {Function} [options.onStart]
     * @param {Function} [options.onEnd]
     * @param {Function} [options.onError]
     * @returns {Promise<boolean>} Resolves true if played to completion, false if skipped/stopped
     */
    playAudio(audioPath, options = {}) {
      this.stop();
      const token = this.playbackToken;
      return this._playSingle(audioPath, token, options);
    }

    /**
     * Internal single-file player bound to a monotonic cancellation token.
     * @private
     */
    _playSingle(audioPath, token, options = {}) {
      const url = this.resolveAudioUrl(audioPath);
      if (!url) {
        this.isSpeaking = false;
        this.emitState(false, { missingAudio: true, text: options.displayText || "" });
        if (typeof options.onError === "function") {
          options.onError(new Error("Missing audio path"));
        }
        return Promise.resolve(false);
      }

      return new Promise((resolve) => {
        if (token !== this.playbackToken) {
          resolve(false);
          return;
        }

        const audio = new Audio(url);
        audio.playbackRate = options.rate || this.playbackRate;
        this.activeAudio = audio;

        const finish = (completed, err = null) => {
          if (this.activeAudio === audio) {
            this.activeAudio = null;
          }
          if (token !== this.playbackToken) {
            resolve(false);
            return;
          }
          this.isSpeaking = false;
          this.emitState(false, { text: options.displayText || "" });
          if (err && typeof options.onError === "function") {
            options.onError(err);
          } else if (completed && typeof options.onEnd === "function") {
            options.onEnd();
          }
          resolve(completed);
        };

        audio.onended = () => finish(true);
        audio.onerror = (e) => {
          console.warn("[Maloba VoiceEngine] Audio playback error:", url, e);
          finish(false, e);
        };

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise
            .then(() => {
              if (token !== this.playbackToken) return;
              this.isSpeaking = true;
              this.emitState(true, { text: options.displayText || "" });
              if (typeof options.onStart === "function") options.onStart();
            })
            .catch((err) => {
              console.warn("[Maloba VoiceEngine] audio.play() rejected:", err);
              finish(false, err);
            });
        } else {
          this.isSpeaking = true;
          this.emitState(true, { text: options.displayText || "" });
          if (typeof options.onStart === "function") options.onStart();
        }
      });
    }

    /**
     * Plays a phrase's audio followed by its pedagogical explanation audio.
     * @param {Object} entry - Translation record from SafinumContextGraph
     * @param {string} [lang="eto"] - Active language ISO code
     * @param {Object} [options] - Optional rate/callbacks
     */
    async speakPhraseAndExplanation(entry, lang = "eto", options = {}) {
      if (!entry) return;
      if (typeof entry.numericAmount === "number") {
        await this.speakAmount(entry.numericAmount, {
          ...options,
          lang,
          includeCurrency: entry.hasCurrency !== false
        });
        return;
      }
      this.stop();
      const token = this.playbackToken;

      const langData = (entry.languages && entry.languages[lang]) || {};
      const phraseAudio = langData.audio || entry.audio || null;
      const explainAudio = langData.explain_audio || entry.explain_audio || null;
      const displayText = langData.text || entry[lang] || entry.original || "";

      if (phraseAudio) {
        const ok = await this._playSingle(phraseAudio, token, {
          ...options,
          displayText
        });
        if (!ok || token !== this.playbackToken) return;
      }

      if (explainAudio && explainAudio !== phraseAudio) {
        // Brief natural pause between UI label and pedagogical explanation
        await new Promise((res) => {
          this.sequenceTimer = setTimeout(res, 320);
        });
        if (token !== this.playbackToken) return;

        await this._playSingle(explainAudio, token, {
          ...options,
          displayText: langData.explain_text || entry[`explain_${lang}`] || displayText
        });
      } else if (!phraseAudio) {
        this.emitState(false, { missingAudio: true, text: displayText });
      }
    }

    /**
     * Sets global playback speed (e.g. 1.0 normal, 0.8 slow).
     * @param {number} rate
     */
    setPlaybackRate(rate) {
      const clamped = Math.min(1.5, Math.max(0.6, Number(rate) || 1.0));
      this.playbackRate = clamped;
      if (this.activeAudio) {
        this.activeAudio.playbackRate = clamped;
      }
    }
  }

  window.SafinumVoiceEngine = new SafinumVoiceEngine();
})();

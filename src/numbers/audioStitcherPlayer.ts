/**
 * =============================================================================
 * SAFINUM WEB NUMBER ENGINE — GAPLESS WEB AUDIO STITCHER & PLAYER
 * =============================================================================
 * File: audioStitcherPlayer.ts
 * Target: Chrome Extension (Manifest V3)
 *
 * High-performance gapless audio stitching player engineered for pre-recorded
 * silence-trimmed (-14 LUFS) .ogg number segments.
 *
 * Key Capabilities:
 *   - Sample-accurate gapless scheduling via Web Audio API (AudioContext +
 *     AudioBufferSourceNode) with automatic fallback to preloaded HTML5 Audio.
 *   - In-memory decoded AudioBuffer cache + in-flight request deduplication
 *     for zero-latency playback on repeated keys and subsequent calls.
 *   - Instant deterministic cancellation (`stop()`) when a new playback starts
 *     or user halts speech.
 *   - Lifecycle event callbacks: `onStart()`, `onSegmentChange(key, index)`,
 *     `onEnded()`, and `onError(error, key)`.
 *   - Strict Manifest V3 asset resolution via:
 *     `chrome.runtime.getURL('assets/audio/' + lang + '/' + key + '.ogg')`
 *
 * All comments and documentation are strictly in English.
 * =============================================================================
 */

import { AUDIO_KEY_LEXICON, AudioKey } from "./numberDecomposer";

/**
 * Minimal type definition for Chrome Extension Manifest V3 runtime API
 * to guarantee zero `any` usage without requiring external @types/chrome.
 */
interface ChromeRuntimeAPI {
  getURL(path: string): string;
}

interface ChromeNamespace {
  runtime?: ChromeRuntimeAPI;
}

declare const chrome: ChromeNamespace | undefined;

/**
 * Event callbacks emitted during gapless sequence playback.
 */
export interface AudioStitcherCallbacks {
  /** Invoked immediately when sequence playback starts. */
  onStart?: () => void;
  /** Invoked as each audio segment begins playing. */
  onSegmentChange?: (key: string, index: number) => void;
  /** Invoked when the entire sequence completes naturally. */
  onEnded?: () => void;
  /** Invoked if an audio segment fails to load or decode. */
  onError?: (error: Error, key?: string) => void;
}

/**
 * Configuration options for AudioStitcherPlayer.
 */
export interface AudioStitcherOptions {
  /** Default lifecycle callbacks. */
  readonly callbacks?: AudioStitcherCallbacks;
  /** Custom asset path resolver (defaults to Chrome MV3 runtime.getURL rule). */
  readonly assetResolver?: (key: string, lang: string) => string;
  /** Playback rate multiplier (1.0 = normal speed). */
  readonly playbackRate?: number;
}

/**
 * Resolves an audio key and language code to its Chrome Extension Manifest V3 asset URL.
 * Strictly adheres to: `chrome.runtime.getURL('assets/audio/' + lang + '/' + key + '.ogg')`
 *
 * @param key - Canonical audio key (e.g., 'num_20', 'scale_thousand')
 * @param lang - Target language ISO code (e.g., 'fub', 'ewo')
 * @returns Resolved full URL to the .ogg audio resource
 */
export function resolveAudioAssetUrl(key: string, lang: string): string {
  const safeLang = (lang || "fub").trim().toLowerCase();
  const safeKey = key.trim();
  const relativePath = safeKey.endsWith(".webm")
    ? "assets/audio/" + safeKey.replace(/^\/+/, "")
    : "assets/audio/" + safeLang + "/" + safeKey + ".ogg";

  if (
    typeof chrome !== "undefined" &&
    chrome !== null &&
    typeof chrome.runtime !== "undefined" &&
    typeof chrome.runtime.getURL === "function"
  ) {
    return chrome.runtime.getURL(relativePath);
  }

  return relativePath;
}

/**
 * Gapless Web Audio API stitcher with in-memory AudioBuffer caching and
 * preloaded HTMLAudioElement fallback.
 */
export class AudioStitcherPlayer {
  private audioContext: AudioContext | null = null;
  private readonly bufferCache: Map<string, AudioBuffer> = new Map<string, AudioBuffer>();
  private readonly inFlightLoads: Map<string, Promise<AudioBuffer>> = new Map<
    string,
    Promise<AudioBuffer>
  >();
  private activeSourceNodes: AudioBufferSourceNode[] = [];
  private activeHtmlAudios: HTMLAudioElement[] = [];
  private activeAbortController: AbortController | null = null;
  private pendingResolve: (() => void) | null = null;
  private sessionId: number = 0;
  private _isPlaying: boolean = false;
  private callbacks: AudioStitcherCallbacks;
  private readonly assetResolver: (key: string, lang: string) => string;
  private playbackRate: number;

  constructor(options?: AudioStitcherOptions) {
    this.callbacks = { ...(options?.callbacks ?? {}) };
    this.assetResolver = options?.assetResolver ?? resolveAudioAssetUrl;
    this.playbackRate = options?.playbackRate ?? 1.0;
  }

  /**
   * Indicates whether an audio sequence is currently playing.
   */
  public get isPlaying(): boolean {
    return this._isPlaying;
  }

  /**
   * Returns the number of decoded AudioBuffers currently stored in the in-memory cache.
   */
  public get cachedBufferCount(): number {
    return this.bufferCache.size;
  }

  /**
   * Updates lifecycle callbacks dynamically.
   *
   * @param callbacks - Partial or complete callback set
   */
  public setCallbacks(callbacks: AudioStitcherCallbacks): void {
    this.callbacks = { ...this.callbacks, ...callbacks };
  }

  /**
   * Lazily initializes or resumes the shared Web Audio API AudioContext.
   */
  private async ensureAudioContext(): Promise<AudioContext> {
    if (!this.audioContext) {
      const AudioCtxConstructor: typeof AudioContext | undefined =
        typeof window !== "undefined"
          ? window.AudioContext ||
            (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
          : undefined;

      if (!AudioCtxConstructor) {
        throw new Error("[SafinumWebNumberEngine] Web Audio API is not supported in this environment.");
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
   */
  private getCacheKey(lang: string, key: string): string {
    return `${lang.trim().toLowerCase()}:${key.trim()}`;
  }

  /**
   * Loads and decodes a single .ogg file into an AudioBuffer, utilizing the
   * in-memory cache and deduplicating concurrent requests for the same key.
   *
   * @param key - Canonical audio key
   * @param lang - Language ISO code
   * @param signal - Optional AbortSignal for cancellation
   * @returns Decoded AudioBuffer
   */
  private async loadAudioBuffer(
    key: string,
    lang: string,
    signal?: AbortSignal
  ): Promise<AudioBuffer> {
    const cacheKey = this.getCacheKey(lang, key);
    const cached = this.bufferCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const existingPromise = this.inFlightLoads.get(cacheKey);
    if (existingPromise) {
      return existingPromise;
    }

    const loadPromise = (async (): Promise<AudioBuffer> => {
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
   * Preloads an array of audio keys into the in-memory AudioBuffer cache
   * to guarantee zero latency on first playback.
   *
   * @param lang - Target language ISO code
   * @param keys - Keys to preload
   */
  public async preloadKeys(lang: string, keys: readonly string[]): Promise<void> {
    const uniqueKeys = Array.from(new Set(keys));
    await Promise.allSettled(uniqueKeys.map((k) => this.loadAudioBuffer(k, lang)));
  }

  /**
   * Clears the in-memory decoded AudioBuffer cache.
   */
  public clearCache(): void {
    this.bufferCache.clear();
    this.inFlightLoads.clear();
  }

  /**
   * Immediately halts any active or pending playback and cleans up audio nodes.
   */
  public stop(): void {
    this.sessionId += 1;

    if (this.activeAbortController) {
      try {
        this.activeAbortController.abort();
      } catch {
        // Ignore abort errors
      }
      this.activeAbortController = null;
    }

    // Stop and disconnect all scheduled Web Audio source nodes
    for (const node of this.activeSourceNodes) {
      try {
        node.onended = null;
        node.stop();
      } catch {
        // Node may have already ended or not started
      }
      try {
        node.disconnect();
      } catch {
        // Ignore disconnect errors
      }
    }
    this.activeSourceNodes = [];

    // Stop any fallback HTML5 Audio elements
    for (const audio of this.activeHtmlAudios) {
      try {
        audio.onended = null;
        audio.onerror = null;
        audio.pause();
        audio.currentTime = 0;
      } catch {
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
   * Automatically cancels any currently playing sequence before starting.
   *
   * @param audioKeys - Ordered array of canonical audio keys
   * @param lang - Language ISO code (e.g., 'fub', 'ewo', 'fr')
   * @param perCallCallbacks - Optional callbacks specific to this playback invocation
   * @returns Promise that resolves when playback finishes or is cancelled
   */
  public async playSequence(
    audioKeys: string[],
    lang: string,
    perCallCallbacks?: AudioStitcherCallbacks
  ): Promise<void> {
    // Cancel any existing playback immediately
    this.stop();

    if (!Array.isArray(audioKeys) || audioKeys.length === 0) {
      return;
    }

    const currentSession = ++this.sessionId;
    const abortController = new AbortController();
    this.activeAbortController = abortController;
    this._isPlaying = true;

    const mergedCallbacks: AudioStitcherCallbacks = {
      onStart: perCallCallbacks?.onStart ?? this.callbacks.onStart,
      onSegmentChange: perCallCallbacks?.onSegmentChange ?? this.callbacks.onSegmentChange,
      onEnded: perCallCallbacks?.onEnded ?? this.callbacks.onEnded,
      onError: perCallCallbacks?.onError ?? this.callbacks.onError
    };

    try {
      // Decode all required AudioBuffers in parallel (deduplicated & cached)
      const buffers = await Promise.all(
        audioKeys.map((key) => this.loadAudioBuffer(key, lang, abortController.signal))
      );

      // Verify session was not cancelled while buffers were loading
      if (currentSession !== this.sessionId) {
        return;
      }

      const ctx = await this.ensureAudioContext();
      if (currentSession !== this.sessionId) {
        return;
      }

      await this.scheduleGaplessBuffers(ctx, audioKeys, buffers, currentSession, mergedCallbacks);
    } catch (err) {
      if (currentSession !== this.sessionId) {
        return;
      }

      // Attempt preloaded HTML5 Audio queue fallback if Web Audio fetch/decode failed
      try {
        await this.playWithHtmlAudioFallback(audioKeys, lang, currentSession, mergedCallbacks);
      } catch (fallbackErr) {
        if (currentSession !== this.sessionId) {
          return;
        }
        // Final resilience fallback: Web Speech API phonetic synthesis using AUDIO_KEY_LEXICON
        await this.playWithPhoneticSpeechFallback(audioKeys, lang, currentSession, mergedCallbacks);
        const normalizedError =
          fallbackErr instanceof Error ? fallbackErr : new Error(String(err));
        mergedCallbacks.onError?.(normalizedError);
      }
    }
  }

  /**
   * Schedules decoded AudioBuffers back-to-back on the hardware audio clock
   * for zero-gap sample-accurate playback.
   */
  private scheduleGaplessBuffers(
    ctx: AudioContext,
    audioKeys: string[],
    buffers: AudioBuffer[],
    currentSession: number,
    callbacks: AudioStitcherCallbacks
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      this.pendingResolve = resolve;

      const rate = this.playbackRate > 0 ? this.playbackRate : 1.0;
      // Small 12ms lookahead ensures the first node starts cleanly without clipping
      let cursorTime = ctx.currentTime + 0.012;
      const nodes: AudioBufferSourceNode[] = [];

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
            callbacks.onSegmentChange?.(audioKeys[nextIndex], nextIndex);
          } else {
            // Final segment finished
            this._isPlaying = false;
            this.activeSourceNodes = [];
            this.pendingResolve = null;
            callbacks.onEnded?.();
            resolve();
          }
        };

        source.start(cursorTime);
        cursorTime += buffer.duration / rate;
        nodes.push(source);
      }

      this.activeSourceNodes = nodes;

      // Emit initial lifecycle events
      callbacks.onStart?.();
      callbacks.onSegmentChange?.(audioKeys[0], 0);
    });
  }

  /**
   * Secondary fallback using preloaded HTMLAudioElement instances.
   */
  private playWithHtmlAudioFallback(
    audioKeys: string[],
    lang: string,
    currentSession: number,
    callbacks: AudioStitcherCallbacks
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.pendingResolve = resolve;

      const elements: HTMLAudioElement[] = audioKeys.map((key) => {
        const audio = new Audio(this.assetResolver(key, lang));
        audio.preload = "auto";
        audio.playbackRate = this.playbackRate > 0 ? this.playbackRate : 1.0;
        audio.load();
        return audio;
      });

      this.activeHtmlAudios = elements;
      let currentIndex = 0;

      const playNext = (): void => {
        if (currentSession !== this.sessionId) {
          resolve();
          return;
        }

        if (currentIndex >= elements.length) {
          this._isPlaying = false;
          this.activeHtmlAudios = [];
          this.pendingResolve = null;
          callbacks.onEnded?.();
          resolve();
          return;
        }

        const idx = currentIndex;
        const currentAudio = elements[idx];
        callbacks.onSegmentChange?.(audioKeys[idx], idx);

        currentAudio.onended = () => {
          currentIndex += 1;
          playNext();
        };

        currentAudio.onerror = () => {
          this.pendingResolve = null;
          reject(new Error(`HTMLAudioElement failed to play key "${audioKeys[idx]}"`));
        };

        currentAudio.play().catch((err: unknown) => {
          this.pendingResolve = null;
          reject(err instanceof Error ? err : new Error(String(err)));
        });
      };

      callbacks.onStart?.();
      playNext();
    });
  }

  /**
   * Tertiary fallback that uses the browser's SpeechSynthesis with our exact
   * national-language phonetic transcription if an audio file is unavailable.
   */
  private playWithPhoneticSpeechFallback(
    audioKeys: string[],
    lang: string,
    currentSession: number,
    callbacks: AudioStitcherCallbacks
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        this._isPlaying = false;
        resolve();
        return;
      }

      this.pendingResolve = resolve;
      const dict = AUDIO_KEY_LEXICON[lang] || AUDIO_KEY_LEXICON.fub;
      const spokenSentence = audioKeys
        .map((k) => {
          const entry = dict[k as AudioKey] || AUDIO_KEY_LEXICON.fub[k as AudioKey];
          return entry ? entry.phonetic : k;
        })
        .join(" ");

      const utterance = new SpeechSynthesisUtterance(spokenSentence);
      utterance.lang = "fr-FR";
      utterance.rate = 0.92;

      utterance.onstart = () => {
        if (currentSession !== this.sessionId) return;
        callbacks.onStart?.();
        callbacks.onSegmentChange?.(audioKeys[0], 0);
      };

      utterance.onend = () => {
        if (currentSession !== this.sessionId) return;
        this._isPlaying = false;
        this.pendingResolve = null;
        callbacks.onEnded?.();
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


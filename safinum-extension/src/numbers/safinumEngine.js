/**
 * =============================================================================
 * SAFINUM WEB NUMBER ENGINE — MAIN FACADE & PUBLIC API (JS RUNTIME)
 * =============================================================================
 * File: safinumEngine.js
 * Target: Chrome Extension (Manifest V3) & Node/CommonJS Test Runner
 *
 * Main facade coordinating `numberDecomposer.js` and `audioStitcherPlayer.js`
 * to provide gapless Number-to-Speech synthesis for financial amounts from
 * 0 up to 999,999,999 FCFA across Cameroonian national languages.
 *
 * Exposes:
 *   - `speakAmount(amount, options)`
 *   - `stop()`
 *   - `isPlaying` (getter)
 *   - `decompose(amount, options)`
 *   - `toWords(amount, options)`
 *   - `parseAmount(rawInput)`
 *   - `preload(lang)`
 *
 * All comments and documentation are strictly in English.
 * =============================================================================
 */

(function (root) {
  "use strict";

  const decomposer =
    (typeof root !== "undefined" && root.SafinumNumberDecomposer) ||
    (typeof require === "function" ? require("./numberDecomposer.js") : {});

  const stitcher =
    (typeof root !== "undefined" && root.SafinumAudioStitcher) ||
    (typeof require === "function" ? require("./audioStitcherPlayer.js") : {});

  const {
    ALL_AUDIO_KEYS,
    validateAmount,
    parseNumericAmount,
    decomposeNumber,
    formatKeysToText
  } = decomposer;

  const { AudioStitcherPlayer } = stitcher;

  const EXACT_ETON_RECORDINGS = Object.freeze({
    2000: "eton/saf_num_028_take1_8c391d57.webm",
    2500: "eton/saf_num_008_take1_e3f95f93.webm",
    5000: "eton/saf_num_010_take1_bce4cdc0.webm",
    7500: "eton/saf_num_006_take1_cbda9317.webm",
    10000: "eton/saf_num_029_take1_58473ec1.webm",
    12500: "eton/saf_num_003_take1_701fc666.webm",
    15000: "eton/saf_num_002_take1_e39d0bd7.webm",
    20000: "eton/saf_num_030_take1_6633d352.webm",
    50000: "eton/saf_num_005_take3_0be66162.webm",
    100000: "eton/saf_num_031_take1_0ed75cce.webm",
    180000: "eton/saf_num_004_take1_8ad0c5a2.webm",
    250000: "eton/saf_num_001_take1_f4c3ff7e.webm",
    500000: "eton/saf_num_032_take1_5d35a666.webm",
    1000000: "eton/saf_num_033_take1_b103abb4.webm"
  });

  /**
   * Production-ready Number-to-Speech Engine (`SafinumWebNumberEngine`).
   */
  class SafinumWebNumberEngine {
    constructor(options) {
      const opts = options || {};
      this.defaultLang = opts.defaultLang || "eto";
      const userCallbacks = opts.callbacks || {};

      this.player = new AudioStitcherPlayer(
        Object.assign({}, opts, {
          callbacks: {
            onStart: () => {
              this.dispatchStateEvent({ speaking: true });
              if (typeof userCallbacks.onStart === "function") userCallbacks.onStart();
            },
            onSegmentChange: (key, index) => {
              this.dispatchStateEvent({
                speaking: true,
                currentKey: key,
                segmentIndex: index
              });
              if (typeof userCallbacks.onSegmentChange === "function") {
                userCallbacks.onSegmentChange(key, index);
              }
            },
            onEnded: () => {
              this.dispatchStateEvent({ speaking: false });
              if (typeof userCallbacks.onEnded === "function") userCallbacks.onEnded();
            },
            onError: (error, key) => {
              this.dispatchStateEvent({
                speaking: false,
                error: error ? error.message : "Audio error",
                failedKey: key
              });
              if (typeof userCallbacks.onError === "function") {
                userCallbacks.onError(error, key);
              }
            }
          }
        })
      );
    }

    /**
     * Returns true if the engine is currently playing a number audio sequence.
     * @returns {boolean}
     */
    get isPlaying() {
      return this.player.isPlaying;
    }

    /**
     * Returns the number of decoded AudioBuffers currently cached in memory.
     * @returns {number}
     */
    get cachedBufferCount() {
      return this.player.cachedBufferCount;
    }

    /**
     * Decomposes an integer amount (0 to 999,999,999) into its ordered audio keys
     * and plays them gaplessly in the target language.
     *
     * @param {number} amount - Integer amount in [0, 999,999,999]
     * @param {{ lang?: string, includeCurrency?: boolean, onStart?: Function, onSegmentChange?: Function, onEnded?: Function }} [options]
     * @returns {Promise<void>}
     */
    async speakAmount(amount, options) {
      const opts = options || {};
      const validAmount = validateAmount(amount);
      const lang = String(opts.lang || this.defaultLang)
        .trim()
        .toLowerCase();
      const includeCurrency =
        typeof opts.includeCurrency === "boolean" ? opts.includeCurrency : true;

      const exactEtonRecording = lang === "eto" ? EXACT_ETON_RECORDINGS[validAmount] : undefined;
      const audioKeys = exactEtonRecording
        ? [exactEtonRecording]
        : decomposeNumber(validAmount, { includeCurrency });

      const callbacks = {
        onStart: () => {
          this.dispatchStateEvent({
            speaking: true,
            amount: validAmount,
            lang,
            keys: audioKeys
          });
          if (typeof opts.onStart === "function") opts.onStart();
        },
        onSegmentChange: (key, index) => {
          this.dispatchStateEvent({
            speaking: true,
            amount: validAmount,
            lang,
            currentKey: key,
            segmentIndex: index,
            keys: audioKeys
          });
          if (typeof opts.onSegmentChange === "function") {
            opts.onSegmentChange(key, index);
          }
        },
        onEnded: () => {
          this.dispatchStateEvent({
            speaking: false,
            amount: validAmount,
            lang
          });
          if (typeof opts.onEnded === "function") opts.onEnded();
        }
      };

      await this.player.playSequence(audioKeys, lang, callbacks);
    }

    /**
     * Immediately halts any active number audio playback.
     */
    stop() {
      this.player.stop();
      this.dispatchStateEvent({ speaking: false });
    }

    /**
     * Exposes the pure decomposition algorithm returning the ordered array of audio keys.
     * @param {number} amount
     * @param {{ includeCurrency?: boolean }} [options]
     * @returns {string[]}
     */
    decompose(amount, options) {
      return decomposeNumber(amount, options);
    }

    /**
     * Converts a numeric amount into its written or phonetic representation in the target language.
     * @param {number} amount
     * @param {{ lang?: string, includeCurrency?: boolean, phonetic?: boolean }} [options]
     * @returns {string}
     */
    toWords(amount, options) {
      const opts = options || {};
      const keys = decomposeNumber(amount, {
        includeCurrency: typeof opts.includeCurrency === "boolean" ? opts.includeCurrency : true
      });
      return formatKeysToText(keys, opts.lang || this.defaultLang, Boolean(opts.phonetic));
    }

    /**
     * Parses a formatted currency string (e.g., "250 000 FCFA") into a validated integer.
     * @param {string|number} rawInput
     * @returns {number|null}
     */
    parseAmount(rawInput) {
      return parseNumericAmount(rawInput);
    }

    /**
     * Preloads the 42 canonical audio files for a given language into the in-memory AudioBuffer cache.
     * @param {string} [lang]
     * @returns {Promise<void>}
     */
    async preload(lang) {
      const targetLang = String(lang || this.defaultLang)
        .trim()
        .toLowerCase();
      await this.player.preloadKeys(targetLang, ALL_AUDIO_KEYS);
    }

    /**
     * Dispatches a browser CustomEvent for UI synchronization.
     * @param {Object} detail
     */
    dispatchStateEvent(detail) {
      if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
        window.dispatchEvent(new CustomEvent("safinum-number-speech-state", { detail }));
      }
    }
  }

  const singleton = new SafinumWebNumberEngine();

  const exported = {
    SafinumWebNumberEngine,
    safinumNumberEngine: singleton
  };

  if (typeof root !== "undefined") {
    root.SafinumWebNumberEngine = SafinumWebNumberEngine;
    root.safinumNumberEngine = singleton;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);


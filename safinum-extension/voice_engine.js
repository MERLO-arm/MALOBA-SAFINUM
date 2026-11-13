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

  /**
   * Canonical monetary amounts and digits recorded with Muriel Menye's real human voice (.webm).
   * Maps integer amount -> verified audio asset path and authentic Eton transcription.
   */
  const SAFINUM_HUMAN_AMOUNTS = {
    eto: {
      250000: {
        text: "Ǹtɛd twágsîn íbā ee twágsîn mintɛd mítān.",
        audio: "eton/saf_num_001_take1_f4c3ff7e.webm",
        code: "SAF_NUM_001"
      },
      15000: {
        text: "Twágsîn ɛwóm ee ítān",
        audio: "eton/saf_num_002_take1_e39d0bd7.webm",
        code: "SAF_NUM_002"
      },
      12500: {
        text: "Twágsîn ewóm ee íbā ee mintɛd mítān",
        audio: "eton/saf_num_003_take1_701fc666.webm",
        code: "SAF_NUM_003"
      },
      180000: {
        text: "Ǹtɛd twágsîn ee twágsîn mǝwóm ŋmâm.",
        audio: "eton/saf_num_004_take1_8ad0c5a2.webm",
        code: "SAF_NUM_004"
      },
      50000: {
        text: "Twágsîn mǝwóm tān",
        audio: "eton/saf_num_005_take3_0be66162.webm",
        code: "SAF_NUM_005"
      },
      7500: {
        text: "Twágsîn zaŋmál ee mintɛd mítān",
        audio: "eton/saf_num_006_take1_cbda9317.webm",
        code: "SAF_NUM_006"
      },
      100: {
        text: "Ǹtɛd",
        audio: "eton/saf_num_007_take1_8bdcf75c.webm",
        code: "SAF_NUM_007"
      },
      2500: {
        text: "Twágsîn íbā ee mintɛd mítān.",
        audio: "eton/saf_num_008_take1_e3f95f93.webm",
        code: "SAF_NUM_008"
      },
      200: {
        text: "Mintɛd míbā",
        audio: "eton/saf_num_009_take1_c6ca4715.webm",
        code: "SAF_NUM_009"
      },
      5000: {
        text: "Twágsîn ítān",
        audio: "eton/saf_num_010_take1_bce4cdc0.webm",
        code: "SAF_NUM_010"
      },
      0: {
        text: "zǝzǝ",
        audio: "eton/saf_num_011_take1_3a14d384.webm",
        code: "SAF_NUM_011"
      },
      1: {
        text: "Pwág",
        audio: "eton/saf_num_017_take1_3df57171.webm",
        code: "SAF_NUM_017"
      },
      2: {
        text: "bā",
        audio: "eton/saf_num_018_take1_1fa5a8b2.webm",
        code: "SAF_NUM_018"
      },
      3: {
        text: "lāá",
        audio: "eton/saf_num_019_take1_ad682116.webm",
        code: "SAF_NUM_019"
      },
      4: {
        text: "na",
        audio: "eton/saf_num_020_take1_40c8e5ae.webm",
        code: "SAF_NUM_020"
      },
      5: {
        text: "tán",
        audio: "eton/saf_num_021_take1_54d34059.webm",
        code: "SAF_NUM_021"
      },
      6: {
        text: "samna",
        audio: "eton/saf_num_022_take1_7c84389a.webm",
        code: "SAF_NUM_022"
      },
      7: {
        text: "zaŋmál",
        audio: "eton/saf_num_023_take1_b1ac2cf3.webm",
        code: "SAF_NUM_023"
      },
      8: {
        text: "ŋmam",
        audio: "eton/saf_num_024_take1_899346b5.webm",
        code: "SAF_NUM_024"
      },
      9: {
        text: "ibuu",
        audio: "eton/saf_num_025_take1_3c0ea601.webm",
        code: "SAF_NUM_025"
      },
      1000: {
        text: "Twágsîn",
        audio: "eton/saf_num_027_take1_2ed37687.webm",
        code: "SAF_NUM_027"
      },
      2000: {
        text: "Twágsîn íbā",
        audio: "eton/saf_num_028_take1_8c391d57.webm",
        code: "SAF_NUM_028"
      },
      10000: {
        text: "Twágsîn ɛwóm",
        audio: "eton/saf_num_029_take1_58473ec1.webm",
        code: "SAF_NUM_029"
      },
      20000: {
        text: "Twágsîn mǝwóm bā",
        audio: "eton/saf_num_030_take1_6633d352.webm",
        code: "SAF_NUM_030"
      },
      100000: {
        text: "Ǹtɛd twágsîn",
        audio: "eton/saf_num_031_take1_0ed75cce.webm",
        code: "SAF_NUM_031"
      },
      500000: {
        text: "Ǹtɛd twágsîn ítān",
        audio: "eton/saf_num_032_take1_5d35a666.webm",
        code: "SAF_NUM_032"
      },
      1000000: {
        text: "Miliɔ́ŋ mwág",
        audio: "eton/saf_num_033_take1_b103abb4.webm",
        code: "SAF_NUM_033"
      },
      15225: {
        text: "Táŋ i mwání : twágsîn ewóm ee mintɛd míbā ee mǝwóm bā ee ítān",
        audio: "eton/saf_num_034_take1_e759c9d4.webm",
        code: "SAF_NUM_034"
      },
      234775: {
        text: "Táŋ i mwání : Ǹtɛd twágsîn íbā ee twágsîn mǝwóm lā ee mintɛd zaŋmál ee mǝwóm zaŋmál ee ítān",
        audio: "eton/saf_num_035_take1_bc347470.webm",
        code: "SAF_NUM_035"
      }
    }
  };

  if (typeof window !== "undefined") {
    window.SafinumHumanAmounts = SAFINUM_HUMAN_AMOUNTS;
  }

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
      const opts = typeof options === "string" ? { lang: options } : (options || {});
      const lang = opts.lang || "eto";
      const cleanNum =
        typeof amount === "number"
          ? amount
          : parseInt(String(amount).replace(/[^\d]/g, ""), 10);

      // 1. Prioritize exact authentic human-recorded audio (.webm) if available
      const humanRecordings = SAFINUM_HUMAN_AMOUNTS[lang] || SAFINUM_HUMAN_AMOUNTS.eto;
      if (humanRecordings && !isNaN(cleanNum) && humanRecordings[cleanNum]) {
        const humanItem = humanRecordings[cleanNum];
        return this.playAudio(humanItem.audio, {
          displayText: humanItem.text,
          rate: opts.rate || this.playbackRate,
          onStart: opts.onStart,
          onEnd: opts.onEnded,
          onError: opts.onError
        });
      }

      // 2. Compose from authentic Muriel Menye .webm recordings for round/composite banking amounts (e.g. 25 000, 225 000)
      if (humanRecordings && !isNaN(cleanNum) && cleanNum > 0) {
        const segments = this._composeHumanSegments(cleanNum, humanRecordings);
        if (segments && segments.length > 0) {
          return this.playAudioSequence(segments, {
            rate: opts.rate || this.playbackRate,
            onStart: opts.onStart,
            onEnd: opts.onEnded,
            onError: opts.onError
          });
        }
      }

      // 3. Fall back to gapless number stitcher for uncatalogued amounts
      const numEngine = typeof window !== "undefined" ? window.safinumNumberEngine : null;
      if (!numEngine || typeof numEngine.speakAmount !== "function") {
        this.emitState(false, { missingAudio: true });
        return;
      }
      this.isSpeaking = true;
      this.emitState(true, { amount, lang });
      try {
        await numEngine.speakAmount(amount, {
          ...opts,
          lang,
          onEnded: () => {
            this.isSpeaking = false;
            this.emitState(false, { amount, lang });
            if (typeof opts.onEnded === "function") opts.onEnded();
          },
          onError: (err) => {
            this.isSpeaking = false;
            this.emitState(false, { amount, lang });
            if (typeof opts.onError === "function") opts.onError(err);
          }
        });
      } catch (err) {
        this.isSpeaking = false;
        this.emitState(false, { amount, lang });
        if (typeof opts.onError === "function") opts.onError(err);
      }
    }

    /**
     * Decomposes an amount into exact recorded human denominations when possible
     * so composite banking amounts (e.g. 25 000, 30 000, 150 000) use Muriel Menye's real voice.
     * @private
     */
    _composeHumanSegments(amount, humanRecordings) {
      const denoms = [
        1000000, 500000, 100000, 50000, 20000, 10000,
        5000, 2000, 1000, 200, 100, 9, 8, 7, 6, 5, 4, 3, 2, 1
      ];
      let remaining = Math.floor(amount);
      const parts = [];
      for (const d of denoms) {
        if (!humanRecordings[d]) continue;
        while (remaining >= d) {
          parts.push(humanRecordings[d]);
          remaining -= d;
          if (parts.length > 12) return null; // Too fragmented; let full stitcher handle
        }
      }
      return remaining === 0 && parts.length > 0 ? parts : null;
    }

    /**
     * Plays a sequence of bundled .webm human recordings back-to-back.
     */
    async playAudioSequence(items, options = {}) {
      this.stop();
      const token = this.playbackToken;
      if (!Array.isArray(items) || items.length === 0) return false;
      if (typeof options.onStart === "function") options.onStart();
      for (let i = 0; i < items.length; i++) {
        if (token !== this.playbackToken) return false;
        const item = items[i];
        const ok = await this._playSingle(item.audio, token, {
          displayText: item.text,
          rate: options.rate || this.playbackRate,
          onError: options.onError
        });
        if (!ok || token !== this.playbackToken) return false;
      }
      if (typeof options.onEnd === "function") options.onEnd();
      return true;
    }

    /**
     * Reads a digit sequence (account number, date digits, phone number) in Eton
     * using Muriel Menye's real .webm digit recordings (0-9).
     * Recognizes the canonical Safinum account CM 001 2345 6789 01 (SAF_NUM_014).
     */
    async speakDigitSequence(rawText, options = {}) {
      this.stop();
      const opts = typeof options === "string" ? { lang: options } : (options || {});
      const text = String(rawText || "");
      const digitsOnly = text.replace(/\D/g, "");

      if (/0012345678901/.test(digitsOnly)) {
        return this.playAudio("eton/saf_num_014_take1_4158028d.webm", {
          displayText: "Nɔmɔ á mpə̌g mwání : CM 001 2345 6789 01",
          rate: opts.rate || this.playbackRate,
          onStart: opts.onStart,
          onEnd: opts.onEnded,
          onError: opts.onError
        });
      }

      const humanRecordings = SAFINUM_HUMAN_AMOUNTS[opts.lang || "eto"] || SAFINUM_HUMAN_AMOUNTS.eto;
      const items = [];
      for (const ch of digitsOnly) {
        const d = parseInt(ch, 10);
        if (!isNaN(d) && humanRecordings[d]) {
          items.push(humanRecordings[d]);
        }
      }
      if (items.length === 0) return false;
      return this.playAudioSequence(items, {
        rate: opts.rate || this.playbackRate,
        onStart: opts.onStart,
        onEnd: opts.onEnded,
        onError: opts.onError
      });
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

/**
 * =============================================================================
 * MALOBA ANYDOC — MULTILINGUAL VOICE & NUMBER-TO-SPEECH SYNTHESIS ENGINE
 * =============================================================================
 * Integrates:
 *   1. `SafinumWebNumberEngine` (Gapless .ogg Web Audio API stitching for
 *      amounts 0 to 999,999,999 FCFA across the 42-key audio corpus).
 *   2. Sentence-by-sentence phonetic text-to-speech for:
 *      - Fulfulde of Cameroon (fub)
 *      - Ewondo of Cameroon (ewo)
 *      - Any additional registered national language
 *
 * Enterprise-grade features:
 *   - Gapless Web Audio API `.ogg` stitching for standalone & embedded amounts
 *   - Automatic number-to-words expansion in national language phonetics
 *   - Utterance GC retention (prevents Chromium garbage-collection audio cutoffs)
 *   - SpeechSynthesis keep-alive heartbeat (prevents 15-second speech synthesis pauses)
 *   - Event-driven state notifications for UI highlighting
 *
 * All code comments and documentation are strictly in English.
 * =============================================================================
 */

(function () {
  "use strict";

  const EMBEDDED_AMOUNT_REGEX =
    /\b(\d{1,3}(?:[\s\u00A0\u202F.]\d{3})+|\d+)\s*(FCFA|XAF|F\s*CFA)?\b/gi;

  class SafinumVoiceEngine {
    constructor() {
      this.synth =
        typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis : null;
      this.isSpeaking = false;
      this.preferredVoice = null;
      this.rate = 0.92;
      this.pitch = 1.0;
      this.activeUtterance = null; // Retain active utterance to prevent Chromium GC cutoff
      this.keepAliveTimer = null;
      this.initVoices();
    }

    /**
     * Returns reference to the global SafinumWebNumberEngine singleton if loaded.
     * @returns {Object|null}
     */
    get numberEngine() {
      return (typeof window !== "undefined" && window.safinumNumberEngine) || null;
    }

    /**
     * Initializes and selects the optimal voice from the browser's speech synthesis engine.
     */
    initVoices() {
      if (!this.synth) return;

      const pickVoice = () => {
        try {
          const voices = this.synth.getVoices() || [];
          if (!voices.length) return;

          this.preferredVoice =
            voices.find(
              (v) =>
                v.lang &&
                v.lang.toLowerCase().startsWith("fr") &&
                /natural|neural|google|microsoft/i.test(v.name)
            ) ||
            voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fr")) ||
            voices[0] ||
            null;
        } catch (e) {
          console.warn("[Maloba VoiceEngine] Error selecting speech voice:", e);
        }
      };

      pickVoice();
      if (typeof this.synth.onvoiceschanged !== "undefined") {
        this.synth.onvoiceschanged = pickVoice;
      }
    }

    /**
     * Halts any active speech playback (both Web Audio stitched numbers and SpeechSynthesis).
     */
    stop() {
      if (this.numberEngine) {
        try {
          this.numberEngine.stop();
        } catch (e) {
          console.warn("[Maloba VoiceEngine] Error stopping numberEngine:", e);
        }
      }

      if (this.synth) {
        this.clearKeepAlive();
        try {
          this.synth.cancel();
        } catch (e) {
          console.warn("[Maloba VoiceEngine] Error canceling speech synthesis:", e);
        }
      }

      this.isSpeaking = false;
      this.activeUtterance = null;
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("safinum-voice-state", { detail: { speaking: false } }));
      }
    }

    /**
     * Directly speaks an integer amount (0 to 999,999,999 FCFA) using the gapless
     * Web Audio API stitcher (`SafinumWebNumberEngine`).
     *
     * @param {number} amount - Integer amount in [0, 999,999,999]
     * @param {{ lang?: string, includeCurrency?: boolean, onStart?: Function, onSegmentChange?: Function, onEnded?: Function }} [options]
     * @returns {Promise<void>}
     */
    async speakAmount(amount, options = {}) {
      this.stop();
      if (!this.numberEngine) return;

      const lang = options.lang || "fub";
      const includeCurrency =
        typeof options.includeCurrency === "boolean" ? options.includeCurrency : true;

      this.isSpeaking = true;
      window.dispatchEvent(
        new CustomEvent("safinum-voice-state", {
          detail: { speaking: true, amount, lang }
        })
      );

      await this.numberEngine.speakAmount(amount, {
        lang,
        includeCurrency,
        onStart: options.onStart,
        onSegmentChange: options.onSegmentChange,
        onEnded: () => {
          this.isSpeaking = false;
          window.dispatchEvent(
            new CustomEvent("safinum-voice-state", {
              detail: { speaking: false, amount, lang }
            })
          );
          if (typeof options.onEnded === "function") options.onEnded();
          if (typeof options.onEnd === "function") options.onEnd();
        }
      });
    }

    /**
     * Starts a heartbeat timer that pauses and resumes speech synthesis every 10 seconds.
     */
    startKeepAlive() {
      this.clearKeepAlive();
      this.keepAliveTimer = setInterval(() => {
        if (!this.synth || !this.isSpeaking) {
          this.clearKeepAlive();
          return;
        }
        try {
          this.synth.pause();
          this.synth.resume();
        } catch (_) {
          // Ignore transient keep-alive exceptions
        }
      }, 10000);
    }

    /**
     * Clears the keep-alive interval.
     */
    clearKeepAlive() {
      if (this.keepAliveTimer) {
        clearInterval(this.keepAliveTimer);
        this.keepAliveTimer = null;
      }
    }

    /**
     * Expands embedded integer numbers and currency tokens inside phonetic text
     * into their authentic Fulfulde (`fub`) or Ewondo (`ewo`) numeral words.
     *
     * @param {string} rawText - Original text
     * @param {string} phoneticText - Phonetic transcribed text
     * @param {string} langCode - Language code ('fub' or 'ewo')
     * @returns {string} Clean audio-ready string
     */
    preparePhoneticForSpeech(rawText, phoneticText, langCode = "fub") {
      let txt = phoneticText || rawText || "";
      txt = txt.replace(/\+237/g, "plus 237");

      if (this.numberEngine) {
        txt = txt.replace(EMBEDDED_AMOUNT_REGEX, (fullMatch, numPart, currencyPart) => {
          const digits = String(numPart).replace(/[\s\u00A0\u202F.]/g, "");
          if (!/^\d{1,9}$/.test(digits)) return fullMatch;
          const val = Number.parseInt(digits, 10);
          if (!Number.isSafeInteger(val) || val < 0 || val > 999999999) return fullMatch;
          const hasCurrency = Boolean(currencyPart);
          try {
            return this.numberEngine.toWords(val, {
              lang: langCode,
              includeCurrency: hasCurrency,
              phonetic: true
            });
          } catch (_) {
            return fullMatch;
          }
        });
      }

      if (langCode === "fub") {
        txt = txt.replace(/FCFA/g, "dalâdjé CFA");
      } else if (langCode === "ewo") {
        txt = txt.replace(/FCFA/g, "fala CFA");
      } else {
        txt = txt.replace(/FCFA/g, "Fran CFA");
      }

      return txt;
    }

    /**
     * Synthesizes and speaks text or amounts.
     * If the input represents a standalone numeric amount (or `options.numericAmount` is provided),
     * it plays the gapless `.ogg` sequence via `SafinumWebNumberEngine`.
     *
     * @param {string} displayText - Display string
     * @param {string} phoneticText - Speech-optimized phonetic string
     * @param {Object} options - Playback options
     */
    speak(displayText, phoneticText, options = {}) {
      const langCode = options.lang || "fub";

      // Check if this is a standalone number/amount that should use the gapless .ogg stitcher
      if (this.numberEngine) {
        const explicitAmount =
          typeof options.numericAmount === "number"
            ? options.numericAmount
            : this.numberEngine.parseAmount(displayText);

        if (explicitAmount !== null) {
          const hasCurrency =
            typeof options.includeCurrency === "boolean"
              ? options.includeCurrency
              : /FCFA|XAF|CFA/i.test(String(displayText));
          this.speakAmount(explicitAmount, {
            lang: langCode,
            includeCurrency: hasCurrency,
            onStart: options.onStart,
            onEnded: options.onEnd || options.onEnded
          });
          return;
        }
      }

      if (!this.synth) return;
      this.stop();

      const spokenText = this.preparePhoneticForSpeech(displayText, phoneticText, langCode);
      const utterance = new SpeechSynthesisUtterance(spokenText);

      this.activeUtterance = utterance;

      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }
      utterance.lang = (this.preferredVoice && this.preferredVoice.lang) || "fr-FR";
      utterance.rate = options.rate || this.rate;
      utterance.pitch = options.pitch || this.pitch;

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.startKeepAlive();
        window.dispatchEvent(
          new CustomEvent("safinum-voice-state", {
            detail: { speaking: true, text: displayText }
          })
        );
        if (typeof options.onStart === "function") options.onStart();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.clearKeepAlive();
        this.activeUtterance = null;
        window.dispatchEvent(
          new CustomEvent("safinum-voice-state", {
            detail: { speaking: false, text: displayText }
          })
        );
        if (typeof options.onEnd === "function") options.onEnd();
      };

      utterance.onerror = (e) => {
        this.isSpeaking = false;
        this.clearKeepAlive();
        this.activeUtterance = null;
        window.dispatchEvent(
          new CustomEvent("safinum-voice-state", { detail: { speaking: false } })
        );
        if (typeof options.onError === "function") options.onError(e);
      };

      try {
        this.synth.speak(utterance);
      } catch (err) {
        console.warn("[Maloba VoiceEngine] speech.speak failed:", err);
        this.isSpeaking = false;
        this.clearKeepAlive();
        this.activeUtterance = null;
      }
    }

    /**
     * Reads a phrase (or stitched numeric amount) and immediately follows with its
     * pedagogical explanation in the active language.
     *
     * @param {Object} entry - Translation or numeric record
     * @param {string} lang - Active language ISO code ('fub', 'ewo')
     */
    speakPhraseAndExplanation(entry, lang = "fub") {
      if (!entry) return;

      const kbMeta = (window.SAFINUM_KB && window.SAFINUM_KB.meta) || {};
      const langConfig = (kbMeta.languages && kbMeta.languages[lang]) || {};
      const explainMarker = langConfig.explainWord || (lang === "ewo" ? "Fáám" : "Famfingo");

      const exp = entry[`explain_${lang}`] || entry.explain_fub || entry.explain_fr || "";
      const expPhon =
        entry[`explain_${lang}_phonetic`] ||
        (lang === "fub" ? entry.explain_fub_phonetic : null) ||
        exp;

      // If entry is a numeric amount, first stitch the .ogg audio keys gaplessly, then speak explanation
      if (typeof entry.numericAmount === "number" && this.numberEngine) {
        this.speakAmount(entry.numericAmount, {
          lang,
          includeCurrency: entry.hasCurrency !== false,
          onEnded: () => {
            if (expPhon) {
              this.speak(`${entry.original} — 💡 ${exp}`, `${explainMarker} : ${expPhon}.`, {
                lang
              });
            }
          }
        });
        return;
      }

      const text = entry[lang] || entry.fub || entry.original || "";
      const phon = entry[`phonetic_${lang}`] || (lang === "fub" ? entry.phonetic : null) || text;

      const fullPhonetic = `${phon}. ${explainMarker} : ${expPhon}.`;
      const fullDisplay = `${text} — 💡 ${exp}`;

      this.speak(fullDisplay, fullPhonetic, { lang });
    }
  }

  // Export singleton instance onto window
  window.SafinumVoiceEngine = new SafinumVoiceEngine();
})();

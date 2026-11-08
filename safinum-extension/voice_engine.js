/**
 * =============================================================================
 * MALOBA ANYDOC — MULTILINGUAL VOICE SYNTHESIS ENGINE
 * =============================================================================
 * Supports sentence-by-sentence phonetic text-to-speech for:
 *   - Fulfulde of Cameroon (fub)
 *   - Ewondo of Cameroon (ewo)
 *   - Any additional registered national language
 *
 * Enterprise-grade features:
 *   - Utterance GC retention (prevents Chromium garbage-collection audio cutoffs)
 *   - SpeechSynthesis keep-alive heartbeat (prevents 15-second speech synthesis pauses)
 *   - Phonetic pre-processing for currency units (FCFA -> "Fran CFA")
 *   - Event-driven state notifications for UI highlighting
 *
 * All code comments and documentation are strictly in English.
 * =============================================================================
 */

(function () {
  "use strict";

  class SafinumVoiceEngine {
    constructor() {
      this.synth = typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis : null;
      this.isSpeaking = false;
      this.preferredVoice = null;
      this.rate = 0.92;
      this.pitch = 1.0;
      this.activeUtterance = null; // Retain active utterance to prevent Chromium GC cutoff
      this.keepAliveTimer = null;
      this.initVoices();
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

          // Prefer natural / neural French voice (phonetic mapping is calibrated to standard French phonemes)
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
     * Halts any active speech playback and clears watchdog timers.
     */
    stop() {
      if (!this.synth) return;
      this.clearKeepAlive();
      try {
        this.synth.cancel();
      } catch (e) {
        console.warn("[Maloba VoiceEngine] Error canceling speech synthesis:", e);
      }
      this.isSpeaking = false;
      this.activeUtterance = null;
      window.dispatchEvent(new CustomEvent("safinum-voice-state", { detail: { speaking: false } }));
    }

    /**
     * Starts a heartbeat timer that pauses and resumes speech synthesis every 10 seconds.
     * This avoids a known Chromium bug where SpeechSynthesis halts indefinitely after ~15s.
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
     * Pre-processes currency tokens and special symbols for natural pronunciation.
     * @param {string} rawText - Original text
     * @param {string} phoneticText - Phonetic transcribed text
     * @param {string} langCode - Language code ('fub' or 'ewo')
     * @returns {string} Clean audio-ready string
     */
    preparePhoneticForSpeech(rawText, phoneticText, langCode = "fub") {
      let txt = phoneticText || rawText || "";
      if (langCode === "fub") {
        txt = txt.replace(/FCFA/g, "Fran CFA (mbuu-d'ou)");
      } else {
        txt = txt.replace(/FCFA/g, "Fran CFA");
      }
      txt = txt.replace(/\+237/g, "plus 237");
      return txt;
    }

    /**
     * Synthesizes and speaks text using the Web Speech API.
     * @param {string} displayText - Display string (for events and logs)
     * @param {string} phoneticText - Speech-optimized phonetic string
     * @param {Object} options - Playback options (rate, pitch, lang, callbacks)
     */
    speak(displayText, phoneticText, options = {}) {
      if (!this.synth) return;
      this.stop();

      const langCode = options.lang || "fub";
      const spokenText = this.preparePhoneticForSpeech(displayText, phoneticText, langCode);
      const utterance = new SpeechSynthesisUtterance(spokenText);

      // Retain reference on instance to prevent Chromium V8 from garbage collecting it mid-speech
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
        window.dispatchEvent(new CustomEvent("safinum-voice-state", { detail: { speaking: false } }));
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
     * Reads a phrase and immediately follows with its pedagogical explanation in the active language.
     * @param {Object} entry - Translation record from SafinumContextGraph
     * @param {string} lang - Active language ISO code (e.g., 'fub', 'ewo')
     */
    speakPhraseAndExplanation(entry, lang = "fub") {
      if (!entry) return;

      const kbMeta = (window.SAFINUM_KB && window.SAFINUM_KB.meta) || {};
      const langConfig = (kbMeta.languages && kbMeta.languages[lang]) || {};
      const explainMarker = langConfig.explainWord || (lang === "ewo" ? "Fáám" : "Famfingo");

      // Resolve phrase text and phonetics
      const text = entry[lang] || entry.fub || entry.original || "";
      const phon = entry[`phonetic_${lang}`] || (lang === "fub" ? entry.phonetic : null) || text;

      // Resolve explanation text and phonetics
      const exp = entry[`explain_${lang}`] || entry.explain_fub || entry.explain_fr || "";
      const expPhon =
        entry[`explain_${lang}_phonetic`] || (lang === "fub" ? entry.explain_fub_phonetic : null) || exp;

      const fullPhonetic = `${phon}. ${explainMarker} : ${expPhon}.`;
      const fullDisplay = `${text} — 💡 ${exp}`;

      this.speak(fullDisplay, fullPhonetic, { lang });
    }
  }

  // Export singleton instance onto window
  window.SafinumVoiceEngine = new SafinumVoiceEngine();
})();

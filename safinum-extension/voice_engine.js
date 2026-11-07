// =============================================================================
// AKI × SAFINUM ANYDOC — MOTEUR VOCAL PHRASE PAR PHRASE (FULFULDÉ ADAMAOUA fub)
// Synthèse vocale phonétique + Lecture explicative AnyDoc par étape
// =============================================================================

(function () {
  "use strict";

  class SafinumVoiceEngine {
    constructor() {
      this.synth = window.speechSynthesis || null;
      this.isSpeaking = false;
      this.preferredVoice = null;
      this.rate = 0.92;
      this.pitch = 1.0;
      this.initVoices();
    }

    initVoices() {
      if (!this.synth) return;
      const pickVoice = () => {
        const voices = this.synth.getVoices() || [];
        // Privilégier une voix française claire (le mapping phonétique fub -> fr-FR est calibré dessus)
        this.preferredVoice =
          voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fr") && /natural|neural|google|microsoft/i.test(v.name)) ||
          voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fr")) ||
          voices[0] ||
          null;
      };
      pickVoice();
      if (typeof this.synth.onvoiceschanged !== "undefined") {
        this.synth.onvoiceschanged = pickVoice;
      }
    }

    stop() {
      if (!this.synth) return;
      this.synth.cancel();
      this.isSpeaking = false;
      window.dispatchEvent(new CustomEvent("safinum-voice-state", { detail: { speaking: false } }));
    }

    /**
     * Convertit les nombres FCFA en lecture fluide Fulfuldé + Français pour éviter les erreurs de lecture
     */
    preparePhoneticForSpeech(fubText, phoneticText) {
      let txt = phoneticText || fubText || "";
      txt = txt.replace(/FCFA/g, "Fran CFA (mbuu-d'ou)");
      txt = txt.replace(/\+237/g, "plus 237");
      return txt;
    }

    speak(fubText, phoneticText, options = {}) {
      if (!this.synth) return;
      this.stop();

      const spokenText = this.preparePhoneticForSpeech(fubText, phoneticText);
      const utterance = new SpeechSynthesisUtterance(spokenText);
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }
      utterance.lang = (this.preferredVoice && this.preferredVoice.lang) || "fr-FR";
      utterance.rate = options.rate || this.rate;
      utterance.pitch = options.pitch || this.pitch;

      utterance.onstart = () => {
        this.isSpeaking = true;
        window.dispatchEvent(
          new CustomEvent("safinum-voice-state", {
            detail: { speaking: true, text: fubText }
          })
        );
        if (options.onStart) options.onStart();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        window.dispatchEvent(
          new CustomEvent("safinum-voice-state", {
            detail: { speaking: false, text: fubText }
          })
        );
        if (options.onEnd) options.onEnd();
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        window.dispatchEvent(new CustomEvent("safinum-voice-state", { detail: { speaking: false } }));
      };

      this.synth.speak(utterance);
    }

    /**
     * Lecture AnyDoc complète : lit d'abord la phrase en Fulfuldé, puis son explication simplifiée
     */
    speakPhraseAndExplanation(entry) {
      if (!entry) return;
      const fullPhonetic = `${entry.phonetic || entry.fub}. Famfingo : ${entry.explain_fub_phonetic || entry.explain_fub}.`;
      const fullDisplay = `${entry.fub} — 💡 ${entry.explain_fub}`;
      this.speak(fullDisplay, fullPhonetic);
    }
  }

  window.SafinumVoiceEngine = new SafinumVoiceEngine();
})();


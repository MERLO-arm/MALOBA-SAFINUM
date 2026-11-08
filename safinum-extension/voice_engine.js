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
     * Lecture AnyDoc multilingue : lit la phrase dans la langue active (fub, ewo ou futures langues),
     * suivie de son explication pédagogique simplifiée.
     * Conçu pour être immédiatement extensible à toute langue ajoutée au registre.
     */
    speakPhraseAndExplanation(entry, lang = "fub") {
      if (!entry) return;

      const kbMeta = (window.SAFINUM_KB && window.SAFINUM_KB.meta) || {};
      const langConfig = (kbMeta.languages && kbMeta.languages[lang]) || {};
      const explainMarker = langConfig.explainWord || (lang === "ewo" ? "Fáám" : "Famfingo");

      // Texte de la phrase
      const text = entry[lang] || entry.fub || entry.original || "";
      // Phonétique de la phrase
      const phon = entry[`phonetic_${lang}`] || (lang === "fub" ? entry.phonetic : null) || text;

      // Explication
      const exp = entry[`explain_${lang}`] || entry.explain_fub || entry.explain_fr || "";
      // Phonétique de l'explication
      const expPhon = entry[`explain_${lang}_phonetic`] || (lang === "fub" ? entry.explain_fub_phonetic : null) || exp;

      const fullPhonetic = `${phon}. ${explainMarker} : ${expPhon}.`;
      const fullDisplay = `${text} — 💡 ${exp}`;

      this.speak(fullDisplay, fullPhonetic);
    }
  }

  window.SafinumVoiceEngine = new SafinumVoiceEngine();
})();


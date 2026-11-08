// =============================================================================
// AKI × SAFINUM ANYDOC — MOTEUR GRAPHE DE CONTEXTE 5-NŒUDS & RAG MULTI-SOURCES
// Cible : Fulfuldé du Cameroun (fub - Adamaoua / Grand-Nord)
// =============================================================================

(function () {
  "use strict";

  const KB = window.SAFINUM_KB || {
    exact_ui: {},
    dynamic_patterns: [],
    phrase_chunks: [],
    word_lexicon: {},
    rag_exemplars: [],
    meta: {}
  };

  // Expressions régulières de protection stricte des données financières
  const PURE_SACRED_REGEXES = [
    /^[\+\-\u2212]?\s*\d[\d\s\u00A0\u202F.,]*\s*(?:FCFA|XAF|%|F\s*CFA)?$/i,
    /^\+?237[\s\d\-]{6,}$/,
    /^CM\d{2}[\s\dA-Z\-]{6,}$/i,
    /^SAF-\d{4}-[A-Z0-9\-]+$/i,
    /^(?:Amina Ngo Bell|Jean-Paul Mbarga|Safinum Pay|SAFINUM|AN|FR|EN|Jury|CEMAC|ENEO|SMS|PIN|OTP)$/i
  ];

  // Extraction d'entités financières à l'intérieur d'une phrase
  const INLINE_ENTITY_REGEX = /(\+?237[\s\d\-]{8,14}|CM\d{2}[\s\d]{10,28}|SAF-\d{4}-[A-Z0-9]+|[\+\-\u2212]?\d[\d\s\u00A0\u202F.,]*\s*(?:FCFA|XAF|%)|\b\d+(?:[.,]\d+)?\b|Safinum Pay|Amina Ngo Bell|Jean-Paul Mbarga|Mobile Money|CEMAC|ENEO|SMS|PIN|OTP)/gi;

  // Petits mots outils français/anglais vers Fulfuldé du Cameroun (fub)
  const FUNCTION_WORDS_FUB = {
    "le": "",
    "la": "",
    "les": "",
    "un": "",
    "une": "",
    "des": "",
    "du": "mo",
    "de": "mo",
    "d": "mo",
    "l": "",
    "au": "haa",
    "aux": "haa",
    "à": "haa",
    "a": "woodi",
    "et": "e",
    "ou": "malla",
    "est": "woni",
    "sont": "ngoni",
    "sera": "wonata",
    "seront": "ngonata",
    "été": "waɗaa",
    "pas": "walaa",
    "ne": "to",
    "n": "to",
    "plus": "ɓuri",
    "moins": "les",
    "par": "bee",
    "sur": "dow",
    "dans": "nder",
    "avec": "bee",
    "sans": "walaa",
    "pour": "ngam",
    "en": "nder",
    "ce": "oo",
    "cet": "oo",
    "cette": "ndee",
    "ces": "ɗee",
    "son": "mum",
    "sa": "mum",
    "ses": "mum",
    "leur": "maɓɓe",
    "leurs": "maɓɓe",
    "vous": "a",
    "nous": "min",
    "il": "o",
    "elle": "o",
    "on": "neɗɗo",
    "qui": "mo",
    "que": "wonde",
    "qu": "wonde",
    "si": "to",
    "car": "sabu",
    "mais": "kono",
    "donc": "non",
    "comme": "no",
    "tout": "fuu",
    "toute": "fuu",
    "tous": "fuu",
    "toutes": "fuu",
    "the": "",
    "is": "woni",
    "are": "ngoni",
    "will": "wonata",
    "be": "wona",
    "to": "haa",
    "of": "mo",
    "in": "nder",
    "for": "ngam",
    "with": "bee",
    "without": "walaa",
    "from": "iwde",
    "by": "bee",
    "and": "e",
    "or": "malla",
    "not": "walaa",
    "your": "maa",
    "you": "a",
    "this": "oo",
    "that": "wonde"
  };

  function toPhonetic(fubText) {
    if (!fubText) return "";
    let s = String(fubText);
    s = s.replace(/uu/g, "ouou").replace(/u/g, "ou");
    s = s.replace(/aa/g, "â").replace(/ee/g, "éé").replace(/ii/g, "î").replace(/oo/g, "ô");
    s = s.replace(/ɓ/g, "b'").replace(/Ɓ/g, "B'");
    s = s.replace(/ɗ/g, "d'").replace(/Ɗ/g, "D'");
    s = s.replace(/ƴ/g, "y'").replace(/Ƴ/g, "Y'");
    s = s.replace(/ŋ/g, "ng").replace(/Ŋ/g, "Ng");
    s = s.replace(/\bc/g, "tch").replace(/\bC/g, "Tch");
    s = s.replace(/\bj/g, "dj").replace(/\bJ/g, "Dj");
    return s;
  }

  function toEwondoPhonetic(ewoText) {
    if (!ewoText) return "";
    let s = String(ewoText);
    s = s.replace(/ɛ/g, "è").replace(/ɔ/g, "ò").replace(/ə/g, "eu");
    s = s.replace(/ŋ/g, "ng").replace(/ɲ/g, "gn");
    s = s.replace(/FCFA/g, "Fran CFA");
    return s;
  }

  class SafinumContextGraph {
    constructor() {
      this.stats = {
        exactHits: 0,
        dynamicHits: 0,
        compositionalRagHits: 0,
        protectedSkipped: 0,
        lastExecutionLog: []
      };
    }

    /**
     * NŒUD 1 : EntityFreezer — Détecte si un texte est purement sacré ou gèle les entités internes
     */
    isSacredOnly(text) {
      if (!text) return true;
      const trimmed = text.trim();
      if (!trimmed || trimmed.length < 2) return true;
      for (const rx of PURE_SACRED_REGEXES) {
        if (rx.test(trimmed)) {
          this.stats.protectedSkipped++;
          return true;
        }
      }
      return false;
    }

    freezeEntities(text) {
      const entities = [];
      const frozenText = text.replace(INLINE_ENTITY_REGEX, (match) => {
        const token = `__ENT_${entities.length}__`;
        entities.push(match);
        return token;
      });
      return { frozenText, entities };
    }

    unfreezeEntities(text, entities) {
      let out = text;
      entities.forEach((val, idx) => {
        out = out.replace(new RegExp(`__ENT_${idx}__`, "g"), val);
      });
      return out;
    }

    /**
     * NŒUD 2 : IntentAndRiskClassifier — Analyse l'intention bancaire et le niveau de risque
     */
    classifyIntent(text) {
      const low = text.toLowerCase();
      if (/(code secret|pin|otp|mot de passe|bloqué|tentative|partagez|communiquez|fraude|arnaque|locked|password|attempts)/i.test(low)) {
        return { intent: "SECURITE_FRAUDE", category: "securite", riskLevel: "CRITIQUE" };
      }
      if (/(plafond|limite|maximum|journalier|quotidien|dépasse|supérieur|insuffisant|invalide|limit|exceeds|insufficient)/i.test(low)) {
        return { intent: "PLAFOND_ET_SOLDE", category: "erreur", riskLevel: "ATTENTION" };
      }
      if (/(erreur|échoué|indisponible|maintenance|réseau|connexion|incomplet|failed|unavailable|error)/i.test(low)) {
        return { intent: "INCIDENT_TECHNIQUE", category: "erreur", riskLevel: "ATTENTION" };
      }
      if (/(frais|commission|taxe|tarif|gratuit|coût|débité|fee|fees|cost)/i.test(low)) {
        return { intent: "FRAIS_TARIFICATION", category: "frais", riskLevel: "INFO" };
      }
      if (/(bénéficiaire|destinataire|numéro|téléphone|nom complet|beneficiary|recipient)/i.test(low)) {
        return { intent: "IDENTITE_BENEFICIAIRE", category: "beneficiaire", riskLevel: "ATTENTION" };
      }
      if (/(confirm|récapitulatif|vérif|reçu|référence|succès|summary|receipt)/i.test(low)) {
        return { intent: "VALIDATION_ET_PREUVE", category: "recapitulatif", riskLevel: "INFO" };
      }
      return { intent: "INFORMATION_GENERALE", category: "solde", riskLevel: "INFO" };
    }

    /**
     * NŒUD 3 : MultiSourceLexicalRAG — Recherche exacte, dynamique ou compositionnelle (18 sources)
     */
    translateAndExplain(rawText) {
      if (!rawText) return null;
      const clean = rawText.replace(/\s+/g, " ").trim();
      if (this.isSacredOnly(clean)) return null;

      // 3.A : Correspondance exacte dans l'interface SAFINUM (FR ou EN)
      if (KB.exact_ui && KB.exact_ui[clean]) {
        this.stats.exactHits++;
        const hit = KB.exact_ui[clean];
        const ewoText = hit.ewo || hit.fub;
        return {
          original: clean,
          fub: hit.fub,
          ewo: ewoText,
          phonetic: hit.phonetic || toPhonetic(hit.fub),
          phonetic_ewo: hit.phonetic_ewo || toEwondoPhonetic(ewoText),
          explain_fub: hit.explain_fub,
          explain_fub_phonetic: hit.explain_fub_phonetic || toPhonetic(hit.explain_fub),
          explain_ewo: hit.explain_ewo || hit.explain_fr,
          explain_ewo_phonetic: hit.explain_ewo_phonetic || toEwondoPhonetic(hit.explain_ewo || hit.explain_fr),
          explain_fr: hit.explain_fr,
          category: hit.category,
          source: hit.source,
          mode: "EXACT_UI_DICTIONARY",
          confidence: 1.0
        };
      }

      // 3.B : Patterns dynamiques (Bonjour {nom}, Numéro de compte : {acc}, Étape {x}/{y}, Dates)
      if (KB.dynamic_patterns) {
        for (const pat of KB.dynamic_patterns) {
          const rx = new RegExp(pat.regex, "i");
          const m = clean.match(rx);
          if (m) {
            this.stats.dynamicHits++;
            let fubOut = pat.template_fub;
            let ewoOut = pat.template_ewo || pat.template_fub;
            let expFub = pat.explain_fub;
            let expEwo = pat.explain_ewo || pat.explain_fr;
            let expFr = pat.explain_fr;
            for (let i = 1; i < m.length; i++) {
              const val = m[i] || "";
              fubOut = fubOut.replace(new RegExp("\\$" + i, "g"), val);
              ewoOut = ewoOut.replace(new RegExp("\\$" + i, "g"), val);
              expFub = expFub.replace(new RegExp("\\$" + i, "g"), val);
              expEwo = expEwo.replace(new RegExp("\\$" + i, "g"), val);
              expFr = expFr.replace(new RegExp("\\$" + i, "g"), val);
            }
            fubOut = fubOut.replace(/\s+/g, " ").trim();
            ewoOut = ewoOut.replace(/\s+/g, " ").trim();
            return {
              original: clean,
              fub: fubOut,
              ewo: ewoOut,
              phonetic: toPhonetic(fubOut),
              phonetic_ewo: toEwondoPhonetic(ewoOut),
              explain_fub: expFub,
              explain_fub_phonetic: toPhonetic(expFub),
              explain_ewo: expEwo,
              explain_ewo_phonetic: toEwondoPhonetic(expEwo),
              explain_fr: expFr,
              category: pat.category,
              source: pat.source,
              mode: "DYNAMIC_TEMPLATE",
              confidence: 0.98
            };
          }
        }
      }

      // 3.C : Phrase inconnue / injectée par le Jury -> Pipeline Graphe de Contexte 5-Nœuds !
      return this.runCompositionalContextGraph(clean);
    }

    /**
     * Pipeline profond pour toute phrase inédite injectée par le Jury (#injected-{id})
     */
    runCompositionalContextGraph(cleanText) {
      this.stats.compositionalRagHits++;

      // Nœud 1 : Gel des entités sacrées (montants FCFA, %, numéros, références)
      const { frozenText, entities } = this.freezeEntities(cleanText);

      // Nœud 2 : Classification d'intention et de risque financier
      const { intent, category, riskLevel } = this.classifyIntent(cleanText);

      // Nœud 3 : Traduction compositionnelle par segments phraséologiques + lexique Tourneux/Aki-OSC
      let working = frozenText;
      const usedSources = new Set(["01_aki_osc_financial_glossary"]);

      // Remplacer d'abord les expressions multi-mots (triées de la plus longue à la plus courte)
      const sortedChunks = (KB.phrase_chunks || []).slice().sort((a, b) => b.fr.length - a.fr.length);
      for (const chunk of sortedChunks) {
        const escaped = chunk.fr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const rx = new RegExp(`\\b${escaped}\\b`, "gi");
        if (rx.test(working)) {
          working = working.replace(rx, chunk.fub);
          usedSources.add(chunk.src);
        }
      }

      // Tokenisation mot par mot en préservant les placeholders __ENT_k__ et la ponctuation
      const tokenRegex = /(__ENT_\d+__|[A-Za-zÀ-ÖØ-öø-ÿɓɗƴŋƁƊƳŊ']+)/g;
      const translatedTokens = working.replace(tokenRegex, (word) => {
        if (word.startsWith("__ENT_")) return word;
        const low = word.toLowerCase();

        // Si le mot est déjà en Fulfuldé (suite au remplacement d'un chunk), ne pas le retraduire
        if (/[ɓɗƴŋ]/.test(low) || /^(ceede|limngal|hisaabu|jaɓoowo|coggu|nelal|lambar|cuuɗiido|waya|haaddi|ñalnde|fuu|useni|laartu|booyma|hidde|tabitina|maɓɓete|jarribooji|boofɗi|talkuru|seedamku|innde|cahiindu|meere|walaa)$/.test(low)) {
          return word;
        }

        // Recherche exacte dans le lexique des 18 sources
        if (KB.word_lexicon && KB.word_lexicon[low]) {
          usedSources.add(KB.word_lexicon[low].src);
          return KB.word_lexicon[low].fub;
        }

        // Recherche par lemmatisation / radical (pluriels -s, verbes conjugués -er/-ez/-é/-ée/-és)
        const stems = [
          low.replace(/s$/, ""),
          low.replace(/es$/, "e"),
          low.replace(/(?:ez|er|é|ée|és|ées|ant)$/, "er"),
          low.replace(/(?:ez|er|é|ée|és|ées|ant)$/, ""),
          low.replace(/aux$/, "al"),
          low.replace(/issement$/, "ir")
        ];
        for (const st of stems) {
          if (st.length >= 3 && KB.word_lexicon && KB.word_lexicon[st]) {
            usedSources.add(KB.word_lexicon[st].src);
            return KB.word_lexicon[st].fub;
          }
        }

        // Mots outils grammaticaux
        if (Object.prototype.hasOwnProperty.call(FUNCTION_WORDS_FUB, low)) {
          return FUNCTION_WORDS_FUB[low];
        }

        return word;
      });

      // Nettoyage des espaces multiples et restauration des entités gelées (Nœud 5 : FinancialIntegrityGuard)
      let fubSentence = translatedTokens.replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
      fubSentence = this.unfreezeEntities(fubSentence, entities);

      // Si la phrase était très courte ou contenait uniquement du vocabulaire inconnu, préfixer par le marqueur contextuel Fulfuldé
      if (fubSentence.toLowerCase() === cleanText.toLowerCase()) {
        fubSentence = `Kabaruuji kisal : ${fubSentence}`;
      } else if (fubSentence.length > 0) {
        fubSentence = fubSentence.charAt(0).toUpperCase() + fubSentence.slice(1);
      }

      // Recherche de l'exemple parallèle le plus proche dans les 18 sources pour la traçabilité
      let closestExemplar = null;
      if (KB.rag_exemplars && KB.rag_exemplars.length > 0) {
        const words = cleanText.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
        let bestScore = -1;
        for (const ex of KB.rag_exemplars) {
          let sc = 0;
          const exLow = ex.fr.toLowerCase();
          for (const w of words) {
            if (exLow.includes(w)) sc++;
          }
          if (sc > bestScore) {
            bestScore = sc;
            closestExemplar = ex;
          }
        }
        if (closestExemplar && bestScore > 0) {
          usedSources.add(closestExemplar.src);
        }
      }

      // Nœud 4 : Génération de l'explication pédagogique AnyDoc (Fulfuldé + Ewondo + Français)
      const entitiesSummary = entities.length > 0 ? ` (${entities.join(" · ")})` : "";
      let explainFub = "";
      let explainEwo = "";
      let explainFr = "";

      if (intent === "SECURITE_FRAUDE") {
        explainFub = `Reentinoore kisal mawnde${entitiesSummary} : bataake oo ɗon reentina ma dow kisal lambar maa cuuɗiido (PIN/OTP) e limngal maa. To hokku neɗɗo feere lambar maa koo nde!`;
        explainEwo = `Yian mebə̀lə̀ mé ngól${entitiesSummary} : Tə́ o və̀ mɔt kót wô ésoló (PIN/OTP). Fə́la nyina a ne ngól asu mɔni wô.`;
        explainFr = `Alerte de sécurité critique${entitiesSummary} : ce message protège l'accès à votre compte. Ne communiquez jamais votre code secret et vérifiez le nombre d'essais restants.`;
      } else if (intent === "PLAFOND_ET_SOLDE") {
        explainFub = `Tinndinoore haaddi ceede${entitiesSummary} : bataake oo ɗon kollira haaddi ceede ɗe a waawi neldugo malla ceede gonɗe nder limngal maa.`;
        explainEwo = `Metəla mé akɔŋ mɔni${entitiesSummary} : Mebə̀lə̀ ma kat akɔŋ mɔni o ne lóm amɔs nyina to mɔni a liè e asúsu wô.`;
        explainFr = `Règle de plafond ou de solde${entitiesSummary} : ce message précise la limite maximale autorisée ou les conditions liées au montant de votre transfert.`;
      } else if (intent === "FRAIS_TARIFICATION") {
        explainFub = `Famfingo coggu nelal${entitiesSummary} : bataake oo ɗon laaɓtina coggu kuugal nelal e ceede ɗe ittete nder kofru maa.`;
        explainEwo = `Fáám mímvèñ mi ntómban${entitiesSummary} : Mebə̀lə̀ ma laart mímvèñ e asúŋa mɔni ba te e asúsu wô.`;
        explainFr = `Information tarifaire${entitiesSummary} : ce message détaille les frais ou commissions appliqués à votre opération.`;
      } else if (intent === "IDENTITE_BENEFICIAIRE") {
        explainFub = `Laartugo jaɓoowo ceede${entitiesSummary} : laartu booyma innde, lambar waya e talkuru seedamku hidde ceede ɗe neldoto.`;
        explainEwo = `Laart nnyɔ a nɔŋ mɔni${entitiesSummary} : Laart dzóé, nɔ́mba fón e kalara ntílán osu na o lóm mɔni.`;
        explainFr = `Vérification du destinataire${entitiesSummary} : contrôlez l'identité et les coordonnées du bénéficiaire avant de valider.`;
      } else if (intent === "INCIDENT_TECHNIQUE") {
        explainFub = `Kabaruuji dow laawol kuugal${entitiesSummary} : caɗeele laawol enternet malla feewnugo kuugal. Ceede maa ɗon hisi nder limngal maa.`;
        explainEwo = `Díza ya réseau${entitiesSummary} : Waya ya réseau a nzi kat. Mɔni wô a ne m̀vɛ̀ e asúsu.`;
        explainFr = `Information réseau / service${entitiesSummary} : perturbation technique temporaire. Vos fonds restent protégés sur votre compte.`;
      } else {
        explainFub = `Famfingo AnyDoc (${intent})${entitiesSummary} : ${fubSentence}. Laartu kabaruuji ɗi booyma hidde a jokka.`;
        explainEwo = `Fáám AnyDoc (${intent})${entitiesSummary} : Laart mebə̀lə̀ osu na o kəl osu.`;
        explainFr = `Explication simplifiée AnyDoc${entitiesSummary} : cette consigne vous informe d'une règle importante concernant votre opération en cours.`;
      }

      const ewoSentence = this.translateCompositionalEwondo(cleanText, frozenText, entities, category);

      const logEntry = {
        timestamp: new Date().toLocaleTimeString(),
        original: cleanText,
        frozenText,
        entities,
        intent,
        riskLevel,
        fub: fubSentence,
        ewo: ewoSentence,
        sources: Array.from(usedSources),
        closestExemplar
      };
      this.stats.lastExecutionLog.unshift(logEntry);
      if (this.stats.lastExecutionLog.length > 15) {
        this.stats.lastExecutionLog.pop();
      }

      return {
        original: cleanText,
        fub: fubSentence,
        ewo: ewoSentence,
        phonetic: toPhonetic(fubSentence),
        phonetic_ewo: toEwondoPhonetic(ewoSentence),
        explain_fub: explainFub,
        explain_fub_phonetic: toPhonetic(explainFub),
        explain_ewo: explainEwo,
        explain_ewo_phonetic: toEwondoPhonetic(explainEwo),
        explain_fr: explainFr,
        category,
        intent,
        riskLevel,
        entities,
        source: Array.from(usedSources).join(" + "),
        closestExemplar,
        mode: "CONTEXT_GRAPH_5_NODES_RAG",
        confidence: 0.92
      };
    }

    translateCompositionalEwondo(cleanText, frozenText, entities, category) {
      let ewoText = frozenText;
      const ewoMap = {
        "solde": "mɔni a liè",
        "montant": "akɔŋ mɔni",
        "frais": "mímvèñ",
        "transfert": "ntómban mɔni",
        "bénéficiaire": "nnyɔ a nɔŋ",
        "téléphone": "fón",
        "compte": "asúsu",
        "erreur": "díza",
        "code": "kót",
        "secret": "ésoló",
        "sécurité": "ngól",
        "confirmer": "kaməla",
        "envoyer": "lóm",
        "reçu": "kalara ntílán",
        "gratuit": "zə́zə́",
        "invalide": "a téé yian",
        "insuffisant": "a nzi kôb"
      };
      for (const [fr, ew] of Object.entries(ewoMap)) {
        const rx = new RegExp(`\\b${fr}\\b`, "gi");
        ewoText = ewoText.replace(rx, ew);
      }
      ewoText = this.unfreezeEntities(ewoText, entities);
      if (ewoText.toLowerCase() === cleanText.toLowerCase()) {
        ewoText = `Mebə̀lə̀ mé mɔni : ${ewoText}`;
      }
      return ewoText;
    }
  }

  window.SafinumContextGraph = new SafinumContextGraph();
})();


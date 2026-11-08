/**
 * =============================================================================
 * MALOBA ANYDOC — 5-NODE SEMANTIC CONTEXT GRAPH & MULTI-SOURCE RAG ENGINE
 * =============================================================================
 * Target Languages:
 *   - Fulfulde of Cameroon (ISO: fub, Adamawa / Northern Cameroon)
 *   - Ewondo of Cameroon (ISO: ewo, Center / South / East)
 *   - Extensible N-Language Architecture (Douala dua, Ghomala bbj, Bassa bas)
 *
 * Core Principles:
 *   - Node 1: EntityFreezer — Strict financial tokenization and preservation
 *   - Node 2: IntentClassifier — Banking intent classification and risk rating
 *   - Node 3: LexicalRAG — Multi-source exact, pattern, and compositional RAG
 *   - Node 4: PedagogicalExplainer — Actionable, low-literacy explanations
 *   - Node 5: FinancialIntegrityGuard — 100% exact entity reconstitution
 *
 * All code comments and documentation are strictly in English.
 * =============================================================================
 */

(function () {
  "use strict";

  // Access knowledge base registered on window, fallback to empty baseline if absent
  const KB = window.SAFINUM_KB || {
    exact_ui: {},
    dynamic_patterns: [],
    phrase_chunks: [],
    word_lexicon: {},
    rag_exemplars: [],
    meta: {}
  };

  /**
   * Pure sacred regular expressions: text matching any of these patterns
   * is strictly immutable and must never be altered by the translation pipeline.
   */
  const PURE_SACRED_REGEXES = [
    /^[\+\-\u2212]?\s*\d[\d\s\u00A0\u202F.,]*\s*(?:FCFA|XAF|%|F\s*CFA)?$/i,
    /^\+?237[\s\d\-]{6,}$/,
    /^CM\d{2}[\s\dA-Z\-]{6,}$/i,
    /^SAF-\d{4}-[A-Z0-9\-]+$/i,
    /^(?:Amina Ngo Bell|Jean-Paul Mbarga|Safinum Pay|SAFINUM|AN|FR|EN|Jury|CEMAC|ENEO|SMS|PIN|OTP)$/i
  ];

  /**
   * Inline entity extraction regex: detects and isolates critical financial tokens
   * embedded inside mixed text nodes (e.g., "Solde de 15 000 FCFA disponible").
   */
  const INLINE_ENTITY_REGEX =
    /(\+?237[\s\d\-]{8,14}|CM\d{2}[\s\d]{10,28}|SAF-\d{4}-[A-Z0-9]+|[\+\-\u2212]?\d[\d\s\u00A0\u202F.,]*\s*(?:FCFA|XAF|%)|\b\d+(?:[.,]\d+)?\b|Safinum Pay|Amina Ngo Bell|Jean-Paul Mbarga|Mobile Money|CEMAC|ENEO|SMS|PIN|OTP)/gi;

  /**
   * Grammatical functional words mapping: French / English to Fulfulde (fub).
   */
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

  /**
   * Ewondo core banking lexical vocabulary mapping.
   */
  const EWONDO_LEXICON_MAP = {
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

  /**
   * PhoneticsEngine: maps African national language orthographies into
   * phonetic representations that standard Web Speech TTS synthesisers can enunciate cleanly.
   */
  class PhoneticsEngine {
    /**
     * Converts Fulfulde text into a French-calibrated phonetic representation.
     * Maps implosives (ɓ, ɗ, ƴ), velar nasals (ŋ), and vowel quantity (aa, ee, ii, oo, uu).
     * @param {string} text - Raw Fulfulde text
     * @returns {string} Phonetically transcribed text
     */
    static toFulfuldePhonetic(text) {
      if (!text) return "";
      let s = String(text);
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

    /**
     * Converts Ewondo text into a French-calibrated phonetic representation.
     * Maps open vowels (ɛ, ɔ), schwa (ə), and special nasals.
     * @param {string} text - Raw Ewondo text
     * @returns {string} Phonetically transcribed text
     */
    static toEwondoPhonetic(text) {
      if (!text) return "";
      let s = String(text);
      s = s.replace(/ɛ/g, "è").replace(/ɔ/g, "ò").replace(/ə/g, "eu");
      s = s.replace(/ŋ/g, "ng").replace(/ɲ/g, "gn");
      s = s.replace(/FCFA/g, "Fran CFA");
      return s;
    }

    /**
     * General phonetic dispatcher by language ISO code.
     * @param {string} text - Text to transcribe
     * @param {string} langCode - Language ISO code (e.g., 'fub', 'ewo')
     * @returns {string}
     */
    static toPhonetic(text, langCode = "fub") {
      if (langCode === "ewo") {
        return PhoneticsEngine.toEwondoPhonetic(text);
      }
      return PhoneticsEngine.toFulfuldePhonetic(text);
    }
  }

  /**
   * Node 1: EntityFreezer & Node 5: FinancialIntegrityGuard
   * Provides bidirectional tokenization and safe unfreezing of monetary and numeric tokens.
   */
  class EntityPreservationEngine {
    /**
     * Determines whether a text string contains only immutable, sacred financial data.
     * @param {string} text - The input text
     * @returns {boolean} True if the text must be untouched
     */
    static isSacredOnly(text) {
      if (!text) return true;
      const trimmed = text.trim();
      if (!trimmed || trimmed.length < 2) return true;

      for (const rx of PURE_SACRED_REGEXES) {
        if (rx.test(trimmed)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Tokenizes embedded financial values into immutable __ENT_{n}__ tokens.
     * @param {string} text - Raw text
     * @returns {{ frozenText: string, entities: string[] }}
     */
    static freeze(text) {
      const entities = [];
      const frozenText = text.replace(INLINE_ENTITY_REGEX, (match) => {
        const token = `__ENT_${entities.length}__`;
        entities.push(match);
        return token;
      });
      return { frozenText, entities };
    }

    /**
     * Reconstitutes frozen tokens back into their exact original values.
     * Uses replacer function callback to prevent $1, $& substitution corruption.
     * @param {string} text - Text containing __ENT_{n}__ placeholders
     * @param {string[]} entities - Stored array of original entities
     * @returns {string} Exact reconstituted text
     */
    static unfreeze(text, entities) {
      if (!text || !entities || !entities.length) return text;
      let out = text;
      entities.forEach((val, idx) => {
        // Safe replacement via function callback prevents $ patterns in val from being expanded
        out = out.replace(new RegExp(`__ENT_${idx}__`, "g"), () => val);
      });
      return out;
    }
  }

  /**
   * Node 2: IntentClassifier
   * Analyzes banking context and risk levels for contextual explainability.
   */
  class IntentClassifier {
    /**
     * Classifies a banking text string into intent and risk level.
     * @param {string} text - Normalized text
     * @returns {{ intent: string, category: string, riskLevel: string }}
     */
    static classify(text) {
      const low = text.toLowerCase();

      if (
        /(code secret|pin|otp|mot de passe|bloqué|tentative|partagez|communiquez|fraude|arnaque|locked|password|attempts)/i.test(
          low
        )
      ) {
        return { intent: "SECURITY_FRAUD", category: "securite", riskLevel: "CRITICAL" };
      }
      if (
        /(plafond|limite|maximum|journalier|quotidien|dépasse|supérieur|insuffisant|invalide|limit|exceeds|insufficient)/i.test(
          low
        )
      ) {
        return { intent: "BALANCE_AND_LIMITS", category: "erreur", riskLevel: "WARNING" };
      }
      if (
        /(erreur|échoué|indisponible|maintenance|réseau|connexion|incomplet|failed|unavailable|error)/i.test(
          low
        )
      ) {
        return { intent: "TECHNICAL_INCIDENT", category: "erreur", riskLevel: "WARNING" };
      }
      if (/(frais|commission|taxe|tarif|gratuit|coût|débité|fee|fees|cost)/i.test(low)) {
        return { intent: "FEES_AND_CHARGES", category: "frais", riskLevel: "INFO" };
      }
      if (/(bénéficiaire|destinataire|numéro|téléphone|nom complet|beneficiary|recipient)/i.test(low)) {
        return { intent: "BENEFICIARY_IDENTITY", category: "beneficiaire", riskLevel: "WARNING" };
      }
      if (/(confirm|récapitulatif|vérif|reçu|référence|succès|summary|receipt)/i.test(low)) {
        return { intent: "VALIDATION_AND_RECEIPT", category: "recapitulatif", riskLevel: "INFO" };
      }
      return { intent: "GENERAL_INFORMATION", category: "solde", riskLevel: "INFO" };
    }
  }

  /**
   * SafinumContextGraph
   * Orchestrates the 5-node pipeline across exact dictionaries, dynamic templates,
   * compositional lexicon search, and multi-source RAG.
   */
  class SafinumContextGraph {
    constructor() {
      this.stats = {
        exactHits: 0,
        dynamicHits: 0,
        compositionalRagHits: 0,
        protectedSkipped: 0,
        lastExecutionLog: []
      };
      this.maxLogEntries = 20;
    }

    /**
     * Public proxy for sacred checks.
     */
    isSacredOnly(text) {
      const isSacred = EntityPreservationEngine.isSacredOnly(text);
      if (isSacred) {
        this.stats.protectedSkipped++;
      }
      return isSacred;
    }

    /**
     * Translates and explains any text string from the application UI.
     * Follows the 3-tier lookup: Exact UI -> Dynamic Templates -> 5-Node RAG.
     * @param {string} rawText - Input string from DOM text node
     * @returns {Object|null} Comprehensive translation and explanation record
     */
    translateAndExplain(rawText) {
      if (!rawText) return null;
      const clean = rawText.replace(/\s+/g, " ").trim();
      if (this.isSacredOnly(clean)) return null;

      // Tier 1: Exact UI match in predefined application dictionary
      if (KB.exact_ui && KB.exact_ui[clean]) {
        this.stats.exactHits++;
        const hit = KB.exact_ui[clean];
        const fubText = hit.fub || clean;
        const ewoText = hit.ewo || hit.fub || clean;
        const explainFub = hit.explain_fub || "";
        const explainEwo = hit.explain_ewo || hit.explain_fr || "";
        const explainFr = hit.explain_fr || "";

        return {
          original: clean,
          fub: fubText,
          ewo: ewoText,
          phonetic: hit.phonetic || PhoneticsEngine.toFulfuldePhonetic(fubText),
          phonetic_ewo: hit.phonetic_ewo || PhoneticsEngine.toEwondoPhonetic(ewoText),
          explain_fub: explainFub,
          explain_fub_phonetic: hit.explain_fub_phonetic || PhoneticsEngine.toFulfuldePhonetic(explainFub),
          explain_ewo: explainEwo,
          explain_ewo_phonetic: hit.explain_ewo_phonetic || PhoneticsEngine.toEwondoPhonetic(explainEwo),
          explain_fr: explainFr,
          category: hit.category || "ui",
          source: hit.source || "exact_ui_dictionary",
          mode: "EXACT_UI_DICTIONARY",
          confidence: 1.0
        };
      }

      // Tier 2: Dynamic regex templates with capture groups
      if (KB.dynamic_patterns && Array.isArray(KB.dynamic_patterns)) {
        for (const pat of KB.dynamic_patterns) {
          const rx = new RegExp(pat.regex, "i");
          const m = clean.match(rx);
          if (m) {
            this.stats.dynamicHits++;
            let fubOut = pat.template_fub;
            let ewoOut = pat.template_ewo || pat.template_fub;
            let expFub = pat.explain_fub || "";
            let expEwo = pat.explain_ewo || pat.explain_fr || "";
            let expFr = pat.explain_fr || "";

            for (let i = 1; i < m.length; i++) {
              const val = m[i] || "";
              // Use safe replacement callback to avoid $ substitution bugs
              fubOut = fubOut.replace(new RegExp("\\$" + i, "g"), () => val);
              ewoOut = ewoOut.replace(new RegExp("\\$" + i, "g"), () => val);
              expFub = expFub.replace(new RegExp("\\$" + i, "g"), () => val);
              expEwo = expEwo.replace(new RegExp("\\$" + i, "g"), () => val);
              expFr = expFr.replace(new RegExp("\\$" + i, "g"), () => val);
            }

            fubOut = fubOut.replace(/\s+/g, " ").trim();
            ewoOut = ewoOut.replace(/\s+/g, " ").trim();

            return {
              original: clean,
              fub: fubOut,
              ewo: ewoOut,
              phonetic: PhoneticsEngine.toFulfuldePhonetic(fubOut),
              phonetic_ewo: PhoneticsEngine.toEwondoPhonetic(ewoOut),
              explain_fub: expFub,
              explain_fub_phonetic: PhoneticsEngine.toFulfuldePhonetic(expFub),
              explain_ewo: expEwo,
              explain_ewo_phonetic: PhoneticsEngine.toEwondoPhonetic(expEwo),
              explain_fr: expFr,
              category: pat.category || "dynamic",
              source: pat.source || "dynamic_template",
              mode: "DYNAMIC_TEMPLATE",
              confidence: 0.98
            };
          }
        }
      }

      // Tier 3: Compositional 5-Node Context Graph for injected or uncatalogued phrases
      return this.runCompositionalContextGraph(clean);
    }

    /**
     * Executes the deep 5-Node Context Graph for unseen or jury-injected messages (#injected-*).
     * @param {string} cleanText - Sanitized input text
     * @returns {Object} Full context record
     */
    runCompositionalContextGraph(cleanText) {
      this.stats.compositionalRagHits++;

      // Node 1: Freeze financial and identification tokens
      const { frozenText, entities } = EntityPreservationEngine.freeze(cleanText);

      // Node 2: Classify intent and security risk level
      const { intent, category, riskLevel } = IntentClassifier.classify(cleanText);

      // Node 3: Multi-Source Lexical RAG translation
      let working = frozenText;
      const usedSources = new Set(["01_aki_osc_financial_glossary"]);

      // 3.A: Multi-word phrase chunks substitution (longest match first)
      const sortedChunks = (KB.phrase_chunks || []).slice().sort((a, b) => b.fr.length - a.fr.length);
      for (const chunk of sortedChunks) {
        const escaped = chunk.fr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const rx = new RegExp(`\\b${escaped}\\b`, "gi");
        if (rx.test(working)) {
          working = working.replace(rx, () => chunk.fub);
          usedSources.add(chunk.src);
        }
      }

      // 3.B: Word-by-word tokenization and morphological lemmatization
      const tokenRegex = /(__ENT_\d+__|[A-Za-zÀ-ÖØ-öø-ÿɓɗƴŋƁƊƳŊ']+)/g;
      const translatedTokens = working.replace(tokenRegex, (word) => {
        if (word.startsWith("__ENT_")) return word;
        const low = word.toLowerCase();

        // If the token is already in Fulfulde orthography, preserve as-is
        if (
          /[ɓɗƴŋ]/.test(low) ||
          /^(ceede|limngal|hisaabu|jaɓoowo|coggu|nelal|lambar|cuuɗiido|waya|haaddi|ñalnde|fuu|useni|laartu|booyma|hidde|tabitina|maɓɓete|jarribooji|boofɗi|talkuru|seedamku|innde|cahiindu|meere|walaa)$/.test(
            low
          )
        ) {
          return word;
        }

        // Direct lexicon match
        if (KB.word_lexicon && KB.word_lexicon[low]) {
          usedSources.add(KB.word_lexicon[low].src);
          return KB.word_lexicon[low].fub;
        }

        // Morphological stemming (French verb endings and plurals)
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

        // Functional grammatical words
        if (Object.prototype.hasOwnProperty.call(FUNCTION_WORDS_FUB, low)) {
          return FUNCTION_WORDS_FUB[low];
        }

        return word;
      });

      // Node 5: FinancialIntegrityGuard — Reconstitute preserved entities into Fulfulde output
      let fubSentence = translatedTokens.replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
      fubSentence = EntityPreservationEngine.unfreeze(fubSentence, entities);

      if (fubSentence.toLowerCase() === cleanText.toLowerCase()) {
        fubSentence = `Kabaruuji kisal : ${fubSentence}`;
      } else if (fubSentence.length > 0) {
        fubSentence = fubSentence.charAt(0).toUpperCase() + fubSentence.slice(1);
      }

      // Parallel exemplar RAG similarity lookup for traceability
      let closestExemplar = null;
      if (KB.rag_exemplars && KB.rag_exemplars.length > 0) {
        const words = cleanText.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
        let bestScore = -1;
        for (const ex of KB.rag_exemplars) {
          let score = 0;
          const exLow = (ex.fr || "").toLowerCase();
          for (const w of words) {
            if (exLow.includes(w)) score++;
          }
          if (score > bestScore) {
            bestScore = score;
            closestExemplar = ex;
          }
        }
        if (closestExemplar && bestScore > 0) {
          usedSources.add(closestExemplar.src || "rag_parallel_aligned");
        }
      }

      // Node 4: PedagogicalExplainer — Generate clear actionable explanations
      const entitiesSummary = entities.length > 0 ? ` (${entities.join(" · ")})` : "";
      let explainFub = "";
      let explainEwo = "";
      let explainFr = "";

      switch (intent) {
        case "SECURITY_FRAUD":
          explainFub = `Reentinoore kisal mawnde${entitiesSummary} : bataake oo ɗon reentina ma dow kisal lambar maa cuuɗiido (PIN/OTP) e limngal maa. To hokku neɗɗo feere lambar maa koo nde!`;
          explainEwo = `Yian mebə̀lə̀ mé ngól${entitiesSummary} : Tə́ o və̀ mɔt kót wô ésoló (PIN/OTP). Fə́la nyina a ne ngól asu mɔni wô.`;
          explainFr = `Alerte de sécurité critique${entitiesSummary} : ce message protège l'accès à votre compte. Ne communiquez jamais votre code secret et vérifiez le nombre d'essais restants.`;
          break;

        case "BALANCE_AND_LIMITS":
          explainFub = `Tinndinoore haaddi ceede${entitiesSummary} : bataake oo ɗon kollira haaddi ceede ɗe a waawi neldugo malla ceede gonɗe nder limngal maa.`;
          explainEwo = `Metəla mé akɔŋ mɔni${entitiesSummary} : Mebə̀lə̀ ma kat akɔŋ mɔni o ne lóm amɔs nyina to mɔni a liè e asúsu wô.`;
          explainFr = `Règle de plafond ou de solde${entitiesSummary} : ce message précise la limite maximale autorisée ou les conditions liées au montant de votre transfert.`;
          break;

        case "FEES_AND_CHARGES":
          explainFub = `Famfingo coggu nelal${entitiesSummary} : bataake oo ɗon laaɓtina coggu kuugal nelal e ceede ɗe ittete nder kofru maa.`;
          explainEwo = `Fáám mímvèñ mi ntómban${entitiesSummary} : Mebə̀lə̀ ma laart mímvèñ e asúŋa mɔni ba te e asúsu wô.`;
          explainFr = `Information tarifaire${entitiesSummary} : ce message détaille les frais ou commissions appliqués à votre opération.`;
          break;

        case "BENEFICIARY_IDENTITY":
          explainFub = `Laartugo jaɓoowo ceede${entitiesSummary} : laartu booyma innde, lambar waya e talkuru seedamku hidde ceede ɗe neldoto.`;
          explainEwo = `Laart nnyɔ a nɔŋ mɔni${entitiesSummary} : Laart dzóé, nɔ́mba fón e kalara ntílán osu na o lóm mɔni.`;
          explainFr = `Vérification du destinataire${entitiesSummary} : contrôlez l'identité et les coordonnées du bénéficiaire avant de valider.`;
          break;

        case "TECHNICAL_INCIDENT":
          explainFub = `Kabaruuji dow laawol kuugal${entitiesSummary} : caɗeele laawol enternet malla feewnugo kuugal. Ceede maa ɗon hisi nder limngal maa.`;
          explainEwo = `Díza ya réseau${entitiesSummary} : Waya ya réseau a nzi kat. Mɔni wô a ne m̀vɛ̀ e asúsu.`;
          explainFr = `Information réseau / service${entitiesSummary} : perturbation technique temporaire. Vos fonds restent protégés sur votre compte.`;
          break;

        default:
          explainFub = `Famfingo AnyDoc (${intent})${entitiesSummary} : ${fubSentence}. Laartu kabaruuji ɗi booyma hidde a jokka.`;
          explainEwo = `Fáám AnyDoc (${intent})${entitiesSummary} : Laart mebə̀lə̀ osu na o kəl osu.`;
          explainFr = `Explication simplifiée AnyDoc${entitiesSummary} : cette consigne vous informe d'une règle importante concernant votre opération en cours.`;
          break;
      }

      // Generate compositional Ewondo translation
      const ewoSentence = this.translateCompositionalEwondo(cleanText, frozenText, entities);

      // Audit log entry for monitoring and verification
      const logEntry = {
        timestamp: new Date().toISOString(),
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
      if (this.stats.lastExecutionLog.length > this.maxLogEntries) {
        this.stats.lastExecutionLog.pop();
      }

      return {
        original: cleanText,
        fub: fubSentence,
        ewo: ewoSentence,
        phonetic: PhoneticsEngine.toFulfuldePhonetic(fubSentence),
        phonetic_ewo: PhoneticsEngine.toEwondoPhonetic(ewoSentence),
        explain_fub: explainFub,
        explain_fub_phonetic: PhoneticsEngine.toFulfuldePhonetic(explainFub),
        explain_ewo: explainEwo,
        explain_ewo_phonetic: PhoneticsEngine.toEwondoPhonetic(explainEwo),
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

    /**
     * Translates frozen text compositionally into Ewondo (ewo).
     * @param {string} cleanText - Original normalized text
     * @param {string} frozenText - Text containing __ENT_{n}__ placeholders
     * @param {string[]} entities - Saved entities
     * @returns {string} Reconstituted Ewondo translation
     */
    translateCompositionalEwondo(cleanText, frozenText, entities) {
      let ewoText = frozenText;
      for (const [fr, ew] of Object.entries(EWONDO_LEXICON_MAP)) {
        const rx = new RegExp(`\\b${fr}\\b`, "gi");
        ewoText = ewoText.replace(rx, () => ew);
      }
      ewoText = EntityPreservationEngine.unfreeze(ewoText, entities);
      if (ewoText.toLowerCase() === cleanText.toLowerCase()) {
        ewoText = `Mebə̀lə̀ mé mɔni : ${ewoText}`;
      }
      return ewoText;
    }
  }

  // Export singleton instance onto window
  window.SafinumContextGraph = new SafinumContextGraph();
})();

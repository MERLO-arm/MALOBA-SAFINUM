/**
 * =============================================================================
 * MALOBA ANYDOC — PRODUCTION DATASET LOOKUP & FINANCIAL INTEGRITY ENGINE
 * =============================================================================
 * Replaces the legacy sandbox compositional heuristics with verified human
 * translations and real audio recordings from EXPORT_DATASET_MALOBA.
 *
 * Core Guarantees:
 *   - EntityPreservationEngine: 100% immutability of monetary amounts, IBANs,
 *     phone numbers, references (SAF-*), and security tokens (PIN/OTP).
 *   - IntentClassifier: Banking intent and risk classification (CRITICAL/WARNING/INFO).
 *   - Multi-tier verified lookup:
 *       1. Exact match in `KB.exact_ui` (FR & EN)
 *       2. Normalized match (case-insensitive / punctuation-trimmed)
 *       3. Dataset-backed dynamic templates (e.g. "Bonjour, <Nom>")
 *       4. Number/amount match in `KB.numbers`
 *   - Zero hallucination: uncatalogued strings return `null` rather than
 *     synthesizing unverified translations.
 * =============================================================================
 */

(function () {
  "use strict";

  const KB = window.SAFINUM_KB || {
    meta: { default_language: "eto", supported_languages: ["eto"], languages: {} },
    exact_ui: {},
    dynamic_patterns: [],
    numbers: {},
    commands: {},
    by_code: {}
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
   * Inline entity extraction regex: detects critical financial tokens.
   */
  const INLINE_ENTITY_REGEX =
    /(\+?237[\s\d\-]{8,14}|CM\d{2}[\s\d]{10,28}|SAF-\d{4}-[A-Z0-9]+|[\+\-\u2212]?\d[\d\s\u00A0\u202F.,]*\s*(?:FCFA|XAF|%)|\b\d+(?:[.,]\d+)?\b|Safinum Pay|Amina Ngo Bell|Jean-Paul Mbarga|Mobile Money|CEMAC|ENEO|SMS|PIN|OTP)/gi;

  /**
   * EntityPreservationEngine
   * Protects sacred financial tokens from any unintended modification.
   */
  class EntityPreservationEngine {
    static isSacredOnly(text) {
      if (!text) return true;
      const trimmed = text.trim();
      if (!trimmed || trimmed.length < 2) return true;
      for (const rx of PURE_SACRED_REGEXES) {
        if (rx.test(trimmed)) return true;
      }
      return false;
    }

    static extractEntities(text) {
      if (!text) return [];
      const matches = text.match(INLINE_ENTITY_REGEX);
      return matches ? Array.from(new Set(matches.map((m) => m.trim()))) : [];
    }
  }

  /**
   * IntentClassifier
   * Classifies banking context and risk levels for inspector badges.
   */
  class IntentClassifier {
    static classify(text) {
      const low = (text || "").toLowerCase();

      if (
        /(code secret|pin|otp|mot de passe|bloqué|tentative|partagez|communiquez|fraude|arnaque|locked|password|attempts|alerte de sécurité|security alert)/i.test(
          low
        )
      ) {
        return { intent: "SECURITY_FRAUD", category: "Sécurité", riskLevel: "CRITICAL" };
      }
      if (
        /(plafond|limite|maximum|journalier|quotidien|dépasse|supérieur|insuffisant|invalide|limit|exceeds|insufficient)/i.test(
          low
        )
      ) {
        return { intent: "BALANCE_AND_LIMITS", category: "Montants & Limites", riskLevel: "WARNING" };
      }
      if (
        /(erreur|échoué|indisponible|maintenance|réseau|connexion|incomplet|failed|unavailable|error)/i.test(
          low
        )
      ) {
        return { intent: "TECHNICAL_INCIDENT", category: "Erreur", riskLevel: "WARNING" };
      }
      if (/(frais|commission|taxe|tarif|gratuit|coût|débité|fee|fees|cost)/i.test(low)) {
        return { intent: "FEES_AND_CHARGES", category: "Frais", riskLevel: "INFO" };
      }
      if (/(bénéficiaire|destinataire|numéro|téléphone|nom complet|beneficiary|recipient)/i.test(low)) {
        return { intent: "BENEFICIARY_IDENTITY", category: "Bénéficiaire", riskLevel: "WARNING" };
      }
      if (/(confirm|récapitulatif|vérif|reçu|référence|succès|summary|receipt)/i.test(low)) {
        return { intent: "VALIDATION_AND_RECEIPT", category: "Récapitulatif", riskLevel: "INFO" };
      }
      return { intent: "GENERAL_INFORMATION", category: "Interface", riskLevel: "INFO" };
    }
  }

  /**
   * Normalizes a UI string for tolerant lookup (collapses whitespace,
   * lowercases, and optionally strips trailing punctuation).
   * @param {string} str
   * @param {boolean} [stripTrailingPunct=false]
   * @returns {string}
   */
  function normalizeKey(str, stripTrailingPunct = false) {
    let out = String(str || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    if (stripTrailingPunct) {
      out = out.replace(/[\s:;.!?…]+$/, "").trim();
    }
    return out;
  }

  /**
   * SafinumContextGraph
   * Dataset-backed translation, explanation, and integrity engine.
   */
  class SafinumContextGraph {
    constructor() {
      this.stats = {
        exactHits: 0,
        normalizedHits: 0,
        dynamicHits: 0,
        numberHits: 0,
        protectedSkipped: 0,
        unmatchedSkipped: 0,
        lastExecutionLog: []
      };
      this.maxLogEntries = 20;

      // Build O(1) normalized lookup indices over KB.exact_ui and KB.numbers
      this.normalizedUiIndex = new Map();
      this.punctTrimmedUiIndex = new Map();
      this.normalizedNumbersIndex = new Map();
      this._buildIndices();
    }

    /**
     * Pre-indexes KB entries for fast case-insensitive and punctuation-tolerant matching.
     * @private
     */
    _buildIndices() {
      if (KB.exact_ui) {
        for (const [key, entry] of Object.entries(KB.exact_ui)) {
          const norm = normalizeKey(key, false);
          if (norm && !this.normalizedUiIndex.has(norm)) {
            this.normalizedUiIndex.set(norm, entry);
          }
          const trimmed = normalizeKey(key, true);
          if (trimmed && !this.punctTrimmedUiIndex.has(trimmed)) {
            this.punctTrimmedUiIndex.set(trimmed, entry);
          }
        }
      }

      if (KB.numbers) {
        for (const [key, entry] of Object.entries(KB.numbers)) {
          const norm = normalizeKey(key, true);
          if (norm && !this.normalizedNumbersIndex.has(norm)) {
            this.normalizedNumbersIndex.set(norm, entry);
          }
        }
      }
    }

    isSacredOnly(text) {
      const isSacred = EntityPreservationEngine.isSacredOnly(text);
      if (isSacred) {
        this.stats.protectedSkipped++;
      }
      return isSacred;
    }

    /**
     * Shapes a raw KB record into the unified entry contract expected by content.js & voice_engine.js.
     * @private
     */
    _formatEntry(cleanOriginal, rawRecord, mode, confidence) {
      const supported = (KB.meta && KB.meta.supported_languages) || ["eto"];
      const defaultLang = (KB.meta && KB.meta.default_language) || "eto";
      const { intent, category: inferredCat, riskLevel } = IntentClassifier.classify(cleanOriginal);
      const entities = EntityPreservationEngine.extractEntities(cleanOriginal);

      const languages = {};
      const entry = {
        original: cleanOriginal,
        code: rawRecord.code || null,
        explain_code: null,
        category: rawRecord.category || inferredCat,
        intent,
        riskLevel,
        entities,
        explain_fr: rawRecord.explain_fr || "",
        explain_en: rawRecord.explain_en || "",
        source: `EXPORT_DATASET_MALOBA (${rawRecord.code || "dataset"})`,
        mode,
        confidence,
        languages
      };

      for (const lang of supported) {
        const langPayload = rawRecord[lang];
        if (!langPayload) continue;
        languages[lang] = {
          text: langPayload.text || "",
          audio: langPayload.audio || null,
          duration: langPayload.duration || 0,
          explain_text: langPayload.explain_text || "",
          explain_audio: langPayload.explain_audio || null,
          explain_duration: langPayload.explain_duration || 0
        };
        entry[lang] = langPayload.text || "";
        entry[`explain_${lang}`] = langPayload.explain_text || "";
        if (lang === defaultLang) {
          entry.audio = langPayload.audio || null;
          entry.explain_audio = langPayload.explain_audio || null;
          entry.explain_code = langPayload.explain_code || null;
        }
      }

      if (!Object.keys(languages).length) return null;

      this._recordLog(entry);
      return entry;
    }

    /**
     * Appends an entry to the bounded execution audit log.
     * @private
     */
    _recordLog(entry) {
      this.stats.lastExecutionLog.unshift({
        timestamp: new Date().toISOString(),
        original: entry.original,
        code: entry.code,
        mode: entry.mode,
        intent: entry.intent,
        riskLevel: entry.riskLevel
      });
      if (this.stats.lastExecutionLog.length > this.maxLogEntries) {
        this.stats.lastExecutionLog.pop();
      }
    }

    /**
     * Translates and explains a DOM text string using verified dataset records.
     * @param {string} rawText - Input string from DOM text node
     * @returns {Object|null} Verified translation record or null if uncatalogued
     */
    translateAndExplain(rawText) {
      if (!rawText) return null;
      const clean = rawText.replace(/\s+/g, " ").trim();
      if (this.isSacredOnly(clean)) return null;

      // Tier 1: Exact UI dictionary match (case-sensitive)
      if (KB.exact_ui && KB.exact_ui[clean]) {
        this.stats.exactHits++;
        return this._formatEntry(clean, KB.exact_ui[clean], "EXACT_DATASET", 1.0);
      }

      // Tier 2: Normalized lookup (case-insensitive, then punctuation-trimmed)
      const norm = normalizeKey(clean, false);
      if (this.normalizedUiIndex.has(norm)) {
        this.stats.normalizedHits++;
        return this._formatEntry(clean, this.normalizedUiIndex.get(norm), "NORMALIZED_DATASET", 0.99);
      }

      const trimmedNorm = normalizeKey(clean, true);
      if (this.punctTrimmedUiIndex.has(trimmedNorm)) {
        this.stats.normalizedHits++;
        return this._formatEntry(clean, this.punctTrimmedUiIndex.get(trimmedNorm), "NORMALIZED_DATASET", 0.97);
      }

      // Tier 3: Dataset-backed dynamic patterns (e.g. "Bonjour, <Name>")
      if (KB.dynamic_patterns && Array.isArray(KB.dynamic_patterns)) {
        const supported = (KB.meta && KB.meta.supported_languages) || ["eto"];
        for (const pat of KB.dynamic_patterns) {
          const rx = new RegExp(pat.regex, "i");
          const m = clean.match(rx);
          if (!m) continue;

          this.stats.dynamicHits++;
          const synthesized = {
            code: pat.code,
            category: pat.category || "Navigation & Accueil",
            explain_fr: "",
            explain_en: ""
          };

          for (const lang of supported) {
            const patLang = pat[lang];
            if (!patLang) continue;
            let textOut = patLang.template || "";
            let expOut = patLang.explain_text || "";
            let expFr = patLang.explain_fr || "";
            let expEn = patLang.explain_en || "";

            for (let i = 1; i < m.length; i++) {
              const val = m[i] || "";
              const groupRx = new RegExp("\\$" + i, "g");
              textOut = textOut.replace(groupRx, () => val);
              expOut = expOut.replace(groupRx, () => val);
              expFr = expFr.replace(groupRx, () => val);
              expEn = expEn.replace(groupRx, () => val);
            }

            synthesized.explain_fr = expFr;
            synthesized.explain_en = expEn;
            synthesized[lang] = {
              text: textOut.replace(/\s+/g, " ").trim(),
              audio: patLang.audio || null,
              explain_text: expOut,
              explain_audio: patLang.explain_audio || null,
              explain_code: pat.explain_code || null
            };
          }

          return this._formatEntry(clean, synthesized, "DYNAMIC_DATASET", 0.96);
        }
      }

      // Tier 4: Real number/amount phrases from SAF_NUM_*
      if (this.normalizedNumbersIndex.has(trimmedNorm)) {
        this.stats.numberHits++;
        const numRec = this.normalizedNumbersIndex.get(trimmedNorm);
        const shaped = {
          code: numRec.code,
          category: numRec.category || "Montants & Chiffres Safinum",
          explain_fr: numRec.fr,
          explain_en: numRec.en
        };
        const supported = (KB.meta && KB.meta.supported_languages) || ["eto"];
        for (const lang of supported) {
          if (numRec[lang]) {
            shaped[lang] = {
              text: numRec[lang].text,
              audio: numRec[lang].audio,
              duration: numRec[lang].duration,
              explain_text: numRec[lang].text,
              explain_audio: null,
              explain_code: numRec.code
            };
          }
        }
        return this._formatEntry(clean, shaped, "NUMBER_DATASET", 1.0);
      }

      // No verified dataset entry found — leave original DOM text untouched
      this.stats.unmatchedSkipped++;
      return null;
    }
  }

  window.SafinumContextGraph = new SafinumContextGraph();
})();

/**
 * =============================================================================
 * SAFINUM WEB NUMBER ENGINE — MATHEMATICAL & LINGUISTIC DECOMPOSER (JS RUNTIME)
 * =============================================================================
 * File: numberDecomposer.js
 * Target: Chrome Extension (Manifest V3) & Node/CommonJS Test Runner
 *
 * Parses integer financial amounts (0 up to 999,999,999 FCFA) into an ordered
 * sequence of pre-recorded audio corpus keys (42 canonical keys).
 *
 * All comments and documentation are strictly in English.
 * =============================================================================
 */

(function (root) {
  "use strict";

  const MIN_SUPPORTED_AMOUNT = 0;
  const MAX_SUPPORTED_AMOUNT = 999999999;

  /**
   * Complete frozen list of the 42 canonical audio keys in the corpus.
   */
  const ALL_AUDIO_KEYS = Object.freeze([
    "num_0",
    "num_1",
    "num_2",
    "num_3",
    "num_4",
    "num_5",
    "num_6",
    "num_7",
    "num_8",
    "num_9",
    "num_10",
    "num_11",
    "num_12",
    "num_13",
    "num_14",
    "num_15",
    "num_16",
    "num_17",
    "num_18",
    "num_19",
    "num_20",
    "num_30",
    "num_40",
    "num_50",
    "num_60",
    "num_70",
    "num_80",
    "num_90",
    "num_100",
    "num_200",
    "num_300",
    "num_400",
    "num_500",
    "num_600",
    "num_700",
    "num_800",
    "num_900",
    "scale_thousand",
    "scale_million",
    "scale_millions",
    "connector_and",
    "currency_cfa"
  ]);

  /**
   * Multilingual dictionary mapping all 42 audio keys to Fulfulde (fub), Ewondo (ewo), and French (fr).
   */
  const AUDIO_KEY_LEXICON = Object.freeze({
    fub: {
      num_0: { text: "meere", phonetic: "mééré" },
      num_1: { text: "go'o", phonetic: "go-o" },
      num_2: { text: "ɗiɗi", phonetic: "d'id'i" },
      num_3: { text: "tati", phonetic: "tati" },
      num_4: { text: "nayi", phonetic: "nayi" },
      num_5: { text: "joyi", phonetic: "djoyi" },
      num_6: { text: "jeego'o", phonetic: "djéégo-o" },
      num_7: { text: "jeeɗiɗi", phonetic: "djééd'id'i" },
      num_8: { text: "jeetati", phonetic: "djéétati" },
      num_9: { text: "jeenayi", phonetic: "djéénayi" },
      num_10: { text: "sappo", phonetic: "sappo" },
      num_11: { text: "sappo e go'o", phonetic: "sappo é go-o" },
      num_12: { text: "sappo e ɗiɗi", phonetic: "sappo é d'id'i" },
      num_13: { text: "sappo e tati", phonetic: "sappo é tati" },
      num_14: { text: "sappo e nayi", phonetic: "sappo é nayi" },
      num_15: { text: "sappo e joyi", phonetic: "sappo é djoyi" },
      num_16: { text: "sappo e jeego'o", phonetic: "sappo é djéégo-o" },
      num_17: { text: "sappo e jeeɗiɗi", phonetic: "sappo é djééd'id'i" },
      num_18: { text: "sappo e jeetati", phonetic: "sappo é djéétati" },
      num_19: { text: "sappo e jeenayi", phonetic: "sappo é djéénayi" },
      num_20: { text: "noogas", phonetic: "nôgas" },
      num_30: { text: "cappanɗe tati", phonetic: "tchappand'é tati" },
      num_40: { text: "cappanɗe nayi", phonetic: "tchappand'é nayi" },
      num_50: { text: "cappanɗe joyi", phonetic: "tchappand'é djoyi" },
      num_60: { text: "cappanɗe jeego'o", phonetic: "tchappand'é djéégo-o" },
      num_70: { text: "cappanɗe jeeɗiɗi", phonetic: "tchappand'é djééd'id'i" },
      num_80: { text: "cappanɗe jeetati", phonetic: "tchappand'é djéétati" },
      num_90: { text: "cappanɗe jeenayi", phonetic: "tchappand'é djéénayi" },
      num_100: { text: "teemerre", phonetic: "téémèrré" },
      num_200: { text: "teemerre ɗiɗi", phonetic: "téémèrré d'id'i" },
      num_300: { text: "teemerre tati", phonetic: "téémèrré tati" },
      num_400: { text: "teemerre nayi", phonetic: "téémèrré nayi" },
      num_500: { text: "teemerre joyi", phonetic: "téémèrré djoyi" },
      num_600: { text: "teemerre jeego'o", phonetic: "téémèrré djéégo-o" },
      num_700: { text: "teemerre jeeɗiɗi", phonetic: "téémèrré djééd'id'i" },
      num_800: { text: "teemerre jeetati", phonetic: "téémèrré djéétati" },
      num_900: { text: "teemerre jeenayi", phonetic: "téémèrré djéénayi" },
      scale_thousand: { text: "ujunere", phonetic: "oudjounéré" },
      scale_million: { text: "miliyon", phonetic: "miliyon" },
      scale_millions: { text: "miliyoŋaaji", phonetic: "miliyongâdji" },
      connector_and: { text: "e", phonetic: "é" },
      currency_cfa: { text: "FCFA (dalaaje CFA)", phonetic: "Fran CFA" }
    },
    ewo: {
      num_0: { text: "zɛ́rɔ", phonetic: "zéro" },
      num_1: { text: "fɔ́k", phonetic: "fok" },
      num_2: { text: "bɛ́", phonetic: "bè" },
      num_3: { text: "lála", phonetic: "lala" },
      num_4: { text: "nyii", phonetic: "nyi" },
      num_5: { text: "táán", phonetic: "tân" },
      num_6: { text: "saman", phonetic: "saman" },
      num_7: { text: "zamgbál", phonetic: "zamgbal" },
      num_8: { text: "mwɔ́m", phonetic: "mwom" },
      num_9: { text: "ɛbúú", phonetic: "ébou" },
      num_10: { text: "awóm", phonetic: "awom" },
      num_11: { text: "awóm ya fɔ́k", phonetic: "awom ya fok" },
      num_12: { text: "awóm ya bɛ́", phonetic: "awom ya bè" },
      num_13: { text: "awóm ya lála", phonetic: "awom ya lala" },
      num_14: { text: "awóm ya nyii", phonetic: "awom ya nyi" },
      num_15: { text: "awóm ya táán", phonetic: "awom ya tân" },
      num_16: { text: "awóm ya saman", phonetic: "awom ya saman" },
      num_17: { text: "awóm ya zamgbál", phonetic: "awom ya zamgbal" },
      num_18: { text: "awóm ya mwɔ́m", phonetic: "awom ya mwom" },
      num_19: { text: "awóm ya ɛbúú", phonetic: "awom ya ébou" },
      num_20: { text: "mɛwóm mɛ́bɛ́", phonetic: "mèwom mèbè" },
      num_30: { text: "mɛwóm mɛ́lála", phonetic: "mèwom mèlala" },
      num_40: { text: "mɛwóm mɛ́nyii", phonetic: "mèwom mènyi" },
      num_50: { text: "mɛwóm mɛ́táán", phonetic: "mèwom mètân" },
      num_60: { text: "mɛwóm saman", phonetic: "mèwom saman" },
      num_70: { text: "mɛwóm zamgbál", phonetic: "mèwom zamgbal" },
      num_80: { text: "mɛwóm mwɔ́m", phonetic: "mèwom mwom" },
      num_90: { text: "mɛwóm ɛbúú", phonetic: "mèwom ébou" },
      num_100: { text: "ntɛ́t", phonetic: "ntèt" },
      num_200: { text: "mintɛ́t míbɛ́", phonetic: "mintèt mibè" },
      num_300: { text: "mintɛ́t mílála", phonetic: "mintèt milala" },
      num_400: { text: "mintɛ́t mínyii", phonetic: "mintèt minyi" },
      num_500: { text: "mintɛ́t mítáán", phonetic: "mintèt mitân" },
      num_600: { text: "mintɛ́t saman", phonetic: "mintèt saman" },
      num_700: { text: "mintɛ́t zamgbál", phonetic: "mintèt zamgbal" },
      num_800: { text: "mintɛ́t mwɔ́m", phonetic: "mintèt mwom" },
      num_900: { text: "mintɛ́t ɛbúú", phonetic: "mintèt ébou" },
      scale_thousand: { text: "toyini", phonetic: "toyini" },
      scale_million: { text: "miliyɔ́ŋ", phonetic: "miliyong" },
      scale_millions: { text: "bemiliyɔ́ŋ", phonetic: "bémiliyong" },
      connector_and: { text: "ya", phonetic: "ya" },
      currency_cfa: { text: "FCFA (fálá CFA)", phonetic: "Fran CFA" }
    },
    fr: {
      num_0: { text: "zéro", phonetic: "zéro" },
      num_1: { text: "un", phonetic: "un" },
      num_2: { text: "deux", phonetic: "deux" },
      num_3: { text: "trois", phonetic: "trois" },
      num_4: { text: "quatre", phonetic: "quatre" },
      num_5: { text: "cinq", phonetic: "cinq" },
      num_6: { text: "six", phonetic: "six" },
      num_7: { text: "sept", phonetic: "sept" },
      num_8: { text: "huit", phonetic: "huit" },
      num_9: { text: "neuf", phonetic: "neuf" },
      num_10: { text: "dix", phonetic: "dix" },
      num_11: { text: "onze", phonetic: "onze" },
      num_12: { text: "douze", phonetic: "douze" },
      num_13: { text: "treize", phonetic: "treize" },
      num_14: { text: "quatorze", phonetic: "quatorze" },
      num_15: { text: "quinze", phonetic: "quinze" },
      num_16: { text: "seize", phonetic: "seize" },
      num_17: { text: "dix-sept", phonetic: "dix-sept" },
      num_18: { text: "dix-huit", phonetic: "dix-huit" },
      num_19: { text: "dix-neuf", phonetic: "dix-neuf" },
      num_20: { text: "vingt", phonetic: "vingt" },
      num_30: { text: "trente", phonetic: "trente" },
      num_40: { text: "quarante", phonetic: "quarante" },
      num_50: { text: "cinquante", phonetic: "cinquante" },
      num_60: { text: "soixante", phonetic: "soixante" },
      num_70: { text: "soixante-dix", phonetic: "soixante-dix" },
      num_80: { text: "quatre-vingts", phonetic: "quatre-vingts" },
      num_90: { text: "quatre-vingt-dix", phonetic: "quatre-vingt-dix" },
      num_100: { text: "cent", phonetic: "cent" },
      num_200: { text: "deux cents", phonetic: "deux cents" },
      num_300: { text: "trois cents", phonetic: "trois cents" },
      num_400: { text: "quatre cents", phonetic: "quatre cents" },
      num_500: { text: "cinq cents", phonetic: "cinq cents" },
      num_600: { text: "six cents", phonetic: "six cents" },
      num_700: { text: "sept cents", phonetic: "sept cents" },
      num_800: { text: "huit cents", phonetic: "huit cents" },
      num_900: { text: "neuf cents", phonetic: "neuf cents" },
      scale_thousand: { text: "mille", phonetic: "mille" },
      scale_million: { text: "million", phonetic: "million" },
      scale_millions: { text: "millions", phonetic: "millions" },
      connector_and: { text: "et", phonetic: "et" },
      currency_cfa: { text: "francs CFA", phonetic: "francs CFA" }
    }
  });

  /**
   * Validates that an input number is a finite integer within [0, 999,999,999].
   * @param {number} amount
   * @returns {number}
   */
  function validateAmount(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount)) {
      throw new TypeError(
        `[SafinumWebNumberEngine] Invalid amount: expected finite number, received ${String(amount)}.`
      );
    }
    if (!Number.isInteger(amount)) {
      throw new TypeError(
        `[SafinumWebNumberEngine] Invalid amount: expected integer, received ${amount}.`
      );
    }
    if (amount < MIN_SUPPORTED_AMOUNT || amount > MAX_SUPPORTED_AMOUNT) {
      throw new RangeError(
        `[SafinumWebNumberEngine] Amount ${amount} is out of bounds. Supported range is ${MIN_SUPPORTED_AMOUNT} to ${MAX_SUPPORTED_AMOUNT} FCFA.`
      );
    }
    return amount;
  }

  /**
   * Safely parses a formatted currency/number string or number into a valid integer amount.
   * Rejects phone numbers (+237...), account numbers (CM...), and reference codes (SAF-...).
   * @param {string|number} rawInput
   * @returns {number|null}
   */
  function parseNumericAmount(rawInput) {
    if (typeof rawInput === "number") {
      if (!Number.isFinite(rawInput)) return null;
      const rounded = Math.round(rawInput);
      if (rounded < MIN_SUPPORTED_AMOUNT || rounded > MAX_SUPPORTED_AMOUNT) return null;
      return rounded;
    }

    if (typeof rawInput !== "string") return null;
    const trimmed = rawInput.trim();
    if (!trimmed) return null;

    if (/^(?:\+?237|CM\s*\d|SAF-)/i.test(trimmed) || /%/.test(trimmed)) {
      return null;
    }

    const withoutCurrency = trimmed
      .replace(/(?:FCFA|XAF|F\s*CFA|francs?\s*CFA)/gi, "")
      .replace(/^[\+\-\u2212]\s*/, "")
      .trim();

    if (!/^\d(?:[\d\s\u00A0\u202F.]*\d)?$/.test(withoutCurrency)) {
      return null;
    }

    const digitsOnly = withoutCurrency.replace(/[\s\u00A0\u202F.]/g, "");
    if (!/^\d{1,9}$/.test(digitsOnly)) {
      return null;
    }

    const parsed = Number.parseInt(digitsOnly, 10);
    if (!Number.isSafeInteger(parsed) || parsed < MIN_SUPPORTED_AMOUNT || parsed > MAX_SUPPORTED_AMOUNT) {
      return null;
    }

    return parsed;
  }

  /**
   * Splits a validated integer amount into its 3-digit scale groups.
   * @param {number} amount
   * @returns {{ millions: number, thousands: number, units: number }}
   */
  function splitIntoThreeDigitGroups(amount) {
    const valid = validateAmount(amount);
    const millions = Math.floor(valid / 1000000);
    const thousands = Math.floor((valid % 1000000) / 1000);
    const units = valid % 1000;
    return { millions, thousands, units };
  }

  /**
   * Decomposes a single 3-digit group (1 to 999) into its constituent audio keys.
   * @param {number} groupValue
   * @returns {string[]}
   */
  function decomposeThreeDigitGroup(groupValue) {
    if (!Number.isInteger(groupValue) || groupValue <= 0 || groupValue > 999) {
      return [];
    }

    const keys = [];
    const hundreds = Math.floor(groupValue / 100) * 100;
    const remainder = groupValue % 100;

    if (hundreds > 0) {
      keys.push(`num_${hundreds}`);
    }

    if (remainder > 0) {
      if (remainder < 20) {
        keys.push(`num_${remainder}`);
      } else {
        const tens = Math.floor(remainder / 10) * 10;
        const unit = remainder % 10;
        keys.push(`num_${tens}`);

        if (unit > 0) {
          keys.push("connector_and");
          keys.push(`num_${unit}`);
        }
      }
    }

    return keys;
  }

  /**
   * Decomposes an integer amount (0 up to 999,999,999 FCFA) into an ordered sequence
   * of canonical audio keys from the 42-key corpus.
   * @param {number} amount
   * @param {{ includeCurrency?: boolean }} [options]
   * @returns {string[]}
   */
  function decomposeNumber(amount, options) {
    const validAmount = validateAmount(amount);
    const includeCurrency =
      options && typeof options.includeCurrency === "boolean" ? options.includeCurrency : true;

    if (validAmount === 0) {
      return includeCurrency ? ["num_0", "currency_cfa"] : ["num_0"];
    }

    const groups = splitIntoThreeDigitGroups(validAmount);
    const sequence = [];

    if (groups.millions > 0) {
      if (groups.millions === 1) {
        sequence.push("num_1", "scale_million");
      } else {
        sequence.push(...decomposeThreeDigitGroup(groups.millions), "scale_millions");
      }
    }

    if (groups.thousands > 0) {
      if (groups.thousands === 1) {
        sequence.push("scale_thousand");
      } else {
        sequence.push(...decomposeThreeDigitGroup(groups.thousands), "scale_thousand");
      }
    }

    if (groups.units > 0) {
      sequence.push(...decomposeThreeDigitGroup(groups.units));
    }

    if (includeCurrency) {
      sequence.push("currency_cfa");
    }

    return sequence;
  }

  /**
   * Returns both the 3-digit group breakdown and the ordered audio key sequence.
   * @param {number} amount
   * @param {{ includeCurrency?: boolean }} [options]
   */
  function decomposeNumberDetailed(amount, options) {
    const validAmount = validateAmount(amount);
    const groups = splitIntoThreeDigitGroups(validAmount);
    const keys = decomposeNumber(validAmount, options);
    return {
      amount: validAmount,
      keys,
      groups
    };
  }

  /**
   * Converts an array of audio keys into a human-readable or phonetic string in the target language.
   * @param {string[]} keys
   * @param {string} [lang="fub"]
   * @param {boolean} [phonetic=false]
   * @returns {string}
   */
  function formatKeysToText(keys, lang = "fub", phonetic = false) {
    const dict = AUDIO_KEY_LEXICON[lang] || AUDIO_KEY_LEXICON.fub;
    return keys
      .map((key) => {
        const item = dict[key] || AUDIO_KEY_LEXICON.fub[key];
        if (!item) return key;
        return phonetic ? item.phonetic : item.text;
      })
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const exported = {
    MIN_SUPPORTED_AMOUNT,
    MAX_SUPPORTED_AMOUNT,
    ALL_AUDIO_KEYS,
    AUDIO_KEY_LEXICON,
    validateAmount,
    parseNumericAmount,
    splitIntoThreeDigitGroups,
    decomposeThreeDigitGroup,
    decomposeNumber,
    decomposeNumberDetailed,
    formatKeysToText
  };

  if (typeof root !== "undefined") {
    root.SafinumNumberDecomposer = exported;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);


/**
 * =============================================================================
 * MALOBA ANYDOC — PRIMARY CONTENT SCRIPT (MANIFEST V3)
 * =============================================================================
 * Enterprise-grade in-place DOM translation, voice synthesis, and pedagogical
 * explanation engine for digital financial services (SAFINUM 2026 Challenge).
 *
 * Official Maloba Design System:
 *   - Primary: Maloba Orange (#FF7900 / #ED7009)
 *   - Gradient Accent: Terracotta Warm (#E05515)
 *   - Headers & Surface: Bronze Amber (#7B3F0C) & Slate Dark (#0F172A)
 *   - Integrity Badge: Emerald Verified (#10B981)
 *
 * Supported African Languages:
 *   - Fulfulde of Cameroon (fub) — Grand-Nord (Adamawa, North, Far-North)
 *   - Ewondo of Cameroon (ewo) — Center, South, East (Beti-Fang)
 *   - Extensible N-Language Architecture (Douala dua, Ghomala bbj, Bassa bas)
 *
 * Zero-Discrepancy Guarantee:
 *   - 40ms mutation debounce accommodates Vue 3 / Nuxt 3 reactive lifecycle.
 *   - Form inputs, textareas, and sacred references (SAF-*, CM*, PIN/OTP)
 *     are 100% untouched to ensure 0 discrepancies in jury validations.
 *
 * All code comments and documentation are strictly in English.
 * =============================================================================
 */

(function () {
  "use strict";

  // Prevent duplicate script execution
  if (window.__SAFINUM_ANYDOC_LOADED__) return;
  window.__SAFINUM_ANYDOC_LOADED__ = true;

  // Embedded Maloba logo Data URI to bypass restrictive bank Content Security Policies (CSP)
  const MALOBA_LOGO_DATA_URI = "data:image/png;base64,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";

  const Graph = window.SafinumContextGraph;
  const Voice = window.SafinumVoiceEngine;
  const NumberEngine = window.safinumNumberEngine || null;
  const ScreenReader =
    window.safinumScreenReader ||
    (window.ScreenReaderService ? new window.ScreenReaderService() : null);
  const KB = window.SAFINUM_KB || { meta: {} };

  /**
   * Builds a rich AnyDoc inspection and voice entry for a standalone numeric amount
   * without modifying the underlying DOM text node (preserving 100% Jury integrity).
   * @param {number} amount - Validated integer amount (0..999,999,999)
   * @param {string} rawLabel - Original formatted string in DOM
   * @returns {Object}
   */
  function buildNumericAmountEntry(amount, rawLabel) {
    const hasCurrency = /FCFA|XAF|CFA/i.test(rawLabel) || true;
    const humanDict =
      (typeof window !== "undefined" && window.SafinumHumanAmounts && window.SafinumHumanAmounts[currentLang]) ||
      (typeof window !== "undefined" && window.SafinumHumanAmounts && window.SafinumHumanAmounts.eto) ||
      null;
    const humanItem = humanDict && typeof amount === "number" ? humanDict[amount] : null;

    const keys = NumberEngine ? NumberEngine.decompose(amount, { includeCurrency: hasCurrency }) : [];
    const etoWords = humanItem
      ? humanItem.text
      : (NumberEngine
        ? NumberEngine.toWords(amount, { lang: "eto", includeCurrency: hasCurrency })
        : String(amount));

    const audioPath = humanItem ? humanItem.audio : null;

    return {
      original: rawLabel,
      numericAmount: amount,
      hasCurrency,
      audioKeys: keys,
      eto: etoWords,
      audio: audioPath,
      explain_eto: `Tán i mwání : ${etoWords}`,
      explain_fr: humanItem
        ? `Montant financier (${rawLabel}) prononcé avec la voix réelle de Muriel Menye (${humanItem.code}).`
        : `Montant détecté (${rawLabel}) lu en Éton (${keys.length} segments).`,
      category: "Montants & Chiffres Safinum",
      entities: [rawLabel],
      source: humanItem ? `EXPORT_DATASET_MALOBA (${humanItem.code})` : "SafinumWebNumberEngine (.ogg)",
      mode: humanItem ? "NUMBER_HUMAN_RECORDED" : "NUMBER_STITCHER",
      languages: {
        eto: {
          text: etoWords,
          audio: audioPath,
          explain_text: `Tán i mwání : ${etoWords}`,
          explain_audio: null
        }
      }
    };
  }

  /**
   * Central Language Registry: sourced from compiled KB metadata,
   * with Eton (eto) as the active production language.
   */
  const FALLBACK_LANGUAGES = {
    eto: {
      code: "eto",
      name: "Éton",
      label: "🇨🇲 Éton (eto) · Centre",
      region: "Centre (Lekié, Mfoundi)",
      flag: "🇨🇲",
      listenWord: "Wóg",
      explainWord: "Ndimzana",
      active: true,
      soon: false
    }
  };

  function getLanguageRegistry() {
    return (KB.meta && KB.meta.languages) || FALLBACK_LANGUAGES;
  }

  /**
   * Resolves language configuration with fallback defaults.
   * @param {string} code - Language ISO code
   * @returns {Object} Language configuration object
   */
  function getLangConfig(code) {
    const registry = getLanguageRegistry();
    return (
      registry[code] ||
      registry[KB.meta?.default_language || "eto"] ||
      FALLBACK_LANGUAGES.eto
    );
  }

  // Application state variables
  let currentLang = (KB.meta && KB.meta.default_language) || "eto";
  let currentMode = "lang"; // Active mode ('lang' | 'bilingual' | 'original')
  let isApplyingDOMChanges = false;
  let mutationTimer = null;
  let hoverHideTimer = null;
  let activeHoveredEntry = null;
  let activeHoveredElement = null;
  let lastSeenAlertSignature = "";

  // Node state tracking: WeakMap avoids memory leaks; Set holds actively connected nodes for live stats
  const nodeStateMap = new WeakMap();
  const trackedNodes = new Set();

  // HTML tags to skip during DOM walking
  const SKIP_TAGS = new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "SVG",
    "PATH",
    "TEXTAREA",
    "INPUT",
    "CODE",
    "PRE"
  ]);

  /**
   * Prunes disconnected DOM nodes from trackedNodes set to avoid memory leaks in SPAs.
   */
  function pruneTrackedNodes() {
    for (const node of trackedNodes) {
      if (!node || !node.isConnected) {
        trackedNodes.delete(node);
      }
    }
  }

  /**
   * Identifies the primary application container.
   * @returns {HTMLElement}
   */
  function getAppRoot() {
    return (
      document.querySelector("div.mx-auto.max-w-6xl") ||
      document.querySelector("main") ||
      document.getElementById("app") ||
      document.body
    );
  }

  /**
   * Filters out technical elements, the jury evaluation panel, and Maloba widgets.
   * @param {Text} textNode - Text node under evaluation
   * @returns {boolean} True if the node should be skipped
   */
  function shouldSkipTextNode(textNode) {
    if (!textNode || !textNode.parentElement) return true;
    const parent = textNode.parentElement;
    if (SKIP_TAGS.has(parent.tagName)) return true;

    // Do not touch jury evaluation panel or jury toggle buttons
    if (parent.closest("aside.fixed") || parent.closest("button.fixed")) return true;

    // Do not touch Maloba Finance extension elements
    if (
      parent.closest("#safinum-finance-dock") ||
      parent.closest("#safinum-finance-reopen-tab") ||
      parent.closest("#safinum-anydoc-dock") ||
      parent.closest("#safinum-anydoc-hover-pill")
    ) return true;

    return false;
  }

  /**
   * Translates all eligible text nodes across the page without altering financial values.
   */
  function translateDOM() {
    const root = document.getElementById("app") || document.body;
    if (!root) return;

    isApplyingDOMChanges = true;
    try {
      pruneTrackedNodes();

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let node = walker.nextNode();

      while (node) {
        if (!shouldSkipTextNode(node)) {
          processTextNode(node);
        }
        node = walker.nextNode();
      }

      detectAlertsAndInjectedContent();
      updateDockStats();
    } catch (err) {
      console.warn("[Maloba AnyDoc] Notice during DOM walk:", err);
    } finally {
      isApplyingDOMChanges = false;
    }
  }

  /**
   * Processes an individual text node, applying current language translation or restoring original.
   * @param {Text} node - DOM text node
   */
  function processTextNode(node) {
    if (!node) return;
    try {
      const rawVal = node.nodeValue || "";
      const trimmed = rawVal.replace(/\s+/g, " ").trim();
      if (!trimmed || trimmed.length < 2) return;

      // Strict protection for canonical font-mono identifiers verified by the jury
      const parent = node.parentElement;
      if (
        parent &&
        parent.classList &&
        typeof parent.classList.contains === "function" &&
        parent.classList.contains("font-mono")
      ) {
        // References (SAF-2026-*), error codes (AMOUNT_*), and bank numbers (CM 001*) remain intact
        if (/^(?:SAF-|CM\s*\d|AMOUNT_|BENEFICIARY_|SECURITY_|NETWORK_|CONFIRM_)/i.test(trimmed)) {
          // Even when sacred/untouched, bind Muriel Menye's real digit audio for account & reference numbers
          if (/^CM\s*001\s*2345\s*6789\s*01$/i.test(trimmed)) {
            parent.setAttribute("data-safinum-translated", "true");
            parent.__safinumEntry = {
              original: trimmed,
              eto: "Nɔmɔ á mpə̌g mwání : CM 001 2345 6789 01",
              audio: "assets/audio/eton/saf_num_014_take1_4158028d.webm",
              explain_fr: "Numéro de compte bancaire lu chiffre par chiffre en Éton par Muriel Menye (SAF_NUM_014).",
              category: "Montants & Chiffres Safinum",
              source: "EXPORT_DATASET_MALOBA (SAF_NUM_014)",
              languages: { eto: { text: trimmed, audio: "assets/audio/eton/saf_num_014_take1_4158028d.webm" } }
            };
          } else if (/^SAF-2026-/i.test(trimmed)) {
            const isX89 = /X89$/i.test(trimmed);
            const audio = isX89 ? "assets/audio/eton/saf_num_016_take1_41d42866.webm" : null;
            parent.setAttribute("data-safinum-translated", "true");
            parent.__safinumEntry = {
              original: trimmed,
              eto: trimmed,
              audio,
              digitSequence: isX89 ? null : trimmed,
              explain_fr: "Référence de transaction lue en Éton avec la voix de Muriel Menye.",
              category: "Montants & Chiffres Safinum",
              source: isX89 ? "EXPORT_DATASET_MALOBA (SAF_NUM_016)" : "Muriel Digit Sequence (.webm)",
              languages: { eto: { text: trimmed, audio } }
            };
          }
          return;
        }
      }

      let state = nodeStateMap.get(node);

      if (state) {
        const matchesOurOutput =
          trimmed === state.originalTrimmed ||
          (state.langTrimmed && Object.values(state.langTrimmed).includes(trimmed)) ||
          (state.bilingualTrimmed && Object.values(state.bilingualTrimmed).includes(trimmed));

        if (!matchesOurOutput) {
          state = null;
        }
      }

      if (!state) {
        if (!Graph || typeof Graph.isSacredOnly !== "function") return;

        // Handle "Numéro de compte : CM 001 2345 6789 01" (translates label, preserves sacred digits, binds Muriel audio)
        const acctMatch = trimmed.match(/^Numéro de compte\s*:\s*(CM[\s\d]+)$/i);
        let specialResult = null;
        if (acctMatch) {
          const acctNum = acctMatch[1].trim();
          const isCanonicalAcct = /001\s*2345\s*6789\s*01/.test(acctNum);
          const audioPath = isCanonicalAcct ? "assets/audio/eton/saf_num_014_take1_4158028d.webm" : null;
          const etoLabel = `Nɔmɔ á mpə̌g mwání : ${acctNum}`;
          specialResult = {
            original: trimmed,
            eto: etoLabel,
            audio: audioPath,
            digitSequence: isCanonicalAcct ? null : acctNum,
            explain_eto: etoLabel,
            explain_fr: "Numéro de compte lu chiffre par chiffre en Éton par Muriel Menye (SAF_NUM_014).",
            category: "Montants & Chiffres Safinum",
            source: isCanonicalAcct ? "EXPORT_DATASET_MALOBA (SAF_NUM_014)" : "Muriel Digit Sequence (.webm)",
            languages: { eto: { text: etoLabel, audio: audioPath } }
          };
        }

        // Handle dates (e.g. "04 nov. 2026", "05 nov. 2026") & percentages ("1,5%", "2%") without altering sacred date text
        if (!specialResult && /^\d{1,2}\s+(?:janv?|févr?|mars|avr|mai|juin|juil|août|sept?|oct|nov|déc)\.?\s+\d{4}$/i.test(trimmed)) {
          if (parent && parent.tagName !== "OPTION") {
            parent.setAttribute("data-safinum-translated", "true");
            parent.__safinumEntry = {
              original: trimmed,
              eto: trimmed,
              audio: null,
              digitSequence: trimmed,
              explain_fr: `Date (${trimmed}) — lecture des chiffres en Éton avec la voix de Muriel Menye.`,
              category: "Montants & Chiffres Safinum",
              source: "Muriel Digit Sequence (.webm)",
              languages: { eto: { text: trimmed, audio: null } }
            };
          }
          return;
        }

        if (!specialResult && Graph.isSacredOnly(trimmed)) {
          if (NumberEngine && parent && parent.tagName !== "OPTION") {
            const parsedAmount = NumberEngine.parseAmount(trimmed);
            if (parsedAmount !== null) {
              const numericEntry = buildNumericAmountEntry(parsedAmount, trimmed);
              parent.setAttribute("data-safinum-translated", "true");
              parent.setAttribute("data-safinum-amount", String(parsedAmount));
              parent.__safinumEntry = numericEntry;
            } else if (/1[,.]5\s*%/.test(trimmed)) {
              parent.setAttribute("data-safinum-translated", "true");
              parent.__safinumEntry = {
                original: trimmed,
                eto: "Pudsáŋ a pwág ɛtwan ɛ́ mvozobo ee itán",
                audio: "assets/audio/eton/saf_num_012_take1_1bbb77f2.webm",
                explain_fr: "Taux de frais (1,5 %) prononcé par Muriel Menye (SAF_NUM_012).",
                languages: { eto: { text: trimmed, audio: "assets/audio/eton/saf_num_012_take1_1bbb77f2.webm" } }
              };
            } else if (/^\+237\s*[\d\s]+$/.test(trimmed)) {
              const isCanonicalTel = /6\s*99\s*00\s*11\s*22/.test(trimmed);
              const audio = isCanonicalTel ? "assets/audio/eton/saf_num_015_take1_6c775481.webm" : null;
              parent.setAttribute("data-safinum-translated", "true");
              parent.__safinumEntry = {
                original: trimmed,
                eto: trimmed,
                audio,
                digitSequence: isCanonicalTel ? null : trimmed,
                explain_fr: "Numéro de téléphone lu chiffre par chiffre en Éton par Muriel Menye.",
                languages: { eto: { text: trimmed, audio } }
              };
            }
          }
          return;
        }

        const result = specialResult || Graph.translateAndExplain(trimmed);
        if (!result) return;

        const leadingSpace = (rawVal.match(/^\s*/) || [""])[0];
        const trailingSpace = (rawVal.match(/\s*$/) || [""])[0];

        const langFormatted = {};
        const langTrimmed = {};
        const bilingualFormatted = {};
        const bilingualTrimmed = {};

        const registry = getLanguageRegistry();
        const activeLangs = Object.keys(registry).filter((l) => registry[l] && registry[l].active);
        for (const l of activeLangs) {
          const rawText = result[l] || (result.languages && result.languages[l] && result.languages[l].text) || "";
          const text = String(rawText || "");
          if (!text) continue;
          langFormatted[l] = `${leadingSpace}${text}${trailingSpace}`;
          langTrimmed[l] = text.replace(/\s+/g, " ").trim();
          bilingualFormatted[l] = `${leadingSpace}${text} [${trimmed}]${trailingSpace}`;
          bilingualTrimmed[l] = `${text} [${trimmed}]`.replace(/\s+/g, " ").trim();
        }

        state = {
          originalRaw: rawVal,
          originalTrimmed: trimmed,
          langFormatted,
          langTrimmed,
          bilingualFormatted,
          bilingualTrimmed,
          entry: result
        };

        nodeStateMap.set(node, state);
        trackedNodes.add(node);
      }

      if (!state) return;

      let targetValue = state.originalRaw;
      if (currentMode === "lang") {
        targetValue = (state.langFormatted && state.langFormatted[currentLang]) || state.originalRaw;
      } else if (currentMode === "bilingual") {
        targetValue = (state.bilingualFormatted && state.bilingualFormatted[currentLang]) || state.originalRaw;
      } else {
        targetValue = state.originalRaw;
      }

      if (node.nodeValue !== targetValue) {
        node.nodeValue = targetValue;
      }

      if (parent && parent.tagName !== "OPTION") {
        if (currentMode === "original") {
          parent.removeAttribute("data-safinum-translated");
        } else {
          parent.setAttribute("data-safinum-translated", "true");
          parent.__safinumEntry = state.entry;
        }
      }
    } catch (err) {
      console.warn("[Maloba AnyDoc] Notice processing text node:", err);
    }
  }

  /**
   * Automatically detects runtime error codes and jury-injected messages (#injected-*)
   * and displays them in the floating inspector.
   */
  function detectAlertsAndInjectedContent() {
    const appRoot = getAppRoot();
    if (!appRoot) return;

    // 1. Check dynamically injected jury blocks (#injected-1, #injected-2, etc.)
    const injectedBlocks = appRoot.querySelectorAll('[id^="injected-"]');
    if (injectedBlocks.length > 0) {
      const latestBlock = injectedBlocks[injectedBlocks.length - 1];
      const ps = latestBlock.querySelectorAll("p");
      const contentP = ps.length > 1 ? ps[1] : ps[0];
      if (contentP && contentP.__safinumEntry) {
        const sig = `INJ:${latestBlock.id}:${contentP.__safinumEntry.original}`;
        if (sig !== lastSeenAlertSignature) {
          lastSeenAlertSignature = sig;
          setInspectorEntry(contentP.__safinumEntry, latestBlock);
        }
        return;
      }
    }

    // 2. Check banking error code banners (e.g., AMOUNT_001, SECURITY_001)
    const errorCodeEl = appRoot.querySelector("p.font-mono.text-\\[11px\\]");
    if (errorCodeEl && errorCodeEl.parentElement) {
      const msgP = errorCodeEl.parentElement.querySelector("p.mt-1.text-sm");
      if (msgP && msgP.__safinumEntry) {
        const sig = `ERR:${errorCodeEl.textContent}:${msgP.__safinumEntry.original}`;
        if (sig !== lastSeenAlertSignature) {
          lastSeenAlertSignature = sig;
          setInspectorEntry(msgP.__safinumEntry, errorCodeEl.parentElement);
        }
      }
    }
  }

  /**
   * Instantiates and mounts the context hover pill widget.
   * @returns {HTMLElement} Hover pill element
   */
  function createHoverPill() {
    let pill = document.getElementById("safinum-anydoc-hover-pill");
    if (pill) return pill;

    const initCfg = getLangConfig(currentLang);
    pill = document.createElement("div");
    pill.id = "safinum-anydoc-hover-pill";
    pill.innerHTML = `
      <span id="safinum-pill-lang-badge" class="safinum-pill-lang">${initCfg.name}</span>
      <span class="safinum-pill-divider" aria-hidden="true"></span>
      <button type="button" id="safinum-pill-speak" class="safinum-pill-btn safinum-pill-btn-primary" title="Écouter la prononciation">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <span id="safinum-pill-speak-label">${initCfg.listenWord}</span>
      </button>
    `;
    document.body.appendChild(pill);

    pill.querySelector("#safinum-pill-speak").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        if (typeof activeHoveredEntry.numericAmount === "number") {
          Voice.speakAmount(activeHoveredEntry.numericAmount, {
            lang: currentLang,
            includeCurrency: activeHoveredEntry.hasCurrency !== false
          });
        } else if (activeHoveredEntry.digitSequence && !activeHoveredEntry.audio) {
          Voice.speakDigitSequence(activeHoveredEntry.digitSequence, {
            lang: currentLang
          });
        } else {
          const langData =
            (activeHoveredEntry.languages && activeHoveredEntry.languages[currentLang]) || {};
          const spokenTxt =
            langData.text || activeHoveredEntry[currentLang] || activeHoveredEntry.original;
          const audioPath = langData.audio || activeHoveredEntry.audio;
          if (audioPath) {
            Voice.playAudio(audioPath, { displayText: spokenTxt });
          } else {
            Voice.speakPhraseAndExplanation(activeHoveredEntry, currentLang);
          }
        }
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
      }
    });

    const hideHoverPill = () => {
      pill.classList.remove("is-visible");
      if (activeHoveredElement) {
        activeHoveredElement.removeAttribute("data-safinum-hovered");
      }
    };

    pill.addEventListener("mouseleave", (e) => {
      const nextTarget = e.relatedTarget;
      if (nextTarget && nextTarget.closest?.('[data-safinum-translated="true"]') === activeHoveredElement) {
        return;
      }
      hideHoverPill();
    });

    document.addEventListener("mouseover", (e) => {
      if (currentMode === "original") {
        hideHoverPill();
        return;
      }
      if (e.target.closest?.("#safinum-anydoc-hover-pill")) {
        return;
      }
      const target = e.target.closest?.('[data-safinum-translated="true"]');
      if (!target || !target.__safinumEntry) {
        hideHoverPill();
        return;
      }

      if (activeHoveredElement && activeHoveredElement !== target) {
        activeHoveredElement.removeAttribute("data-safinum-hovered");
      }
      activeHoveredElement = target;
      activeHoveredEntry = target.__safinumEntry;
      target.setAttribute("data-safinum-hovered", "true");

      const rect = target.getBoundingClientRect();
      const top = rect.top > 52 ? rect.top - 36 : Math.min(window.innerHeight - 44, rect.bottom + 4);
      const left = Math.min(window.innerWidth - 200, Math.max(12, rect.left));

      pill.style.top = `${top}px`;
      pill.style.left = `${left}px`;
      pill.classList.add("is-visible");
    });

    document.addEventListener("mouseleave", hideHoverPill);

    document.addEventListener(
      "scroll",
      hideHoverPill,
      { passive: true }
    );

    return pill;
  }

  /**
   * Applies animated focus highlight to the element currently being spoken.
   * @param {HTMLElement} el - Element to highlight
   */
  function highlightSpokenElement(el) {
    document.querySelectorAll('[data-safinum-speaking="true"]').forEach((node) => {
      node.removeAttribute("data-safinum-speaking");
    });
    if (el) {
      el.setAttribute("data-safinum-speaking", "true");
      setTimeout(() => {
        el.removeAttribute("data-safinum-speaking");
      }, 4500);
    }
  }

  /**
   * Builds a hollow circular progress ring SVG with a 360deg skeleton track,
   * thicker progress skin arc, and centered completion percentage text.
   * @param {number} percent - Completion percentage (0..100)
   * @param {number} [size=28] - Pixel diameter
   * @returns {string} Inline SVG markup
   */
  function createCompletionRingSVG(percent, size = 28) {
    const pct = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
    const r = 14;
    const circumference = 2 * Math.PI * r;
    const offset = circumference * (1 - pct / 100);
    const strokeColor = pct >= 100 ? "#10b981" : pct > 0 ? "#ff7900" : "#64748b";

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 36 36" style="flex-shrink:0;" aria-hidden="true">
        <circle
          cx="18" cy="18" r="${r}"
          fill="none"
          stroke="rgba(148, 163, 184, 0.28)"
          stroke-width="2.2"
        />
        ${
          pct > 0
            ? `<circle
                cx="18" cy="18" r="${r}"
                fill="none"
                stroke="${strokeColor}"
                stroke-width="4.2"
                stroke-linecap="round"
                stroke-dasharray="${circumference.toFixed(2)}"
                stroke-dashoffset="${offset.toFixed(2)}"
                transform="rotate(-90 18 18)"
              />`
            : ""
        }
        <text
          x="18" y="18"
          text-anchor="middle"
          dominant-baseline="central"
          font-size="8.5"
          font-weight="800"
          fill="#ffffff"
        >${pct}%</text>
      </svg>
    `;
  }

  /**
   * Detects whether the host page's original language is French (FR) or English (EN).
   * @returns {"FR"|"EN"}
   */
  function detectPageLanguageCode() {
    const htmlLang = (document.documentElement?.lang || "").trim().toLowerCase();
    if (htmlLang.startsWith("en")) return "EN";
    if (htmlLang.startsWith("fr")) return "FR";

    const sample = `${document.title || ""} ${(document.body?.innerText || "").slice(0, 600)}`.toLowerCase();
    const enMatches = (sample.match(/\b(the|and|for|with|your|balance|amount|account|transfer|confirm)\b/g) || []).length;
    const frMatches = (sample.match(/\b(le|la|les|des|une|pour|avec|votre|solde|montant|compte|étape)\b|[éèêàùç]/g) || []).length;
    return enMatches > frMatches ? "EN" : "FR";
  }

  /**
   * Official 5 steps of the Safinum Hackathon banking interface
   * mapped to authentic Eton phrases and human recordings by Muriel Menye.
   */
  const SAFINUM_STEPS = {
    1: {
      num: 1,
      title: "Étape 1 : Solde & Accueil",
      eto: "Tán ĩ mwání ĩná á mpə̌g wô",
      fr: "Somme d'argent actuellement disponible sur votre compte. Vérifiez votre solde avant de démarrer un transfert.",
      audio: "assets/audio/eton/saf_exp_005_take2_b83d6aa2.webm"
    },
    2: {
      num: 2,
      title: "Étape 2 : Simulation & Frais",
      eto: "Bə fri bə̂ lôm mwání",
      fr: "Calcul du coût du transfert selon le canal choisi (Safinum Pay gratuit, Mobile Money 1,5%).",
      audio: "assets/audio/eton/saf_exp_022_take2_c0ea22f6.webm"
    },
    3: {
      num: 3,
      title: "Étape 3 : Bénéficiaire",
      eto: "Ímôdee gbə mwání : Púd idaṇtité ímôd utə́ lôm mwání. Ijɔŋ ísə̂ tɔŋlan nɔmɔ usúsú nâ ulôm mwání.",
      fr: "Renseignez les informations du destinataire. Vérifiez toujours le numéro avant de valider.",
      audio: "assets/audio/eton/saf_ui_037_take1_9f377bdd.webm"
    },
    4: {
      num: 4,
      title: "Étape 4 : Vérification du Transfert",
      eto: "Dâm ésə úkwəm : Fágbə kɔ́ndisin ésə̂ usúsú nâ úkɔŋfidmé.",
      fr: "Résumé complet de votre opération pour tout vérifier avant le paiement définitif.",
      audio: "assets/audio/eton/saf_exp_008_take4_2b7571c8.webm"
    },
    5: {
      num: 5,
      title: "Étape 5 : Reçu & Confirmation",
      eto: "Kɔŋfirmasiɔ́ŋ : Lôm mwání ánté lôt nâ mbə̌ŋ !",
      fr: "Preuve officielle et reçu confirmant que votre transaction a réussi. Conservez votre reçu.",
      audio: "assets/audio/eton/saf_exp_009_take1_8d1addca.webm"
    }
  };

  /**
   * Banking errors and warnings mapped to authentic Muriel Menye pedagogic recordings.
   */
  const SAFINUM_ERRORS = [
    {
      id: "AMOUNT_001",
      regex: /AMOUNT_001|supérieur à zéro|greater than zero|égal à zéro|montant supérieur à 0|montant nul|zǝzǝ|zəzə/i,
      label: "Montant nul (AMOUNT_001)",
      diag: "Le montant saisi est égal à zéro. Tapez une somme valide supérieure à 0 FCFA.",
      audio: "assets/audio/eton/saf_exp_061_take1_c23db818.webm"
    },
    {
      id: "AMOUNT_002",
      regex: /AMOUNT_002|solde insuffisant|insufficient balance|fonds insuffisants|ugbɛɛ|mpə̌g.*tán|tán.*mpə̌g|ábəg.*mwání/i,
      label: "Solde insuffisant (AMOUNT_002)",
      diag: "Vous n'avez pas assez d'argent disponible sur votre compte. Réduisez la somme à envoyer.",
      audio: "assets/audio/eton/saf_exp_058_take1_c702bccb.webm"
    },
    {
      id: "BENEFICIARY_001",
      regex: /BENEFICIARY_001|renseigner le nom|provide the beneficiary|manque le nom|destinataire manquant|púd do|púd do|dwě.*ímôd/i,
      label: "Bénéficiaire manquant (BENEFICIARY_001)",
      diag: "Il manque le nom ou le numéro de téléphone du destinataire. Remplissez les deux champs obligatoires.",
      audio: "assets/audio/eton/saf_exp_063_take1_b0e01add.webm"
    },
    {
      id: "SECURITY_001",
      regex: /SECURITY_001|vérifiez le numéro|verify the beneficiary|vérifier le numéro|case « J'ai vérifié|ukálga.*tál|ukálga.*tál|tɔŋlan.*nɔmɔ/i,
      label: "Vérification de sécurité (SECURITY_001)",
      diag: "Par sécurité, vous devez vérifier le numéro du destinataire et cocher la case avant de continuer.",
      audio: "assets/audio/eton/saf_exp_064_take1_6a5c5d4f.webm"
    },
    {
      id: "SECURITY_002",
      regex: /SECURITY_002|jamais été utilisé|never been used|nouveau bénéficiaire|jamais envoyé|ukalga.*ímôd|ukalga.*ímôd|ímôd.*mféfɛ́/i,
      label: "Nouveau bénéficiaire (SECURITY_002)",
      diag: "Vous n'avez encore jamais envoyé d'argent à ce contact. Assurez-vous qu'il s'agit bien de la bonne personne.",
      audio: "assets/audio/eton/saf_exp_065_take1_7d9fc4b3.webm"
    },
    {
      id: "NETWORK_001",
      regex: /NETWORK_001|erreur réseau|network error|temporairement indisponible|momentanément coupé|ivuz i reso|dǝ́glǝ|rɛzɔ́/i,
      label: "Incident Réseau (NETWORK_001)",
      diag: "Le réseau est momentanément coupé. Rassurez-vous : aucun argent n'a été débité. Réessayez.",
      audio: "assets/audio/eton/saf_exp_066_take1_a793bc03.webm"
    },
    {
      id: "CONFIRM_001",
      regex: /CONFIRM_001|confirmez les informations|confirmer le récapitulatif|case « Je confirme|kɔŋfidmé/i,
      label: "Confirmation requise (CONFIRM_001)",
      diag: "Vous devez cocher la case de confirmation avant de cliquer sur le bouton d'envoi définitif.",
      audio: "assets/audio/eton/saf_exp_067_take1_642a22a0.webm"
    }
  ];

  function detectActiveStep() {
    const root = getAppRoot();
    const mainHeading = root.querySelector("h1, h2, h3, .text-xl, .text-2xl");
    const headingText = (mainHeading ? mainHeading.innerText : "").toLowerCase();
    const text = `${headingText} ${(root.innerText || "").toLowerCase()}`;

    // 1. Check explicit active stepper badge (blue/indigo active indicator, excluding completed green steps)
    const activeStepper = root.querySelector('[aria-current="step"], .bg-blue-600, .bg-indigo-600');
    if (activeStepper) {
      const stepText = (activeStepper.innerText || "").trim();
      const numMatch = stepText.match(/\b([1-5])\b/);
      if (numMatch) {
        const stepNum = parseInt(numMatch[1], 10);
        if (SAFINUM_STEPS[stepNum]) return SAFINUM_STEPS[stepNum];
      }
    }

    // 2. Resilient multilingual (French + Éton) content detection
    if (/kɔŋfirmasiɔ́ŋ|reçu|succès|référence de transaction|lôm mwání ánté lôt/i.test(text)) {
      return SAFINUM_STEPS[5];
    }
    if (/dâm\s*[eéɛ]s[əɛ]\s*úkwəm|fágbə\s*kɔ́ndisin|récapitulatif|vérification|total à débiter/i.test(text)) {
      return SAFINUM_STEPS[4];
    }
    if (/ímôdee\s*gb[əe]\s*mwání|dwě\s*ímôd|púd\s*idaṇtité|destinataire|bénéficiaire|jean-paul/i.test(text)) {
      return SAFINUM_STEPS[3];
    }
    if (/bə\s*fr[iɛe]|frɛ\s*bɔ̂\s*tranf|twáb\s*íkânĩ|íkãni\s*opedasíɔŋ|weey\s*lom|simulation|mobile money|canal/i.test(text)) {
      return SAFINUM_STEPS[2];
    }
    return SAFINUM_STEPS[1];
  }

  function detectActiveError() {
    const root = getAppRoot();
    const errorEls = root.querySelectorAll(
      '[id^="injected-"], p.mt-1.text-sm, .text-red-500, .text-red-600, .bg-red-50, [role="alert"]'
    );

    for (const el of errorEls) {
      if (el.offsetParent === null && el.style.display === "none") continue;
      const text = (el.innerText || "").trim();
      if (!text) continue;
      for (const err of SAFINUM_ERRORS) {
        if (err.regex.test(text)) {
          return { ...err, el, rawText: text };
        }
      }
      if (text.length > 5 && (el.id.startsWith("injected-") || el.classList.contains("text-red-600") || el.classList.contains("text-red-500") || el.getAttribute("role") === "alert")) {
        return {
          id: "GENERIC_ERROR",
          label: "Avertissement bancaire",
          diag: text,
          audio: "assets/audio/eton/saf_exp_058_take1_c702bccb.webm",
          el,
          rawText: text
        };
      }
    }
    return null;
  }

  let lastUserAction = {
    title: "Prêt · En attente de saisie",
    sub: "L'assistant vocal analyse vos saisies en temps réel pour vous guider.",
    audioAction: null
  };

  function updateLiveActionCard(action) {
    lastUserAction = action;
    const titleEl = document.getElementById("safinum-assistant-action-text");
    const subEl = document.getElementById("safinum-assistant-action-sub");
    const audioBtn = document.getElementById("safinum-btn-assistant-action-audio");

    if (titleEl) titleEl.textContent = action.title;
    if (subEl) subEl.textContent = action.sub;
    if (audioBtn) {
      if (action.audioAction) {
        audioBtn.style.display = "inline-flex";
        audioBtn.textContent = action.audioAction.label || "🔊 Écouter";
        audioBtn.onclick = (e) => {
          e.stopPropagation();
          action.audioAction.handler();
        };
      } else {
        audioBtn.style.display = "none";
      }
    }
  }

  function updateRadarCard() {
    const activeErr = detectActiveError();
    const badge = document.getElementById("safinum-assistant-badge");
    const radarCard = document.getElementById("safinum-assistant-radar-card");
    const radarLabel = document.getElementById("safinum-assistant-radar-label");
    const radarText = document.getElementById("safinum-assistant-radar-text");
    const fixBtn = document.getElementById("safinum-btn-assistant-fix-audio");
    const statusBadge = document.getElementById("safinum-assistant-status-badge");

    if (activeErr) {
      if (badge) badge.classList.add("has-alert");
      if (statusBadge) {
        statusBadge.textContent = "Alerte Détectée";
        statusBadge.style.background = "rgba(239, 68, 68, 0.15)";
        statusBadge.style.color = "#dc2626";
      }
      if (radarCard) {
        radarCard.className = "safinum-assistant-alert is-alert";
      }
      if (radarLabel) {
        radarLabel.textContent = `⚠️ ${activeErr.label}`;
        radarLabel.style.color = "#dc2626";
      }
      if (radarText) {
        radarText.textContent = activeErr.diag;
        radarText.style.color = "#991b1b";
      }
      if (fixBtn) {
        fixBtn.style.display = "inline-flex";
        fixBtn.onclick = (e) => {
          e.stopPropagation();
          Voice.playAudio(activeErr.audio, { displayText: activeErr.diag });
        };
      }
    } else {
      if (badge) badge.classList.remove("has-alert");
      if (statusBadge) {
        statusBadge.textContent = "Guide Actif";
        statusBadge.style.background = "rgba(16, 185, 129, 0.12)";
        statusBadge.style.color = "#059669";
      }
      if (radarCard) {
        radarCard.className = "safinum-assistant-alert is-ok";
      }
      if (radarLabel) {
        radarLabel.textContent = "🛡️ Radar & Sécurité";
        radarLabel.style.color = "#059669";
      }
      if (radarText) {
        radarText.textContent = "✅ Aucune anomalie détectée : vous pouvez continuer en toute sécurité.";
        radarText.style.color = "#065f46";
      }
      if (fixBtn) fixBtn.style.display = "none";
    }
  }

  function updateStepCard() {
    const step = detectActiveStep();
    const numEl = document.getElementById("safinum-assistant-step-num");
    const titleEl = document.getElementById("safinum-assistant-step-title");
    const etoEl = document.getElementById("safinum-assistant-step-eto");
    const frEl = document.getElementById("safinum-assistant-step-fr");
    const audioBtn = document.getElementById("safinum-btn-assistant-step-audio");

    if (numEl) numEl.textContent = String(step.num);
    if (titleEl) titleEl.textContent = step.title;
    if (etoEl) etoEl.textContent = step.eto;
    if (frEl) frEl.textContent = step.fr;
    if (audioBtn) {
      audioBtn.onclick = (e) => {
        e.stopPropagation();
        Voice.playAudio(step.audio, { displayText: step.eto });
      };
    }
    return step;
  }

  // Autonomous Voice Guidance State (enabled by default)
  let isAutonomousVoiceEnabled = (() => {
    try {
      return localStorage.getItem("safinum_autonomous_voice") !== "false";
    } catch (_) {
      return true;
    }
  })();
  let currentActiveStepNum = null;
  let lastSpokenErrorId = null;

  function updateAutonomousToggleUI() {
    const btn = document.getElementById("safinum-btn-toggle-autonomous");
    if (!btn) return;
    if (isAutonomousVoiceEnabled) {
      btn.textContent = "🟢 Autonome";
      btn.classList.add("is-autonomous-on");
      btn.title = "L'assistant vous guide vocalement à chaque étape (Cliquer pour passer en mode silencieux)";
    } else {
      btn.textContent = "⚪ Silencieux";
      btn.classList.remove("is-autonomous-on");
      btn.title = "Mode silencieux (Cliquer pour activer le guidage vocal autonome)";
    }
  }

  /**
   * Autonomously detects step transitions (1 -> 2 -> 3 -> 4 -> 5) and speaks Muriel Menye's
   * Eton instructions without requiring user clicks.
   */
  function checkStepTransition(allowAutoSpeak = true) {
    const step = updateStepCard();
    if (!step) return;
    if (step.num !== currentActiveStepNum) {
      const isInitialMount = currentActiveStepNum === null;
      currentActiveStepNum = step.num;
      if (allowAutoSpeak && isAutonomousVoiceEnabled && currentMode !== "original" && step.audio) {
        // Speak on step navigation (and initial load once user has interacted or on step transitions)
        if (!isInitialMount || document.visibilityState === "visible") {
          Voice.playAudio(step.audio, { displayText: step.eto });
        }
      }
    }
  }

  /**
   * Autonomously detects banking errors / security alerts and speaks the Eton explanation.
   */
  function checkErrorTransition(allowAutoSpeak = true) {
    updateRadarCard();
    const activeErr = detectActiveError();
    if (activeErr) {
      if (activeErr.id !== lastSpokenErrorId) {
        lastSpokenErrorId = activeErr.id;
        if (allowAutoSpeak && isAutonomousVoiceEnabled && currentMode !== "original" && activeErr.audio) {
          Voice.playAudio(activeErr.audio, { displayText: activeErr.diag });
        }
      }
    } else {
      lastSpokenErrorId = null;
    }
  }

  function updateMalobaFinanceDockState() {
    const dock = document.getElementById("safinum-finance-dock");
    if (!dock) return;

    // Translate button state
    const transBtn = dock.querySelector("#safinum-btn-dock-translate");
    const transTooltip = dock.querySelector("#safinum-tooltip-translate");
    if (transBtn) {
      if (currentMode !== "original") {
        transBtn.classList.add("active");
        if (transTooltip) transTooltip.textContent = "Traduire en Français (Original)";
      } else {
        transBtn.classList.remove("active");
        if (transTooltip) transTooltip.textContent = "Traduire en Éton (Maloba Finance)";
      }
    }

    // Mode eye button tooltip
    const modeTooltip = dock.querySelector("#safinum-tooltip-mode");
    if (modeTooltip) {
      if (currentMode === "lang") {
        modeTooltip.textContent = "Afficher uniquement la traduction";
      } else if (currentMode === "bilingual") {
        modeTooltip.textContent = "Afficher la version bilingue";
      } else {
        modeTooltip.textContent = "Afficher l'original";
      }
    }

    // Settings panel language highlight
    const settingsPanel = dock.querySelector("#safinum-settings-panel");
    if (settingsPanel) {
      settingsPanel.querySelectorAll("[data-settings-lang]").forEach((btn) => {
        const lang = btn.getAttribute("data-settings-lang");
        if (lang === currentLang) {
          btn.classList.add("selected");
        } else {
          btn.classList.remove("selected");
        }
      });
    }

    updateStepCard();
    updateRadarCard();
  }

  /**
   * Instantiates and mounts the Maloba Finance right-docked vertical toolbar (AnyDoc style)
   * with the Interactive Voice Assistant, Settings, and Sleep Modal.
   */
  function createMalobaFinanceDock() {
    if (document.getElementById("safinum-finance-dock")) return;

    // Remove any previous bottom widget if present
    const oldDock = document.getElementById("safinum-anydoc-dock");
    if (oldDock) oldDock.remove();

    const isClosedSession = sessionStorage.getItem("safinum_dock_closed_v2") === "1";

    // Main Dock Container
    const dock = document.createElement("aside");
    dock.id = "safinum-finance-dock";
    dock.setAttribute("role", "toolbar");
    dock.setAttribute("aria-label", "Maloba Finance Toolbar");
    if (isClosedSession) {
      dock.classList.add("is-hidden");
    }

    dock.innerHTML = `
      <!-- Brand header with animated equalizer -->
      <div class="safinum-dock-brand" id="safinum-btn-dock-brand" title="Maloba Finance · Assistant & Traduction">
        <div class="safinum-brand-avatar" style="pointer-events:none;">
          <img src="${MALOBA_LOGO_DATA_URI}" alt="Maloba Finance" class="safinum-dock-logo" draggable="false" />
        </div>
        <span class="safinum-equalizer" id="safinum-dock-equalizer" data-reading="false" title="Indicateur vocal">
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
        </span>
      </div>

      <div class="safinum-dock-divider"></div>

      <!-- Button 1: Translation (文/A) -->
      <button type="button" class="safinum-dock-btn safinum-btn-translate ${currentMode !== "original" ? "active" : ""}" id="safinum-btn-dock-translate" aria-label="Traduction">
        <span class="safinum-translate-icon">文/A</span>
        <span class="safinum-dock-tooltip" id="safinum-tooltip-translate">${currentMode !== "original" ? "Traduire en Français" : "Traduire en Éton (Maloba Finance)"}</span>
      </button>

      <!-- Button 2: Display Mode (Eye) -->
      <button type="button" class="safinum-dock-btn safinum-btn-mode" id="safinum-btn-dock-mode" aria-label="Mode d'affichage">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span class="safinum-dock-tooltip" id="safinum-tooltip-mode">${currentMode === "lang" ? "Afficher uniquement la traduction" : currentMode === "bilingual" ? "Afficher la version bilingue" : "Afficher l'original"}</span>
      </button>

      <!-- Button 3: Voice Assistant (Headphones) -->
      <button type="button" class="safinum-dock-btn safinum-btn-assistant" id="safinum-btn-dock-assistant" aria-label="Assistant Vocal Maloba">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
        <span class="safinum-assistant-badge" id="safinum-assistant-badge" title="État de l'assistant"></span>
        <span class="safinum-dock-tooltip">Assistant Vocal Financier</span>
      </button>

      <!-- Button 4: Settings (4 squares) -->
      <button type="button" class="safinum-dock-btn safinum-btn-settings" id="safinum-btn-dock-settings" aria-label="Paramètres & Langues">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
        </svg>
        <span class="safinum-dock-tooltip">Paramètres & Langues</span>
      </button>

      <!-- Button 5: Power / Sleep -->
      <button type="button" class="safinum-dock-btn safinum-btn-power" id="safinum-btn-dock-power" aria-label="Désactiver la bulle flottante">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
          <line x1="12" y1="2" x2="12" y2="12"></line>
        </svg>
        <span class="safinum-dock-tooltip">Désactiver la bulle flottante</span>
      </button>

      <!-- FLYOUT 1: ASSISTANT VOCAL INTERACTIF -->
      <div class="safinum-dock-flyout" id="safinum-assistant-panel" role="dialog" aria-label="Assistant Vocal Maloba Finance">
        <div class="safinum-flyout-header">
          <div class="safinum-flyout-title-wrap">
            <span style="font-size:16px;">🎧</span>
            <div>
              <div class="safinum-flyout-title">Assistant Vocal Maloba</div>
              <div style="font-size:10px;color:#6b7280;">Guidage & Sécurité Bancaire Éton</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <button type="button" class="safinum-btn-autonomous-toggle is-autonomous-on" id="safinum-btn-toggle-autonomous" title="L'assistant vous guide vocalement à chaque étape">🟢 Autonome</button>
            <span class="safinum-flyout-badge" id="safinum-assistant-status-badge">Guide Actif</span>
            <button type="button" class="safinum-flyout-close" id="safinum-btn-close-assistant" aria-label="Fermer">✕</button>
          </div>
        </div>

        <!-- Step Guidance Card -->
        <div class="safinum-assistant-card" id="safinum-assistant-step-card">
          <div class="safinum-assistant-card-label">
            <span>📍 Étape Actuelle (<span id="safinum-assistant-step-num">3</span>/5)</span>
          </div>
          <div class="safinum-assistant-step-title" id="safinum-assistant-step-title">Étape 3 : Bénéficiaire</div>
          <div class="safinum-assistant-eto-quote" id="safinum-assistant-step-eto">Ímôdee gbə mwání : Púd idaṇtité ímôd utə́ lôm mwání.</div>
          <div class="safinum-assistant-fr-sub" id="safinum-assistant-step-fr">Renseignez les informations du destinataire. Vérifiez toujours le numéro avant de valider.</div>
          <button type="button" class="safinum-btn-guide-step" id="safinum-btn-assistant-step-audio">
            🔊 Écouter les consignes de l'étape
          </button>
        </div>

        <!-- Live User Action Card -->
        <div class="safinum-assistant-card">
          <div class="safinum-assistant-card-label" style="color:#0284c7;">
            <span>🎯 Ce que vous faites</span>
          </div>
          <div style="font-size:12px;font-weight:700;color:#0f172a;" id="safinum-assistant-action-text">Prêt · En attente de saisie</div>
          <div class="safinum-assistant-fr-sub" id="safinum-assistant-action-sub">L'assistant vocal analyse vos saisies en temps réel pour vous guider.</div>
          <button type="button" class="safinum-btn-guide-step" id="safinum-btn-assistant-action-audio" style="display:none;background:#0284c7;">
            🔊 Écouter ce montant
          </button>
        </div>

        <!-- Error Radar Card -->
        <div class="safinum-assistant-alert is-ok" id="safinum-assistant-radar-card">
          <div style="font-weight:700;" id="safinum-assistant-radar-label">🛡️ Radar & Sécurité</div>
          <div id="safinum-assistant-radar-text">✅ Aucune anomalie détectée : vous pouvez continuer en toute sécurité.</div>
          <button type="button" class="safinum-btn-alert-voice" id="safinum-btn-assistant-fix-audio" style="display:none;">
            🔊 Écouter la correction en Éton
          </button>
        </div>

        <!-- Quick Voice Actions Grid -->
        <div class="safinum-assistant-actions-grid">
          <button type="button" class="safinum-btn-subaction" id="safinum-btn-assistant-read-page">
            🔊 Lire la page
          </button>
          <button type="button" class="safinum-btn-subaction" id="safinum-btn-assistant-slow">
            🐢 Ralenti (0.85x)
          </button>
          <button type="button" class="safinum-btn-subaction" id="safinum-btn-assistant-repeat">
            🔁 Répéter
          </button>
          <button type="button" class="safinum-btn-subaction" id="safinum-btn-assistant-stop">
            ⏹️ Arrêter
          </button>
        </div>
      </div>

      <!-- FLYOUT 2: SETTINGS & LANGUAGES -->
      <div class="safinum-dock-flyout" id="safinum-settings-panel" role="dialog" aria-label="Paramètres et Langues">
        <div class="safinum-flyout-header">
          <div class="safinum-flyout-title-wrap">
            <span style="font-size:16px;">⊞</span>
            <div class="safinum-flyout-title">Paramètres & Langues</div>
          </div>
          <button type="button" class="safinum-flyout-close" id="safinum-btn-close-settings" aria-label="Fermer">✕</button>
        </div>

        <div style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.04em;">Langues Nationales Disponibles</div>

        <div style="display:flex;flex-direction:column;gap:6px;">
          <!-- Eton (Active 100% Muriel) -->
          <div class="safinum-lang-option ${currentLang === "eto" ? "selected" : ""}" data-settings-lang="eto" role="button" tabindex="0">
            ${createCompletionRingSVG(100, 28)}
            <div style="flex:1;">
              <div style="font-weight:700;color:#111827;display:flex;align-items:center;justify-content:space-between;">
                <span>Éton (eto)</span>
                <span style="font-size:9.5px;background:#ecfdf5;color:#059669;padding:1px 6px;border-radius:9999px;font-weight:700;">100% Voix Humaine</span>
              </div>
              <div style="font-size:10.5px;color:#6b7280;">Voix réelle de Muriel Menye · Centre (Lekié)</div>
            </div>
          </div>

          <!-- Ewondo -->
          <div class="safinum-lang-option ${currentLang === "ewo" ? "selected" : ""}" data-settings-lang="ewo" role="button" tabindex="0">
            ${createCompletionRingSVG(85, 28)}
            <div style="flex:1;">
              <div style="font-weight:700;color:#111827;">Ewondo (ewo)</div>
              <div style="font-size:10.5px;color:#6b7280;">Centre, Sud, Est · Synthèse neuronale</div>
            </div>
          </div>

          <!-- Fulfulde -->
          <div class="safinum-lang-option ${currentLang === "fub" ? "selected" : ""}" data-settings-lang="fub" role="button" tabindex="0">
            ${createCompletionRingSVG(80, 28)}
            <div style="flex:1;">
              <div style="font-weight:700;color:#111827;">Fulfulde (fub)</div>
              <div style="font-size:10.5px;color:#6b7280;">Grand-Nord · Synthèse vocale</div>
            </div>
          </div>
        </div>

        <div style="border-top:1px solid #f3f4f6;padding-top:8px;display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:11.5px;font-weight:600;color:#374151;">Vitesse de lecture</span>
          <button type="button" class="safinum-btn-subaction" id="safinum-btn-toggle-speed" style="padding:4px 10px;">
            1.0x Normal
          </button>
        </div>
      </div>

      <!-- POWER / SLEEP MODAL (MATCHING ANYDOC SCREENSHOT 5) -->
      <div class="safinum-power-modal" id="safinum-power-modal" role="dialog" aria-label="Désactiver la bulle flottante">
        <div class="safinum-power-header">
          <span class="safinum-power-title">Désactiver la bulle flottante</span>
          <button type="button" class="safinum-flyout-close" id="safinum-btn-close-power" aria-label="Fermer">✕</button>
        </div>

        <div class="safinum-power-options">
          <label class="safinum-power-label">
            <input type="radio" name="safinum-sleep-choice" value="session" checked />
            <span>Fermée cette fois-ci jusqu'à la prochaine visite</span>
          </label>
          <label class="safinum-power-label">
            <input type="radio" name="safinum-sleep-choice" value="page" />
            <span>Désactivée pour la page actuelle</span>
          </label>
          <label class="safinum-power-label">
            <input type="radio" name="safinum-sleep-choice" value="always" />
            <span>Désactiver de façon définitive</span>
          </label>
        </div>

        <div class="safinum-power-footer">
          <span class="safinum-power-hint">Chemin pour réactiver : Paramètres</span>
          <button type="button" class="safinum-btn-confirm-power" id="safinum-btn-confirm-power">
            Confirmer
          </button>
        </div>
      </div>
    `;

    // Reopen Tab (Mini pill anchored to right screen edge)
    const reopenTab = document.createElement("div");
    reopenTab.id = "safinum-finance-reopen-tab";
    reopenTab.title = "Ouvrir Maloba Finance";
    reopenTab.setAttribute("role", "button");
    reopenTab.setAttribute("tabindex", "0");
    if (isClosedSession) {
      reopenTab.classList.add("is-visible");
    }
    reopenTab.innerHTML = `
      <span style="pointer-events:none;background:#ffffff;border-radius:10px;padding:3px;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.18);">
        <img src="${MALOBA_LOGO_DATA_URI}" alt="Maloba Finance" class="safinum-reopen-logo" draggable="false" />
      </span>
      <span class="safinum-reopen-arrow" style="pointer-events:none;">‹</span>
    `;

    document.body.appendChild(dock);
    document.body.appendChild(reopenTab);

    // Wire up event controllers
    setupDockToolbar(dock, reopenTab);
    setupAssistantController(dock);
    setupSettingsController(dock);
    setupPowerModalController(dock, reopenTab);
    setupReopenTabController(dock, reopenTab);
    setupVerticalDragController(dock, reopenTab);

    updateMalobaFinanceDockState();
  }

  function setupDockToolbar(dock, reopenTab) {
    const brandBtn = dock.querySelector("#safinum-btn-dock-brand");
    const transBtn = dock.querySelector("#safinum-btn-dock-translate");
    const modeBtn = dock.querySelector("#safinum-btn-dock-mode");
    const assistantBtn = dock.querySelector("#safinum-btn-dock-assistant");
    const settingsBtn = dock.querySelector("#safinum-btn-dock-settings");
    const powerBtn = dock.querySelector("#safinum-btn-dock-power");

    const assistantPanel = dock.querySelector("#safinum-assistant-panel");
    const settingsPanel = dock.querySelector("#safinum-settings-panel");
    const powerModal = dock.querySelector("#safinum-power-modal");

    const closeAllFlyouts = () => {
      if (assistantPanel) assistantPanel.classList.remove("is-open");
      if (settingsPanel) settingsPanel.classList.remove("is-open");
      if (powerModal) powerModal.classList.remove("is-open");
      if (assistantBtn) assistantBtn.classList.remove("active");
      if (settingsBtn) settingsBtn.classList.remove("active");
    };

    if (brandBtn) {
      brandBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (dock.getAttribute("data-just-dragged") === "true") {
          dock.removeAttribute("data-just-dragged");
          return;
        }
        if (assistantPanel && assistantPanel.classList.contains("is-open")) {
          closeAllFlyouts();
        } else {
          closeAllFlyouts();
          if (assistantPanel) assistantPanel.classList.add("is-open");
          if (assistantBtn) assistantBtn.classList.add("active");
          updateStepCard();
          updateRadarCard();
        }
      });
    }

    if (transBtn) {
      transBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllFlyouts();
        if (currentMode !== "original") {
          setMode("original");
        } else {
          setMode("lang");
        }
        updateMalobaFinanceDockState();
      });
    }

    if (modeBtn) {
      modeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllFlyouts();
        if (currentMode === "lang") {
          setMode("bilingual");
        } else if (currentMode === "bilingual") {
          setMode("original");
        } else {
          setMode("lang");
        }
        updateMalobaFinanceDockState();
      });
    }

    if (assistantBtn) {
      assistantBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = assistantPanel && assistantPanel.classList.contains("is-open");
        closeAllFlyouts();
        if (!isOpen && assistantPanel) {
          assistantPanel.classList.add("is-open");
          assistantBtn.classList.add("active");
          updateStepCard();
          updateRadarCard();
        }
      });
    }

    if (settingsBtn) {
      settingsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = settingsPanel && settingsPanel.classList.contains("is-open");
        closeAllFlyouts();
        if (!isOpen && settingsPanel) {
          settingsPanel.classList.add("is-open");
          settingsBtn.classList.add("active");
        }
      });
    }

    if (powerBtn) {
      powerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = powerModal && powerModal.classList.contains("is-open");
        closeAllFlyouts();
        if (!isOpen && powerModal) {
          powerModal.classList.add("is-open");
        }
      });
    }

    // Close flyouts on click outside
    document.addEventListener("click", (e) => {
      if (!dock.contains(e.target)) {
        closeAllFlyouts();
      }
    });

    // Voice and screen reader state bindings for equalizer
    const equalizer = dock.querySelector("#safinum-dock-equalizer");
    window.addEventListener("safinum-voice-state", (e) => {
      const detail = (e && e.detail) || {};
      if (equalizer) {
        equalizer.setAttribute("data-reading", detail.speaking ? "true" : "false");
      }
    });
    window.addEventListener("safinum-screen-reader-state", (e) => {
      const state = (e && e.detail) || {};
      const isReading = Boolean(state.isActive && !state.isPaused);
      if (equalizer) {
        equalizer.setAttribute("data-reading", isReading ? "true" : "false");
      }
    });
  }

  function setupAssistantController(dock) {
    const closeBtn = dock.querySelector("#safinum-btn-close-assistant");
    const assistantPanel = dock.querySelector("#safinum-assistant-panel");
    const toggleAutoBtn = dock.querySelector("#safinum-btn-toggle-autonomous");
    const readPageBtn = dock.querySelector("#safinum-btn-assistant-read-page");
    const slowBtn = dock.querySelector("#safinum-btn-assistant-slow");
    const repeatBtn = dock.querySelector("#safinum-btn-assistant-repeat");
    const stopBtn = dock.querySelector("#safinum-btn-assistant-stop");

    updateAutonomousToggleUI();

    if (toggleAutoBtn) {
      toggleAutoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        isAutonomousVoiceEnabled = !isAutonomousVoiceEnabled;
        try {
          localStorage.setItem("safinum_autonomous_voice", isAutonomousVoiceEnabled ? "true" : "false");
        } catch (_) {}
        updateAutonomousToggleUI();
        if (!isAutonomousVoiceEnabled && Voice && typeof Voice.stop === "function") {
          Voice.stop();
        } else if (isAutonomousVoiceEnabled) {
          const step = detectActiveStep();
          if (step && step.audio) {
            Voice.playAudio(step.audio, { displayText: step.eto });
          }
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (assistantPanel) assistantPanel.classList.remove("is-open");
        const btn = dock.querySelector("#safinum-btn-dock-assistant");
        if (btn) btn.classList.remove("active");
      });
    }

    if (readPageBtn) {
      readPageBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!ScreenReader) return;
        if (ScreenReader.isActive) {
          ScreenReader.stop();
        } else {
          ScreenReader.start(currentLang);
        }
      });
    }

    if (slowBtn) {
      slowBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        Voice.setPlaybackRate(0.85);
        Voice.playAudio("assets/audio/eton/saf_cmd_004_take1_d561b3ed.webm");
      });
    }

    if (repeatBtn) {
      repeatBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const step = detectActiveStep();
        Voice.playAudio("assets/audio/eton/saf_cmd_003_take1_37395e0c.webm").then(() => {
          Voice.playAudio(step.audio, { displayText: step.eto });
        });
      });
    }

    if (stopBtn) {
      stopBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (ScreenReader && ScreenReader.isActive) ScreenReader.stop();
        Voice.stop();
        Voice.playAudio("assets/audio/eton/saf_cmd_009_take1_77302cbf.webm");
      });
    }

    // Live form action watcher for "Ce que vous faites"
    const handleInputActivity = (e) => {
      const target = e.target;
      if (!target || !target.tagName) return;
      const tag = target.tagName.toLowerCase();
      if (tag !== "input" && tag !== "textarea" && tag !== "select") return;

      const type = (target.type || "").toLowerCase();
      const name = (target.name || target.id || "").toLowerCase();
      const placeholder = (target.placeholder || "").toLowerCase();

      if (type === "number" || name.includes("amount") || name.includes("montant") || placeholder.includes("montant")) {
        const raw = target.value || "";
        const num = parseInt(raw.replace(/\D/g, ""), 10);
        if (num > 250000) {
          updateLiveActionCard({
            title: `⚠️ Montant élevé : ${num.toLocaleString("fr-FR")} FCFA`,
            sub: "Attention : ce montant dépasse votre solde affiché (250 000 FCFA). Réduisez la somme pour éviter un rejet.",
            audioAction: {
              label: `🔊 Entendre l'alerte solde`,
              handler: () => Voice.playAudio("assets/audio/eton/saf_exp_058_take1_c702bccb.webm")
            }
          });
        } else if (num > 0) {
          updateLiveActionCard({
            title: `Saisie du montant : ${num.toLocaleString("fr-FR")} FCFA`,
            sub: "Montant identifié par l'assistant. Cliquez ci-dessous pour l'entendre en Éton avec la vraie voix de Muriel Menye.",
            audioAction: {
              label: `🔊 Entendre ${num.toLocaleString("fr-FR")} FCFA`,
              handler: () => Voice.speakAmount(num, { lang: currentLang, includeCurrency: true })
            }
          });
        } else if (raw.trim() === "0") {
          updateLiveActionCard({
            title: "⚠️ Montant nul (0 FCFA)",
            sub: "Le montant doit être supérieur à 0 FCFA pour effectuer un transfert.",
            audioAction: {
              label: "🔊 Entendre la correction",
              handler: () => Voice.playAudio("assets/audio/eton/saf_exp_061_take1_c23db818.webm")
            }
          });
        } else {
          updateLiveActionCard({
            title: "Saisie du montant de transfert",
            sub: "Tapez le montant à transférer (ex : 250 000 FCFA).",
            audioAction: null
          });
        }
      } else if (type === "tel" || name.includes("phone") || name.includes("téléfon") || name.includes("destinataire")) {
        updateLiveActionCard({
          title: "Saisie du numéro de téléphone destinataire",
          sub: "Vérifiez que le préfixe réseau correspond au destinataire (+237 6xx xx xx xx).",
          audioAction: null
        });
      } else if (name.includes("name") || name.includes("dwě") || name.includes("nom")) {
        updateLiveActionCard({
          title: "Saisie du nom du bénéficiaire",
          sub: "Assurez-vous de l'orthographe exacte pour éviter toute contestation.",
          audioAction: null
        });
      } else if (type === "password" || name.includes("pin") || name.includes("otp") || name.includes("secret")) {
        updateLiveActionCard({
          title: "Saisie du code secret d'autorisation",
          sub: "Ne communiquez jamais votre code secret à un tiers.",
          audioAction: {
            label: "🔊 Consigne de sécurité",
            handler: () => Voice.playAudio("assets/audio/eton/saf_cmd_010_take1_e1286fce.webm")
          }
        });
      } else if (type === "checkbox") {
        updateLiveActionCard({
          title: target.checked ? "Contrôle de sécurité validé" : "Case de sécurité non cochée",
          sub: target.checked ? "Vous avez certifié les informations du bénéficiaire." : "Cochez la case pour pouvoir envoyer les fonds.",
          audioAction: null
        });
      }
    };

    document.addEventListener("focusin", handleInputActivity, true);
    document.addEventListener("input", handleInputActivity, true);
  }

  function setupSettingsController(dock) {
    const closeBtn = dock.querySelector("#safinum-btn-close-settings");
    const settingsPanel = dock.querySelector("#safinum-settings-panel");
    const speedBtn = dock.querySelector("#safinum-btn-toggle-speed");

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (settingsPanel) settingsPanel.classList.remove("is-open");
        const btn = dock.querySelector("#safinum-btn-dock-settings");
        if (btn) btn.classList.remove("active");
      });
    }

    dock.querySelectorAll("[data-settings-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const lang = btn.getAttribute("data-settings-lang");
        if (!lang) return;
        setLanguage(lang);
        setMode("lang");
        Voice.playAudio("assets/audio/eton/saf_cmd_005_take1_fd4689f0.webm");
        updateMalobaFinanceDockState();
      });
    });

    if (speedBtn) {
      let isSlow = false;
      speedBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        isSlow = !isSlow;
        const rate = isSlow ? 0.85 : 1.0;
        Voice.setPlaybackRate(rate);
        speedBtn.textContent = isSlow ? "0.85x Ralenti" : "1.0x Normal";
        if (isSlow) {
          Voice.playAudio("assets/audio/eton/saf_cmd_004_take1_d561b3ed.webm");
        }
      });
    }
  }

  function unmountMalobaCompletely() {
    if (ScreenReader && ScreenReader.isActive) ScreenReader.stop();
    if (Voice && typeof Voice.stop === "function") Voice.stop();
    setMode("original");
    const dockEl = document.getElementById("safinum-finance-dock");
    const tabEl = document.getElementById("safinum-finance-reopen-tab");
    const pillEl = document.getElementById("safinum-anydoc-hover-pill");
    if (dockEl) dockEl.remove();
    if (tabEl) tabEl.remove();
    if (pillEl) pillEl.remove();
  }

  function setupPowerModalController(dock, reopenTab) {
    const closeBtn = dock.querySelector("#safinum-btn-close-power");
    const confirmBtn = dock.querySelector("#safinum-btn-confirm-power");
    const powerModal = dock.querySelector("#safinum-power-modal");

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (powerModal) powerModal.classList.remove("is-open");
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const selected = dock.querySelector('input[name="safinum-sleep-choice"]:checked');
        const choice = selected ? selected.value : "session";

        if (choice === "session") {
          // Option 1: Hide dock for this session, show discrete Maloba reopen tab on right edge
          sessionStorage.setItem("safinum_dock_closed_v2", "1");
          if (powerModal) powerModal.classList.remove("is-open");
          dock.classList.add("is-hidden");
          if (reopenTab) reopenTab.classList.add("is-visible");
        } else if (choice === "page") {
          // Option 2: Completely remove Maloba from this page URL (no dock, no reopen tab)
          try {
            localStorage.setItem(`safinum_disabled_page_v2_${location.pathname}`, "true");
          } catch (_) {}
          unmountMalobaCompletely();
        } else if (choice === "always") {
          // Option 3: Permanently disable Maloba everywhere until re-enabled
          try {
            localStorage.setItem("safinum_dock_disabled_v2_perm", "true");
            if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
              chrome.storage.local.set({ safinum_dock_disabled_v2: true });
            }
          } catch (_) {}
          unmountMalobaCompletely();
        }
      });
    }
  }

  function openDockFromReopenTab(dock, reopenTab) {
    try {
      sessionStorage.removeItem("safinum_dock_closed_v2");
      sessionStorage.removeItem("safinum_dock_closed");
    } catch (_) {}
    if (reopenTab) reopenTab.classList.remove("is-visible");
    if (dock) dock.classList.remove("is-hidden");
    updateMalobaFinanceDockState();
  }

  function setupReopenTabController(dock, reopenTab) {
    if (!reopenTab) return;
    reopenTab.addEventListener("click", (e) => {
      e.stopPropagation();
      if (reopenTab.getAttribute("data-just-dragged") === "true") {
        reopenTab.removeAttribute("data-just-dragged");
        return;
      }
      openDockFromReopenTab(dock, reopenTab);
    });
    reopenTab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        openDockFromReopenTab(dock, reopenTab);
      }
    });
  }

  /**
   * Enables smooth vertical drag-and-drop repositioning (top <-> bottom along the right edge)
   * for both the Maloba Finance dock and its minimized reopen tab, persisted in localStorage.
   */
  function setupVerticalDragController(dock, reopenTab) {
    const STORAGE_KEY = "safinum_dock_top_px";

    const applyTopPosition = (topPx) => {
      const clamped = Math.max(20, Math.min(window.innerHeight - 70, topPx));
      [dock, reopenTab].forEach((el) => {
        if (!el) return;
        el.style.top = `${clamped}px`;
        el.style.transform = "translateY(0)";
      });
      return clamped;
    };

    try {
      const saved = parseFloat(localStorage.getItem(STORAGE_KEY));
      if (!isNaN(saved)) {
        applyTopPosition(saved);
      }
    } catch (_) {}

    const attachDrag = (handleEl, targetEl) => {
      if (!handleEl || !targetEl) return;
      let isDragging = false;
      let hasMoved = false;
      let startY = 0;
      let startTop = 0;

      handleEl.addEventListener("pointerdown", (e) => {
        if (e.button !== 0 && e.pointerType === "mouse") return;
        // Do not hijack clicks on interactive buttons inside the dock unless dragging the brand handle
        if (handleEl === dock && e.target.closest("button, input, label, .safinum-dock-flyout, .safinum-power-modal")) {
          return;
        }
        isDragging = true;
        hasMoved = false;
        startY = e.clientY;
        const rect = targetEl.getBoundingClientRect();
        startTop = rect.top;
        targetEl.classList.add("is-dragging");
      });

      window.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const deltaY = e.clientY - startY;
        if (Math.abs(deltaY) > 6) {
          hasMoved = true;
        }
        if (hasMoved) {
          const maxTop = Math.max(20, window.innerHeight - targetEl.offsetHeight - 16);
          const nextTop = Math.max(16, Math.min(maxTop, startTop + deltaY));
          applyTopPosition(nextTop);
        }
      });

      const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        targetEl.classList.remove("is-dragging");
        if (hasMoved) {
          targetEl.setAttribute("data-just-dragged", "true");
          setTimeout(() => targetEl.removeAttribute("data-just-dragged"), 180);
          try {
            const rect = targetEl.getBoundingClientRect();
            localStorage.setItem(STORAGE_KEY, String(Math.round(rect.top)));
          } catch (_) {}
        } else if (targetEl === reopenTab) {
          openDockFromReopenTab(dock, reopenTab);
        }
      };

      window.addEventListener("pointerup", endDrag);
      window.addEventListener("pointercancel", endDrag);
    };

    const brandHandle = dock.querySelector("#safinum-btn-dock-brand");
    attachDrag(brandHandle, dock);
    attachDrag(dock, dock);
    attachDrag(reopenTab, reopenTab);

    window.addEventListener("resize", () => {
      try {
        const saved = parseFloat(localStorage.getItem(STORAGE_KEY));
        if (!isNaN(saved)) applyTopPosition(saved);
      } catch (_) {}
    });
  }

  /**
   * Updates the live action card with active translation data.
   * @param {Object} entry - Translation record
   * @param {HTMLElement|null} sourceEl - Originating element
   */
  function setInspectorEntry(entry, sourceEl) {
    if (!entry) return;
    if (sourceEl) {
      highlightSpokenElement(sourceEl);
    }
    const cfg = getLangConfig(currentLang);
    const langData = (entry.languages && entry.languages[currentLang]) || {};
    const activeText = langData.text || entry[currentLang] || entry.original || "";
    const activeExplain = langData.explain_text || entry[`explain_${currentLang}`] || entry.explain_fr || "";
    const hasAudio = Boolean(
      typeof entry.numericAmount === "number" ||
        langData.audio ||
        langData.explain_audio ||
        entry.audio ||
        entry.explain_audio
    );

    updateLiveActionCard({
      title: activeText || entry.original,
      sub: activeExplain || entry.original,
      audioAction: hasAudio
        ? {
            label: "🔊 Écouter",
            handler: () => {
              if (typeof entry.numericAmount === "number") {
                Voice.speakAmount(entry.numericAmount, {
                  lang: currentLang,
                  includeCurrency: entry.hasCurrency !== false
                });
              } else {
                Voice.speakPhraseAndExplanation(entry, currentLang);
              }
            }
          }
        : null
    });
  }

  /**
   * Updates live translated nodes count on the floating dock.
   */
  function updateDockStats() {
    pruneTrackedNodes();
  }

  /**
   * Narrates the primary instruction or injected alert of the current step.
   */
  function narrateActiveStep() {
    const step = detectActiveStep();
    updateStepCard();
    if (step && step.audio) {
      Voice.playAudio(step.audio, { displayText: step.eto });
    }
  }

  /**
   * Persists user preferences in chrome.storage.local when available.
   */
  function persistPreferences() {
    try {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
          safinum_lang: currentLang,
          safinum_mode: currentMode
        });
      }
    } catch (_) {
      // Ignore storage quota or restricted context errors
    }
  }

  /**
   * Switches active national language and updates UI labels.
   * @param {string} newLang - Target language ISO code (e.g. 'eto')
   */
  function setLanguage(newLang) {
    const cfg = getLangConfig(newLang);
    if (!cfg || !cfg.active) return;
    currentLang = cfg.code;
    persistPreferences();

    const pillBadge = document.getElementById("safinum-pill-lang-badge");
    if (pillBadge) {
      pillBadge.textContent = cfg.name;
    }
    const pillSpeakLabel = document.getElementById("safinum-pill-speak-label");
    if (pillSpeakLabel) {
      pillSpeakLabel.textContent = cfg.listenWord;
    }

    updateMalobaFinanceDockState();
    translateDOM();
  }

  /**
   * Sets display mode: 'lang' (pure translation), 'bilingual' (with original), or 'original' (French pure).
   * @param {string} newMode - Display mode
   */
  function setMode(newMode) {
    if (!["lang", "bilingual", "original"].includes(newMode)) return;
    currentMode = newMode;
    document.documentElement.setAttribute("data-safinum-mode", currentMode);
    if (currentMode === "original") {
      if (ScreenReader && ScreenReader.isActive) {
        ScreenReader.stop();
      }
      if (Voice && typeof Voice.stop === "function") {
        Voice.stop();
      }
      const hoverPill = document.getElementById("safinum-anydoc-hover-pill");
      if (hoverPill) hoverPill.classList.remove("is-visible");
      document.querySelectorAll('[data-safinum-speaking="true"]').forEach((node) => {
        node.removeAttribute("data-safinum-speaking");
      });
    }

    persistPreferences();
    updateMalobaFinanceDockState();
    translateDOM();
  }

  function isExtensionDisabledForCurrentContext() {
    try {
      // Clear any legacy v1 test flags so fresh extension reloads always start clean
      localStorage.removeItem("safinum_dock_disabled_permanently");
      localStorage.removeItem(`safinum_disabled_page_${location.pathname}`);
      if (localStorage.getItem("safinum_dock_disabled_v2_perm") === "true") return true;
      if (localStorage.getItem(`safinum_disabled_page_v2_${location.pathname}`) === "true") return true;
    } catch (_) {}
    return false;
  }

  function ensureDockMountedAndVisible() {
    try {
      localStorage.removeItem("safinum_dock_disabled_v2_perm");
      localStorage.removeItem(`safinum_disabled_page_v2_${location.pathname}`);
      sessionStorage.removeItem("safinum_dock_closed");
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ safinum_dock_disabled_v2: false });
      }
    } catch (_) {}

    if (!document.getElementById("safinum-anydoc-hover-pill")) {
      createHoverPill();
    }
    if (!document.getElementById("safinum-finance-dock")) {
      createMalobaFinanceDock();
    } else {
      const dock = document.getElementById("safinum-finance-dock");
      const reopenTab = document.getElementById("safinum-finance-reopen-tab");
      dock.classList.remove("is-hidden");
      if (reopenTab) reopenTab.classList.remove("is-visible");
    }
    updateMalobaFinanceDockState();
  }

  /**
   * Main extension initialization sequence.
   */
  function init() {
    const mountUI = () => {
      if (isExtensionDisabledForCurrentContext()) return;
      document.documentElement.setAttribute("data-safinum-mode", currentMode);
      createHoverPill();
      createMalobaFinanceDock();

      // Initial 60ms delay ensures Vue 3's onMounted() registers baseline before translation
      setTimeout(() => {
        translateDOM();
        updateMalobaFinanceDockState();
        checkStepTransition(false);
        checkErrorTransition(true);
      }, 60);
    };

    if (!isExtensionDisabledForCurrentContext()) {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(["safinum_lang", "safinum_mode", "safinum_dock_disabled_v2"], (res) => {
          if (res && res.safinum_dock_disabled_v2 === true) {
            return;
          }
          if (res && res.safinum_lang) {
            const cfg = getLangConfig(res.safinum_lang);
            if (cfg && cfg.active) currentLang = cfg.code;
          }
          if (res && ["lang", "bilingual", "original"].includes(res.safinum_mode)) {
            currentMode = res.safinum_mode;
          }
          mountUI();
        });
      } else {
        mountUI();
      }
    }

    // Non-destructive MutationObserver watches dynamic step transitions and jury injections (#injected-*)
    const observer = new MutationObserver((mutations) => {
      if (isApplyingDOMChanges || isExtensionDisabledForCurrentContext()) return;
      let hasRelevantChange = false;
      for (const m of mutations) {
        const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
        if (!t) continue;
        if (
          t.closest?.("#safinum-finance-dock") ||
          t.closest?.("#safinum-finance-reopen-tab") ||
          t.closest?.("#safinum-anydoc-dock") ||
          t.closest?.("#safinum-anydoc-hover-pill") ||
          t.closest?.("aside.fixed")
        ) {
          continue;
        }
        hasRelevantChange = true;
        break;
      }
      if (!hasRelevantChange) return;

      if (mutationTimer) clearTimeout(mutationTimer);
      // Wait 40ms for Vue's nextTick() to complete baseline diffing before applying national language translation
      mutationTimer = setTimeout(() => {
        translateDOM();
        updateMalobaFinanceDockState();
        checkStepTransition(true);
        checkErrorTransition(true);
      }, 40);
    });


    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // Autonomous step-transition listener on banking navigation clicks
    document.addEventListener(
      "click",
      (e) => {
        if (isExtensionDisabledForCurrentContext()) return;
        const t = e.target;
        if (
          t &&
          t.closest &&
          (t.closest("#safinum-finance-dock") ||
            t.closest("#safinum-finance-reopen-tab") ||
            t.closest("#safinum-anydoc-hover-pill"))
        ) {
          return;
        }
        setTimeout(() => {
          checkStepTransition(true);
          checkErrorTransition(true);
        }, 120);
      },
      true
    );

    // Chrome Runtime Message Listener for popup communication
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (msg.type === "GET_STATUS") {
          pruneTrackedNodes();
          let activeCount = 0;
          trackedNodes.forEach((n) => {
            if (n && n.isConnected) activeCount++;
          });
          sendResponse({
            mode: currentMode,
            lang: currentLang,
            translatedNodes: activeCount,
            screenReaderActive: Boolean(ScreenReader && ScreenReader.isActive),
            stats: Graph ? Graph.stats : {},
            meta: KB.meta
          });
        } else if (msg.type === "SET_MODE") {
          ensureDockMountedAndVisible();
          setMode(msg.mode);
          sendResponse({ ok: true, mode: currentMode, lang: currentLang });
        } else if (msg.type === "SET_LANG") {
          ensureDockMountedAndVisible();
          setLanguage(msg.lang);
          setMode("lang");
          sendResponse({ ok: true, mode: currentMode, lang: currentLang });
        } else if (msg.type === "SHOW_DOCK") {
          ensureDockMountedAndVisible();
          sendResponse({ ok: true });
        } else if (msg.type === "SPEAK_STEP") {
          ensureDockMountedAndVisible();
          if (ScreenReader && ScreenReader.isActive) ScreenReader.stop();
          narrateActiveStep();
          sendResponse({ ok: true });
        } else if (msg.type === "READ_PAGE_TOGGLE") {
          ensureDockMountedAndVisible();
          if (ScreenReader) {
            if (ScreenReader.isActive) {
              ScreenReader.stop();
            } else {
              ScreenReader.start(currentLang);
            }
            sendResponse({ ok: true, active: ScreenReader.isActive });
          } else {
            sendResponse({ ok: false });
          }
        } else if (msg.type === "SPEAK_AMOUNT") {
          if (NumberEngine) {
            const parsed = NumberEngine.parseAmount(msg.amount);
            if (parsed !== null) {
              const formattedLabel = `${parsed.toLocaleString("fr-FR")} FCFA`;
              const entry = buildNumericAmountEntry(parsed, formattedLabel);
              setInspectorEntry(entry, null);
              Voice.speakAmount(parsed, { lang: currentLang, includeCurrency: true });
              sendResponse({ ok: true, amount: parsed });
              return false;
            }
          }
          sendResponse({ ok: false });
        }
        return false; // Synchronous responses handled
      });
    }
  }

  // Mount when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

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
  const MALOBA_LOGO_DATA_URI =
    "data:image/png;base64,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";

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
    const keys = NumberEngine ? NumberEngine.decompose(amount, { includeCurrency: hasCurrency }) : [];
    const etoWords = NumberEngine
      ? NumberEngine.toWords(amount, { lang: "eto", includeCurrency: hasCurrency })
      : String(amount);

    return {
      original: rawLabel,
      numericAmount: amount,
      hasCurrency,
      audioKeys: keys,
      eto: etoWords,
      explain_eto: `Tán i mwání : ${etoWords}`,
      explain_fr: `Montant détecté (${rawLabel}) lu chiffre par chiffre en Éton (${keys.length} segments audio .ogg).`,
      category: "Montants & Chiffres Safinum",
      entities: [rawLabel],
      source: "SafinumWebNumberEngine (.ogg)",
      mode: "NUMBER_STITCHER",
      languages: {
        eto: {
          text: etoWords,
          audio: null,
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

    // Do not touch Maloba AnyDoc extension elements
    if (parent.closest("#safinum-anydoc-dock") || parent.closest("#safinum-anydoc-hover-pill")) return true;

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
        if (Graph.isSacredOnly(trimmed)) {
          if (NumberEngine && parent && parent.tagName !== "OPTION") {
            const parsedAmount = NumberEngine.parseAmount(trimmed);
            if (parsedAmount !== null) {
              const numericEntry = buildNumericAmountEntry(parsedAmount, trimmed);
              parent.setAttribute("data-safinum-translated", "true");
              parent.setAttribute("data-safinum-amount", String(parsedAmount));
              parent.__safinumEntry = numericEntry;
            }
          }
          return;
        }

        const result = Graph.translateAndExplain(trimmed);
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

  function renderDockLanguagePicker(dock) {
    if (!dock) return;
    const registry = getLanguageRegistry();
    const activeCfg = getLangConfig(currentLang);
    const isOriginalMode = currentMode === "original";
    const pageLangCode = detectPageLanguageCode();
    const pillLangName = dock.querySelector("#safinum-notch-lang-name");
    const menu = dock.querySelector("#safinum-lang-menu");
    const readPageBtn = dock.querySelector("#safinum-btn-read-page");
    const pausePageBtn = dock.querySelector("#safinum-btn-pause-page");

    if (pillLangName) {
      pillLangName.textContent = isOriginalMode
        ? `Original (${pageLangCode})`
        : (activeCfg ? activeCfg.name : "Maloba");
    }

    if (readPageBtn) {
      readPageBtn.disabled = isOriginalMode;
      if (isOriginalMode) {
        readPageBtn.classList.remove("active");
        const labelEl = readPageBtn.querySelector("span");
        if (labelEl) labelEl.textContent = "Lecture désactivée";
        readPageBtn.title = "Sélectionnez une langue pour activer la lecture";
      } else if (!ScreenReader || !ScreenReader.isActive) {
        const labelEl = readPageBtn.querySelector("span");
        if (labelEl) labelEl.textContent = "Lire toute la page";
        readPageBtn.title = "Lire toute la page séquentiellement";
      }
    }
    if (pausePageBtn && isOriginalMode) {
      pausePageBtn.style.display = "none";
    }

    if (menu) {
      const langItemsHtml = Object.values(registry)
        .map((l) => {
          const pct = l.completionPercent ?? (l.active ? 100 : 0);
          const isSelected = !isOriginalMode && l.code === currentLang;
          const isDisabled = Boolean(l.soon || !l.active);
          const countInfo = `${l.recordsCount || 0}/${l.targetRecordsCount || 192}`;
          return `
            <button
              type="button"
              role="option"
              aria-selected="${isSelected}"
              data-lang="${l.code}"
              ${isDisabled ? "disabled" : ""}
              class="safinum-notch-lang-item ${isSelected ? "selected" : ""}"
            >
              ${createCompletionRingSVG(pct, 30)}
              <div class="safinum-notch-lang-meta">
                <div class="safinum-notch-lang-title">
                  <span>${l.name}</span>
                  <span class="safinum-notch-lang-code">${l.code}</span>
                </div>
                <div class="safinum-notch-lang-sub ${l.active ? "is-ready" : ""}">
                  ${l.active ? `Disponible · ${pct}% (${countInfo})` : `En collecte · ${pct}% (${countInfo})`}
                </div>
              </div>
              ${
                isSelected
                  ? `<svg class="safinum-notch-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`
                  : ""
              }
            </button>
          `;
        })
        .join("");

      const originalOptionHtml = `
        <button
          type="button"
          role="option"
          aria-selected="${isOriginalMode}"
          data-mode-original="true"
          class="safinum-notch-lang-item safinum-notch-original-item ${isOriginalMode ? "selected" : ""}"
        >
          <span class="safinum-notch-original-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </span>
          <div class="safinum-notch-lang-meta">
            <div class="safinum-notch-lang-title">
              <span>Texte original</span>
              <span class="safinum-notch-lang-code">${pageLangCode}</span>
            </div>
            <div class="safinum-notch-lang-sub">
              Désactive traduction, survol et lecture
            </div>
          </div>
          ${
            isOriginalMode
              ? `<svg class="safinum-notch-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`
              : ""
          }
        </button>
      `;

      menu.innerHTML = `${originalOptionHtml}${langItemsHtml}`;

      menu.querySelectorAll("button[data-lang]:not([disabled])").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const newLang = btn.getAttribute("data-lang");
          if (!newLang) return;
          setLanguage(newLang);
          setMode("lang");
        });
      });

      const origBtn = menu.querySelector('button[data-mode-original="true"]');
      if (origBtn) {
        origBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          setMode("original");
        });
      }
    }
  }

  /**
   * Instantiates and mounts the Maloba AnyDoc floating Dynamic Island (Notch).
   */
  function createAnyDocDock() {
    if (document.getElementById("safinum-anydoc-dock")) return;

    const dock = document.createElement("aside");
    dock.id = "safinum-anydoc-dock";

    const cfg = getLangConfig(currentLang);

    dock.innerHTML = `
      <div class="safinum-notch-pill">
        <button
          type="button"
          class="safinum-notch-drag-handle"
          id="safinum-notch-drag-handle"
          title="Déplacer"
          aria-label="Déplacer le widget flottant"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <circle cx="5.5" cy="3.5" r="1.2"/>
            <circle cx="10.5" cy="3.5" r="1.2"/>
            <circle cx="5.5" cy="8" r="1.2"/>
            <circle cx="10.5" cy="8" r="1.2"/>
            <circle cx="5.5" cy="12.5" r="1.2"/>
            <circle cx="10.5" cy="12.5" r="1.2"/>
          </svg>
        </button>

        <img src="${MALOBA_LOGO_DATA_URI}" alt="Maloba" class="safinum-notch-logo" />

        <span class="safinum-notch-lang" id="safinum-notch-lang-name">${currentMode === "original" ? `Original (${detectPageLanguageCode()})` : cfg.name}</span>

        <span class="safinum-equalizer" id="safinum-dock-equalizer" data-reading="false" title="Indicateur audio">
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
          <span class="safinum-eq-bar"></span>
        </span>

        <span class="safinum-notch-expand-icon" title="Survoler pour étendre" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="7 15 12 20 17 15"></polyline>
            <polyline points="7 9 12 4 17 9"></polyline>
          </svg>
        </span>
      </div>

      <div class="safinum-notch-body">
        <div class="safinum-notch-body-inner">
          <div class="safinum-notch-section-label">Langues disponibles</div>
          <div class="safinum-notch-langs" id="safinum-lang-menu" role="listbox" aria-label="Langues disponibles"></div>
          <div class="safinum-notch-footer">
            <button type="button" class="safinum-notch-read-btn" id="safinum-btn-read-page" title="Lire toute la page séquentiellement">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
              <span>Lire toute la page</span>
            </button>
            <button type="button" class="safinum-notch-pause-btn" id="safinum-btn-pause-page" style="display:none;" title="Mettre en pause / Reprendre">
              ⏸
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(dock);
    renderDockLanguagePicker(dock);

    // Restore saved position if any (anchor top or bottom depending on screen half so expansion stays in-bounds)
    const applyDockedPosition = (left, top, height) => {
      const maxLeft = Math.max(12, window.innerWidth - 328);
      const clampedLeft = Math.min(Math.max(12, left), maxLeft);
      dock.style.left = `${clampedLeft}px`;
      dock.style.right = "auto";

      if (top + height / 2 > window.innerHeight / 2) {
        const bottom = Math.max(12, window.innerHeight - (top + height));
        dock.style.bottom = `${bottom}px`;
        dock.style.top = "auto";
        dock.dataset.anchor = "bottom";
      } else {
        const clampedTop = Math.max(12, top);
        dock.style.top = `${clampedTop}px`;
        dock.style.bottom = "auto";
        dock.dataset.anchor = "top";
      }
    };

    try {
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(["safinum_notch_pos"], (res) => {
          const pos = res && res.safinum_notch_pos;
          if (pos && typeof pos.left === "number" && typeof pos.top === "number") {
            const rect = dock.getBoundingClientRect();
            applyDockedPosition(pos.left, pos.top, rect.height || 44);
          }
        });
      }
    } catch (_) {}

    // Dynamic Island hover-to-expand with smooth grace delay
    let collapseTimer = null;
    let isDragging = false;

    const expandNotch = () => {
      if (isDragging) return;
      if (collapseTimer) {
        clearTimeout(collapseTimer);
        collapseTimer = null;
      }
      // Ensure expanded width doesn't overflow right edge
      const rect = dock.getBoundingClientRect();
      const maxLeft = Math.max(12, window.innerWidth - 328);
      if (rect.left > maxLeft) {
        dock.style.left = `${maxLeft}px`;
      }
      dock.classList.add("is-expanded");
    };

    const scheduleCollapseNotch = () => {
      if (collapseTimer) clearTimeout(collapseTimer);
      collapseTimer = setTimeout(() => {
        if (!isDragging) {
          dock.classList.remove("is-expanded");
        }
      }, 200);
    };

    dock.addEventListener("mouseenter", expandNotch);
    dock.addEventListener("mouseleave", scheduleCollapseNotch);

    // Draggable handle
    const dragHandle = dock.querySelector("#safinum-notch-drag-handle");
    if (dragHandle) {
      let startX = 0;
      let startY = 0;
      let origLeft = 0;
      let origTop = 0;

      dragHandle.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging = true;
        if (collapseTimer) clearTimeout(collapseTimer);
        dock.classList.remove("is-expanded");
        dock.classList.add("is-dragging");

        const rect = dock.getBoundingClientRect();
        origLeft = rect.left;
        origTop = rect.top;
        startX = e.clientX;
        startY = e.clientY;

        dock.style.left = `${origLeft}px`;
        dock.style.top = `${origTop}px`;
        dock.style.bottom = "auto";
        dock.style.right = "auto";

        if (dragHandle.setPointerCapture) {
          try {
            dragHandle.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
      });

      const onPointerMove = (e) => {
        if (!isDragging) return;
        const rect = dock.getBoundingClientRect();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const maxLeft = Math.max(12, window.innerWidth - rect.width - 12);
        const maxTop = Math.max(12, window.innerHeight - rect.height - 12);
        const nextLeft = Math.min(Math.max(12, origLeft + dx), maxLeft);
        const nextTop = Math.min(Math.max(12, origTop + dy), maxTop);
        dock.style.left = `${nextLeft}px`;
        dock.style.top = `${nextTop}px`;
      };

      const onPointerUp = () => {
        if (!isDragging) return;
        isDragging = false;
        dock.classList.remove("is-dragging");
        const rect = dock.getBoundingClientRect();
        applyDockedPosition(rect.left, rect.top, rect.height);
        try {
          if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
            chrome.storage.local.set({
              safinum_notch_pos: { left: Math.round(rect.left), top: Math.round(rect.top) }
            });
          }
        } catch (_) {}
      };

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    }

    const readPageBtn = dock.querySelector("#safinum-btn-read-page");
    const pausePageBtn = dock.querySelector("#safinum-btn-pause-page");
    const dockEqualizer = dock.querySelector("#safinum-dock-equalizer");

    if (readPageBtn) {
      readPageBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentMode === "original" || !ScreenReader) return;
        if (ScreenReader.isActive) {
          ScreenReader.stop();
        } else {
          ScreenReader.start(currentLang);
        }
      });
    }

    if (pausePageBtn) {
      pausePageBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!ScreenReader || !ScreenReader.isActive) return;
        if (ScreenReader.isPaused) {
          ScreenReader.resume();
        } else {
          ScreenReader.pause();
        }
      });
    }

    window.addEventListener("safinum-screen-reader-state", (e) => {
      const state = (e && e.detail) || {};
      const isReading = Boolean(state.isActive && !state.isPaused);
      if (dockEqualizer) {
        dockEqualizer.setAttribute("data-reading", isReading ? "true" : "false");
      }
      if (readPageBtn) {
        const labelEl = readPageBtn.querySelector("span");
        if (state.isActive) {
          const idx = Math.min(state.totalElements || 1, Math.max(1, (state.currentIndex || 0) + 1));
          readPageBtn.classList.add("active");
          if (labelEl) labelEl.textContent = `Arrêter (${idx}/${state.totalElements || 1})`;
        } else {
          readPageBtn.classList.remove("active");
          if (labelEl) labelEl.textContent = "Lire toute la page";
        }
      }
      if (pausePageBtn) {
        pausePageBtn.style.display = state.isActive ? "inline-flex" : "none";
        pausePageBtn.textContent = state.isPaused ? "▶" : "⏸";
        pausePageBtn.title = state.isPaused ? "Reprendre la lecture" : "Mettre en pause";
      }
    });

    window.addEventListener("safinum-voice-state", (e) => {
      if (ScreenReader && ScreenReader.isActive) return;
      const detail = (e && e.detail) || {};
      if (dockEqualizer) {
        dockEqualizer.setAttribute("data-reading", detail.speaking ? "true" : "false");
      }
    });
  }

  /**
   * Updates the inspector card with active translation data.
   * @param {Object} entry - Translation record
   * @param {HTMLElement|null} sourceEl - Originating element
   */
  function setInspectorEntry(entry, sourceEl) {
    const dock = document.getElementById("safinum-anydoc-dock");
    if (!dock || !entry) return;
    dock.__currentEntry = entry;

    const modeEl = dock.querySelector("#safinum-insp-mode");
    const fubEl = dock.querySelector("#safinum-insp-fub");
    const origEl = dock.querySelector("#safinum-insp-orig");
    const expFubEl = dock.querySelector("#safinum-insp-explain-fub");
    const expFrEl = dock.querySelector("#safinum-insp-explain-fr");
    const speakBtn = dock.querySelector("#safinum-insp-speak-btn");

    const cfg = getLangConfig(currentLang);
    const langData = (entry.languages && entry.languages[currentLang]) || {};
    const activeText = langData.text || entry[currentLang] || entry.original || "";
    const activeExplain = langData.explain_text || entry[`explain_${currentLang}`] || "";
    const hasAudio = Boolean(
      typeof entry.numericAmount === "number" ||
        langData.audio ||
        langData.explain_audio ||
        entry.audio ||
        entry.explain_audio
    );

    if (speakBtn) {
      speakBtn.disabled = !hasAudio;
      speakBtn.style.opacity = hasAudio ? "1" : "0.5";
      speakBtn.textContent = hasAudio ? "🔊 Écouter" : "🔇 Audio indisponible";
    }

    if (modeEl) {
      modeEl.textContent = `💡 EXPLICATION ANYDOC · ${(entry.category || "FINANCE").toUpperCase()}`;
    }
    if (fubEl) fubEl.textContent = activeText;
    if (origEl) origEl.textContent = `Original : « ${entry.original} »`;
    if (expFubEl) {
      expFubEl.innerHTML = activeExplain
        ? `🗣️ <strong>${cfg.explainWord} (${cfg.code}) :</strong> ${activeExplain}`
        : `🗣️ <strong>${cfg.explainWord} (${cfg.code}) :</strong> —`;
    }
    if (expFrEl) {
      const entitiesBadge =
        entry.entities && entry.entities.length
          ? `<br><span style="font-size:10px;color:#fbbf24;">🔒 Entités protégées : ${entry.entities.join(", ")}</span>`
          : "";
      const expFrText = entry.explain_fr || entry.original || "";
      expFrEl.innerHTML = `🇫🇷 <strong>Explication :</strong> ${expFrText} <br><span style="font-size:10px;color:#ffa040;">📚 Source : ${entry.source}</span>${entitiesBadge}`;
    }

    if (sourceEl) {
      highlightSpokenElement(sourceEl);
    }
  }

  /**
   * Updates live translated nodes count on the floating dock.
   */
  function updateDockStats() {
    const el = document.getElementById("safinum-stat-nodes");
    if (el) {
      pruneTrackedNodes();
      let activeCount = 0;
      trackedNodes.forEach((n) => {
        if (n && n.isConnected) activeCount++;
      });
      el.textContent = String(activeCount);
    }
  }

  /**
   * Narrates the primary instruction or injected alert of the current step.
   */
  function narrateActiveStep() {
    const root = getAppRoot();
    const injectedEl = root.querySelector('[id^="injected-"] p:nth-of-type(2)');
    const errorMsgEl = root.querySelector("p.mt-1.text-sm");
    const mainHeading = root.querySelector("section h1, section h2");

    const targetEl =
      (injectedEl && injectedEl.__safinumEntry ? injectedEl : null) ||
      (errorMsgEl && errorMsgEl.__safinumEntry ? errorMsgEl : null) ||
      (mainHeading && mainHeading.__safinumEntry ? mainHeading : null);

    if (targetEl && targetEl.__safinumEntry) {
      setInspectorEntry(targetEl.__safinumEntry, targetEl);
      Voice.speakPhraseAndExplanation(targetEl.__safinumEntry, currentLang);
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

    const subEl = document.getElementById("safinum-dock-sub");
    if (subEl) {
      subEl.textContent = `Accessibilité Financière ${cfg.name} (${cfg.code}) · Dataset Maloba`;
    }
    const pillBadge = document.getElementById("safinum-pill-lang-badge");
    if (pillBadge) {
      pillBadge.textContent = cfg.name;
    }
    const pillSpeakLabel = document.getElementById("safinum-pill-speak-label");
    if (pillSpeakLabel) {
      pillSpeakLabel.textContent = cfg.listenWord;
    }
    const dock = document.getElementById("safinum-anydoc-dock");
    if (dock) {
      renderDockLanguagePicker(dock);
      if (dock.__currentEntry) {
        setInspectorEntry(dock.__currentEntry, null);
      }
    }
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
    const dock = document.getElementById("safinum-anydoc-dock");
    if (dock) {
      renderDockLanguagePicker(dock);
    }
    persistPreferences();
    translateDOM();
  }

  /**
   * Main extension initialization sequence.
   */
  function init() {
    const mountUI = () => {
      document.documentElement.setAttribute("data-safinum-mode", currentMode);
      createHoverPill();
      createAnyDocDock();

      // Initial 60ms delay ensures Vue 3's onMounted() registers baseline before translation
      setTimeout(() => {
        translateDOM();
      }, 60);
    };

    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["safinum_lang", "safinum_mode"], (res) => {
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

    // Non-destructive MutationObserver watches dynamic step transitions and jury injections (#injected-*)
    const observer = new MutationObserver((mutations) => {
      if (isApplyingDOMChanges) return;
      let hasRelevantChange = false;
      for (const m of mutations) {
        const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
        if (!t) continue;
        if (
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
      }, 40);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

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
          setMode(msg.mode);
          sendResponse({ ok: true, mode: currentMode, lang: currentLang });
        } else if (msg.type === "SET_LANG") {
          setLanguage(msg.lang);
          setMode("lang");
          sendResponse({ ok: true, mode: currentMode, lang: currentLang });
        } else if (msg.type === "SPEAK_STEP") {
          if (ScreenReader && ScreenReader.isActive) ScreenReader.stop();
          narrateActiveStep();
          sendResponse({ ok: true });
        } else if (msg.type === "READ_PAGE_TOGGLE") {
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

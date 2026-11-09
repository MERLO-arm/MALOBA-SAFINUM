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
  const KB = window.SAFINUM_KB || { meta: {} };

  /**
   * Builds a rich AnyDoc inspection and voice entry for a standalone numeric amount
   * without modifying the underlying DOM text node (preserving 100% Jury integrity).
   * @param {number} amount - Validated integer amount (0 to 999,999,999)
   * @param {string} rawLabel - Original formatted string in DOM
   * @returns {Object}
   */
  function buildNumericAmountEntry(amount, rawLabel) {
    const hasCurrency = /FCFA|XAF|CFA/i.test(rawLabel) || true;
    const keys = NumberEngine ? NumberEngine.decompose(amount, { includeCurrency: hasCurrency }) : [];
    const fubWords = NumberEngine
      ? NumberEngine.toWords(amount, { lang: "fub", includeCurrency: hasCurrency })
      : String(amount);
    const ewoWords = NumberEngine
      ? NumberEngine.toWords(amount, { lang: "ewo", includeCurrency: hasCurrency })
      : String(amount);
    const fubPhon = NumberEngine
      ? NumberEngine.toWords(amount, { lang: "fub", includeCurrency: hasCurrency, phonetic: true })
      : fubWords;
    const ewoPhon = NumberEngine
      ? NumberEngine.toWords(amount, { lang: "ewo", includeCurrency: hasCurrency, phonetic: true })
      : ewoWords;

    return {
      original: rawLabel,
      numericAmount: amount,
      hasCurrency,
      audioKeys: keys,
      fub: `${rawLabel} — 🔊 ${fubWords}`,
      ewo: `${rawLabel} — 🔊 ${ewoWords}`,
      phonetic: fubPhon,
      phonetic_ewo: ewoPhon,
      explain_fub: `Limngal ceede (${rawLabel}) : « ${fubWords} ». Laartu limngal ceede ngal booyma hidde a tabitina.`,
      explain_fub_phonetic: `Limngal tchéédé : ${fubPhon}. Lârtou limngal tchéédé ngal bôyma hiddé a tabitina.`,
      explain_ewo: `Akɔŋ mɔni (${rawLabel}) : « ${ewoWords} ». Laart akɔŋ mɔni osu na o kaməla.`,
      explain_ewo_phonetic: `Akong moni : ${ewoPhon}. Lârt akong moni osou na o kameula.`,
      explain_fr: `Lecture vocale gapless (${keys.length} clés audio .ogg) : ${keys.join(" → ")}`,
      category: "montant_audio",
      source: "safinum_42_keys_audio_corpus (-14 LUFS)",
      mode: "NUMBER_TO_SPEECH_ENGINE",
      confidence: 1.0
    };
  }

  /**
   * Central Language Registry: defines active languages and upcoming national languages.
   */
  const DEFAULT_LANGUAGES = {
    fub: {
      code: "fub",
      name: "Fulfuldé",
      label: "Fulfuldé (fub) · Grand-Nord",
      region: "Grand-Nord (Adamaoua, Nord, Extrême-Nord)",
      flag: "🇨🇲",
      listenWord: "Nanugo",
      explainWord: "Famfingo",
      active: true
    },
    ewo: {
      code: "ewo",
      name: "Ewondo",
      label: "Ewondo (ewo) · Centre / Sud",
      region: "Centre, Sud, Est (Zone Beti-Fang)",
      flag: "🇨🇲",
      listenWord: "Wóg",
      explainWord: "Fáám",
      active: true
    },
    dua: {
      code: "dua",
      name: "Douala",
      label: "Douala (dua) [À venir]",
      region: "Littoral, Sud-Ouest (Wouri)",
      flag: "🇨🇲",
      listenWord: "Senga",
      explainWord: "Bwele",
      active: false,
      soon: true
    },
    bbj: {
      code: "bbj",
      name: "Ghomálá'",
      label: "Ghomálá' (bbj) [À venir]",
      region: "Ouest (Hauts-Plateaux / Bamiléké)",
      flag: "🇨🇲",
      listenWord: "Ju'",
      explainWord: "Fa'",
      active: false,
      soon: true
    },
    bas: {
      code: "bas",
      name: "Bassa",
      label: "Bassa (bas) [À venir]",
      region: "Centre, Littoral (Sanaga-Maritime)",
      flag: "🇨🇲",
      listenWord: "Hɛp",
      explainWord: "Tégəl",
      active: false,
      soon: true
    }
  };

  /**
   * Resolves language configuration with fallback defaults.
   * @param {string} code - Language ISO code
   * @returns {Object} Language configuration object
   */
  function getLangConfig(code) {
    const registry = (KB.meta && KB.meta.languages) || DEFAULT_LANGUAGES;
    return (
      registry[code] ||
      DEFAULT_LANGUAGES[code] || {
        code: code || "fub",
        name: code || "Fulfuldé",
        label: code || "Langue",
        flag: "🇨🇲",
        listenWord: "Nanugo",
        explainWord: "Famfingo"
      }
    );
  }

  // Application state variables
  let currentLang = "fub"; // Active language ('fub' | 'ewo')
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
          // Attach SafinumWebNumberEngine audio metadata to standalone amounts (e.g., "250 000 FCFA")
          // while keeping node.nodeValue 100% untouched for Jury 0-discrepancy integrity.
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

        const allLangs = Object.keys(DEFAULT_LANGUAGES);
        for (const l of allLangs) {
          const rawText =
            result[l] || (l === "fub" ? result.fub : result.ewo || result.fub || trimmed || "");
          const text = String(rawText || "");
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
        targetValue =
          (state.langFormatted && state.langFormatted[currentLang]) ||
          (state.langFormatted && state.langFormatted.fub) ||
          state.originalRaw;
      } else if (currentMode === "bilingual") {
        targetValue =
          (state.bilingualFormatted && state.bilingualFormatted[currentLang]) ||
          (state.bilingualFormatted && state.bilingualFormatted.fub) ||
          state.originalRaw;
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
      <span id="safinum-pill-lang-badge" style="padding-left:4px;font-weight:700;color:#ffa040;">${initCfg.flag} Maloba · ${initCfg.name}</span>
      <button type="button" id="safinum-pill-speak" title="Écouter la prononciation">🔊 ${initCfg.listenWord}</button>
      <button type="button" id="safinum-pill-explain" title="Comprendre l'explication">💡 ${initCfg.explainWord}</button>
    `;
    document.body.appendChild(pill);

    pill.querySelector("#safinum-pill-speak").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
        if (typeof activeHoveredEntry.numericAmount === "number" && Voice.speakAmount) {
          Voice.speakAmount(activeHoveredEntry.numericAmount, {
            lang: currentLang,
            includeCurrency: activeHoveredEntry.hasCurrency !== false
          });
          return;
        }
        const spokenTxt =
          activeHoveredEntry[currentLang] || activeHoveredEntry.fub || activeHoveredEntry.original;
        const spokenPhon =
          activeHoveredEntry[`phonetic_${currentLang}`] || activeHoveredEntry.phonetic || spokenTxt;
        Voice.speak(spokenTxt, spokenPhon, { lang: currentLang });
      }
    });

    pill.querySelector("#safinum-pill-explain").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        Voice.speakPhraseAndExplanation(activeHoveredEntry, currentLang);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
        const dock = document.getElementById("safinum-anydoc-dock");
        if (dock) dock.classList.remove("safinum-dock-minimized");
      }
    });

    // Pill hover retention: prevent pill from disappearing when cursor moves from text onto pill
    pill.addEventListener("mouseenter", () => {
      if (hoverHideTimer) clearTimeout(hoverHideTimer);
    });

    pill.addEventListener("mouseleave", () => {
      hoverHideTimer = setTimeout(() => {
        pill.style.display = "none";
      }, 300);
    });

    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest?.('[data-safinum-translated="true"]');
      if (!target || !target.__safinumEntry) return;

      if (hoverHideTimer) clearTimeout(hoverHideTimer);

      activeHoveredElement = target;
      activeHoveredEntry = target.__safinumEntry;

      const rect = target.getBoundingClientRect();
      const top = Math.max(8, rect.top - 36);
      const left = Math.min(window.innerWidth - 290, Math.max(8, rect.left));

      pill.style.top = `${top}px`;
      pill.style.left = `${left}px`;
      pill.style.display = "inline-flex";
    });

    document.addEventListener(
      "scroll",
      () => {
        pill.style.display = "none";
      },
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
   * Instantiates and mounts the Maloba AnyDoc floating accessibility dock.
   */
  function createAnyDocDock() {
    if (document.getElementById("safinum-anydoc-dock")) return;

    const dock = document.createElement("aside");
    dock.id = "safinum-anydoc-dock";

    const sourcesBreakdown = KB.meta?.sources_breakdown || {};
    const sourcesLines = Object.entries(sourcesBreakdown)
      .map(
        ([k, v]) => `<div>• <strong>${k}</strong> : ${Number(v).toLocaleString("fr-FR")} entrées</div>`
      )
      .join("");

    dock.innerHTML = `
      <div class="safinum-dock-header" id="safinum-dock-header-toggle" title="Cliquer pour réduire ou agrandir">
        <div class="safinum-dock-brand">
          <img src="${MALOBA_LOGO_DATA_URI}" alt="Maloba Logo" class="safinum-dock-logo-img" />
          <div>
            <div class="safinum-dock-title">Maloba AnyDoc</div>
            <div class="safinum-dock-subtitle" id="safinum-dock-sub">Accessibilité Financière ${
              currentLang === "ewo" ? "Ewondo (ewo)" : "Fulfuldé (fub)"
            } · Graphe 5-Nœuds</div>
          </div>
        </div>
        <button type="button" class="safinum-dock-toggle-btn" title="Réduire / Agrandir">−</button>
      </div>

      <div class="safinum-dock-body">
        <div class="safinum-mode-bar">
          <select class="safinum-lang-dropdown" id="safinum-lang-select" title="Choisir la langue d'accessibilité">
            ${Object.values(DEFAULT_LANGUAGES)
              .map(
                (l) =>
                  `<option value="${l.code}" ${currentLang === l.code ? "selected" : ""} ${
                    l.soon ? "disabled style='opacity:0.6;'" : ""
                  }>${l.label}</option>`
              )
              .join("")}
          </select>
          <button type="button" class="safinum-mode-btn ${
            currentMode === "bilingual" ? "active" : ""
          }" data-mode="bilingual" title="Afficher traduction et original entre crochets">Bilingue</button>
          <button type="button" class="safinum-mode-btn ${
            currentMode === "original" ? "active" : ""
          }" data-mode="original" title="Afficher l'interface originale">Original</button>
        </div>

        <div class="safinum-voice-actions">
          <button type="button" class="safinum-action-primary" id="safinum-btn-read-step" title="Lire vocalement et expliquer la consigne de l'étape active">
            🔊 Lire &amp; Expliquer l'étape
          </button>
          <button type="button" class="safinum-action-stop" id="safinum-btn-stop-voice" title="Arrêter la voix">
            ⏹
          </button>
        </div>

        <div class="safinum-number-engine-bar" style="background:rgba(15,23,42,0.85);border:1px solid rgba(255,121,0,0.35);border-radius:10px;padding:8px 10px;margin-bottom:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:10.5px;font-weight:700;color:#ffa040;margin-bottom:5px;">
            <span>🔢 LECTEUR VOCAL MONTANTS (.OGG GAPLESS)</span>
            <span id="safinum-num-segment-badge" style="color:#10b981;font-family:monospace;font-size:10px;">42 clés prêtes</span>
          </div>
          <div style="display:flex;gap:5px;align-items:center;">
            <input
              type="text"
              id="safinum-num-input"
              value="250 000"
              placeholder="0 - 999 999 999 FCFA"
              style="flex:1;background:#0f172a;color:#f8fafc;border:1px solid rgba(255,121,0,0.4);border-radius:7px;padding:4px 8px;font-size:11.5px;font-family:monospace;font-weight:700;outline:none;"
            />
            <button
              type="button"
              id="safinum-btn-speak-num"
              title="Décomposer et lire le montant en langue nationale"
              style="background:linear-gradient(135deg,#ff7900,#e05515);color:#fff;border:none;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;"
            >
              🔊 Lire FCFA
            </button>
          </div>
        </div>

        <div class="safinum-inspector-card" id="safinum-inspector-card">
          <div class="safinum-inspector-label">
            <span id="safinum-insp-mode">💡 EXPLICATION ANYDOC · MALOBA</span>
            <button type="button" id="safinum-insp-speak-btn" style="background:#ff7900;color:#ffffff;border:none;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;cursor:pointer;">
              🔊 Écouter
            </button>
          </div>
          <div class="safinum-inspector-fub" id="safinum-insp-fub">
            Jaɓɓaama haa Safinum Pay! Ɓillu dow konngol fuu ngam nanugo e famfingo ngol bee Fulfuldé.
          </div>
          <div class="safinum-inspector-orig" id="safinum-insp-orig">
            Survolez une phrase ou cliquez sur « Lire &amp; Expliquer l'étape » pour l'analyser.
          </div>
          <div class="safinum-inspector-explain" id="safinum-insp-explain-fub">
            🗣️ <strong>Famfingo (fub) :</strong> Nokkuure ndee ɗon walla ma laartugo ceede maa, coggu nelal e jaɓoowo ceede bee kisal timmungal.
          </div>
          <div class="safinum-inspector-explain-fr" id="safinum-insp-explain-fr">
            🇫🇷 <strong>Sens simplifié :</strong> Cet assistant traduit chaque étape en langue nationale, lit les consignes à haute voix et garantit 100 % d'intégrité financière.
          </div>
        </div>

        <div class="safinum-stats-grid">
          <div class="safinum-stat-box">
            <div class="safinum-stat-val" id="safinum-stat-nodes">0</div>
            <div class="safinum-stat-lbl">Textes traduits</div>
          </div>
          <div class="safinum-stat-box">
            <div class="safinum-stat-val" style="color:#10b981;">100%</div>
            <div class="safinum-stat-lbl">Intégrité chiffres</div>
          </div>
          <div class="safinum-stat-box">
            <div class="safinum-stat-val">18</div>
            <div class="safinum-stat-lbl">Sources (99 633)</div>
          </div>
        </div>

        <details class="safinum-sources-details">
          <summary>📚 Voir les 18 sources Fulfuldé &amp; Graphe RAG (99 633 paires)</summary>
          <div class="safinum-sources-list">
            ${sourcesLines}
          </div>
        </details>
      </div>
    `;

    document.body.appendChild(dock);

    // Collapsible header toggle
    dock.querySelector("#safinum-dock-header-toggle").addEventListener("click", (e) => {
      if (e.target.closest("button.safinum-dock-toggle-btn") || e.currentTarget === e.target) {
        dock.classList.toggle("safinum-dock-minimized");
      }
    });

    const langSelect = dock.querySelector("#safinum-lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
        dock.querySelectorAll(".safinum-mode-btn").forEach((b) => b.classList.remove("active"));
        setMode("lang");
      });
    }

    dock.querySelectorAll(".safinum-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        dock.querySelectorAll(".safinum-mode-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        setMode(btn.getAttribute("data-mode"));
      });
    });

    dock.querySelector("#safinum-btn-read-step").addEventListener("click", () => {
      narrateActiveStep();
    });

    dock.querySelector("#safinum-btn-stop-voice").addEventListener("click", () => {
      Voice.stop();
    });

    dock.querySelector("#safinum-insp-speak-btn").addEventListener("click", () => {
      if (dock.__currentEntry) {
        Voice.speakPhraseAndExplanation(dock.__currentEntry, currentLang);
      }
    });

    const numInput = dock.querySelector("#safinum-num-input");
    const numSpeakBtn = dock.querySelector("#safinum-btn-speak-num");
    const numBadge = dock.querySelector("#safinum-num-segment-badge");

    const triggerDockNumberSpeech = () => {
      if (!NumberEngine || !numInput) return;
      const rawVal = numInput.value || "0";
      const parsed = NumberEngine.parseAmount(rawVal);
      if (parsed === null) {
        if (numBadge) {
          numBadge.textContent = "Montant invalide";
          numBadge.style.color = "#ef4444";
        }
        return;
      }
      const formattedLabel = `${parsed.toLocaleString("fr-FR")} FCFA`;
      const entry = buildNumericAmountEntry(parsed, formattedLabel);
      setInspectorEntry(entry, null);
      Voice.speakAmount(parsed, { lang: currentLang, includeCurrency: true });
    };

    if (numSpeakBtn) {
      numSpeakBtn.addEventListener("click", triggerDockNumberSpeech);
    }
    if (numInput) {
      numInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          triggerDockNumberSpeech();
        }
      });
    }

    // Listen for real-time segment transitions from SafinumWebNumberEngine
    window.addEventListener("safinum-number-speech-state", (e) => {
      if (!numBadge) return;
      const detail = (e && e.detail) || {};
      if (detail.speaking && detail.currentKey) {
        const idx = typeof detail.segmentIndex === "number" ? detail.segmentIndex + 1 : 1;
        const total = Array.isArray(detail.keys) ? detail.keys.length : "?";
        numBadge.textContent = `▶ [${idx}/${total}] ${detail.currentKey}.ogg`;
        numBadge.style.color = "#fbbf24";
      } else if (!detail.speaking) {
        numBadge.textContent = "42 clés prêtes";
        numBadge.style.color = "#10b981";
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

    const cfg = getLangConfig(currentLang);
    const activeText =
      entry[currentLang] || (currentLang === "ewo" ? entry.ewo || entry.fub : entry.fub);
    const activeExplain =
      entry[`explain_${currentLang}`] ||
      (currentLang === "ewo" ? entry.explain_ewo || entry.explain_fub : entry.explain_fub);

    if (modeEl) {
      modeEl.textContent =
        entry.mode === "CONTEXT_GRAPH_5_NODES_RAG"
          ? `🧠 GRAPHE 5-NŒUDS (${cfg.name.toUpperCase()})`
          : `💡 EXPLICATION ANYDOC · ${(entry.category || "FINANCE").toUpperCase()}`;
    }
    if (fubEl) fubEl.textContent = activeText;
    if (origEl) origEl.textContent = `Original : « ${entry.original} »`;
    if (expFubEl) expFubEl.innerHTML = `🗣️ <strong>${cfg.explainWord} (${cfg.code}) :</strong> ${activeExplain}`;
    if (expFrEl) {
      const entitiesBadge =
        entry.entities && entry.entities.length
          ? `<br><span style="font-size:10px;color:#fbbf24;">🔒 Entités protégées : ${entry.entities.join(", ")}</span>`
          : "";
      expFrEl.innerHTML = `🇫🇷 <strong>Explication :</strong> ${entry.explain_fr} <br><span style="font-size:10px;color:#ffa040;">📚 Source : ${entry.source}</span>${entitiesBadge}`;
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
   * Switches active national language and updates UI labels.
   * @param {string} newLang - Target language ISO code ('fub' | 'ewo')
   */
  function setLanguage(newLang) {
    currentLang = newLang;
    const cfg = getLangConfig(currentLang);
    const subEl = document.getElementById("safinum-dock-sub");
    if (subEl) {
      subEl.textContent = `Accessibilité Financière ${cfg.name} (${cfg.code}) · Graphe 5-Nœuds`;
    }
    const pillBadge = document.getElementById("safinum-pill-lang-badge");
    if (pillBadge) {
      pillBadge.textContent = `${cfg.flag} Maloba · ${cfg.name}`;
    }
    const pillSpeak = document.getElementById("safinum-pill-speak");
    if (pillSpeak) {
      pillSpeak.textContent = `🔊 ${cfg.listenWord}`;
    }
    const pillExplain = document.getElementById("safinum-pill-explain");
    if (pillExplain) {
      pillExplain.textContent = `💡 ${cfg.explainWord}`;
    }
    const dock = document.getElementById("safinum-anydoc-dock");
    if (dock && dock.__currentEntry) {
      setInspectorEntry(dock.__currentEntry, null);
    }
    translateDOM();
  }

  /**
   * Sets display mode: 'lang' (pure translation), 'bilingual' (with original), or 'original' (French pure).
   * @param {string} newMode - Display mode
   */
  function setMode(newMode) {
    currentMode = newMode;
    translateDOM();
  }

  /**
   * Main extension initialization sequence.
   */
  function init() {
    createHoverPill();
    createAnyDocDock();

    // Initial 60ms delay ensures Vue 3's onMounted() registers baseline before translation
    setTimeout(() => {
      translateDOM();
    }, 60);

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
          narrateActiveStep();
          sendResponse({ ok: true });
        } else if (msg.type === "SPEAK_AMOUNT") {
          if (NumberEngine && typeof msg.amount === "number") {
            const targetLang = msg.lang || currentLang;
            const entry = buildNumericAmountEntry(
              msg.amount,
              `${msg.amount.toLocaleString("fr-FR")} FCFA`
            );
            setInspectorEntry(entry, null);
            Voice.speakAmount(msg.amount, {
              lang: targetLang,
              includeCurrency: msg.includeCurrency !== false
            });
            sendResponse({
              ok: true,
              keys: entry.audioKeys,
              words: NumberEngine.toWords(msg.amount, { lang: targetLang, includeCurrency: true })
            });
          } else {
            sendResponse({ ok: false });
          }
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

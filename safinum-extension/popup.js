/**
 * =============================================================================
 * MALOBA ANYDOC — EXTENSION POPUP CONTROLLER
 * =============================================================================
 * Manages user interactions within the Chrome extension action popup:
 *   - Custom language picker with per-language SVG completion rings
 *   - Translation display mode (Language, Bilingual, Original)
 *   - Audio narration trigger for the active step
 *   - Live node translation count display
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const modeBtns = document.querySelectorAll(".mode-btn");
  const statNodes = document.getElementById("stat-nodes");
  const speakBtn = document.getElementById("btn-speak-step");
  const readPageBtn = document.getElementById("btn-read-page");
  const numInput = document.getElementById("popup-num-input");
  const numSpeakBtn = document.getElementById("popup-btn-speak-num");
  const langPicker = document.getElementById("popup-lang-picker");
  const langTrigger = document.getElementById("popup-lang-trigger");
  const langTriggerContent = document.getElementById("popup-lang-trigger-content");
  const langMenu = document.getElementById("popup-lang-menu");

  const KB_META = (window.SAFINUM_KB && window.SAFINUM_KB.meta) || {};
  let currentLang = KB_META.default_language || "eto";
  let cachedMeta = KB_META;

  /**
   * Builds a hollow circular progress ring SVG:
   *   - Full 360deg thin skeleton track
   *   - Thicker progress skin arc proportional to completion percentage
   *   - Centered percentage label (e.g. "100%", "24%")
   * @param {number} percent - Completion percentage (0..100)
   * @param {number} [size=30] - Pixel diameter
   * @returns {string} Inline SVG markup
   */
  function createCompletionRingSVG(percent, size = 30) {
    const pct = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
    const r = 14;
    const circumference = 2 * Math.PI * r;
    const offset = circumference * (1 - pct / 100);
    const strokeColor = pct >= 100 ? "#10b981" : pct > 0 ? "#ff7900" : "#64748b";

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 36 36" class="shrink-0" aria-hidden="true">
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
   * Safely dispatches a message to the active browser tab.
   * @param {Object} message - Payload to send
   * @param {Function} [cb] - Optional callback
   */
  function sendToActiveTab(message, cb) {
    if (typeof chrome === "undefined" || !chrome.tabs) return;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || !tabs[0] || typeof tabs[0].id === "undefined") return;

      chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
        if (chrome.runtime.lastError) {
          console.debug(
            "[Maloba AnyDoc] Active tab not listening:",
            chrome.runtime.lastError.message
          );
          return;
        }
        if (cb && res) cb(res);
      });
    });
  }

  function updateLangLabel(code, meta) {
    const statLang = document.getElementById("stat-lang-active");
    if (!statLang) return;
    const langObj = meta && meta.languages && meta.languages[code];
    statLang.textContent = langObj ? `${langObj.name} (${langObj.code})` : `${code}`;
  }

  function renderLanguagePicker() {
    const languages = (cachedMeta && cachedMeta.languages) || {};
    const activeObj = languages[currentLang] || Object.values(languages)[0];

    if (langTriggerContent && activeObj) {
      const pct = activeObj.completionPercent ?? (activeObj.active ? 100 : 0);
      langTriggerContent.innerHTML = `
        ${createCompletionRingSVG(pct, 24)}
        <span class="truncate">${activeObj.flag || ""} ${activeObj.name} (${activeObj.code})</span>
      `;
    }

    if (!langMenu) return;
    langMenu.innerHTML = Object.values(languages)
      .map((l) => {
        const pct = l.completionPercent ?? (l.active ? 100 : 0);
        const isSelected = l.code === currentLang;
        const isDisabled = Boolean(l.soon || !l.active);
        const countInfo = `${l.recordsCount || 0}/${l.targetRecordsCount || 192}`;
        return `
          <button
            type="button"
            role="option"
            aria-selected="${isSelected}"
            data-lang="${l.code}"
            ${isDisabled ? "disabled" : ""}
            class="w-full flex items-center gap-2.5 p-1.5 rounded-[8px] text-left border transition ${
              isSelected
                ? "bg-maloba-orange/20 border-maloba-orange/60 text-white"
                : isDisabled
                  ? "bg-slate-800/40 border-transparent text-slate-400 opacity-70 cursor-not-allowed"
                  : "bg-slate-800/80 border-transparent text-slate-200 hover:bg-slate-700 cursor-pointer"
            }"
          >
            ${createCompletionRingSVG(pct, 32)}
            <div class="min-w-0 flex-1">
              <div class="text-[11.5px] font-bold truncate">${l.flag || ""} ${l.name} <span class="text-slate-400 font-normal">(${l.code})</span></div>
              <div class="text-[10px] ${l.active ? "text-emerald-400 font-semibold" : "text-slate-400"}">
                ${l.active ? `Complet · ${countInfo} entrées` : `Collecte en cours · ${countInfo}`}
              </div>
            </div>
          </button>
        `;
      })
      .join("");

    langMenu.querySelectorAll("button[data-lang]:not([disabled])").forEach((btn) => {
      btn.addEventListener("click", () => {
        const newLang = btn.getAttribute("data-lang");
        if (!newLang) return;
        currentLang = newLang;
        modeBtns.forEach((b) => b.classList.remove("active"));
        sendToActiveTab({ type: "SET_LANG", lang: newLang });
        updateLangLabel(newLang, cachedMeta);
        renderLanguagePicker();
        closeMenu();
      });
    });
  }

  function openMenu() {
    if (!langMenu || !langTrigger) return;
    langMenu.classList.remove("hidden");
    langTrigger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!langMenu || !langTrigger) return;
    langMenu.classList.add("hidden");
    langTrigger.setAttribute("aria-expanded", "false");
  }

  if (langTrigger) {
    langTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (langMenu && langMenu.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (langPicker && !langPicker.contains(e.target)) {
      closeMenu();
    }
  });

  // Initial render from bundled KB_META (works even on non-Safinum tabs)
  renderLanguagePicker();
  updateLangLabel(currentLang, cachedMeta);
  const datasetInfo = document.getElementById("stat-dataset-info");
  if (datasetInfo && typeof cachedMeta.total_records === "number") {
    datasetInfo.textContent = `${cachedMeta.total_records} entrées · ${cachedMeta.total_audios || 0} audios`;
  }

  // Request live status from active tab
  sendToActiveTab({ type: "GET_STATUS" }, (res) => {
    if (res && res.meta) {
      cachedMeta = res.meta;
      if (datasetInfo && typeof res.meta.total_records === "number") {
        datasetInfo.textContent = `${res.meta.total_records} entrées · ${res.meta.total_audios || 0} audios`;
      }
    }
    if (res && typeof res.translatedNodes !== "undefined" && statNodes) {
      statNodes.textContent = String(res.translatedNodes);
    }
    if (res && res.lang) {
      currentLang = res.lang;
    }
    renderLanguagePicker();
    updateLangLabel(currentLang, cachedMeta);

    if (res && res.mode) {
      modeBtns.forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-mode") === res.mode);
      });
    }
    if (readPageBtn && res && typeof res.screenReaderActive === "boolean") {
      readPageBtn.textContent = res.screenReaderActive ? "⏹ Arrêter lecture" : "🔊 Lire toute la page";
    }
  });

  // Mode button toggle listener
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      sendToActiveTab({ type: "SET_MODE", mode });
    });
  });

  // Full page screen reader toggle
  if (readPageBtn) {
    readPageBtn.addEventListener("click", () => {
      sendToActiveTab({ type: "READ_PAGE_TOGGLE" }, (res) => {
        if (res && typeof res.active === "boolean") {
          readPageBtn.textContent = res.active ? "⏹ Arrêter lecture" : "🔊 Lire toute la page";
        }
      });
    });
  }

  // Voice narration trigger
  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      sendToActiveTab({ type: "SPEAK_STEP" });
    });
  }

  // Number reader trigger
  const triggerPopupNumber = () => {
    if (!numInput) return;
    const raw = (numInput.value || "").trim();
    if (!raw) return;
    sendToActiveTab({ type: "SPEAK_AMOUNT", amount: raw });
  };
  if (numSpeakBtn) {
    numSpeakBtn.addEventListener("click", triggerPopupNumber);
  }
  if (numInput) {
    numInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        triggerPopupNumber();
      }
    });
  }
});

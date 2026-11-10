/**
 * =============================================================================
 * MALOBA ANYDOC — EXTENSION POPUP CONTROLLER
 * =============================================================================
 * Manages user interactions within the Chrome extension action popup:
 *   - Active language switching (Fulfulde fub, Ewondo ewo, etc.)
 *   - Translation display mode (Language, Bilingual, Original)
 *   - Direct Number-to-Speech synthesis (`SafinumWebNumberEngine`)
 *   - Audio narration trigger for the active step
 *   - Live node translation count display
 *
 * Enterprise-grade features:
 *   - Defensive handling of chrome.runtime.lastError
 *   - Real-time segment progress feedback (`onSegmentChange`)
 *   - Graceful status fallback when tab is not on an eligible webpage
 *
 * All code comments and documentation are strictly in English.
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const modeBtns = document.querySelectorAll(".mode-btn");
  const statNodes = document.getElementById("stat-nodes");
  const speakBtn = document.getElementById("btn-speak-step");
  const readPageBtn = document.getElementById("btn-read-page");
  const langSelect = document.getElementById("popup-lang-select");
  const amountInput = document.getElementById("popup-amount-input");
  const speakAmountBtn = document.getElementById("btn-speak-amount");
  const amountWordsEl = document.getElementById("popup-amount-words");
  const numStatusEl = document.getElementById("popup-num-status");
  const numberEngine = window.safinumNumberEngine || null;

  /**
   * Returns currently selected language ISO code.
   * @returns {string}
   */
  function getActiveLang() {
    return (langSelect && langSelect.value) || "fub";
  }

  /**
   * Updates the written transcription preview of the entered amount.
   */
  function refreshAmountPreview() {
    if (!numberEngine || !amountInput || !amountWordsEl) return;
    const parsed = numberEngine.parseAmount(amountInput.value || "0");
    if (parsed === null) {
      amountWordsEl.textContent = "Montant invalide (entier de 0 à 999 999 999 FCFA)";
      return;
    }
    const lang = getActiveLang();
    amountWordsEl.textContent = numberEngine.toWords(parsed, {
      lang,
      includeCurrency: true
    });
  }

  /**
   * Plays the entered amount using `SafinumWebNumberEngine` (gapless .ogg stitcher).
   */
  function speakPopupAmount() {
    if (!numberEngine || !amountInput) return;
    const parsed = numberEngine.parseAmount(amountInput.value || "0");
    if (parsed === null) {
      if (numStatusEl) {
        numStatusEl.textContent = "Erreur montant";
      }
      return;
    }
    const lang = getActiveLang();
    refreshAmountPreview();

    const keys = numberEngine.decompose(parsed, { includeCurrency: true });
    numberEngine.speakAmount(parsed, {
      lang,
      includeCurrency: true,
      onStart: () => {
        if (numStatusEl) {
          numStatusEl.textContent = `▶ Lecture (${keys.length} clés)`;
        }
      },
      onSegmentChange: (key, index) => {
        if (numStatusEl) {
          numStatusEl.textContent = `▶ [${index + 1}/${keys.length}] ${key}.ogg`;
        }
      },
      onEnded: () => {
        if (numStatusEl) {
          numStatusEl.textContent = "42 clés · -14 LUFS";
        }
      }
    });
  }

  /**
   * Safely dispatches a message to the active browser tab.
   * Handles cases where the tab is restricted or content script is not loaded.
   * @param {Object} message - Payload to send
   * @param {Function} [cb] - Optional callback
   */
  function sendToActiveTab(message, cb) {
    if (!chrome || !chrome.tabs) return;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || !tabs[0] || typeof tabs[0].id === "undefined") return;

      chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
        if (chrome.runtime.lastError) {
          // Expected on browser internal pages (e.g. chrome://extensions)
          console.debug(
            "[Maloba AnyDoc] Active tab not listening:",
            chrome.runtime.lastError.message
          );
          return;
        }
        if (cb && res) {
          cb(res);
        }
      });
    });
  }

  // Request initial status from active tab
  sendToActiveTab({ type: "GET_STATUS" }, (res) => {
    if (res && typeof res.translatedNodes !== "undefined" && statNodes) {
      statNodes.textContent = String(res.translatedNodes);
    }
    if (res && res.lang) {
      if (langSelect) langSelect.value = res.lang;
      const statLang = document.getElementById("stat-lang-active");
      if (statLang) {
        statLang.textContent = res.lang === "ewo" ? "Ewondo (ewo)" : "Fulfuldé (fub)";
      }
      refreshAmountPreview();
    }
    if (res && res.mode) {
      modeBtns.forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-mode") === res.mode);
      });
    }
  });

  // Language selector change listener
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      modeBtns.forEach((b) => b.classList.remove("active"));
      sendToActiveTab({ type: "SET_LANG", lang: e.target.value });
      const statLang = document.getElementById("stat-lang-active");
      if (statLang) {
        statLang.textContent = e.target.value === "ewo" ? "Ewondo (ewo)" : "Fulfuldé (fub)";
      }
      refreshAmountPreview();
    });
  }

  // Mode button toggle listener
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      sendToActiveTab({ type: "SET_MODE", mode });
    });
  });

  // Voice narration trigger
  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      sendToActiveTab({ type: "SPEAK_STEP" });
    });
  }

  // Full-page Screen Reader trigger
  if (readPageBtn) {
    readPageBtn.addEventListener("click", () => {
      sendToActiveTab({ type: "READ_FULL_PAGE", lang: getActiveLang() }, (res) => {
        if (res && res.isActive) {
          readPageBtn.textContent = "⏹ Arrêter la page";
        } else {
          readPageBtn.textContent = "🔊 Lire toute la page";
        }
      });
    });
  }

  // Number-to-Speech input and button listeners
  if (amountInput) {
    amountInput.addEventListener("input", refreshAmountPreview);
    amountInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        speakPopupAmount();
      }
    });
  }
  if (speakAmountBtn) {
    speakAmountBtn.addEventListener("click", speakPopupAmount);
  }

  refreshAmountPreview();
});

/**
 * =============================================================================
 * MALOBA ANYDOC — EXTENSION POPUP CONTROLLER
 * =============================================================================
 * Manages user interactions within the Chrome extension action popup:
 *   - Active language switching (Fulfulde fub, Ewondo ewo, etc.)
 *   - Translation display mode (Language, Bilingual, Original)
 *   - Audio narration trigger for the active step
 *   - Live node translation count display
 *
 * Enterprise-grade features:
 *   - Defensive handling of chrome.runtime.lastError
 *   - Graceful status fallback when tab is not on an eligible webpage
 *
 * All code comments and documentation are strictly in English.
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const modeBtns = document.querySelectorAll(".mode-btn");
  const statNodes = document.getElementById("stat-nodes");
  const speakBtn = document.getElementById("btn-speak-step");
  const langSelect = document.getElementById("popup-lang-select");

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
});

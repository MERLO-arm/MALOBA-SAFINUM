document.addEventListener("DOMContentLoaded", () => {
  const modeBtns = document.querySelectorAll(".mode-btn");
  const statNodes = document.getElementById("stat-nodes");
  const speakBtn = document.getElementById("btn-speak-step");
  const langSelect = document.getElementById("popup-lang-select");

  function sendToActiveTab(message, cb) {
    if (!chrome || !chrome.tabs) return;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || !tabs[0]) return;
      chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
        if (cb && res) cb(res);
      });
    });
  }

  sendToActiveTab({ type: "GET_STATUS" }, (res) => {
    if (res && typeof res.translatedNodes !== "undefined") {
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

  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      modeBtns.forEach((b) => b.classList.remove("active"));
      sendToActiveTab({ type: "SET_LANG", lang: e.target.value });
    });
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      sendToActiveTab({ type: "SET_MODE", mode });
    });
  });

  speakBtn.addEventListener("click", () => {
    sendToActiveTab({ type: "SPEAK_STEP" });
  });
});


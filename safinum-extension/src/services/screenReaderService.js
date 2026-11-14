/**
 * =============================================================================
 * MALOBA SAFINUM — FULL PAGE SCREEN READER SERVICE (JS RUNTIME)
 * =============================================================================
 * File: safinum-extension/screenReaderService.js
 * Target: Chrome Extension (Manifest V3) & Node/CommonJS Test Runner
 *
 * Runtime companion to `src/services/screenReaderService.ts`.
 * Provides `ScreenReaderService` and `window.safinumScreenReader` for full-page
 * sequential reading with a single detached traveling neon highlight overlay
 * (`#safinum-screen-reader-overlay`) and zero DOM style mutations on host elements.
 * =============================================================================
 */

(function (root) {
  "use strict";

  const OVERLAY_ID = "safinum-screen-reader-overlay";
  const BADGE_ID = "safinum-screen-reader-badge";

  const TARGET_SELECTOR = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "button",
    "a",
    "label",
    "td",
    "th",
    "[data-amount]",
    "[data-safinum-amount]",
    ".amount",
    ".balance"
  ].join(", ");

  const BLOCK_CHILD_TAGS = new Set([
    "DIV",
    "P",
    "SECTION",
    "ARTICLE",
    "MAIN",
    "ASIDE",
    "HEADER",
    "FOOTER",
    "NAV",
    "UL",
    "OL",
    "LI",
    "TABLE",
    "THEAD",
    "TBODY",
    "TR",
    "TD",
    "TH",
    "FORM",
    "FIELDSET",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6"
  ]);

  const EXCLUDED_ROOT_SELECTORS = [
    "#safinum-voice-root",
    "#safinum-anydoc-dock",
    "#safinum-anydoc-hover-pill",
    "#" + OVERLAY_ID,
    "aside.fixed",
    "button.fixed"
  ].join(", ");

  const MONETARY_AMOUNT_REGEX =
    /^(?:montant|solde|total|frais|balance)?[\s:]*([+-]?\d{1,3}(?:[\s\u00A0\u202F.,]\d{3})+|\d+)\s*(FCFA|XAF|CFA|F\s*CFA|francs?|€|\$|EUR|USD)?$/i;

  const INLINE_AMOUNT_CAPTURE_REGEX =
    /\b(\d{1,3}(?:[\s\u00A0\u202F.]\d{3})+|\d+)\s*(FCFA|XAF|CFA|F\s*CFA|francs?|€|\$)\b/i;

  class ScreenReaderService {
    constructor(options) {
      const opts = options || {};
      this.padding = typeof opts.padding === "number" ? opts.padding : 6;
      this.highlightColor = opts.highlightColor || "#FF9F0A";
      this.scrollBehavior = opts.scrollBehavior || "smooth";
      this.onStateChangeCallback = opts.onStateChange;
      this.onElementFocusCallback = opts.onElementFocus;
      this.customAudioHook = opts.playElementAudio;

      this.overlayEl = null;
      this.badgeEl = null;
      this.elementsQueue = [];
      this.currentIdx = -1;
      this.activeElement = null;
      this.activeLang = "eto";
      this.isRunning = false;
      this.isPausedFlag = false;
      this.abortController = null;
      this.resumeResolver = null;
      this.activeAudioResolver = null;
      this.activeTimerIds = new Set();
      this.rafId = null;

      this.boundViewportUpdate = this.handleViewportChange.bind(this);
      this.boundKeyDown = this.handleKeyDown.bind(this);
    }

    get isActive() {
      return this.isRunning;
    }

    get isPaused() {
      return this.isRunning && this.isPausedFlag;
    }

    get currentIndex() {
      return this.currentIdx;
    }

    get totalElements() {
      return this.elementsQueue.length;
    }

    async start(lang) {
      if (this.isRunning) {
        this.stop();
      }

      this.activeLang = String(lang || "eto")
        .trim()
        .toLowerCase();
      this.elementsQueue = this.scanElements();

      if (this.elementsQueue.length === 0) {
        this.emitState();
        return;
      }

      this.isRunning = true;
      this.isPausedFlag = false;
      this.currentIdx = 0;
      this.abortController = new AbortController();
      const signal = this.abortController.signal;

      this.ensureOverlayExists();
      this.attachLifecycleListeners();
      this.emitState();

      try {
        while (this.isRunning && !signal.aborted && this.currentIdx < this.elementsQueue.length) {
          await this.waitIfPaused(signal);
          if (!this.isRunning || signal.aborted) break;

          const targetEl = this.elementsQueue[this.currentIdx];
          if (!targetEl || !targetEl.isConnected || !this.isElementVisible(targetEl)) {
            this.currentIdx += 1;
            continue;
          }

          const readableText = this.extractElementText(targetEl);
          if (!readableText) {
            this.currentIdx += 1;
            continue;
          }

          this.activeElement = targetEl;
          this.emitState(readableText);
          if (typeof this.onElementFocusCallback === "function") {
            this.onElementFocusCallback(
              targetEl,
              this.currentIdx,
              this.elementsQueue.length,
              readableText
            );
          }

          // 1. Glide detached highlight overlay to the active element
          this.moveHighlightTo(targetEl);

          // 2. Smoothly scroll into view if near or outside viewport edges
          await this.scrollIntoViewIfNeeded(targetEl, signal);
          if (!this.isRunning || signal.aborted) break;

          this.moveHighlightTo(targetEl);

          await this.waitIfPaused(signal);
          if (!this.isRunning || signal.aborted) break;

          // 3. Play audio and wait for completion
          await this.playAudio(readableText, targetEl, this.activeLang);
          if (!this.isRunning || signal.aborted) break;

          await this.waitIfPaused(signal);
          if (!this.isRunning || signal.aborted) break;

          await this.delay(140, signal);
          this.currentIdx += 1;
        }
      } finally {
        if (this.isRunning && !signal.aborted) {
          this.cleanupSession();
        }
      }
    }

    stop() {
      this.isRunning = false;
      this.isPausedFlag = false;

      if (this.abortController) {
        this.abortController.abort();
        this.abortController = null;
      }

      if (this.resumeResolver) {
        const resolve = this.resumeResolver;
        this.resumeResolver = null;
        resolve();
      }

      if (this.activeAudioResolver) {
        const resolve = this.activeAudioResolver;
        this.activeAudioResolver = null;
        resolve();
      }

      this.haltAllAudioEngines();
      this.cleanupSession();
    }

    pause() {
      if (!this.isRunning || this.isPausedFlag) return;
      this.isPausedFlag = true;

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          window.speechSynthesis.pause();
        } catch (_) {}
      }

      if (this.overlayEl) {
        this.overlayEl.style.borderStyle = "dashed";
        this.overlayEl.style.opacity = "0.75";
      }

      this.emitState();
    }

    resume() {
      if (!this.isRunning || !this.isPausedFlag) return;
      this.isPausedFlag = false;

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          window.speechSynthesis.resume();
        } catch (_) {}
      }

      if (this.overlayEl) {
        this.overlayEl.style.borderStyle = "solid";
        this.overlayEl.style.opacity = "1";
      }

      if (this.activeElement) {
        this.moveHighlightTo(this.activeElement);
      }

      if (this.resumeResolver) {
        const resolve = this.resumeResolver;
        this.resumeResolver = null;
        resolve();
      }

      this.emitState();
    }

    async playElementAudio(text, element, lang) {
      if (typeof this.customAudioHook === "function") {
        await this.customAudioHook(text, element, lang);
        return;
      }

      const numberEngine =
        (typeof window !== "undefined" && window.safinumNumberEngine) || null;
      const voiceEngine =
        (typeof window !== "undefined" && window.SafinumVoiceEngine) || null;
      const contextGraph =
        (typeof window !== "undefined" && window.SafinumContextGraph) || null;
      const existingEntry = element && element.__safinumEntry;

      const detectedAmount = this.detectMonetaryAmount(text, element, numberEngine);
      if (detectedAmount !== null) {
        const hasCurrency =
          existingEntry && typeof existingEntry.hasCurrency === "boolean"
            ? existingEntry.hasCurrency
            : /FCFA|XAF|CFA|francs?|€|\$/i.test(text) ||
              (element && element.hasAttribute("data-amount"));

        if (voiceEngine && typeof voiceEngine.speakAmount === "function") {
          await this.playViaVoiceEngineAmount(voiceEngine, detectedAmount, lang, hasCurrency);
          return;
        }

        if (numberEngine) {
          await this.playViaNumberEngine(numberEngine, detectedAmount, lang, hasCurrency);
          return;
        }

        const fallbackDurationMs = Math.min(3500, Math.max(900, text.length * 65));
        await this.delay(
          fallbackDurationMs,
          this.abortController ? this.abortController.signal : undefined
        );
        return;
      }

      const entry =
        existingEntry ||
        (contextGraph && typeof contextGraph.translateAndExplain === "function"
          ? contextGraph.translateAndExplain(text)
          : null);

      const langData = (entry && entry.languages && entry.languages[lang]) || {};
      const audioPath = langData.audio || (entry && entry.audio) || null;
      const displayText = langData.text || (entry && entry[lang]) || (entry && entry.original) || text;

      if (audioPath && voiceEngine && typeof voiceEngine.playAudio === "function") {
        await this.playViaRealWebmAudio(voiceEngine, audioPath, displayText);
        return;
      }

      // Brief focus pause when no .webm audio exists for this element
      const signal = this.abortController ? this.abortController.signal : undefined;
      await this.delay(900, signal);
    }

    async playViaRealWebmAudio(voiceEngine, audioPath, displayText) {
      const signal = this.abortController ? this.abortController.signal : undefined;
      if (signal && signal.aborted) return;

      await new Promise((resolve) => {
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          this.activeAudioResolver = null;
          if (signal) signal.removeEventListener("abort", onAbort);
          resolve();
        };
        const onAbort = () => {
          try {
            voiceEngine.stop();
          } catch (_) {
            // Ignore
          }
          done();
        };

        this.activeAudioResolver = done;
        if (signal) signal.addEventListener("abort", onAbort, { once: true });

        voiceEngine
          .playAudio(audioPath, {
            displayText,
            onEnd: done,
            onError: done
          })
          .then((ok) => {
            if (!ok) done();
          })
          .catch(done);
      });
    }

    scanElements() {
      if (typeof document === "undefined" || !document.body) {
        return [];
      }

      const rawCandidates = Array.from(document.body.querySelectorAll(TARGET_SELECTOR));
      const eligible = [];

      for (let i = 0; i < rawCandidates.length; i += 1) {
        const el = rawCandidates[i];
        if (!this.shouldExcludeElement(el)) {
          eligible.push(el);
        }
      }

      const atomicTags = new Set(["BUTTON", "A", "LABEL", "H1", "H2", "H3", "H4", "H5", "H6"]);
      const filtered = [];

      for (let i = 0; i < eligible.length; i += 1) {
        const candidate = eligible[i];
        const isAtomic =
          atomicTags.has(candidate.tagName) ||
          candidate.hasAttribute("data-amount") ||
          candidate.hasAttribute("data-safinum-amount") ||
          candidate.classList.contains("amount") ||
          candidate.classList.contains("balance");

        if (!isAtomic) {
          const hasEligibleDescendant = eligible.some(
            (other, idx) => idx !== i && candidate.contains(other)
          );
          if (hasEligibleDescendant) {
            continue;
          }
        }

        const hasAcceptedAncestor = filtered.some((accepted) => accepted.contains(candidate));
        if (hasAcceptedAncestor) {
          continue;
        }

        filtered.push(candidate);
      }

      return filtered;
    }

    shouldExcludeElement(el) {
      if (!el || !el.isConnected) return true;
      if (el.id === OVERLAY_ID || el.id === BADGE_ID) return true;
      if (el.closest && el.closest(EXCLUDED_ROOT_SELECTORS)) return true;
      if (typeof ShadowRoot !== "undefined" && el.getRootNode() instanceof ShadowRoot) return true;

      if (el.hasAttribute("hidden") || el.getAttribute("aria-hidden") === "true") {
        return true;
      }

      if (!this.isElementVisible(el)) {
        return true;
      }

      const text = this.extractElementText(el);
      if (!text || text.length < 1) {
        return true;
      }

      if (text.length === 1 && !/[a-zA-Z0-9À-ÿ]/.test(text)) {
        return true;
      }

      if (this.hasBlockChildren(el)) {
        return true;
      }

      return false;
    }

    isElementVisible(el) {
      let current = el;
      while (current && current !== document.body && current !== document.documentElement) {
        if (current.hasAttribute("hidden") || current.getAttribute("aria-hidden") === "true") {
          return false;
        }
        const style = window.getComputedStyle(current);
        if (
          style.display === "none" ||
          style.visibility === "hidden" ||
          style.visibility === "collapse" ||
          Number.parseFloat(style.opacity) === 0
        ) {
          return false;
        }
        current = current.parentElement;
      }

      const rect = el.getBoundingClientRect();
      if (rect.width <= 1 || rect.height <= 1) {
        return false;
      }

      return true;
    }

    hasBlockChildren(el) {
      const children = el.children;
      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];
        if (!child || !child.tagName) continue;
        if (BLOCK_CHILD_TAGS.has(child.tagName)) {
          return true;
        }
        const display = window.getComputedStyle(child).display;
        if (
          display === "block" ||
          display === "flex" ||
          display === "grid" ||
          display === "table"
        ) {
          return true;
        }
      }
      return false;
    }

    extractElementText(el) {
      const dataAmount = el.getAttribute("data-amount");
      const rawText = (el.innerText || el.textContent || dataAmount || "")
        .replace(/\s+/g, " ")
        .trim();
      return rawText;
    }

    moveHighlightTo(el) {
      this.ensureOverlayExists();
      if (!this.overlayEl) return;

      const rect = el.getBoundingClientRect();
      const pad = this.padding;

      const top = Math.max(2, rect.top - pad);
      const left = Math.max(2, rect.left - pad);
      const width = Math.min(window.innerWidth - left - 2, rect.width + pad * 2);
      const height = Math.max(18, rect.height + pad * 2);

      this.overlayEl.style.top = top + "px";
      this.overlayEl.style.left = left + "px";
      this.overlayEl.style.width = width + "px";
      this.overlayEl.style.height = height + "px";
      this.overlayEl.style.opacity = this.isPausedFlag ? "0.75" : "1";
      this.overlayEl.style.transform = "scale(1)";
    }

    async scrollIntoViewIfNeeded(el, signal) {
      const rect = el.getBoundingClientRect();
      const edgeMargin = 80;
      const isNearOrOutsideViewport =
        rect.top < edgeMargin || rect.bottom > window.innerHeight - edgeMargin;

      if (!isNearOrOutsideViewport) {
        return;
      }

      el.scrollIntoView({
        behavior: this.scrollBehavior,
        block: "center",
        inline: "nearest"
      });

      const startTime = performance.now();
      const scrollWaitMs = this.scrollBehavior === "smooth" ? 320 : 40;

      while (performance.now() - startTime < scrollWaitMs) {
        if ((signal && signal.aborted) || !this.isRunning) return;
        this.moveHighlightTo(el);
        await this.delay(32, signal);
      }

      this.moveHighlightTo(el);
    }

    async playAudio(text, el, lang) {
      if (!this.isRunning || (this.abortController && this.abortController.signal.aborted)) {
        return;
      }
      await this.playElementAudio(text, el, lang);
    }

    detectMonetaryAmount(text, el, numberEngine) {
      if (el && el.__safinumEntry && typeof el.__safinumEntry.numericAmount === "number") {
        return el.__safinumEntry.numericAmount;
      }

      const explicitAttr =
        (el && el.getAttribute("data-safinum-amount")) ||
        (el && el.getAttribute("data-amount"));
      if (explicitAttr) {
        if (numberEngine) {
          const parsed = numberEngine.parseAmount(explicitAttr);
          if (parsed !== null) return parsed;
        }
        const cleanDigits = explicitAttr.replace(/[^\d]/g, "");
        if (cleanDigits.length > 0 && cleanDigits.length <= 9) {
          const val = Number.parseInt(cleanDigits, 10);
          if (Number.isSafeInteger(val)) return val;
        }
      }

      const isAmountClass =
        el && (el.classList.contains("amount") || el.classList.contains("balance"));

      if (numberEngine) {
        const directParsed = numberEngine.parseAmount(text);
        if (directParsed !== null) {
          return directParsed;
        }
      }

      const fullMatch = text.match(MONETARY_AMOUNT_REGEX);
      if (fullMatch && fullMatch[1]) {
        const hasCurrencyToken = Boolean(fullMatch[2]) || isAmountClass;
        if (hasCurrencyToken) {
          const digits = fullMatch[1].replace(/[^\d]/g, "");
          if (digits.length > 0 && digits.length <= 9) {
            const parsed = Number.parseInt(digits, 10);
            if (Number.isSafeInteger(parsed) && parsed >= 0 && parsed <= 999999999) {
              return parsed;
            }
          }
        }
      }

      if (isAmountClass) {
        const inlineMatch = text.match(INLINE_AMOUNT_CAPTURE_REGEX);
        if (inlineMatch && inlineMatch[1]) {
          const digits = inlineMatch[1].replace(/[^\d]/g, "");
          if (digits.length > 0 && digits.length <= 9) {
            const parsed = Number.parseInt(digits, 10);
            if (Number.isSafeInteger(parsed) && parsed >= 0 && parsed <= 999999999) {
              return parsed;
            }
          }
        }
      }

      return null;
    }

    playViaVoiceEngineAmount(voiceEngine, amount, lang, includeCurrency) {
      return new Promise((resolve) => {
        if (!this.isRunning || !voiceEngine.speakAmount) {
          resolve();
          return;
        }

        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          if (this.activeAudioResolver === finish) {
            this.activeAudioResolver = null;
          }
          resolve();
        };

        this.activeAudioResolver = finish;

        voiceEngine
          .speakAmount(amount, {
            lang,
            includeCurrency,
            onEnded: finish
          })
          .then(finish)
          .catch(() => finish());
      });
    }

    playViaNumberEngine(numberEngine, amount, lang, includeCurrency) {
      return new Promise((resolve) => {
        if (!this.isRunning) {
          resolve();
          return;
        }

        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          if (this.activeAudioResolver === finish) {
            this.activeAudioResolver = null;
          }
          resolve();
        };

        this.activeAudioResolver = finish;

        numberEngine
          .speakAmount(amount, {
            lang,
            includeCurrency,
            onEnded: finish
          })
          .then(finish)
          .catch(() => finish());
      });
    }

    playViaSafinumVoiceEngine(voiceEngine, displayText, phoneticText, lang) {
      return new Promise((resolve) => {
        if (!this.isRunning) {
          resolve();
          return;
        }

        let settled = false;
        const estimatedMaxMs = Math.min(25000, Math.max(3500, phoneticText.length * 110));
        const safetyTimer = window.setTimeout(() => {
          this.activeTimerIds.delete(safetyTimer);
          finish();
        }, estimatedMaxMs);
        this.activeTimerIds.add(safetyTimer);

        const finish = () => {
          if (settled) return;
          settled = true;
          window.clearTimeout(safetyTimer);
          this.activeTimerIds.delete(safetyTimer);
          if (this.activeAudioResolver === finish) {
            this.activeAudioResolver = null;
          }
          resolve();
        };

        this.activeAudioResolver = finish;

        try {
          voiceEngine.speak(displayText, phoneticText, {
            lang,
            onEnd: finish,
            onEnded: finish,
            onError: () => finish()
          });
        } catch (_) {
          finish();
        }
      });
    }

    playViaWebSpeechSynthesis(text, lang) {
      return new Promise((resolve) => {
        if (
          !this.isRunning ||
          typeof window === "undefined" ||
          !("speechSynthesis" in window) ||
          typeof SpeechSynthesisUtterance === "undefined"
        ) {
          const fallbackMs = Math.min(3000, Math.max(600, text.length * 55));
          this.delay(
            fallbackMs,
            this.abortController ? this.abortController.signal : undefined
          ).then(resolve);
          return;
        }

        let settled = false;
        const estimatedMaxMs = Math.min(25000, Math.max(3500, text.length * 110));
        const safetyTimer = window.setTimeout(() => {
          this.activeTimerIds.delete(safetyTimer);
          finish();
        }, estimatedMaxMs);
        this.activeTimerIds.add(safetyTimer);

        const finish = () => {
          if (settled) return;
          settled = true;
          window.clearTimeout(safetyTimer);
          this.activeTimerIds.delete(safetyTimer);
          if (this.activeAudioResolver === finish) {
            this.activeAudioResolver = null;
          }
          resolve();
        };

        this.activeAudioResolver = finish;

        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang === "fr" ? "fr-FR" : "fr-FR";
          utterance.rate = 0.94;
          utterance.onend = () => finish();
          utterance.onerror = () => finish();
          window.speechSynthesis.speak(utterance);
        } catch (_) {
          finish();
        }
      });
    }

    ensureOverlayExists() {
      if (typeof document === "undefined" || !document.body) return;

      let existing = document.getElementById(OVERLAY_ID);
      if (!existing) {
        existing = document.createElement("div");
        existing.id = OVERLAY_ID;
        existing.setAttribute("aria-hidden", "true");
        existing.setAttribute("role", "presentation");
        document.body.appendChild(existing);
      } else {
        const staleBadge = existing.querySelector("#" + BADGE_ID);
        if (staleBadge) staleBadge.remove();
      }

      this.overlayEl = existing;
      this.badgeEl = null;

      const s = this.overlayEl.style;
      s.position = "fixed";
      s.pointerEvents = "none";
      s.zIndex = "2147483646";
      s.boxSizing = "border-box";
      s.border = "2px solid " + this.highlightColor;
      s.background = "rgba(255, 159, 10, 0.1)";
      s.borderRadius = "8px";
      s.boxShadow =
        "0 0 22px rgba(255, 159, 10, 0.35), inset 0 0 10px rgba(255, 159, 10, 0.14)";
      s.transition = "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)";
      s.display = "block";
      s.opacity = "1";
    }

    hideOverlay() {
      const el =
        this.overlayEl ||
        (typeof document !== "undefined" ? document.getElementById(OVERLAY_ID) : null);

      if (el) {
        el.style.opacity = "0";
        el.style.transform = "scale(0.97)";
        const hideTimer = window.setTimeout(() => {
          this.activeTimerIds.delete(hideTimer);
          if (!this.isRunning && el) {
            el.style.display = "none";
          }
        }, 220);
        this.activeTimerIds.add(hideTimer);
      }
    }

    handleViewportChange() {
      if (!this.isRunning || !this.activeElement || !this.overlayEl) return;
      if (this.rafId !== null) {
        window.cancelAnimationFrame(this.rafId);
      }
      this.rafId = window.requestAnimationFrame(() => {
        this.rafId = null;
        if (!this.isRunning || !this.activeElement || !this.overlayEl) return;
        this.overlayEl.style.transition =
          "width 0.28s cubic-bezier(0.16, 1, 0.3, 1), height 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease";
        this.moveHighlightTo(this.activeElement);
        const restoreTimer = window.setTimeout(() => {
          this.activeTimerIds.delete(restoreTimer);
          if (this.overlayEl) {
            this.overlayEl.style.transition = "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)";
          }
        }, 60);
        this.activeTimerIds.add(restoreTimer);
      });
    }

    handleKeyDown(event) {
      if (!this.isRunning) return;
      if (event.key === "Escape") {
        event.preventDefault();
        this.stop();
      }
    }

    attachLifecycleListeners() {
      if (typeof window === "undefined") return;
      window.addEventListener("scroll", this.boundViewportUpdate, {
        passive: true,
        capture: true
      });
      window.addEventListener("resize", this.boundViewportUpdate, { passive: true });
      window.addEventListener("keydown", this.boundKeyDown, { capture: true });
    }

    detachLifecycleListeners() {
      if (typeof window === "undefined") return;
      window.removeEventListener("scroll", this.boundViewportUpdate, { capture: true });
      window.removeEventListener("resize", this.boundViewportUpdate);
      window.removeEventListener("keydown", this.boundKeyDown, { capture: true });
      if (this.rafId !== null) {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    }

    waitIfPaused(signal) {
      if (!this.isPausedFlag || (signal && signal.aborted) || !this.isRunning) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        const onAbort = () => {
          this.resumeResolver = null;
          resolve();
        };
        if (signal) {
          signal.addEventListener("abort", onAbort, { once: true });
        }
        this.resumeResolver = () => {
          if (signal) {
            signal.removeEventListener("abort", onAbort);
          }
          resolve();
        };
      });
    }

    delay(ms, signal) {
      return new Promise((resolve) => {
        if ((signal && signal.aborted) || !this.isRunning) {
          resolve();
          return;
        }
        const timerId = window.setTimeout(() => {
          this.activeTimerIds.delete(timerId);
          if (signal) {
            signal.removeEventListener("abort", onAbort);
          }
          resolve();
        }, ms);
        this.activeTimerIds.add(timerId);

        const onAbort = () => {
          window.clearTimeout(timerId);
          this.activeTimerIds.delete(timerId);
          resolve();
        };
        if (signal) {
          signal.addEventListener("abort", onAbort, { once: true });
        }
      });
    }

    haltAllAudioEngines() {
      if (typeof window === "undefined") return;
      if (window.SafinumVoiceEngine && typeof window.SafinumVoiceEngine.stop === "function") {
        try {
          window.SafinumVoiceEngine.stop();
        } catch (_) {}
      }
      if (window.safinumNumberEngine && typeof window.safinumNumberEngine.stop === "function") {
        try {
          window.safinumNumberEngine.stop();
        } catch (_) {}
      }
      if ("speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
        } catch (_) {}
      }
    }

    cleanupSession() {
      this.isRunning = false;
      this.isPausedFlag = false;
      this.activeElement = null;
      this.currentIdx = -1;

      this.activeTimerIds.forEach((id) => window.clearTimeout(id));
      this.activeTimerIds.clear();

      this.detachLifecycleListeners();
      this.hideOverlay();
      this.emitState("");
    }

    emitState(currentTextOverride) {
      const state = {
        isActive: this.isRunning,
        isPaused: this.isPausedFlag,
        currentIndex: this.currentIdx,
        totalElements: this.elementsQueue.length,
        currentElement: this.activeElement,
        currentText:
          typeof currentTextOverride === "string"
            ? currentTextOverride
            : this.activeElement
              ? this.extractElementText(this.activeElement)
              : "",
        lang: this.activeLang
      };

      if (typeof this.onStateChangeCallback === "function") {
        this.onStateChangeCallback(state);
      }

      if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
        window.dispatchEvent(
          new CustomEvent("safinum-screen-reader-state", { detail: state })
        );
      }
    }
  }

  const singleton = new ScreenReaderService();

  if (typeof root !== "undefined") {
    root.ScreenReaderService = ScreenReaderService;
    root.safinumScreenReader = singleton;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      ScreenReaderService,
      screenReaderService: singleton
    };
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);


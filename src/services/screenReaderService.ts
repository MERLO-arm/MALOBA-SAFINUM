/**
 * =============================================================================
 * MALOBA SAFINUM — FULL PAGE SCREEN READER SERVICE (MANIFEST V3)
 * =============================================================================
 * File: src/services/screenReaderService.ts
 *
 * Implements a full-page screen reader with an animated, non-intrusive traveling
 * focus ring ("Karaoke / Follow-me" effect) for the Chrome Extension content script.
 *
 * Core Engineering Guarantees:
 *   1. Zero DOM Mutation on Host Elements:
 *      Uses a single detached singleton `<div>` overlay (`position: fixed`,
 *      `pointer-events: none`, `z-index: 2147483646`) that smoothly glides and
 *      morphs across active elements via `getBoundingClientRect()`.
 *   2. Intelligent DOM Scanning & Filtering:
 *      Targets semantic readable elements (`h1-h6`, `p`, leaf `span`, `button`,
 *      `a`, `label`, `td`, `th`, `[data-amount]`, `.amount`, `.balance`) while
 *      filtering out extension roots, hidden nodes, and non-terminal containers.
 *   3. Sequential Audio Synchronization:
 *      Highlight Element -> Smooth Scroll into View -> Play Audio (routing
 *      monetary amounts to `SafinumWebNumberEngine` and text to national
 *      language phonetic dictionary / Web Speech TTS) -> Wait for completion.
 *   4. Viewport & Lifecycle Resilience:
 *      Dynamically tracks `scroll` and `resize` events and supports immediate
 *      pause, resume, or abort (via `Escape` key or widget toggle).
 * =============================================================================
 */

export interface ScreenReaderState {
  readonly isActive: boolean;
  readonly isPaused: boolean;
  readonly currentIndex: number;
  readonly totalElements: number;
  readonly currentElement: HTMLElement | null;
  readonly currentText: string;
  readonly lang: string;
}

export interface ScreenReaderOptions {
  padding?: number;
  highlightColor?: string; // default: '#00E5A3'
  scrollBehavior?: ScrollBehavior; // default: 'smooth'
  onStateChange?: (state: ScreenReaderState) => void;
  onElementFocus?: (element: HTMLElement, index: number, total: number, text: string) => void;
  playElementAudio?: (text: string, element: HTMLElement, lang: string) => Promise<void>;
}

interface SafinumEntryRecord {
  readonly original?: string;
  readonly numericAmount?: number;
  readonly hasCurrency?: boolean;
  readonly fub?: string;
  readonly ewo?: string;
  readonly phonetic?: string;
  readonly phonetic_ewo?: string;
  readonly explain_fub?: string;
  readonly explain_fub_phonetic?: string;
  readonly explain_ewo?: string;
  readonly explain_ewo_phonetic?: string;
  readonly [key: string]: string | number | boolean | readonly string[] | undefined;
}

interface SafinumAugmentedElement extends HTMLElement {
  __safinumEntry?: SafinumEntryRecord;
}

interface SafinumNumberEngineBridge {
  speakAmount(
    amount: number,
    options?: {
      lang?: string;
      includeCurrency?: boolean;
      onStart?: () => void;
      onSegmentChange?: (key: string, index: number) => void;
      onEnded?: () => void;
    }
  ): Promise<void>;
  parseAmount(raw: string | number): number | null;
  toWords(
    amount: number,
    options?: { lang?: string; includeCurrency?: boolean; phonetic?: boolean }
  ): string;
  stop(): void;
}

interface SafinumVoiceEngineBridge {
  speak(
    displayText: string,
    phoneticText: string,
    options?: {
      lang?: string;
      numericAmount?: number;
      includeCurrency?: boolean;
      onStart?: () => void;
      onEnd?: () => void;
      onEnded?: () => void;
      onError?: (err: unknown) => void;
    }
  ): void;
  speakAmount?(
    amount: number,
    options?: {
      lang?: string;
      includeCurrency?: boolean;
      onStart?: () => void;
      onEnded?: () => void;
    }
  ): Promise<void>;
  stop(): void;
}

interface SafinumContextGraphBridge {
  translateAndExplain(text: string): SafinumEntryRecord | null;
}

interface SafinumGlobalWindow extends Window {
  safinumNumberEngine?: SafinumNumberEngineBridge;
  SafinumVoiceEngine?: SafinumVoiceEngineBridge;
  SafinumContextGraph?: SafinumContextGraphBridge;
}

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

const BLOCK_CHILD_TAGS = new Set<string>([
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
  `#${OVERLAY_ID}`,
  "aside.fixed",
  "button.fixed"
].join(", ");

const MONETARY_AMOUNT_REGEX =
  /^(?:montant|solde|total|frais|balance)?[\s:]*([+-]?\d{1,3}(?:[\s\u00A0\u202F.,]\d{3})+|\d+)\s*(FCFA|XAF|CFA|F\s*CFA|francs?|€|\$|EUR|USD)?$/i;

const INLINE_AMOUNT_CAPTURE_REGEX =
  /\b(\d{1,3}(?:[\s\u00A0\u202F.]\d{3})+|\d+)\s*(FCFA|XAF|CFA|F\s*CFA|francs?|€|\$)\b/i;

/**
 * Full-page Screen Reader Service with an animated, non-intrusive traveling
 * neon highlight overlay ("Karaoke / Follow-me" effect).
 */
export class ScreenReaderService {
  private readonly padding: number;
  private readonly highlightColor: string;
  private readonly scrollBehavior: ScrollBehavior;
  private readonly onStateChangeCallback?: (state: ScreenReaderState) => void;
  private readonly onElementFocusCallback?: (
    element: HTMLElement,
    index: number,
    total: number,
    text: string
  ) => void;
  private readonly customAudioHook?: (
    text: string,
    element: HTMLElement,
    lang: string
  ) => Promise<void>;

  private overlayEl: HTMLDivElement | null = null;
  private badgeEl: HTMLDivElement | null = null;
  private elementsQueue: HTMLElement[] = [];
  private currentIdx: number = -1;
  private activeElement: HTMLElement | null = null;
  private activeLang: string = "fub";
  private isRunning: boolean = false;
  private isPausedFlag: boolean = false;
  private abortController: AbortController | null = null;
  private resumeResolver: (() => void) | null = null;
  private activeAudioResolver: (() => void) | null = null;
  private activeTimerIds: Set<number> = new Set<number>();
  private rafId: number | null = null;

  private readonly boundViewportUpdate: () => void;
  private readonly boundKeyDown: (event: KeyboardEvent) => void;

  constructor(options?: ScreenReaderOptions) {
    this.padding = options?.padding ?? 6;
    this.highlightColor = options?.highlightColor ?? "#00E5A3";
    this.scrollBehavior = options?.scrollBehavior ?? "smooth";
    this.onStateChangeCallback = options?.onStateChange;
    this.onElementFocusCallback = options?.onElementFocus;
    this.customAudioHook = options?.playElementAudio;

    this.boundViewportUpdate = this.handleViewportChange.bind(this);
    this.boundKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Returns true when a full-page reading session is currently active (playing or paused).
   */
  public get isActive(): boolean {
    return this.isRunning;
  }

  /**
   * Returns true when the active reading session is currently paused.
   */
  public get isPaused(): boolean {
    return this.isRunning && this.isPausedFlag;
  }

  /**
   * Returns the zero-based index of the currently focused element.
   */
  public get currentIndex(): number {
    return this.currentIdx;
  }

  /**
   * Returns the total number of readable elements in the current scan queue.
   */
  public get totalElements(): number {
    return this.elementsQueue.length;
  }

  /**
   * Starts scanning and sequentially reading the page from the first visible readable element.
   *
   * @param lang - Target language code ('fub', 'ewo', 'fr')
   */
  public async start(lang: string = "fub"): Promise<void> {
    if (this.isRunning) {
      this.stop();
    }

    this.activeLang = (lang || "fub").trim().toLowerCase();
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
      while (
        this.isRunning &&
        !signal.aborted &&
        this.currentIdx < this.elementsQueue.length
      ) {
        // Wait here if paused before starting the element
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
        if (this.onElementFocusCallback) {
          this.onElementFocusCallback(
            targetEl,
            this.currentIdx,
            this.elementsQueue.length,
            readableText
          );
        }

        // 1. Move highlight to target element immediately
        this.moveHighlightTo(targetEl);

        // 2. Smoothly scroll element into view if off-screen or near viewport edges
        await this.scrollIntoViewIfNeeded(targetEl, signal);
        if (!this.isRunning || signal.aborted) break;

        // Refresh overlay coordinates after scroll completes
        this.moveHighlightTo(targetEl);

        // Wait again if user paused during scroll animation
        await this.waitIfPaused(signal);
        if (!this.isRunning || signal.aborted) break;

        // 3. Play element audio and wait for completion
        await this.playAudio(readableText, targetEl, this.activeLang);
        if (!this.isRunning || signal.aborted) break;

        // Wait if paused during audio playback before advancing to the next element
        await this.waitIfPaused(signal);
        if (!this.isRunning || signal.aborted) break;

        // Brief natural cadence pause between elements
        await this.delay(140, signal);
        this.currentIdx += 1;
      }
    } finally {
      if (this.isRunning && !signal.aborted) {
        this.cleanupSession();
      }
    }
  }

  /**
   * Immediately stops the reading session, halts audio playback, and hides the highlight overlay.
   */
  public stop(): void {
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

  /**
   * Pauses the active reading session and suspends speech synthesis if supported.
   */
  public pause(): void {
    if (!this.isRunning || this.isPausedFlag) return;
    this.isPausedFlag = true;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.pause();
      } catch {
        // Ignore browser-specific speechSynthesis pause errors
      }
    }

    if (this.overlayEl) {
      this.overlayEl.style.borderStyle = "dashed";
      this.overlayEl.style.opacity = "0.75";
    }

    this.emitState();
  }

  /**
   * Resumes a paused reading session.
   */
  public resume(): void {
    if (!this.isRunning || !this.isPausedFlag) return;
    this.isPausedFlag = false;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.resume();
      } catch {
        // Ignore browser-specific speechSynthesis resume errors
      }
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

  /**
   * Public abstraction hook for playing an element's audio segment.
   * Compatible with `SafinumWebNumberEngine` (for monetary amounts) and
   * national language dictionary / Web Speech TTS fallback.
   */
  public async playElementAudio(
    text: string,
    element: HTMLElement,
    lang: string
  ): Promise<void> {
    if (this.customAudioHook) {
      await this.customAudioHook(text, element, lang);
      return;
    }

    const win = window as unknown as SafinumGlobalWindow;
    const numberEngine = win.safinumNumberEngine ?? null;
    const voiceEngine = win.SafinumVoiceEngine ?? null;
    const contextGraph = win.SafinumContextGraph ?? null;
    const augmentedEl = element as SafinumAugmentedElement;
    const existingEntry = augmentedEl.__safinumEntry;

    // 1. Detect if element or text represents a monetary amount
    const detectedAmount = this.detectMonetaryAmount(text, element, numberEngine);
    if (detectedAmount !== null) {
      const hasCurrency =
        existingEntry?.hasCurrency ??
        (/FCFA|XAF|CFA|francs?|€|\$/i.test(text) || element.hasAttribute("data-amount"));

      if (voiceEngine && typeof voiceEngine.speakAmount === "function") {
        await this.playViaVoiceEngineAmount(voiceEngine, detectedAmount, lang, hasCurrency);
        return;
      }

      if (numberEngine) {
        await this.playViaNumberEngine(numberEngine, detectedAmount, lang, hasCurrency);
        return;
      }

      // Fallback duration if audio buffer engine is unavailable in test environment
      const fallbackDurationMs = Math.min(3500, Math.max(900, text.length * 65));
      await this.delay(fallbackDurationMs, this.abortController?.signal);
      return;
    }

    // 2. Resolve translated / phonetic entry from element metadata or SafinumContextGraph
    const entry =
      existingEntry ??
      (contextGraph && typeof contextGraph.translateAndExplain === "function"
        ? contextGraph.translateAndExplain(text)
        : null);

    let displayText = text;
    let phoneticText = text;

    if (entry) {
      const langValue = entry[lang];
      const localizedStr =
        typeof langValue === "string" && langValue.trim().length > 0
          ? langValue
          : lang === "eto"
            ? entry.eto ?? entry.ewo ?? entry.fub ?? entry.original ?? text
            : lang === "ewo"
            ? entry.ewo ?? entry.fub ?? entry.original ?? text
            : entry.fub ?? entry.original ?? text;

      const phoneticKey = `phonetic_${lang}`;
      const rawPhonetic = entry[phoneticKey];
      const localizedPhonetic =
        typeof rawPhonetic === "string" && rawPhonetic.trim().length > 0
          ? rawPhonetic
          : lang === "eto"
            ? entry.phonetic_eto ?? localizedStr
            : lang === "ewo"
            ? entry.phonetic_ewo ?? localizedStr
            : entry.phonetic ?? localizedStr;

      displayText = localizedStr;
      phoneticText = localizedPhonetic;
    }

    // 3. Route through SafinumVoiceEngine if present
    if (voiceEngine && typeof voiceEngine.speak === "function") {
      await this.playViaSafinumVoiceEngine(voiceEngine, displayText, phoneticText, lang);
      return;
    }

    // 4. Fallback to standard Web Speech Synthesis API
    await this.playViaWebSpeechSynthesis(phoneticText, lang);
  }

  /**
   * Scans the DOM in sequential document order and returns visible, meaningful leaf text elements.
   */
  private scanElements(): HTMLElement[] {
    if (typeof document === "undefined" || !document.body) {
      return [];
    }

    const rawCandidates = Array.from(
      document.body.querySelectorAll<HTMLElement>(TARGET_SELECTOR)
    );

    const eligible: HTMLElement[] = [];

    for (const el of rawCandidates) {
      if (this.shouldExcludeElement(el)) {
        continue;
      }
      eligible.push(el);
    }

    // Deduplicate ancestor/descendant pairs: if an eligible container contains
    // another eligible element with meaningful text, prefer the more specific child
    // unless the container is an atomic interactive control (button, a, label) or explicit amount.
    const atomicTags = new Set<string>(["BUTTON", "A", "LABEL", "H1", "H2", "H3", "H4", "H5", "H6"]);
    const filtered: HTMLElement[] = [];

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

      // Skip descendants of an already-accepted atomic parent (e.g. a <span> inside a <button>)
      const hasAcceptedAncestor = filtered.some((accepted) => accepted.contains(candidate));
      if (hasAcceptedAncestor) {
        continue;
      }

      filtered.push(candidate);
    }

    return filtered;
  }

  /**
   * Evaluates whether a candidate element should be filtered out of the reading queue.
   */
  private shouldExcludeElement(el: HTMLElement): boolean {
    if (!el || !el.isConnected) return true;

    // 1. Exclude extension's own roots, Shadow DOM host, overlay, and jury controls
    if (el.id === OVERLAY_ID || el.id === BADGE_ID) return true;
    if (el.closest(EXCLUDED_ROOT_SELECTORS)) return true;
    if (el.getRootNode() instanceof ShadowRoot) return true;

    // 2. Exclude hidden or assistive-ignored elements
    if (el.hasAttribute("hidden") || el.getAttribute("aria-hidden") === "true") {
      return true;
    }

    if (!this.isElementVisible(el)) {
      return true;
    }

    // 3. Exclude empty or whitespace-only elements
    const text = this.extractElementText(el);
    if (!text || text.length < 1) {
      return true;
    }

    // Ignore lone decorative punctuation or single non-alphanumeric symbols
    if (text.length === 1 && !/[a-zA-Z0-9À-ÿ]/.test(text)) {
      return true;
    }

    // 4. Exclude non-terminal containers that wrap block-level children
    if (this.hasBlockChildren(el)) {
      return true;
    }

    return false;
  }

  /**
   * Checks whether an element is visually rendered and non-transparent in the layout.
   */
  private isElementVisible(el: HTMLElement): boolean {
    let current: HTMLElement | null = el;
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

  /**
   * Returns true if the element contains block-level child elements, preventing
   * reading a parent container and then repeating its child paragraphs/headings.
   */
  private hasBlockChildren(el: HTMLElement): boolean {
    const children = el.children;
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (!(child instanceof HTMLElement)) continue;
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

  /**
   * Extracts clean, normalized readable text from a target element.
   */
  private extractElementText(el: HTMLElement): string {
    const dataAmount = el.getAttribute("data-amount");
    const rawText = (el.innerText || el.textContent || dataAmount || "").replace(/\s+/g, " ").trim();
    return rawText;
  }

  /**
   * Smoothly positions and morphs the detached singleton highlight overlay over `el`
   * using `getBoundingClientRect()` without mutating any styles on `el`.
   */
  private moveHighlightTo(el: HTMLElement): void {
    this.ensureOverlayExists();
    if (!this.overlayEl) return;

    const rect = el.getBoundingClientRect();
    const pad = this.padding;

    const top = Math.max(2, rect.top - pad);
    const left = Math.max(2, rect.left - pad);
    const width = Math.min(window.innerWidth - left - 2, rect.width + pad * 2);
    const height = Math.max(18, rect.height + pad * 2);

    this.overlayEl.style.top = `${top}px`;
    this.overlayEl.style.left = `${left}px`;
    this.overlayEl.style.width = `${width}px`;
    this.overlayEl.style.height = `${height}px`;
    this.overlayEl.style.opacity = this.isPausedFlag ? "0.75" : "1";
    this.overlayEl.style.transform = "scale(1)";

    if (this.badgeEl) {
      const total = this.elementsQueue.length;
      const current = Math.min(total, Math.max(1, this.currentIdx + 1));
      const langBadge = this.activeLang.toUpperCase();
      this.badgeEl.textContent = `🔊 ${langBadge} · ${current}/${total}`;
      // Position badge at top-right of the highlight ring, flipping below if too close to top edge
      if (top < 28) {
        this.badgeEl.style.top = "auto";
        this.badgeEl.style.bottom = "-22px";
      } else {
        this.badgeEl.style.top = "-22px";
        this.badgeEl.style.bottom = "auto";
      }
    }
  }

  /**
   * Checks if `el` is off-screen or near the viewport edges (`top < 80` or `bottom > innerHeight - 80`)
   * and triggers a smooth scroll to center it before audio begins.
   */
  private async scrollIntoViewIfNeeded(
    el: HTMLElement,
    signal: AbortSignal
  ): Promise<void> {
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

    // Track overlay coordinates during smooth scroll animation (approx 320ms)
    const startTime = performance.now();
    const scrollWaitMs = this.scrollBehavior === "smooth" ? 320 : 40;

    while (performance.now() - startTime < scrollWaitMs) {
      if (signal.aborted || !this.isRunning) return;
      this.moveHighlightTo(el);
      await this.delay(32, signal);
    }

    this.moveHighlightTo(el);
  }

  /**
   * Internal audio playback dispatcher that delegates to `playElementAudio`.
   */
  private async playAudio(
    text: string,
    el: HTMLElement,
    lang: string
  ): Promise<void> {
    if (!this.isRunning || this.abortController?.signal.aborted) {
      return;
    }
    await this.playElementAudio(text, el, lang);
  }

  /**
   * Detects if an element or its text represents a financial amount that should
   * be routed to `SafinumWebNumberEngine`.
   */
  private detectMonetaryAmount(
    text: string,
    el: HTMLElement,
    numberEngine: SafinumNumberEngineBridge | null
  ): number | null {
    const augmented = el as SafinumAugmentedElement;
    if (
      augmented.__safinumEntry &&
      typeof augmented.__safinumEntry.numericAmount === "number"
    ) {
      return augmented.__safinumEntry.numericAmount;
    }

    const explicitAttr =
      el.getAttribute("data-safinum-amount") ?? el.getAttribute("data-amount");
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
      el.classList.contains("amount") || el.classList.contains("balance");

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

  /**
   * Plays a monetary amount through `SafinumVoiceEngine.speakAmount` and resolves on completion.
   */
  private playViaVoiceEngineAmount(
    voiceEngine: SafinumVoiceEngineBridge,
    amount: number,
    lang: string,
    includeCurrency: boolean
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.isRunning || !voiceEngine.speakAmount) {
        resolve();
        return;
      }

      let settled = false;
      const finish = (): void => {
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

  /**
   * Plays a monetary amount directly through `SafinumWebNumberEngine.speakAmount`.
   */
  private playViaNumberEngine(
    numberEngine: SafinumNumberEngineBridge,
    amount: number,
    lang: string,
    includeCurrency: boolean
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.isRunning) {
        resolve();
        return;
      }

      let settled = false;
      const finish = (): void => {
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

  /**
   * Plays text using `SafinumVoiceEngine.speak` and resolves when `onEnd` fires.
   */
  private playViaSafinumVoiceEngine(
    voiceEngine: SafinumVoiceEngineBridge,
    displayText: string,
    phoneticText: string,
    lang: string
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.isRunning) {
        resolve();
        return;
      }

      let settled = false;
      // Safety timeout in case browser speechSynthesis drops the onend event
      const estimatedMaxMs = Math.min(25000, Math.max(3500, phoneticText.length * 110));
      const safetyTimer = window.setTimeout(() => {
        this.activeTimerIds.delete(safetyTimer);
        finish();
      }, estimatedMaxMs);
      this.activeTimerIds.add(safetyTimer);

      const finish = (): void => {
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
      } catch {
        finish();
      }
    });
  }

  /**
   * Fallback player using browser `window.speechSynthesis` waiting for `utterance.onend`.
   */
  private playViaWebSpeechSynthesis(text: string, lang: string): Promise<void> {
    return new Promise<void>((resolve) => {
      if (
        !this.isRunning ||
        typeof window === "undefined" ||
        !("speechSynthesis" in window) ||
        typeof SpeechSynthesisUtterance === "undefined"
      ) {
        const fallbackMs = Math.min(3000, Math.max(600, text.length * 55));
        this.delay(fallbackMs, this.abortController?.signal).then(resolve);
        return;
      }

      let settled = false;
      const estimatedMaxMs = Math.min(25000, Math.max(3500, text.length * 110));
      const safetyTimer = window.setTimeout(() => {
        this.activeTimerIds.delete(safetyTimer);
        finish();
      }, estimatedMaxMs);
      this.activeTimerIds.add(safetyTimer);

      const finish = (): void => {
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
      } catch {
        finish();
      }
    });
  }

  /**
   * Ensures the singleton detached highlight overlay exists in `document.body`.
   */
  private ensureOverlayExists(): void {
    if (typeof document === "undefined" || !document.body) return;

    let existing = document.getElementById(OVERLAY_ID) as HTMLDivElement | null;
    if (!existing) {
      existing = document.createElement("div");
      existing.id = OVERLAY_ID;
      existing.setAttribute("aria-hidden", "true");
      existing.setAttribute("role", "presentation");

      const badge = document.createElement("div");
      badge.id = BADGE_ID;
      badge.style.position = "absolute";
      badge.style.right = "-2px";
      badge.style.top = "-22px";
      badge.style.background = "#0F172A";
      badge.style.color = this.highlightColor;
      badge.style.border = `1.5px solid ${this.highlightColor}`;
      badge.style.borderRadius = "9999px";
      badge.style.padding = "1px 8px";
      badge.style.fontSize = "10px";
      badge.style.fontWeight = "800";
      badge.style.fontFamily =
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      badge.style.letterSpacing = "0.04em";
      badge.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.45)";
      badge.style.pointerEvents = "none";
      badge.style.whiteSpace = "nowrap";

      existing.appendChild(badge);
      document.body.appendChild(existing);
    }

    this.overlayEl = existing;
    this.badgeEl = (existing.querySelector(`#${BADGE_ID}`) as HTMLDivElement | null) ?? null;

    // Apply required non-intrusive neon focus ring styles
    const s = this.overlayEl.style;
    s.position = "fixed";
    s.pointerEvents = "none";
    s.zIndex = "2147483646";
    s.boxSizing = "border-box";
    s.border = `2.5px solid ${this.highlightColor}`;
    s.background = "rgba(0, 229, 163, 0.12)";
    s.borderRadius = "8px";
    s.boxShadow =
      "0 0 25px rgba(0, 229, 163, 0.45), inset 0 0 12px rgba(0, 229, 163, 0.18)";
    s.transition = "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)";
    s.display = "block";
    s.opacity = "1";
  }

  /**
   * Hides the singleton highlight overlay when reading finishes or is cancelled.
   */
  private hideOverlay(): void {
    const el =
      this.overlayEl ??
      (typeof document !== "undefined"
        ? (document.getElementById(OVERLAY_ID) as HTMLDivElement | null)
        : null);

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

  /**
   * Dynamically recalculates highlight coordinates on `window.scroll` and `window.resize`.
   */
  private handleViewportChange(): void {
    if (!this.isRunning || !this.activeElement || !this.overlayEl) return;
    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
    }
    this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null;
      if (!this.isRunning || !this.activeElement || !this.overlayEl) return;
      // Temporarily disable transition during user scroll/resize for zero-lag tracking,
      // then restore smooth transition for element-to-element morphing.
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

  /**
   * Cancels reading immediately when the user presses `Escape`.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (!this.isRunning) return;
    if (event.key === "Escape") {
      event.preventDefault();
      this.stop();
    }
  }

  /**
   * Registers scroll, resize, and keyboard listeners for the active reading session.
   */
  private attachLifecycleListeners(): void {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", this.boundViewportUpdate, { passive: true, capture: true });
    window.addEventListener("resize", this.boundViewportUpdate, { passive: true });
    window.addEventListener("keydown", this.boundKeyDown, { capture: true });
  }

  /**
   * Removes scroll, resize, and keyboard listeners when the session ends.
   */
  private detachLifecycleListeners(): void {
    if (typeof window === "undefined") return;
    window.removeEventListener("scroll", this.boundViewportUpdate, { capture: true });
    window.removeEventListener("resize", this.boundViewportUpdate);
    window.removeEventListener("keydown", this.boundKeyDown, { capture: true });
    if (this.rafId !== null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * Suspends loop execution while `isPausedFlag` is true.
   */
  private waitIfPaused(signal: AbortSignal): Promise<void> {
    if (!this.isPausedFlag || signal.aborted || !this.isRunning) {
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      const onAbort = (): void => {
        this.resumeResolver = null;
        resolve();
      };
      signal.addEventListener("abort", onAbort, { once: true });
      this.resumeResolver = () => {
        signal.removeEventListener("abort", onAbort);
        resolve();
      };
    });
  }

  /**
   * Cancellable delay helper tied to the session's `AbortSignal`.
   */
  private delay(ms: number, signal?: AbortSignal): Promise<void> {
    return new Promise<void>((resolve) => {
      if (signal?.aborted || !this.isRunning) {
        resolve();
        return;
      }
      const timerId = window.setTimeout(() => {
        this.activeTimerIds.delete(timerId);
        signal?.removeEventListener("abort", onAbort);
        resolve();
      }, ms);
      this.activeTimerIds.add(timerId);

      const onAbort = (): void => {
        window.clearTimeout(timerId);
        this.activeTimerIds.delete(timerId);
        resolve();
      };
      signal?.addEventListener("abort", onAbort, { once: true });
    });
  }

  /**
   * Stops all active audio engines (`SafinumVoiceEngine`, `SafinumWebNumberEngine`, `speechSynthesis`).
   */
  private haltAllAudioEngines(): void {
    if (typeof window === "undefined") return;
    const win = window as unknown as SafinumGlobalWindow;

    if (win.SafinumVoiceEngine && typeof win.SafinumVoiceEngine.stop === "function") {
      try {
        win.SafinumVoiceEngine.stop();
      } catch {
        // Ignore stop errors
      }
    }

    if (win.safinumNumberEngine && typeof win.safinumNumberEngine.stop === "function") {
      try {
        win.safinumNumberEngine.stop();
      } catch {
        // Ignore stop errors
      }
    }

    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore speechSynthesis cancel errors
      }
    }
  }

  /**
   * Resets internal state, clears timers, detaches listeners, and hides the overlay.
   */
  private cleanupSession(): void {
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

  /**
   * Dispatches state changes to both the `onStateChange` callback and a global DOM CustomEvent.
   */
  private emitState(currentTextOverride?: string): void {
    const state: ScreenReaderState = {
      isActive: this.isRunning,
      isPaused: this.isPausedFlag,
      currentIndex: this.currentIdx,
      totalElements: this.elementsQueue.length,
      currentElement: this.activeElement,
      currentText:
        currentTextOverride ??
        (this.activeElement ? this.extractElementText(this.activeElement) : ""),
      lang: this.activeLang
    };

    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(state);
    }

    if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
      window.dispatchEvent(
        new CustomEvent<ScreenReaderState>("safinum-screen-reader-state", {
          detail: state
        })
      );
    }
  }
}

export const screenReaderService = new ScreenReaderService();

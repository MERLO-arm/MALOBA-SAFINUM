/**
 * =============================================================================
 * MALOBA SAFINUM — FLOATING VOICE WIDGET & GLASS PANEL (MANIFEST V3)
 * =============================================================================
 * File: src/components/safinumFloatingWidget.ts
 *
 * Floating accessibility widget encapsulated in a Shadow DOM host (`#safinum-voice-root`)
 * featuring:
 *   - Animated equalizer bars on the floating pill (`isReading = true | false`)
 *   - Glassmorphism control panel with language selector (`fub`, `ewo`, `fr`)
 *   - "Lire toute la page" full-page screen reader integration (`ScreenReaderService`)
 *   - Pause / Resume and immediate Stop controls with live progress badge
 * =============================================================================
 */

import {
  ScreenReaderOptions,
  ScreenReaderService,
  ScreenReaderState
} from "../services/screenReaderService";

export interface FloatingWidgetOptions {
  defaultLang?: string;
  screenReaderOptions?: ScreenReaderOptions;
  autoMount?: boolean;
}

interface VoiceStateEventDetail {
  readonly speaking?: boolean;
  readonly text?: string;
  readonly amount?: number;
  readonly lang?: string;
}

const HOST_ID = "safinum-voice-root";

export class SafinumFloatingWidget {
  private readonly screenReader: ScreenReaderService;
  private hostEl: HTMLDivElement | null = null;
  private shadowRootRef: ShadowRoot | null = null;
  private pillBtn: HTMLButtonElement | null = null;
  private panelEl: HTMLDivElement | null = null;
  private readPageBtn: HTMLButtonElement | null = null;
  private pauseResumeBtn: HTMLButtonElement | null = null;
  private stopBtn: HTMLButtonElement | null = null;
  private langSelectEl: HTMLSelectElement | null = null;
  private statusTextEl: HTMLDivElement | null = null;
  private progressBadgeEl: HTMLSpanElement | null = null;
  private equalizerEl: HTMLDivElement | null = null;

  private isReadingState: boolean = false;
  private isPanelOpen: boolean = false;
  private currentLang: string;

  private readonly boundVoiceStateHandler: (event: Event) => void;
  private readonly boundNumberStateHandler: (event: Event) => void;

  constructor(options?: FloatingWidgetOptions) {
    this.currentLang = options?.defaultLang ?? "fub";

    this.screenReader = new ScreenReaderService({
      ...options?.screenReaderOptions,
      onStateChange: (state: ScreenReaderState) => {
        this.handleScreenReaderStateChange(state);
        options?.screenReaderOptions?.onStateChange?.(state);
      },
      onElementFocus: (el: HTMLElement, index: number, total: number, text: string) => {
        this.handleElementFocus(el, index, total, text);
        options?.screenReaderOptions?.onElementFocus?.(el, index, total, text);
      }
    });

    this.boundVoiceStateHandler = this.handleExternalVoiceEvent.bind(this);
    this.boundNumberStateHandler = this.handleExternalVoiceEvent.bind(this);

    if (options?.autoMount !== false && typeof document !== "undefined") {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.mount(), { once: true });
      } else {
        this.mount();
      }
    }
  }

  /**
   * Returns true if audio playback or full-page screen reading is actively playing.
   */
  public get isReading(): boolean {
    return this.isReadingState;
  }

  /**
   * Updates the floating pill's animated equalizer bars state (`isReading = true/false`).
   */
  public set isReading(value: boolean) {
    this.isReadingState = value;
    this.syncEqualizerUI();
  }

  /**
   * Exposes the underlying `ScreenReaderService` instance.
   */
  public get reader(): ScreenReaderService {
    return this.screenReader;
  }

  /**
   * Mounts the `#safinum-voice-root` Shadow DOM widget into `document.body`.
   */
  public mount(): void {
    if (typeof document === "undefined" || !document.body) return;

    const existingHost = document.getElementById(HOST_ID) as HTMLDivElement | null;
    if (existingHost) {
      this.hostEl = existingHost;
      this.shadowRootRef = existingHost.shadowRoot;
      return;
    }

    const host = document.createElement("div");
    host.id = HOST_ID;
    const shadow = host.attachShadow({ mode: "open" });

    this.hostEl = host;
    this.shadowRootRef = shadow;

    shadow.innerHTML = `
      <style>
        :host {
          all: initial;
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 2147483645;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #F8FAFC;
        }

        .safinum-widget-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        /* Glassmorphism Control Panel */
        .safinum-glass-panel {
          width: 310px;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 229, 163, 0.35);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.7), 0 0 25px rgba(0, 229, 163, 0.15);
          display: none;
          flex-direction: column;
          gap: 10px;
          transform-origin: bottom right;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .safinum-glass-panel.open {
          display: flex;
        }

        .safinum-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
          padding-bottom: 8px;
        }

        .safinum-panel-title {
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .safinum-neon-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #00E5A3;
          box-shadow: 0 0 10px #00E5A3;
        }

        .safinum-progress-badge {
          font-size: 10.5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-weight: 700;
          color: #00E5A3;
          background: rgba(0, 229, 163, 0.12);
          border: 1px solid rgba(0, 229, 163, 0.35);
          padding: 2px 7px;
          border-radius: 9999px;
        }

        .safinum-lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .safinum-lang-label {
          font-size: 11px;
          color: #CBD5E1;
          font-weight: 600;
        }

        .safinum-lang-select {
          flex: 1;
          background: rgba(30, 41, 59, 0.95);
          color: #FFFFFF;
          border: 1px solid rgba(255, 121, 0, 0.5);
          border-radius: 8px;
          padding: 5px 8px;
          font-size: 11.5px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
        }

        /* Primary "Lire toute la page" Button */
        .safinum-btn-read-page {
          width: 100%;
          border: 1px solid rgba(0, 229, 163, 0.5);
          background: linear-gradient(135deg, #00E5A3 0%, #059669 100%);
          color: #022C22;
          font-weight: 800;
          font-size: 12.5px;
          padding: 9px 12px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(0, 229, 163, 0.3);
          transition: filter 0.15s ease, transform 0.12s ease, background 0.2s ease;
        }

        .safinum-btn-read-page:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .safinum-btn-read-page.active {
          background: linear-gradient(135deg, #EF4444 0%, #B91C1C 100%);
          border-color: rgba(248, 113, 113, 0.6);
          color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.35);
        }

        .safinum-playback-controls {
          display: none;
          gap: 6px;
        }

        .safinum-playback-controls.visible {
          display: flex;
        }

        .safinum-btn-secondary {
          flex: 1;
          background: rgba(30, 41, 59, 0.9);
          color: #F8FAFC;
          border: 1px solid rgba(148, 163, 184, 0.3);
          border-radius: 8px;
          padding: 6px 10px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, border-color 0.15s ease;
        }

        .safinum-btn-secondary:hover {
          background: rgba(51, 65, 85, 0.95);
          border-color: #00E5A3;
        }

        .safinum-status-preview {
          font-size: 11px;
          color: #94A3B8;
          background: rgba(2, 6, 23, 0.55);
          border: 1px solid rgba(51, 65, 85, 0.7);
          border-radius: 8px;
          padding: 6px 8px;
          line-height: 1.35;
          max-height: 44px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* Floating Pill with Animated Equalizer Bars */
        .safinum-floating-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: #FFFFFF;
          border: 1.5px solid rgba(0, 229, 163, 0.55);
          border-radius: 9999px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(2, 6, 23, 0.65), 0 0 18px rgba(0, 229, 163, 0.25);
          transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .safinum-floating-pill:hover {
          transform: translateY(-1px);
          border-color: #00E5A3;
          box-shadow: 0 12px 28px rgba(2, 6, 23, 0.75), 0 0 24px rgba(0, 229, 163, 0.45);
        }

        .safinum-equalizer {
          display: inline-flex;
          align-items: flex-end;
          gap: 2.5px;
          height: 14px;
          width: 16px;
        }

        .safinum-eq-bar {
          width: 3px;
          height: 4px;
          background: #00E5A3;
          border-radius: 2px;
          transition: height 0.2s ease, background-color 0.2s ease;
        }

        .safinum-equalizer[data-reading="true"] .safinum-eq-bar {
          background: #00E5A3;
          box-shadow: 0 0 6px #00E5A3;
          animation: safinumEqBounce 0.75s ease-in-out infinite alternate;
        }

        .safinum-equalizer[data-reading="true"] .safinum-eq-bar:nth-child(1) {
          animation-delay: 0s;
        }
        .safinum-equalizer[data-reading="true"] .safinum-eq-bar:nth-child(2) {
          animation-delay: 0.18s;
        }
        .safinum-equalizer[data-reading="true"] .safinum-eq-bar:nth-child(3) {
          animation-delay: 0.34s;
        }
        .safinum-equalizer[data-reading="true"] .safinum-eq-bar:nth-child(4) {
          animation-delay: 0.12s;
        }

        @keyframes safinumEqBounce {
          0% {
            height: 3px;
          }
          100% {
            height: 14px;
          }
        }
      </style>

      <div class="safinum-widget-wrapper">
        <div class="safinum-glass-panel" id="safinum-glass-panel">
          <div class="safinum-panel-header">
            <div class="safinum-panel-title">
              <span class="safinum-neon-dot"></span>
              <span>Maloba Screen Reader</span>
            </div>
            <span class="safinum-progress-badge" id="safinum-progress-badge">Prêt</span>
          </div>

          <div class="safinum-lang-row">
            <span class="safinum-lang-label">Langue :</span>
            <select class="safinum-lang-select" id="safinum-widget-lang">
              <option value="fub">🇨🇲 Fulfuldé (fub)</option>
              <option value="ewo">🇨🇲 Ewondo (ewo)</option>
              <option value="eto">🇨🇲 Éton (eto)</option>
              <option value="fr">🇫🇷 Français (fr)</option>
            </select>
          </div>

          <button type="button" class="safinum-btn-read-page" id="safinum-btn-read-page">
            <span>🔊 Lire toute la page</span>
          </button>

          <div class="safinum-playback-controls" id="safinum-playback-controls">
            <button type="button" class="safinum-btn-secondary" id="safinum-btn-pause-resume">
              ⏸ Pause
            </button>
            <button type="button" class="safinum-btn-secondary" id="safinum-btn-stop-page">
              ⏹ Arrêter
            </button>
          </div>

          <div class="safinum-status-preview" id="safinum-status-preview">
            Cliquez sur « Lire toute la page » pour parcourir les éléments avec suivi lumineux.
          </div>
        </div>

        <button type="button" class="safinum-floating-pill" id="safinum-floating-pill" title="Ouvrir le lecteur de page Maloba">
          <div class="safinum-equalizer" id="safinum-equalizer" data-reading="false">
            <span class="safinum-eq-bar"></span>
            <span class="safinum-eq-bar"></span>
            <span class="safinum-eq-bar"></span>
            <span class="safinum-eq-bar"></span>
          </div>
          <span id="safinum-pill-label">Lire toute la page</span>
        </button>
      </div>
    `;

    document.body.appendChild(host);

    this.pillBtn = shadow.getElementById("safinum-floating-pill") as HTMLButtonElement | null;
    this.panelEl = shadow.getElementById("safinum-glass-panel") as HTMLDivElement | null;
    this.readPageBtn = shadow.getElementById("safinum-btn-read-page") as HTMLButtonElement | null;
    this.pauseResumeBtn = shadow.getElementById(
      "safinum-btn-pause-resume"
    ) as HTMLButtonElement | null;
    this.stopBtn = shadow.getElementById("safinum-btn-stop-page") as HTMLButtonElement | null;
    this.langSelectEl = shadow.getElementById("safinum-widget-lang") as HTMLSelectElement | null;
    this.statusTextEl = shadow.getElementById("safinum-status-preview") as HTMLDivElement | null;
    this.progressBadgeEl = shadow.getElementById("safinum-progress-badge") as HTMLSpanElement | null;
    this.equalizerEl = shadow.getElementById("safinum-equalizer") as HTMLDivElement | null;

    if (this.langSelectEl) {
      this.langSelectEl.value = this.currentLang;
      this.langSelectEl.addEventListener("change", () => {
        if (this.langSelectEl) {
          this.currentLang = this.langSelectEl.value;
        }
      });
    }

    if (this.pillBtn) {
      this.pillBtn.addEventListener("click", () => {
        this.isPanelOpen = !this.isPanelOpen;
        if (this.panelEl) {
          this.panelEl.classList.toggle("open", this.isPanelOpen);
        }
      });
    }

    if (this.readPageBtn) {
      this.readPageBtn.addEventListener("click", () => {
        this.toggleFullPageReading();
      });
    }

    if (this.pauseResumeBtn) {
      this.pauseResumeBtn.addEventListener("click", () => {
        if (!this.screenReader.isActive) return;
        if (this.screenReader.isPaused) {
          this.screenReader.resume();
        } else {
          this.screenReader.pause();
        }
      });
    }

    if (this.stopBtn) {
      this.stopBtn.addEventListener("click", () => {
        this.screenReader.stop();
      });
    }

    window.addEventListener("safinum-voice-state", this.boundVoiceStateHandler);
    window.addEventListener("safinum-number-speech-state", this.boundNumberStateHandler);
  }

  /**
   * Starts or stops full-page reading depending on current state.
   */
  public toggleFullPageReading(langOverride?: string): void {
    if (this.screenReader.isActive) {
      this.screenReader.stop();
      return;
    }

    const targetLang = langOverride ?? this.currentLang;
    this.currentLang = targetLang;
    if (this.langSelectEl) {
      this.langSelectEl.value = targetLang;
    }

    void this.screenReader.start(targetLang);
  }

  /**
   * Updates widget controls and equalizer bar state when `ScreenReaderService` transitions.
   */
  private handleScreenReaderStateChange(state: ScreenReaderState): void {
    const activelySpeaking = state.isActive && !state.isPaused;
    this.isReading = activelySpeaking;

    const controlsEl = this.shadowRootRef?.getElementById("safinum-playback-controls");
    if (controlsEl) {
      controlsEl.classList.toggle("visible", state.isActive);
    }

    if (this.readPageBtn) {
      if (state.isActive) {
        this.readPageBtn.classList.add("active");
        this.readPageBtn.innerHTML = "<span>⏹ Arrêter la lecture de la page</span>";
      } else {
        this.readPageBtn.classList.remove("active");
        this.readPageBtn.innerHTML = "<span>🔊 Lire toute la page</span>";
      }
    }

    if (this.pauseResumeBtn) {
      this.pauseResumeBtn.textContent = state.isPaused ? "▶ Reprendre" : "⏸ Pause";
    }

    if (this.progressBadgeEl) {
      if (!state.isActive) {
        this.progressBadgeEl.textContent = "Prêt";
      } else {
        const idx = Math.min(state.totalElements, Math.max(1, state.currentIndex + 1));
        this.progressBadgeEl.textContent = state.isPaused
          ? `⏸ ${idx}/${state.totalElements}`
          : `▶ ${idx}/${state.totalElements}`;
      }
    }

    if (!state.isActive && this.statusTextEl) {
      this.statusTextEl.textContent =
        "Cliquez sur « Lire toute la page » pour parcourir les éléments avec suivi lumineux.";
    }
  }

  /**
   * Updates the active text preview when the traveling highlight moves to a new element.
   */
  private handleElementFocus(
    _el: HTMLElement,
    index: number,
    total: number,
    text: string
  ): void {
    if (this.statusTextEl) {
      this.statusTextEl.textContent = `[${index + 1}/${total}] ${text}`;
    }
  }

  /**
   * Synchronizes equalizer animation with standalone voice or number playback events.
   */
  private handleExternalVoiceEvent(event: Event): void {
    if (this.screenReader.isActive) return;
    const customEvt = event as CustomEvent<VoiceStateEventDetail>;
    const speaking = Boolean(customEvt.detail?.speaking);
    this.isReading = speaking;
  }

  /**
   * Updates the DOM attributes for the animated equalizer bars on the floating pill.
   */
  private syncEqualizerUI(): void {
    if (this.equalizerEl) {
      this.equalizerEl.setAttribute("data-reading", this.isReadingState ? "true" : "false");
    }
    const dockEq = document.getElementById("safinum-dock-equalizer");
    if (dockEq) {
      dockEq.setAttribute("data-reading", this.isReadingState ? "true" : "false");
    }
  }
}

export const safinumFloatingWidget = new SafinumFloatingWidget();

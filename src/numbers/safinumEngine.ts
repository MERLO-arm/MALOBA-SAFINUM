/**
 * =============================================================================
 * SAFINUM WEB NUMBER ENGINE — MAIN FACADE & PUBLIC API
 * =============================================================================
 * File: safinumEngine.ts
 * Target: Chrome Extension (Manifest V3)
 *
 * High-level facade coordinating `numberDecomposer.ts` and `audioStitcherPlayer.ts`
 * to provide gapless Number-to-Speech synthesis for financial amounts from
 * 0 up to 999,999,999 FCFA across Cameroonian national languages (Fulfulde `fub`,
 * Ewondo `ewo`, and French `fr`).
 *
 * Public API:
 *   - `speakAmount(amount: number, options?: SpeakAmountOptions): Promise<void>`
 *   - `stop(): void`
 *   - `isPlaying: boolean` (getter)
 *   - `decompose(amount: number, options?: DecomposeOptions): AudioKey[]`
 *   - `toWords(amount: number, options?: SpeakAmountOptions & { phonetic?: boolean }): string`
 *   - `parseAmount(raw: string | number): number | null`
 *   - `preload(lang?: string): Promise<void>`
 *
 * All comments and documentation are strictly in English.
 * =============================================================================
 */

import {
  ALL_AUDIO_KEYS,
  AudioKey,
  DecomposeOptions,
  decomposeNumber,
  formatKeysToText,
  parseNumericAmount,
  validateAmount
} from "./numberDecomposer";
import {
  AudioStitcherCallbacks,
  AudioStitcherOptions,
  AudioStitcherPlayer
} from "./audioStitcherPlayer";

/**
 * Options accepted by `SafinumWebNumberEngine.speakAmount`.
 */
export interface SpeakAmountOptions {
  /** Target language ISO code (defaults to 'fub'). */
  readonly lang?: string;
  /** Whether to append 'currency_cfa' at the end of the spoken amount (defaults to true). */
  readonly includeCurrency?: boolean;
  /** Optional lifecycle callbacks for this specific playback. */
  readonly onStart?: () => void;
  readonly onSegmentChange?: (key: string, index: number) => void;
  readonly onEnded?: () => void;
}

const EXACT_ETON_RECORDINGS: Readonly<Record<number, string>> = Object.freeze({
  2000: "eton/saf_num_028_take1_8c391d57.webm",
  2500: "eton/saf_num_008_take1_e3f95f93.webm",
  5000: "eton/saf_num_010_take1_bce4cdc0.webm",
  7500: "eton/saf_num_006_take1_cbda9317.webm",
  10000: "eton/saf_num_029_take1_58473ec1.webm",
  12500: "eton/saf_num_003_take1_701fc666.webm",
  15000: "eton/saf_num_002_take1_e39d0bd7.webm",
  20000: "eton/saf_num_030_take1_6633d352.webm",
  50000: "eton/saf_num_005_take3_0be66162.webm",
  100000: "eton/saf_num_031_take1_0ed75cce.webm",
  180000: "eton/saf_num_004_take1_8ad0c5a2.webm",
  250000: "eton/saf_num_001_take1_f4c3ff7e.webm",
  500000: "eton/saf_num_032_take1_5d35a666.webm",
  1000000: "eton/saf_num_033_take1_b103abb4.webm"
});

/**
 * Production-ready Number-to-Speech Engine (`SafinumWebNumberEngine`).
 */
export class SafinumWebNumberEngine {
  private readonly player: AudioStitcherPlayer;
  private defaultLang: string;

  constructor(options?: AudioStitcherOptions & { defaultLang?: string }) {
    this.defaultLang = options?.defaultLang ?? "fub";
    this.player = new AudioStitcherPlayer({
      ...options,
      callbacks: {
        onStart: () => {
          this.dispatchStateEvent({ speaking: true });
          options?.callbacks?.onStart?.();
        },
        onSegmentChange: (key: string, index: number) => {
          this.dispatchStateEvent({ speaking: true, currentKey: key, segmentIndex: index });
          options?.callbacks?.onSegmentChange?.(key, index);
        },
        onEnded: () => {
          this.dispatchStateEvent({ speaking: false });
          options?.callbacks?.onEnded?.();
        },
        onError: (error: Error, key?: string) => {
          this.dispatchStateEvent({ speaking: false, error: error.message, failedKey: key });
          options?.callbacks?.onError?.(error, key);
        }
      }
    });
  }

  /**
   * Returns true if the engine is currently playing a number audio sequence.
   */
  public get isPlaying(): boolean {
    return this.player.isPlaying;
  }

  /**
   * Returns the number of decoded AudioBuffers currently cached in memory.
   */
  public get cachedBufferCount(): number {
    return this.player.cachedBufferCount;
  }

  /**
   * Decomposes an integer amount (0 to 999,999,999) into its ordered audio keys
   * and plays them gaplessly in the target language.
   *
   * @param amount - Integer amount in [0, 999,999,999]
   * @param options - Language, currency inclusion, and event callbacks
   */
  public async speakAmount(amount: number, options?: SpeakAmountOptions): Promise<void> {
    const validAmount = validateAmount(amount);
    const lang = (options?.lang ?? this.defaultLang).trim().toLowerCase();
    const includeCurrency = options?.includeCurrency ?? true;

    const exactEtonRecording = lang === "eto" ? EXACT_ETON_RECORDINGS[validAmount] : undefined;
    const audioKeys: string[] = exactEtonRecording
      ? [exactEtonRecording]
      : decomposeNumber(validAmount, { includeCurrency });

    const callbacks: AudioStitcherCallbacks = {
      onStart: () => {
        this.dispatchStateEvent({
          speaking: true,
          amount: validAmount,
          lang,
          keys: audioKeys
        });
        options?.onStart?.();
      },
      onSegmentChange: (key: string, index: number) => {
        this.dispatchStateEvent({
          speaking: true,
          amount: validAmount,
          lang,
          currentKey: key,
          segmentIndex: index,
          keys: audioKeys
        });
        options?.onSegmentChange?.(key, index);
      },
      onEnded: () => {
        this.dispatchStateEvent({
          speaking: false,
          amount: validAmount,
          lang
        });
        options?.onEnded?.();
      }
    };

    await this.player.playSequence(audioKeys, lang, callbacks);
  }

  /**
   * Immediately halts any active number audio playback.
   */
  public stop(): void {
    this.player.stop();
    this.dispatchStateEvent({ speaking: false });
  }

  /**
   * Exposes the pure decomposition algorithm returning the ordered array of audio keys.
   *
   * @param amount - Integer amount in [0, 999,999,999]
   * @param options - Decomposition options
   * @returns Ordered AudioKey array
   */
  public decompose(amount: number, options?: DecomposeOptions): AudioKey[] {
    return decomposeNumber(amount, options);
  }

  /**
   * Converts a numeric amount into its written or phonetic representation in the target language.
   *
   * @param amount - Integer amount in [0, 999,999,999]
   * @param options - Language, currency inclusion, and phonetic flag
   * @returns Human-readable or phonetic string
   */
  public toWords(
    amount: number,
    options?: { lang?: string; includeCurrency?: boolean; phonetic?: boolean }
  ): string {
    const keys = decomposeNumber(amount, {
      includeCurrency: options?.includeCurrency ?? true
    });
    return formatKeysToText(keys, options?.lang ?? this.defaultLang, options?.phonetic ?? false);
  }

  /**
   * Parses a formatted currency string (e.g., "250 000 FCFA") into a validated integer.
   *
   * @param rawInput - Formatted string or number
   * @returns Parsed integer or null if invalid
   */
  public parseAmount(rawInput: string | number): number | null {
    return parseNumericAmount(rawInput);
  }

  /**
   * Preloads the 42 canonical audio files for a given language into the in-memory AudioBuffer cache.
   *
   * @param lang - Language ISO code (defaults to 'fub')
   */
  public async preload(lang?: string): Promise<void> {
    const targetLang = (lang ?? this.defaultLang).trim().toLowerCase();
    await this.player.preloadKeys(targetLang, ALL_AUDIO_KEYS);
  }

  /**
   * Dispatches a browser CustomEvent for UI synchronization (dock, hover pill, highlights).
   */
  private dispatchStateEvent(detail: Record<string, unknown>): void {
    if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
      window.dispatchEvent(new CustomEvent("safinum-number-speech-state", { detail }));
    }
  }
}

/**
 * Default singleton instance of `SafinumWebNumberEngine`.
 */
export const safinumNumberEngine = new SafinumWebNumberEngine();


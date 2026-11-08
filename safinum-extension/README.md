# Maloba AnyDoc — Multilingual Financial Accessibility Extension (`fub` & `ewo`)

**SAFINUM Innovate Challenge 2026** — Multimodal digital financial accessibility browser extension adhering to the official **Maloba** Design System:
- **Supported National Languages**: **Fulfulde of Cameroon (`fub` — Adamawa / Grand-Nord)** and **Ewondo (`ewo` — Yaounde / Center / South / East)**, with an extensible N-language architecture ready for Douala (`dua`), Ghomala (`bbj`), and Bassa (`bas`).
- **Official Brand Assets**: Embedded vector SVG and PNG icons (16, 32, 48, 128 px).
- **Official Color Palette**: Maloba Orange (`#FF7900` / `#ED7009`), Terracotta Warm (`#E05515`), Bronze Amber (`#7B3F0C`), Golden Amber (`#FFA040`), and Verified Emerald (`#10B981`).
- **Core Capabilities**: Direct multilingual dropdown selection, in-place non-destructive DOM translation, 5-Node Semantic Context Graph RAG (18 Fulfulde sources + Apertium Ewondo), synchronized sentence-by-sentence voice synthesis (*Nanugo* / *Wog*), and pedagogical explanations (*Famfingo* / *Faam*).

---

## 1. Minimal Evaluation Functional Coverage

1. **Account and Balance Comprehension**:
   * **Fulfulde (`fub`)**: `Solde` $\rightarrow$ `Ceede gonɗe` / `Ceede leydi`
   * **Ewondo (`ewo`)**: `Solde` $\rightarrow$ `Mɔni a liè` / `Mɔni a nzi kôb`
   * In-place translation of dashboard, account status, and transaction history with voice and text explainers.
2. **Transaction Fee Explanation**:
   * **Fulfulde (`fub`)**: `Frais` $\rightarrow$ `Coggu nelal`
   * **Ewondo (`ewo`)**: `Frais` $\rightarrow$ `Mímvèñ mi ntómban`
   * Pedagogical breakdown of tariff rules (Safinum account transfer: free, Mobile Money: 1.5%, other banks: 2%) distinguishing sent amount, fee, and total debited.
3. **Beneficiary Verification**:
   * **Fulfulde (`fub`)**: `Bénéficiaire` $\rightarrow$ `Jaɓoowo ceede`
   * **Ewondo (`ewo`)**: `Bénéficiaire` $\rightarrow$ `Nnyɔ a nɔŋ mɔni`
   * Visual and audio verification of recipient name, phone number, and security warnings (`SECURITY_001` / `SECURITY_002`).
4. **Summary and Transaction Confirmation**:
   * **Fulfulde (`fub`)**: `Taƴre laartugo fuu` & `Tabitingol`
   * **Ewondo (`ewo`)**: `Ntílán mebə̀lə̀ mé mɔni` & `Fíndí / Kaməla`
   * Exact translation of review and final receipt screens with strict preservation of numbers, phone numbers, and references (`SAF-2026-...`), ensuring **100% Data Integrity (0 discrepancies)**.
5. **Runtime Error and Dynamic Jury Input Interception**:
   * Out-of-the-box handling of all 7 official error codes (`AMOUNT_001` to `CONFIRM_001`) and arbitrary jury-injected messages (`#injected-{id}`) using the 5-Node Context Graph.

---

## 2. 5-Node Multilingual Semantic Context Graph (`context_graph.js`)

1. **Node 1 — `EntityPreservationEngine` (Freezer)**:
   * Detects and freezes monetary values (`FCFA`, `%`), phone numbers (`+237...`), account identifiers (`CM 001...`), references (`SAF-2026-...`), and proper names into immutable tokens `__ENT_n__`.
2. **Node 2 — `IntentClassifier` (Banking Context Analysis)**:
   * Categorizes transactions into financial intents (`SECURITY_FRAUD`, `BALANCE_AND_LIMITS`, `FEES_AND_CHARGES`, `BENEFICIARY_IDENTITY`, `TECHNICAL_INCIDENT`, `VALIDATION_AND_RECEIPT`) and risk levels (`CRITICAL`, `WARNING`, `INFO`).
3. **Node 3 — `LexicalRAG` (Multi-Source Translation)**:
   * Evaluates exact UI matches, dynamic regex templates, phrase chunks, morphological lexicons, and parallel RAG exemplars.
4. **Node 4 — `PedagogicalExplainer` (Contextual Simplification)**:
   * Generates actionable explanations in Fulfulde, Ewondo, French, or English according to detected intent and parameters.
5. **Node 5 — `FinancialIntegrityGuard` (Unfreezer)**:
   * Safely restores each `__ENT_n__` token using replacer callbacks to avoid regex substitution bugs, ensuring 100% integrity.

---

## 3. Extensible N-Language Architecture (`content.js` & `voice_engine.js`)

Supported language registry (`DEFAULT_LANGUAGES`):
- **Active Languages**:
  * `fub`: Fulfulde of Cameroon (`🇨🇲`, Listen: *Nanugo*, Explain: *Famfingo*)
  * `ewo`: Ewondo (`🇨🇲`, Listen: *Wog*, Explain: *Faam*)
- **Roadmap Ready**:
  * `dua`: Douala (`🇨🇲`, Listen: *Senga*, Explain: *Bwele*)
  * `bbj`: Ghomala (`🇨🇲`, Listen: *Ju'*, Explain: *Fa'*)
  * `bas`: Bassa (`🇨🇲`, Listen: *Hɛp*, Explain: *Tégəl*)

Adding a new language takes 3 steps:
1. Register language metadata in `DEFAULT_LANGUAGES`.
2. Add translation pairs in `knowledge_base.js`.
3. Add phonetic pronunciation mappings in `voice_engine.js` / `context_graph.js`.

---

## 4. Installation & Verification

1. Open Google Chrome, Brave, or Microsoft Edge and navigate to:
   ```
   chrome://extensions/
   ```
2. Enable **Developer mode** in the upper right corner.
3. Click **Load unpacked** and select the `safinum-extension/` directory.
4. Navigate to the test platform:
   **[https://safinum.cm/hackathon-test?jury=1](https://safinum.cm/hackathon-test?jury=1)**.

---

## 5. UI Styling with Tailwind CSS v4

The popup interface (`popup.html`) is built using **Tailwind CSS v4** (`@tailwindcss/cli`):
- Source CSS: `safinum-extension/popup.input.css` (custom design tokens via `@theme`)
- Generated CSS: `safinum-extension/popup.css`
- Rebuild command:
  ```bash
  npm run build:css
  ```
- Watch mode during development:
  ```bash
  npm run watch:css
  ```

#!/usr/bin/env node
/**
 * =============================================================================
 * MALOBA ANYDOC — PRODUCTION VERIFICATION & INTEGRITY TEST SUITE
 * =============================================================================
 * Verifies:
 *   1. Valid Manifest V3 & web_accessible_resources audio globbing
 *   2. Zero PII / zero admin test leakage in knowledge_base.js
 *   3. 100% file existence & non-zero size for every referenced .webm audio
 *   4. Runtime lookup (FR exact, EN exact, normalized, dynamic, numbers, sacred)
 *   5. Audio playback engine URL resolution & graceful missing-audio handling
 * =============================================================================
 */

"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const EXT_DIR = path.join(ROOT, "safinum-extension");

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  PASS  ${name}`);
  } catch (err) {
    console.error(`  FAIL  ${name}`);
    console.error("       ", err.message);
    process.exitCode = 1;
  }
}

console.log("Running Maloba AnyDoc production verification suite...\n");

// 1. Manifest & file checks
test("manifest.json is valid MV3 and exposes assets/audio/eton/*.webm", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(EXT_DIR, "manifest.json"), "utf8"));
  assert.strictEqual(manifest.manifest_version, 3);
  const war = manifest.web_accessible_resources || [];
  const hasAudioGlob = war.some(
    (entry) => Array.isArray(entry.resources) && entry.resources.includes("assets/audio/eton/*.webm")
  );
  assert.ok(hasAudioGlob, "web_accessible_resources must include assets/audio/eton/*.webm");
  const hasOggGlob = war.some(
    (entry) => Array.isArray(entry.resources) && entry.resources.includes("assets/audio/eto/*.ogg")
  );
  assert.ok(hasOggGlob, "web_accessible_resources must include assets/audio/eto/*.ogg");
});

// 2. Load KB, ContextGraph, and VoiceEngine in a clean VM context
const kbSource = fs.readFileSync(path.join(EXT_DIR, "knowledge_base.js"), "utf8");
const graphSource = fs.readFileSync(path.join(EXT_DIR, "context_graph.js"), "utf8");
const voiceSource = fs.readFileSync(path.join(EXT_DIR, "voice_engine.js"), "utf8");

const sandboxWindow = {
  addEventListener() {},
  dispatchEvent() {}
};
const context = vm.createContext({
  window: sandboxWindow,
  console,
  CustomEvent: class CustomEvent {
    constructor(type, init) {
      this.type = type;
      this.detail = init && init.detail;
    }
  },
  chrome: {
    runtime: {
      getURL: (p) => `chrome-extension://test-id/${p}`
    }
  },
  Audio: class MockAudio {
    constructor(src) {
      this.src = src;
      this.playbackRate = 1.0;
      this.currentTime = 0;
    }
    play() {
      return Promise.resolve();
    }
    pause() {}
  },
  setTimeout,
  clearTimeout
});

vm.runInContext(kbSource, context);
vm.runInContext(graphSource, context);
vm.runInContext(voiceSource, context);

const KB = sandboxWindow.SAFINUM_KB;
const Graph = sandboxWindow.SafinumContextGraph;
const Voice = sandboxWindow.SafinumVoiceEngine;

test("knowledge_base.js contains no PII or admin test strings", () => {
  assert.ok(!kbSource.includes("Muriel Menye"), "PII translator name leaked");
  assert.ok(!kbSource.includes("670721781"), "PII translator phone leaked");
  assert.ok(!kbSource.includes("tes1234567890-"), "Admin test translation leaked");
  assert.strictEqual(KB.meta.default_language, "eto");
  assert.deepStrictEqual(Array.from(KB.meta.supported_languages), ["eto"]);
  assert.strictEqual(KB.meta.languages.eto.completionPercent, 100);
  assert.ok(KB.meta.languages.bbj.completionPercent > 0 && KB.meta.languages.bbj.completionPercent < 100);
});

test("All audio paths referenced in KB exist on disk and are non-empty .webm files", () => {
  const checked = new Set();
  const checkPath = (rel) => {
    if (!rel || checked.has(rel)) return;
    checked.add(rel);
    const full = path.join(EXT_DIR, "assets", "audio", rel);
    assert.ok(fs.existsSync(full), `Missing audio file: ${full}`);
    const stat = fs.statSync(full);
    assert.ok(stat.size > 1000, `Audio file suspiciously small (${stat.size}B): ${full}`);
  };

  for (const entry of Object.values(KB.exact_ui || {})) {
    if (entry.eto) {
      checkPath(entry.eto.audio);
      checkPath(entry.eto.explain_audio);
    }
  }
  for (const entry of Object.values(KB.numbers || {})) {
    if (entry.eto) checkPath(entry.eto.audio);
  }
  for (const entry of Object.values(KB.commands || {})) {
    if (entry.eto) checkPath(entry.eto.audio);
  }
  assert.ok(checked.size >= 190, `Expected >=190 verified audio files, got ${checked.size}`);
});

test("Exact French UI lookup resolves Eton text, audio, and paired SAF_EXP explanation", () => {
  const res = Graph.translateAndExplain("Solde");
  assert.ok(res, "Expected match for 'Solde'");
  assert.strictEqual(res.code, "SAF_UI_005");
  assert.strictEqual(res.explain_code, "SAF_EXP_005");
  assert.ok(res.eto.length > 0);
  assert.ok(res.audio && res.audio.endsWith(".webm"));
  assert.ok(res.explain_eto.length > 0);
  assert.ok(res.explain_audio && res.explain_audio.endsWith(".webm"));
});

test("Exact English UI lookup resolves the same Eton entry", () => {
  const res = Graph.translateAndExplain("Balance");
  assert.ok(res, "Expected match for 'Balance'");
  assert.strictEqual(res.code, "SAF_UI_005");
  assert.ok(res.audio && res.audio.endsWith(".webm"));
});

test("Normalized lookup handles casing and trailing punctuation", () => {
  const res = Graph.translateAndExplain("  solde : ");
  assert.ok(res, "Expected normalized match for '  solde : '");
  assert.strictEqual(res.code, "SAF_UI_005");
});

test("Dynamic greeting pattern preserves user name with real Eton audio", () => {
  const res = Graph.translateAndExplain("Bonjour, Amina Ngo Bell");
  assert.ok(res, "Expected dynamic match for 'Bonjour, Amina Ngo Bell'");
  assert.strictEqual(res.mode, "DYNAMIC_DATASET");
  assert.ok(res.eto.includes("Amina Ngo Bell"), "Must preserve user name");
  assert.ok(res.audio && res.audio.endsWith(".webm"));
});

test("Sacred financial tokens are never translated (100% integrity)", () => {
  const sacred = [
    "15 000 FCFA",
    "+237 670 00 00 00",
    "SAF-2026-0042",
    "CM21 10002 00010 12345678901 89",
    "PIN",
    "OTP"
  ];
  for (const s of sacred) {
    assert.strictEqual(Graph.translateAndExplain(s), null, `Sacred token altered: ${s}`);
  }
});

test("Uncatalogued arbitrary text returns null (zero hallucination)", () => {
  assert.strictEqual(Graph.translateAndExplain("Ceci est une phrase inconnue hors dataset."), null);
});

test("SafinumVoiceEngine resolves chrome-extension URLs and handles stop() cleanly", () => {
  const url = Voice.resolveAudioUrl("eton/saf_ui_005_take1_test.webm");
  assert.strictEqual(url, "chrome-extension://test-id/assets/audio/eton/saf_ui_005_take1_test.webm");
  Voice.stop();
  assert.strictEqual(Voice.isSpeaking, false);
});

test("Number reader engine (numberDecomposer + safinumEngine) and Eton .ogg assets are intact", () => {
  const decomposer = require(path.join(EXT_DIR, "numberDecomposer.js"));
  const { SafinumWebNumberEngine } = require(path.join(EXT_DIR, "safinumEngine.js"));
  const engine = new SafinumWebNumberEngine({ defaultLang: "eto" });

  assert.strictEqual(engine.parseAmount("250 000 FCFA"), 250000);
  const keys = engine.decompose(250000, { includeCurrency: true });
  assert.ok(keys.includes("scale_thousand") && keys.includes("currency_cfa"));

  for (const key of decomposer.ALL_AUDIO_KEYS) {
    const oggPath = path.join(EXT_DIR, "assets", "audio", "eto", `${key}.ogg`);
    assert.ok(fs.existsSync(oggPath), `Missing Eton number audio: ${oggPath}`);
  }
});

test("ScreenReaderService loads cleanly and defaults to Eton (eto)", () => {
  const srSource = fs.readFileSync(path.join(EXT_DIR, "screenReaderService.js"), "utf8");
  vm.runInContext(srSource, context);
  const SRClass = sandboxWindow.ScreenReaderService || context.ScreenReaderService;
  assert.ok(SRClass, "ScreenReaderService must register on global/window");
  const sr = new SRClass();
  assert.strictEqual(sr.activeLang, "eto");
  assert.strictEqual(sr.isActive, false);
});

test("Muriel Menye authentic human .webm audios are mapped for 250 000 FCFA, 15 000 FCFA and digits 1-9", () => {
  const humanAmounts = sandboxWindow.SafinumHumanAmounts && sandboxWindow.SafinumHumanAmounts.eto;
  assert.ok(humanAmounts, "SafinumHumanAmounts.eto must be registered on window");

  // 250 000 FCFA (SAF_NUM_001)
  assert.ok(humanAmounts[250000], "250 000 must have human audio entry");
  assert.strictEqual(humanAmounts[250000].code, "SAF_NUM_001");
  const path250k = path.join(EXT_DIR, "assets", "audio", humanAmounts[250000].audio);
  assert.ok(fs.existsSync(path250k), `Audio file ${path250k} must exist on disk`);

  // 15 000 FCFA (SAF_NUM_002)
  assert.ok(humanAmounts[15000], "15 000 must have human audio entry");
  assert.strictEqual(humanAmounts[15000].code, "SAF_NUM_002");
  const path15k = path.join(EXT_DIR, "assets", "audio", humanAmounts[15000].audio);
  assert.ok(fs.existsSync(path15k), `Audio file ${path15k} must exist on disk`);

  // Digits 1 to 9 (SAF_NUM_017 to SAF_NUM_025)
  for (let digit = 1; digit <= 9; digit++) {
    assert.ok(humanAmounts[digit], `Digit ${digit} must have human audio entry`);
    const pathDigit = path.join(EXT_DIR, "assets", "audio", humanAmounts[digit].audio);
    assert.ok(fs.existsSync(pathDigit), `Audio file for digit ${digit} (${pathDigit}) must exist on disk`);
  }
});

test("Maloba Finance right-docked vertical toolbar and Interactive Voice Assistant are fully wired", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(EXT_DIR, "manifest.json"), "utf8"));
  assert.strictEqual(manifest.name, "Maloba Finance", "manifest.json name must be 'Maloba Finance'");

  const contentCode = fs.readFileSync(path.join(EXT_DIR, "content.js"), "utf8");
  assert.ok(contentCode.includes("createMalobaFinanceDock"), "content.js must contain createMalobaFinanceDock");
  assert.ok(contentCode.includes("safinum-finance-dock"), "content.js must contain safinum-finance-dock");
  assert.ok(contentCode.includes("safinum-finance-reopen-tab"), "content.js must contain safinum-finance-reopen-tab");
  assert.ok(contentCode.includes("SAFINUM_STEPS"), "content.js must contain SAFINUM_STEPS");
  assert.ok(contentCode.includes("SAFINUM_ERRORS"), "content.js must contain SAFINUM_ERRORS");

  // Extract all assets/audio/eton/*.webm paths mentioned in content.js and verify they exist
  const audioMatches = contentCode.match(/assets\/audio\/eton\/[a-zA-Z0-9_]+\.webm/g) || [];
  assert.ok(audioMatches.length >= 10, "content.js must reference assistant audios");
  for (const relPath of audioMatches) {
    const fullAudioPath = path.join(EXT_DIR, relPath);
    assert.ok(fs.existsSync(fullAudioPath), `Audio referenced in content.js must exist: ${relPath}`);
  }
});

console.log(`\nSummary: ${passed} tests passed.`);

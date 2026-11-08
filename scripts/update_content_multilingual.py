# -*- coding: utf-8 -*-
"""
Met à jour `safinum-extension/content.js` pour une architecture multilingue N-langues :
- Registre central DEFAULT_LANGUAGES (Fulfuldé fub, Ewondo ewo, Douala dua, Ghomálá' bbj, Bassa bas)
- Sélection dynamique dans le menu déroulant
- Traduction DOM universelle via langFormatted / langTrimmed
- Intégration vocale et affichage AnyDoc dynamique
"""
import re
from pathlib import Path

path = Path(r"D:\lang\data\safinum-extension\content.js")
text = path.read_text(encoding="utf-8")

# 1. Remplacement de l'en-tête et déclaration de la configuration des langues
decl_target = """  const Graph = window.SafinumContextGraph;
  const Voice = window.SafinumVoiceEngine;
  const KB = window.SAFINUM_KB || { meta: {} };

  let currentLang = "fub"; // "fub" | "ewo"
  let currentMode = "lang"; // "lang" | "bilingual" | "original" """

decl_replacement = """  const Graph = window.SafinumContextGraph;
  const Voice = window.SafinumVoiceEngine;
  const KB = window.SAFINUM_KB || { meta: {} };

  const DEFAULT_LANGUAGES = {
    fub: {
      code: "fub",
      name: "Fulfuldé",
      label: "Fulfuldé (fub) · Grand-Nord",
      region: "Grand-Nord (Adamaoua, Nord, Extrême-Nord)",
      flag: "🇨🇲",
      listenWord: "Nanugo",
      explainWord: "Famfingo",
      active: true
    },
    ewo: {
      code: "ewo",
      name: "Ewondo",
      label: "Ewondo (ewo) · Centre / Sud",
      region: "Centre, Sud, Est (Zone Beti-Fang)",
      flag: "🇨🇲",
      listenWord: "Wóg",
      explainWord: "Fáám",
      active: true
    },
    dua: {
      code: "dua",
      name: "Douala",
      label: "Douala (dua) [À venir]",
      region: "Littoral, Sud-Ouest (Wouri)",
      flag: "🇨🇲",
      listenWord: "Senga",
      explainWord: "Bwele",
      active: false,
      soon: true
    },
    bbj: {
      code: "bbj",
      name: "Ghomálá'",
      label: "Ghomálá' (bbj) [À venir]",
      region: "Ouest (Hauts-Plateaux / Bamiléké)",
      flag: "🇨🇲",
      listenWord: "Ju'",
      explainWord: "Fa'",
      active: false,
      soon: true
    },
    bas: {
      code: "bas",
      name: "Bassa",
      label: "Bassa (bas) [À venir]",
      region: "Centre, Littoral (Sanaga-Maritime)",
      flag: "🇨🇲",
      listenWord: "Hɛp",
      explainWord: "Tégəl",
      active: false,
      soon: true
    }
  };

  function getLangConfig(code) {
    const list = (KB.meta && KB.meta.languages) || DEFAULT_LANGUAGES;
    return list[code] || DEFAULT_LANGUAGES[code] || {
      code: code || "fub",
      name: code || "Fulfuldé",
      label: code || "Langue",
      flag: "🇨🇲",
      listenWord: "Nanugo",
      explainWord: "Famfingo"
    };
  }

  let currentLang = "fub";
  let currentMode = "lang"; // "lang" | "bilingual" | "original" """

if decl_target in text:
    text = text.replace(decl_target, decl_replacement, 1)

# 2. Remplacement de applyTranslationToNode pour gérer N-langues
old_apply_target = """    let state = nodeStateMap.get(node);

    if (state) {
      const matchesOurOutput =
        trimmed === state.fubTrimmed ||
        trimmed === state.ewoTrimmed ||
        trimmed === state.bilingualFubTrimmed ||
        trimmed === state.bilingualEwoTrimmed ||
        trimmed === state.originalTrimmed;

      if (!matchesOurOutput) {
        state = null;
      }
    }

    if (!state) {
      if (Graph.isSacredOnly(trimmed)) return;
      const result = Graph.translateAndExplain(trimmed);
      if (!result || !result.fub) return;

      const leadingSpace = (rawVal.match(/^\\s*/) || [""])[0];
      const trailingSpace = (rawVal.match(/\\s*$/) || [""])[0];

      const fubText = result.fub || "";
      const ewoText = result.ewo || fubText;

      state = {
        originalRaw: rawVal,
        originalTrimmed: trimmed,
        fubFormatted: `${leadingSpace}${fubText}${trailingSpace}`,
        fubTrimmed: fubText.replace(/\\s+/g, " ").trim(),
        ewoFormatted: `${leadingSpace}${ewoText}${trailingSpace}`,
        ewoTrimmed: ewoText.replace(/\\s+/g, " ").trim(),
        bilingualFubFormatted: `${leadingSpace}${fubText} [${trimmed}]${trailingSpace}`,
        bilingualFubTrimmed: `${fubText} [${trimmed}]`.replace(/\\s+/g, " ").trim(),
        bilingualEwoFormatted: `${leadingSpace}${ewoText} [${trimmed}]${trailingSpace}`,
        bilingualEwoTrimmed: `${ewoText} [${trimmed}]`.replace(/\\s+/g, " ").trim(),
        entry: result
      };
      nodeStateMap.set(node, state);
      trackedNodes.add(node);
    }

    let targetValue = state.originalRaw;
    if (currentMode === "lang") {
      targetValue = currentLang === "ewo" ? state.ewoFormatted : state.fubFormatted;
    } else if (currentMode === "bilingual") {
      targetValue = currentLang === "ewo" ? state.bilingualEwoFormatted : state.bilingualFubFormatted;
    } else {
      targetValue = state.originalRaw;
    }"""

new_apply_replacement = """    let state = nodeStateMap.get(node);

    if (state) {
      const matchesOurOutput =
        trimmed === state.originalTrimmed ||
        (state.langTrimmed && Object.values(state.langTrimmed).includes(trimmed)) ||
        (state.bilingualTrimmed && Object.values(state.bilingualTrimmed).includes(trimmed));

      if (!matchesOurOutput) {
        state = null;
      }
    }

    if (!state) {
      if (Graph.isSacredOnly(trimmed)) return;
      const result = Graph.translateAndExplain(trimmed);
      if (!result) return;

      const leadingSpace = (rawVal.match(/^\\s*/) || [""])[0];
      const trailingSpace = (rawVal.match(/\\s*$/) || [""])[0];

      const langFormatted = {};
      const langTrimmed = {};
      const bilingualFormatted = {};
      const bilingualTrimmed = {};

      const allLangs = Object.keys(DEFAULT_LANGUAGES);
      for (const l of allLangs) {
        const text = result[l] || (l === "fub" ? result.fub : (result.ewo || result.fub || ""));
        langFormatted[l] = `${leadingSpace}${text}${trailingSpace}`;
        langTrimmed[l] = text.replace(/\\s+/g, " ").trim();
        bilingualFormatted[l] = `${leadingSpace}${text} [${trimmed}]${trailingSpace}`;
        bilingualTrimmed[l] = `${text} [${trimmed}]`.replace(/\\s+/g, " ").trim();
      }

      state = {
        originalRaw: rawVal,
        originalTrimmed: trimmed,
        langFormatted,
        langTrimmed,
        bilingualFormatted,
        bilingualTrimmed,
        entry: result
      };
      nodeStateMap.set(node, state);
      trackedNodes.add(node);
    }

    let targetValue = state.originalRaw;
    if (currentMode === "lang") {
      targetValue = (state.langFormatted && state.langFormatted[currentLang]) || (state.langFormatted && state.langFormatted.fub) || state.originalRaw;
    } else if (currentMode === "bilingual") {
      targetValue = (state.bilingualFormatted && state.bilingualFormatted[currentLang]) || (state.bilingualFormatted && state.bilingualFormatted.fub) || state.originalRaw;
    } else {
      targetValue = state.originalRaw;
    }"""

if old_apply_target in text:
    text = text.replace(old_apply_target, new_apply_replacement, 1)

# 3. Remplacement de la bulle de survol pour utiliser la config dynamique
hover_target = """    pill = document.createElement("div");
    pill.id = "safinum-anydoc-hover-pill";
    pill.innerHTML = `
      <span id="safinum-pill-lang-badge" style="padding-left:4px;font-weight:700;color:#ffa040;">🇨🇲 Maloba · ${currentLang === "ewo" ? "Ewondo" : "Fulfuldé"}</span>
      <button type="button" id="safinum-pill-speak">${currentLang === "ewo" ? "🔊 Wóg" : "🔊 Nanugo"}</button>
      <button type="button" id="safinum-pill-explain">${currentLang === "ewo" ? "💡 Fáám" : "💡 Famfingo"}</button>
    `;"""

hover_replacement = """    const initCfg = getLangConfig(currentLang);
    pill = document.createElement("div");
    pill.id = "safinum-anydoc-hover-pill";
    pill.innerHTML = `
      <span id="safinum-pill-lang-badge" style="padding-left:4px;font-weight:700;color:#ffa040;">${initCfg.flag} Maloba · ${initCfg.name}</span>
      <button type="button" id="safinum-pill-speak">🔊 ${initCfg.listenWord}</button>
      <button type="button" id="safinum-pill-explain">💡 ${initCfg.explainWord}</button>
    `;"""

if hover_target in text:
    text = text.replace(hover_target, hover_replacement, 1)

# 4. Remplacement du clic d'écoute sur la bulle
speak_pill_target = """        if (currentLang === "ewo") {
          const txt = activeHoveredEntry.ewo || activeHoveredEntry.fub;
          const phon = activeHoveredEntry.phonetic_ewo || activeHoveredEntry.phonetic;
          Voice.speak(txt, phon);
        } else {
          Voice.speak(activeHoveredEntry.fub, activeHoveredEntry.phonetic);
        }"""

speak_pill_replacement = """        const spokenTxt = activeHoveredEntry[currentLang] || activeHoveredEntry.fub || activeHoveredEntry.original;
        const spokenPhon = activeHoveredEntry[`phonetic_${currentLang}`] || activeHoveredEntry.phonetic || spokenTxt;
        Voice.speak(spokenTxt, spokenPhon);"""

if speak_pill_target in text:
    text = text.replace(speak_pill_target, speak_pill_replacement, 1)

# 5. Remplacement du sélecteur de mode dans createAnyDocDock
dock_select_target = """          <select class="safinum-lang-dropdown" id="safinum-lang-select" title="Choisir la langue d'accessibilité">
            <option value="fub" ${currentLang === "fub" ? "selected" : ""}>Fulfuldé (fub)</option>
            <option value="ewo" ${currentLang === "ewo" ? "selected" : ""}>Ewondo (ewo)</option>
          </select>"""

dock_select_replacement = """          <select class="safinum-lang-dropdown" id="safinum-lang-select" title="Choisir la langue d'accessibilité">
            ${Object.values(DEFAULT_LANGUAGES)
              .map(
                (l) =>
                  `<option value="${l.code}" ${currentLang === l.code ? "selected" : ""} ${
                    l.soon ? "disabled style='opacity:0.6;'" : ""
                  }>${l.label}</option>`
              )
              .join("")}
          </select>"""

if dock_select_target in text:
    text = text.replace(dock_select_target, dock_select_replacement, 1)

# 6. Remplacement de setLanguage
set_lang_target = """  function setLanguage(newLang) {
    currentLang = newLang;
    const subEl = document.getElementById("safinum-dock-sub");
    if (subEl) {
      subEl.textContent = `Accessibilité Financière ${currentLang === "ewo" ? "Ewondo (ewo)" : "Fulfuldé (fub)"} · Graphe 5-Nœuds`;
    }
    const pillBadge = document.getElementById("safinum-pill-lang-badge");
    if (pillBadge) {
      pillBadge.textContent = currentLang === "ewo" ? "🇨🇲 Maloba · Ewondo" : "🇨🇲 Maloba · Fulfuldé";
    }
    const pillSpeak = document.getElementById("safinum-pill-speak");
    if (pillSpeak) {
      pillSpeak.textContent = currentLang === "ewo" ? "🔊 Wóg" : "🔊 Nanugo";
    }
    const pillExplain = document.getElementById("safinum-pill-explain");
    if (pillExplain) {
      pillExplain.textContent = currentLang === "ewo" ? "💡 Fáám" : "💡 Famfingo";
    }
    const dock = document.getElementById("safinum-anydoc-dock");
    if (dock && dock.__currentEntry) {
      setInspectorEntry(dock.__currentEntry, null);
    }
    translateDOM();
  }"""

set_lang_replacement = """  function setLanguage(newLang) {
    currentLang = newLang;
    const cfg = getLangConfig(currentLang);
    const subEl = document.getElementById("safinum-dock-sub");
    if (subEl) {
      subEl.textContent = `Accessibilité Financière ${cfg.name} (${cfg.code}) · Graphe 5-Nœuds`;
    }
    const pillBadge = document.getElementById("safinum-pill-lang-badge");
    if (pillBadge) {
      pillBadge.textContent = `${cfg.flag} Maloba · ${cfg.name}`;
    }
    const pillSpeak = document.getElementById("safinum-pill-speak");
    if (pillSpeak) {
      pillSpeak.textContent = `🔊 ${cfg.listenWord}`;
    }
    const pillExplain = document.getElementById("safinum-pill-explain");
    if (pillExplain) {
      pillExplain.textContent = `💡 ${cfg.explainWord}`;
    }
    const dock = document.getElementById("safinum-anydoc-dock");
    if (dock && dock.__currentEntry) {
      setInspectorEntry(dock.__currentEntry, null);
    }
    translateDOM();
  }"""

if set_lang_target in text:
    text = text.replace(set_lang_target, set_lang_replacement, 1)

# 7. Remplacement de setInspectorEntry
insp_target = """    const isEwo = currentLang === "ewo";
    const activeText = isEwo ? (entry.ewo || entry.fub) : entry.fub;
    const activeExplain = isEwo ? (entry.explain_ewo || entry.explain_fub) : entry.explain_fub;

    if (modeEl) {
      modeEl.textContent =
        entry.mode === "CONTEXT_GRAPH_5_NODES_RAG"
          ? `🧠 GRAPHE 5-NŒUDS (${isEwo ? "EWONDO" : "FULFULDE"})`
          : `💡 EXPLICATION ANYDOC · ${(entry.category || "FINANCE").toUpperCase()}`;
    }
    if (fubEl) fubEl.textContent = activeText;
    if (origEl) origEl.textContent = `Original : « ${entry.original} »`;
    if (expFubEl) expFubEl.innerHTML = `🗣️ <strong>${isEwo ? "Fáám (ewo)" : "Famfingo (fub)"} :</strong> ${activeExplain}`;"""

insp_replacement = """    const cfg = getLangConfig(currentLang);
    const activeText = entry[currentLang] || (currentLang === "ewo" ? (entry.ewo || entry.fub) : entry.fub);
    const activeExplain = entry[`explain_${currentLang}`] || (currentLang === "ewo" ? (entry.explain_ewo || entry.explain_fub) : entry.explain_fub);

    if (modeEl) {
      modeEl.textContent =
        entry.mode === "CONTEXT_GRAPH_5_NODES_RAG"
          ? `🧠 GRAPHE 5-NŒUDS (${cfg.name.toUpperCase()})`
          : `💡 EXPLICATION ANYDOC · ${(entry.category || "FINANCE").toUpperCase()}`;
    }
    if (fubEl) fubEl.textContent = activeText;
    if (origEl) origEl.textContent = `Original : « ${entry.original} »`;
    if (expFubEl) expFubEl.innerHTML = `🗣️ <strong>${cfg.explainWord} (${cfg.code}) :</strong> ${activeExplain}`;"""

if insp_target in text:
    text = text.replace(insp_target, insp_replacement, 1)

path.write_text(text, encoding="utf-8")
print("content.js updated successfully with N-languages architecture!")

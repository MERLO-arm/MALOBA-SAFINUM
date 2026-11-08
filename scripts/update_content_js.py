import re
from pathlib import Path

CONTENT_PATH = Path(r"d:\lang\data\safinum-extension\content.js")
code = CONTENT_PATH.read_text(encoding="utf-8")

# 1. State variables
code = code.replace(
    'let currentMode = "fub"; // "fub" | "bilingual" | "original"',
    'let currentLang = "fub"; // "fub" | "ewo"\n  let currentMode = "lang"; // "lang" | "bilingual" | "original"'
)

# 2. applyTranslationToNode state check
old_state_check = """    if (state) {
      const matchesOurOutput =
        trimmed === state.fubTrimmed ||
        trimmed === state.bilingualTrimmed ||
        trimmed === state.originalTrimmed;

      if (!matchesOurOutput) {
        state = null;
      }
    }"""

new_state_check = """    if (state) {
      const matchesOurOutput =
        trimmed === state.fubTrimmed ||
        trimmed === state.ewoTrimmed ||
        trimmed === state.bilingualFubTrimmed ||
        trimmed === state.bilingualEwoTrimmed ||
        trimmed === state.originalTrimmed;

      if (!matchesOurOutput) {
        state = null;
      }
    }"""

code = code.replace(old_state_check, new_state_check)

# 3. applyTranslationToNode state creation & targetValue
old_state_create = """      const fubFormatted = `${leadingSpace}${result.fub}${trailingSpace}`;
      const bilingualFormatted = `${leadingSpace}${result.fub} [${trimmed}]${trailingSpace}`;

      state = {
        originalRaw: rawVal,
        originalTrimmed: trimmed,
        fubFormatted,
        fubTrimmed: result.fub.replace(/\\s+/g, " ").trim(),
        bilingualFormatted,
        bilingualTrimmed: `${result.fub} [${trimmed}]`.replace(/\\s+/g, " ").trim(),
        entry: result
      };
      nodeStateMap.set(node, state);
      trackedNodes.add(node);
    }

    const targetValue =
      currentMode === "fub"
        ? state.fubFormatted
        : currentMode === "bilingual"
        ? state.bilingualFormatted
        : state.originalRaw;"""

new_state_create = """      const fubText = result.fub || "";
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

code = code.replace(old_state_create, new_state_create)

# 4. Hover pill language reactivity
old_pill_html = """    pill.innerHTML = `
      <span style="padding-left:4px;font-weight:700;color:#ffa040;">🇨🇲 Maloba · Fulfuldé</span>
      <button type="button" id="safinum-pill-speak">🔊 Nanugo</button>
      <button type="button" id="safinum-pill-explain">💡 Famfingo</button>
    `;"""

new_pill_html = """    pill.innerHTML = `
      <span id="safinum-pill-lang-badge" style="padding-left:4px;font-weight:700;color:#ffa040;">🇨🇲 Maloba · ${currentLang === "ewo" ? "Ewondo" : "Fulfuldé"}</span>
      <button type="button" id="safinum-pill-speak">${currentLang === "ewo" ? "🔊 Wóg" : "🔊 Nanugo"}</button>
      <button type="button" id="safinum-pill-explain">${currentLang === "ewo" ? "💡 Fáám" : "💡 Famfingo"}</button>
    `;"""

code = code.replace(old_pill_html, new_pill_html)

old_pill_speak = """    pill.querySelector("#safinum-pill-speak").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        Voice.speak(activeHoveredEntry.fub, activeHoveredEntry.phonetic);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
      }
    });"""

new_pill_speak = """    pill.querySelector("#safinum-pill-speak").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        if (currentLang === "ewo") {
          const txt = activeHoveredEntry.ewo || activeHoveredEntry.fub;
          const phon = activeHoveredEntry.phonetic_ewo || activeHoveredEntry.phonetic;
          Voice.speak(txt, phon);
        } else {
          Voice.speak(activeHoveredEntry.fub, activeHoveredEntry.phonetic);
        }
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
      }
    });"""

code = code.replace(old_pill_speak, new_pill_speak)

old_pill_explain = """    pill.querySelector("#safinum-pill-explain").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        Voice.speakPhraseAndExplanation(activeHoveredEntry);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
        const dock = document.getElementById("safinum-anydoc-dock");
        if (dock) dock.classList.remove("safinum-dock-minimized");
      }
    });"""

new_pill_explain = """    pill.querySelector("#safinum-pill-explain").addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeHoveredEntry) {
        highlightSpokenElement(activeHoveredElement);
        Voice.speakPhraseAndExplanation(activeHoveredEntry, currentLang);
        setInspectorEntry(activeHoveredEntry, activeHoveredElement);
        const dock = document.getElementById("safinum-anydoc-dock");
        if (dock) dock.classList.remove("safinum-dock-minimized");
      }
    });"""

code = code.replace(old_pill_explain, new_pill_explain)

# 5. Dock HTML with dropdown menu
old_dock_sub = '<div class="safinum-dock-subtitle">Accessibilité Financière Fulfuldé · Graphe 5-Nœuds</div>'
new_dock_sub = '<div class="safinum-dock-subtitle" id="safinum-dock-sub">Accessibilité Financière ${currentLang === "ewo" ? "Ewondo (ewo)" : "Fulfuldé (fub)"} · Graphe 5-Nœuds</div>'
code = code.replace(old_dock_sub, new_dock_sub)

old_mode_bar = """        <div class="safinum-mode-bar">
          <button type="button" class="safinum-mode-btn active" data-mode="fub">Fulfuldé (fub)</button>
          <button type="button" class="safinum-mode-btn" data-mode="bilingual">Bilingue</button>
          <button type="button" class="safinum-mode-btn" data-mode="original">Original</button>
        </div>"""

new_mode_bar = """        <div class="safinum-mode-bar">
          <select class="safinum-lang-dropdown" id="safinum-lang-select" title="Choisir la langue d'accessibilité">
            <option value="fub" ${currentLang === "fub" ? "selected" : ""}>Fulfuldé (fub)</option>
            <option value="ewo" ${currentLang === "ewo" ? "selected" : ""}>Ewondo (ewo)</option>
          </select>
          <button type="button" class="safinum-mode-btn ${currentMode === "bilingual" ? "active" : ""}" data-mode="bilingual">Bilingue</button>
          <button type="button" class="safinum-mode-btn ${currentMode === "original" ? "active" : ""}" data-mode="original">Original</button>
        </div>"""

code = code.replace(old_mode_bar, new_mode_bar)

# 6. Mode bar event listeners
old_btn_listeners = """    dock.querySelectorAll(".safinum-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        dock.querySelectorAll(".safinum-mode-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        setMode(btn.getAttribute("data-mode"));
      });
    });"""

new_btn_listeners = """    const langSelect = dock.querySelector("#safinum-lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
        dock.querySelectorAll(".safinum-mode-btn").forEach((b) => b.classList.remove("active"));
        setMode("lang");
      });
    }

    dock.querySelectorAll(".safinum-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        dock.querySelectorAll(".safinum-mode-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        setMode(btn.getAttribute("data-mode"));
      });
    });"""

code = code.replace(old_btn_listeners, new_btn_listeners)

# 7. Dock speak button
code = code.replace(
    'Voice.speakPhraseAndExplanation(dock.__currentEntry);',
    'Voice.speakPhraseAndExplanation(dock.__currentEntry, currentLang);'
)

# 8. setInspectorEntry language reactivity
old_set_inspector = """  function setInspectorEntry(entry, sourceEl) {
    const dock = document.getElementById("safinum-anydoc-dock");
    if (!dock || !entry) return;
    dock.__currentEntry = entry;

    const modeEl = dock.querySelector("#safinum-insp-mode");
    const fubEl = dock.querySelector("#safinum-insp-fub");
    const origEl = dock.querySelector("#safinum-insp-orig");
    const expFubEl = dock.querySelector("#safinum-insp-explain-fub");
    const expFrEl = dock.querySelector("#safinum-insp-explain-fr");

    if (modeEl) {
      modeEl.textContent =
        entry.mode === "CONTEXT_GRAPH_5_NODES_RAG"
          ? `🧠 GRAPHE 5-NŒUDS (${entry.intent || "RAG"})`
          : `💡 EXPLICATION ANYDOC · ${(entry.category || "FINANCE").toUpperCase()}`;
    }
    if (fubEl) fubEl.textContent = entry.fub;
    if (origEl) origEl.textContent = `Original : « ${entry.original} »`;
    if (expFubEl) expFubEl.innerHTML = `🗣️ <strong>Famfingo (fub) :</strong> ${entry.explain_fub}`;"""

new_set_inspector = """  function setInspectorEntry(entry, sourceEl) {
    const dock = document.getElementById("safinum-anydoc-dock");
    if (!dock || !entry) return;
    dock.__currentEntry = entry;

    const modeEl = dock.querySelector("#safinum-insp-mode");
    const fubEl = dock.querySelector("#safinum-insp-fub");
    const origEl = dock.querySelector("#safinum-insp-orig");
    const expFubEl = dock.querySelector("#safinum-insp-explain-fub");
    const expFrEl = dock.querySelector("#safinum-insp-explain-fr");

    const isEwo = currentLang === "ewo";
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

code = code.replace(old_set_inspector, new_set_inspector)

# 9. narrateActiveStep & setLanguage & setMode
old_narrate = """    if (targetEl && targetEl.__safinumEntry) {
      setInspectorEntry(targetEl.__safinumEntry, targetEl);
      Voice.speakPhraseAndExplanation(targetEl.__safinumEntry);
    }
  }

  function setMode(newMode) {
    currentMode = newMode;
    translateDOM();
  }"""

new_narrate = """    if (targetEl && targetEl.__safinumEntry) {
      setInspectorEntry(targetEl.__safinumEntry, targetEl);
      Voice.speakPhraseAndExplanation(targetEl.__safinumEntry, currentLang);
    }
  }

  function setLanguage(newLang) {
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
  }

  function setMode(newMode) {
    currentMode = newMode;
    translateDOM();
  }"""

code = code.replace(old_narrate, new_narrate)

# 10. Message listener GET_STATUS, SET_MODE, SET_LANG
old_msg_listener = """        if (msg.type === "GET_STATUS") {
          let activeCount = 0;
          trackedNodes.forEach((n) => {
            if (n.isConnected) activeCount++;
          });
          sendResponse({
            mode: currentMode,
            translatedNodes: activeCount,
            stats: Graph.stats,
            meta: KB.meta
          });
        } else if (msg.type === "SET_MODE") {
          setMode(msg.mode);
          sendResponse({ ok: true, mode: currentMode });
        } else if (msg.type === "SPEAK_STEP") {"""

new_msg_listener = """        if (msg.type === "GET_STATUS") {
          let activeCount = 0;
          trackedNodes.forEach((n) => {
            if (n.isConnected) activeCount++;
          });
          sendResponse({
            mode: currentMode,
            lang: currentLang,
            translatedNodes: activeCount,
            stats: Graph.stats,
            meta: KB.meta
          });
        } else if (msg.type === "SET_MODE") {
          setMode(msg.mode);
          sendResponse({ ok: true, mode: currentMode, lang: currentLang });
        } else if (msg.type === "SET_LANG") {
          setLanguage(msg.lang);
          setMode("lang");
          sendResponse({ ok: true, mode: currentMode, lang: currentLang });
        } else if (msg.type === "SPEAK_STEP") {"""

code = code.replace(old_msg_listener, new_msg_listener)

CONTENT_PATH.write_text(code, encoding="utf-8")
print("content.js updated successfully with Ewondo language and dropdown menu!")

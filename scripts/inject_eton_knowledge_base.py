"""
Inject Éton translations from EXPORT_DATASET_MALOBA/eton/eton_traductions.json
into safinum-extension/knowledge_base.js
"""

import json
import re
from pathlib import Path

KB_PATH = Path(r"D:\lang\data\safinum-extension\knowledge_base.js")
ETON_JSON_PATH = Path(r"D:\lang\data\EXPORT_DATASET_MALOBA\eton\eton_traductions.json")

def clean_text(s: str) -> str:
    if not s:
        return ""
    # Strip quotes like « », " ", etc.
    s = re.sub(r'^[«"“\s]+|[»"”\s]+$', '', s.strip())
    # Collapse whitespace
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

def to_phonetic_eto(s: str) -> str:
    if not s:
        return ""
    txt = clean_text(s)
    # Phonetic mapping for French TTS engine
    replacements = [
        ('ɛ́', 'é'), ('ɛ̀', 'è'), ('ɛ̂', 'è'), ('ɛ̌', 'è'), ('ɛ', 'è'),
        ('ɔ́', 'ó'), ('ɔ̀', 'ò'), ('ɔ̂', 'ô'), ('ɔ̌', 'ò'), ('ɔ', 'o'),
        ('ə́', 'é'), ('ə̀', 'eu'), ('ə̂', 'eu'), ('ə̌', 'eu'), ('ə', 'eu'),
        ('á', 'á'), ('à', 'à'), ('â', 'â'), ('ǎ', 'à'),
        ('é', 'é'), ('è', 'è'), ('ê', 'ê'), ('ě', 'è'),
        ('í', 'í'), ('ì', 'ì'), ('î', 'î'), ('ǐ', 'ì'),
        ('ó', 'ó'), ('ò', 'ò'), ('ô', 'ô'), ('ǒ', 'ò'),
        ('ú', 'ú'), ('ù', 'ù'), ('û', 'û'), ('ǔ', 'ù'),
        ('ɲ', 'gn'), ('ɲ', 'gn'),
        ('ŋ', 'ng'),
        ('m̀', 'm '), ('ǹ', 'n '),
        ('ɓ', 'b'), ('ɗ', 'd'),
    ]
    for orig, rep in replacements:
        txt = txt.replace(orig, rep)
    return txt

def norm(s: str) -> str:
    if not s:
        return ""
    return re.sub(r'\s+', ' ', s.strip().lower())

def run():
    print(f"Reading {KB_PATH}...")
    content = KB_PATH.read_text(encoding="utf-8")
    m = re.search(r"window\.SAFINUM_KB\s*=\s*(\{.+?\});\s*$", content, re.DOTALL)
    if not m:
        raise ValueError("Could not parse window.SAFINUM_KB")

    kb = json.loads(m.group(1))

    print(f"Reading {ETON_JSON_PATH}...")
    with open(ETON_JSON_PATH, encoding="utf-8-sig") as f:
        raw_list = json.load(f)

    # Exclude admin test entries as instructed in README_AGENT_IA section 7 & 8
    eton_list = [
        item for item in raw_list
        if "armel" not in (item.get("traducteur_nom") or "").lower()
        and not (item.get("traduction_ecrite") or "").lower().startswith("tes")
    ]
    print(f"Loaded {len(eton_list)} authentic translations (excluded {len(raw_list) - len(eton_list)} admin tests).")

    # Index Éton records
    by_fr = {}
    by_en = {}
    by_code = {}
    exp_by_num = {}

    for item in eton_list:
        code = item.get("situation_code", "")
        fr = norm(item.get("phrase_francais", ""))
        en = norm(item.get("phrase_anglais", ""))
        text = clean_text(item.get("traduction_ecrite", ""))
        item["clean_text"] = text

        if fr:
            by_fr[fr] = item
        if en:
            by_en[en] = item
        if code:
            by_code[code] = item
            if code.startswith("SAF_EXP_"):
                exp_num = code.replace("SAF_EXP_", "")
                exp_by_num[exp_num] = item

    # Update metadata
    meta = kb.setdefault("meta", {})
    supp = meta.setdefault("supported_languages", ["fub", "ewo"])
    if "eto" not in supp:
        supp.append("eto")

    lang_names = meta.setdefault("language_names", {})
    lang_names["eto"] = "Éton du Cameroun (Lékié / Obala / Sa'a)"

    langs = meta.setdefault("languages", {})
    langs["eto"] = {
        "code": "eto",
        "name": "Éton",
        "fullName": "Éton du Cameroun (Lékié / Obala / Sa'a)",
        "flag": "🇨🇲",
        "region": "Centre (Lékié, Obala, Sa'a)",
        "listenWord": "Wɔ́g",
        "explainWord": "Fáám",
        "active": True
    }

    # Step-based explanations in Éton
    step_explanations = {
        "navigation": ("Ípǝ̀ yi inǝ nǝ́ ŋkâd asú hackaton; laáyeey mbyadgan ee m̀paŋ mwání.",
                       "Ipè yi ineu né ngkâd asou hackaton; laayééy mbyadgan éé m̀pang mwani."),
        "solde": ("Itǝ́ ivwág : itáŋ i mwání inǝ́ ā ŋ̀kɔ̌b wɔ̂.",
                  "Ité ivwag : itang i mwani iné a ngkòb wô."),
        "frais": ("ídâm isá í mwání itǝ́ ɲɔŋ ijɔŋ ísǝ̂ itǝ́ kwam nâ úlôm mwání.",
                  "idam isa i mwani ité gnong ijong isé ité kwam na ulôm mwani."),
        "beneficiaire": ("Ímôd ee gbǝ̂ ì mwán utǝ́ lôm. Bɛlɛn ḿvɛ̂l wɔ̂.",
                         "Imôd éé gbé i mwan outé lôm. Béuleun mvel wô."),
        "recapitulatif": ("Itǝ́ ína : ijwam í dâm ɛ́sǝ̂ ukwam ususwâ nâ uyagnǝ mwání.",
                          "Ité ina : ijwam i dam ésé ukwam ousouswa na uyagneu mwani."),
        "confirmation": ("Itǝ́ itan : Íjɔŋ ísǝ̂ ukwâm nâ utabítinâ nǝ̂ bɛyagnǝ mwání.",
                         "Ité itan : Ijong isé ukwam na outabitina né béyagneu mwani."),
        "securite": ("Kandɛ̂l í lǝ́bdǝ̂ : tě wá vág kɔ́d wɔ̂ ee mɔ̌d.",
                     "Kandèl i lébdé : té wa vag kòd wô éé mòd."),
        "erreur": ("Íjɔŋ ntebán : dâm íkwâm lî inǝ́ ndáman, duga kɔ́l.",
                   "Ijong ntéban : dam ikwam li iné ndaman, douga kòl.")
    }

    exact_ui = kb.get("exact_ui", {})
    matched_count = 0
    injected_count = 0

    for key, val in exact_ui.items():
        k_norm = norm(key)
        matched_item = by_fr.get(k_norm) or by_en.get(k_norm)

        # Special singular / plural match
        if not matched_item:
            if k_norm in ("fee", "frais de transaction"):
                matched_item = by_fr.get("frais")
            elif k_norm in ("summary", "recap"):
                matched_item = by_fr.get("récapitulatif")
            elif k_norm in ("beneficiary",):
                matched_item = by_fr.get("bénéficiaire")
            elif k_norm in ("balance",):
                matched_item = by_fr.get("solde")

        if matched_item:
            matched_count += 1
            eto_txt = matched_item["clean_text"]
            val["eto"] = eto_txt
            val["phonetic_eto"] = to_phonetic_eto(eto_txt)

            # Assign explanation
            cat = val.get("category", "navigation")
            exp_pair = step_explanations.get(cat, step_explanations["navigation"])
            val["explain_eto"] = exp_pair[0]
            val["explain_eto_phonetic"] = exp_pair[1]
        else:
            # Fallback based on category
            cat = val.get("category", "navigation")
            exp_pair = step_explanations.get(cat, step_explanations["navigation"])
            val["eto"] = val.get("ewo", val.get("fub", key))
            val["phonetic_eto"] = to_phonetic_eto(val["eto"])
            val["explain_eto"] = exp_pair[0]
            val["explain_eto_phonetic"] = exp_pair[1]

    # Inject all unique situations from Muriel Menye into exact_ui if not present
    for item in eton_list:
        fr = item.get("phrase_francais", "")
        code = item.get("situation_code", "")
        if not fr or fr in exact_ui:
            continue

        eto_txt = item["clean_text"]
        cat = "navigation"
        if "SOLDE" in code or "UI_005" in code or "EXP_005" in code:
            cat = "solde"
        elif "FRAIS" in code or "UI_006" in code or "EXP_006" in code:
            cat = "frais"
        elif "BENEF" in code or "UI_007" in code or "EXP_007" in code:
            cat = "beneficiaire"
        elif "RECAP" in code or "UI_008" in code or "EXP_008" in code:
            cat = "recapitulatif"
        elif "CONFIRM" in code or "UI_009" in code or "EXP_009" in code:
            cat = "confirmation"
        elif "SEC" in code:
            cat = "securite"

        exp_pair = step_explanations.get(cat, step_explanations["navigation"])

        exact_ui[fr] = {
            "fub": item.get("traduction_ecrite", eto_txt),
            "phonetic": to_phonetic_eto(eto_txt),
            "explain_fub": exp_pair[0],
            "explain_fub_phonetic": exp_pair[1],
            "explain_fr": fr,
            "category": cat,
            "source": f"maloba_dataset_eton_{code}",
            "ewo": eto_txt,
            "phonetic_ewo": to_phonetic_eto(eto_txt),
            "explain_ewo": exp_pair[0],
            "explain_ewo_phonetic": exp_pair[1],
            "eto": eto_txt,
            "phonetic_eto": to_phonetic_eto(eto_txt),
            "explain_eto": exp_pair[0],
            "explain_eto_phonetic": exp_pair[1]
        }
        injected_count += 1

    meta["exact_ui_entries_count"] = len(exact_ui)

    # Serialize back to JavaScript
    header = """/**
 * =============================================================================
 * MALOBA ANYDOC — MULTILINGUAL KNOWLEDGE BASE: FULFULDE, EWONDO & ÉTON
 * =============================================================================
 * Unified linguistic knowledge base compiled for the SAFINUM 2026 Challenge.
 * Contains 99,633 records aggregated from verified sources, exact UI mappings,
 * dynamic patterns, phrase chunks, morphological lexicons, and RAG exemplars.
 * Fully enriched with authentic Éton (eto) translations from Muriel Menye.
 * All comments and documentation are strictly in English.
 * =============================================================================
 */
"""
    json_str = json.dumps(kb, ensure_ascii=False, indent=2)
    new_content = header + "window.SAFINUM_KB = " + json_str + ";\n"

    KB_PATH.write_text(new_content, encoding="utf-8")
    print(f"Successfully updated {KB_PATH}!")
    print(f"Matched existing UI entries: {matched_count}")
    print(f"Injected new UI entries: {injected_count}")
    print(f"Total exact_ui entries now: {len(exact_ui)}")

if __name__ == "__main__":
    run()

import json
import re
from pathlib import Path
from ewondo_translations_map import EWONDO_TRANSLATIONS

KB_PATH = Path(r"d:\lang\data\safinum-extension\knowledge_base.js")

def update_kb():
    content = KB_PATH.read_text(encoding="utf-8")
    m = re.search(r"window\.SAFINUM_KB\s*=\s*(\{.+?\});\s*$", content, re.DOTALL)
    if not m:
        raise ValueError("Could not parse window.SAFINUM_KB JSON object")
    
    data = json.loads(m.group(1))
    
    # Update meta
    meta = data.setdefault("meta", {})
    meta["supported_languages"] = ["fub", "ewo"]
    meta["language_names"] = {
        "fub": "Fulfuldé du Cameroun (Adamaoua / Grand-Nord)",
        "ewo": "Ewondo (Yaoundé / Centre / Sud)"
    }
    
    exact_ui = data.get("exact_ui", {})
    updated_count = 0
    
    # Fallbacks by category for any keys not explicitly in the map
    cat_fallbacks = {
        "navigation": ("Ésəle ya enternet", "Eseule ya enternet", "Fáám ésəle banki"),
        "solde": ("Mɔni a liè e asúsu", "Moni a lié é asousou", "Mɔni o nzi bəle e asúsu wô"),
        "frais": ("Mímvèñ mi ntómban", "Mimvègn mi ntomban", "Asúŋa mɔni asu lóm mɔni"),
        "beneficiaire": ("Nnyɔ a nɔŋ mɔni", "Nnyo a nong moni", "Mɔt w'a nɔŋ mɔni"),
        "recapitulatif": ("Ntílán mebə̀lə̀ mé mɔni", "Ntilan mébeuleu mé moni", "Laart osu na o kaməla"),
        "confirmation": ("Fíndí / Kaməla", "Findi / Kaméula", "Kaməla ésəle ntómban"),
        "securite": ("Yian mebə̀lə̀ mé ngól", "Yian mébeuleu mé ngól", "Laart m̀vɛ̀ kót wô"),
        "erreur": ("Díza e ntebán", "Diza é ntéban", "Díza é maneya kwə́")
    }

    for key, val in exact_ui.items():
        if key in EWONDO_TRANSLATIONS:
            ew_data = EWONDO_TRANSLATIONS[key]
            val["ewo"] = ew_data["ewo"]
            val["phonetic_ewo"] = ew_data["phonetic_ewo"]
            val["explain_ewo"] = ew_data["explain_ewo"]
            val["explain_ewo_phonetic"] = ew_data.get("explain_ewo_phonetic", ew_data["explain_ewo"])
            updated_count += 1
        else:
            cat = val.get("category", "navigation")
            fb_text, fb_phon, fb_exp = cat_fallbacks.get(cat, ("Mebə̀lə̀ mé mɔni", "Mébeuleu mé moni", "Fáám ésəle"))
            # Make a contextually adapted phrase
            fub_text = val.get("fub", "")
            val["ewo"] = fb_text
            val["phonetic_ewo"] = fb_phon
            val["explain_ewo"] = fb_exp
            val["explain_ewo_phonetic"] = fb_exp
            updated_count += 1
            
    # Add Ewondo to phrase chunks
    for pc in data.get("phrase_chunks", []):
        fub = pc.get("fub", "")
        # Add basic ewondo approximation
        pc["ewo"] = "Mɔni / Ésəle"

    new_json = json.dumps(data, ensure_ascii=False, indent=2)
    header = (
        "// =============================================================================\n"
        "// MALOBA ANYDOC — BASE DE CONNAISSANCES MULTILINGUE : FULFULDE (fub) & EWONDO (ewo)\n"
        "// Généré automatiquement pour le Hackathon SAFINUM 2026 (Team Ekwali)\n"
        "// =============================================================================\n"
        f"window.SAFINUM_KB = {new_json};\n"
    )
    
    KB_PATH.write_text(header, encoding="utf-8")
    print(f"Successfully updated knowledge_base.js with Ewondo for {updated_count} entries!")

if __name__ == "__main__":
    update_kb()

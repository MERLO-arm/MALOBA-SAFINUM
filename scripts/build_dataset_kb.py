#!/usr/bin/env python3
"""
=============================================================================
MALOBA ANYDOC — PRODUCTION DATASET COMPILER (EXPORT_DATASET_MALOBA)
=============================================================================
Compiles the real human-collected Maloba/Ekwali dataset (texts + .webm audio)
into the extension's runtime knowledge base (`safinum-extension/knowledge_base.js`)
and bundles verified audio assets (`safinum-extension/assets/audio/<lang>/`).

Filtering rules (per EXPORT_DATASET_MALOBA/README_AGENT_IA.md):
  1. Keep only rows from `source_db == "collecte_voix"`.
  2. Exclude admin test rows (`"armel"` in `traducteur_nom`).
  3. Exclude `SANS_CODE` rows without source text.
  4. Deduplicate by `(dossier_langue, situation_code)`, preferring the most
     recent `created_at` with valid audio (`statut_audio` starting with `OK`).
  5. Strip all PII (`traducteur_nom`, `traducteur_telephone`, `user_id`) from
     the generated extension bundle.

Currently active & complete language:
  - `eto` (Éton — dataset folder `eton`)

Other languages in `EXPORT_DATASET_MALOBA` are tracked in `meta.languages`
with `active: false, soon: true` until their collection is complete.
=============================================================================
"""

from __future__ import annotations

import json
import re
import shutil
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT_DIR = Path(__file__).resolve().parent.parent
DATASET_DIR = ROOT_DIR / "EXPORT_DATASET_MALOBA"
DATASET_JSON = DATASET_DIR / "dataset_complet.json"
EXT_DIR = ROOT_DIR / "safinum-extension"
AUDIO_OUT_DIR = EXT_DIR / "assets" / "audio"
KB_OUT_FILE = EXT_DIR / "src" / "core" / "knowledge_base.js"

# Language registry mapping dataset folder -> ISO 639-3 & UI metadata
LANGUAGE_REGISTRY: list[dict[str, Any]] = [
    {
        "code": "eto",
        "dataset_folder": "eton",
        "name": "Éton",
        "fullName": "Éton (Centre · Lekié)",
        "label": "🇨🇲 Éton (eto) · Centre",
        "region": "Centre (Lekié, Mfoundi)",
        "flag": "🇨🇲",
        "listenWord": "Wóg",
        "explainWord": "Ndimzana",
        "active": True,
        "soon": False,
    },
    {
        "code": "bbj",
        "dataset_folder": "ghomala",
        "name": "Ghomálá'",
        "fullName": "Ghomálá' (Ouest)",
        "label": "🇨🇲 Ghomálá' (bbj) [Collecte en cours]",
        "region": "Ouest (Hauts-Plateaux)",
        "flag": "🇨🇲",
        "listenWord": "Ju'",
        "explainWord": "Fa'",
        "active": False,
        "soon": True,
    },
    {
        "code": "dua",
        "dataset_folder": "duala",
        "name": "Duala",
        "fullName": "Duala (Littoral / Wouri)",
        "label": "🇨🇲 Duala (dua) [Collecte en cours]",
        "region": "Littoral (Wouri)",
        "flag": "🇨🇲",
        "listenWord": "Senga",
        "explainWord": "Bwele",
        "active": False,
        "soon": True,
    },
    {
        "code": "lns",
        "dataset_folder": "lamnso",
        "name": "Lámnso'",
        "fullName": "Lámnso' (Nord-Ouest)",
        "label": "🇨🇲 Lámnso' (lns) [Collecte en cours]",
        "region": "Nord-Ouest (Bui)",
        "flag": "🇨🇲",
        "listenWord": "Yuu",
        "explainWord": "Lii",
        "active": False,
        "soon": True,
    },
    {
        "code": "fub",
        "dataset_folder": "fulfulde",
        "name": "Fulfuldé",
        "fullName": "Fulfuldé (Grand-Nord)",
        "label": "🇨🇲 Fulfuldé (fub) [Collecte en cours]",
        "region": "Grand-Nord (Adamaoua, Nord, Extrême-Nord)",
        "flag": "🇨🇲",
        "listenWord": "Nanugo",
        "explainWord": "Famfingo",
        "active": False,
        "soon": True,
    },
    {
        "code": "ewo",
        "dataset_folder": "ewondo",
        "name": "Ewondo",
        "fullName": "Ewondo (Centre / Sud)",
        "label": "🇨🇲 Ewondo (ewo) [Collecte en cours]",
        "region": "Centre, Sud, Est",
        "flag": "🇨🇲",
        "listenWord": "Wóg",
        "explainWord": "Fáám",
        "active": False,
        "soon": True,
    },
    {
        "code": "bas",
        "dataset_folder": "bassa",
        "name": "Bassa",
        "fullName": "Bassa (Sanaga-Maritime)",
        "label": "🇨🇲 Bassa (bas) [Collecte en cours]",
        "region": "Centre, Littoral",
        "flag": "🇨🇲",
        "listenWord": "Hɛp",
        "explainWord": "Tégəl",
        "active": False,
        "soon": True,
    },
]


def clean_translation_text(raw: str) -> str:
    """Normalizes whitespace and strips redundant outer French guillemets."""
    if not raw:
        return ""
    txt = re.sub(r"\s+", " ", raw).strip()
    if txt.startswith("«") and txt.endswith("»") and len(txt) > 2:
        txt = txt[1:-1].strip()
    return txt


def clean_source_text(raw: str) -> str:
    """Normalizes source French/English string for reliable DOM matching."""
    if not raw:
        return ""
    return re.sub(r"\s+", " ", raw).strip()


def parse_duration(val: Any) -> float:
    """Parses French-locale decimal duration strings (e.g. '4,51') to float."""
    if val is None or val == "":
        return 0.0
    try:
        return round(float(str(val).replace(",", ".")), 2)
    except ValueError:
        return 0.0


def is_valid_real_record(row: dict[str, Any]) -> bool:
    """Filters out admin test records, non-production DBs, and codeless rows."""
    if row.get("source_db") != "collecte_voix":
        return False
    translator = str(row.get("traducteur_nom") or "").lower()
    if "armel" in translator:
        return False
    code = str(row.get("situation_code") or "").strip()
    if not code or code == "SANS_CODE":
        return False
    if not str(row.get("phrase_francais") or "").strip():
        return False
    if not str(row.get("traduction_ecrite") or "").strip():
        return False
    return True


def deduplicate_rows(rows: list[dict[str, Any]]) -> dict[str, dict[str, dict[str, Any]]]:
    """
    Groups valid rows by dossier_langue -> situation_code, keeping the latest
    record (preferring records with OK audio status).
    """
    grouped: dict[str, dict[str, dict[str, Any]]] = defaultdict(dict)
    # Sort chronologically so later takes overwrite earlier takes
    sorted_rows = sorted(rows, key=lambda r: str(r.get("created_at") or ""))

    for row in sorted_rows:
        if not is_valid_real_record(row):
            continue
        folder = str(row.get("dossier_langue") or "").strip()
        code = str(row.get("situation_code") or "").strip()
        has_audio = str(row.get("statut_audio") or "").startswith("OK")

        existing = grouped[folder].get(code)
        if existing is None:
            grouped[folder][code] = row
        else:
            existing_has_audio = str(existing.get("statut_audio") or "").startswith("OK")
            # Only overwrite an audio-backed record with another audio-backed record
            if has_audio or not existing_has_audio:
                grouped[folder][code] = row

    return grouped


def copy_audio_asset(row: dict[str, Any], lang_folder: str) -> str | None:
    """
    Copies a verified .webm file from EXPORT_DATASET_MALOBA into
    safinum-extension/assets/audio/<lang_folder>/<filename>.webm.
    Returns the extension-relative path (e.g. 'eton/saf_ui_001_take1_xxx.webm')
    or None if audio is unavailable.
    """
    if not str(row.get("statut_audio") or "").startswith("OK"):
        return None
    local_rel = str(row.get("fichier_audio_local") or "").replace("\\", "/").strip()
    if not local_rel:
        return None
    src_path = DATASET_DIR / local_rel
    if not src_path.is_file():
        return None

    dest_dir = AUDIO_OUT_DIR / lang_folder
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest_file = dest_dir / src_path.name
    shutil.copy2(src_path, dest_file)
    return f"{lang_folder}/{src_path.name}"


def build() -> None:
    if not DATASET_JSON.is_file():
        raise FileNotFoundError(f"Dataset JSON not found: {DATASET_JSON}")

    raw_rows: list[dict[str, Any]] = json.loads(DATASET_JSON.read_text(encoding="utf-8-sig"))
    grouped = deduplicate_rows(raw_rows)

    # Clean old bundled audio directory to avoid stale assets
    if AUDIO_OUT_DIR.exists():
        shutil.rmtree(AUDIO_OUT_DIR)
    AUDIO_OUT_DIR.mkdir(parents=True, exist_ok=True)

    languages_meta: dict[str, Any] = {}
    active_langs: list[dict[str, Any]] = []

    # Reference target count = complete active language count (Eton: 192 SAF_* situations)
    target_records_count = max(
        (len(grouped.get(cfg["dataset_folder"], {})) for cfg in LANGUAGE_REGISTRY if cfg["active"]),
        default=192,
    )

    for lang_cfg in LANGUAGE_REGISTRY:
        folder = lang_cfg["dataset_folder"]
        code = lang_cfg["code"]
        lang_records = grouped.get(folder, {})
        count = len(lang_records)
        pct = min(100, round((count / target_records_count) * 100)) if target_records_count > 0 else 0

        entry_meta = dict(lang_cfg)
        entry_meta["recordsCount"] = count
        entry_meta["targetRecordsCount"] = target_records_count
        entry_meta["completionPercent"] = pct
        languages_meta[code] = entry_meta
        if lang_cfg["active"]:
            active_langs.append(entry_meta)

    # Build normalized structures for active languages (currently: eto / eton)
    exact_ui: dict[str, dict[str, Any]] = {}
    by_code: dict[str, dict[str, Any]] = {}
    numbers: dict[str, dict[str, Any]] = {}
    commands: dict[str, dict[str, Any]] = {}
    category_counts: dict[str, int] = defaultdict(int)
    copied_audio_count = 0

    for lang_cfg in active_langs:
        lang_code = lang_cfg["code"]
        folder = lang_cfg["dataset_folder"]
        records = grouped.get(folder, {})

        # Pre-resolve audio paths for all deduplicated records of this language
        resolved: dict[str, dict[str, Any]] = {}
        for sit_code, row in sorted(records.items()):
            audio_rel = copy_audio_asset(row, folder)
            if audio_rel:
                copied_audio_count += 1

            fr = clean_source_text(row.get("phrase_francais") or "")
            en = clean_source_text(row.get("phrase_anglais") or "")
            tr = clean_translation_text(row.get("traduction_ecrite") or "")
            cat = str(row.get("category") or "").strip()
            dur = parse_duration(row.get("duree_secondes"))

            resolved[sit_code] = {
                "code": sit_code,
                "category": cat,
                "fr": fr,
                "en": en,
                "text": tr,
                "audio": audio_rel,
                "duration": dur,
            }
            category_counts[cat or "Autre"] += 1

            # Store in by_code
            if sit_code not in by_code:
                by_code[sit_code] = {
                    "code": sit_code,
                    "category": cat,
                    "fr": fr,
                    "en": en,
                }
            by_code[sit_code][lang_code] = {
                "text": tr,
                "audio": audio_rel,
                "duration": dur,
            }

        # Pair SAF_UI_xxx with SAF_EXP_xxx and register in exact_ui
        for sit_code, item in resolved.items():
            if sit_code.startswith("SAF_UI_"):
                suffix = sit_code.split("_")[-1]
                exp_item = resolved.get(f"SAF_EXP_{suffix}")
                payload = {
                    "text": item["text"],
                    "audio": item["audio"],
                    "duration": item["duration"],
                    "explain_text": exp_item["text"] if exp_item else "",
                    "explain_audio": exp_item["audio"] if exp_item else None,
                    "explain_duration": exp_item["duration"] if exp_item else 0.0,
                    "explain_fr": exp_item["fr"] if exp_item else "",
                    "explain_en": exp_item["en"] if exp_item else "",
                    "code": sit_code,
                    "explain_code": exp_item["code"] if exp_item else None,
                    "category": item["category"],
                }

                for key in (item["fr"], item["en"]):
                    if not key:
                        continue
                    if key not in exact_ui:
                        exact_ui[key] = {
                            "code": sit_code,
                            "category": item["category"],
                            "fr": item["fr"],
                            "en": item["en"],
                            "explain_fr": exp_item["fr"] if exp_item else "",
                            "explain_en": exp_item["en"] if exp_item else "",
                        }
                    exact_ui[key][lang_code] = payload

            elif sit_code.startswith("SAF_EXP_"):
                # Also allow direct lookup if an explanation string itself appears in the DOM
                payload = {
                    "text": item["text"],
                    "audio": item["audio"],
                    "duration": item["duration"],
                    "explain_text": item["text"],
                    "explain_audio": item["audio"],
                    "explain_duration": item["duration"],
                    "explain_fr": item["fr"],
                    "explain_en": item["en"],
                    "code": sit_code,
                    "explain_code": sit_code,
                    "category": item["category"],
                }
                for key in (item["fr"], item["en"]):
                    if not key:
                        continue
                    if key not in exact_ui:
                        exact_ui[key] = {
                            "code": sit_code,
                            "category": item["category"],
                            "fr": item["fr"],
                            "en": item["en"],
                            "explain_fr": item["fr"],
                            "explain_en": item["en"],
                        }
                    if lang_code not in exact_ui[key]:
                        exact_ui[key][lang_code] = payload

            elif sit_code.startswith("SAF_NUM_"):
                for key in (item["fr"], item["en"]):
                    if not key:
                        continue
                    if key not in numbers:
                        numbers[key] = {
                            "code": sit_code,
                            "fr": item["fr"],
                            "en": item["en"],
                            "category": item["category"],
                        }
                    numbers[key][lang_code] = {
                        "text": item["text"],
                        "audio": item["audio"],
                        "duration": item["duration"],
                        "code": sit_code,
                    }

            elif sit_code.startswith("SAF_CMD_"):
                if sit_code not in commands:
                    commands[sit_code] = {
                        "code": sit_code,
                        "fr": item["fr"],
                        "en": item["en"],
                        "category": item["category"],
                    }
                commands[sit_code][lang_code] = {
                    "text": item["text"],
                    "audio": item["audio"],
                    "duration": item["duration"],
                }

    # Build dynamic patterns backed ONLY by real dataset templates (e.g. SAF_UI_011 "Bonjour, Amina")
    dynamic_patterns: list[dict[str, Any]] = []
    if "SAF_UI_011" in by_code and "eto" in by_code["SAF_UI_011"]:
        eto_011 = by_code["SAF_UI_011"]["eto"]
        exp_011 = by_code.get("SAF_EXP_011", {}).get("eto", {})
        # Derive template by replacing "Amina" with $1
        if "Amina" in eto_011["text"]:
            dynamic_patterns.append(
                {
                    "id": "greeting_user",
                    "regex": "^(?:Bonjour|Hello),\\s*(.+)$",
                    "code": "SAF_UI_011",
                    "explain_code": "SAF_EXP_011",
                    "category": by_code["SAF_UI_011"]["category"],
                    "eto": {
                        "template": eto_011["text"].replace("Amina", "$1"),
                        "audio": eto_011["audio"],
                        "explain_text": exp_011.get("text", ""),
                        "explain_audio": exp_011.get("audio"),
                        "explain_fr": by_code.get("SAF_EXP_011", {}).get("fr", ""),
                        "explain_en": by_code.get("SAF_EXP_011", {}).get("en", ""),
                    },
                }
            )

    total_active_records = sum(len(grouped.get(l["dataset_folder"], {})) for l in active_langs)

    kb_payload = {
        "meta": {
            "dataset_name": "EXPORT_DATASET_MALOBA (Maloba / Ekwali)",
            "compiled_at": datetime.now(timezone.utc).isoformat(),
            "default_language": "eto",
            "supported_languages": [l["code"] for l in active_langs],
            "total_records": total_active_records,
            "total_audios": copied_audio_count,
            "exact_ui_entries_count": len(exact_ui),
            "by_code_count": len(by_code),
            "numbers_count": len(numbers),
            "commands_count": len(commands),
            "categories_breakdown": dict(sorted(category_counts.items())),
            "languages": languages_meta,
        },
        "exact_ui": exact_ui,
        "dynamic_patterns": dynamic_patterns,
        "numbers": numbers,
        "commands": commands,
        "by_code": by_code,
    }

    header = (
        "/**\n"
        " * =============================================================================\n"
        " * MALOBA ANYDOC — PRODUCTION MULTILINGUAL KNOWLEDGE BASE\n"
        " * =============================================================================\n"
        " * Auto-generated from EXPORT_DATASET_MALOBA by scripts/build_dataset_kb.py.\n"
        " * Contains verified human translations and local .webm audio references.\n"
        " * Do NOT edit manually; re-run `python3 scripts/build_dataset_kb.py`.\n"
        " * =============================================================================\n"
        " */\n"
    )
    js_body = f"window.SAFINUM_KB = {json.dumps(kb_payload, ensure_ascii=False, indent=2)};\n"
    KB_OUT_FILE.write_text(header + js_body, encoding="utf-8")

    print("Build complete:")
    print(f"  Output KB      : {KB_OUT_FILE}")
    print(f"  Active langs   : {[l['code'] for l in active_langs]}")
    print(f"  Total records  : {total_active_records}")
    print(f"  Bundled audios : {copied_audio_count} .webm files in {AUDIO_OUT_DIR}")
    print(f"  exact_ui keys  : {len(exact_ui)}")
    print(f"  by_code        : {len(by_code)}")
    print(f"  numbers keys   : {len(numbers)}")
    print(f"  commands       : {len(commands)}")


if __name__ == "__main__":
    build()


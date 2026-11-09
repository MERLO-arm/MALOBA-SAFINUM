"""
=============================================================================
SAFINUM WEB NUMBER ENGINE — 42-KEY AUDIO CORPUS GENERATOR (.OGG, -14 LUFS)
=============================================================================
Generates the 42 canonical pre-recorded audio assets (.ogg) for each supported
language ('fub', 'ewo', 'fr') inside:
  `safinum-extension/assets/audio/{lang}/{key}.ogg`

Audio Engineering Specifications:
  - Format: Ogg Opus (.ogg, 48kHz mono, 32kbps)
  - Silence Trimming: Start and end silence stripped via FFmpeg `silenceremove`
  - Loudness Normalization: EBU R128 / ITU-R BS.1770-4 `-14 LUFS` (`loudnorm=I=-14:TP=-1.5:LRA=11`)

All comments and documentation are strictly in English.
=============================================================================
"""

import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
AUDIO_ROOT = BASE_DIR / "safinum-extension" / "assets" / "audio"

CORPUS_PHONETICS = {
    "fub": {
        "num_0": "mééré",
        "num_1": "go-o",
        "num_2": "di-di",
        "num_3": "tati",
        "num_4": "nayi",
        "num_5": "djoyi",
        "num_6": "djéégo-o",
        "num_7": "djéédi-di",
        "num_8": "djéétati",
        "num_9": "djéénayi",
        "num_10": "sappo",
        "num_11": "sappo é go-o",
        "num_12": "sappo é di-di",
        "num_13": "sappo é tati",
        "num_14": "sappo é nayi",
        "num_15": "sappo é djoyi",
        "num_16": "sappo é djéégo-o",
        "num_17": "sappo é djéédi-di",
        "num_18": "sappo é djéétati",
        "num_19": "sappo é djéénayi",
        "num_20": "nôgass",
        "num_30": "tchappandé tati",
        "num_40": "tchappandé nayi",
        "num_50": "tchappandé djoyi",
        "num_60": "tchappandé djéégo-o",
        "num_70": "tchappandé djéédi-di",
        "num_80": "tchappandé djéétati",
        "num_90": "tchappandé djéénayi",
        "num_100": "téémèrré",
        "num_200": "téémèrré di-di",
        "num_300": "téémèrré tati",
        "num_400": "téémèrré nayi",
        "num_500": "téémèrré djoyi",
        "num_600": "téémèrré djéégo-o",
        "num_700": "téémèrré djéédi-di",
        "num_800": "téémèrré djéétati",
        "num_900": "téémèrré djéénayi",
        "scale_thousand": "oudjounéré",
        "scale_million": "miliyon",
        "scale_millions": "miliyongâdji",
        "connector_and": "é",
        "currency_cfa": "dalâdjé CFA",
    },
    "ewo": {
        "num_0": "zéro",
        "num_1": "fok",
        "num_2": "bè",
        "num_3": "lala",
        "num_4": "nyi",
        "num_5": "tân",
        "num_6": "saman",
        "num_7": "zamgbal",
        "num_8": "mwom",
        "num_9": "ébou",
        "num_10": "awom",
        "num_11": "awom ya fok",
        "num_12": "awom ya bè",
        "num_13": "awom ya lala",
        "num_14": "awom ya nyi",
        "num_15": "awom ya tân",
        "num_16": "awom ya saman",
        "num_17": "awom ya zamgbal",
        "num_18": "awom ya mwom",
        "num_19": "awom ya ébou",
        "num_20": "mèwom mèbè",
        "num_30": "mèwom mèlala",
        "num_40": "mèwom mènyi",
        "num_50": "mèwom mètân",
        "num_60": "mèwom saman",
        "num_70": "mèwom zamgbal",
        "num_80": "mèwom mwom",
        "num_90": "mèwom ébou",
        "num_100": "ntèt",
        "num_200": "mintèt mibè",
        "num_300": "mintèt milala",
        "num_400": "mintèt minyi",
        "num_500": "mintèt mitân",
        "num_600": "mintèt saman",
        "num_700": "mintèt zamgbal",
        "num_800": "mintèt mwom",
        "num_900": "mintèt ébou",
        "scale_thousand": "toyini",
        "scale_million": "miliyong",
        "scale_millions": "bémiliyong",
        "connector_and": "ya",
        "currency_cfa": "fala CFA",
    },
    "fr": {
        "num_0": "zéro",
        "num_1": "un",
        "num_2": "deux",
        "num_3": "trois",
        "num_4": "quatre",
        "num_5": "cinq",
        "num_6": "six",
        "num_7": "sept",
        "num_8": "huit",
        "num_9": "neuf",
        "num_10": "dix",
        "num_11": "onze",
        "num_12": "douze",
        "num_13": "treize",
        "num_14": "quatorze",
        "num_15": "quinze",
        "num_16": "seize",
        "num_17": "dix-sept",
        "num_18": "dix-huit",
        "num_19": "dix-neuf",
        "num_20": "vingt",
        "num_30": "trente",
        "num_40": "quarante",
        "num_50": "cinquante",
        "num_60": "soixante",
        "num_70": "soixante-dix",
        "num_80": "quatre-vingts",
        "num_90": "quatre-vingt-dix",
        "num_100": "cent",
        "num_200": "deux cents",
        "num_300": "trois cents",
        "num_400": "quatre cents",
        "num_500": "cinq cents",
        "num_600": "six cents",
        "num_700": "sept cents",
        "num_800": "huit cents",
        "num_900": "neuf cents",
        "scale_thousand": "mille",
        "scale_million": "million",
        "scale_millions": "millions",
        "connector_and": "et",
        "currency_cfa": "francs CFA",
    },
}


def synthesize_one(lang: str, key: str, utterance: str) -> str:
    lang_dir = AUDIO_ROOT / lang
    lang_dir.mkdir(parents=True, exist_ok=True)
    out_ogg = lang_dir / f"{key}.ogg"

    with tempfile.NamedTemporaryFile(suffix=".aiff", delete=False) as tmp:
        tmp_aiff = Path(tmp.name)

    try:
        subprocess.run(
            ["/usr/bin/say", "-v", "Thomas", "-r", "180", "-o", str(tmp_aiff), utterance],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        af_chain = (
            "silenceremove=start_periods=1:start_silence=0.005:start_threshold=-42dB,"
            "areverse,"
            "silenceremove=start_periods=1:start_silence=0.015:start_threshold=-42dB,"
            "areverse,"
            "loudnorm=I=-14:TP=-1.5:LRA=11"
        )
        subprocess.run(
            [
                "/opt/homebrew/bin/ffmpeg",
                "-y",
                "-i",
                str(tmp_aiff),
                "-af",
                af_chain,
                "-c:a",
                "libopus",
                "-b:a",
                "32k",
                str(out_ogg),
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    finally:
        if tmp_aiff.exists():
            tmp_aiff.unlink()

    return f"{lang}/{key}.ogg"


def main() -> None:
    tasks = []
    for lang, mapping in CORPUS_PHONETICS.items():
        assert len(mapping) == 42, f"Expected 42 keys for {lang}, got {len(mapping)}"
        for key, phrase in mapping.items():
            tasks.append((lang, key, phrase))

    print(f"Generating {len(tasks)} silence-trimmed -14 LUFS .ogg files...", flush=True)
    completed = 0
    for lang, key, phrase in tasks:
        synthesize_one(lang, key, phrase)
        completed += 1
        if completed % 21 == 0:
            print(f"  Progress: {completed}/{len(tasks)} files generated...", flush=True)

    print(f"Successfully generated {completed}/{len(tasks)} audio files in {AUDIO_ROOT}", flush=True)


if __name__ == "__main__":
    main()

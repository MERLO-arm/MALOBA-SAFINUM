#!/usr/bin/env python3
"""
Builds the 42-key Eton ('eto') number audio corpus (.ogg, 48kHz mono, -14 LUFS)
strictly from the real human-recorded .webm files listed in:
  EXPORT_DATASET_MALOBA/eton/eton_traductions.json

Zero synthetic TTS is used:
  - 13 keys are direct 1:1 conversions of standalone human recordings.
  - 9 base morphemes/words are segmented from multi-word human recordings.
  - 19 compound keys (11-19, remaining tens/hundreds) are stitched from the
    same human speaker's real morpheme recordings.
  - currency_cfa.ogg is a 30ms silent marker (since Eton number recordings
    intentionally omit 'FCFA' so the number stitcher remains reusable).
"""

import json
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ETON_JSON = ROOT / "EXPORT_DATASET_MALOBA" / "eton" / "eton_traductions.json"
ETON_AUDIOS_DIR = ROOT / "EXPORT_DATASET_MALOBA" / "eton" / "audios"
OUT_DIR = ROOT / "safinum-extension" / "assets" / "audio" / "eto"

LOUDNORM = "loudnorm=I=-14:TP=-1.5:LRA=11"
TRIM_SILENCE = (
    "silenceremove=start_periods=1:start_duration=0.02:start_threshold=-48dB,"
    "areverse,"
    "silenceremove=start_periods=1:start_duration=0.02:start_threshold=-48dB,"
    "areverse"
)


def run_ffmpeg(args: list[str]) -> None:
    res = subprocess.run(["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", *args], capture_output=True, text=True)
    if res.returncode != 0:
        raise RuntimeError(f"ffmpeg failed: {' '.join(args)}\n{res.stderr}")


def load_eton_map() -> dict[str, Path]:
    with open(ETON_JSON, encoding="utf-8-sig") as f:
        data = json.load(f)
    by_code: dict[str, Path] = {}
    for item in data:
        code = item.get("situation_code", "")
        local_rel = item.get("fichier_audio_local", "").replace("\\", "/")
        if not code or not local_rel:
            continue
        filename = Path(local_rel).name
        full_path = ETON_AUDIOS_DIR / filename
        if full_path.exists():
            # Prefer take3/take2/latest if multiple exist, or keep first valid
            by_code[code] = full_path
    return by_code


def to_wav(src: Path, dst: Path, start: float | None = None, end: float | None = None, trim: bool = True) -> None:
    cmd = ["-i", str(src)]
    if start is not None:
        cmd.extend(["-ss", f"{start:.3f}"])
    if end is not None:
        cmd.extend(["-to", f"{end:.3f}"])
    cmd.extend(["-ar", "48000", "-ac", "1"])
    if trim:
        cmd.extend(["-af", TRIM_SILENCE])
    else:
        cmd.extend(["-af", "afade=t=in:ss=0:d=0.010"])
    cmd.append(str(dst))
    run_ffmpeg(cmd)


def wav_to_ogg(src_wav: Path, dst_ogg: Path) -> None:
    run_ffmpeg([
        "-i", str(src_wav),
        "-ar", "48000",
        "-ac", "1",
        "-af", LOUDNORM,
        "-c:a", "libopus",
        "-b:a", "32k",
        str(dst_ogg),
    ])


def concat_wavs_to_ogg(wavs: list[Path], dst_ogg: Path, gap_wav: Path) -> None:
    inputs: list[str] = []
    filter_parts: list[str] = []
    idx = 0
    for i, w in enumerate(wavs):
        inputs.extend(["-i", str(w)])
        filter_parts.append(f"[{idx}:a]")
        idx += 1
        if i < len(wavs) - 1:
            inputs.extend(["-i", str(gap_wav)])
            filter_parts.append(f"[{idx}:a]")
            idx += 1
    n_segments = idx
    filter_complex = f"{''.join(filter_parts)}concat=n={n_segments}:v=0:a=1,{LOUDNORM}[out]"
    run_ffmpeg([
        *inputs,
        "-filter_complex", filter_complex,
        "-map", "[out]",
        "-ar", "48000",
        "-ac", "1",
        "-c:a", "libopus",
        "-b:a", "32k",
        str(dst_ogg),
    ])


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    code_map = load_eton_map()

    required_codes = [
        "SAF_NUM_002", "SAF_NUM_004", "SAF_NUM_005", "SAF_NUM_007",
        "SAF_NUM_008", "SAF_NUM_009", "SAF_NUM_017", "SAF_NUM_018",
        "SAF_NUM_019", "SAF_NUM_020", "SAF_NUM_021", "SAF_NUM_022",
        "SAF_NUM_023", "SAF_NUM_024", "SAF_NUM_025", "SAF_NUM_026",
        "SAF_NUM_027", "SAF_NUM_029", "SAF_NUM_030", "SAF_NUM_033",
        "SAF_NUM_035",
    ]
    for code in required_codes:
        if code not in code_map:
            raise FileNotFoundError(f"Missing required recording {code} in {ETON_JSON}")

    with tempfile.TemporaryDirectory() as tmp:
        tmp_dir = Path(tmp)
        wavs: dict[str, Path] = {}

        # Short 35ms natural gap for stitched compounds
        gap_wav = tmp_dir / "gap.wav"
        run_ffmpeg(["-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", "0.035", str(gap_wav)])

        # 1. Direct 1:1 standalone recordings
        direct_map = {
            "num_0": "SAF_NUM_026",          # zǝzǝ
            "num_1": "SAF_NUM_017",          # Pwág
            "num_2": "SAF_NUM_018",          # bā
            "num_3": "SAF_NUM_019",          # lāá
            "num_4": "SAF_NUM_020",          # na
            "num_5": "SAF_NUM_021",          # tán
            "num_6": "SAF_NUM_022",          # samna
            "num_7": "SAF_NUM_023",          # zaŋmál
            "num_8": "SAF_NUM_024",          # ŋmam
            "num_9": "SAF_NUM_025",          # ibuu
            "num_100": "SAF_NUM_007",        # Ǹtɛd
            "num_200": "SAF_NUM_009",        # Mintɛd míbā
            "scale_thousand": "SAF_NUM_027", # Twágsîn
        }
        for key, code in direct_map.items():
            w = tmp_dir / f"{key}.wav"
            to_wav(code_map[code], w)
            wavs[key] = w
            wav_to_ogg(w, OUT_DIR / f"{key}.ogg")

        # 2. Segmented words/morphemes from multi-word human recordings
        # Note: convert to full normalized-timestamp wav first before slicing
        def slice_from(code: str, out_key: str, start: float, end: float) -> Path:
            full_wav = tmp_dir / f"full_{code}.wav"
            if not full_wav.exists():
                run_ffmpeg(["-i", str(code_map[code]), "-ar", "48000", "-ac", "1", str(full_wav)])
            w = tmp_dir / f"{out_key}.wav"
            to_wav(full_wav, w, start=start, end=end, trim=False)
            wavs[out_key] = w
            return w

        # SAF_NUM_029: Twágsîn ɛwóm -> ɛwóm (num_10)
        wav_to_ogg(slice_from("SAF_NUM_029", "num_10", 0.90, 1.68), OUT_DIR / "num_10.ogg")
        # SAF_NUM_030: Twágsîn mǝwóm bā -> mǝwóm bā (num_20)
        wav_to_ogg(slice_from("SAF_NUM_030", "num_20", 0.93, 1.90), OUT_DIR / "num_20.ogg")
        # SAF_NUM_005: Twágsîn mǝwóm tān -> mǝwóm tān (num_50) & mǝwóm (tens_base)
        wav_to_ogg(slice_from("SAF_NUM_005", "num_50", 1.07, 2.18), OUT_DIR / "num_50.ogg")
        slice_from("SAF_NUM_005", "tens_base", 1.07, 1.75)
        # SAF_NUM_004: Ǹtɛd twágsîn ee twágsîn mǝwóm ŋmâm -> mǝwóm ŋmâm (num_80)
        wav_to_ogg(slice_from("SAF_NUM_004", "num_80", 2.05, 3.32), OUT_DIR / "num_80.ogg")
        # SAF_NUM_008: Twágsîn íbā ee mintɛd mítān -> mintɛd mítān (num_500) & mintɛd (hundreds_base)
        wav_to_ogg(slice_from("SAF_NUM_008", "num_500", 1.55, 2.75), OUT_DIR / "num_500.ogg")
        slice_from("SAF_NUM_008", "hundreds_base", 1.55, 1.98)
        # SAF_NUM_035: ... mintɛd zaŋmál ... -> mintɛd zaŋmál (num_700)
        wav_to_ogg(slice_from("SAF_NUM_035", "num_700", 5.60, 6.56), OUT_DIR / "num_700.ogg")
        # SAF_NUM_002: Twágsîn ɛwóm ee ítān -> ee (connector_and)
        wav_to_ogg(slice_from("SAF_NUM_002", "connector_and", 1.12, 1.40), OUT_DIR / "connector_and.ogg")
        # SAF_NUM_033: Miliɔ́ŋ mwág -> Miliɔ́ŋ (scale_million & scale_millions)
        million_w = slice_from("SAF_NUM_033", "scale_million", 0.36, 1.05)
        wav_to_ogg(million_w, OUT_DIR / "scale_million.ogg")
        wav_to_ogg(million_w, OUT_DIR / "scale_millions.ogg")

        # 3. Compound numbers 11..19 (ɛwóm ee <unit>)
        for u in range(1, 10):
            concat_wavs_to_ogg(
                [wavs["num_10"], wavs["connector_and"], wavs[f"num_{u}"]],
                OUT_DIR / f"num_{10 + u}.ogg",
                gap_wav,
            )

        # 4. Remaining tens (30, 40, 60, 70, 90): mǝwóm + <unit>
        for tens_val, unit_key in [(30, "num_3"), (40, "num_4"), (60, "num_6"), (70, "num_7"), (90, "num_9")]:
            concat_wavs_to_ogg(
                [wavs["tens_base"], wavs[unit_key]],
                OUT_DIR / f"num_{tens_val}.ogg",
                gap_wav,
            )

        # 5. Remaining hundreds (300, 400, 600, 800, 900): mintɛd + <unit>
        for hund_val, unit_key in [(300, "num_3"), (400, "num_4"), (600, "num_6"), (800, "num_8"), (900, "num_9")]:
            concat_wavs_to_ogg(
                [wavs["hundreds_base"], wavs[unit_key]],
                OUT_DIR / f"num_{hund_val}.ogg",
                gap_wav,
            )

        # 6. currency_cfa.ogg: 30ms clean silence (Eton number recordings omit FCFA)
        run_ffmpeg([
            "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", "0.030",
            "-c:a", "libopus", "-b:a", "32k",
            str(OUT_DIR / "currency_cfa.ogg"),
        ])

    ogg_count = len(list(OUT_DIR.glob("*.ogg")))
    print(f"Successfully generated {ogg_count} real-human Eton .ogg files in {OUT_DIR}")


if __name__ == "__main__":
    main()

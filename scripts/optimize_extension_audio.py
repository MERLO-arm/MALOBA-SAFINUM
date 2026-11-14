#!/usr/bin/env python3
"""
=============================================================================
MALOBA ANYDOC — EXTENSION AUDIO OPTIMIZER (.WEBM OPUS SPEECH)
=============================================================================
Compresses runtime `.webm` speech files in `safinum-extension/assets/audio/`
using Opus VoIP/speech profile (24 kbps VBR mono) so the packaged extension
stays well below the 10 MB submission limit while preserving voice clarity.

Original master recordings in `EXPORT_DATASET_MALOBA/` are never modified.
=============================================================================
"""

from __future__ import annotations

import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT_DIR / "safinum-extension" / "assets" / "audio" / "eton"


def optimize_file(webm_path: Path) -> tuple[int, int]:
    before = webm_path.stat().st_size
    with tempfile.NamedTemporaryFile(suffix=".webm", delete=False) as tmp:
        tmp_path = Path(tmp.name)

    try:
        res = subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-hide_banner",
                "-loglevel",
                "error",
                "-i",
                str(webm_path),
                "-vn",
                "-c:a",
                "libopus",
                "-b:a",
                "24k",
                "-vbr",
                "on",
                "-application",
                "voip",
                "-ac",
                "1",
                str(tmp_path),
            ],
            capture_output=True,
            text=True,
        )
        if res.returncode != 0:
            raise RuntimeError(f"ffmpeg failed on {webm_path.name}: {res.stderr}")

        after = tmp_path.stat().st_size
        if after <= 1000:
            raise RuntimeError(f"Optimized file too small ({after}B): {webm_path.name}")

        if after < before:
            tmp_path.replace(webm_path)
            return before, after
        return before, before
    finally:
        if tmp_path.exists():
            tmp_path.unlink(missing_ok=True)


def main() -> None:
    files = sorted(AUDIO_DIR.glob("*.webm"))
    if not files:
        raise FileNotFoundError(f"No .webm files found in {AUDIO_DIR}")

    total_before = 0
    total_after = 0
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = [pool.submit(optimize_file, p) for p in files]
        for fut in as_completed(futures):
            b, a = fut.result()
            total_before += b
            total_after += a

    print(
        f"Optimized {len(files)} .webm files: "
        f"{total_before / (1024 * 1024):.2f} MB -> {total_after / (1024 * 1024):.2f} MB"
    )


if __name__ == "__main__":
    main()

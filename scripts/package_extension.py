#!/usr/bin/env python3
"""
=============================================================================
MALOBA ANYDOC — CHROME EXTENSION PACKAGER (.ZIP)
=============================================================================
Packages `safinum-extension/` into a clean, store-ready `.zip` archive in
`dist/maloba-anydoc-v<version>.zip`, excluding dev-only and OS files.
=============================================================================
"""

from __future__ import annotations

import json
import zipfile
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
EXT_DIR = ROOT_DIR / "safinum-extension"
DIST_DIR = ROOT_DIR / "dist"

EXCLUDED_NAMES = {".DS_Store", "Thumbs.db", "desktop.ini", "popup.input.css"}


def main() -> None:
    manifest = json.loads((EXT_DIR / "manifest.json").read_text(encoding="utf-8"))
    version = manifest.get("version", "1.0.0")

    DIST_DIR.mkdir(parents=True, exist_ok=True)
    out_zip = DIST_DIR / f"maloba-anydoc-v{version}.zip"

    file_count = 0
    with zipfile.ZipFile(out_zip, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for path in sorted(EXT_DIR.rglob("*")):
            if not path.is_file():
                continue
            if path.name in EXCLUDED_NAMES or path.suffix in {".pyc", ".map"}:
                continue
            arcname = path.relative_to(EXT_DIR)
            zf.write(path, arcname)
            file_count += 1

    with zipfile.ZipFile(out_zip, "r") as zf:
        bad = zf.testzip()
        if bad is not None:
            raise RuntimeError(f"Archive corruption detected at: {bad}")

    size_mb = out_zip.stat().st_size / (1024 * 1024)
    print(f"Packaged {file_count} files -> {out_zip.relative_to(ROOT_DIR)} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    main()

#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# package.sh  — Build the portfolio and zip it for deployment
#
# Usage:
#   chmod +x scripts/package.sh
#   ./scripts/package.sh
#
# Output:
#   portfolio-dist.zip  (static export, ready to upload to any static host)
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST_ZIP="$ROOT/portfolio-dist.zip"

echo "▶  Installing dependencies..."
npm --prefix "$ROOT" ci --silent

echo "▶  Building static export (next build)..."
npm --prefix "$ROOT" run build

echo "▶  Zipping /out → portfolio-dist.zip..."
rm -f "$DIST_ZIP"
(cd "$ROOT" && zip -r "$DIST_ZIP" out/ --quiet)

echo "✅  Done! Deploy portfolio-dist.zip"
echo "    Upload the contents of /out to any static host:"
echo "    • Netlify: drag-drop the /out folder"
echo "    • Vercel : vercel --prod (auto-detected)"
echo "    • GitHub Pages: npm run deploy"
echo "    • Apache/Nginx: copy /out/* to your web root"

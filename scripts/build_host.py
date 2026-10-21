"""Build and check the exact output deployed by Netlify or Cloudflare Pages."""
from pathlib import Path
import shutil
import subprocess
import sys

root=Path(__file__).resolve().parents[1]
node=shutil.which('node')
if not node:
    raise SystemExit('Node.js is required for the JSON integrity check. Use the hosting build image with Node.js enabled.')
for command in ([sys.executable,'build.py'],[sys.executable,'scripts/verify_site.py'],[node,'scripts/verify-json.mjs']):
    subprocess.run(command,cwd=root,check=True)
print('Build and deployment checks passed.')

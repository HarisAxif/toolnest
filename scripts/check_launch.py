"""Exercise production/preview builds, then restore the configured default build."""
import os,subprocess
from pathlib import Path
base={**os.environ,'SITE_URL':'https://toolnest-test.pages.dev','SUPPORT_EMAIL':'support@example.com','PUBLIC_LAUNCH':'true','CONTEXT':'production','PRODUCTION_BRANCH':'main','GOOGLE_SITE_VERIFICATION':'sample-token-for-tests'}
def build(env):return subprocess.run(['python','build.py'],env=env,capture_output=True,text=True)
try:
 result=build(base);assert result.returncode==0,result.stderr
 html=Path('dist/tools/final-grade-calculator/index.html').read_text();assert 'content="index,follow"' in html
 assert 'https://toolnest-test.pages.dev/tools/final-grade-calculator/' in html
 assert 'content="sample-token-for-tests"' in html
 assert 'Sitemap: https://toolnest-test.pages.dev/sitemap.xml' in Path('dist/robots.txt').read_text()
 assert 'support@example.com' in Path('dist/contact/index.html').read_text()
 assert 'href="mailto:support@example.com"' in Path('dist/contact/index.html').read_text()
 assert 'href="mailto:support@example.com"' in Path('dist/privacy/index.html').read_text()
 assert 'private preview' not in Path('dist/privacy/index.html').read_text()
 assert 'noindex,nofollow' in Path('dist/404.html').read_text()
 assert build({**base,'CONTEXT':'deploy-preview'}).returncode==0
 assert 'noindex,nofollow' in Path('dist/index.html').read_text()
 assert build({**base,'SUPPORT_EMAIL':''}).returncode!=0
 assert build({**base,'SITE_URL':'https://user:secret@example.com'}).returncode!=0
 assert build({**base,'CF_PAGES':'1','CF_PAGES_BRANCH':'feature-branch'}).returncode==0
 assert 'noindex,nofollow' in Path('dist/index.html').read_text()
 no_origin={**base,'CF_PAGES':'1','CF_PAGES_BRANCH':'main'};no_origin.pop('SITE_URL')
 assert build(no_origin).returncode!=0
 assert build({**os.environ,'PUBLIC_LAUNCH':'false'}).returncode==0
 assert 'noindex,nofollow' in Path('dist/index.html').read_text()
 assert 'Disallow: /' in Path('dist/robots.txt').read_text()
 print('PASS: production indexing, stable canonicals/sitemap, verification/contact insertion, preview noindex, missing-contact and credentialed-origin guards, Cloudflare branch/origin checks.')
finally:
 subprocess.run(['python','build.py'],check=True)

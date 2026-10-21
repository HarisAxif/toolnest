# Toolnest on Cloudflare Pages

Public origin: https://toolnest-haris.pages.dev/. Project: toolnest-haris. GitHub source: HarisAxif/toolnest, branch pages.

## Verified configuration

- Production branch: pages
- Framework preset: None
- Build command: python3 scripts/build_host.py
- Build output: dist
- Root directory: repository root (blank in dashboard)

Wrangler.json is Pages-specific and declares pages_build_output_dir as ./dist. It contains no Worker assets/main fields. The initial build succeeded but returned HTTP 404 because the dashboard build output was blank; the owner corrected it to dist and the live homepage was verified in the browser on 21 October 2026.

Use the stable project origin for public links, Search Console and AdSense. A prefix such as 7bb265bf identifies one deployment and should not be used as the site's canonical address. DEPLOYMENT.json stores the stable origin and approved contact. Build.py uses it ahead of CF_PAGES_URL and keeps nonproduction branches noindex.

Commit source and generated dist files together. Check the Cloudflare Pages result, not the separate legacy Workers Builds result for this branch. The old Worker remains served from main until a replacement redirect is verified. The private Sites preview keeps its owner-only audience and must be built with PUBLIC_LAUNCH=false.

AdSense's signup field accepted the Pages hostname, but signup, review and approval are separate and remain pending. The new Search Console property also needs its own verification/submission. Keep the Google verification tag during maintenance. Do not activate ads until the actual publisher account, consent controls and privacy updates are ready.

Sources:
https://developers.cloudflare.com/pages/functions/wrangler-configuration/
https://developers.cloudflare.com/pages/get-started/git-integration/

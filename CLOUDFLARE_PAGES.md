# Toolnest on Cloudflare Pages

Project: toolnest-haris. Production domain: https://toolnest-haris.pages.dev/. Repository: HarisAxif/toolnest, production branch pages. The owner created this project on 21 October 2026.

The initial deployment reported success but the public homepage returned HTTP 404. Commit 84b4c775917617f98772319c86274070009718e7 added a Pages-specific wrangler.json declaring pages_build_output_dir as ./dist. The repository contains dist/index.html and its required assets. This addresses a suspected asset-directory mismatch; verify a new deployment and its HTTP response before reporting the 404 fixed.

Required build settings for this existing project:

| Setting | Value |
| --- | --- |
| Production branch | pages |
| Framework preset | None |
| Build command | python3 scripts/build_host.py |
| Build output directory | dist (also declared in wrangler.json) |
| Root directory | Repository root (leave blank) |

The random prefix such as 7bb265bf identifies one deployment. Use the stable production domain for the public website and AdSense, not a deployment-specific URL.

The Pages branch stays noindex until its public homepage is verified and the migration is finalized. Then configure the confirmed stable origin in DEPLOYMENT.json, regenerate canonical/sitemap URLs, enable production indexing, and verify the new Search Console URL-prefix property. AdSense's signup form accepted the Pages hostname without the earlier top-level-domain error, but the account has not been created and no review/approval is confirmed. Keep the previous Worker available until the replacement works.

Source:
https://developers.cloudflare.com/pages/functions/wrangler-configuration/

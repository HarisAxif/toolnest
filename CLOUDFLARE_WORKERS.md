# Deploy the existing Cloudflare Workers project

The screenshot supplied on 21 October 2026 shows a Workers Build with:

- Repository: HarisAxif/toolnest, branch main
- Build command: None
- Deploy command: npx wrangler deploy
- Root directory: /

This is a Workers project, rather than a Pages project. The source now supports this exact deployment route. wrangler.json declares the toolnest Worker and points its static assets at dist/. The generated website is checked into GitHub, so a build command is not required for the current deployment.

## Existing dashboard settings

Keep the deploy command as `npx wrangler deploy`. Keep the root at the repository root. Do not change to `wrangler pages deploy`: that command requires a separate Pages project. The expected Worker name is toolnest, matching the repository and build-token label shown in the screenshot.

Pushes to the connected production branch should start a new build. Verify that the build uses the newest commit; retrying an older failed commit can repeat the original error. The prior build's detailed logs were not provided, so any additional account/token issue must be diagnosed from the latest logs rather than guessed.

## Source maintenance

After changing Python content or templates, run `python3 scripts/build_host.py` and commit both source and the regenerated dist/ files. This is required because the current Workers Build has no build command. The script validates the generated pages and JSON formatting behavior before a source update is published.

An optional later improvement is to set the Workers Build command to `python3 scripts/build_host.py`. Do not rely on a Wrangler custom build command for Workers Builds: Cloudflare's documentation says Workers Builds currently does not honor that custom-build setting.

## Public launch

The owner authorized the public support email and enabling search indexing on 21 October 2026. The production build is configured with index,follow on content pages and an Allow rule plus the sitemap address in robots.txt. The custom 404 stays noindex. Enabling crawling does not prove that Google has indexed the site or approved AdSense.

The owner supplied https://toolnest.harisaxif.workers.dev as the stable origin. DEPLOYMENT.json records it, and build.py uses it by default for canonical URLs and the sitemap. DEPLOYMENT.json records public_contact as harisaxif@gmail.com and public_launch_enabled as true, so normal production rebuilds preserve the authorized launch settings. SUPPORT_EMAIL and PUBLIC_LAUNCH environment variables can explicitly override these defaults. Validate and commit regenerated output. The separate owner-private Sites preview must be built with PUBLIC_LAUNCH=false after the public output has been captured for GitHub. Runtime Worker variables alone do not rewrite static HTML; a source build is required. Do not publish a guessed contact.

No Worker script, dynamic API, database, server upload pipeline or paid subscription is added. Cloudflare documents static-asset requests as free and unlimited, subject to platform terms and asset/build limits. No paid plan or payment setting is changed by this source fix.

## Verification limits

Local build, link/schema checks, asset presence and JSON configuration are verified. GitHub's Workers Builds: toolnest check confirmed success for commit e9af6146d9fd7092a62f8d009247cd27a53c9b59. The live homepage, word counter, final-grade calculator and JSON formatter were verified in the cloud browser on 21 October 2026 after the earlier browser timeout was resolved. A separate server-side fetch returned HTTP 403, which did not prevent browser access. Future updates should verify the latest commit's build result, then test the public tools when access permits.

Sources:
https://developers.cloudflare.com/workers/static-assets/
https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
https://developers.cloudflare.com/workers/ci-cd/builds/configuration/

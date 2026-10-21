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

This first deploy uses the existing noindex preview content. It is for verifying that deployment works. It is not yet an AdSense-ready or search-indexed public launch.

Once the actual stable workers.dev URL and authorized public support contact are known, regenerate the checked-in output with SITE_URL set to that stable HTTPS origin, SUPPORT_EMAIL set to the authorized address, and PUBLIC_LAUNCH=true. Validate and commit the new output. Runtime Worker variables alone do not rewrite static HTML; a source build is required. Do not publish a guessed address or contact.

No Worker script, dynamic API, database, server upload pipeline or paid subscription is added. Cloudflare documents static-asset requests as free and unlimited, subject to platform terms and asset/build limits. No paid plan or payment setting is changed by this source fix.

## Verification limits

Local build, link/schema checks, asset presence and JSON configuration are verified. The authenticated Cloudflare dashboard is not accessible through the current cloud-browser login, so the actual remote deployment must be confirmed from the new build result and public URL. No successful deployment is claimed before that evidence exists.

Sources:
https://developers.cloudflare.com/workers/static-assets/
https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
https://developers.cloudflare.com/workers/ci-cd/builds/configuration/

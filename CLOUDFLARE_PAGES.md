# Stage Toolnest on Cloudflare Pages

The current Workers address contains an extra hostname label and AdSense's signup form rejected it. This pages branch prepares a separate Cloudflare Pages project without changing main or its active Worker. The owner created Cloudflare Pages project toolnest-haris; its production alias is https://toolnest-haris.pages.dev. The initial deployment check passed, but the owner observed HTTP 404 at the alias. The Pages-specific output configuration addresses a suspected asset-directory mismatch. Confirm actual HTTP behavior before calling this resolved.

In your signed-in Cloudflare dashboard choose Workers & Pages > Create application > Pages > Connect to Git. Select HarisAxif/toolnest, then use:

| Setting | Value |
| --- | --- |
| Project name | toolnest-haris, or another available name |
| Production branch | pages |
| Framework preset | None |
| Build command | python3 scripts/build_host.py |
| Build output directory | dist |
| Root directory | Repository root (leave blank) |

Choose Save and Deploy. This is a Pages deployment, with no npx wrangler deploy command. This branch uses a Pages-specific wrangler.json with pages_build_output_dir set to ./dist. It contains no Worker assets/main fields, so the asset directory is explicit in source. The build command is required: do not deploy the checked-in dist without rebuilding.

The initial Pages build deliberately stays noindex until Cloudflare returns the actual stable *.pages.dev address. Send that production address to finish the migration: record it in DEPLOYMENT.json, enable public_launch_enabled, regenerate and deploy, verify page/canonical/sitemap behavior, create and verify the new Search Console URL-prefix property, and submit its sitemap. Keep the previous Worker available until the replacement is verified. Do not guess the final hostname or report an AdSense approval based on hostname validation alone.

Production builds automatically use source_branch=pages to distinguish Cloudflare production from previews. A different branch or an explicit PUBLIC_LAUNCH=false remains noindex. On the separate owner-private Sites preview keep PUBLIC_LAUNCH=false and preserve owner-only access.

AdSense allows sites on supported public-suffix platforms, but the actual Pages hostname must still pass AdSense's validation and site review. A Pages deployment and a validated hostname are not approval or a revenue guarantee. No paid domain, hosting upgrade, database, API or advertisement is activated by preparing this branch.

Sources:
https://developers.cloudflare.com/pages/get-started/git-integration/
https://support.google.com/adsense/answer/12170421?hl=en
https://publicsuffix.org/list/public_suffix_list.dat

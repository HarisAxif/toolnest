# Toolnest

Production: https://toolnest-haris.pages.dev/

Source: HarisAxif/toolnest, branch pages. The Cloudflare Pages project is toolnest-haris and publishes dist/. The former Workers site uses the separate main branch; it remains available until a verified redirect is configured. The linked Sites project is an owner-private preview.

## Build and publish

Run python3 scripts/build_host.py. DEPLOYMENT.json supplies the stable canonical origin, approved support address, production branch and public indexing setting. Explicit environment variables can override these values. Commit source and generated dist files together to the pages branch. Check the Cloudflare Pages deployment result for the new commit, then verify the public URL. See CLOUDFLARE_PAGES.md and SEO_OPERATIONS.md.

Run python3 scripts/check_launch.py when changing launch configuration. It verifies production/preview indexing, stable origins, contact links and input guards, then restores the configured default output.

## Private preview

Build with PUBLIC_LAUNCH=false for the separate owner-private Sites preview. Capture the public GitHub output before making the preview build; never overwrite the production GitHub dist with noindex preview output. Preserve the existing Sites project ID and owner-only audience.

## Google setup

The previous Workers Search Console property was verified. The new Pages property requires verification/submission in Google; its verification meta tag is preserved in DEPLOYMENT.json. AdSense's signup URL field accepted the Pages address, but account creation and site review remain pending. No ads, tracking scripts, paid API, database or hosting upgrade are activated.


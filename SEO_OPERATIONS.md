# Toolnest SEO maintenance

## Current production

Maintain HarisAxif/toolnest on the pages branch for https://toolnest-haris.pages.dev/. The owner created Cloudflare Pages project toolnest-haris; production branch pages, build command python3 scripts/build_host.py, output dist, repository root. Git pushes trigger Pages builds. The old Worker remains on main and is a legacy site, not the source to edit for Pages.

The owner authorized publishing harisaxif@gmail.com as the support/privacy contact and enabling public indexing. DEPLOYMENT.json records the stable production origin. Public content pages should have index,follow; robots.txt should allow crawling and link to the production sitemap. The 404 remains noindex. Build.py prefers the configured stable origin over Cloudflare's deployment-specific CF_PAGES_URL, so future builds must not reintroduce hashed canonical URLs.

The browser verified the Pages homepage and live word counting on 21 October 2026 after the output-directory correction. Check the actual current Cloudflare Pages build result and affected public pages after changes. A green deployment check alone does not prove HTTP availability, as the initial incorrect output configuration showed.

## Separate private preview

The linked Sites project remains owner-private. Open its current source through the Sites skill before editing it; preserve identity and access. Capture production output for the GitHub commit first, then build the preview with PUBLIC_LAUNCH=false and publish it privately. Do not upload that preview's noindex dist output to the production Pages branch.

## Ongoing work

Prioritize useful English-language image, writing, study and developer workflows for people in the US, UK, Canada and Australia. Research meaningful changes using primary sources. Do not invent search volumes, rankings, RPM, traffic or country distribution. Prefer improving tested tools and original guides to duplicate country/KB/year pages or unrelated trends. Do not change publication dates merely for freshness.

Read the current pages branch before changes and preserve newer owner edits. Use normal fast-forward commits with an expected head and readback. Regenerate source output and run python3 scripts/build_host.py. Run the launch checks when changing indexing or origin settings. Publish only passing changes. Batch ordinary content updates at most twice weekly, unless fixing a genuine broken tool or factual error. Do not deploy merely because a scheduled check ran.

## Search Console and AdSense

The old Workers URL-prefix property was verified using the HTML tag preserved in DEPLOYMENT.json. The new Pages property is https://toolnest-haris.pages.dev/. Confirm its actual ownership and sitemap status in Google rather than assuming the old verification covers it. Preserve the supplied verification tag. The old property's sitemap was submitted but reported Couldn't fetch, despite successful live fetch tests. A manual indexing request returned a daily quota error; do not bypass or repeatedly retry that quota.

The Pages hostname passed AdSense's signup form URL check. Account signup, legal terms, payment/identity details, website connection and Google review remain pending. Do not create accounts or accept terms unattended. Use the real publisher ID for verification/ads.txt when available. Before activating advertisements, configure suitable consent controls and update privacy notices. Never collect or transmit local tool inputs.

## Budget and reporting

Keep domains, hosting, APIs and SEO services at zero paid cost. Do not enable upgrades, paid campaigns or paid APIs. Report substantive source-backed improvements, validation and new blockers. Avoid repeating unchanged setup issues. A saved automation does not prove that a future run executed, and a passed URL field does not constitute AdSense approval or a revenue guarantee.

# Ongoing Toolnest SEO maintenance

## Owner request

Keep the site useful and improve relevant SEO when meaningful events or platform changes create a real opportunity. Prioritize an English-speaking audience including the US, UK, Canada and Australia. Keep hosting, domains, APIs and SEO services within a zero-paid-service budget. Do not promise rankings, country mix, approval or revenue.

## Current deployment boundary

The production source repository is https://github.com/HarisAxif/toolnest on branch main. GitHub access is connected and source upload/readback is part of setup verification. DEPLOYMENT.json records the hosting connection state. The linked Sites publication is an owner-private preview, with its own managed source repository. Future runs must obtain current GitHub source through the connected GitHub app and open the private preview through the Sites workflow instead of relying on the original scratch checkout persisting.

The owner connected HarisAxif/toolnest to a Cloudflare Workers Build, with no build command and npx wrangler deploy. The previous deployment failed. The actual public address, Search Console property and public support contact remain unknown. GitHub is connected as HarisAxif and the toolnest repository exists. No analytics property or AdSense account is configured. Do not invent their status or retrieve unrelated personal accounts to guess a public contact address.

A schedule linked to this Site can research and maintain source through GitHub and the preview through the Sites workflow. A Cloudflare Workers Git deployment is connected, but a successful deploy has not yet been verified. Read CLOUDFLARE_WORKERS.md and DEPLOYMENT.json for its settings. Once the owner connects GitHub to the selected hosting provider, commits to main can trigger that provider’s builds. Verify an actual deployment before treating it as a working unattended publisher. Preserve the provider’s actual access settings and record the verified target in DEPLOYMENT.json.

## Per-run workflow

1. Read the linked Site's current status/access through the Sites skill and the current main branch of HarisAxif/toolnest through GitHub. GitHub is authoritative for the production source. Preserve any owner edits; do not overwrite a newer branch head with a stale local copy. Use supported GitHub file/tree/commit/ref operations with the expected branch SHA, then read back the result. Open the private preview’s current source through the Sites skill before applying matching changes. Reuse project identity. Refresh the native short-lived repository credential as needed; never persist credentials.
2. Read SEO_PLAN.md and these instructions from the current pushed source. Check whether public hosting, support contact and measurement are now configured. Do not repeatedly notify about unchanged known launch blockers.
3. Check primary Google Search/AdSense and relevant browser, hosting or platform documentation for meaningful changes. Review relevant seasonal needs only when they improve an existing image, writing, study or developer workflow. Use search-result checks as qualitative evidence, not measured keyword volumes or difficulty.
4. Use real Search Console/analytics only if connected and verified through harmless reads. Without those sources, do not report traffic, RPM, rank changes, country distribution or conversion uplift.
5. If justified, make a small useful change to existing copy, metadata, instructions or links. A new guide needs original practical value and a tested relevant tool. Do not create near-duplicate country/KB/year pages or unrelated news content. Do not change dates solely to make content appear fresh.
6. The current Worker deploys the checked-in dist/ directory without running a build. Regenerate all static files after content changes, and include all changed dist/ files in the same GitHub commit as their source. Run the current build and relevant checks: python build.py; python scripts/verify_site.py; node scripts/verify-json.mjs. Run browser checks for changed interactions when available. Preserve a working output and do not publish failed checks.
7. Publish tested source changes to HarisAxif/toolnest/main using a normal fast-forward commit and verify the new head. Update and save/deploy the corresponding private preview through the Sites skill, preserving the actual audience. Do not declare the external production updated until its actual Git-triggered deployment is verified. Never make a private site public or enable public indexing without the required owner launch details and a configured public target. For this private project, maintain noindex and owner-only access.
8. Confirm the saved revision and terminal deployment result. Update a brief change log only for substantive changes. If no useful change is justified, leave source and deployment unchanged.

## Budget and publication controls

Run research checks on the saved schedule, but do not deploy merely because a check ran. Batch ordinary editorial/SEO updates, at most twice per week unless fixing a genuine broken tool or factual error. Netlify credit-based production deployments consume credits; a daily deployment can exceed a free allowance without meaningful traffic. Do not buy services, enable auto-upgrades, add paid APIs, generate paid assets or launch paid campaigns.

Do not insert advertising scripts or tracking values into local tool inputs. AdSense setup needs the real publisher account, public-site review, ads.txt where applicable, privacy updates and a suitable consent mechanism before activation.

## Reporting

Report substantive changes, why they help visitors, evidence used and validation. If a new blocker requires the owner, state the specific missing connection or detail. Avoid repetitive daily messages when nothing meaningful changes. A saved automation is not proof that its future run has executed successfully.

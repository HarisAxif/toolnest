# Publish Toolnest on Netlify

This is a static website. Tool inputs are processed in the visitor's browser. There is no database, subscription API, server upload pipeline or application login to maintain. The current version has 15 tools, four category hubs and six guides.

## Recommended route

Import the source folder into a Git repository you control, then connect that repository to Netlify. The included netlify.toml sets:

- Build command: `python3 scripts/build_host.py`
- Publish directory: `dist`
- No Python package dependencies
- Real static routes and a custom 404; no blanket SPA fallback

Your first deployment receives a Netlify address. You can begin testing without buying a domain. Free hosting has usage limits; review your own account dashboard before and after launch. This package has not been deployed to a Netlify account and does not claim a reserved Netlify site name.

## Required launch settings

Set these production environment variables in the Netlify UI:

- `SITE_URL`: final HTTPS origin only, such as your own domain; no trailing path. If omitted, Netlify's `URL` is used.
- `GOOGLE_SITE_VERIFICATION`: optional real Search Console HTML verification token.
- `SUPPORT_EMAIL`: real public support/privacy contact.
- `PUBLIC_LAUNCH`: `true` only after the content, operator details, policies and support contact are reviewed.

Redeploy after changing settings. Production pages become indexable only when PUBLIC_LAUNCH is true. Deploy previews and branch deploys remain noindex. The build fails if indexing is enabled without a support contact. On the private Sites preview, all content stays noindex.

The privacy/terms pages are starting points describing the current implementation. Their suitability depends on the operator, audience and any added services. Complete the review before enabling PUBLIC_LAUNCH. The build can insert a contact; it cannot perform a legal review.

## Domain and monetization

A paid domain is optional. Google’s specific AdSense site-management policy accepts subdomains of platforms on the Public Suffix List; netlify.app is listed. A Netlify address can therefore be used for the application route, subject to actual account/site review. See FREE_HOSTING.md for sources and the correction to earlier overly broad domain advice.

Vercel's free Hobby tier is for personal, noncommercial use. An ad-funded business needs an appropriate commercial plan there. Netlify permits commercial projects on its free plan, within limits. Plan terms may change.

No ads, ad publisher IDs, analytics IDs or affiliate links are installed. After approval, configure the real AdSense account, ads.txt, privacy disclosures and the applicable consent mechanism before activating ads. Search Console needs the owner's verification. These account steps cannot be replaced with a static website file.

## Low-maintenance operation

What runs automatically: tools, file transformations, calculations, static page delivery and Git-triggered Netlify builds after setup.

What still needs attention: domain renewals, hosting usage, broken tools or browser changes, search performance, useful content improvements, advertising/consent notices and account/payment issues. No revenue, ranking, or maintenance-free operation is promised. A linked schedule may review the current Sites project. This does not automatically update an external Netlify copy. The external Git repository and hosting deployment must be connected before source updates can flow there.

At an illustrative $5 page RPM, $300–$500 monthly gross revenue requires 60,000–100,000 pageviews. At $2 it requires 150,000–250,000; at $10, 30,000–50,000. These are arithmetic scenarios, not verified RPMs for this site. Costs reduce profit, and visitors are not the same as pageviews.

## Public launch checks

Verify the final origin in canonicals and sitemap, index/follow tags on content pages, sitemap in robots.txt, real 404 status for missing URLs, HTTPS and host redirects. Test tool flows on mobile and desktop. Submit the sitemap after Search Console verification. Check reporting before relying on it for business decisions.

Keep the site useful and focused. Use search impressions and query data to prioritize improvements. Do not mass-generate near-identical pages, buy links or artificial traffic, or assume a new image tool creates traffic on its own.

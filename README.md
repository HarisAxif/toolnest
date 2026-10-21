# Toolnest

Private preview of 15 local browser tools, built as static HTML, CSS and JavaScript. Run `python build.py` to regenerate HTML. Static assets live in `dist/`.

## SEO implemented

Unique rendered titles/descriptions, descriptive URLs, self-referencing canonical URLs, responsive layouts, crawlable internal links, WebPage/WebSite and breadcrumb structured data, original tool instructions/examples/limitations, six editorial guides, favicon, sitemap, custom 404 and robots controls. Search/filter does not generate extra indexable URLs. No fabricated ratings or unverified search-volume claims.

## Public launch blockers

This preview is owner-private. The default `PUBLIC_LAUNCH=false` also writes noindex/nofollow and disallows crawling. It cannot earn organic search traffic in that state.

1. Choose and check a brand and free hosting address; set SITE_URL to the final origin. A paid domain is optional. See FREE_HOSTING.md.
2. Complete public operator/contact details and review privacy/terms for the actual operator and audience. Current pages explicitly describe preview status.
3. Configure the public domain and hosting access, confirm HTTPS, redirects, canonical host and real 404 HTTP behavior.
4. Set PUBLIC_LAUNCH=true and SUPPORT_EMAIL for the production build, rebuild and deploy. Verify robots/meta settings on the public host.
5. Verify Google Search Console ownership using the owner's account; submit sitemap and inspect representative tool URLs.
6. Add analytics only with the owner's chosen account/property and appropriate privacy/consent configuration. No analytics ID, consent platform or AdSense publisher ID is installed.
7. Review actual mobile performance and Core Web Vitals on the production domain. Browser smoke tests are not a Lighthouse score.
8. AdSense requires a separate application and Google approval. Add the actual publisher script, ads.txt entry and required consent system only after account details and applicable requirements are known. Do not add fake publisher IDs.

## Growth plan and measurement

Working target: 30,000 monthly visits, not a guarantee. Distinguish visits/sessions, users, pageviews and Search Console clicks in reports. A private preview has no measurable public search performance.

Weeks 1–2: Validate demand and competition around one chosen audience using actual keyword data; map one primary intent per tool. The current tool set is a functional starting hypothesis, not a completed keyword study. Compare result pages, identify missing workflows, and prioritize differentiated utility instead of publishing clones.

Weeks 3–4: Launch the strongest pages, verify indexing, fix crawl/404/redirect issues, and collect baseline impressions, clicks, engagement and tool completion data. Event collection needs to be implemented once an analytics property is selected; never collect tool input values.

Weeks 5–8: Improve pages receiving relevant impressions. Add worked examples and useful original guides answering observed questions. Share relevant tools in communities where promotion is allowed. Seek genuine editorial mentions through useful resources, never purchased link schemes or bot traffic.

Weeks 9–12: Evaluate query/page performance, mobile usability and completion rates. Expand only demonstrated demand. Review title/description click-through rates, fix cannibalization and improve the best-performing workflows. Compare progress with baseline; do not assume 30K visits will be reached in 90 days.

Ongoing: Review Search Console and errors, update content and tools, assess links and competing search results, and maintain performance. See SEO_OPERATIONS.md for the scope and limits of linked SEO scheduling. External Netlify/Cloudflare publication is not connected yet.

Revenue depends on eligible pageviews, geography, demand and actual page RPM. Illustration only: 30,000 monetized pageviews at $2 RPM would be $60; at $5 RPM, $150. These are arithmetic examples, not revenue forecasts. 30,000 visits do not necessarily equal 30,000 pageviews.

## Implementation limits

No PDF tools or server uploads. Typography uses system fonts, with no third-party font requests. Passwords use browser cryptographic randomness. Images are limited to 20 MB uploads and 25 million pixels; animated images are unsupported. GPA rules are user supplied. The JSON formatter preserves original number tokens, escapes and duplicate keys; downstream parsers can still interpret numbers differently. Support/contact and final compliance configuration require the operator's real details.


Run `python build.py`, `python scripts/verify_site.py`, and `node scripts/verify-json.mjs` for the current checks. See SEO_PLAN.md for intent mapping, evidence limits and public-launch blockers.

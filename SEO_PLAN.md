# Toolnest SEO and usefulness audit

Reviewed: 22 October 2026. Budget constraint: no paid domain, hosting, API, keyword service or SEO subscription. Goal: attract useful organic visits from English-speaking audiences, including the US, UK, Canada and Australia. The site is intended for AdSense monetization. Income and audience geography are not guaranteed.

## Honest assessment

The tools solve real tasks, but the category is crowded. Search-result checks for target-size image compression, final exam grades and large-number-safe JSON formatting returned many competing implementations. These searches establish relevant vocabulary and competition, not monthly search volume, keyword difficulty or likely rankings. Search Console is now verified. Its 22 October snapshot has no usable query data; the displayed Web performance report shows zero clicks and impressions through 20 October, before the Pages launch. That delayed report is not a count of current visitors. No traffic or conversion uplift has been measured.

The initial generic directory did not establish a competitive advantage. This revision improves actual utility: selectable output formats, transparency handling, file-size verification, number-preserving JSON formatting and required-final-score scenarios. The site still needs public search data and iterative product improvements to establish which audience it can serve better.

## Primary intent map

One canonical tool page serves each intent. Do not create thin duplicate pages for every KB setting, year or country.

| Tool route | Primary query family | Useful reason to visit | Priority |
| --- | --- | --- | --- |
| /tools/compress-image-to-size/ | compress image to 100 KB; compress image to 200 KB; reduce image to KB | verified output limit; preserve dimensions by default; optional reduction | High |
| /tools/image-resizer/ | resize image pixels; resize image without stretching | linked dimensions and selectable output formats | High |
| /tools/image-converter/ | WebP to JPG; PNG to JPG; image converter | real encoding, selectable JPEG background, preserved dimensions | High |
| /tools/final-grade-calculator/ | what do I need on my final; required final exam score | formula, impossible-target warning and what-if table | High |
| /tools/weighted-grade-calculator/ | weighted grade calculator; calculate grade with weights | custom weights and partial-weight warning | Medium |
| /tools/json-formatter/ | JSON formatter preserve large numbers; JSON minifier | original number tokens, duplicate keys and string escapes retained | High |
| /tools/word-counter/ | word and character counter; draft reading time | live counts with stated counting rules | Medium |
| /tools/gpa-calculator/ | GPA calculator credit hours; custom GPA scale | explicit scale and institution-specific limits | Medium |
| /tools/image-compressor/ | JPG compressor; WebP compressor | adjustable quality and actual output-size comparison | Medium |
| /tools/case-converter/ | title case converter; sentence case converter | simple transparent rules, instant copy | Supporting |
| /tools/duplicate-line-remover/ | remove duplicate lines; remove blank lines | case-sensitive cleanup and sorting | Supporting |
| /tools/url-encoder/ | URL component encoder; percent decode text | clearly scoped component encoding | Supporting |
| /tools/password-generator/ | random password generator | local cryptographic randomness and required character groups | Supporting |
| /tools/percentage-calculator/ | percentage change calculator; percentage of a number | mode selection and explicit denominator checks | Supporting |
| /tools/aspect-ratio-calculator/ | aspect ratio calculator; proportional image dimensions | reduced ratio and rounded pixel dimensions | Supporting |

## Regional audience strategy

Use clear English and solve tasks relevant to students, writers and freelancers across the intended countries. The final-grade calculator works with syllabus-supplied percentages, without pretending that UK classifications, US GPA and Australian or Canadian grading are equivalent. Guides explicitly explain institutional differences.

No fake offices, addresses, location metadata, country redirects or geographic blocking have been added. There are no duplicate en-US/en-GB/en-CA/en-AU pages and no misleading hreflang tags. Reconsider real localization only when meaningful regional content and measured demand justify it. Google chooses what to show to each searcher; these choices do not force a US-heavy audience or a specific ad RPM.

## Content structure

15 working tools, four category hubs, an all-categories page and seven original guides. Each tool has its own title, description, instructions, example, limitations and related links. Guides link directly to relevant tools and tools link back to applicable guides. Category hubs group the actual tasks instead of generating broad keyword lists.

WebSite, WebPage, WebApplication, Article and breadcrumb structured data describe real content. No fake ratings, review counts, claimed expertise or unsupported rich-result promises. Public pages are rendered HTML with unique canonical URLs. Search/filter controls do not create indexable URL variants.

## Production work completed

- Static build with no paid runtime services or application dependencies.
- Local fonts/system typography; no third-party font requests.
- Meaningful JSON integrity tests and static page/link/schema checks.
- Browser checks of new grade calculations, JSON preservation, image conversion/transparency, resizing and file downloads.
- Stable-origin build settings; contact and Search Console verification variables.
- Production/preview indexing separation, sitemap, robots.txt, custom 404, security response headers.
- New support/contact route; public details must be supplied by the operator.

## Launch blockers and limits

The public Cloudflare Pages site is https://toolnest-haris.pages.dev/, with approved support contact harisaxif@gmail.com, indexable content, stable canonicals and a 33-URL sitemap after this content update. The separate Sites preview remains owner-private and noindex. The Pages Search Console property was verified on 22 October 2026 and its sitemap submitted. Google's live sitemap fetch succeeded, but its sitemap report still said Couldn't fetch in the later 22 October check. A homepage indexing request reached daily quota; do not retry that day. Indexing and field Core Web Vitals are not yet established; actual mobile device QA has not been completed.

The owner created an AdSense account on 22 October 2026. Its real publisher ID is configured for the production ownership meta tag and ads.txt record. No analytics, ad-serving scripts or consent manager are installed. Complete payment/identity information, site verification/review, suitable consent controls and advertising privacy updates before activating ads. Do not use pretend IDs or a blanket cookie banner to imply compliance.

## Content batch: 22 October 2026

- Expanded the existing upload-limit guide around compressing to 100 KB or 200 KB without silently changing required pixel dimensions. Added exact byte thresholds, troubleshooting and direct tool links.
- Expanded the final-exam guide around the score needed to pass, with four checked examples, gradebook-input guidance, rounding and minimum-exam cautions.
- Added a distinct guide for resizing without stretching, including proportional pixel examples and the difference between pixels, KB and print-resolution metadata.
- Added visible FAQs, primary-reference links, early tool buttons and factual per-guide publication/modification dates. No FAQ rich-result eligibility is claimed.
- Set Image converter's initial output to JPEG, matching the common WebP-to-JPG workflow while retaining PNG and WebP choices.

The maintained query families include compress image to 100 KB/200 KB without resizing, resize image without stretching, and what grade do I need on my final to pass. They describe real supported tasks; no volume or ranking claims are attached. See SEO_GROWTH_LOG.md for validation and measurement limits.

## Maintenance and seasonal opportunities

Check relevant platform requirements, browser behavior and audience questions. An exam-season guide or an image-upload change may justify a useful improvement if primary sources and the existing tools support it. Unrelated news or a holiday keyword alone does not justify a page or title change. Never update dates without substantive changes.

Review search queries, impressions, country mix and completed tool actions after measurement exists. Prefer improvements to useful pages over bulk content generation. No purchased links, bot traffic or paid ad clicks. No tracking of text, images, passwords or calculation input values.

## Source notes

- Google AdSense site eligibility by domain type: https://support.google.com/adsense/answer/12170421?hl=en
- Public Suffix List, including netlify.app, pages.dev and bolt.host: https://publicsuffix.org/list/public_suffix_list.dat
- Helpful content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- International site guidance: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Netlify credits: https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/
- Cloudflare static requests: https://developers.cloudflare.com/pages/functions/pricing/
- GitHub Pages business-use limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

Google’s general signup URL page and its more specific site-management guidance do not describe subdomains the same way. The specific site-management policy explicitly allows platform subdomains on the Public Suffix List. Netlify’s suffix is listed. This supports applying with a netlify.app site; it does not guarantee approval or future policy stability. A purchased domain is optional, not a requirement for this zero-budget route.

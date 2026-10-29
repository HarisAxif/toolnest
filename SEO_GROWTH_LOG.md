# Toolnest organic-search work

## 22 October 2026

Goal: useful English-language traffic, including users in the US, UK, Canada and Australia, within the zero-paid-cost constraint.

### Evidence and priorities

The verified Pages Search Console Web performance report has no usable queries yet. The snapshot read on 22 October showed 0 clicks and 0 impressions in a report ending 20 October, before the Pages launch. This is delayed search-report data, not a count of current visitors. Sitemap submission is recorded but the report still says Couldn't fetch with 0 discovered pages. A live Google sitemap test fetched successfully with crawling allowed. The homepage manual indexing request hit daily quota on 22 October; no further attempt was made.

Fresh search-result checks show many competing tools for 100 KB compression and final-exam scores. These observations establish relevant task language and competition, not search volume or keyword difficulty. Work targets genuine information gaps and tool usefulness instead of rotating keyword lists.

### Implemented batch

- Expanded /guides/compress-photo-for-upload-limit/ with fixed-dimension instructions, byte limits, format checks and failure cases.
- Expanded /guides/what-do-i-need-on-my-final/ with a pass-mark example, higher-target example, unreachable/already-met scenarios, gradebook checks and course-policy limits.
- Added /guides/resize-image-without-stretching/ with pixel formulas, examples and cropping/DPI limitations. Linked it from the directory, image hub and relevant tools.
- Added visible FAQs, reference links, comparison tables, early tool buttons and correct publication/modification dates.
- Made JPEG the initial Image converter output. Other supported formats remain selectable.

### Validation

Static build and JSON checks pass. Browser review confirmed guide layout, FAQ expansion and the passing-grade example: current 70%, target 60%, final weight 40% gives 45% required. The converter defaults to JPEG. Publication must be confirmed separately with the Cloudflare Pages check and actual affected live pages.

### Next decisions

Monitor sitemap processing and actual indexing without repeated same-day quota attempts. When impressions and queries become available, prioritize relevant queries and pages already appearing in results; evaluate title/description changes against comparable periods rather than claiming uplift from a new deployment. Check country reports before making country-mix claims. Continue useful SEO work alongside monetization setup. Ordinary editorial batches remain limited to twice weekly; this batch follows the initial 21 October content release.

### Primary references

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google crawlable links and descriptive anchors: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- MDN canvas export and resolution metadata: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
- MDN image formats: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
- Canvas current and total grades: https://community.instructure.com/en/kb/articles/661305-how-do-i-view-my-grades-in-a-current-course

## 26 October 2026

Expanded the existing /guides/weighted-grades-and-gpa/ page around calculating GPA with credit hours and combining semester GPAs. Added an original course table, a cumulative-GPA example, four visible FAQs and primary references from Illinois and UBC. Explained the difference between zero-point included courses and excluded pass/fail courses, transcript rounding/truncation and assessment percentages. The existing URL and original publication date remain; modification date reflects this substantive revision. No country-specific or duplicate GPA pages were created. Guide-directory and calculator links inherit the revised descriptive title.

Authenticated search reports were unavailable during this check. No new query, country, indexing or traffic result is established; the prior dated report remains historical. This batch is based on documented task requirements and checked arithmetic, without search-volume or uplift claims.

Validation targets: course example (3 × 4 + 2 × 3) ÷ 5 = 3.60; cumulative example (42 × 3.20 + 18 × 3.80) ÷ 60 = 3.38; partial assessment average (80 × 40 + 90 × 20) ÷ 60 = 83.333333%. Run the production static/JSON checks and verify the actual live guide and deployment separately.

Validation completed: production build/static/JSON checks passed with 33 sitemap URLs. Independent decimal arithmetic passed; browser preview returned 3.38 on 60 credits and the cumulative-GPA FAQ expanded correctly. Publication still requires the Pages check and live readback.

## 29 October 2026

Expanded /guides/format-json-with-large-numbers/ with token-preservation examples, five visible FAQs, syntax troubleshooting, numeric and duplicate-key interoperability cautions, and exact implementation limits. Primary references are RFC 8259 and MDN JSON.parse. Preserved the existing URL, title and original publication date; modification date reflects the substantive revision. No new duplicate pages or unrelated keyword variants.

The 26 October release (1be2dbd41ccec446508e5afe95135c7d109411f9) was confirmed with the Cloudflare Pages success check and all affected live links that day. This historical deployment confirmation does not establish indexing or traffic uplift. No fresh authenticated query or country measurements are available for this batch.

Validation: production build/static checks and token-integrity tests pass; examples cover large identifiers, decimal/exponent spelling, escaped strings, repeated keys, invalid syntax and nesting limits. Browser preview confirmed the guide table, readable layout and expandable duplicate-key FAQ. Public deployment and actual live readback must be checked separately.

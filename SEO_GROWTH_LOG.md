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

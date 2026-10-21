# Completely free hosting options

No paid domain is required to publish this static tool site. Use the generated hosting address. A domain-type eligible for AdSense is separate from Google approving the actual site and account.

## Recommended for a strict zero budget: Cloudflare Pages

Cloudflare's Pages documentation says static asset requests are free and unlimited when no Functions are invoked. This site has no Functions. Free-plan build/file/fair-use limits still apply. The default address is project-name.pages.dev, with no domain purchase. pages.dev is on the Public Suffix List, a category explicitly allowed by AdSense's site-management guidance.

Connect a Git repository containing this source. Set build command `python3 scripts/build_host.py`, output directory `dist`, and the production branch (`main` by default). Set these production environment variables:

- SITE_URL: your stable HTTPS project-name.pages.dev address, not a hash-prefixed preview URL.
- SUPPORT_EMAIL: the public address you authorize for support/privacy requests.
- PUBLIC_LAUNCH: true only after reviewing the launch checks.
- PRODUCTION_BRANCH: set only if your production branch is not main.
- GOOGLE_SITE_VERIFICATION: optional real HTML verification token from Search Console.

Preview branches stay noindex. Production Cloudflare builds with indexing enabled require an explicit stable SITE_URL. Static response headers are emitted as dist/_headers. No server or Node dependencies are needed.

This project has not been deployed into your Cloudflare account. Provider setup, public contact and Google account verification still require your participation. A Git-triggered deployment follows commits only after you connect the repo to the host.

## Netlify is also possible

Commercial use is supported on Netlify Free, within plan limits. Use the free project-name.netlify.app address and the included netlify.toml. See NETLIFY_SETUP.md for build settings. netlify.app is on the Public Suffix List. Buying a domain is optional; Google must still approve the site.

The current credit-based Free plan has 300 credits per month. Each successful production deploy consumes 15 credits, so publishing daily would exceed the free allowance even before traffic. Other usage also consumes credits. Existing accounts may have different legacy terms. Do not republish on every scheduled check. Only deploy meaningful changes and check the actual account plan.

## Other options considered

- GitHub: useful for storing source and connecting automatic builds. GitHub Pages is not recommended for this business; GitHub's documentation restricts using Pages as free hosting to run an online business.
- Vercel: Hobby is restricted to personal, noncommercial use. A revenue-seeking site needs a suitable commercial plan there, so it does not meet the zero-budget requirement.
- Bolt: free bolt.host publishing exists and bolt.host is on the Public Suffix List, but builder tokens and hosting quotas apply. A different builder will not create search traffic or remove Google's review. This project does not require a builder subscription, and Bolt's ad integration and full fit have not been verified here.
- Blogger: a free blogspot.com address is part of Google's supported AdSense partner flow, subject to eligibility. It is a better fit for a content blog than this standalone static tool application.

All free providers may change limits or terms. Stay within your account's allowance and do not enable paid upgrades automatically.

## AdSense sources

https://support.google.com/adsense/answer/12170421?hl=en
https://publicsuffix.org/list/public_suffix_list.dat
https://developers.cloudflare.com/pages/functions/pricing/
https://support.google.com/blogger/answer/1269077?hl=en

A paid domain is not a universal AdSense requirement. No hosting arrangement guarantees monetization or a monthly income.

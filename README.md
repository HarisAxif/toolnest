> This `pages` branch stages the free Cloudflare Pages migration. See [CLOUDFLARE_PAGES.md](CLOUDFLARE_PAGES.md) for the exact dashboard settings. `main` remains the active Workers source until the new Pages URL has been deployed and verified. Do not switch the maintenance target or public canonical origin before that verification.

# Toolnest

Free browser-based image, writing, study and developer tools. Source: https://github.com/HarisAxif/toolnest.

## Hosting setup

For a zero-paid-service launch, use Cloudflare Pages with its generated pages.dev address, or Netlify with its generated netlify.app address. A custom domain is optional. The current Cloudflare connection uses a Workers project, with npx wrangler deploy and no build command. See CLOUDFLARE_WORKERS.md. The successful remote deployment has not been verified yet.

- Build command: `python3 scripts/build_host.py`
- Output directory: `dist`
- Production branch: `main`
- Required public launch settings: `SITE_URL`, `SUPPORT_EMAIL`, `PUBLIC_LAUNCH=true`
- Optional Search Console HTML token: `GOOGLE_SITE_VERIFICATION`

`PUBLIC_LAUNCH` defaults to false. Do not enable it until the public contact and policies are reviewed. The checked build script runs HTML/link/schema and JSON integrity checks. The current Workers dashboard deploys the checked-in output directly. The complete generated dist/ output is versioned for the current Workers deployment. After content changes, regenerate it with the checked build script and commit both source and generated output. No server, paid API or database is used.

Read FREE_HOSTING.md for the free-hosting comparison, NETLIFY_SETUP.md for Netlify details, SEO_PLAN.md for the keyword/usefulness audit and SEO_OPERATIONS.md for scheduled maintenance boundaries. Google must approve any AdSense application; no advertising or analytics credentials are configured.

## Local checks

Run `python3 scripts/build_host.py` for the deployable build and checks. Run `python3 scripts/check_launch.py` separately to exercise public/preview launch settings; that command restores a private build afterward and must not be used as the production build command.


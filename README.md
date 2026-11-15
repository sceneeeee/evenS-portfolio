# evenS — Engineering Portfolio

Static engineering portfolio built with Astro, strict TypeScript, Tailwind CSS (Vite integration), and MDX content collections. Cloudflare Pages is the intended host. No backend or runtime adapter is required.

## Phase 2 evidence integration (review branch)

The portfolio now distinguishes **lifecycle** (current research / completed engineering / discontinued research) from **validation level** (offline prototype / controlled development experiments / real simulator integration / simulation workspace).

- **Room-Sign-Guided Navigation** is the only current research project. M3.2 recorded-video advice was tested; M3.3 live acceptance and real multi-door loop are pending.
- **NaVIDA–Habitat** is a completed engineering integration, with a real Habitat + HTTP demonstration using a prominently labeled **Deterministic Fake Policy**. Its historical real NaVIDA 80-step grounded run failed.
- **ETPNav–MID360** is discontinued, with four traceable historical experiment figures and no successful learned adapter, native MID360 simulation, or physical robot.
- **ROS 2 FishBot** is a simulation-only secondary project.
- English is default; equivalent Chinese URLs begin at `/zh/`.
- Media and CSV/JSON evidence are copied locally from the public source repositories; see [the media inventory](docs/assets-needed.md).
- About, CV, Contact, Cloudflare deployment and public search indexing are **not part of this PR**.

## Local development

Use Node 22.23.4+ (`.nvmrc` pins 22.23.4) and npm. The lockfile records exact dependency versions. Astro 7 / MDX 8 provide the content-collection APIs used here; upgrade major versions intentionally, with checks.

```bash
npm ci
npm run dev
```

The dev server defaults to `http://127.0.0.1:4321`. To check the static production output:

```bash
npm run check
npm run build
npm run check:i18n
npm run preview
```

In a restricted workspace, prefix commands with `ASTRO_TELEMETRY_DISABLED=1` to prevent Astro telemetry configuration writes outside the checkout.

`check` validates Astro and TypeScript. `build` validates content and generates static routes into `dist/`. `preview` serves that built output locally. There are no external network requirements at visitor runtime, third-party fonts, or frontend framework runtimes.

Astro 7 may run preview as a background process. Stop it after review with `npm run astro -- preview stop`.

## Structure and content

- `src/content/projects/en/` and `src/content/projects/zh/`: parallel Markdown/MDX narratives and project frontmatter.
- `src/content.config.ts`: content schema and module/source/ownership validation.
- `src/data/profile.ts`: verified education and GitHub link. Do not add invented contact/CV data.
- `src/data/media.ts`: shared asset IDs/dimensions and English copy; Chinese descriptions, captions and alt text are in `src/i18n/media.ts`. Keep synchronized with the inventory.
- `src/components/`: navigation, cards, ETPNav results/architecture, reusable placeholder.
- `src/layouts/`: document and case-study layout.
- `src/pages/projects/[slug].astro`: statically generates only entries with `caseStudyReady: true`.
- `src/styles/global.css`: Tailwind import/theme, shared tokens, and responsive component rules.
- `public/media/projects/`: approved publication assets only. Everything in `public/` is deployable.

## English / Simplified Chinese

English is the default at `/`, `/projects/`, and `/projects/etpnav-mid360/`. Simplified Chinese uses `/zh/`, `/zh/projects/`, and `/zh/projects/etpnav-mid360/`. Native Astro i18n is configured with `en` as the unprefixed default and `zh-CN` mapped to the `zh` path. There is no browser-language redirect, preference cookie, translation service, or locale persistence. The URL determines the language.

- `src/i18n/en.ts` and `zh.ts` contain structured UI translations. Chinese satisfies the English dictionary type, so missing keys fail TypeScript checks. Components share the same markup/styles.
- `src/i18n/index.ts` provides locale detection, `localePath`, HTML language tags and date formatting. Use `localePath('/contact/', locale)` for future routes; never concatenate a locale prefix in presentation components.
- `src/components/pages/` contains shared page implementations; route files are thin locale wrappers. Add future About/CV/Contact routes in both languages only when their content is authorized.
- Project entries declare `locale` and the same language-independent `slug`. Collection IDs include locale folders (`en/etpnav-mid360`, `zh/etpnav-mid360`) to prevent collisions. The build rejects missing translation pairs and inconsistent readiness, status, verification dates, repository links or module states.
- `caseStudyReady` controls publication of both language versions together. Do not silently fall back to English when Chinese content is missing.
- All experimental metric values are shared in `src/data/etpnav-results.ts`; translate labels/explanations without changing data or caveats. Keep the same section IDs so technical links remain parallel.
- The global `EN | 中文` switcher uses native links to the equivalent page, works without JavaScript, and is outside the collapsible mobile menu.
- Metadata uses `en` / `zh-CN` for HTML and hreflang; Open Graph uses the standard `en_US` / `zh_CN`. Each page has a self-canonical, reciprocal alternates and English `x-default`.
- `SITE_URL` supplies the canonical origin. Without it, local builds use Astro's local origin; this is intentional for non-indexable previews, not a production hostname. Validate a configured origin with `SITE_URL=https://portfolio.example npm run build` then `SITE_URL=https://portfolio.example npm run check:i18n`; the example hostname is for testing only.
- `/404.html` is English and `/zh/404/` is Chinese. A build hook copies the Chinese page to `/zh/404.html`, allowing Cloudflare Pages to choose the closest localized 404 for missing `/zh/...` paths. Generic static servers may serve only the root fallback; verify host behavior during the later deployment phase. See [Cloudflare serving behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/#not-found-behavior).

`npm run check:i18n` is a dependency-free check of built routes, internal links/fragments, locale consistency, equivalent-page switch links, canonical/hreflang/Open Graph metadata, numeric result parity, paired sections/assets and non-indexing guards. Run it after building. Browser QA additionally checks keyboard switching, mobile menus, overflow and accessibility; local captures/results remain ignored under `.qa/`.

Project module completion, personal ownership and evidence scope are independent. Keep source URLs, source branch/reference and verification dates with each project. Do not promote feature-branch modules to main, smoke tests to benchmarks, or future integration responsibilities to completed work. Result caveats must remain beside tables. Current source references use `main` and a checked date; pin public commit links before final publication if documents change.

## Assets

Follow [docs/assets-needed.md](docs/assets-needed.md) when replacing figures. `MediaPlaceholder.astro` shows ID, purpose, ratio and resolution and reserves the intended aspect ratio without fetching nonexistent files. The ETP-01 card and case study share the same source request. No fake image URLs are used.

The navigation remains usable without JavaScript. With JavaScript, mobile navigation adds an accessible menu toggle, expanded state, and Escape-to-close behavior. Reduced-motion preferences are respected.

## Future Cloudflare Pages deployment (not performed)

After content review and explicit publication authorization:

1. Connect the approved repository to a Cloudflare Pages project. Commit/push requires explicit user instruction.
2. Production branch: `main`; build: `npm run build`; output: `dist`; set a compatible Node version (22.23.4 or newer) for the build.
3. Set `SITE_URL` to the confirmed HTTPS production origin. `astro.config.mjs` reads it for canonical URL generation; do not invent a hostname. No secret is required for the static application.
4. Complete the asset release gate. Review/remove preview-only footer/body notices, robots disallow and `noindex` only when the content is ready. Keep preview deployments non-indexable.
5. Finish sitemap, social-image metadata, accessibility/performance validation in Phase 4. Check real route/404 behavior on Pages.
6. A future custom domain changes the centralized origin, domain configuration and redirect rules; internal links remain relative to the site root.

See the [official Cloudflare Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/). Do not add Pages Functions, databases, SSR adapters or hosting-plugin manifests for this static scope.

## Reporting and Git

Update local `temp_report.md` at the end of every run with work, changed files, checks, risks and exact next steps. It is ignored and must never be committed. Do not commit, push, deploy, or start Phase 2 without the user's requested review/authorization.

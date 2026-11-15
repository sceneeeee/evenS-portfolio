# Project asset inventory

Phase 1 intentionally uses labeled placeholders. No project screenshots, plots, or simulator captures have been generated or substituted. The explanatory architecture diagram is rendered from public documentation in HTML/CSS and is not a missing screenshot.

Bilingual integration: asset IDs, filenames and image files are shared across English and Chinese. Descriptions, captions and alt text are localized (`src/data/media.ts` for English; `src/i18n/media.ts` for Chinese). Any asset replacement must update both texts and be checked on the equivalent English and Chinese routes. Each inventory placement below applies to both languages; do not request a duplicate screenshot per locale. Chinese narration and captions must preserve the same experimental context and limitations.

Status meanings: **MISSING** = not supplied; **PROVIDED** = received, pending verification/integration; **INTEGRATED** = inspected, approved for public use, captioned, and checked on desktop/mobile.

## ETPNav × MID360

### ETP-01 — Matched sensor observations

- **Project:** ETPNav × MID360
- **Expected filename:** `public/media/projects/etpnav-mid360/dense-sparse-observation.png`
- **Demonstrates:** Actual dense-depth and MID360-like sparse-depth input from the same simulated viewpoint. Preserve orientation, scale, and descriptive labels. A matched pair provides more useful evidence than an unrelated robot photograph.
- **Recommended aspect ratio / resolution:** 16:9, 1600 × 900 px.
- **Placement:** Featured card on Home and Projects; ETPNav Problem & Motivation section. The card is a responsive crop-free preview of the same asset, not a separate image request.
- **Required caption:** “A matched observation pair from the same simulated viewpoint. The sparse input is a controlled MID360-like abstraction, not a native sensor capture.” Add actual observation/run provenance when supplied.
- **Required alt text:** “Dense and simulated sparse depth from the same viewpoint, with shared orientation and depth scale.” Refine after inspecting the actual image.
- **Status:** **MISSING**
- **Release critical:** Yes, unless these media slots are intentionally removed.

### ETP-02 — Proposal–GraphMap association audit

- **Project:** ETPNav × MID360
- **Expected filename:** `public/media/projects/etpnav-mid360/proposal-graphmap-audit.png`
- **Demonstrates:** Actual candidates before/after graph association, distinguishing new ghosts, existing-ghost merges and visited-node absorptions. Do not construct an invented experimental view to match the narrative. The supplied configuration need not be the 595-candidate audit; accurately caption its actual scope.
- **Recommended aspect ratio / resolution:** 8:5, 1600 × 1000 px.
- **Placement:** ETPNav Failure Analysis, “Raw waypoints do not equal graph actions.”
- **Required caption:** “A public-safe audit example showing which proposals become graph actions, merge with ghosts, or are absorbed into visited nodes.” Include the actual run/configuration identifier and explain the legend.
- **Required alt text:** “Waypoint candidates and their GraphMap associations, labeled as new ghosts, ghost merges, or visited-node absorptions.” Refine after inspection.
- **Status:** **MISSING**
- **Release critical:** Yes, unless the media slot is intentionally removed.

### ETP-03 — Frozen predictor activation trace

- **Project:** ETPNav × MID360
- **Expected filename:** `public/media/projects/etpnav-mid360/waypoint-activation-trace.png`
- **Demonstrates:** An authentic dense-versus-sparse activation comparison illustrating partial depth-encoder structure and downstream predictor collapse. Preserve layer names, axes, color scales, and observation context; exclude unpublished learned-adaptation results.
- **Recommended aspect ratio / resolution:** 8:5, 1600 × 1000 px.
- **Placement:** ETPNav Failure Analysis, “Predictor collapse occurs downstream.”
- **Required caption:** “A matched activation trace illustrating partial encoder activity and downstream predictor collapse.” Identify layers, scales and observation context.
- **Required alt text:** “Matched dense and sparse activation plots showing surviving depth-encoder structure and downstream classifier collapse.” Refine after inspection.
- **Status:** **MISSING**
- **Release critical:** Yes, unless the media slot is intentionally removed.

## Future project directories

- `public/media/projects/room-sign-navigation/`
- `public/media/projects/navida-habitat/`

Directories are prepared. No media requests are added for these projects until Phase 3 establishes their case-study layouts. Do not request duplicate decorative assets. No video is required for Phase 1.

## Integration procedure

1. Inspect the actual file before changing any page. Confirm the correct project, run, branch and scientific context; do not infer provenance from a filename alone.
2. Check public sharing permission and inspect for credentials, private network addresses/endpoints, personal details, unapproved identifiable people, restricted scenes/data, and third-party material. Crop or redact only with approval and document any change. Public GitHub visibility alone does not grant dataset-media redistribution permission.
3. Match the asset ID above and mark PROVIDED. Keep only approved publication assets under `public/`, which is copied into the build.
4. Preserve technical labels. Prefer PNG for diagrams/text; use carefully optimized WebP for photos. Keep repository-local paths, no GitHub image hotlinks.
5. Update dimensions, final caption and alt text in `src/data/media.ts`. Replace all occurrences of the corresponding `MediaPlaceholder` with a responsive image/figure using explicit width/height, `max-width:100%`, and `height:auto`. Supply appropriate `srcset` variants; lazy-load below-the-fold media. Use Astro build-time optimization when moving imported image sources to `src/assets/`.
6. Reserve the same aspect ratio in the media wrapper. If the genuine figure requires a different ratio, update the registry, inventory and all placements together; never crop out experimental labels to force a fit.
7. Check desktop/tablet/mobile readability, link integrity and layout stability. Set INTEGRATED only after all placements are checked, and remove the corresponding placeholder.

## Production release gate

The current site is a development preview with `noindex, nofollow` metadata and a disallow-all robots.txt. Before public release, resolve critical placeholders or intentionally remove their slots, remove unintended development messages, check all media paths, configure the real canonical origin/social image, and review indexing rules. A successful build alone does not mean the content is ready to publish.

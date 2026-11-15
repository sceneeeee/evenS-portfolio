# Portfolio media inventory — Phase 2 (2026-11-16)

The files below were copied into this repository from the *public, committed* source repositories. Source provenance is preserved. These are not generated experimental observations; ETPNav figures are post-processing of historical results. English/Chinese descriptions and captions are defined in `src/data/media.ts` and `src/i18n/media.ts`.

| ID | Repository-local media | Evidence meaning | State |
|---|---|---|---|
| ETP-01 | `public/media/projects/etpnav-mid360/first-decision-proposals.svg` | Episode-53 **waypoint proposal outputs**, same observation; NOT raw dense/sparse depth-image pair | INTEGRATED |
| ETP-02 | `public/media/projects/etpnav-mid360/graphmap-association-audit.svg` | **Aggregate G-Min GraphMap audit**; 411 new / 25 merge / 159 visited = 595 | INTEGRATED |
| ETP-03 | `public/media/projects/etpnav-mid360/predictor-activation-collapse.svg` | **Five-static-observation activity summary**, NOT raw per-layer feature maps | INTEGRATED |
| ETP-04 | `public/media/projects/etpnav-mid360/frozen20-development-results.svg` | **20-episode development panel**, six methods; NOT official R2R-CE benchmark | INTEGRATED |
| NAV-01 | `public/media/projects/navida-habitat/habitat-scene.png` | Real Habitat RGB from deterministic-policy test scene | INTEGRATED |
| NAV-02 | `public/media/projects/navida-habitat/habitat-trajectory.png` | Pose-derived trace of the deterministic showcase, NOT a planned/successful path | INTEGRATED |
| NAV-03 | `public/media/projects/navida-habitat/http-flow.svg` | HTTP/queue/env.step **concept diagram**, NOT captured software UI | INTEGRATED |
| NAV-04 | `public/media/projects/navida-habitat/engineering-demo.mp4` | Real Habitat + localhost HTTP, **Deterministic Fake Policy**, 21 actions / 21 requests / 11 decisions, NOT NaVIDA inference | INTEGRATED |

## Source repositories

- ETPNav: [portfolio-evidence pack](https://github.com/sceneeeee/ETPNav-MID360/tree/main/docs/portfolio-evidence); [provenance and caveats](https://github.com/sceneeeee/ETPNav-MID360/blob/main/docs/portfolio-evidence/README.md); [project closeout](https://github.com/sceneeeee/ETPNav-MID360/blob/main/docs/project-closeout.md).
- NaVIDA: [source media directory](https://github.com/sceneeeee/navida-habitat/tree/main/docs/assets); [engineering demonstration](https://github.com/sceneeeee/navida-habitat/blob/main/docs/engineering-demo.md); [acceptance and attribution](https://github.com/sceneeeee/navida-habitat/blob/main/docs/evaluator-migration-acceptance.md).
- Accompanying ETPNav CSV/JSON snapshots: `public/media/projects/etpnav-mid360/data/`.
- Accompanying NaVIDA recorded pose/evidence snapshots: `public/media/projects/navida-habitat/data/`.

The original ETPNav matched **raw depth observation pair** is still unavailable. ETP-01 was replaced with a clearly different, correctly named *waypoint-output* figure, not a falsely labeled substitute. The original ignored `outputs/` data were not recovered; CSVs reproduce the published aggregates, not raw telemetry.

## Display-only figure repair

The Portfolio copy of `first-decision-proposals.svg` moves the nine existing angle/radius labels below the polar plots (same candidates and values). The Portfolio copy of `graphmap-association-audit.svg` adds a color legend that explicitly labels the 25 amber merges. The source ETPNav repository remains unchanged. Original source files are linked above.

## Public safety and remaining gaps

- No unlicensed checkpoint, GLB, dataset, private raw run, credentials or host-specific server paths were copied.
- Media are selected, already-public engineering derivatives; their redistribution context should be checked again before public launch.
- Room-Sign: do **not** invent RGB/door photos. M3.2 recorded-video visual advice does not establish M3.3 real-world multi-door completion.
- FishBot: no approved Gazebo/RViz image is integrated; the secondary card is simulation-only.
- No dedicated CV PDF, portrait or public contact address was supplied. About/CV/Contact remain outside this evidence integration PR.
- Release gates: run `npm ci`, `npm run check`, `npm run build`, `npm run check:i18n`; review mobile figures, access, links, disclaimers and browser video; confirm `SITE_URL`. Keep `noindex` and `robots.txt` disallow until explicit approval.

## Status convention

`INTEGRATED` means the source file, both localized text records, and page paths are wired. It does **not** mean production publishing approval, all human QA, or scientific novelty.

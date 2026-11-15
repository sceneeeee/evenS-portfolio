export interface ProjectAsset {
  id: string;
  project: string;
  filename: string;
  description: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  status: 'MISSING' | 'PROVIDED' | 'INTEGRATED';
  src?: string;
  source?: string;
}

const etpDir = '/media/projects/etpnav-mid360';
const navDir = '/media/projects/navida-habitat';
export const etpnavAssets = {
  proposals: {
    id: 'ETP-01', project: 'etpnav-mid360', filename: 'first-decision-proposals.svg',
    src: `${etpDir}/first-decision-proposals.svg`,
    description: 'Episode 53 dense-versus-sparse waypoint proposals, not depth images',
    width: 1600, height: 1140,
    caption: 'Episode 53, same observation: 4 original dense-depth waypoint proposals versus 5 MID360-like sparse zero-shot proposals at 0.75 m. Post-processed historical output—not raw depth images.',
    alt: 'Two polar proposal diagrams: four dense-depth candidate waypoints and five sparse zero-shot candidates all at 0.75 metres.',
    status: 'INTEGRATED',
    source: 'https://github.com/sceneeeee/ETPNav-MID360/blob/main/docs/portfolio-evidence/README.md',
  },
  graph: {
    id: 'ETP-02', project: 'etpnav-mid360', filename: 'graphmap-association-audit.svg',
    src: `${etpDir}/graphmap-association-audit.svg`,
    description: 'Aggregated GraphMap association audit of G-Min frozen-20',
    width: 1600, height: 1160,
    caption: 'G-Min aggregate: 595 proposals → 411 new ghosts (green), 25 existing ghost merges (amber), 159 visited absorptions (red). Not a frame-by-frame GraphMap screenshot.',
    alt: 'Aggregate stacked bars show 411 new ghosts, 25 ghost merges and 159 visited absorptions from 595 proposals, plus radial-bin breakdown.',
    status: 'INTEGRATED',
    source: 'https://github.com/sceneeeee/ETPNav-MID360/blob/main/docs/portfolio-evidence/README.md',
  },
  activation: {
    id: 'ETP-03', project: 'etpnav-mid360', filename: 'predictor-activation-collapse.svg',
    src: `${etpDir}/predictor-activation-collapse.svg`,
    description: 'Five held-out static observations; encoder/classifier activity summary',
    width: 1600, height: 1020,
    caption: 'Across five held-out static observations, dense classifier post-ReLU was active in 5/5 and sparse / aligned sparse in 0/5. This aggregates activity, not raw feature maps or navigation.',
    alt: 'Static five-observation summary showing nonzero dense classifier activity but zero sparse and aligned-sparse classifier activity.',
    status: 'INTEGRATED',
    source: 'https://github.com/sceneeeee/ETPNav-MID360/blob/main/docs/portfolio-evidence/README.md',
  },
  frozen: {
    id: 'ETP-04', project: 'etpnav-mid360', filename: 'frozen20-development-results.svg',
    src: `${etpDir}/frozen20-development-results.svg`,
    description: 'Frozen-20 controlled development panel method comparison',
    width: 1600, height: 1020,
    caption: 'Six-method comparison on the same 20 val_unseen development episodes; not an official R2R-CE benchmark or independent generalization result.',
    alt: 'Chart of six ETPNav and geometry methods compared across controlled twenty-episode development metrics.',
    status: 'INTEGRATED',
    source: 'https://github.com/sceneeeee/ETPNav-MID360/blob/main/docs/portfolio-evidence/README.md',
  },
} satisfies Record<string, ProjectAsset>;

export const navidaAssets = {
  scene: {
    id: 'NAV-01', project: 'navida-habitat', filename: 'habitat-scene.png',
    src: `${navDir}/habitat-scene.png`, width: 640, height: 480,
    description: 'Real Habitat 0.3.3 skokloster-castle RGB observation',
    caption: 'Real Habitat RGB observation of the skokloster-castle test scene. The associated showcase used a deterministic fake policy, not NaVIDA inference.',
    alt: 'Unmodified RGB frame rendered by the Habitat simulator in the skokloster-castle test scene.',
    status: 'INTEGRATED', source: 'https://github.com/sceneeeee/navida-habitat/blob/main/docs/engineering-demo.md',
  },
  trajectory: {
    id: 'NAV-02', project: 'navida-habitat', filename: 'habitat-trajectory.png',
    src: `${navDir}/habitat-trajectory.png`, width: 1050, height: 750,
    description: 'Actual recorded deterministic-demo trajectory',
    caption: 'Trajectory reconstructed from recorded simulator poses for the deterministic fake-policy showcase—not a planned path or successful navigation.',
    alt: 'Position trace derived from recorded world poses during a deterministic fake-policy Habitat demonstration.',
    status: 'INTEGRATED', source: 'https://github.com/sceneeeee/navida-habitat/blob/main/docs/engineering-demo.md',
  },
  flow: {
    id: 'NAV-03', project: 'navida-habitat', filename: 'http-flow.svg',
    src: `${navDir}/http-flow.svg`, width: 1000, height: 330,
    description: 'HTTP / action queue / environment step architecture diagram',
    caption: 'Illustrative engineering flow diagram, not a UI screenshot. Counts are checked against the recorded fixed-action run.',
    alt: 'Architecture diagram connecting the local HTTP service, atomic action queue and real Habitat env.step calls.',
    status: 'INTEGRATED', source: 'https://github.com/sceneeeee/navida-habitat/blob/main/docs/engineering-demo.md',
  },
} satisfies Record<string, ProjectAsset>;

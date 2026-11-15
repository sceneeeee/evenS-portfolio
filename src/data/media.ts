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
}

// Keep this registry synchronized with docs/assets-needed.md.
export const etpnavAssets = {
  observation: {
    id: 'ETP-01', project: 'etpnav-mid360', filename: 'dense-sparse-observation.png',
    description: 'Matched dense-depth and MID360-like sparse-depth observations',
    width: 1600, height: 900,
    caption: 'A matched observation pair from the same simulated viewpoint. The sparse input is a controlled MID360-like abstraction, not a native sensor capture.',
    alt: 'Dense and simulated sparse depth from the same viewpoint, with shared orientation and depth scale.',
    status: 'MISSING',
  },
  graph: {
    id: 'ETP-02', project: 'etpnav-mid360', filename: 'proposal-graphmap-audit.png',
    description: 'Waypoint proposals before and after GraphMap association',
    width: 1600, height: 1000,
    caption: 'A public-safe audit example showing which proposals become graph actions, merge with ghosts, or are absorbed into visited nodes. Include the actual run/configuration identifier.',
    alt: 'Waypoint candidates and their GraphMap associations, labeled as new ghosts, ghost merges, or visited-node absorptions.',
    status: 'MISSING',
  },
  activation: {
    id: 'ETP-03', project: 'etpnav-mid360', filename: 'waypoint-activation-trace.png',
    description: 'Dense-versus-sparse activation trace through the frozen waypoint predictor',
    width: 1600, height: 1000,
    caption: 'A matched activation trace illustrating partial encoder activity and downstream predictor collapse. Identify the layers, scales, and observation context.',
    alt: 'Matched dense and sparse activation plots showing surviving depth-encoder structure and downstream classifier collapse.',
    status: 'MISSING',
  },
} satisfies Record<string, ProjectAsset>;

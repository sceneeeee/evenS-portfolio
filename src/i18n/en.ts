export const en = {
  siteName: 'evenS — Engineering Portfolio',
  skip: 'Skip to content',
  nav: { home: 'Home', projects: 'Projects', background: 'Background', menu: 'Menu', label: 'Main navigation', brand: 'evenS home', portfolio: 'ENGINEERING PORTFOLIO', language: 'Language selection', english: 'Switch to English', chinese: 'Switch to Simplified Chinese' },
  footer: { focus: 'Robotics · Navigation · System integration', explore: 'Explore the work', preview: 'Phase 1 development preview', pending: 'CV and contact details to be added.' },
  home: {
    title: 'Robotics & Autonomous Systems',
    description: 'evenS — XJTLU undergraduate working on RGB-first indoor room search, robotics perception, and documented simulator engineering.',
    eyebrow: 'MECHATRONICS & ROBOTIC SYSTEMS / XJTLU',
    heading: ['Understanding the system.', 'Engineering the interface.'],
    introBefore: 'I’m ', introAfter: ', a BEng Mechatronics and Robotic Systems undergraduate at Xi’an Jiaotong-Liverpool University. My current research is RGB-first room-sign navigation, alongside completed robot-software and simulation integration projects.',
    explore: 'Explore the work', cv: 'CV forthcoming', focusLabel: 'Engineering focus', focus: 'CURRENT FOCUS',
    focuses: ['RGB-first room-sign search', 'Robotics perception and reasoning', 'Model-to-simulator integration'],
    focusNotes: ['Implementation decisions.', 'Controlled comparisons.', 'Failures that inform the next step.'],
    selected: 'SELECTED WORK', selectedTitle: 'Engineering, in practice.', all: 'All projects',
    practice: 'HOW I APPROACH THE WORK', practiceTitle: 'Make the boundary explicit.',
    practices: [
      { label: '01 / INTERFACES', title: 'Connect modules deliberately.', text: 'Define model-serving and simulator responsibilities, with explicit HTTP and action-step boundaries.', link: 'See the integration boundary', anchor: 'architecture' },
      { label: '02 / EXPERIMENTS', title: 'Validate the actual interface.', text: 'Distinguish a real Habitat engineering test from learned navigation performance.', link: 'Inspect the comparisons', anchor: 'results' },
      { label: '03 / FAILURE ANALYSIS', title: 'Preserve negative evidence.', text: 'Explain failed model navigation separately from a validated deterministic interface.', link: 'Follow the failure analysis', anchor: 'failure-analysis' },
    ],
    background: 'BACKGROUND', backgroundTitle: ['Mechatronics foundation.', 'Autonomous systems focus.'],
    backgroundText: ['I’m studying BEng Mechatronics and Robotic Systems at Xi’an Jiaotong-Liverpool University (XJTLU). My project work explores how perception, learned models, and navigation interfaces fit together.', 'I’m developing this portfolio for postgraduate engineering study and robotics software opportunities. The case studies document implementation, ownership, and the limits of the available evidence.'],
    development: 'PORTFOLIO IN DEVELOPMENT', developmentText: 'About, CV, and Contact pages are scheduled for a later phase. A CV and public contact address have not yet been supplied.',
    continue: 'CONTINUE EXPLORING', closing: 'Start with the engineering evidence.',
  },
  projects: {
    title: 'Projects', description: 'Robotics projects: ongoing room-sign search research, completed NaVIDA systems integration, and concluded ETPNav experiments.', eyebrow: 'PROJECT INDEX', heading: ['Systems, interfaces,', 'and the evidence between.'], intro: 'Current RGB-first research and completed engineering work. Each entry distinguishes project lifecycle from experimental validation.', label: 'Engineering projects', statusTitle: 'READING THE STATUS', statusText: 'Current research is not a completed navigation loop. Completed engineering validates interfaces or software scope, not learned navigation success or physical deployment.',
  },
  card: { project: 'PROJECT', finding: 'ENGINEERING FINDING', scope: 'CURRENT SCOPE', tags: 'Technical focus', read: 'Read case study', pending: 'Case study in preparation', repository: 'public repository' },
  status: { research: 'Research in progress', modules: 'Modules implemented', integration: 'Integration verified' },
  lifecycle: { active: 'Current research', completed: 'Completed engineering', discontinued: 'Concluded research' },
  validationLevel: { 'offline-prototype': 'Offline validation only', 'controlled-experiment': 'Controlled development experiments', 'simulator-integration': 'Simulator integration verified', 'simulation-workspace': 'Simulation software workspace' },
  moduleStatus: { implemented: 'implemented', validated: 'validated', 'in-progress': 'in progress', planned: 'planned' },
  case: {
    back: '← Project index', eyebrow: 'ENGINEERING CASE STUDY', role: 'MY ROLE', environment: 'ENVIRONMENT', source: 'PUBLIC SOURCE', showcase: 'Showcase repository', moduleLabel: 'Implementation and validation status', nav: 'Case study sections', contents: 'IN THIS CASE STUDY', checked: 'Public documentation checked', continue: 'CONTINUE EXPLORING', all: 'Back to all projects', docs: 'Read the public documentation',
    sections: ['Overview', 'Problem & motivation', 'My contributions', 'System architecture', 'Implementation', 'Experiments & results', 'Failure analysis', 'Limitations', 'Demo & media', 'Repository & attribution'],
  },
  media: { pending: 'AUTHENTIC MEDIA PENDING', note: 'Labeled development placeholder · no image supplied', pixels: 'px' },
  diagram: {
    title: 'SYSTEM BOUNDARY', adaptation: 'Adaptation interface', upstream: 'Upstream modules', label: 'Public system architecture',
    nodes: [
      { label: '01 / INPUT', title: 'RGB + geometry', lines: ['Language instruction', 'Dense / sparse observations'] },
      { label: '02 / STUDIED INTERFACE', title: 'Waypoint proposal', lines: ['Geometry variants: tested', 'Learned adapter: unfinished'] },
      { label: '03 / UPSTREAM', title: 'GraphMap', lines: ['Candidate association', 'Topological representation'] },
      { label: '04 / UPSTREAM', title: 'Planner → execution', lines: ['Language-conditioned', 'Navigation in Habitat'] },
    ],
    caption: 'Conceptual diagram redrawn from the public project documentation. Downstream modules are kept frozen wherever possible. This is an architecture explanation, not an experimental screenshot.',
  },
  results: {
    label: 'Controlled experiment results; scroll horizontally on small screens', captionBefore: 'Fixed 20-episode ', captionAfter: ' development panel · controlled comparisons, not official benchmark results', method: 'Method', baseline: 'Reference baseline',
    methods: ['Original ETPNav', 'Geometry V0', 'Geometry + bounded NMS', 'MRU', 'G-Min', 'Sparse depth zero-shot'],
    explanation: 'SR: success rate; SPL: success weighted by path length; NE: navigation error; OS: oracle success; nDTW: normalized dynamic time warping; SDTW: success-weighted DTW. Arrows indicate the preferred direction. Values are reproduced from the ', source: 'project closeout report', afterSource: '; experiments were not rerun for this website.',
  },
  notFound: { title: 'Page not found', description: 'This page is not available. Return to evenS’s engineering portfolio.', eyebrow: '404 / PAGE NOT FOUND', heading: 'No page at this address.', text: 'The page may have moved or may not yet be part of the portfolio.', home: 'Return home' },
};

export type Dictionary = typeof en;

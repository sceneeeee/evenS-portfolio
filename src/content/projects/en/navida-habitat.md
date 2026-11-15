---
locale: en
slug: navida-habitat
title: NaVIDA × Habitat
subtitle: From model output to simulator actions.
evidence: Real-checkpoint HTTP smoke integration is documented; formal benchmark evaluation remains pending.
summary: A model-side integration of an official NaVIDA checkpoint, a strict action parser, and a stateful inference service connected to a collaborator’s Habitat evaluator.
order: 3
caseStudyReady: false
status: integration
statusAsOf: '2026-11-03'
role: Personal contribution breakdown awaiting confirmation
ownershipSummary: 'The model service belongs to this repository; the Habitat evaluator belongs to the collaborator’s repository. My personal contribution breakdown is awaiting confirmation.'
environment: NaVIDA checkpoint / localhost HTTP / Habitat
tags: [Embodied AI, Model inference, Action parsing]
repository: https://github.com/sceneeeee/navida-habitat
contributions: []
contributionNote: Repository-level functionality is documented here; personal ownership will be confirmed before the detailed case study is written.
collaboratorWork:
  - RtimesC/habitat-lab owns the Habitat evaluator, client adapter, environment stepping, trajectory/media output, and environment metrics.
modules:
  - name: Real-checkpoint HTTP integration
    status: validated
    context: Multistep smoke integration reported in the public README; not a standard R2R benchmark.
  - name: Formal benchmark and robot deployment
    status: planned
    context: Neither formal benchmark performance nor physical deployment is claimed.
sources:
  - label: Public README
    url: https://github.com/sceneeeee/navida-habitat/blob/main/README.md
    checkedAt: '2026-11-03'
    ref: main
---
Case study is reserved for Phase 3. Personal contribution attribution remains to be confirmed.

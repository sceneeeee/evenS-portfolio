---
locale: en
slug: room-sign-navigation
title: Room-Sign-Guided Navigation
subtitle: Reasoning from observed room and sign evidence.
evidence: M2.4 is merged into main; M3.2 recorded-video door advice is tested, but M3.3 live acceptance and complete room search remain unverified.
summary: RGB-first human-in-the-loop indoor room search combining door-label perception, evidence-aware landmark memory, Rule/Qwen text planning, and bounded visual observation advice.
order: 1
caseStudyReady: false
status: research
lifecycle: active
validationLevel: offline-prototype
statusAsOf: '2026-11-16'
role: Member A — memory, reasoning & evaluation
ownershipSummary: 'My role: M2.1–M2.4 memory, Rule/Qwen strategies, offline evaluation, and integration/evaluation design. Member B owns M0 OCR capture and M1 perception. Offline integration is not field success.'
environment: Standalone reasoning / replay; separate field capture
tags: [Landmark memory, OCR evidence, Qwen3-4B]
repository: https://github.com/sceneeeee/room-sign-guided-navigation
contributions:
  - Implemented M2.1–M2.4, LandmarkMemory, Rule reasoning, Qwen3-4B text planning, and the offline evaluation framework.
  - Designed integration and evaluation; M1/M2.4 offline replay is now merged, with M3.3 live acceptance still pending.
collaboratorWork:
  - Member B owns M0 camera capture and OCR field workflow.
  - Member B owns M1 perception and cross-frame association; M1 completion is not claimed.
modules:
  - name: M2.1–M2.4 and M1/M2.4 offline integration
    status: validated
    context: Merged into main via PR #4; replay of three manually associated observations, without live FOUND confirmation.
  - name: M3.2 recorded-video door advice
    status: validated
    context: Bounded suggestions tested on recorded video; motion_authorized=false, forward guidance and target confirmation unverified.
  - name: M3.3 live acceptance and full search loop
    status: planned
    context: No accepted real-time multi-door closed loop or controlled search-success results.
sources:
  - label: Public README
    url: https://github.com/sceneeeee/room-sign-guided-navigation/blob/main/README.md
    checkedAt: '2026-11-16'
    ref: main
---
The only ongoing research project. Recorded-video M3.2 advice is not motion authorization; real-time M3.3 acceptance and complete room search remain pending.

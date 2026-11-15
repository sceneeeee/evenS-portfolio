---
locale: en
slug: room-sign-navigation
title: Room-Sign-Guided Navigation
subtitle: Reasoning from observed room and sign evidence.
evidence: Capture and reasoning exist as separate modules. The full search loop is not integrated.
summary: An RGB-first research testbed combining room-label evidence, landmark memory, and rule or text-LLM decisions for human-in-the-loop search.
order: 2
caseStudyReady: false
status: modules
statusAsOf: '2026-11-03'
role: Member A — memory, reasoning & evaluation
ownershipSummary: 'My work: M2.1–M2.4 memory, Rule/Qwen planning and offline evaluation. Member B: capture/OCR workflow and M1 perception. My integration and evaluation-design responsibilities do not imply a completed search loop.'
environment: Standalone reasoning / replay; separate field capture
tags: [Landmark memory, OCR evidence, Qwen3-4B]
repository: https://github.com/sceneeeee/room-sign-guided-navigation
contributions:
  - Implemented M2.1–M2.4, LandmarkMemory, Rule reasoning, Qwen3-4B text planning, and the offline evaluation framework.
  - Owns M1/M2 integration and M3/M4 integration and evaluation design; full-loop completion is not claimed.
collaboratorWork:
  - Member B owns M0 camera capture and OCR field workflow.
  - Member B owns M1 perception and cross-frame association; M1 completion is not claimed.
modules:
  - name: M2.1–M2.4
    status: implemented
    context: Standalone feat/m2-reasoning branch, separate from the M0 capture workflow on main.
  - name: M1/M2 integration and complete search loop
    status: planned
    context: Integration responsibility is confirmed; implemented full-loop navigation is not claimed.
sources:
  - label: Public README
    url: https://github.com/sceneeeee/room-sign-guided-navigation/blob/main/README.md
    checkedAt: '2026-11-03'
    ref: main; reasoning described on feat/m2-reasoning
---
Case study is reserved for Phase 3. The full search loop is not integrated.

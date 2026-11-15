---
locale: zh
slug: room-sign-navigation
title: 门牌引导导航
subtitle: 根据已观测到的房间与标牌证据进行推理。
evidence: 采集与推理分别已有独立模块，完整搜索闭环尚未集成。
summary: 一个以 RGB 为主要输入的研究平台，结合门牌证据、地标记忆与规则或文本大模型决策，探索人在环搜索。
order: 2
caseStudyReady: false
status: modules
statusAsOf: '2026-11-03'
role: 成员 A — 记忆、推理与评估
ownershipSummary: 我的工作包括 M2.1–M2.4 的记忆、Rule / Qwen 规划与离线评估。成员 B 负责采集 / OCR 流程及 M1 感知。我承担集成与评估设计职责，不代表完整搜索闭环已经实现。
environment: 独立推理 / 回放；现场采集流程与之分离
tags: [地标记忆, OCR 证据, Qwen3-4B]
repository: https://github.com/sceneeeee/room-sign-guided-navigation
contributions:
  - 已实现 M2.1–M2.4、LandmarkMemory、Rule 推理、Qwen3-4B 文本规划及离线评估框架。
  - 负责 M1/M2 集成、M3/M4 集成与评估设计；不声称完整闭环已完成。
collaboratorWork:
  - 成员 B 负责 M0 相机采集与 OCR 现场流程。
  - 成员 B 负责 M1 感知与跨帧关联；不声称 M1 已完成。
modules:
  - name: M2.1–M2.4
    status: implemented
    context: 位于独立的 feat/m2-reasoning 分支，与 main 上的 M0 采集流程分离。
  - name: M1/M2 集成与完整搜索闭环
    status: planned
    context: 已确认集成职责，但不声称已经实现完整闭环导航。
sources:
  - label: 公开 README
    url: https://github.com/sceneeeee/room-sign-guided-navigation/blob/main/README.md
    checkedAt: '2026-11-03'
    ref: main；推理模块位于 feat/m2-reasoning
---
项目案例将在第三阶段编写。完整搜索闭环尚未集成。

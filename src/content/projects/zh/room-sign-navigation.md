---
locale: zh
slug: room-sign-navigation
title: 门牌引导导航
subtitle: 根据已观测到的房间与标牌证据进行推理。
evidence: M2.4 已合入 main；M3.2 录制视频门前观察建议已测试，但 M3.3 实时验收与完整寻房闭环尚未完成。
summary: 以纯 RGB 为输入的 Human-in-the-Loop 室内寻房研究，整合门牌识别、地标记忆、规则与文本 LLM 推理以及有限的视觉观察建议。
order: 1
caseStudyReady: false
status: research
lifecycle: active
validationLevel: offline-prototype
statusAsOf: '2026-11-16'
role: 成员 A — 记忆、推理与评估
ownershipSummary: '本人负责 M2.1–M2.4 记忆、Rule/Qwen 策略与离线评估，并负责集成/评估设计；队友负责 M0 OCR 采集和 M1 门牌感知。已有离线连接不代表实地闭环成功。'
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
  - name: M2.1–M2.4 与 M1/M2.4 离线集成
    status: validated
    context: 通过 PR #4 合入 main；包含 3 条人工关联观测的离线回放，无真实 FOUND 验证。
  - name: M3.2 recorded-video door advice
    status: validated
    context: 录制视频的有界观察建议已测试；motion_authorized=false，未验证真实前进或目标识别。
  - name: M3.3 live acceptance 与完整搜索闭环
    status: planned
    context: 尚未完成现场多门闭环和成功率、耗时等受控对比。
sources:
  - label: 公开 README
    url: https://github.com/sceneeeee/room-sign-guided-navigation/blob/main/README.md
    checkedAt: '2026-11-16'
    ref: main；推理模块位于 feat/m2-reasoning
---
项目案例将在第三阶段编写。完整搜索闭环尚未集成。

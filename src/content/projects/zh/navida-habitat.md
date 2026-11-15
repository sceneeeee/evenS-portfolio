---
locale: zh
slug: navida-habitat
title: NaVIDA × Habitat
subtitle: 从模型输出到仿真动作。
evidence: 公开文档记录了真实 checkpoint 的 HTTP 冒烟集成测试；正式基准评测仍待开展。
summary: 在模型侧集成官方 NaVIDA checkpoint、严格动作解析器与有状态推理服务，并连接协作者维护的 Habitat 评估器。
order: 3
caseStudyReady: false
status: integration
statusAsOf: '2026-11-03'
role: 个人贡献明细待确认
ownershipSummary: 模型服务属于本仓库；Habitat 评估器属于协作者的仓库。我的个人贡献明细仍待确认。
environment: NaVIDA checkpoint / 本机 HTTP / Habitat
tags: [具身 AI, 模型推理, 动作解析]
repository: https://github.com/sceneeeee/navida-habitat
contributions: []
contributionNote: 此处描述仓库层面的功能；编写详细案例前，需确认具体个人贡献。
collaboratorWork:
  - RtimesC/habitat-lab 负责 Habitat 评估器、客户端适配、环境步进、轨迹 / 媒体输出及环境指标。
modules:
  - name: 真实 checkpoint 的 HTTP 集成
    status: validated
    context: 公开 README 报告了多步冒烟集成测试；不属于标准 R2R 基准评测。
  - name: 正式基准评测与机器人部署
    status: planned
    context: 不声称已取得正式基准性能或完成实体部署。
sources:
  - label: 公开 README
    url: https://github.com/sceneeeee/navida-habitat/blob/main/README.md
    checkedAt: '2026-11-03'
    ref: main
---
项目案例将在第三阶段编写。个人贡献归属仍待确认。

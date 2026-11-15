---
locale: zh
slug: ros2-fishbot
title: ROS 2 FishBot
subtitle: 基于 Gazebo 的移动机器人仿真工作区。
evidence: ROS 2 Humble 多包工程包括机器人描述、ros2_control、Nav2 示例、自动巡逻和自定义服务；没有实体机器人验收。
summary: 以 URDF/Xacro、Gazebo Classic、控制器、Nav2 和自动巡逻模块为核心的纯仿真软件工程集成。
order: 4
caseStudyReady: false
status: integration
lifecycle: completed
validationLevel: simulation-workspace
statusAsOf: '2026-11-16'
role: ROS 2 软件工作区集成与仿真应用
ownershipSummary: '仅仿真项目；未购买、装配或部署实体机器人，结项时也未重新执行完整 Gazebo/Nav2 回归。'
environment: ROS 2 Humble / Gazebo Classic / Nav2
tags: [ROS 2, Gazebo, Nav2, 仅仿真]
repository: https://github.com/sceneeeee/ros2-fishbot
contributions:
  - 将 URDF/Xacro 机器人描述、控制器、导航参数及应用整理为 ROS 2 工作区。
  - 集成航点导航示例、巡逻任务编排、自定义服务消息和摄像头图片保存代码。
contributionNote: 代码与文档仅支持软件实现范围，不声称实体部署或本轮重新完成完整仿真验收。
collaboratorWork: []
modules:
  - name: 仿真软件工作区
    status: implemented
    context: 模块已进入源码，但结项时没有重跑完整 Gazebo/Nav2 验收。
  - name: 实体 FishBot 部署
    status: planned
    context: 未购买或装配，无任何实体机器人验收。
sources:
  - label: 仿真项目结项
    url: https://github.com/sceneeeee/ros2-fishbot/blob/main/docs/project-closeout.md
    checkedAt: '2026-11-16'
    ref: main
---
仅作为次级仿真工程项目展示，不声称实体部署或新的导航成绩。

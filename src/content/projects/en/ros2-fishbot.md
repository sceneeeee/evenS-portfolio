---
locale: en
slug: ros2-fishbot
title: ROS 2 FishBot
subtitle: Gazebo-based mobile robot simulation workspace.
evidence: A modular ROS 2 Humble workspace with robot description, ros2_control, Nav2 examples, patrol application and custom services; no physical robot acceptance.
summary: Simulation-only software engineering integration of URDF/Xacro, Gazebo Classic, controllers, Nav2 and autonomous patrol modules.
order: 4
caseStudyReady: false
status: integration
lifecycle: completed
validationLevel: simulation-workspace
statusAsOf: '2026-11-16'
role: ROS 2 workspace integration and simulation application
ownershipSummary: 'Simulation-only project; physical hardware was neither purchased nor deployed, and no fresh full Gazebo/Nav2 regression was claimed at closeout.'
environment: ROS 2 Humble / Gazebo Classic / Nav2
tags: [ROS 2, Gazebo, Nav2, Simulation only]
repository: https://github.com/sceneeeee/ros2-fishbot
contributions:
  - Organized the URDF/Xacro robot description, controllers, navigation configuration and applications as a ROS 2 workspace.
  - Integrated sample waypoint navigation, patrol orchestration, custom service messages and camera-image capture code.
contributionNote: Code and documented workflow demonstrate software scope; physical execution and new full-simulation acceptance are not claimed.
collaboratorWork: []
modules:
  - name: Simulation software workspace
    status: implemented
    context: Modules are present in source, but closeout did not rerun full Gazebo/Nav2 acceptance.
  - name: Physical FishBot deployment
    status: planned
    context: Not purchased or assembled; no physical robot validation.
sources:
  - label: Simulation closeout
    url: https://github.com/sceneeeee/ros2-fishbot/blob/main/docs/project-closeout.md
    checkedAt: '2026-11-16'
    ref: main
---
Simulation-only secondary engineering project. No physical-robot deployment or newly measured navigation result is implied.

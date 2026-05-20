---
title: "Learning dexterous manipulation from in-the-wild human video"
date: 2026-05-15
venue: "RSS 2026"
authors:
  - "Shih-Chieh Chou"
  - "Jordan Smith"
  - "Karen Lee"
thumbnail: "/projects/dexterous-grasping/thumb.jpg"
hero_video: "/projects/dexterous-grasping/hero.mp4"
icon: "hand-grab"
links:
  paper: "https://arxiv.org/abs/2605.xxxxx"
  code: "https://github.com/JayChou04/dex-video"
  video: "https://youtu.be/xxxxx"
tags: ["manipulation", "imitation learning"]
status: "published"
featured: true
bibtex: |
  @inproceedings{chou2026dexterous,
    title={Learning dexterous manipulation from in-the-wild human video},
    author={Chou, Shih-Chieh and Smith, Jordan and Lee, Karen},
    booktitle={Robotics: Science and Systems},
    year={2026}
  }
---

## TL;DR

A short one-or-two-sentence summary for skimming readers.

## Abstract

We present a method for learning dexterous manipulation policies from
unconstrained internet video of humans. Our approach reads hand pose from
single-view RGB clips, retargets it to a robot embodiment, and distills the
result into a closed-loop policy that transfers to real hardware.

## Method

Three stages: hand-pose extraction, retargeting to the robot embodiment,
and policy distillation. The pipeline is intentionally modular so that each
stage can be swapped out independently for ablations.

## Results

Our method achieves X% success on Y tasks, outperforming the strongest prior
work by Z points on the held-out evaluation set.

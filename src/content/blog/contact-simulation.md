---
title: "On simulating contact in differentiable physics"
description: "Three approaches I've used in practice, where each one breaks, and the tricks that made sim match the real robot."
date: 2026-04-12
tags: ["sim-to-real", "contact"]
read_time: 12
---

Most robot manipulation lives or dies at the contact interface. Here's what
I've learned from trying to get differentiable physics to behave under
contact-rich loads.

## Penalty-based contact

The simplest formulation. A virtual spring resists interpenetration. Easy to
differentiate but stiff problems blow up your integrator if you push the
spring constant high enough to actually feel rigid.

## Linear complementarity

The textbook answer. Solves contact as a constrained optimization at each
step. Crisp behavior, but the gradient through the LCP solver is fiddly.

## Compliant rigid-body approximations

A pragmatic middle ground that's worked well for me in practice when training
manipulation policies that need to transfer to hardware.

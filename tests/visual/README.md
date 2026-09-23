# Visual Regression Policy

Visual regression protects an already-approved visual target. It does not decide whether the design is good. The neutral starter has no approved visual baseline, so `approved-surface.visual.spec.ts` is intentionally skipped. Automated browser checks supplement human browser inspection and File 13 L3 acceptance; they do not replace them.

## Baseline creation

Create a baseline only after the applicable approved visual target exists, normally after approved art direction and keyframes when required, reference-fidelity review when applicable, and representative vertical slice approval. Enable only the approved desktop and mobile states in the visual spec. Record the approval and then capture baselines with `pnpm test:browser:update`. Commit reviewed baseline files. CI never updates snapshots.

## Baseline environment

Screenshots can differ across operating systems, browser builds, rendering environments, and hardware. Generate and compare approved baselines in the same reproducible environment used by CI whenever practical. This repository's CI runs on Ubuntu 24.04 with browser versions pinned by `@playwright/test`; use that environment when approving baselines. Use a deliberate desktop and mobile state for each applicable surface.

## Baseline update rule

`--update-snapshots` is an approval action, not a repair command. Never update a baseline merely to make a failing test green. First determine whether the difference is an intended approved change, responsive transformation, asset/content change, browser/rendering-environment change, regression, or specification drift. Fix unintended changes in the implementation. For an intended consequential change, update the relevant project approval and `PROJECT_WEBSITE_SPEC.md` before updating and reviewing snapshots.

## Reference relationship

Playwright snapshot equality does not replace `docs/acceptance/REFERENCE_FIDELITY_GATE.md`. The fidelity gate compares the project with its governing external or approved reference. Visual regression compares the current implementation with its previously approved implementation state. These are different jobs.

## Motion

Static screenshot regression cannot prove motion quality. Inspect or record consequential motion under the relevant OS modules and acceptance gates, including reduced-motion behavior.

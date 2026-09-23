# VERTICAL SLICE GATE

Use a representative, implemented production-quality slice to prove that strategy, visual system, assets, interaction, responsive behavior, engineering, and integrity can coexist before broad production. Follow `docs/os/12_BUILD_WORKFLOW_OS.md`, especially its vertical-slice and risk-first validation rules. This record does not replace the current `PROJECT_WEBSITE_SPEC.md`, File 08 integrity requirements, File 09 complexity decisions, or File 13 acceptance QA.

## Gate State

Select exactly one for this review:

- NOT READY
- BUILDING
- IN REVIEW
- REVISION REQUIRED
- APPROVED FOR BROAD PRODUCTION

## Why This Slice

- Route/section:
- Why it is representative:
- Project risks it is intended to expose:
- Systems that intersect here:

Choose the slice for its ability to expose invalid assumptions, not for its visual appeal alone.

## Required Inputs

Before review, confirm as applicable and link the current decision or artifact:

- current `PROJECT_WEBSITE_SPEC.md`
- resolved Strategy Vector
- relevant specialist decisions
- governing references
- approved art direction
- real or representative A1 content
- real or approved major assets
- known interaction contract
- responsive transformation intent
- engineering architecture
- File 08 requirements in `docs/os/08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md`
- File 09 conditions for T2/T3 complexity in `docs/os/09_COMPLEXITY_ROI_OS.md`

Record missing inputs and their effect on review readiness:

## Slice Requirements

A serious slice should include, as applicable:

- real copy/content
- real typography
- real media or production-representative assets
- real layout/grid behavior
- representative visual-system expression
- responsive transformation
- key interaction or state behavior
- motion when consequential
- semantic document structure
- keyboard/focus behavior
- reduced-motion behavior
- loading/error/fallback behavior when relevant
- asset delivery behavior
- representative performance conditions

The slice is not a static mockup, a desktop-only beauty shot, or complete merely because it compiles. Inspect the actual rendered implementation at representative desktop and mobile viewports, states, and input modes.

## Cross-System Review

For each applicable system, record the rendered evidence, finding, and required correction.

### Strategy

Does the slice express the actual page/user/business objective?

### Reference Fidelity

If reference-led, has `docs/acceptance/REFERENCE_FIDELITY_GATE.md` passed for the applicable scope?

### Visual System

Does it demonstrate the approved hierarchy, typography, media, grid, spacing, materiality, and art direction?

### Assets

Are important visual surfaces using real or approved representative assets rather than generic placeholders?

### Interaction / Motion

Do behaviors have clear jobs and preserve orientation, reversibility, and reduced-motion treatment?

### Responsive

Is mobile/narrow behavior intentionally composed rather than mechanically stacked?

### Engineering

Does implementation preserve semantics, maintainable boundaries, and appropriate technology choices?

### Integrity

Do relevant File 08 accessibility, performance, semantics, resilience, and failure requirements survive in the actual slice? A failed File 08 hard gate cannot be offset by visual quality or a numerical score.

### Complexity

If advanced behavior exists, are File 09 conditions satisfied before the behavior hardens?

## Genericity Red Team

Ask:

- Did implementation drift toward familiar starter-template architecture?
- Did coding convenience override approved art direction?
- Did a component library impose its visual grammar?
- Did placeholder assets flatten the intended visual world?
- Did the desktop concept fail to transform meaningfully on mobile?
- Is motion compensating for weak static design?
- Did responsive implementation reduce the project to generic section stacking?
- Would broad production multiply any weakness visible here?

Any systemic “yes” routes backward to the owning layer. Do not patch repeated symptoms locally.

## Approval Decision

APPROVED FOR BROAD PRODUCTION requires:

- the slice is representative enough to expose meaningful cross-system risk;
- required real content/assets are present;
- strategy survives implementation;
- visual quality survives implementation;
- reference fidelity passes when applicable;
- responsive transformation works;
- interaction/state behavior works;
- relevant File 08 checks pass;
- approved File 09 conditions hold;
- material spec drift is reconciled;
- no systemic genericity failure remains;
- broad production is unlikely to multiply an unresolved architectural problem.

Record decision, reviewer, date, evidence links, and any remaining conditions. A material systemic failure or hard-gate failure prohibits approval regardless of numerical score.

## Failure Routing

If the gate fails, identify:

- HIGHEST WRONG CAUSAL LAYER:
- OWNER / MODULE:
- WHAT FAILED:
- WHY:
- AFFECTED DOWNSTREAM WORK:
- REQUIRED CORRECTION:
- RE-ENTRY CONDITION:

Do not continue broad production until the failed dependency is repaired and the applicable scope is reviewed again.

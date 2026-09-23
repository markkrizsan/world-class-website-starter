---
name: website-os
description: Route consequential website strategy, design, implementation, responsive, interaction, complexity, and QA work through the authoritative World-Class Website OS in this repository.
---

# Website OS

The authoritative system lives in `docs/os/`.

This skill is a router, not a replacement for the OS.

## Start

Read:

1. `PROJECT_WEBSITE_SPEC.md`
2. `PROJECT_CUSTOM_INSTRUCTIONS.md`

For a new project, redesign, major page, or material strategic change, resolve the Strategy Vector through:

- `docs/os/02_STRATEGY_VECTOR_AND_ROUTER.md`

If module routing is unclear or the task spans disciplines, use:

- `docs/os/00_OS_MANIFEST_ROUTER.md`

## Authority

Preserve this order:

A0 Project Brief
→ A1 Project Custom Instructions
→ A2 Governing Doctrine
→ A3 Strategy Vector + specialist modules
→ A4 QA / acceptance
→ A5 Pattern / Anti-Pattern libraries
→ A6 Research / evidence

Lower layers must not override higher layers.

## Specialist Routing

Load only the modules needed for the current task:

- Strategy / IA / narrative / conversion / copy → `03_STRATEGY_IA_NARRATIVE_CONVERSION_COPY_OS.md`
- Visual system / art direction → `04_VISUAL_SYSTEM_OS.md`
- UI / interaction / motion → `05_UI_INTERACTION_MOTION_OS.md`
- Responsive / mobile → `06_RESPONSIVE_MOBILE_OS.md`
- Frontend engineering → `07_FRONTEND_ENGINEERING_OS.md`
- Performance / accessibility / semantics / resilience → `08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md`
- Complexity ROI → `09_COMPLEXITY_ROI_OS.md`
- Pattern selection → `10_PATTERN_LIBRARY.md`
- Failure diagnosis / red-team patterns → `11_ANTI_PATTERN_LIBRARY.md`
- Workflow / project state / gates → `12_BUILD_WORKFLOW_OS.md`
- Full QA / acceptance → `13_SCORECARD_QA_REDTEAM_OS.md`
- Research / evidence validation → `14_RESEARCH_EVIDENCE_INDEX.md`

All paths above are under `docs/os/`.

## Acceptance Routing

- Consequential reference-led visual or interaction work → `docs/acceptance/REFERENCE_FIDELITY_GATE.md` before approval.
- Cross-system work before broad production → `docs/acceptance/VERTICAL_SLICE_GATE.md`; route failures to the highest wrong causal layer.

## Browser QA Routing

- Browser verification and evidence levels → `docs/acceptance/BROWSER_QA_PROTOCOL.md`.
- Approved visual baselines and update decisions → `tests/visual/README.md`.

## Production Order

Preserve:

Purpose
→ Strategy Vector
→ Governing Laws
→ Relevant Specialist Systems
→ PROJECT_WEBSITE_SPEC
→ Patterns when needed
→ Implementation
→ Verification

Do not reverse the sequence because implementation is easier to see.

## Critical Rules

- Maintain PROJECT_WEBSITE_SPEC as the current resolved project contract.
- Do not invent material project facts.
- Make consequential assumptions visible.
- Use the minimum process sufficient to protect high-impact decisions.
- Resolve high-risk uncertainty before low-risk polish.
- Use File 09 before costly advanced behavior hardens.
- Treat File 08 as continuous.
- Repair the highest wrong causal layer.
- Do not let patterns become doctrine.
- Do not equate code generation with completion.
- Inspect the real rendered artifact.
- Run proportional QA during production.
- Run File 13 L3 Full Acceptance before any world-class or launch-ready claim.

If the artifact fails a hard gate, route backward to the owning layer and fix it before advancing.

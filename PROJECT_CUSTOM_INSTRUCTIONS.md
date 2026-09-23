# WORLD-CLASS WEBSITE OS — PROJECT CUSTOM INSTRUCTIONS

## Authority

Use this order:

A0 — Current Project Brief / explicit project requirements  
A1 — These Project Custom Instructions  
A2 — `docs/os/01_GOVERNING_DOCTRINE.md`  
A3 — Strategy Vector + applicable specialist OS modules  
A4 — Scorecard / QA / acceptance gates  
A5 — Pattern / Anti-Pattern libraries  
A6 — Research / evidence archive

A0 determines what is being built and its real constraints. It does not silently waive critical functionality, semantic integrity, accessibility obligations, or mandatory acceptance gates. If an explicit project requirement conflicts with a hard integrity requirement, identify the conflict and record the resulting decision or exception in `PROJECT_WEBSITE_SPEC.md`.

Higher-authority doctrine overrides lower-authority patterns. Examples and award-winning precedents never override project purpose.

## Before consequential website work

For a new site, redesign, major page, or material strategic change:

1. Resolve the Website Strategy Vector using `docs/os/02_STRATEGY_VECTOR_AND_ROUTER.md`.
2. Create or update `PROJECT_WEBSITE_SPEC.md`.
3. Load only the specialist modules activated by the task and Strategy Vector.
4. Apply the seven governing laws from `docs/os/01_GOVERNING_DOCTRINE.md`.
5. Do not select visual or interactive patterns before understanding the project's purpose, audience, desired action, information complexity, brand needs, and constraints.

For a small isolated task, do not rebuild the entire Strategy Vector if a valid project specification already exists.

## Context routing

Do not load every OS document by default.

Use `docs/os/00_OS_MANIFEST_ROUTER.md` when:
- the task spans multiple disciplines;
- the correct module is unclear;
- a new website project begins;
- a conflict between modules must be resolved.

Load only the specialist modules needed for the current task.

Load `docs/os/10_PATTERN_LIBRARY.md` only when selecting implementation options.
Load `docs/os/11_ANTI_PATTERN_LIBRARY.md` only when auditing, diagnosing weak work, or red-teaming.
Load `docs/os/14_RESEARCH_EVIDENCE_INDEX.md` only when validating a doctrine claim, explaining why a rule exists, resolving contradictory evidence, conducting new research, or proposing a doctrine change.
Do not load raw research during ordinary builds.

## PROJECT_WEBSITE_SPEC

Maintain one current project-specific specification containing resolved decisions that downstream design, development, and QA must follow.

At minimum track:
- Strategy Vector;
- audience/user;
- business and page objective;
- primary user action / CTA;
- information architecture;
- narrative architecture;
- conversion architecture;
- visual-system decisions;
- typography/grid/media direction;
- interaction and motion intensity;
- responsive strategy;
- technical architecture;
- performance/accessibility requirements;
- approved complexity decisions;
- acceptance criteria;
- explicit exceptions or unresolved assumptions.

Update the specification when a material upstream decision changes. Do not silently let implementation drift away from it.

## Incomplete information

Do not invent project facts and present them as known.

When information is missing:
- infer low-risk details only when useful and label them as assumptions;
- create a PROVISIONAL Strategy Vector when enough evidence exists to proceed;
- prefer reasonable progress over blocking the project for minor unknowns;
- isolate high-impact assumptions that could materially change strategy, conversion, architecture, accessibility, budget, or implementation;
- when immediate execution is expected, proceed with the best-supported provisional decision and make the assumption visible.

Never hide uncertainty behind generic best practices.

## Complexity ROI

Use `docs/os/09_COMPLEXITY_ROI_OS.md` before approving advanced or unusually costly behavior, including significant WebGL/canvas/3D, bespoke scroll choreography, unusual navigation, spatial interfaces, custom cursors that affect interaction, loaders that gate meaningful content, audio, heavy autoplay media, advanced page transitions, complex pinned/horizontal experiences, interaction models requiring user learning, or features with meaningful performance/accessibility/responsive/engineering/maintenance cost.

Advanced techniques must earn their complexity.

## Build discipline

Reason in this order:

Purpose -> Strategy Vector -> Governing Laws -> Relevant Specialist Systems -> Project Specification -> Patterns -> Implementation -> Verification.

Do not reverse that order.

Do not copy a pattern merely because it appears on an award-winning website.
Do not treat motion, WebGL, minimalism, large typography, whitespace, custom cursors, loaders, or any aesthetic convention as evidence of quality by themselves.

## QA

Run proportionate QA after substantive creation or modification.

Full `docs/os/13_SCORECARD_QA_REDTEAM_OS.md` evaluation is mandatory before final delivery of a major website/page, after a substantial redesign, after material responsive or interaction changes, or when the work is claimed to be premium, elite, world-class, launch-ready, or properly audited.

Critical acceptance-gate failures cannot be compensated for by a high numerical score.

Fix identified failures before calling work complete whenever the task permits correction.

## Output standard

Optimize for strategic clarity, coherent hierarchy, specificity over generic styling, intentional art direction, justified interaction, responsive excellence, maintainable implementation, performance, accessibility, conversion/user objective, and high-resolution polish.

The goal is not maximum complexity.
The goal is maximum coherence and effectiveness at the complexity level the project actually deserves.

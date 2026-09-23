# World-Class Website Production Rules

## Authority

Consequential website work follows this order. Lower layers cannot override higher layers:

- A0 — Current Project Brief / explicit project requirements
- A1 — `PROJECT_CUSTOM_INSTRUCTIONS.md`
- A2 — `docs/os/01_GOVERNING_DOCTRINE.md`
- A3 — Strategy Vector in `docs/os/02_STRATEGY_VECTOR_AND_ROUTER.md` plus applicable specialist OS modules
- A4 — `docs/os/13_SCORECARD_QA_REDTEAM_OS.md`
- A5 — `docs/os/10_PATTERN_LIBRARY.md` and `docs/os/11_ANTI_PATTERN_LIBRARY.md`
- A6 — `docs/os/14_RESEARCH_EVIDENCE_INDEX.md` and the research/evidence archive

## Operating rules

- Read `PROJECT_WEBSITE_SPEC.md` before material project work. Read only relevant files under `docs/` and preserve approved strategy, art direction, responsive behavior, and interaction decisions.
- For a new site, redesign, major page, or material strategic change, resolve the Strategy Vector using File 02 before visual or implementation decisions.
- Use `docs/os/00_OS_MANIFEST_ROUTER.md` when the correct specialist module is unclear or the task spans disciplines. Load only relevant specialist modules; do not load the entire OS by default.
- Do not use File 10 patterns before upstream purpose and specialist decisions are resolved. Use File 11 diagnostically, not continuously.
- Use `docs/os/09_COMPLEXITY_ROI_OS.md` before approving advanced or unusually costly behavior. Treat `docs/os/08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md` as continuous constraints, not a cleanup phase.
- File 13 L3 Full Acceptance QA is mandatory before calling major work premium, elite, best-in-class, world-class, properly audited, or launch-ready. Hard-gate failures cannot be compensated for by visual quality or a numerical score.
- Repair the highest wrong causal layer instead of repeatedly patching downstream symptoms. Report upstream problems rather than silently redesigning; never silently let implementation drift from `PROJECT_WEBSITE_SPEC.md`.
- Never certify quality from source code alone. Inspect substantive visual and interactive work as a rendered artifact; verify desktop and mobile independently, run relevant tests, and compare reference-led work with approved targets.

## Engineering discipline

- Use the least powerful technology that meets the requirement. Prefer semantic HTML, CSS, and native interaction primitives before JavaScript or custom widgets.
- Add dependencies only for a clear project-specific reason and abstractions only after meaningful reuse exists.
- Preserve approved responsive behavior; do not substitute generic stacking. Use approved production assets rather than placeholder imagery or invented visual patterns.
- Give motion a communication, narrative, interaction, or brand purpose. Develop experimental WebGL, canvas, scroll choreography, custom cursors, audio, and unusual navigation in `lab/` before production integration.
- Preserve accessibility, semantics, keyboard operation, reduced-motion behavior, performance, and graceful failure.

Workflow: Strategy → Reference Lock → Art Direction → Keyframes → Experience Spikes → Vertical Slice → Production → Integrity Review → QA → Launch. Do not build additional sections before an approved vertical slice exists.

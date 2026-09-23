# 00 — OS MANIFEST & CONTEXT ROUTER

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A1 routing reference  
**Dependencies:** None  
**Last Validated:** 2026-09-12

## 1. ROLE

This document answers:
1. Which Website OS document governs the current problem?
2. Which additional documents are actually necessary?
3. Which documents should remain unloaded?

This is the map, not the territory.

## 2. AUTHORITY MAP

| Authority | Source | Function |
|---|---|---|
| A0 | Current Project Brief | Defines the actual project, audience, objective, requirements and constraints |
| A1 | Project Custom Instructions | Governs operating behavior, routing and process |
| A2 | `01_GOVERNING_DOCTRINE.md` | Defines stable, cross-project design laws |
| A3 | `02–09`, `12` | Context-sensitive strategy, design, engineering and process rules |
| A4 | `13_SCORECARD_QA_REDTEAM_OS.md` | Evaluation and acceptance authority |
| A5 | `10–11` | Patterns and anti-patterns |
| A6 | `14` + research archive | Evidence and provenance |

### Conflict resolution

1. Determine whether the conflict concerns project purpose, governing principle, implementation choice, or evidence.
2. Preserve explicit project objectives and required functionality.
3. Apply non-waivable integrity requirements.
4. Apply governing doctrine.
5. Apply specialist rules relevant to the Strategy Vector.
6. Select patterns only after the previous levels agree.
7. Consult evidence when doctrine is challenged or ambiguity remains.

A pattern may never override a governing law. A specialist module may refine a law but may not contradict it.

### Namespace note

`AUTHORITY A0–A6` names governance levels. Files 03–06 also use `PRIORITY A1–A4` for information priority (`PRIMARY / SUPPORTING / OPTIONAL / DEFERRED`). When ambiguity is possible, write the namespace explicitly.

## 3. GOVERNING LAW INDEX

Authoritative definitions live in `01_GOVERNING_DOCTRINE.md`.

- G1 — Purpose Governs Design
- G2 — Complexity Must Be Made Legible
- G3 — Familiar Semantics Buy Creative Freedom
- G4 — Stable Systems Enable Expressive Variation
- G5 — Responsive Design Preserves Value, Not Geometry
- G6 — Sophistication Must Earn Its Complexity
- G7 — Quality Is Coherence at High Resolution

## 4. DOCUMENT REGISTRY

| File | Role | Load when |
|---|---|---|
| `01_GOVERNING_DOCTRINE.md` | Stable laws and reasoning hierarchy | New builds, major decisions, audits, conflicts |
| `02_STRATEGY_VECTOR_AND_ROUTER.md` | Classify the project and activate modules | New site/page, redesign, major strategic change |
| `03_STRATEGY_IA_NARRATIVE_CONVERSION_COPY_OS.md` | What is communicated, in what order, toward what decision | Strategy, IA, messaging, page structure, conversion |
| `04_VISUAL_SYSTEM_OS.md` | Composition, typography, grid, art direction, media, brand | Visual design and art direction |
| `05_UI_INTERACTION_MOTION_OS.md` | Behavior over time | UI states, microinteraction, animation, scroll, transitions |
| `06_RESPONSIVE_MOBILE_OS.md` | Cross-device transformation | Responsive/mobile decisions |
| `07_FRONTEND_ENGINEERING_OS.md` | Production architecture | Coding, components, CSS, JS, creative development |
| `08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md` | Technical/user integrity | Build, audit, optimization, launch |
| `09_COMPLEXITY_ROI_OS.md` | Complexity decision gate | Advanced interaction/media/creative-development proposals |
| `10_PATTERN_LIBRARY.md` | Contextual implementation options | Selecting specific patterns |
| `11_ANTI_PATTERN_LIBRARY.md` | Failure diagnosis | Critique, QA, generic/broken output |
| `12_BUILD_WORKFLOW_OS.md` | End-to-end production process | Full website projects |
| `13_SCORECARD_QA_REDTEAM_OS.md` | Evaluation and acceptance | Substantive QA and pre-launch |
| `14_RESEARCH_EVIDENCE_INDEX.md` | Evidence provenance | Validation, doctrine changes, research |
| `99_CHANGELOG_AND_VERSION_REGISTRY.md` | Version history | Maintaining/upgrading the OS |

## 5. TASK TAGS

### FOUNDATION
New project, major redesign, ambiguous cross-disciplinary task. Load `01`, `02`, and appropriate downstream modules.

### INTENT
Strategy, positioning, IA, content order, copy, conversion. Load `03` plus `01/02` if strategic basis is unresolved.

### EXPRESSION
Composition, grid, typography, imagery, art direction, brand. Load `04` plus current `PROJECT_WEBSITE_SPEC`.

### INTERACTION
Components, states, navigation behavior, motion, scroll, transitions. Load `05`, plus `09` when complexity is nontrivial and `06` when responsive behavior is implicated.

### RESPONSIVE
Mobile, breakpoint, touch, reflow, crop, responsive hierarchy. Load `06` plus relevant source module (`03`, `04`, or `05`).

### BUILD
HTML/CSS/JS/framework architecture, components, implementation. Load `07`, `08`, and whichever design modules define intended behavior.

### INTEGRITY
Performance, accessibility, semantics, technical SEO. Load `08` plus `07` when implementation changes are needed.

### COMPLEXITY
WebGL, 3D, canvas, unusual navigation, heavy motion/media, spatial interfaces. Load `09` plus relevant `05–08`.

### QA
Audit, red-team, launch-readiness, world-class evaluation. Load `13`, affected specialist modules, and `11` for anti-pattern diagnosis.

### EVIDENCE
Research, justification, doctrine challenge, system update. Load `14` and only the specific raw evidence needed.

### OS MAINTENANCE
Versioning, migration, module reconciliation, release administration. Load `99` plus only the affected modules/support artifacts. File 99 is not ordinary website-project context.

## 6. ROUTING RULES

### ROUTE-1 — Minimum sufficient context
Use the smallest document set capable of answering correctly.

### ROUTE-2 — Upstream before downstream
If an implementation problem is caused by an unresolved strategic decision, route upstream rather than patching symptoms.

### ROUTE-3 — Existing specification first
If `PROJECT_WEBSITE_SPEC` already resolves a decision, treat it as current project state unless the user changes it.

### ROUTE-4 — No unnecessary doctrine reload
Small execution tasks within a settled project may use specialist docs plus `PROJECT_WEBSITE_SPEC`. Reload doctrine only for consequential tradeoffs, conflicts, or audits.

### ROUTE-5 — Research stays cold
Do not retrieve raw benchmark research during ordinary design/build work.

### ROUTE-6 — Patterns are optional
Load Pattern Library only when implementation options are needed.

### ROUTE-7 — Anti-patterns are diagnostic
Load Anti-Pattern Library during critique/red-team or when weak output needs diagnosis.

## 7. PROJECT STATE MODEL

File 12 owns the canonical project-state machine. Substantial website projects use, when the distinctions add value:

`INTAKE -> PROVISIONAL -> ACTIVE -> APPROVED_FOR_DESIGN -> APPROVED_FOR_BUILD -> BUILD -> INTEGRITY_REVIEW -> LAUNCH_CANDIDATE -> QA -> LAUNCH_READY -> REVIEW`

`REVISION_REQUIRED` may interrupt any state after PROVISIONAL. Small projects may compress adjacent states when doing so does not hide an unresolved gate.

These are **website-project states**, not File 99 OS release states.

## 8. PROJECT_WEBSITE_SPEC MINIMUM SCHEMA

Track, when relevant:
- project identity / current project state / current gate
- audience, user job, business/page objective, primary action
- Strategy Vector and assumptions
- IA / journeys / narrative / proof / conversion / copy
- visual system / hierarchy / typography / grid / media
- interaction / motion / orientation / reduced-motion decisions
- responsive transformation and input strategy
- technical architecture / state / assets / dependencies / resilience
- performance / accessibility / semantics / technical-SEO integrity requirements
- approved complexity decisions and enforceable conditions
- consequential pattern decisions only
- acceptance criteria
- explicit exceptions / residual risks
- QA / launch-readiness state
- open questions / validation requirements

Use `PROJECT_WEBSITE_SPEC.md` as the persistent schema and current project contract in this starter. Do not turn the spec into a transcript or issue tracker.

## 9. COMPLEXITY ROI ROUTING

Route automatically to `09_COMPLEXITY_ROI_OS.md` when a proposed decision introduces meaningful cost in two or more of:
- learning
- UX
- engineering
- runtime performance
- accessibility
- mobile adaptation
- maintenance
- content production

Also route when Interaction Novelty = Exploratory or Experiential Intensity = Experience-first and the proposal affects core navigation/content access.

## 10. QA ROUTING

### Lightweight verification
Use after isolated edits.

### Module-level QA
Use after substantive work within one system.

### Full acceptance QA
Mandatory before final delivery, launch-ready/world-class declaration, or major redesign completion.

## 11. EVIDENCE STATUS

- OBSERVED — directly encountered or measured.
- DOCUMENTED — explicitly supported by credible source.
- INFERRED [HIGH/MEDIUM/LOW] — supported inference.
- HYPOTHESIZED — plausible explanation awaiting validation.

## 12. VERSIONING

Use semantic versioning: `MAJOR.MINOR.PATCH`.

Module statuses:
- STABLE
- PROVISIONAL
- EXPERIMENTAL
- DEPRECATED

Research may update patterns rapidly. Doctrine changes slowly and only after adversarial validation.

## 13. ROUTER EXIT CONDITION

Routing is complete when:
1. task type is known;
2. Strategy Vector/project specification is known or provisionally established;
3. smallest sufficient module set is selected;
4. unnecessary evidence/specialist context remains unloaded;
5. required downstream QA is identified.

Then execute the work.

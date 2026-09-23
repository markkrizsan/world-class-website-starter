# 12 — BUILD WORKFLOW OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A3  
**Dependencies:** `00`–`11`, current project brief, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC` workflow metadata  
**Hands Off To:** `13_SCORECARD_QA_REDTEAM_OS.md`  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Turn the World-Class Website OS from a collection of specialist systems into a coherent production workflow.

File 12 governs **sequence, state, routing, gates, handoffs, correction loops, change propagation, context discipline, build progression, and launch-candidate preparation**.

It answers:

> What happens next, which module owns the decision, what must exist before advancing, what changes the project specification, what must be verified, and where does work route when a failure exposes an upstream mistake?

File 12 does not replace the detailed reasoning inside Files 03–11. It orchestrates them.

## 2. OPERATING PREMISE

The system should move forward only when the next layer has enough reliable upstream information to do useful work.

The system should move backward whenever downstream work reveals that a higher causal layer is wrong, incomplete, contradictory, or no longer viable.

Therefore:

`Purpose -> Strategy Vector -> Governing Laws -> Relevant Specialist Systems -> PROJECT_WEBSITE_SPEC -> Patterns -> Implementation -> Verification`

Do not reverse this order merely because implementation is easier to see than strategy.

## 3. AUTHORITY BOUNDARY

File 12 is A3 workflow authority.

It may:
- sequence modules;
- define project states;
- define entry/exit gates;
- require upstream routing;
- require `PROJECT_WEBSITE_SPEC` updates;
- define proportional verification during production;
- define handoff payloads.

It may not:
- rewrite A0 project requirements;
- redefine governing laws from File 01;
- invent File 03 strategy;
- choose File 04 art direction;
- choose File 05 motion behavior;
- substitute for File 06 responsive decisions;
- replace File 07 engineering architecture;
- waive File 08 hard requirements;
- approve File 09 complexity on its own;
- promote File 10 patterns into laws;
- turn File 11 diagnosis into automatic repair;
- replace File 13 final QA/acceptance authority.

## 4. WORKFLOW PRINCIPLE — HIGHEST WRONG CAUSAL LAYER

When something fails, repair the **highest causal layer that is actually wrong**.

Examples:
- weak CTA prominence caused by wrong conversion priority -> File 03, not button styling;
- awkward composition caused by unclear PRIORITY A1/A2 hierarchy -> File 03 before File 04;
- motion compensating for weak static hierarchy -> File 04 before File 05;
- breakpoint proliferation caused by desktop-only composition -> File 04/06 before CSS patches;
- accessibility retrofit caused by nonsemantic widget architecture -> File 07 before ARIA patches;
- poor performance caused by an unjustified immersive concept -> File 09, not only asset compression.

Local defects with correct upstream decisions should remain local. Do not escalate every typo into strategy.

## 5. WORKFLOW PRINCIPLE — PROPORTIONAL PROCESS

The same causal order applies across project sizes, but the ceremony does not.

A five-page content site may resolve several gates in one working session. A complex application or WebGL experience may require explicit prototypes, technical spikes, accessibility proofs, performance profiling, and multiple approval states.

Use the **minimum process sufficient to protect high-impact decisions**.

## 6. WORKFLOW PRINCIPLE — EARLY INVALIDATION

Resolve the uncertainties capable of invalidating the most downstream work before polishing low-risk details.

Prioritize:
1. project-purpose conflicts;
2. material audience/offer/action uncertainty;
3. decision-critical content/proof gaps;
4. architecture constraints;
5. advanced complexity viability;
6. accessibility/responsive feasibility;
7. performance feasibility;
8. lower-level visual polish.

Do not perfect what may need to be discarded.

## 7. CORE PROJECT ARTIFACTS

A substantial project should maintain only the artifacts it needs. The typical core set is:

- Current Project Brief — A0 requirements and constraints;
- Website Strategy Vector — File 02 classification;
- `PROJECT_WEBSITE_SPEC` — persistent resolved project contract;
- project assets/content/data as applicable;
- implementation/build artifact;
- test evidence where material;
- File 09 complexity records for T2/T3 features;
- File 13 final QA output when required.

Do not create additional documents merely to imitate enterprise process.

## 8. PROJECT_WEBSITE_SPEC IS THE PERSISTENT CONTRACT

`PROJECT_WEBSITE_SPEC` is the current resolved state downstream work must follow.

It is not:
- a transcript;
- a brainstorming archive;
- a repository of every CSS value;
- a dumping ground for all diagnostics;
- a substitute for specialist modules.

It should contain **material project-specific decisions, requirements, constraints, assumptions, exceptions, and acceptance obligations**.

When chat context and the current spec disagree, use the latest explicit project requirement and intentionally reconcile the spec. Do not allow silent drift.

## 9. WHEN THE SPEC IS CREATED

Create the spec when a task becomes consequential enough that downstream decisions depend on durable project context.

Create/update it for:
- new sites;
- major pages/funnels with distinct objectives;
- redesigns;
- material audience/offer/objective changes;
- major interaction-model changes;
- architecture changes with downstream implications.

Do not require a new spec for a trivial isolated spacing fix inside an already settled project.

## 10. SPEC DECISION STATES

Material decisions may be:

**PROVISIONAL** — best-supported working decision with unresolved material uncertainty.

**RESOLVED** — sufficient confidence exists for downstream use.

**APPROVED** — decision has passed its relevant module gate and may be treated as stable unless new evidence changes it.

**REVISION_REQUIRED** — downstream evidence, user change, conflict, or integrity issue invalidated the current decision.

**SUPERSEDED** — replaced by a newer explicit decision; preserve only when historical trace prevents repeated debate.

Do not treat provisional language as approved fact.

## 11. ASSUMPTION REGISTER

Track only assumptions capable of affecting consequential work.

Classify:

- **ASSUMP-0 LOW-RISK INFERRED** — reasonable assumption; proceed and revisit if contradicted.
- **ASSUMP-1 MATERIAL UNRESOLVED** — materially affects strategy/design/build; proceed only where reversible.
- **ASSUMP-2 VALIDATION REQUIRED** — evidence/prototype/input needed before high-cost commitment.
- **ASSUMP-3 BLOCKER** — forward progress would create unacceptable risk or fiction.

Record:

```text
ASSUMPTION:
CLASS:
AFFECTS:
CURRENT WORKING DECISION:
VALIDATION NEEDED:
OWNER / SOURCE:
REVIEW POINT:
```

Do not stop the project for ASSUMP-0 assumptions. Do not bury ASSUMP-3 blockers inside a “notes” section.

## 12. CONTEXT ROUTING — DEFAULT START

For substantial work:
1. read the current project brief;
2. read the current `PROJECT_WEBSITE_SPEC` if it exists;
3. use `00_OS_MANIFEST_ROUTER.md` when module selection is not obvious or the task spans disciplines;
4. load only the activated specialist modules;
5. load File 10 only when selecting implementation patterns;
6. load File 11 only when diagnosing weak output, auditing, or red-teaming;
7. keep File 14/raw evidence cold unless validating doctrine/evidence.

The default is **minimum sufficient context**, not “load everything just in case.”

## 13. CONTEXT EFFICIENCY RULE

Prefer compact durable state over repeated historical context.

Use this priority:

`Current Project Brief -> Current PROJECT_WEBSITE_SPEC -> Relevant Module Handoff -> Relevant Specialist Module -> Pattern/Anti-Pattern excerpt -> Raw Evidence only if necessary`

Do not use full chat transcript replay as a normal handoff mechanism.

## 14. PROJECT STATE MACHINE

The default state model is:

`INTAKE -> PROVISIONAL -> ACTIVE -> APPROVED_FOR_DESIGN -> APPROVED_FOR_BUILD -> BUILD -> INTEGRITY_REVIEW -> LAUNCH_CANDIDATE -> QA -> LAUNCH_READY -> REVIEW`

`REVISION_REQUIRED` may interrupt any state after PROVISIONAL.

Projects may compress adjacent states when the distinction adds no value.

File 13 owns final QA acceptance; File 12 only prepares the project for it.

## 15. STATE — INTAKE

**Entry:** project request exists.  
**Governed by:** A0 brief + Files 00/01/02 as needed.  
**Required inputs:** available requirements, audience clues, objective, constraints, existing site/content when applicable.  
**Outputs:** normalized brief, missing-information classification, provisional routing.  
**Spec:** create skeleton if project is substantial.  
**Exit:** enough is known to resolve a provisional Strategy Vector without fabricating material facts.  
**Backward route:** none; unresolved ASSUMP-3 blockers remain in intake.

## 16. STATE — PROVISIONAL

**Entry:** enough evidence exists for provisional Strategy Vector/project framing.  
**Governed by:** Files 01/02 and A0.  
**Inputs:** normalized brief + assumption register.  
**Outputs:** provisional Strategy Vector, activated modules, current high-impact assumptions.  
**Spec:** strategic header marked PROVISIONAL.  
**Exit:** File 03 can begin meaningful project-specific strategy work.  
**Backward route:** INTAKE if audience/objective/offer is too uncertain to reason honestly.

## 17. STATE — ACTIVE

**Entry:** Strategy Vector is usable and File 03 work is underway/resolved enough for project structure.  
**Governed by:** Files 03–09 as activated.  
**Outputs:** progressively resolved project systems and module handoffs.  
**Spec:** current source of truth updated after each material gate.  
**Exit:** strategy/visual/interaction/responsive/engineering architecture required for the project are resolved enough to approve build.  
**Backward route:** PROVISIONAL when a material strategic assumption changes.

`APPROVED_FOR_DESIGN` may be used as an intermediate state when File 03 has passed its gate but the rest of architecture remains unresolved.

## 18. STATE — APPROVED_FOR_DESIGN

Use when visual/behavioral work is substantial enough to benefit from an explicit boundary.

**Entry:** File 03 pre-visual acceptance gate passes.  
**Outputs:** Page Map, section hierarchy, narrative, proof/conversion/copy handoff, PRIORITY A1–A4 content priorities.  
**Exit:** File 04 may establish the visual system without inventing strategy.  
**Backward route:** File 03 if visual work exposes missing hierarchy/content/proof/decision logic.

For small sites this state can be implicit.

## 19. STATE — APPROVED_FOR_BUILD

**Entry:** required specialist architecture is resolved and relevant pre-build gates pass.  
**Governed by:** Files 04–09 depending on project.  
**Required outputs:**
- approved visual system;
- interaction/motion contracts where relevant;
- responsive transformation intent;
- engineering architecture;
- known File 08 requirements/risks;
- approved File 09 conditions for any T2/T3 feature;
- selected patterns only where actual implementation choices require them.

**Exit:** implementation can proceed without silently redesigning core systems.  
**Backward route:** ACTIVE when architecture still contains material unresolved contradictions.

## 20. STATE — BUILD

**Entry:** APPROVED_FOR_BUILD.  
**Governed by:** File 07 implementation with Files 04–10 as needed and continuous File 08 constraints.  
**Outputs:** implementation artifacts, local test evidence, resolved states/fallbacks.  
**Spec:** update only material deviations/decisions, not every code change.  
**Exit:** representative scope is implemented, intended states work, and required integrity checks are ready for full module-level review.  
**Backward route:** ACTIVE/REVISION_REQUIRED if implementation reveals an upstream architecture problem.

## 21. STATE — INTEGRITY_REVIEW

**Entry:** build is sufficiently complete for meaningful File 08 validation.  
**Governed by:** File 08, with File 07 for fixes and File 09 if viability changes.  
**Outputs:** performance/accessibility/semantics/resilience status, blockers, residual risks, regression evidence.  
**Exit:** File 08 hard acceptance gate passes for the intended launch-candidate scope.  
**Backward route:** BUILD for local defects; ACTIVE/REVISION_REQUIRED for systemic redesign.

Integrity review is not the first time integrity is considered. It is the point where the full implemented scope is verified.

## 22. STATE — LAUNCH_CANDIDATE

**Entry:** required implementation is complete and File 08 hard gate passes.  
**Outputs:** candidate build, current spec, known exceptions/risks, environment matrix, acceptance criteria, QA handoff package.  
**Exit:** ready for File 13 full evaluation.  
**Backward route:** BUILD/INTEGRITY_REVIEW if pre-QA smoke checks expose defects.

Launch Candidate does not mean Launch Ready.

## 23. STATE — QA

**Entry:** File 13 receives the Launch Candidate handoff.  
**Governed by:** File 13 (A4), affected specialist modules for remediation.  
**Outputs:** acceptance findings, severity, corrections, scorecard where appropriate.  
**Exit:** File 13 acceptance gates pass.  
**Backward route:** owning module/build state determined by the root cause.

File 12 does not pre-approve this state.

## 24. STATE — LAUNCH_READY

**Entry:** File 13 full acceptance passes and no hard gate remains open.  
**Meaning:** the assessed launch scope satisfies current project acceptance obligations.  
**Not implied:** perfection, future immunity to regression, or universal superiority.

If launch configuration materially changes after acceptance, rerun affected checks.

## 25. STATE — REVIEW / POST-LAUNCH

Use when real-world evidence can improve the project or OS.

Possible inputs:
- field performance;
- analytics tied to actual objectives;
- conversion/task evidence;
- support/user feedback;
- accessibility reports;
- operational/maintenance burden;
- content-production reality.

Route project-specific learning back to the spec. Route possible doctrine changes to File 14/evidence workflow rather than casually rewriting the OS.

## 26. STATE — REVISION_REQUIRED

Use when a material upstream decision is invalidated.

Record:

```text
TRIGGER:
INVALIDATED DECISION:
HIGHEST WRONG CAUSAL LAYER:
AFFECTED DOWNSTREAM SCOPE:
REQUIRED MODULE:
SPEC UPDATE:
REBUILD SCOPE:
RE-ENTRY STATE:
```

Do not treat REVISION_REQUIRED as project failure. It is controlled correction.

## 27. END-TO-END WORKFLOW

Default sequence:

1. normalize brief;
2. classify assumptions;
3. resolve provisional Strategy Vector;
4. create/update `PROJECT_WEBSITE_SPEC`;
5. activate minimum specialist set;
6. File 03 — intent/IA/narrative/conversion/copy;
7. File 04 — visual system;
8. File 05 — interaction/motion where needed;
9. File 06 — responsive/mobile transformation;
10. File 07 — engineering architecture;
11. File 08 — requirements inform design/build continuously and hard validation occurs before Launch Candidate;
12. File 09 — activate at any stage before material complexity hardens;
13. File 10 — select implementation patterns only after the job/context is resolved;
14. implement in vertical slices/shared systems as appropriate;
15. File 11 — diagnose drift/failure when needed;
16. run module-level/integrity verification;
17. produce Launch Candidate handoff;
18. File 13 — full QA/red-team acceptance;
19. launch/review.

This sequence is causal, not necessarily calendar-linear.

## 28. FILE 03 WORKFLOW POSITION

File 03 must resolve enough of:
- audience/job;
- business objective;
- user decision/action;
- value proposition;
- IA/navigation;
- required beliefs;
- narrative dependencies;
- proof/objections;
- conversion/CTA;
- copy hierarchy;
- section contracts.

Do not begin final visual composition when the visual layer would have to invent these decisions.

Gate: use File 03’s own acceptance standard.

## 29. FILE 04 WORKFLOW POSITION

File 04 begins after File 03 provides usable hierarchy and page logic.

Resolve:
- visual thesis;
- hierarchy translation;
- grid/container;
- spacing/rhythm/density;
- typography/color;
- media/art direction;
- stable invariants;
- responsive implications.

If visual exploration reveals that the content hierarchy itself is wrong, route to File 03 rather than styling around it.

## 30. FILE 05 WORKFLOW POSITION

File 05 begins when the static system is coherent enough that behavior can reinforce it.

Consequential motion/interaction must have named jobs, states, reversal/orientation logic, responsive risks, and reduced-motion intent.

Do not use motion to rescue unclear IA or weak static hierarchy.

Trigger File 09 before advanced interaction hardens.

## 31. FILE 06 WORKFLOW POSITION

Responsive design is not deferred until desktop is “finished.”

Once major strategy, visual, and interaction relationships exist, File 06 defines transformations while those systems are still changeable.

Do not approve a desktop architecture whose value cannot plausibly survive narrow/coarse/short/zoomed environments.

## 32. FILE 07 WORKFLOW POSITION

Engineering receives resolved intent rather than permission to redesign silently.

File 07 selects semantic architecture, rendering model, component/state structure, CSS/layout strategy, JS responsibility, native/custom primitives, assets, dependencies, progressive enhancement, and failure containment.

If implementation cost or integrity reveals upstream design is unreasonable, route upstream/File 09 and update the spec.

## 33. FILE 08 WORKFLOW POSITION

File 08 is both:
- a **continuous constraint** during design/engineering;
- a **hard validation gate** before Launch Candidate.

Performance/accessibility/semantics/resilience are not final polish.

Do not postpone keyboard/focus/reflow/reduced motion/semantic structure/media strategy/performance budgets/failure behavior to the end.

A File 08 blocker stops Launch Candidate regardless of aesthetic quality or numerical score elsewhere.

## 34. FILE 09 WORKFLOW POSITION

Activate File 09 at the **first point material complexity becomes a real proposal**, not after implementation is expensive to reverse.

Possible trigger stages:
- concept/art direction;
- interaction planning;
- responsive transformation;
- engineering architecture;
- File 08 viability review;
- pattern-stack review.

T2/T3 complexity should normally prove its invalidating constraints before broad production.

## 35. FILE 10 WORKFLOW POSITION

Pattern selection occurs only after the problem/job and relevant system requirements are known.

Use:

`resolved job -> relevant pattern family -> fit/rejection -> responsive/integrity check -> File 09 if required -> pattern-stack check -> select/adapt/reject -> implementation`

Do not use pattern browsing as a substitute for strategy or art direction.

## 36. FILE 11 WORKFLOW POSITION

File 11 is diagnostic, not always-on.

Use when:
- output feels weak/generic/broken;
- repeated local fixes accumulate;
- audit/red-team is requested;
- responsive behavior fails;
- implementation drifts from intent;
- multiple symptoms may share an upstream cause.

Then route correction to the owning module.

Do not load the full anti-pattern catalog during every ordinary build action.

## 37. FORWARD GATES

Forward progress requires enough upstream stability for the next layer.

Hard/proportional rules:
- no final visual system before File 03 resolves usable hierarchy;
- no consequential motion architecture before static hierarchy is coherent;
- no responsive implementation without transformation intent;
- no engineering architecture silently inventing strategic/design requirements;
- no T2/T3 feature production before File 09 viability/conditions are resolved;
- no pattern selection before job/context is known;
- no Launch Candidate before File 08 hard gate passes;
- no Launch Ready before File 13 accepts the project.

A gate may be satisfied quickly. It may not be skipped merely because the project is small.

## 38. BACKWARD ROUTING MATRIX

| Observed problem | Likely route |
|---|---|
| Audience/offer/objective changed | File 02 + File 03 |
| Missing hierarchy/narrative/proof | File 03 |
| Generic or incoherent art direction | File 04 |
| Motion compensates for weak hierarchy | File 04 then File 05 |
| Interaction unclear/orientation lost | File 05; File 09 if material novelty |
| Mobile exposes wrong priority/order | File 03/04/05 then File 06 |
| Breakpoints proliferate around fragile composition | File 04/06 before File 07 |
| Engineering reveals design is structurally unreasonable | affected upstream module + File 09 |
| Semantic/accessibility architecture is weak | File 07 + File 08 |
| Performance makes media/interaction nonviable | File 04/05/07 + File 09 + File 08 |
| Pattern is a poor fit | File 10, possibly upstream if job was unresolved |
| Repeated symptoms / local patch loop | File 11 -> highest wrong causal layer |

Routing is diagnosis, not blame.

## 39. PREVENTION CHECKPOINTS

Use lightweight checks at the stage where failures are cheapest to prevent.

### After File 03
Check:
- Template-First Architecture;
- Internal-Org IA;
- Proof Graveyard;
- CTA Spam;
- generic claims.

### After File 04
Check:
- Generic Premium;
- Everything Is a Card;
- Everything Is Large;
- Decorative Media Dominance;
- desktop-only art direction.

### After File 05
Check:
- Motion Soup;
- Hover Dependency;
- Cursor Theater;
- orientation/clarity debt without repayment.

### After File 06
Check:
- Desktop Compression;
- Mobile Amnesia;
- CSS-order intent;
- pinned/hover/crop/viewport risks.

### Before/within File 07
Check:
- Framework Cargo Cult;
- Hydrate Everything;
- Component Confetti;
- Accessibility-Retrofit DOM;
- third-party hostage behavior.

### Before material complexity
Check:
- Prestige Complexity;
- Pattern-Stack Incoherence;
- desktop prototype bias.

These checks are prompts to inspect, not automatic diagnoses.

## 40. STANDARD CORRECTION LOOP

Use:

`Observe failure -> classify severity -> identify root cause -> route to highest wrong causal layer -> revise decision -> update PROJECT_WEBSITE_SPEC if material -> propagate downstream effects -> rebuild affected scope -> verify locally -> re-enter workflow at correct state`

Avoid:

`failure -> local patch -> side effect -> another patch -> exception -> brittle system`

If three or more local fixes cluster around one relationship, test for an upstream cause before adding another patch.

## 41. CHANGE PROPAGATION MODEL

When a material decision changes, identify the smallest affected dependency graph.

Do not restart the whole project automatically.

Record:

```text
CHANGED DECISION:
WHY:
UPSTREAM MODULE:
AFFECTED SPEC SECTIONS:
DOWNSTREAM MODULES TO RECHECK:
IMPLEMENTATION SCOPE AFFECTED:
QA / REGRESSION REQUIRED:
UNAFFECTED SCOPE:
```

## 42. CHANGE PROPAGATION — STRATEGY

Audience, offer, business model, objective, primary action, buyer commitment, trust burden, or major information complexity changes may require:
- File 02 Vector update;
- File 03 revision;
- visual hierarchy/proof/CTA changes;
- responsive/engineering changes where affected;
- acceptance criteria update.

Do not preserve downstream work merely because it is already polished.

## 43. CHANGE PROPAGATION — VISUAL / MEDIA

Material typography/grid/media/art-direction changes may require rechecking:
- interaction choreography;
- responsive transformations;
- asset architecture;
- performance budgets;
- contrast/readability;
- crop behavior;
- component implementation.

Do not rerun unrelated strategy unless the visual change reveals a strategy problem.

## 44. CHANGE PROPAGATION — INTERACTION

A material interaction/navigation model change may require:
- File 05 update;
- File 06 input/mobile transformation;
- File 07 state/DOM architecture;
- File 08 keyboard/focus/semantics/reduced-motion/performance/resilience;
- File 09 complexity review.

## 45. CHANGE PROPAGATION — ENGINEERING

Rendering/framework/state/dependency architecture changes may require:
- File 07 update;
- File 08 revalidation;
- responsive regression;
- performance rerun;
- File 09 review if complexity materially changes.

Do not reopen art direction merely because a library changed.

## 46. T2/T3 PROTOTYPE GATE

For uncertain T2/T3 features, prototype the dimension most likely to invalidate the idea before production integration.

Examples:
- keyboard/focus model;
- mobile orientation;
- renderer performance;
- reduced-motion equivalent;
- scroll behavior;
- content-production burden;
- third-party reliability;
- failure fallback.

A desktop beauty prototype that ignores the real invalidating constraint does not satisfy the gate.

## 47. VERTICAL SLICE STRATEGY

Use a vertical slice when several systems interact and one representative slice can expose invalid assumptions early.

A useful slice may include:
- one representative page/section;
- real copy/content;
- real typography/media behavior;
- responsive transformation;
- key interaction/state;
- semantic implementation;
- integrity checks.

Use this before broad production when failure in one layer would force large rework.

## 48. SHARED-SYSTEM-FIRST STRATEGY

Build stable shared primitives early when:
- many routes/components depend on them;
- the responsibilities are already resolved;
- reuse is real;
- changes would otherwise multiply.

Examples: tokens, base typography, containers, control primitives, navigation shell, semantic form patterns.

Do not overbuild an abstract design system before the project demonstrates actual recurring needs.

## 49. RISK-FIRST PROTOTYPING

Prototype high-risk uncertainty before broad low-risk implementation.

Risk may be:
- user comprehension;
- unusual interaction;
- content feasibility;
- responsive transformation;
- accessibility equivalence;
- performance/device capability;
- complex state/data flow;
- vendor reliability.

Do not choose prototype scope based solely on which screen looks most impressive.

## 50. IMPLEMENTATION SEQUENCE

After architecture approval, a common sequence is:
1. semantic document/source structure;
2. foundational tokens/primitives;
3. layout/grid/container system;
4. responsive structural behavior;
5. stable component responsibilities;
6. state architecture;
7. navigation/forms/native controls;
8. real content/media/assets;
9. interaction/motion;
10. advanced renderer/subsystems in isolation;
11. progressive enhancement/failure containment;
12. continuous integrity verification;
13. integration/regression.

Adapt order to project dependencies. Do not turn this into framework dogma.

## 51. RESPONSIVE DURING BUILD

Do not complete the entire desktop implementation before testing responsive behavior.

For each substantial new system:
- test narrow and wide early;
- test awkward intermediate widths;
- test source/focus order;
- test touch/coarse-pointer implications when relevant;
- test short viewport/keyboard risks where relevant;
- test zoom/reflow obligations;
- verify intentional transform action from File 06.

Responsive problems discovered early are architecture feedback, not cleanup tickets.

## 52. INTEGRITY DURING BUILD

During implementation, verify relevant File 08 concerns at the moment they become testable:
- semantic structure/source order;
- keyboard/focus;
- forms/names/states;
- reflow;
- reduced motion;
- media alternatives;
- loading/runtime cost;
- third parties;
- failure states;
- crawlability/indexability for relevant surfaces.

Do not defer the first meaningful test until feature completion.

## 53. QA LEVELS DURING PRODUCTION

### Q0 — LOCAL CHECK
After an isolated low-risk edit. Verify affected behavior only.

### Q1 — MODULE CHECK
After substantive work inside one system. Use that module’s diagnostics/acceptance gate.

### Q2 — INTEGRATION / REGRESSION CHECK
After changes crossing multiple systems or material upstream revisions. Test affected dependency graph.

### Q3 — FULL ACCEPTANCE
Owned by File 13 when project scope requires launch/world-class/full-delivery evaluation.

Do not use Q3 ceremony for a typo. Do not use Q0 confidence for a redesign.

## 54. REGRESSION TRIGGERS

Run affected regression checks after:
- material layout/order changes;
- navigation changes;
- interaction/state changes;
- component API changes;
- rendering/hydration changes;
- media/asset changes affecting performance;
- third-party additions;
- responsive transformation changes;
- accessibility fixes that change DOM/focus/state;
- complexity feature integration/removal.

Regression scope follows dependencies, not superstition.

## 55. DEFINITION OF DONE — STRATEGY

Strategy is done for the current stage when File 03’s gate passes and downstream design does not need to invent audience/job/objective/IA/narrative/proof/conversion/copy hierarchy.

“Draft exists” is not done.

## 56. DEFINITION OF DONE — VISUAL

Visual system is done for the current stage when File 04’s gate passes: hierarchy, system logic, art direction, media role, brand distinction, and responsive implications are resolved enough for behavior and build.

A moodboard alone is not done.

## 57. DEFINITION OF DONE — INTERACTION

Interaction is done for the current stage when important states, feedback, motion jobs, orientation/reversal, reduced-motion treatment, responsive flags, and complexity triggers are resolved.

A polished animation clip without state logic is not done.

## 58. DEFINITION OF DONE — RESPONSIVE

Responsive is done for the current stage when core value, transformation map, priority/order, navigation, media, interaction substitutes, viewport/input risks, and test matrix are explicit enough to implement.

“Flex-wrap seems okay” is not done.

## 59. DEFINITION OF DONE — ENGINEERING ARCHITECTURE

Engineering architecture is done when File 07’s pre-integrity gate passes and implementation can proceed with explicit semantics, rendering/component/state/CSS/JS/asset/dependency/resilience responsibilities.

A framework choice alone is not architecture.

## 60. DEFINITION OF DONE — INTEGRITY

Integrity is done for Launch Candidate when File 08 hard gate passes for the intended scope and known residual risks/exceptions are explicit.

A green Lighthouse screenshot is not sufficient evidence.

## 61. DEFINITION OF DONE — COMPLEXITY

A T2/T3 complexity decision is done when File 09 records:
- purpose/value;
- credible simpler alternative;
- cross-system cost;
- integrity conditions;
- fallback/failure behavior;
- evidence confidence;
- decision/conditions;
- owner/review point.

“Client likes it” is not a completed complexity decision.

## 62. DEFINITION OF DONE — PATTERN SELECTION

Pattern selection is done when the pattern solves a resolved job, passes fit/rejection checks, satisfies responsive/integrity conditions, passes complexity review where needed, and does not create an incoherent pattern stack.

Pattern selection is not creative browsing.

## 63. DEFINITION OF DONE — IMPLEMENTATION

Implementation is done for Launch Candidate when:
- approved scope exists in the build;
- required content/function/states work;
- responsive transformations are implemented;
- known failure states are handled;
- required integrity checks pass;
- material drift from spec is reconciled;
- no known blocker remains hidden in backlog.

## 64. DEFINITION OF DONE — LAUNCH CANDIDATE

Launch Candidate exists only when:
- implementation scope is complete enough for final evaluation;
- File 08 hard gate passes;
- current `PROJECT_WEBSITE_SPEC` matches intended build;
- known exceptions/residual risks are explicit;
- supported environment/test expectations are known;
- acceptance criteria exist;
- candidate build/artifact is stable enough for File 13.

## 65. HANDOFF CONTRACT FORMAT

Use compact handoffs instead of transcript dumps.

```text
FROM MODULE / STATE:
TO MODULE / STATE:
RESOLVED DECISIONS:
REQUIRED INPUTS FOR NEXT STAGE:
MUST-PRESERVE CONSTRAINTS:
KNOWN RISKS / ASSUMPTIONS:
OPEN BLOCKERS:
SPEC SECTIONS UPDATED:
NEXT GATE:
```

Include only information the next stage needs.

## 66. DECISION LOGGING

Durably log decisions when forgetting them would cause costly inconsistency or repeated debate.

Usually log:
- material Strategy Vector decisions;
- key architecture choices;
- T2/T3 complexity decisions;
- integrity exceptions/constraints;
- major rejected alternatives with high recurrence risk;
- material upstream revisions.

Do not log every margin or component prop.

## 67. EXCEPTION MANAGEMENT

An exception exists when a project deliberately departs from a normal OS requirement/pattern while preserving higher authority or where a governing standard explicitly permits a contextual exception.

Record:

```text
EXCEPTION:
AUTHORITY AFFECTED:
WHY:
RISK:
MITIGATION:
OWNER:
EXPIRY / REVIEW CONDITION:
```

File 08 hard requirements cannot be waived by taste or complexity ROI.

## 68. VERSION / CHANGE DISCIPLINE

File 12 does not replace File 99.

During active projects:
- record the OS/module version when a material dependency matters;
- update project-state/spec decisions deliberately;
- mark superseded decisions;
- do not silently preserve stale instructions after a material revision;
- rerun affected gates when the basis of approval changes.

## 69. PARALLEL WORK — SAFE CONDITIONS

Parallel work is safe when workstreams depend on already-resolved shared inputs and cannot silently contradict each other.

Examples:
- asset preparation after media direction is resolved;
- copy refinement within approved hierarchy;
- component prototyping after anatomy/semantics are known;
- responsive proof-of-concept after transformation intent exists;
- technical/performance spike for approved validation question;
- content entry while engineering shell is built.

Synchronize material decisions through the spec.

## 70. PARALLEL WORK — UNSAFE CONDITIONS

Avoid parallelism when one stream is still defining another stream’s premises.

Examples:
- final visual design while IA/narrative is unresolved;
- production WebGL while File 09 viability is unresolved;
- component architecture while interaction state model is still contradictory;
- mobile “adaptation” after desktop geometry is being polished but responsive strategy is unknown;
- copy production around unvalidated claims/proof.

Parallelism that multiplies rework is not speed.

## 71. REWORK CONTROL

Minimize expensive rework by:
- resolving higher-authority uncertainty first;
- testing invalidating constraints early;
- using representative vertical slices;
- avoiding pixel polish before architecture;
- keeping T2/T3 systems removable until validated;
- freezing only decisions that passed their gate;
- recording material decisions;
- propagating changes explicitly;
- testing responsive/integrity during build.

Do not optimize for zero iteration. Optimize for **cheap, informative iteration**.

## 72. SPECIFICATION DRIFT TEST

At major gates compare:
1. what the current spec says;
2. what the implemented build actually does;
3. whether the difference is intentional;
4. whether the spec or build should change.

Drift is acceptable only when deliberately reconciled.

A build is not allowed to become the de facto spec merely because it was coded first.

## 73. STOP CONDITIONS

Stop forward progression at the affected scope when:
- project-purpose requirements materially conflict and remain unresolved;
- decision-critical content/proof is missing and cannot be honestly represented;
- an ASSUMP-3 blocker assumption would make downstream work fictional;
- File 08 reports a BLOCKER/critical hard-gate failure preventing the next state;
- required T2/T3 complexity is unapproved/invalidated;
- architecture cannot satisfy required responsive/accessibility behavior;
- repeated local patches expose an unresolved upstream systemic failure;
- build materially drifts from the spec and ownership of truth is unclear.

Stop the affected scope, not unrelated work.

## 74. NON-STOP CONDITIONS

Do not stop the whole project for:
- low-risk provisional assumptions;
- minor copy polish;
- local visual tuning;
- cosmetic defects that do not contaminate architecture;
- questions whose answer can be isolated to one reversible decision;
- unavailable nice-to-have research not required by current authority.

Mark and proceed proportionately.

## 75. WORKFLOW ANTI-PATTERNS

- **Design Before Intent** — visual decisions compensate for unresolved strategy.
- **Pixel Polish Before Architecture** — time invested in unstable downstream detail.
- **Desktop First, Mobile Later** — responsive constraints discovered after architecture hardens.
- **Accessibility at the End** — semantic/input/focus architecture becomes retrofit work.
- **Performance at the End** — runtime/media architecture becomes expensive to reverse.
- **Framework Before Requirements** — implementation choice precedes problem definition.
- **Pattern Before Problem** — implementation option drives the brief.
- **QA as Final Ceremony** — defects compound because verification is deferred.
- **Endless Local Patching** — symptoms are patched instead of causal layer corrected.
- **Specification Drift** — build and approved decisions diverge silently.
- **Context Reload Everything** — token/attention cost increases without relevance.
- **Research Reopening by Reflex** — completed evidence work is repeatedly reopened without doctrine conflict.
- **Premature Complexity** — high-cost idea hardens before value/viability is proven.
- **Handoff by Transcript Dump** — downstream stage receives history instead of resolved state.
- **Parallelism Before Dependencies Resolve** — simultaneous work multiplies contradiction/rework.

Use File 11 for deeper diagnosis when one appears.

## 76. PROJECT-SCALE ADAPTATION — SMALL MARKETING / CONTENT SITE

Compress states aggressively while preserving gates.

Typical flow:
`INTAKE/PROVISIONAL -> File 03 -> File 04/06 -> File 07 -> File 08 -> BUILD -> LAUNCH_CANDIDATE -> File 13`

File 05 may be lightweight. File 09 only when advanced behavior appears. File 10 only when a real pattern choice needs resolving.

Avoid enterprise artifacts.

## 77. PROJECT-SCALE ADAPTATION — SAAS / B2B

Elevate:
- File 03 decision/proof architecture;
- product explanation;
- trust/implementation/integration concerns;
- responsive product UI demonstration;
- marketing vs app rendering differences;
- performance/accessibility on conversion-critical paths.

Parallelize copy/product proof/technical validation only after buyer logic is stable.

## 78. PROJECT-SCALE ADAPTATION — ECOMMERCE

Elevate:
- taxonomy/search/filter/comparison;
- PDP and transaction continuity;
- responsive merchandising;
- server-authoritative price/inventory/order behavior;
- forms/cart/checkout resilience;
- media performance.

Test transaction-critical vertical slices early.

## 79. PROJECT-SCALE ADAPTATION — EDITORIAL / RESEARCH

Elevate:
- semantic documents;
- navigation/chaptering;
- typography/measure;
- evidence/citations/figures;
- reading/reflow;
- interactive visualization isolation.

Do not turn ordinary articles into application runtime without need.

## 80. PROJECT-SCALE ADAPTATION — PORTFOLIO / AGENCY

Elevate:
- distinct art direction;
- work discoverability;
- project routes/metadata;
- proof of craft;
- contact path;
- motion/interaction only where it strengthens evaluation or identity.

Use File 09 early when the portfolio itself becomes an experiential application.

## 81. PROJECT-SCALE ADAPTATION — LUXURY / HOSPITALITY

Elevate:
- art direction/media;
- desire/place/provenance;
- practical availability/inquiry information;
- responsive media transformation;
- image/video performance;
- clarity as users approach task-specific action.

Do not let cinematic pacing make evaluation or inquiry hostage to spectacle.

## 82. PROJECT-SCALE ADAPTATION — PUBLIC SERVICE / UTILITY

Elevate:
- task completion;
- plain-language IA;
- accessibility;
- semantics;
- performance/resilience;
- forms/recovery;
- predictable navigation.

Process should be rigorous on integrity but restrained on decorative complexity.

## 83. PROJECT-SCALE ADAPTATION — DATA / VISUALIZATION

Elevate:
- information model;
- interaction/legend/filter semantics;
- responsive alternatives;
- keyboard/nonvisual access where applicable;
- performance on real datasets;
- canvas/WebGL choice only when workload justifies it;
- fallback/static summaries when needed.

Prototype the highest-risk visualization mechanism early.

## 84. PROJECT-SCALE ADAPTATION — EXPERIENCE-FIRST / WEBGL

Use the full complexity path:
- clear core-value mechanism;
- File 09 T2/T3 review early;
- interactive prototype;
- responsive/accessibility proof;
- renderer performance on representative hardware;
- DOM semantic/navigation layer where practical;
- fallback/failure containment;
- reduced-motion design;
- exit/removal strategy;
- broader QA surface.

Do not allow the renderer to become the only route to critical semantics by accident.

## 85. PROJECT-SCALE ADAPTATION — LARGE MULTI-ROUTE / APPLICATION

Use explicit state/gate ownership where it prevents cross-team inconsistency.

Elevate:
- design-system responsibility;
- route/state/data architecture;
- component contracts;
- authentication/personalization boundaries;
- shared accessibility primitives;
- testing/regression automation;
- version/change management;
- staged rollout where appropriate.

Do not import enterprise ceremony that does not reduce actual coordination risk.

## 86. FILE 12 PROJECT_WEBSITE_SPEC WRITEBACK

File 12 may maintain workflow metadata such as:

```text
WORKFLOW STATUS
Project state:
Current gate:
Active modules:
Next required module/state:

ASSUMPTIONS
Material unresolved:
Validation required:
Blockers:

COMPLEXITY
Approved T2/T3 conditions:
Pending validation:

INTEGRITY
Current File 08 status:
Known hard blockers:

CHANGE CONTROL
Material revision in progress:
Affected downstream scope:

QA
Local/module checks completed:
Launch Candidate status:
File 13 status:
```

Do not duplicate the substantive sections owned by Files 03–09.

## 87. LAUNCH-CANDIDATE HANDOFF TO FILE 13

Provide:
- current Project Brief/A0 requirements;
- current `PROJECT_WEBSITE_SPEC`;
- Strategy Vector;
- project acceptance criteria;
- resolved specialist-module decisions;
- approved T2/T3 complexity conditions;
- File 08 integrity status and evidence;
- supported environment/test matrix;
- consequential pattern portfolio;
- known exceptions/residual risks;
- open issues;
- actual Launch Candidate build/artifact;
- material changes since last gate.

File 13 evaluates the real build against these obligations. It should not have to reconstruct project strategy from history.

## 88. HANDOFF COMPRESSION RULE

A handoff should answer:
- what is resolved;
- what is required next;
- what must not be broken;
- what remains uncertain;
- what gate comes next.

Do not include entire specialist modules when a compact decision handoff is sufficient.

## 89. POST-LAUNCH LEARNING LOOP

After launch, distinguish:

**PROJECT LEARNING** — improve the current website/spec.

**PATTERN LEARNING** — may inform File 10/11 after repeated evidence.

**DOCTRINE CHALLENGE** — requires File 14 evidence review and adversarial validation.

Do not promote one project anecdote into doctrine.

## 90. MODULE ACCEPTANCE GATE

File 12 passes only when it:
- preserves A0–A6 authority;
- operationalizes rather than duplicates Files 03–11;
- uses `PROJECT_WEBSITE_SPEC` as persistent contract;
- defines usable project states without unnecessary bureaucracy;
- defines forward gates and backward routes;
- defines prevention and root-cause correction loops;
- defines change propagation;
- integrates File 08 as continuous constraint and hard pre-launch-candidate gate;
- invokes File 09 before T2/T3 complexity hardens;
- places File 10 after upstream reasoning;
- uses File 11 diagnostically;
- defines proportional QA during production;
- supports vertical slices and risk-first validation;
- supports safe parallel work;
- adapts to project scale/archetype;
- defines stop/non-stop conditions;
- defines Launch Candidate handoff to File 13;
- minimizes unnecessary context/token loading.

## 91. DIAGNOSTIC TESTS

### Causal Order Test
Is a downstream stage inventing an unresolved upstream decision?

### Spec Truth Test
Does the build match the current approved spec?

### Highest Wrong Layer Test
Are we fixing the cause or a visible symptom?

### Gate Necessity Test
Does this gate protect a consequential dependency or only add ceremony?

### Context Minimum Test
What is the smallest file/spec set needed for this task?

### Assumption Test
Which unresolved assumptions can actually invalidate downstream work?

### Reversibility Test
Can an uncertain high-cost decision still be removed cheaply?

### Vertical Slice Test
Would one representative slice expose cross-system failure earlier?

### Mobile-Later Test
Has responsive behavior been deferred past architecture hardening?

### Integrity-Later Test
Are semantics/accessibility/performance being treated as cleanup?

### Pattern Timing Test
Was the pattern chosen before the job/context was resolved?

### Complexity Timing Test
Did File 09 enter before or after architecture became costly to reverse?

### Patch Loop Test
Are repeated local fixes pointing to one upstream cause?

### Parallel Dependency Test
Do concurrent workstreams share unresolved premises?

### Handoff Compression Test
Can the next stage work from resolved state without transcript archaeology?

## 92. INTERNAL RED TEAM

Before approving a workflow decision, ask:
- Have we created waterfall rigidity instead of causal gates?
- Does the project have more states than it needs?
- Are we duplicating specialist rules instead of routing to them?
- Are we treating a small site like an enterprise platform?
- Is downstream work inventing strategy?
- Are mobile, accessibility, or performance deferred?
- Did pattern selection enter before job resolution?
- Did File 09 enter after advanced complexity already hardened?
- Is File 11 loaded continuously rather than diagnostically?
- Can correction loops actually exit?
- Are local patches replacing upstream correction?
- Is the spec bloated with trivial implementation detail?
- Are handoffs transcript dumps?
- Are we reloading the whole OS without relevance?
- Did we reopen research without a doctrine/evidence reason?
- Are material changes propagating to the right dependency graph?
- Are stop conditions explicit?
- Are we inventing numeric process scores?
- Is the workflow itself consuming more attention than the work it protects?

## 93. TOKEN-EFFICIENCY RULE

During ordinary project work, File 12 should normally be used as routing logic plus the current project state, not reread in full every turn.

Prefer:
1. current `PROJECT_WEBSITE_SPEC`;
2. current workflow state/gate;
3. one or two relevant specialist modules;
4. compact handoff from prior stage;
5. Pattern/Anti-Pattern family only when needed.

Load the full workflow when beginning a substantial project, resolving cross-system process conflicts, or auditing production discipline.

## 94. OPERATIONAL WORKFLOW

`Brief -> normalize -> assumptions -> Strategy Vector -> PROJECT_WEBSITE_SPEC -> route modules -> File 03 -> File 04 -> File 05 as needed -> File 06 -> File 07 -> File 08 constraints throughout -> File 09 whenever triggered -> File 10 only for resolved pattern choices -> Build by shared systems / risk-first vertical slices -> File 11 on drift/failure -> module/integration verification -> File 08 hard gate -> Launch Candidate -> File 13 -> correction routing as needed -> Launch Ready -> post-launch learning`

## 95. SUCCESS STANDARD

File 12 succeeds when the OS behaves like one production system rather than eleven unrelated manuals; consequential decisions are resolved in causal order; uncertainty is visible; the project specification carries durable state; advanced complexity is challenged before it hardens; responsive/accessibility/performance are designed during production; patterns arrive after problems; failures route to causes; changes propagate deliberately; handoffs stay compact; small projects remain fast; large projects gain necessary control; and File 13 receives a coherent Launch Candidate rather than a pile of history.

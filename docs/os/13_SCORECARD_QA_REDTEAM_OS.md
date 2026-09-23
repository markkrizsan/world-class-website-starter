# 13 — SCORECARD · QA · RED TEAM OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A4 — Evaluation / QA / Acceptance  
**Dependencies:** current Project Brief, current `PROJECT_WEBSITE_SPEC`, `01`–`12`, actual Launch Candidate artifact/build, relevant test evidence  
**Writes To:** `PROJECT_WEBSITE_SPEC` acceptance metadata  
**Hands Off To:** owning module(s) for correction; `14_RESEARCH_EVIDENCE_INDEX.md` only when evidence/doctrine validation is genuinely required  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Determine whether an actual website, page, application surface, or experience is genuinely coherent, effective, robust, and ready for its intended release state.

File 13 is the World-Class Website OS **full-system evaluation, QA, red-team, and acceptance authority**.

It answers:

> Did the Launch Candidate fulfill its actual purpose and approved specification across strategy, information, visual design, interaction, responsive behavior, engineering, performance, accessibility, semantics, complexity, resilience, implementation quality, and high-resolution polish without a disqualifying acceptance failure?

File 13 does not invent the project during QA. It evaluates the real artifact against the obligations already established upstream.

## 2. OPERATING PREMISE

Quality is not one number and is not one aesthetic.

A minimal site can be excellent. A maximal site can be excellent. A dense technical interface can be excellent. An immersive WebGL experience can be excellent.

The acceptance question is whether the chosen system:
- serves the project purpose;
- satisfies the user and business obligations recorded in the project specification;
- preserves integrity across supported conditions;
- justifies its complexity;
- remains coherent at macro, meso, and micro resolution;
- survives adversarial inspection.

**Acceptance precedes scoring.** A high score may summarize strength. It may never purchase passage through a failed hard gate.

## 3. AUTHORITY BOUNDARY

File 13 is A4 authority.

Authority order remains:

`A0 Project Brief -> A1 Project Custom Instructions -> A2 Governing Doctrine -> A3 Strategy Vector + Specialist Systems -> A4 File 13 Acceptance -> A5 Pattern / Anti-Pattern Libraries -> A6 Research / Evidence`

File 13 may:
- require evidence that an obligation was met;
- identify implementation/specification drift;
- classify severity;
- reject a Launch Candidate;
- cap verdicts when unresolved risk remains;
- route findings to the highest wrong causal layer;
- require targeted regression after fixes;
- re-evaluate File 09 complexity when production evidence changes the cost/value equation;
- certify `LAUNCH_READY` or `WORLD-CLASS STANDARD MET` when applicable.

File 13 may not:
- silently rewrite A0 requirements;
- invent audience, offer, proof, acceptance criteria, or Strategy Vector dimensions;
- waive File 08 hard integrity because aesthetics are strong;
- use File 10/11 as higher authority than Files 01–09;
- reopen raw research merely because an unconventional implementation exists;
- certify world-class quality from source code, one screenshot, Lighthouse, or automated accessibility output alone.

## 4. REQUIRED INPUT CONTRACT

Full acceptance QA should begin from File 12's Launch Candidate handoff.

Inputs, where relevant:
- current Project Brief / A0 requirements;
- current `PROJECT_WEBSITE_SPEC`;
- Website Strategy Vector;
- explicit project acceptance criteria;
- resolved specialist decisions from Files 03–09;
- approved File 09 T2/T3 conditions;
- current File 08 integrity status and supporting evidence;
- supported browser/device/environment matrix;
- consequential File 10 pattern portfolio;
- known exceptions and residual risks;
- unresolved issues;
- material changes since the last gate;
- actual Launch Candidate build/artifact;
- access needed to exercise critical functionality.

QA should not have to reconstruct project strategy from chat history.

## 5. MISSING INPUT CLASSIFICATION

Classify missing information before evaluation.

### MI-0 — RECONSTRUCTABLE
The requirement can be reliably recovered from current approved artifacts without inventing facts.

Proceed and record source.

### MI-1 — NONCRITICAL / PROVISIONAL
Missing detail does not materially affect the acceptance judgment.

Proceed with a visible assumption or scope limitation.

### MI-2 — ACCEPTANCE-CRITICAL
Missing information prevents a defensible judgment about a critical obligation, intended environment, primary path, or claimed standard.

Do not fabricate certainty. Cap the verdict until the missing evidence is resolved.

Examples:
- no access to the actual build for a claimed functional audit;
- no ability to test a critical authenticated flow;
- unknown required browser support while declaring cross-browser readiness;
- missing proof source for a consequential outcome claim;
- no rendered artifact while claiming visual/responsive world-class quality.

## 6. ACTUAL-ARTIFACT RULE

Full acceptance evaluates **what users receive**, not what the source intends to produce.

For substantive visual/interactive work, source review alone is insufficient.

Where tools and access permit, inspect:
- rendered pages;
- representative viewport states;
- actual controls and navigation;
- focus movement;
- loading/error states;
- media behavior;
- responsive transformations;
- production or production-like performance behavior.

If actual rendered/functional inspection is impossible, explicitly state the unverified layer and cap the verdict accordingly.

## 7. QA DEPTH LEVELS

### L1 — LIGHTWEIGHT VERIFICATION
Use after isolated, low-risk changes.

Examples:
- copy correction;
- local spacing adjustment;
- icon replacement;
- isolated style fix.

Verify changed scope plus obvious regressions.

### L2 — MODULE QA
Use after substantive work within one system.

Examples:
- major responsive changes;
- navigation rewrite;
- form architecture change;
- motion-system revision;
- component/refactor affecting shared surfaces.

Load File 13 plus affected specialist modules and File 11 only if diagnosis is needed.

### L3 — FULL ACCEPTANCE QA
Mandatory for:
- major website/page final delivery;
- substantial redesign;
- material responsive or interaction change affecting broad scope;
- launch-readiness claims;
- premium/elite/best-in-class/world-class claims;
- properly audited / full QA requests.

L3 uses the complete applicable acceptance architecture in this file.

## 8. QA ORDER — INVALIDATION FIRST

Use an order that finds expensive invalidation before micro-polish:

1. input/scope/evidence check;
2. hard-gate smoke check;
3. specification / purpose alignment;
4. primary user/task/conversion path functionality;
5. responsive and input viability;
6. accessibility / semantics integrity;
7. performance / resilience;
8. engineering integrity;
9. visual / interaction quality;
10. complexity and pattern coherence;
11. high-resolution polish;
12. adversarial red-team;
13. targeted fixes;
14. regression;
15. final verdict.

Do not perfect icon spacing before discovering that the primary form, checkout, or navigation is broken.

## 9. ACCEPTANCE BEFORE SCORE

Run the hard-gate layer before interpreting domain scores.

A site cannot be called launch-ready or world-class while a disqualifying gate failure remains open.

The scorecard answers:
- how strong is the work?

The gate answers:
- is the work eligible to pass?

Eligibility comes first.

## 10. HARD-GATE CATEGORIES

Hard-gate review includes, as applicable:
- primary task / conversion operability;
- File 08 accessibility / semantic / performance / technical SEO / resilience obligations;
- required content/proof completeness;
- critical responsive viability;
- transaction/state integrity;
- supported-environment viability;
- approved File 09 conditions;
- absence of catastrophic specification drift;
- required recovery/fallback behavior.

A hard-gate problem cannot be neutralized by strength elsewhere.

## 11. HARD-GATE EXAMPLES

Potential disqualifying failures include:
- primary conversion/task path broken;
- keyboard trap;
- critical functionality inaccessible to required users;
- critical focus state unavailable or unusable;
- materially broken source/reading/focus order;
- severe reflow failure on a required route;
- critical form fields/errors unusable or unlabeled;
- inaccessible critical custom widget;
- materially broken navigation;
- checkout/submission/transaction failure;
- critical state/data corruption;
- required decision-critical content or proof absent/fabricated;
- site or required routes unintentionally non-indexable;
- critical semantic structure failure affecting use or discovery;
- required reduced-motion alternative absent for a materially problematic experience;
- advanced renderer failure blocks core content/action with no recovery;
- supported environment cannot perform the primary job;
- approved T2/T3 complexity condition materially violated;
- persistent primary-task performance failure that violates File 08 acceptance conditions.

Examples are diagnostic, not an exhaustive substitute for File 08.

## 12. SEVERITY MODEL

Use four primary severity classes compatible with File 08.

### BLOCKER
Release must not proceed for the affected required experience.

Typical characteristics:
- core task impossible;
- catastrophic accessibility/operability failure;
- irreversible destructive state/data risk;
- required surface inaccessible/unavailable;
- launch would fundamentally violate stated project obligations.

### CRITICAL
Major failure with substantial user/business/integrity risk. Must be resolved before launch-ready acceptance.

Typical characteristics:
- primary journey materially degraded for a meaningful user group;
- widespread integrity violation;
- serious transaction/navigation/form issue;
- major resilience or performance failure on core value;
- advanced feature undermines required accessibility/responsive/fallback behavior.

### MAJOR
Meaningful weakness affecting quality, strategy, a significant subset of users, or an important but recoverable flow.

May block world-class status even when launch remains possible.

### MINOR
Localized quality/polish defect with limited direct impact and no known hard integrity violation.

Use a separate `POLISH` tag when helpful, but never use it to down-rank a normative failure.

## 13. SEVERITY DETERMINATION

Severity depends on:
- impact on primary objective;
- affected users;
- task criticality;
- frequency;
- scope;
- recoverability;
- integrity/legal/contractual obligation;
- whether the issue compounds elsewhere;
- confidence in evidence.

Severity is consequence, not visual drama.

A subtle source-order bug can be more severe than an obvious spacing defect.

## 14. SEVERITY PRECEDENCE

File 08 severity governs formal integrity failures.

File 13 may contextualize business/release impact, but it cannot soften an applicable File 08 BLOCKER/CRITICAL because:
- the page looks good;
- the affected user segment seems small;
- Lighthouse is high;
- the experience is intentionally experimental.

File 11 may help identify root cause. It does not override File 08 or File 13 acceptance consequence.

## 15. FINDING STATUS

Use:
- OPEN;
- IN FIX;
- FIXED — PENDING VERIFY;
- VERIFIED CLOSED;
- ACCEPTED RISK / EXCEPTION;
- NOT APPLICABLE.

`ACCEPTED RISK / EXCEPTION` requires explicit authority and must not be used to bypass non-waivable obligations.

## 16. FINDING RECORD

Use the full record for consequential findings:

```text
FINDING:
DOMAIN:
SEVERITY:
LOCATION / ROUTE:
ENVIRONMENT / STATE:
EXPECTED:
OBSERVED:
WHY IT MATTERS:
AUTHORITY / REQUIREMENT:
ROOT CAUSE:
ROUTE TO:
RECOMMENDED CORRECTION:
EVIDENCE:
CONFIDENCE: HIGH / MEDIUM / LOW
STATUS:
```

For obvious MINOR defects, use a shorter form.

## 17. QA EVIDENCE MODEL

Evidence may include:
- route/page;
- viewport and input condition;
- screenshot/video;
- DOM/code location;
- console/network evidence;
- metric/profile;
- keyboard sequence;
- screen-reader observation;
- reproduction steps;
- expected vs observed behavior;
- field/lab distinction;
- content/proof source.

Significant findings should be reproducible. Do not create clerical overhead for obvious low-risk defects.

## 18. EVIDENCE CONFIDENCE

Use:
- **HIGH** — directly reproduced/measured/observed;
- **MEDIUM** — strong evidence but incomplete reproduction or limited environments;
- **LOW** — plausible concern requiring validation.

Do not turn a LOW-confidence hypothesis into a launch-blocking factual claim without validation, unless the potential consequence itself justifies a stop-and-test decision.

## 19. SPECIFICATION DRIFT AUDIT

Compare the Launch Candidate to `PROJECT_WEBSITE_SPEC`.

For each material obligation ask:
1. Was it implemented?
2. Was it implemented faithfully?
3. Is the current implementation intentionally different?
4. Is the deviation documented?
5. Did reality expose a bad specification decision?
6. Does the deviation improve or degrade the stated objective?
7. Does the spec still represent current project truth?

Classify meaningful drift:
- ALIGNED;
- INTENTIONAL / DOCUMENTED;
- BUILD DRIFT;
- SPEC REVISION REQUIRED;
- UNRESOLVED.

Do not preserve a wrong spec merely because it was approved earlier. Route material spec correction through File 12.

## 20. STRATEGY VECTOR FIT AUDIT

Use the Strategy Vector as the contextual lens for QA.

Evaluate whether the implementation still matches:
- Primary Job;
- archetype;
- commercial objective;
- buyer/action commitment;
- information complexity;
- experiential intensity;
- interaction novelty;
- brand expression;
- trust burden;
- core value mechanism.

A strong project optimizes for its vector, not an abstract website ideal.

## 21. SCORECARD PURPOSE

The scorecard summarizes domain quality and reveals where strength or weakness is concentrated.

It is not proof of launch readiness.
It is not a universal ranking system.
It is not a substitute for evidence.
It is not a loophole around hard gates.

## 22. DOMAIN SCORE SCALE

Use a simple 0–4 qualitative scale when scoring is useful:

- **0 — FAILING**: materially fails the domain's applicable obligations or core purpose.
- **1 — WEAK**: significant weaknesses; requires material revision.
- **2 — SOUND**: competent and functional; important improvement remains.
- **3 — STRONG**: clearly above baseline; coherent, intentional, well executed.
- **4 — EXCEPTIONAL**: project-specific excellence with high-resolution execution and no material weakness in the domain.

Use whole numbers by default. Half-steps may be used only when they genuinely improve communication.

Do not report fake precision such as `3.73/4`.

## 23. DOMAIN SCORE INTERPRETATION

A domain score is a compact judgment based on:
- obligations from the spec;
- Strategy Vector relevance;
- applicable module acceptance criteria;
- observed implementation;
- severity and scope of findings;
- evidence confidence.

Scores are comparative inside the project context, not universal scientific measurements.

## 24. NO SINGLE WORLD-CLASS NUMBER

A composite score may be used as a secondary summary if useful, but it never determines acceptance.

Do not claim:
- `92/100 = world-class`;
- `4.6/5 = launch-ready`;
- `95 Lighthouse = excellent site`.

Final verdict combines:
- hard-gate status;
- domain quality;
- Strategy Vector fit;
- unresolved severity;
- residual risk;
- cross-system coherence;
- evidence confidence;
- red-team survivability.

## 25. CONTEXTUAL WEIGHTING

If an aggregate summary is used, derive weights from project purpose and Strategy Vector.

Examples:
- TRANSACT raises transaction continuity, forms, performance, and resilience;
- high Information Complexity raises IA, orientation, responsive transformation, and semantic structure;
- Experience-first raises visual/interaction execution **and** performance/accessibility/responsive/complexity scrutiny;
- high Trust Burden raises proof/claim integrity, professionalism, transparency, and resilience;
- public utility raises accessibility, task completion, plain semantics, and low-capability resilience;
- editorial/research raises reading hierarchy, navigation, evidence, figures/tables, and source structure.

No weight may reduce a hard requirement to irrelevance.

## 26. WEIGHTING GUARDRAILS

Contextual weighting must not:
- zero out accessibility;
- zero out responsive viability for supported users;
- excuse a broken primary path;
- reward spectacle for a utility-first project;
- penalize restraint when restraint is the correct design;
- reward high implementation complexity by itself.

When weighting becomes harder to explain than the underlying judgment, skip aggregate weighting and report domain bands directly.

## 27. CRITICAL CAP RULE

Verdict caps:
- any unresolved **BLOCKER** -> `FAIL / NOT READY`;
- any unresolved **CRITICAL** -> cannot be `LAUNCH READY`;
- File 08 hard-gate failure -> cannot be `LAUNCH READY`;
- acceptance-critical missing evidence -> cannot receive full launch/world-class certification;
- systemic MAJOR weakness in a core Strategy Vector dimension -> normally caps below `WORLD-CLASS STANDARD MET`;
- multiple related MAJOR findings may indicate a systemic root cause and trigger `REVISION REQUIRED`.

Use causal judgment, not arbitrary arithmetic.

## 28. FINAL VERDICT STATES

### FAIL / NOT READY
A BLOCKER, severe unresolved requirement, or missing acceptance-critical capability prevents meaningful release approval.

### REVISION REQUIRED
No catastrophic blocker may remain, but material systemic problems require upstream correction before acceptance.

### STRONG BUT NOT LAUNCH READY
The project has meaningful quality but unresolved CRITICAL/gate/evidence conditions remain.

### LAUNCH CANDIDATE WITH CONDITIONS
The build is coherent enough to continue toward release, but explicitly named noncritical conditions must close before `LAUNCH READY`.

### LAUNCH READY
All launch-readiness conditions in this file pass.

### WORLD-CLASS STANDARD MET
The project is `LAUNCH READY` and additionally demonstrates exceptional cross-system coherence, project-specific distinction, earned complexity, responsive excellence, integrity, and high-resolution polish under adversarial review.

World-class is a higher bar than safe launch.

## 29. Q1 — BRIEF / STRATEGY VERIFICATION

Verify applicable File 03 obligations:
- primary audience/user;
- user job;
- business/site/page objective;
- primary action;
- required beliefs;
- offer/value/mechanism clarity;
- information architecture;
- navigation scent;
- narrative dependency;
- attention priority;
- proof architecture;
- objections;
- CTA readiness;
- claim strength;
- page role;
- trust architecture;
- critical content gaps.

Primary question:

> Can the intended user understand enough, believe enough, and act appropriately for the project's real objective?

## 30. Q1 DIAGNOSTIC TESTS

Use where relevant:
- 10-second orientation;
- headings-only;
- information-scent;
- required-belief coverage;
- claim-proof;
- section-removal;
- decision-path;
- CTA-readiness;
- comparison;
- content-gap;
- redundancy.

Do not substitute conversion folklore for the project's actual decision requirements.

## 31. Q2 — VISUAL SYSTEM VERIFICATION

Verify applicable File 04 obligations:
- PRIORITY A1/A2/A3/A4 hierarchy;
- macro/meso/micro composition;
- grid/container logic;
- spacing/rhythm/density;
- typography roles and readability;
- color roles and contrast intent;
- image/media role;
- crop/focal behavior;
- section cadence;
- visual consistency;
- signature devices;
- brand distinctiveness;
- visual thesis;
- production precision.

Strong visuals make the approved hierarchy perceptible rather than inventing another hierarchy.

## 32. Q2 DIAGNOSTIC TESTS

Use where relevant:
- squint;
- PRIORITY A1 dominance;
- grouping;
- grayscale hierarchy;
- typography-only;
- media removal;
- logo removal;
- competitor swap;
- density;
- crop;
- section cadence;
- scale inflation;
- style-removal test.

Do not treat minimal, maximal, serif, sans, sparse, dense, symmetrical, or asymmetrical as quality levels.

## 33. Q3 — UI / INTERACTION / MOTION VERIFICATION

Verify:
- affordance;
- complete meaningful states;
- action feedback;
- current/selected/pressed clarity;
- orientation;
- reversibility;
- hover independence;
- gesture discoverability;
- interaction grammar consistency;
- motion jobs;
- motion hierarchy;
- repeated-use friction;
- loader necessity;
- scroll agency;
- pinned-system viability;
- route-transition cost;
- media controls;
- reduced-motion behavior.

Motion must communicate or create relevant experiential value. It is not a premium badge.

## 34. Q3 DIAGNOSTIC TESTS

Use where relevant:
- motion-job;
- static substitute;
- 50th-use;
- attention competition;
- orientation;
- reversal;
- gesture discoverability;
- hover removal;
- cursor removal;
- loader necessity;
- scroll agency;
- reduced motion;
- semantic underlay.

## 35. Q4 — RESPONSIVE / MOBILE / INPUT VERIFICATION

Verify File 06 intent across supported conditions:
- core-value preservation;
- PRIORITY A1 preservation;
- semantic mobile order;
- source/focus order;
- reflow;
- navigation transformation;
- pointer/touch/hybrid behavior;
- hover removal;
- drag alternatives;
- media crop/art direction;
- tables/comparison;
- forms/keyboard viewport;
- viewport-height behavior;
- orientation;
- zoom/enlarged content;
- motion adaptation;
- awkward intermediate widths;
- brand survival.

Responsive success means preserving value, not desktop geometry.

## 36. Q4 REPRESENTATIVE ENVIRONMENT MATRIX

At minimum, when applicable:
- ENV-1 narrow / coarse pointer;
- ENV-2 narrow / fine pointer;
- ENV-3 medium / coarse pointer;
- ENV-4 medium / hybrid;
- ENV-5 wide / fine pointer;
- ENV-6 short viewport;
- ENV-7 zoom/enlarged content;
- ENV-8 reduced motion;
- keyboard-only;
- representative assistive-tech sanity path;
- slow network/lower-performance device when performance is material.

Do not test only canonical screenshot widths or flagship devices.

## 37. CONTINUOUS RESIZE TEST

For responsive layouts:
1. start narrow;
2. expand continuously;
3. observe where relationships fail;
4. test configured breakpoints;
5. continue to widest supported layout;
6. reverse direction;
7. inspect awkward intermediate widths.

Look for:
- overflow;
- collisions;
- orphaned controls;
- broken wrapping;
- accidental dead space;
- crop failure;
- sticky/pinned instability;
- layout jumps;
- alignment drift.

## 38. Q5 — FRONT-END ENGINEERING VERIFICATION

Verify File 07 obligations:
- rendering architecture fit;
- semantic document/source structure;
- component responsibility;
- token architecture;
- cascade/specificity discipline;
- layout technology fit;
- responsive implementation;
- JavaScript responsibility;
- state ownership;
- URL state where needed;
- native primitive use;
- forms/navigation/dialog/disclosure implementation;
- dependency justification;
- motion implementation coherence;
- DOM vs canvas separation;
- asset architecture;
- failure containment;
- maintainability;
- absence of unnecessary abstraction.

Engineering should encode the project, not silently redesign it.

## 39. Q5 ENGINEERING FAILURE CHECK

Inspect for:
- framework cargo cult;
- hydrate everything;
- JavaScript doing CSS/native work;
- div soup;
- component confetti;
- mega-components;
- specificity arms race;
- breakpoint patchwork;
- state duplication;
- boolean state soup;
- accessibility-retrofit DOM;
- canvas everything;
- library pile;
- z-index inflation;
- hidden-but-loaded systems;
- third-party hostage behavior;
- premature enterprise architecture.

Use File 11 only when root cause is unclear or a recurring failure pattern helps diagnosis.

## 40. Q6 — INTEGRITY VERIFICATION

File 08 remains authoritative for performance, accessibility, semantics, technical SEO, and resilience.

File 13 verifies that File 08's applicable requirements are actually satisfied in the Launch Candidate.

Do not replace File 08 with a Lighthouse checklist or one automated accessibility scan.

## 41. PERFORMANCE QA

Separate:
- **field data** — real-user evidence;
- **lab diagnostics** — controlled pre/post-launch troubleshooting;
- **synthetic monitoring** — repeatable environment checks;
- **runtime profiling** — main-thread/GPU/memory interaction diagnosis;
- **local development artifacts** — useful debugging evidence but not production truth.

Evaluate:
- current CWV obligations recorded by File 08;
- route-specific budgets;
- LCP/load path;
- INP/main-thread responsiveness;
- CLS/stability;
- JS/CSS cost where material;
- image/video/font delivery;
- third parties;
- advanced renderer cost;
- slow-network/device resilience.

A high Lighthouse score is not acceptance evidence by itself.

## 42. PRE-LAUNCH VS FIELD CONFIDENCE

A new site may not yet have sufficient field data.

In that case:
- use representative lab/runtime/device evidence;
- verify budgets and architecture;
- explicitly record field-data status;
- distinguish `PRE-LAUNCH PERFORMANCE CONFIDENCE` from confirmed real-user field performance.

Do not fabricate field certainty before users exist.

## 43. ACCESSIBILITY QA LAYERS

Use layered testing:
1. code/static semantic inspection;
2. automated tooling;
3. keyboard/manual operation;
4. focus order/visibility/obscuration;
5. screen-reader sanity testing;
6. reflow/zoom/text-spacing checks;
7. contrast/non-text contrast;
8. reduced-motion/media behavior;
9. target/pointer/drag alternatives;
10. representative real-device/input testing;
11. user testing with disabled users when stakes, obligations, or complexity justify it.

`0 automated violations` does not equal accessible.

## 44. ACCESSIBILITY CRITICAL-PATH TEST

For every primary journey, verify where applicable:
- all meaningful controls are operable without pointer precision;
- focus moves logically;
- focus remains visible/not improperly obscured;
- names/roles/states/relationships are correct;
- forms expose labels/instructions/errors;
- dialogs/disclosures manage state/focus appropriately;
- async status is perceivable;
- meaning is not color/motion/hover-only;
- zoom/reflow preserve task completion;
- reduced motion preserves information/function;
- custom/experimental UI has an accessible operating model.

## 45. SCREEN-READER SANITY TESTING

Sanity testing is not exhaustive certification.

For representative primary/complex routes inspect:
- page title and language;
- landmarks;
- heading structure;
- link/button names;
- current/expanded/selected states;
- form labels/errors;
- dialog names/focus behavior;
- dynamic status announcements;
- table structure where applicable;
- image/media alternatives;
- unexpected duplicate/hidden content.

Escalate deeper assistive-tech testing when product stakes or interaction complexity justify it.

## 46. SEMANTICS / TECHNICAL SEO QA

Verify frontend integrity only, not content-marketing SEO strategy.

Where applicable:
- semantic headings/landmarks;
- meaningful links;
- indexability/crawlability;
- status codes;
- titles/descriptions where required;
- canonicalization;
- robots/noindex environment behavior;
- structured data validity for its intended role;
- hreflang/sitemaps where relevant;
- JS rendering does not hide required indexable content;
- duplicate/incorrect URLs do not undermine intended canonical state.

Do not reward SEO superstition or keyword theater.

## 47. RESILIENCE / FAILURE-STATE QA

Test relevant failure modes:
- JS enhancement unavailable/fails;
- image missing;
- video unavailable;
- font fails/loads late;
- API error;
- empty state;
- partial data;
- slow/offline network;
- third-party failure;
- renderer failure;
- form validation error;
- form network/server error;
- auth/session expiry where relevant.

Optional enhancement failure should not unnecessarily erase core navigation, content, or conversion.

## 48. Q7 — COMPLEXITY VERIFICATION

Re-evaluate File 09 after implementation.

Ask:
- Did the advanced feature produce the promised value?
- Did the full cost remain within approved conditions?
- Is the simpler alternative still materially worse?
- Did performance/accessibility/responsive/maintenance cost grow?
- Is failure blast radius contained?
- Is fallback real and useful?
- Is removal/replacement still feasible?
- Did stacking several complex systems produce a new burden?
- Does the feature remain worth carrying through future maintenance?

Approval at concept stage is not permanent immunity.

## 49. COMPLEXITY RE-DECISION

File 13 may recommend:
- KEEP;
- KEEP WITH CONDITIONS;
- VALIDATE FURTHER;
- SIMPLIFY;
- REPLACE;
- REMOVE.

Route the actual decision back through File 09 / File 12 when material.

Production evidence outranks sunk cost.

## 50. ADVANCED-EXPERIENCE QA

For WebGL/canvas/spatial/experimental systems, inspect:
- semantic DOM underlay/equivalent;
- conventional destination access/fallback;
- keyboard/single-pointer alternatives as applicable;
- reduced motion;
- orientation and current-state cues;
- escape/back/reset;
- responsive strategy;
- performance on representative hardware;
- memory/thermal/GPU concerns where material;
- renderer loading/failure containment;
- critical-content independence;
- fallback truthfulness;
- accessibility equivalence for meaningful scene information.

The more experimental the presentation, the stronger the orientation, reversal, and fallback burden.

## 51. Q8 — PATTERN / ANTI-PATTERN VERIFICATION

Use File 10/11 only when they improve diagnosis.

Ask:
- Did each consequential selected pattern solve its recorded job?
- Did fit/rejection conditions remain true after implementation?
- Did stacked patterns remain coherent?
- Did pattern selection drift into template imitation?
- Did a known failure mechanism appear?
- Is the visible symptom caused by a higher upstream error?
- Are we condemning a valid technique merely because it resembles an anti-pattern?

Patterns remain A5. They do not overrule doctrine or specialist requirements.

## 52. PATTERN-STACK COHERENCE TEST

Inspect the portfolio rather than each pattern in isolation.

Check cumulative:
- learning cost;
- orientation burden;
- motion attention;
- runtime/media weight;
- responsive transformation load;
- accessibility burden;
- maintenance/QA burden;
- visual grammar count.

Several individually reasonable patterns can produce a collectively incoherent site.

## 53. Q9 — HIGH-RESOLUTION POLISH

World-class claims require precision after the higher layers pass.

Inspect at macro/meso/micro levels:
- alignment;
- spacing consistency;
- typography rendering/wrapping;
- visual rhythm;
- icon consistency;
- button/control states;
- border/surface behavior;
- media quality;
- crop precision;
- transition finish;
- responsive polish;
- loading/error/empty states;
- browser inconsistencies;
- accidental overflow;
- clipped text;
- broken bounding boxes;
- awkward intermediate widths;
- visual artifacts;
- dead/duplicate UI;
- broken/misleading links;
- final copy defects.

Polish cannot rescue bad strategy or failed integrity. Lack of polish can still prevent world-class acceptance.

## 54. SCREENSHOT / VISUAL INSPECTION

For substantive builds, visually inspect actual rendered output where tools permit.

Capture/inspect representative:
- key routes;
- wide/narrow/short states;
- menus/dialogs/disclosures;
- forms/errors/success;
- cards/tables/comparisons;
- sticky/pinned/scroll states;
- advanced renderer states;
- reduced-motion variant where visually meaningful.

Look for:
- overflow;
- clipping;
- misalignment;
- unintended overlap;
- broken hierarchy;
- awkward whitespace;
- crop errors;
- centering/alignment drift;
- state artifacts;
- bounding-box failure.

Source correctness does not guarantee rendered correctness.

## 55. FUNCTIONAL INTERACTION QA

Exercise actual controls and critical paths where practical.

Do not infer functionality from markup alone.

Verify:
- links reach correct destination;
- menu opens/closes/restores context;
- form validates/submits/handles error/success;
- dialogs open/close/escape correctly;
- disclosure states match semantics;
- filtering/sorting/search behave coherently;
- cart/checkout/application state persists appropriately;
- route/history behavior matches expectation;
- async operations expose progress/result/error;
- fallback behavior actually works.

## 56. PRIMARY PATH QA

For each critical entry state:

`ENTRY -> ORIENT -> UNDERSTAND -> EVALUATE -> ACT -> RESULT -> RECOVER/NEXT STATE`

Test the shortest realistic path and common alternate path.

Observe:
- information scent;
- readiness;
- friction;
- proof timing;
- state visibility;
- error recovery;
- whether optional spectacle blocks the task.

## 57. CONVERSION / TASK QA

Conversion quality is not CTA visibility.

Verify:
- the right user knows what action means;
- commitment matches information/readiness;
- evidence supports the decision;
- constraints/price/eligibility are not deceptively hidden;
- CTA label predicts destination/action;
- form/transaction continuity works;
- success state is explicit;
- failures are recoverable.

For ecommerce/app workflows, test actual state/transaction continuity where access permits.

## 58. CONTENT / CLAIM QA

Verify launch content:
- matches approved content architecture;
- is complete where decision-critical;
- does not contain fabricated proof/testimonials/metrics;
- keeps claim strength within evidence strength;
- contextualizes numbers;
- exposes important constraints;
- uses meaningful links/CTA labels;
- has no unresolved placeholder or staging content on required production surfaces;
- maintains correct legal/policy text where in scope.

A finished design around false proof is not finished work.

## 59. BROWSER / FEATURE SUPPORT QA

Use the support policy resolved by File 07 / project spec.

Do not fail the site because an intentionally unsupported obsolete environment differs.

Do fail required support when:
- primary path breaks;
- content disappears;
- required fallback is absent;
- visual/interaction degradation exceeds the documented support policy.

Prefer capability-based testing over browser superstition.

## 60. USER TESTING ESCALATION

User testing is not mandatory for every five-page site.

Escalate when:
- task stakes are high;
- information architecture is genuinely novel;
- disabled-user access is central/high-risk;
- unfamiliar spatial/gesture systems carry core value;
- enterprise/public-service/ecommerce consequences justify it;
- analytics/support evidence suggests unresolved usability;
- expert QA cannot confidently predict real-world comprehension.

Record what user testing is intended to learn before conducting it.

## 61. RED TEAM — PURPOSE

Ask:
- What is impressive but irrelevant to the actual objective?
- Which section/system exists because it looks premium rather than because it creates value?
- Where did implementation convenience override purpose?
- Which feature could disappear with no loss of user/business value?

## 62. RED TEAM — FIRST-TIME USER

Approach without project-history knowledge.

Ask:
- What is this?
- Is it for me?
- What can I do?
- What do unfamiliar labels mean?
- Where am I?
- What changed after interaction?
- How do I get back?

Internal team familiarity is not usability evidence.

## 63. RED TEAM — SKEPTICAL BUYER / EVALUATOR

Ask:
- Which claims outrun evidence?
- Which testimonials/metrics are vague?
- Which objections remain unresolved?
- Is risk hidden rather than addressed?
- Could a qualified evaluator compare alternatives/fit?
- Does professional polish disguise weak proof?

## 64. RED TEAM — MOBILE / CONSTRAINED ENVIRONMENT

Ask:
- Which premium idea depended on desktop geometry?
- Which content became smaller instead of better recomposed?
- Did PRIORITY A1 survive?
- Does source order still make sense?
- Did hover/cursor behavior leave a ghost dependency?
- Are sticky/pinned systems still usable on short viewports?
- Does the keyboard cover important form controls?
- Does brand identity survive simplification?

## 65. RED TEAM — ACCESSIBILITY

Ask:
- Which critical path assumes sight?
- Which assumes hover?
- Which assumes pointer precision?
- Which assumes rapid motion/timing?
- Which custom semantics are brittle?
- Which status changes are silent?
- Which source/focus order exists only visually?
- Which meaningful information lacks equivalent access?

## 66. RED TEAM — WEAK DEVICE / NETWORK

Ask:
- Which experience exists only on the developer's hardware?
- What happens under CPU/GPU constraint?
- Does slow media delay the page's meaning?
- Does third-party latency block the task?
- Does the page become blank until JS completes?
- Can users recover from timeout/partial data?

## 67. RED TEAM — FAILURE

Disable or fail, where safe and feasible:
- optional JS enhancement;
- renderer;
- image/video;
- webfont;
- API;
- third party;
- network;
- form submission.

Observe whether the failure is local, understandable, and recoverable.

## 68. RED TEAM — REPEAT USE

Ask:
- Which delight becomes tax on the 50th use?
- Which transition delays expert users?
- Which instruction repeats unnecessarily?
- Which loader is avoidable?
- Which motion/hover reveal makes retrieval slower?

Frequency changes UX value.

## 69. RED TEAM — COMPLEXITY

Ask:
- If this advanced system were proposed today with current evidence, would File 09 still approve it?
- What cost was underestimated?
- Is fallback maintained or decayed?
- Is the unique value still unique?
- Has system stacking changed the ROI?

Sunk engineering cost is not future value.

## 70. RED TEAM — COMPETITOR SWAP

Replace the logo/name mentally.

Ask:
- Could a direct competitor inherit the site unchanged?
- Are art direction, media, copy, interaction, and information architecture actually specific?
- Is brand distinction carried by the logo alone?

Use carefully: category conventions can be appropriate. The test detects interchangeability, not mandatory novelty.

## 71. RED TEAM — GENERIC AI WEBSITE

Inspect for recurring generated defaults:
- endless repetitive cards;
- arbitrary badges/chips;
- meaningless eyebrow labels;
- same section anatomy repeated indefinitely;
- fake metrics/testimonials;
- ornamental gradients/blur/glow without system role;
- generic dark luxury styling;
- giant headline masking weak information hierarchy;
- random iconography;
- inconsistent spacing scales;
- brittle absolute positioning;
- overlapping mobile elements;
- tiny body/meta text;
- incomplete states;
- unfinished footer/navigation;
- text touching boundaries;
- fake buttons/dead controls;
- duplicated CTAs;
- inaccessible custom UI;
- desktop-only polish;
- visual polish masking weak strategy.

Do not assume AI-generated work is bad. Diagnose actual failure mechanisms.

## 72. RED TEAM — SOURCE OF TRUTH

Ask:
- Did implementation drift from the current spec?
- Did the spec fail to update after a material change?
- Does a stale decision still constrain the build?
- Are exceptions documented?
- Is the Launch Candidate evaluated against current truth or historical intention?

## 73. RED TEAM — REMOVAL

For major sections/features/patterns ask:

> If removed, what important meaning, action, proof, orientation, identity, or core value disappears?

If the answer is nothing material, removal or consolidation deserves consideration.

Do not use this test to erase deliberate atmosphere when atmosphere itself is strategic value.

## 74. RED TEAM — CONTRADICTION

Inspect cross-system conflicts:
- hierarchy vs conversion;
- art direction vs readability;
- motion vs task speed;
- responsive transformation vs source order;
- WebGL vs critical content;
- SEO rendering vs app architecture;
- complexity approval vs actual performance;
- spec requirement vs hard integrity.

A world-class system resolves contradictions deliberately rather than letting one module silently win.

## 75. FIX / RECHECK LOOP

Use:

`Find -> classify -> identify root cause -> route -> fix -> local verify -> affected regression -> re-score/re-evaluate -> close`

When the task permits correction, fix failures before final delivery rather than producing a beautiful defect report and wandering away.

A pre-fix score is historical evidence, not current acceptance state.

## 76. ROOT-CAUSE ROUTING

Route to the highest wrong causal layer:
- File 03 — strategy / IA / narrative / conversion / copy / proof;
- File 04 — hierarchy / art direction / type / grid / media / brand;
- File 05 — interaction / states / motion / orientation / reversal;
- File 06 — responsive / input / transformation;
- File 07 — architecture / components / CSS / JS / state / dependencies;
- File 08 — performance / accessibility / semantics / SEO integrity / resilience;
- File 09 — complexity viability;
- File 10 — pattern fit;
- File 11 — diagnostic root-cause support;
- File 12 — workflow / spec / change propagation / re-entry.

Do not patch a downstream symptom when a higher causal decision is wrong.

## 77. TARGETED REGRESSION RULE

After fixes, retest the affected dependency surface.

Regression is mandatory when correction affects:
- shared DOM/source order;
- navigation;
- global CSS/tokens;
- shared components;
- state ownership;
- responsive transformations;
- focus management;
- performance/loading;
- advanced interaction;
- third-party loading;
- route architecture;
- reusable forms.

Do not rerun the universe for punctuation.

## 78. SCORECARD DOMAINS

Use these twelve domains for L3 QA unless scope justifies merging a pair:

1. **Purpose / Strategic Alignment**
2. **IA / Narrative / Conversion / Copy**
3. **Visual System / Art Direction / Brand Distinction**
4. **UI / Interaction / Motion**
5. **Responsive / Mobile / Input Adaptation**
6. **Front-End Engineering / Maintainability**
7. **Performance**
8. **Accessibility**
9. **Semantics / Technical SEO / Resilience**
10. **Complexity ROI / System Economy**
11. **Pattern Coherence / Failure Avoidance**
12. **High-Resolution Polish / Cross-System Coherence**

Integrity domains may remain separately scored even when closely related because hiding them inside a generic “technical quality” score reduces diagnostic value.

## 79. DOMAIN SCORECARD RECORD

```text
DOMAIN:
SCORE: 0 / 1 / 2 / 3 / 4
IMPORTANCE: STANDARD / ELEVATED / CRITICAL
EVIDENCE CONFIDENCE: HIGH / MEDIUM / LOW
STRENGTHS:
MATERIAL FINDINGS:
VERDICT EFFECT:
```

Do not force this record for L1 checks.

## 80. CROSS-SYSTEM COHERENCE REVIEW

After domain review, inspect relationships between systems.

Ask:
- Does copy hierarchy match visual hierarchy?
- Does conversion priority match interaction prominence?
- Does brand expression survive responsive transformation?
- Does motion reinforce rather than contradict hierarchy?
- Does engineering preserve semantic/visual intent?
- Do performance choices preserve core media/value?
- Do accessibility alternatives preserve real meaning rather than token compliance?
- Does complexity create value rather than maintenance theater?

G7 is not the average of domain scores. It is how well the domains reinforce one another.

## 81. WORLD-CLASS STANDARD

`WORLD-CLASS STANDARD MET` requires more than passing QA.

The project should demonstrate, at the complexity level it deserves:
- strategic clarity;
- strong information architecture;
- appropriate decision/conversion support;
- project-specific visual thesis and distinction;
- coherent hierarchy;
- justified interaction;
- responsive excellence;
- maintainable implementation;
- strong performance/accessibility/semantic integrity;
- earned complexity;
- resilience;
- meaningful brand/product distinction;
- high-resolution polish;
- cross-system coherence;
- red-team survivability.

File 08 compliance is necessary integrity, not proof of elite design.
Elite aesthetics are not compensation for failed integrity.

## 82. LAUNCH-READINESS GATE

`LAUNCH_READY` requires:
- all BLOCKER findings closed;
- no unresolved CRITICAL finding;
- File 08 hard acceptance gate passes;
- primary user/task/conversion paths work;
- supported responsive/input environments are viable;
- current build and `PROJECT_WEBSITE_SPEC` are reconciled;
- required content/proof is real and complete;
- approved File 09 conditions remain satisfied;
- known exceptions/residual risks are documented;
- any accepted MAJOR finding has explicit ownership/risk acceptance and does not invalidate the release objective;
- targeted regression after material fixes passes;
- evidence is sufficient for the scope of the claim.

`LAUNCH_READY` means the project can responsibly ship under its defined scope. It does not automatically mean world-class.

## 83. WORLD-CLASS ACCEPTANCE GATE

`WORLD-CLASS STANDARD MET` additionally requires:
- `LAUNCH_READY`;
- no systemic MAJOR weakness in a core Strategy Vector dimension;
- domain quality is predominantly STRONG/EXCEPTIONAL where strategically important;
- cross-system coherence is strong;
- art direction is intentional and project-specific;
- responsive transformation preserves value with high polish;
- no obvious generic/template/AI-default character in core surfaces;
- complexity remains proportional to value;
- primary experience survives relevant red-team modes;
- high-resolution polish is consistently strong;
- evidence confidence is sufficient for the claim.

No arbitrary percentage can certify this state.

## 84. PROJECT ADAPTATION — SMALL MARKETING / CONTENT

Emphasize:
- proposition/orientation;
- narrative/CTA clarity;
- credible proof;
- responsive hierarchy;
- semantic HTML;
- low unnecessary runtime;
- accessible form/contact path;
- media performance;
- polish.

Keep ceremony light. A small site can still fail launch readiness through broken contact, inaccessible navigation, weak mobile, or fabricated proof.

## 85. PROJECT ADAPTATION — SAAS / B2B

Emphasize:
- category/value clarity;
- buyer-native IA;
- mechanism/product explanation;
- proof/trust;
- comparison/fit;
- implementation/integration clarity;
- conversion readiness;
- product UI legibility;
- marketing/app boundary;
- technical credibility.

For authenticated product surfaces, elevate state, keyboard/focus, async feedback, data integrity, responsiveness, and maintainability.

## 86. PROJECT ADAPTATION — ECOMMERCE

Emphasize:
- discoverability;
- filtering/search;
- product identity and media;
- price/variant accuracy;
- comparison;
- cart continuity;
- checkout/forms;
- error recovery;
- performance;
- transaction resilience;
- mobile purchase viability.

A visually polished catalog with fragile checkout is not launch-ready.

## 87. PROJECT ADAPTATION — LUXURY / HOSPITALITY

Emphasize:
- desire/place/atmosphere;
- photography/media quality;
- distinctive art direction;
- controlled pacing;
- practical information availability;
- availability/inquiry path;
- responsive art direction;
- media performance;
- brand distinction.

Do not mistake silence, serif typography, black/gold, or slow cinematic transitions for luxury quality.

## 88. PROJECT ADAPTATION — EDITORIAL / RESEARCH

Emphasize:
- hierarchy/reading;
- chapter navigation;
- evidence/citations;
- figures/tables;
- responsive reading measure;
- source order;
- search/retrieval;
- indexability;
- low unnecessary JS;
- long-page performance.

Depth is not failure when structure makes depth usable.

## 89. PROJECT ADAPTATION — PORTFOLIO / AGENCY

Emphasize:
- work discoverability;
- quality/relevance judgment;
- art direction;
- project differentiation;
- metadata/context;
- process/outcome proof where relevant;
- responsive media;
- contact path;
- experimental presentation fallback.

The theater must not hide the work.

## 90. PROJECT ADAPTATION — PUBLIC SERVICE / UTILITY

Emphasize:
- task completion;
- WCAG rigor;
- plain semantic structure;
- broad device/network resilience;
- forms/recovery/help;
- predictable navigation;
- low dependency burden;
- user testing where stakes justify it.

Brand spectacle is subordinate to public task reliability.

## 91. PROJECT ADAPTATION — DATA / VISUALIZATION

Emphasize:
- information hierarchy;
- labels/legends;
- comparison;
- keyboard/pointer alternatives;
- non-color encoding;
- responsive transformation;
- table/text equivalents where needed;
- progressive complexity;
- performance;
- interaction explanation.

A beautiful chart that cannot communicate its underlying relationships to required users is not complete.

## 92. PROJECT ADAPTATION — CAMPAIGN / LAUNCH

Emphasize:
- campaign proposition;
- narrative sequencing;
- action timing;
- shareability/addressability;
- media/motion value;
- fast initial comprehension;
- responsive simplification;
- launch traffic resilience;
- analytics/measurement only where legitimately required.

High expression does not excuse inaccessible or fragile conversion.

## 93. PROJECT ADAPTATION — EXPERIENCE-FIRST / WEBGL

Emphasize simultaneously:
- concept/art direction;
- spatial/experiential value;
- orientation;
- named destinations;
- reduced motion;
- accessible semantic layer;
- fallback;
- mobile adaptation;
- renderer isolation;
- GPU/CPU/media budgets;
- failure containment;
- File 09 value retention.

Higher spectacle raises, rather than lowers, the burden of proof.

## 94. PROJECT ADAPTATION — LARGE MULTI-ROUTE / APPLICATION

Emphasize:
- design-system consistency;
- route/state architecture;
- permissions/auth where relevant;
- regression surface;
- data/loading/error states;
- accessibility primitives;
- performance across route classes;
- shared component quality;
- maintainability;
- automated test support where it meaningfully reduces risk.

Sample representative critical routes plus shared systems; do not pretend one homepage audit certifies the application.

## 95. FINAL QA REPORT

Use a compact report:

```text
QA SCOPE:
BUILD / VERSION:
DATE:
STRATEGY VECTOR SUMMARY:
EVIDENCE LIMITATIONS:

HARD GATE: PASS / FAIL / INCOMPLETE
OVERALL VERDICT:
LAUNCH READY: YES / NO
WORLD-CLASS STANDARD: MET / NOT MET / NOT ASSESSED

DOMAIN SCORECARD:
[12 domains as applicable]

HIGHEST-SEVERITY FINDINGS:
ROOT CAUSES:
FIXES PERFORMED:
REMAINING ISSUES:
ACCEPTED EXCEPTIONS / RESIDUAL RISK:
REGRESSION STATUS:
EVIDENCE CONFIDENCE:
NEXT REQUIRED ACTION:
```

Keep the detailed finding log separate when large.

## 96. PROJECT_WEBSITE_SPEC WRITEBACK

Write only acceptance-relevant state, for example:

```text
QA / ACCEPTANCE
QA date / build:
Evaluated scope:
QA depth:
Hard-gate state:
Overall verdict:
Open BLOCKER / CRITICAL / material MAJOR findings:
Approved exceptions:
Residual risks:
File 08 integrity status:
File 09 condition status:
Specification drift status:
Launch readiness:
World-class status if assessed:
Required re-entry module/state:
```

Do not dump the entire QA report into the project spec.

## 97. CORRECTION HANDOFF

For every material correction cycle provide:
- finding summary;
- severity;
- evidence;
- highest wrong causal module;
- required decision change;
- affected downstream scope;
- regression scope;
- re-entry state under File 12.

The correction handoff should be smaller than the QA report.

## 98. HANDOFF TO FILE 14

Route to `14_RESEARCH_EVIDENCE_INDEX.md` only when:
- a governing doctrine claim is challenged;
- evidence behind an OS rule needs validation;
- credible evidence conflicts;
- a repeated QA observation may justify OS evolution;
- a doctrine/pattern change is being proposed;
- provenance is needed to decide whether a supposed best practice is actually supported.

Do not reopen research because one site successfully violates a pattern.

## 99. FILE 13 ACCEPTANCE GATE

File 13 itself is complete only when it:
- preserves A0–A6 authority;
- clearly owns A4 evaluation/acceptance;
- evaluates actual artifacts against actual obligations;
- requires hard gates before score interpretation;
- prevents critical failures from being averaged away;
- defines BLOCKER / CRITICAL / MAJOR / MINOR clearly;
- distinguishes evidence confidence from severity;
- uses contextual rather than universal weighting;
- avoids pseudo-precision;
- verifies strategy, visual, interaction, responsive, engineering, integrity, complexity, pattern coherence, and polish;
- requires rendered visual inspection when applicable;
- requires actual functional interaction testing where practical;
- preserves File 08 layered integrity testing;
- includes representative environment/input testing;
- includes specification-drift review;
- includes failure-state/resilience QA;
- includes advanced-experience QA;
- includes adversarial red-team modes;
- includes fix/recheck/regression loops;
- distinguishes Launch Ready from World-Class;
- routes findings to owning modules;
- defines compact project-spec writeback;
- routes evidence/doctrine questions to File 14;
- remains proportional and token-efficient.

## 100. INTERNAL RED TEAM — SCORE WORSHIP

Attack the QA system itself:
- Is a number doing work that should belong to judgment?
- Can a high aggregate hide a failed gate?
- Are weights arbitrary?
- Does scoring reward the evaluator's taste?
- Is “world-class” becoming a threshold game?

If yes, reduce numeric authority.

## 101. INTERNAL RED TEAM — TOOL WORSHIP

Check for:
- Lighthouse worship;
- automated accessibility overconfidence;
- code linting treated as rendered correctness;
- visual diff treated as usability proof;
- one browser/device treated as representative reality.

Tools produce evidence. They do not replace judgment or users.

## 102. INTERNAL RED TEAM — AESTHETIC BIAS

Check whether the QA system rewards or punishes:
- minimalism;
- maximalism;
- serif/sans;
- whitespace;
- density;
- motion;
- asymmetry;
- WebGL;
- Awwwards resemblance;
- conventionality.

Only project-purpose fit and execution quality matter.

## 103. INTERNAL RED TEAM — INTEGRITY BLINDNESS

Check for:
- WCAG treated as optional polish;
- WCAG treated as total quality;
- screen-reader sanity omitted;
- focus/source order ignored;
- reduced motion ignored;
- reflow/zoom ignored;
- failure states ignored;
- performance based only on Lighthouse;
- critical third-party dependence ignored.

## 104. INTERNAL RED TEAM — ARTIFACT BLINDNESS

Check for:
- source-only QA;
- desktop screenshot bias;
- no actual interaction testing;
- no awkward-width inspection;
- no mobile keyboard test where forms matter;
- no error/success-state test;
- claims of visual polish without rendered inspection.

## 105. INTERNAL RED TEAM — DIAGNOSTIC BIAS

Check whether:
- File 11 labels replace root-cause reasoning;
- every symptom is patched locally;
- prior File 09 approval is treated as permanent;
- the spec is treated as infallible;
- critical findings lack reproduction evidence;
- minor defects create bureaucratic over-reporting.

## 106. INTERNAL RED TEAM — VERDICT INFLATION

Ask:
- Is Launch Ready too easy to obtain?
- Is World-Class just “few bugs”?
- Are unresolved systemic MAJOR findings being rationalized?
- Is evidence confidence adequate for the claim?
- Are high visual scores masking generic strategy?
- Are technically perfect but generic sites being called elite?

Tighten the verdict if the claim outruns evidence.

## 107. TOKEN-EFFICIENCY RULE

Normal use should not load the entire OS.

For L1/L2 QA:
- use `PROJECT_WEBSITE_SPEC`;
- File 13;
- affected specialist module(s);
- File 11 only when diagnosis needs it.

For L3 full acceptance:
- start with File 12 handoff and spec;
- retrieve specialist obligations by domain as needed;
- keep raw research cold;
- use compact findings for minor issues;
- expand only consequential findings.

The QA system should spend context on evidence and causal diagnosis, not restating its own manual.

## 108. OPERATIONAL WORKFLOW

`Launch Candidate handoff -> scope/evidence check -> hard-gate smoke test -> spec drift -> Strategy Vector fit -> primary path -> responsive/input -> File 08 integrity -> engineering -> visual/interaction -> File 09 complexity -> File 10/11 pattern diagnosis where needed -> polish -> adversarial red-team -> finding severity/root cause -> fix/recheck -> targeted regression -> domain scorecard -> acceptance gates -> final verdict -> PROJECT_WEBSITE_SPEC writeback -> File 14 only if evidence/doctrine issue exists`

## 109. SUCCESS STANDARD

File 13 succeeds when a project cannot call itself launch-ready, premium, elite, best-in-class, or world-class merely because it looks impressive, receives a high automated score, or has clean source code.

It succeeds when acceptance is grounded in project purpose, current specification, actual user paths, rendered behavior, responsive adaptation, engineering integrity, File 08 hard requirements, earned complexity, resilience, evidence, adversarial review, and high-resolution coherence.

The final standard is not maximum score.

It is **maximum defensible quality at the complexity level the project actually deserves**.

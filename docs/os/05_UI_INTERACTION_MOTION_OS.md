# 05 — UI · INTERACTION · MOTION OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A3  
**Dependencies:** `01`, `02`, `03`, `04`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC`  
**Hands Off To:** `06_RESPONSIVE_MOBILE_OS.md`  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Determine how an already coherent information and visual system behaves over time and in response to user action.

Governs interaction grammar, affordances, component states, hover, focus design, active/selected/current states, disclosure, feedback, microinteractions, motion hierarchy/purpose/intensity, timing/easing relationships, entrances/exits, scroll-linked behavior, sticky/pinned systems, route transitions, loaders, progress, custom cursors, drag/spatial/media interaction, gesture teaching, reversibility, orientation/clarity debt, reduced-motion design, and experiential interfaces.

It does not redefine strategy, copy, art direction, responsive strategy, frontend architecture, or formal accessibility conformance.

## 2. OPERATING PREMISE

Interaction is communication. Motion is communication over time.

Every meaningful interaction should help users understand what can be done, know an action was received, understand what changed, know where they are, predict what happens next, recover from/reverse actions, or build a useful mental model.

Motion quantity is not sophistication. Behavioral clarity is.

## 3. FORENSIC EVIDENCE SUMMARY

The corpus supports multiple valid motion systems:
- Shopify: chaptering/narrative/hierarchy
- Google Store: state/navigation/product demonstration
- Stripe: premium with little theatrical motion
- Terminal: cinematic atmosphere with temporary clarity debt
- Cash App: brand expression during discovery, conventionalization during reference
- Primland: spatial understanding/geography
- Active Theory: traversal/creative expression with conventional semantics underneath

Therefore: assign behavior to the actual job of the experience.

## 4. FOUNDATIONAL RULE

Do not add animation to rescue unclear IA or weak static hierarchy.

If user journey is unclear, return to File 03.
If static hierarchy is unclear, return to File 04.

Motion reinforces a working system.

## 5. INTERACTION GRAMMAR

A site should behave as one language.

Define:
`INPUT -> TARGET -> RESPONSE -> FEEDBACK -> STATE -> REVERSAL`

Project-wide conventions should cover:
- activation
- navigation
- disclosure
- selection
- feedback
- reversal
- drag
- media
- loading
- error

Similar components should behave similarly unless semantics differ.

## 6. INTERACTION CONTRACT

For each nontrivial interactive component record when relevant:

```text
COMPONENT:
PURPOSE:
PRIMARY INPUT:
ALTERNATE INPUTS:
REST:
HOVER:
FOCUS:
PRESSED/ACTIVE:
SELECTED/CURRENT:
DISABLED:
LOADING/BUSY:
SUCCESS:
ERROR:
ACTION:
FEEDBACK:
STATE CHANGE:
REVERSAL:
MOTION JOB:
MOTION CLASS:
REDUCED-MOTION EQUIVALENT:
RESPONSIVE/TOUCH RISK:
ACCESSIBILITY RISK:
```

Not every component requires every state.

## 7. AFFORDANCE & SIGNIFIERS

Users should reasonably perceive what is interactive, selectable, draggable, expandable, navigational, or disabled.

Motion may strengthen affordance but must not be its only evidence.

Possible signifiers:
- label
- shape
- position
- icon
- cursor
- underline
- border
- state change
- preview
- motion

Critical actions should not depend on one fragile signifier.

## 8. FEEDBACK

Every meaningful action should produce appropriate acknowledgment.

Feedback levels:
- FB-1 MICRO — small reversible actions
- FB-2 STATE — mode/content changes
- FB-3 PROCESS — waiting/submission/upload/generation
- FB-4 CONSEQUENTIAL — important/destructive actions

Strength scales with importance, uncertainty, latency, and risk.

## 9. STATE VISIBILITY

Show state users would otherwise need to remember:
- current destination
- selected filter
- expanded panel
- active tab
- loading
- success
- disabled

Motion can introduce the transition; final state must remain understandable after motion ends.

Distinguish CURRENT, SELECTED, and ACTIVE/PRESSED when the distinction matters.

## 10. HOVER & FOCUS

Hover is supplementary. Use for preview, emphasis, affordance reinforcement, secondary detail, or expression. Never place essential content/function exclusively behind hover.

Focus is not hover for keyboards. It represents keyboard/assistive navigation state and must remain visible/meaningful. Formal requirements belong to File 08.

Hover purpose test: what becomes more understandable because this hover exists? If answer is only “it moves,” reconsider.

## 11. DISCLOSURE

Disclosure may hide secondary information until relevant. Motion can clarify origin, direction, and relationship, but should not impose unnecessary delay before content becomes available.

## 12. MOTION JOBS

Every meaningful motion maps to at least one:
- MJ1 ORIENTATION
- MJ2 HIERARCHY
- MJ3 FEEDBACK
- MJ4 EXPLANATION
- MJ5 SPATIAL UNDERSTANDING
- MJ6 NARRATIVE
- MJ7 BRAND CHARACTER
- MJ8 ATMOSPHERE

If no defensible job exists, motion is decorative.

For functional interfaces, orientation/feedback/explanation/hierarchy usually outrank brand/narrative/atmosphere. Experience-first projects may invert that ordering when G1 justifies it.

## 13. MOTION VALUE CLASSIFICATION

**ESSENTIAL** — removal fundamentally damages information/function and no reasonable substitute exists.

**HIGH-VALUE** — core function remains but comprehension/spatial meaning/narrative/brand is materially weakened.

**SUPPORTIVE** — improves clarity/perception but a simpler substitute preserves most value.

**DECORATIVE** — primarily atmosphere/delight.

Essentiality test: if instant/static state loses nothing important, classification is probably decorative/supportive.

## 14. MOTION BUDGET PROFILE

Classify project-level motion:
- RESTRAINED
- BALANCED
- EXPRESSIVE
- IMMERSIVE

Use Strategy Vector:
- Experiential Intensity
- Interaction Novelty
- Information Complexity
- Buyer Commitment / Trust Burden
- Primary Job

Motion budget is also local; a page can alternate calm explanation, expressive chapter transition, calm proof, interactive demo, calm conversion.

## 15. MOTION HIERARCHY

Classify simultaneous motion:
- MP-1 DOMINANT
- MP-2 SUPPORTING
- MP-3 AMBIENT

Avoid several unrelated MP-1 movements competing at once.

Motion spends attention. Ask whether this is where attention should go now.

## 16. MOTION CONTRACT

```text
TRIGGER:
ELEMENT:
START STATE:
END STATE:
JOB:
VALUE CLASS:
MOTION PRIORITY:
CHANGE:
DURATION CLASS:
EASING FAMILY:
SEQUENCE/STAGGER:
INTERRUPTIBLE:
REVERSIBLE:
REDUCED-MOTION VERSION:
RESPONSIVE RISK:
PERFORMANCE RISK:
```

## 17. TIMING PHILOSOPHY

No universal millisecond values.

Timing depends on physical distance, amount of change, task frequency, urgency, narrative intention, component size, device, and performance.

Use relative classes:
- IMMEDIATE
- QUICK
- STANDARD
- DELIBERATE
- EXTENDED

Calibrate concrete values in prototyping/implementation.

Similar actions should feel temporally related. High-frequency interactions should minimize unnecessary waiting.

## 18. EASING PHILOSOPHY

Define a small family of behavioral curves conceptually:
- SETTLE
- DEPART
- STATE
- SPRING when appropriate
- CONTINUOUS for user/scroll-controlled progression

Use similar motion language for similar meanings.

## 19. SEQUENCING / ENTRANCE / EXIT

Stagger can reveal order/grouping/progression. Do not stagger every list.

Entrance motion may direct attention/establish hierarchy/atmosphere, but ordinary utility content should not become inaccessible while it waits to animate.

Exit motion should clarify disappearance/relationship without blocking the next action.

Open and close behavior should remain conceptually related.

## 20. SCROLL

Native scroll is familiar input. Modify it cautiously.

Scroll-linked motion test:
1. What does linkage communicate?
2. Does movement correspond to progression?
3. Can users control pace/reverse?
4. Does text remain readable?
5. Does scroll remain predictable?
6. Reduced motion?
7. Narrow/touch behavior?
8. Simpler substitute?

Avoid scroll hijacking that forces unrelated distances, traps users, unexpectedly converts axes, or subordinates reading speed to animation speed.

Long/transformed experiences may require active chapter labels, progress, persistent navigation, or semantic headings.

## 21. STICKY / PINNED

Use when persistent comparison/context or visual continuity matters. Require clear entry, progress, exit. Reject pinned systems that trap users, consume scarce viewport height, or create ambiguous progress.

## 22. HORIZONTAL EXPERIENCES

Justified when content has horizontal/spatial logic, gallery comparison benefits, or narrative meaning is genuinely horizontal. Otherwise avoid novelty for novelty's sake. Provide orientation and responsive alternatives.

## 23. PAGE/ROUTE TRANSITIONS

May communicate continuity, hierarchy, brand, spatial relationship without preventing navigation.

Requirements:
- destination identifiable
- URL/browser history meaningful
- no trapping
- routine clicks do not pay unnecessary cinematic tax

## 24. LOADERS / PROGRESS

Loader's first job: communicate system not ready yet. It is not there to make waiting look expensive.

Before branded loader ask whether meaningful waiting is unavoidable, useful content can appear earlier, progress is measurable, full-screen gating is necessary, repeated visits benefit.

Use determinate progress only when completion can be meaningfully measured. Never fake precision.

## 25. CUSTOM CURSORS

Specialist pattern. Can add brand/signification/spatial feedback. Must not become sole evidence of clickability, drag, destination, or state. Touch will remove/transform it.

Cursor test: what information does it add? If none, classify decorative and evaluate cost.

## 26. DRAG

Drag can provide direct manipulation, spatial agency, comparison, ordering. It must have a non-drag single-pointer alternative unless dragging itself is essential; File 08 validates formal conformance.

Record drag target, moving object, direction/bounds, feedback/end state, non-drag alternative, touch implication, keyboard/accessibility flag.

## 27. SPATIAL INTERACTION

Higher spatial freedom creates higher orientation cost.

Consider where am I, what can be selected, what changed, where is home, how to return, and whether destinations can be accessed without spatial guessing.

Use appropriate combinations of persistent anchor, named destination, home/reset, current state, repeated marker, instruction, exit, non-spatial route.

## 28. ORIENTATION DEBT

Orientation Debt = uncertainty introduced when a system departs from familiar location/navigation behavior.

Record source, user uncertainty, severity, repayment mechanism, residual risk.

Repay with labels, persistent nav, active state, breadcrumbs, progress, chapter index, instruction, stable landmarks, named destination menu, URL/route, close/back/reset.

## 29. CLARITY DEBT

Clarity Debt = expressive framing delays understanding of what this is, what is offered, or what the user can do.

Record what is delayed, why delay is valuable, risk, when clarity arrives, how repaid, acceptable/excessive.

If no strategic value justifies delay, remove it.

## 30. NON-OBVIOUS GESTURES / TEACHING

If interaction is not reasonably discoverable, teach it contextually, concisely, and just in time. Avoid long onboarding before context or repeated teaching of standard behavior.

## 31. REVERSIBILITY

Experimental states should answer how to go back. Use Close, Back, Collapse, Home, Reset, Escape, route reversal as appropriate.

Test entry, exit, visibility of exit, restored context, and destructive loss.

## 32. PROGRESSIVE CONVENTIONALIZATION

Novelty may decrease as intent becomes more task-specific:
`Discovery (expressive) -> Selection (clearer) -> Evaluation (predictable) -> Action (high clarity)`

Do not force users to keep paying novelty tax while completing precise tasks.

## 33. CONVENTIONAL SEMANTICS UNDER EXPERIMENTAL PRESENTATION

Preserve named links, real destinations, readable headings, current state, conventional form fields, explicit CTA labels, addressable routes, understandable close behavior.

Presentation may be unfamiliar. Semantics should not also become mysterious.

## 34. MEDIA INTERACTION

File 04 defines media role/appearance. File 05 defines play/pause/scrub/expand/mute/gallery/preview/demonstration behavior.

Controls should match media role. Do not hide important controls solely for visual cleanliness.

Before autoplay ask whether media is atmospheric/informational, whether sound begins, whether attention is hijacked, whether content matters without playback, whether pause/reduced-motion/bandwidth contexts are addressed.

## 35. MICROINTERACTIONS

Support acknowledgment, status, prevention, orientation, delight where appropriate.

50th-use test: would repeated behavior still feel helpful? If not, reduce intensity/frequency.

## 36. BRAND MOTION / MOTION LANGUAGE

Brand behavior may feel precise, elastic, restrained, abrupt, soft, kinetic, cinematic, mechanical, playful.

Define a small recurring behavioral vocabulary for navigation, content reveal, product demo, and selected brand moments. “Playful” never means animate everything.

## 37. REDUCED MOTION IS A DESIGN STATE

For each meaningful motion event classify reduced behavior:
- PRESERVE
- REDUCE
- REPLACE
- REMOVE

Record the information that must survive.

Motion may introduce a critical state, but state itself must remain understandable after motion ends.

## 38. RESPONSIVE FLAGS

Flag every interaction depending on hover, cursor, viewport height, wide spatial relationships, fixed/sticky behavior, drag precision, scroll distance, large media, or multi-column composition.

Classify:
- MUST PRESERVE
- PRESERVE PURPOSE, REPLACE MECHANIC
- MAY SIMPLIFY
- MAY REMOVE

File 06 makes final cross-device decision.

## 39. ARCHETYPE ADAPTATIONS

### SaaS/B2B
Favor product explanation, state, navigation, diagrams, demonstrations. Protect comprehension/credibility/comparison.

### Ecommerce
Favor selection/cart/nav/product media feedback. Protect transaction speed/comparison/predictability.

### Luxury/Hospitality
More allowance for atmosphere/narrative/environmental media/spatial transitions. Protect practical info, availability/inquiry, orientation, control.

### Editorial/Research
Favor orientation/chapter/data explanation/disclosure. Protect sustained reading.

### Portfolio/Agency
Motion may demonstrate capability but protect project discoverability/metadata/contact/fallback.

### Brand/Guidelines
Motion may demonstrate brand behavior but protect reference retrieval/category orientation.

### Public Service/Utility
Use motion sparingly for state/feedback/disclosure/navigation continuity.

### Experience-First Campaign
May use choreography/spatial/atmospheric/bespoke transitions with explicit orientation, Complexity ROI, responsive plan, reduced-motion plan, escape/reversal.

## 40. CONDITIONAL RULES

- Motion must have a named job.
- Higher novelty requires stronger orientation.
- High-frequency actions minimize temporal friction.
- Expression may peak at discovery and decrease toward task completion.
- Hover enriches but must not own essential function.
- Non-obvious gestures require discoverability.
- Experimental states require clear reversal.
- Loaders represent real waiting.
- Reduced motion preserves information.
- Motion intensity follows local section purpose.

## 41. PATTERN FAMILIES

Optional:
- Stateful Disclosure
- Preview on Hover
- Spatial Detail Panel
- Hierarchical Reveal
- Scroll Chapter Transition
- Route Continuity
- Product Demonstration
- Exploratory Surface + Conventional Fallback

## 42. FAILURE MODES

- Motion Soup
- Reveal Everything
- Scroll Hijacking
- Loader Theater
- Transition Hostage
- Hover Dependency
- Cursor Theater
- Motion as Premium Signal
- Every Section New Grammar
- State Ambiguity
- Orientation Loss
- Clarity Debt Without Repayment
- Gesture Mystery
- Pinned Prison
- Mobile Spectacle Preservation
- Reduced-Motion Afterthought
- Animation Masks Latency
- Brand Depends on Motion

## 43. DIAGNOSTIC TESTS

- Motion Job
- Static Substitute
- 50th Use
- Attention Competition
- Orientation
- Reversal
- Gesture Discoverability
- Interaction Grammar
- Hover Removal
- Cursor Removal
- Loader Necessity
- Scroll Agency
- Motion Hierarchy
- Reduced Motion
- Semantic Underlay
- Transition Time
- Responsive Risk

## 44. PROJECT_WEBSITE_SPEC WRITEBACK

Update interaction grammar, core component states, motion budget/character/jobs/timing classes/easing families/hierarchy/section intensity, scroll/pinning, transitions, experiential interactions, orientation/clarity debt and repayment, reduced-motion model, responsive flags, Complexity ROI requirement, open questions.

## 45. HANDOFF TO FILE 06

Provide interaction grammar, core-value interactions, must-preserve behavior, hover/cursor/drag/spatial/scroll/pinned/page-transition/media/gesture systems, orientation mechanisms, reduced-motion model, mobile risks, simplifiable motion, removable decoration.

## 46. PRE-RESPONSIVE GATE

PASS when:
- recurring grammar defined
- important states identified
- material motion has named job
- motion reinforces File 04 hierarchy
- orientation debt and repayment defined
- nonstandard states reversible
- gesture teaching/drag alternatives flagged
- reduced-motion treatment defined
- device-sensitive behavior flagged
- `PROJECT_WEBSITE_SPEC` updated

## 47. COMPLEXITY ROI TRIGGERS

Route File 09 for full 3D/WebGL, major canvas, bespoke scroll engines, long pinned sequences, unusual navigation, complex drag, custom cursors materially affecting nav, audio environments, cinematic transitions, gated loaders, substantial learning.

## 48. WORKFLOW

`Strategy Vector -> File 03 priorities -> File 04 visual handoff -> interaction grammar -> states -> feedback -> motion jobs/value -> motion budget -> timing/easing -> scroll/transitions -> experiential systems -> debt/reversal/teaching -> reduced motion -> diagnostics -> responsive flags -> Complexity ROI if needed -> PROJECT_WEBSITE_SPEC -> gate -> File 06`

## 49. RED TEAM

Ask what job every animation performs, whether GSAP/WebGL/etc. are status symbols, whether affordance exists before motion, whether movement steals PRIORITY A1 attention, whether scroll remains user-controlled, whether experimental states repay orientation/clarity debt, whether gestures are discoverable/reversible, what happens without hover/drag/motion, whether brand behavior is coherent, and whether runtime cost earns its value.

## 50. SUCCESS STANDARD

This module succeeds when interaction is understandable, recurring behavior feels like one language, states communicate clearly, input gets appropriate feedback, motion has jobs, intensity matches purpose, experimental interaction repays debt, gestures are taught, unusual states are reversible, conventional semantics survive underneath, reduced-motion behavior is designed, device-dependent interaction is flagged, and complexity earns its cost.

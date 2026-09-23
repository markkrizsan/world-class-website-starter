# 11 — ANTI-PATTERN LIBRARY

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A5 — DIAGNOSTIC FAILURE-PATTERN LAYER / REVIEW AID  
**Dependencies:** `PROJECT_CUSTOM_INSTRUCTIONS.md`, `00_OS_MANIFEST_ROUTER.md`, `01_GOVERNING_DOCTRINE.md`, `02_STRATEGY_VECTOR_AND_ROUTER.md`, relevant specialist modules `03`–`09`, `10_PATTERN_LIBRARY.md`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC` only when diagnosis changes a material upstream decision, exception, or unresolved risk  
**Hands Off To:** the relevant upstream module for correction; `12_BUILD_WORKFLOW_OS.md` for prevention/correction loops; `13_SCORECARD_QA_REDTEAM_OS.md` for full acceptance QA  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Diagnose recurring website failure mechanisms without turning taste, fashion, or reaction against fashion into doctrine.

This file helps answer:

`What is failing -> what symptom reveals it -> what root cause created it -> which higher-authority system was violated -> how severe is it -> where should correction be routed -> what repair principle should guide the fix?`

The Anti-Pattern Library exists to accelerate critique, red-team, debugging, and audit. It does not replace the governing laws, specialist systems, File 08 hard integrity gate, File 09 complexity decisions, or later File 13 acceptance QA.

## 2. AUTHORITY BOUNDARY

File 11 sits at **A5**, below project purpose, Project Custom Instructions, governing doctrine, specialist modules, and formal acceptance authority.

An anti-pattern label may identify a recurring failure. It may not:
- overrule a valid project requirement;
- convert a contextual preference into universal doctrine;
- waive File 08 integrity requirements;
- reject complexity that has legitimately passed File 09;
- redesign the project by taste;
- substitute for evidence when a doctrine claim is genuinely disputed;
- declare a technique bad merely because it is often abused.

When File 11 conflicts with a higher-authority decision, the higher authority governs. If the higher-authority decision itself appears wrong, route there and revise it explicitly.

## 3. OPERATING PREMISE

Weak website work often presents as a visible symptom several layers below its actual cause.

Examples:
- too many accordions may originate in unresolved IA rather than a disclosure-component problem;
- weak mobile may originate in desktop-only art direction rather than breakpoint syntax;
- excessive animation may originate in generic branding trying to manufacture distinction;
- inaccessible controls may originate in custom interaction architecture rather than missing ARIA;
- bloated JavaScript may originate in a framework decision rather than local bundle trimming;
- CTA repetition may originate in unclear readiness logic rather than button styling.

Therefore:

> Diagnose upward before patching downward.

The goal is not to remove symptoms cosmetically. The goal is to correct the highest causal decision that can remove the failure without destroying valid project value.

## 4. WHEN TO LOAD FILE 11

Load File 11 when:
- critiquing or red-teaming website work;
- generated output feels generic, incoherent, overbuilt, fragile, or inexplicably weak;
- repeated implementation patches are accumulating;
- responsive behavior degrades the intended experience;
- conversion or information architecture feels mechanically templated;
- visual design looks “premium” but interchangeable;
- interaction or motion creates friction/orientation loss;
- performance/accessibility failures appear connected to design or architecture;
- a selected File 10 pattern is being misused;
- a post-build audit needs root-cause diagnosis before remediation.

Do not load the entire Anti-Pattern Library for ordinary construction when no diagnosis is needed.

## 5. REQUIRED INPUTS

Use the smallest sufficient context:
- current `PROJECT_WEBSITE_SPEC`;
- relevant Strategy Vector dimensions;
- affected specialist module(s);
- selected pattern portfolio from File 10 when pattern misuse is suspected;
- File 08 findings when integrity is involved;
- File 09 decisions when complexity is involved;
- actual implementation, screenshots, behavior, or measured evidence when available.

Do not diagnose an imagined site from generic best practices when the real artifact can be inspected.

## 6. DIAGNOSTIC MODEL

Use six layers:

1. **SYMPTOM** — what is visibly or measurably wrong?
2. **ROOT CAUSE** — what upstream decision or implementation habit generated it?
3. **VIOLATION** — which project requirement, law, module, gate, or selected pattern contract is being broken?
4. **SEVERITY** — what consequence does the failure create?
5. **ROUTE** — where must the decision be corrected?
6. **REMEDY PRINCIPLE** — what outcome or constraint should the repair restore?

Do not jump from symptom directly to a fashionable fix.

## 7. SYMPTOM VS ROOT CAUSE

A **symptom** is observable:
- headings are unclear;
- every section is card-based;
- mobile order feels wrong;
- focus disappears;
- page loads slowly;
- users cannot predict a navigation destination;
- animation delays routine actions.

A **root cause** explains why:
- semantic priority was never resolved;
- component convenience replaced information structure;
- desktop visual order was treated as content order;
- focus architecture was omitted from a custom widget;
- optional runtime was placed on the critical path;
- branded labels replaced user-native terminology;
- motion was used as a quality signal rather than for a named job.

One root cause may produce many symptoms. One symptom may have several plausible causes. Diagnose before naming the anti-pattern.

## 8. WHAT COUNTS AS AN ANTI-PATTERN

An anti-pattern is a recurring decision or implementation failure that:
- initially appears useful, prestigious, convenient, clean, expressive, or efficient;
- recurs across projects;
- predictably creates meaningful downside under identifiable conditions;
- can be explained through higher-authority Website OS logic;
- has a more reliable repair principle than “make it look different.”

An anti-pattern is not simply a technique someone dislikes.

## 9. FALSE-POSITIVE PROTECTION

Use:

`TECHNIQUE -> MISUSE CONDITION -> FAILURE MECHANISM`

Never:

`TECHNIQUE -> BAD`

Large typography is not an anti-pattern. It becomes a failure when scale destroys hierarchy, forces pathological wrapping, displaces decision-critical content, or creates responsive fragility without strategic value.

Cards are not an anti-pattern. They fail when component repetition erases meaningful differences, forces unrelated content into one anatomy, or fragments a narrative that should remain continuous.

WebGL is not an anti-pattern. It fails when technical spectacle becomes a required path to ordinary content, navigation, or conversion without sufficient value and resilient alternatives.

Minimalism and maximalism are not quality levels. Diagnose whether the chosen density serves information, identity, and user decisions.

## 10. SEVERITY CLASSES

Use qualitative severity. Do not average failures into fake precision.

### DS-0 — LOCAL / COSMETIC
A local defect with little effect on meaning, task completion, system coherence, or integrity. Fix opportunistically.

### DS-1 — QUALITY-DEGRADING
Noticeably weakens clarity, polish, coherence, trust, or efficiency but does not materially corrupt the project strategy or hard integrity.

### DS-2 — STRATEGICALLY SIGNIFICANT
Misaligns a meaningful part of the experience with user/job/business intent, corrupts hierarchy or decision support, or creates cross-system debt. Requires upstream correction.

### DS-3 — INTEGRITY-CRITICAL
Threatens accessibility, semantic integrity, performance viability, resilience, essential operability, crawl/index intent, or core task completion. File 08 governs the formal requirement.

### DS-4 — LAUNCH-BLOCKING
A known failure that makes the experience materially unusable, inaccessible under the project standard, misleading, nonfunctional, or unsafe to call launch-ready/world-class. Resolve before launch or document a legitimate governing-standard exception.

Severity describes consequence, not how visually dramatic the issue appears.

### Mapping to formal integrity / acceptance severity

File 11's `DS-0–DS-4` scale is diagnostic shorthand, not a competing launch-severity system:
- `DS-0 LOCAL / COSMETIC` normally maps to `MINOR`;
- `DS-1 QUALITY-DEGRADING` maps to `MINOR` or `MAJOR` depending consequence;
- `DS-2 STRATEGICALLY SIGNIFICANT` normally maps to `MAJOR`;
- `DS-3 INTEGRITY-CRITICAL` must inherit the actual `BLOCKER / CRITICAL / MAJOR / MINOR` classification from File 08;
- `DS-4 LAUNCH-BLOCKING` maps to `BLOCKER` or `CRITICAL` according to the formal File 08/File 13 consequence.

When File 08 or File 13 has classified the issue, use that formal severity in acceptance reporting and retain DS-0–DS-4 only as diagnostic context.

## 11. SEVERITY PRECEDENCE

File 11 never down-ranks a File 08 finding.

If File 08 classifies an issue as BLOCKER or CRITICAL, File 11 may explain the root cause but cannot soften the integrity consequence because the design “mostly works.”

Likewise, a DS-0/DS-1 aesthetic weakness can become DS-2/DS-3 when it propagates into navigation, transaction, accessibility, responsive behavior, or core-value loss.

## 12. COMPACT DIAGNOSTIC RECORD

Use for ordinary critique:

```text
ANTI-PATTERN:
FAMILY:
SYMPTOM:
ROOT CAUSE:
VIOLATED LAW / MODULE:
SEVERITY: DS-0 / DS-1 / DS-2 / DS-3 / DS-4
TEST:
ROUTE TO:
REMEDY PRINCIPLE:
DO NOT “FIX” BY:
```

Do not populate fields mechanically when they add no value.

## 13. EXTENDED DIAGNOSTIC RECORD

Use only for consequential, ambiguous, or cross-system failures:

```text
ANTI-PATTERN:
ALIASES:
FAILURE FAMILY:
OBSERVED SYMPTOMS:
AFFECTED USERS / FLOWS:
ROOT-CAUSE HYPOTHESIS:
ALTERNATE CAUSES:
EVIDENCE / CONFIDENCE:
PROJECT / VECTOR CONTEXT:
VIOLATED REQUIREMENT / LAW / MODULE:
FILE 08 INTEGRITY STATUS:
FILE 09 COMPLEXITY STATUS:
SELECTED FILE 10 PATTERN / INTENDED JOB:
SEVERITY:
FAILURE CHAIN:
DIAGNOSTIC TEST:
ROUTE TO:
REMEDY PRINCIPLE:
SIMPLER / STRONGER ALTERNATIVES:
DO NOT FIX BY:
SPEC CHANGE REQUIRED: Yes / No
RESIDUAL RISK:
```

## 14. DIAGNOSTIC CONFIDENCE

Use evidence language from the governing doctrine where useful:
- OBSERVED;
- DOCUMENTED;
- INFERRED [HIGH / MEDIUM / LOW];
- HYPOTHESIZED.

Do not present a guessed root cause as established merely because the symptom resembles a familiar anti-pattern.

## 15. ROOT-CAUSE-FIRST CORRECTION RULE

Correct at the highest causal layer that is actually wrong.

Examples:
- if headings are clever because positioning is unclear, fix strategy/copy before typography;
- if cards proliferate because content categories are unresolved, fix IA before component styling;
- if mobile order is broken because source order follows desktop composition, fix semantic architecture before CSS order;
- if a loader exists because the renderer is unnecessarily blocking, fix architecture/performance before redesigning the loader;
- if accessibility requires enormous duplicate UI because the chosen interaction is fundamentally hostile to semantics, revisit File 05/07/09 before building a parallel “accessible version.”

Patch locally only when the cause is truly local.

## 16. DIAGNOSTIC ROUTING MAP

Route primary correction to:
- **File 03** — strategy, IA, narrative, conversion, copy, proof, objections, CTA/readiness;
- **File 04** — hierarchy, art direction, grid, typography, color, media, brand distinctiveness, composition;
- **File 05** — states, affordance, feedback, motion, orientation, reversal, gestures, scroll behavior;
- **File 06** — responsive transformation, mobile priority, input capability, source-order implications, crops, viewport behavior;
- **File 07** — architecture, components, CSS, JavaScript, state, dependencies, rendering, resilience implementation;
- **File 08** — performance, accessibility, semantics, technical SEO, hard integrity, failure resilience;
- **File 09** — unearned, compounding, irreversible, or poorly justified complexity;
- **File 10** — selected pattern does not fit the resolved job/context or pattern stack is incoherent.

A failure may route to several modules. Name a **primary cause route** and secondary consequences rather than spraying responsibility everywhere.

## 17. COMPOUND FAILURE CHAINS

Anti-patterns interact. Diagnose causal chains, not isolated labels.

Format:

`UPSTREAM CAUSE -> INTERMEDIATE DECISION -> VISIBLE FAILURE -> USER/SYSTEM CONSEQUENCE`

Examples:
- `weak IA -> excessive disclosure -> Accordion Everything -> low information scent + scanning cost`
- `generic art direction -> decorative motion -> runtime bloat -> mobile simplification -> brand disappears`
- `desktop-first composition -> CSS visual reordering -> source/focus mismatch -> keyboard/screen-reader failure`
- `framework-by-default -> hydrate everything -> oversized JS -> interaction delay -> lower task confidence`
- `prestige complexity -> gated renderer -> Loader Theater -> slow failure path -> conversion hostage`

Fix the earliest wrong link that can be changed without invalidating correct upstream decisions.

## 18. ANTI-PATTERN FAMILY TAXONOMY

Use these primary families:
- **AF1 STRATEGY / IA / NARRATIVE / CONVERSION / COPY / PROOF**
- **AF2 VISUAL SYSTEM / ART DIRECTION / BRAND / MEDIA**
- **AF3 INTERACTION / STATE / MOTION / ORIENTATION**
- **AF4 RESPONSIVE / MOBILE / INPUT / REFLOW**
- **AF5 FRONT-END ENGINEERING / ARCHITECTURE / STATE / DEPENDENCIES**
- **AF6 PERFORMANCE / ACCESSIBILITY / SEMANTICS / SEO / RESILIENCE**
- **AF7 COMPLEXITY / PATTERN MISUSE / PRESTIGE DESIGN**

Assign one primary family even when consequences spread across several modules. This prevents duplicate names from becoming separate “principles.”

## 19. NORMALIZATION RULE

Preserve established upstream names when they carry useful diagnostic meaning. Merge only true duplicates.

Examples:
- `Breakpoint Collection` and `Breakpoint Patchwork` refer to the same underlying patch-by-threshold behavior; use **Breakpoint Patchwork** as canonical and retain the former as an alias.
- `Accessibility-Retrofit DOM` and `Accessibility Retrofit DOM` are the same diagnosis; normalize spelling.
- `Hover Dependency` is broader interaction diagnosis; `Hover Owns Meaning` is the integrity manifestation. Keep both connected rather than pretending they are unrelated.
- `Preserved Spectacle`, `Mobile Spectacle Preservation`, and `Mobile Sacrifice` describe related but distinct responsive/complexity failures. Diagnose based on cause.

Do not invent new labels when an established term already describes the mechanism.

## 20. AF1 — STRATEGY / IA / NARRATIVE / CONVERSION / COPY / PROOF

### Template-First Architecture
- **Symptom:** page follows familiar hero/features/testimonials/FAQ/CTA slots regardless of actual decision sequence.
- **Root cause:** a page template replaced causal narrative reasoning.
- **Violates:** G1, G2; File 03.
- **Test:** remove section labels and ask whether each section answers a real user question created by the previous one.
- **Route / remedy:** File 03; rebuild from audience, required beliefs, page role, and narrative dependencies.
- **Do not fix by:** swapping to a trendier template.

### Internal-Org IA
- **Symptom:** navigation mirrors departments, internal product names, or company politics users do not understand.
- **Root cause:** organizational structure substituted for user mental models.
- **Violates:** G1, G2; File 03 IA.
- **Test:** information-scent and user-native taxonomy tests.
- **Route / remedy:** File 03; regroup around task, outcome, product type, workflow, role, or another user-recognizable distinction.
- **Do not fix by:** renaming the same internal categories with cleverer labels.

### Feature Laundry
- **Symptom:** capabilities are enumerated without helping users understand relevance, outcome, mechanism, or tradeoffs.
- **Root cause:** product inventory replaced decision architecture.
- **Violates:** G1, G2; File 03 value proposition/narrative.
- **Test:** ask what belief each feature changes and whether the user can connect it to their job.
- **Route / remedy:** File 03; organize features around user progress, workflow, use case, or decision criteria.
- **Do not fix by:** reducing feature count arbitrarily.

### Proof Graveyard
- **Symptom:** testimonials, logos, metrics, or case studies are isolated in one generic proof section far from the claims they validate.
- **Root cause:** proof treated as decorative credibility rather than claim support.
- **Violates:** File 03 claim–proof architecture.
- **Test:** identify each material claim and the nearest evidence that resolves its skepticism.
- **Route / remedy:** File 03; place relevant proof near consequential claims while preserving deeper proof destinations when needed.
- **Do not fix by:** scattering random logos everywhere.

### CTA Spam
- **Symptom:** primary buttons repeat mechanically after every section without new readiness or information.
- **Root cause:** conversion pressure replaced decision-state reasoning.
- **Violates:** G1; File 03 CTA timing/readiness.
- **Test:** ask what new belief or readiness moment justifies each repetition.
- **Route / remedy:** File 03; align CTAs with actual decision states and commitment level.
- **Do not fix by:** deleting all repeated CTAs or hiding the primary action.

### Market-Speak
- **Symptom:** copy is full of broad adjectives, category clichés, abstractions, and self-description that do not help users decide.
- **Root cause:** sounding impressive replaced specificity.
- **Violates:** File 03 copy architecture.
- **Test:** competitor-swap test and specificity test.
- **Route / remedy:** File 03; use concrete mechanism, audience, outcome, proof, constraint, and decision language.
- **Do not fix by:** making every sentence aggressively short or casual.

### Copy Outruns Proof
- **Symptom:** certainty, superlatives, scale, outcomes, or authority claims exceed available evidence.
- **Root cause:** persuasion ambition exceeded proof strength.
- **Violates:** File 03 specificity/claim-strength rules; trust integrity.
- **Test:** Claim–Proof Matrix.
- **Route / remedy:** File 03; reduce claim strength, add real evidence, or clearly frame uncertainty.
- **Do not fix by:** hiding unsupported claims inside visual design.

### Clever-but-Opaque Headings
- **Symptom:** headings express voice but fail to orient, label, frame, or preview content.
- **Root cause:** brand voice displaced information scent.
- **Violates:** G3; File 03 copy hierarchy.
- **Test:** headings-only test.
- **Route / remedy:** File 03; preserve character while adding enough semantic context nearby.
- **Do not fix by:** making every heading bland or generic.

### False Simplicity
- **Symptom:** critical differences, constraints, pricing, requirements, proof, or decision information is hidden or removed to keep the page visually clean.
- **Root cause:** low visible complexity was mistaken for clarity.
- **Violates:** G2; File 03 progressive disclosure; often File 04.
- **Test:** required-belief coverage and decision-path tests.
- **Route / remedy:** File 03 first; structure complexity rather than deleting necessary information.
- **Do not fix by:** dumping every detail above the fold.

### One-Funnel Myth
- **Symptom:** all users are forced through the same educational sequence regardless of entry state or readiness.
- **Root cause:** a linear marketing model replaced real journey variation.
- **Violates:** File 03 entry-state/journey model.
- **Test:** model cold, comparison, returning, and action-ready paths.
- **Route / remedy:** File 03; preserve multiple legitimate paths and shortcuts.
- **Do not fix by:** creating separate pages for every imaginable persona.

### FAQ as Architecture Repair
- **Symptom:** primary objections, pricing, fit, implementation, or product differences are buried in an FAQ after the main page failed to answer them.
- **Root cause:** FAQ is repairing missing narrative/decision architecture.
- **Violates:** File 03 objection and section architecture.
- **Test:** ask whether the question is actually long-tail/procedural or central to the decision.
- **Route / remedy:** File 03; move primary concerns into the causal flow.
- **Do not fix by:** deleting useful secondary FAQs.

### Brand Story Before Relevance
- **Symptom:** users must consume founder history, manifesto, lore, or atmospheric narrative before understanding what the site offers and why it matters.
- **Root cause:** internal identity took precedence over user orientation.
- **Violates:** G1; File 03 first-screen/relevance logic.
- **Test:** 10-second orientation and entry-state tests.
- **Route / remedy:** File 03; preserve brand story where it strengthens meaning after sufficient relevance is established.
- **Do not fix by:** stripping all brand narrative from expressive projects.

### Unqualified Minimalism / Overexplanation
- **Alias:** False Minimalism when visual restraint is used to conceal missing decision information.
- **Symptom:** content is either removed until users cannot decide, or expanded until retrieval becomes exhausting.
- **Root cause:** a length ideology replaced information utility.
- **Violates:** G2; File 03 density/page-length logic.
- **Test:** required-belief, redundancy, and retrieval tests.
- **Route / remedy:** File 03; keep what changes understanding or decisions, stage depth appropriately.
- **Do not fix by:** aiming for a universal word count.

## 21. AF2 — VISUAL SYSTEM / ART DIRECTION / BRAND / MEDIA

### Generic Premium
- **Symptom:** polished site relies on interchangeable luxury/SaaS cues and could accept a competitor logo with little change.
- **Root cause:** category prestige signals replaced project-specific art direction.
- **Violates:** G1, G7; File 04 visual thesis/distinctiveness.
- **Test:** logo-removal and competitor-swap tests.
- **Route / remedy:** File 04; derive art direction from project character, product reality, content, and differentiation.
- **Do not fix by:** adding louder decoration or random eccentricity.

### Everything Is a Card
- **Symptom:** unrelated content, proof, features, quotes, pricing, narrative, and actions share repeated bordered containers.
- **Root cause:** component convenience or design-system sameness overrode semantic grouping and hierarchy.
- **Violates:** G4 when consistency becomes sameness; Files 03, 04, 07, 10.
- **Test:** remove card surfaces and ask which groups still need containment to communicate relationship or interaction.
- **Route / remedy:** File 03/04 first; use cards where item independence, repetition, comparison, or interactivity warrants them.
- **Do not fix by:** banning cards.

### Everything Is Large
- **Symptom:** headings, metrics, images, cards, and controls all compete at oversized scale.
- **Root cause:** magnitude was used as a proxy for importance/premium perception.
- **Violates:** File 04 hierarchy/contrast budget.
- **Test:** squint test and local PRIORITY A1 dominance test.
- **Route / remedy:** File 04; restore relational hierarchy and reserve strongest scale for actual priority.
- **Do not fix by:** shrinking everything uniformly.

### Spacing by Vibe
- **Symptom:** gaps vary arbitrarily, grouping is unclear, rhythm changes for no semantic reason.
- **Root cause:** spacing was tuned as isolated decoration rather than a relational system.
- **Violates:** G4; File 04 spacing/rhythm.
- **Test:** compare internal vs external grouping distances across repeated structures.
- **Route / remedy:** File 04; establish stable relationships with intentional macro variation.
- **Do not fix by:** forcing every gap onto one rigid token if context genuinely differs.

### Decorative Media Dominance
- **Symptom:** large media steals PRIORITY A1 attention while contributing little explanation, evidence, product value, context, or emotional meaning.
- **Root cause:** production value was mistaken for information value.
- **Violates:** G1; File 04 image-role/media-scale logic.
- **Test:** media-removal test.
- **Route / remedy:** File 04; reduce, reposition, replace, or give media a real role.
- **Do not fix by:** making all media small.

### Typeface as Brand Strategy
- **Symptom:** brand distinction depends almost entirely on a fashionable display face or serif/sans pairing.
- **Root cause:** typography selection substituted for a broader visual thesis.
- **Violates:** File 04 brand distinctiveness.
- **Test:** replace the typeface mentally; ask whether image, composition, color, language, material, and system still feel authored.
- **Route / remedy:** File 04; distribute identity across several coherent carriers.
- **Do not fix by:** adding more typefaces.

### Contrast Collapse
- **Symptom:** hierarchy, state, or readability depends on subtle tonal differences that vanish in grayscale, poor displays, overlays, or accessibility checks.
- **Root cause:** aesthetic softness overrode perceptual/function contrast.
- **Violates:** File 04; formal thresholds route File 08.
- **Test:** grayscale, squint, and contrast validation.
- **Route / remedy:** File 04 for hierarchy; File 08 for normative contrast.
- **Do not fix by:** maxing contrast everywhere and destroying hierarchy.

### Component Inconsistency / Every Section New Grammar
- **Symptom:** repeated controls, buttons, cards, headings, surfaces, or section behaviors change without semantic reason.
- **Root cause:** novelty overrode system learning.
- **Violates:** G4; Files 04/05.
- **Test:** compare components with the same job across routes.
- **Route / remedy:** File 04/05; stabilize semantics and component anatomy while allowing expressive composition.
- **Do not fix by:** making every section identical.

### Section Slot Machine
- **Symptom:** each section introduces a new layout gimmick with little relation to content role or neighboring rhythm.
- **Root cause:** visual variety was pursued independently of narrative and system logic.
- **Violates:** G4, G7; File 04 section cadence.
- **Test:** identify each section’s visual role and why its composition changes.
- **Route / remedy:** File 04; vary through a controlled vocabulary tied to section jobs.
- **Do not fix by:** one repeated split layout forever.

### Template Monotony
- **Symptom:** every section uses the same safe geometry despite different information jobs.
- **Root cause:** system consistency became literal repetition.
- **Violates:** G4; File 04.
- **Test:** compare section role to composition; ask whether visual state changes with meaning.
- **Route / remedy:** File 04; preserve invariants while varying composition where content warrants it.
- **Do not fix by:** Section Slot Machine.

### Moodboard Without System
- **Symptom:** isolated visuals look appealing but typography, surfaces, crops, spacing, and composition do not form repeatable rules.
- **Root cause:** references were copied as moments rather than translated into a system.
- **Violates:** G4, G7; File 04.
- **Test:** derive invariants and predict an unseen section. If impossible, system is weak.
- **Route / remedy:** File 04; turn art direction into repeatable decisions.
- **Do not fix by:** adding more references.

### Desktop Art-Direction Trap
- **Responsive manifestation:** Art-Direction Collapse when the visual thesis disappears under constraint rather than being recomposed.
- **Symptom:** signature composition only works at one wide viewport; mobile becomes generic, cropped, overloaded, or empty.
- **Root cause:** art direction depended on geometry rather than portable value/brand mechanisms.
- **Violates:** G5; Files 04/06.
- **Test:** identify which brand/value carriers survive recomposition.
- **Route / remedy:** File 04 + 06; define transformable composition and durable identity carriers.
- **Do not fix by:** scaling desktop down proportionally.

### Brand Through Decoration
- **Symptom:** identity depends on grain, glow, gradients, blobs, frames, or effects rather than meaningful system choices.
- **Root cause:** decoration substituted for brand logic.
- **Violates:** File 04 distinctiveness.
- **Test:** style-removal and logo-removal tests.
- **Route / remedy:** File 04; anchor identity in type, language, imagery, composition, color, interaction, material, or other project-relevant carriers.
- **Do not fix by:** zero decoration as a purity rule.

## 22. AF3 — INTERACTION / STATE / MOTION / ORIENTATION

### Motion Soup
- **Related upstream term:** Motion as Premium Signal when animation is added primarily to manufacture sophistication rather than perform a job.
- **Symptom:** many unrelated movements compete, stack, or trigger constantly.
- **Root cause:** animation was assigned locally without a motion hierarchy or named jobs.
- **Violates:** G4, G7; File 05.
- **Test:** motion-job and attention-competition tests.
- **Route / remedy:** File 05; establish grammar, hierarchy, local intensity, and value class.
- **Do not fix by:** globally reducing durations while preserving incoherent motion.

### Reveal Everything
- **Symptom:** ordinary content waits for entrances or scroll reveals despite no hierarchy/narrative need.
- **Root cause:** visible animation was treated as polish.
- **Violates:** File 05; may affect File 08 performance/access.
- **Test:** static-substitute test.
- **Route / remedy:** File 05; reserve entrance choreography for communication or intentional atmosphere.
- **Do not fix by:** replacing every reveal with opacity 0.99 tricks.

### Scroll Hijacking
- **Symptom:** users lose expected scroll pace/direction/control, or wheel/touch input drives unrelated forced sequences.
- **Root cause:** choreography overrode native agency without sufficient value.
- **Violates:** G3, G6; Files 05/09.
- **Test:** scroll-agency, reversal, reduced-motion, and simpler-substitute tests.
- **Route / remedy:** File 05; File 09 when bespoke scrolling is material.
- **Do not fix by:** merely making hijacked scroll smoother.

### Loader Theater
- **Symptom:** full-screen branded waiting is inserted where meaningful content could appear earlier, or waiting is intentionally prolonged.
- **Root cause:** delay was treated as premium experience.
- **Violates:** G1, G6; Files 05/08/09.
- **Test:** loader-necessity and critical-path tests.
- **Route / remedy:** remove avoidable blocking; communicate unavoidable waiting proportionately.
- **Do not fix by:** a prettier loader.

### Transition Hostage
- **Symptom:** routine route changes must complete cinematic transitions before content/navigation is available.
- **Root cause:** transition spectacle became mandatory task friction.
- **Violates:** G1, G6; Files 05/09.
- **Test:** 50th-use and transition-time tests.
- **Route / remedy:** File 05; keep continuity without making users wait unnecessarily.
- **Do not fix by:** globally speeding the same blocking architecture.

### Hover Dependency
- **Symptom:** essential content, action, destination, state, or explanation is only discoverable on hover.
- **Root cause:** a supplementary pointer state became the primary information channel.
- **Violates:** G3; Files 05/06; File 08 when operability/access is affected.
- **Test:** hover-removal and coarse-pointer tests.
- **Route / remedy:** promote essential meaning to persistent or alternate accessible presentation.
- **Do not fix by:** inventing fragile first-tap behavior everywhere.

### Cursor Theater
- **Symptom:** custom cursor adds visual novelty but little information, or becomes the only signifier of action/drag/destination.
- **Root cause:** cursor was treated as identity or affordance without durable value.
- **Violates:** Files 05/06/09 when consequential.
- **Test:** cursor-removal test.
- **Route / remedy:** File 05; preserve real affordance through visible UI, use cursor only when additive.
- **Do not fix by:** simulating a cursor on touch.

### State Ambiguity
- **Symptom:** users cannot distinguish current, selected, active, loading, disabled, success, or error states.
- **Root cause:** final state visibility was subordinated to transient animation or styling.
- **Violates:** File 05; File 08 when semantics are wrong.
- **Test:** inspect state after motion ends and without color/motion cues.
- **Route / remedy:** File 05 for visible state; File 07/08 for semantic state ownership.
- **Do not fix by:** adding animation without persistent state evidence.

### Orientation Loss
- **Symptom:** users do not know where they are, how they arrived, where destinations lead, or how to recover.
- **Root cause:** novel navigation/spatial behavior created orientation debt without repayment.
- **Violates:** G2, G3; Files 05/09.
- **Test:** orientation and named-destination tests.
- **Route / remedy:** File 05; add semantic anchors, current state, routes, reset/back/home, or fallback navigation.
- **Do not fix by:** onboarding theater for a system that remains unclear.

### Clarity Debt Without Repayment
- **Symptom:** category, offer, action, or meaning is intentionally obscured but never arrives clearly enough to justify the delay.
- **Root cause:** mystery was treated as sophistication.
- **Violates:** G1, G3; Files 03/05/09.
- **Test:** identify the value created by delayed clarity and when it is repaid.
- **Route / remedy:** File 03/05; clarify sooner unless the delay itself creates core value.
- **Do not fix by:** stripping all narrative suspense from experience-first work.

### Gesture Mystery
- **Symptom:** important drag/swipe/spatial/keyboard gestures are not reasonably discoverable.
- **Root cause:** designer knowledge was assumed to be user knowledge.
- **Violates:** G2, G3; Files 05/08.
- **Test:** first-use discoverability with no explanation from the designer.
- **Route / remedy:** File 05; add direct signifiers, just-in-time instruction, and alternate operation.
- **Do not fix by:** a long onboarding tutorial before context exists.

### Pinned Prison
- **Responsive alias:** Pinned Prison Mobile Edition when the same failure is preserved on narrow/short environments.
- **Symptom:** sticky/pinned sequence traps content in a short viewport, imposes long scroll distances, or obscures entry/exit/progress.
- **Root cause:** cinematic continuity overrode viewport/task realities.
- **Violates:** G5, G6; Files 05/06/09.
- **Test:** short-viewport, continuous scroll, reduced-motion, and exit tests.
- **Route / remedy:** simplify, shorten, replace, or constrain the pin based on value.
- **Do not fix by:** arbitrary scroll-duration tweaks alone.

### Reduced-Motion Afterthought
- **Symptom:** reduced motion simply disables CSS transitions while essential orientation/state/narrative information disappears or WebGL movement persists.
- **Root cause:** motion alternative was not designed as a state.
- **Violates:** Files 05/08.
- **Test:** PRESERVE/REDUCE/REPLACE/REMOVE audit for each meaningful motion event.
- **Route / remedy:** File 05 for design; File 08 for normative/user-preference integrity.
- **Do not fix by:** `animation: none` without preserving meaning.

### Animation Masks Latency
- **Symptom:** transition or skeleton behavior makes slow operations feel intentional but underlying latency remains avoidable or errors remain hidden.
- **Root cause:** animation was used to disguise performance/process weakness.
- **Violates:** Files 05/08.
- **Test:** compare real completion time and failure state without animation.
- **Route / remedy:** File 08 performance/process first; File 05 feedback second.
- **Do not fix by:** longer animation.

### Brand Depends on Motion
- **Symptom:** removing motion makes the site visually indistinguishable or identityless.
- **Root cause:** motion carries brand value that should be distributed across stable layers too.
- **Violates:** G4/G5; Files 04/05/06.
- **Test:** reduced-motion and static brand-survival tests.
- **Route / remedy:** strengthen non-motion brand carriers while retaining justified motion character.
- **Do not fix by:** removing meaningful brand motion entirely.

## 23. AF4 — RESPONSIVE / MOBILE / INPUT / REFLOW

### Desktop Compression
- **Symptom:** desktop geometry is squeezed into narrow viewports with smaller type, cramped columns, and miniature UI.
- **Root cause:** responsive design was treated as scaling rather than value-preserving transformation.
- **Violates:** G5; File 06.
- **Test:** core-value, PRIORITY A1-preservation, linearization, and continuous-resize tests.
- **Route / remedy:** File 06; recompose/reorder/replace/collapse/simplify where purpose is preserved better.
- **Do not fix by:** adding more tiny breakpoints to preserve desktop geometry.

### Mobile Amnesia
- **Symptom:** important information, proof, actions, navigation, or identity quietly disappears on mobile.
- **Root cause:** narrow screens were treated as permission to discard unresolved complexity.
- **Violates:** G5; Files 03/06.
- **Test:** compare PRIORITY A1–A4 priorities and required beliefs across environments.
- **Route / remedy:** File 06; remove only what is truly nonessential, not merely inconvenient.
- **Do not fix by:** showing every desktop element unchanged.

### Hamburger by Reflex
- **Symptom:** primary destinations are hidden inside a menu simply because viewport is narrow.
- **Root cause:** device convention replaced navigation-priority reasoning.
- **Violates:** File 06 navigation transformation.
- **Test:** ask which destinations require persistent/immediate access and whether alternative compact patterns serve better.
- **Route / remedy:** File 06; choose based on task frequency, destination count, search, account/cart, conversion, and orientation.
- **Do not fix by:** banning hamburger menus.

### Hover Ghost
- **Symptom:** a desktop hover effect remains conceptually required on touch but has no reliable equivalent.
- **Root cause:** responsive interaction transformation was never defined.
- **Violates:** Files 05/06; possibly File 08.
- **Test:** coarse-pointer and hover-off tests.
- **Route / remedy:** File 06; classify as decorative/no equivalent, tap, explicit control, or permanent content.
- **Do not fix by:** assuming mobile browsers will emulate hover safely.

### Microscopic Desktop UI
- **Symptom:** dense desktop controls, tables, navigation, or dashboards are shrunk until text/targets become impractical.
- **Root cause:** literal fidelity was prioritized over task usability.
- **Violates:** G5; File 06; formal target/text issues route File 08.
- **Test:** task completion on representative narrow/coarse-pointer environments.
- **Route / remedy:** File 06; recompose, prioritize, disclose, or replace mechanics.
- **Do not fix by:** horizontal scaling of the whole interface.

### Crop Decapitation
- **Symptom:** responsive cropping removes focal subjects, context, evidence, product detail, or text-safe regions.
- **Root cause:** responsive sizing was mistaken for responsive art direction.
- **Violates:** Files 04/06.
- **Test:** focal-point record across aspect ratios.
- **Route / remedy:** File 04/06; define safe crop, alternate crop, or alternate asset.
- **Do not fix by:** `object-position: center` everywhere.

### Breakpoint Patchwork
- **Aliases:** Breakpoint Collection.
- **Symptom:** many thresholds patch local failures, CSS exceptions multiply, and nearby widths break again.
- **Root cause:** breakpoints were chosen by device labels or symptom patching rather than relationship failure.
- **Violates:** Files 06/07.
- **Test:** continuous resize both directions and identify the actual relationship that fails.
- **Route / remedy:** File 06 first; simplify the transformation model, then File 07 implementation.
- **Do not fix by:** another breakpoint unless a real new failure warrants it.

### CSS Order Abuse
- **Related upstream term:** Content Reorder Semantic Break when the visual reorder changes meaningful sequence.
- **Symptom:** visual order differs materially from source/read/focus order to preserve desktop composition.
- **Root cause:** CSS reordering was used to repair semantic architecture.
- **Violates:** G3/G5; Files 06/07/08.
- **Test:** CSS-off/source-order and keyboard-focus tests.
- **Route / remedy:** File 06/07; make source order meaningful and compose around it.
- **Do not fix by:** positive `tabindex`.

### Accordion Everything
- **Symptom:** narrow layout hides most content behind repeated accordions regardless of importance or relationship.
- **Root cause:** disclosure was used as a universal space-saving device.
- **Violates:** G2/G5; Files 03/06/10.
- **Test:** classify PRIORITY A1–A4 content and ask what deserves immediate visibility.
- **Route / remedy:** File 03 for priority, File 06 for exposure/transformation.
- **Do not fix by:** expanding everything permanently.

### Preserved Spectacle
- **Aliases:** Mobile Spectacle Preservation when the cause is literal preservation; distinguish from Mobile Sacrifice when mobile is merely degraded.
- **Symptom:** costly desktop motion/spatial/pinned effects survive on mobile even when viewport/input/value conditions no longer support them.
- **Root cause:** fidelity to implementation outranked fidelity to value.
- **Violates:** G5/G6; Files 06/09.
- **Test:** motion-value, core-value, constrained-device, and simpler-substitute tests.
- **Route / remedy:** File 06/09; preserve purpose and replace/simplify/remove mechanic where needed.
- **Do not fix by:** disabling all expressive mobile behavior by default.

### VH Trap
- **Symptom:** full-screen sections or controls are clipped or inaccessible as browser chrome, keyboard, or orientation changes viewport height.
- **Root cause:** one static viewport-height model was assumed.
- **Violates:** Files 06/07.
- **Test:** short viewport, dynamic browser UI, keyboard-open, portrait/landscape.
- **Route / remedy:** File 06 intent + File 07 implementation using appropriate viewport units/layout.
- **Do not fix by:** hard-coded pixel heights.

### Sideways Accident
- **Symptom:** ordinary content creates unintended horizontal scrolling on narrow screens.
- **Root cause:** fixed widths, overflow, positioned elements, or desktop relationships escaped responsive containment.
- **Violates:** File 06; File 08 when reflow conformance fails.
- **Test:** 320 CSS-px-equivalent reflow and overflow inspection.
- **Route / remedy:** File 06/07; preserve horizontal interaction only when genuinely two-dimensional.
- **Do not fix by:** globally hiding overflow and clipping content.

### Touch Precision Fantasy
- **Related upstream term:** Device-Sniffing Mindset when input assumptions are derived from device/browser identity instead of actual capabilities.
- **Symptom:** interaction assumes hover, tiny drag handles, exact placement, or pointer precision on coarse input.
- **Root cause:** input model was inferred from screen width or desktop prototype behavior.
- **Violates:** Files 06/08.
- **Test:** coarse-pointer real-device task test.
- **Route / remedy:** File 06; enlarge/tolerate/replace interaction, File 08 validates target/pointer requirements.
- **Do not fix by:** device sniffing.

### Mobile = Less Content
- **Symptom:** meaningful content is deleted solely because mobile has less simultaneous space.
- **Root cause:** simultaneous exposure was confused with total access.
- **Violates:** G5; File 06.
- **Test:** compare user decisions and required beliefs across environments.
- **Route / remedy:** File 06; sequentialize, disclose, or recompose before deleting.
- **Do not fix by:** forcing all content above the fold.

### Keyboard Viewport Failure
- **Symptom:** software keyboard hides inputs, error text, submit actions, or fixed controls.
- **Root cause:** responsive testing ignored viewport-height mutation during form interaction.
- **Violates:** Files 06/08.
- **Test:** complete important forms with mobile keyboard open.
- **Route / remedy:** File 06 layout/ergonomics + File 08 operability.
- **Do not fix by:** hiding controls while typing unless the flow genuinely improves.

## 24. AF5 — FRONT-END ENGINEERING / ARCHITECTURE / STATE / DEPENDENCIES

### Framework Cargo Cult
- **Symptom:** a framework/application runtime is chosen for a simple document/site because it is the team default or industry fashion.
- **Root cause:** tooling preference was mistaken for product requirement.
- **Violates:** G6; File 07.
- **Test:** ask what capability becomes materially harder without the framework.
- **Route / remedy:** File 07 architecture decision; choose least powerful sufficient technology.
- **Do not fix by:** anti-framework ideology when application complexity is real.

### JavaScript Everything
- **Symptom:** layout, disclosure, navigation, simple state, styling, or content visibility depend on JS unnecessarily.
- **Root cause:** JS became the default implementation layer.
- **Violates:** File 07 escalation ladder; may affect File 08 resilience/performance.
- **Test:** HTML-before-JS and CSS-before-JS tests.
- **Route / remedy:** File 07; move responsibilities to native HTML/CSS where sufficient.
- **Do not fix by:** removing necessary application behavior.

### Div Soup / Clickable Div Architecture
- **Symptom:** document meaning and controls are generic containers with event handlers and ARIA patches.
- **Root cause:** styling/component convenience replaced semantic element selection.
- **Violates:** G3; Files 07/08.
- **Test:** semantic-tree and button/link tests.
- **Route / remedy:** File 07 semantic architecture; File 08 validates names/roles/states.
- **Do not fix by:** adding more ARIA to the wrong element when native semantics fit.

### Component Confetti
- **Symptom:** trivial wrappers become components, indirection explodes, and simple changes require archaeology.
- **Root cause:** componentization itself was treated as architecture quality.
- **Violates:** File 07 component-boundary logic.
- **Test:** ask whether the unit has stable responsibility, behavior, structure, reuse, state, or independent test value.
- **Route / remedy:** File 07; consolidate accidental abstractions.
- **Do not fix by:** one giant component.

### Universal Mega-Component
- **Symptom:** unrelated sections are forced through a configuration-heavy component with many variants/escape hatches.
- **Root cause:** false reuse prioritized code sameness over real responsibility.
- **Violates:** G4; File 07.
- **Test:** compare variant semantics and API size to actual shared responsibility.
- **Route / remedy:** File 07; reuse primitives and compose distinct structures.
- **Do not fix by:** duplicating every shared primitive.

### Absolute-Position Page Architecture
- **Symptom:** dynamic text/sections depend on fixed coordinates and collapse under content/responsive change.
- **Root cause:** screenshot geometry was encoded instead of document/layout relationships.
- **Violates:** Files 06/07.
- **Test:** long-content, localization, resize, zoom.
- **Route / remedy:** File 07; normal flow/Grid/Flex for primary document layout, absolute positioning for genuine layering.
- **Do not fix by:** more per-breakpoint coordinates.

### Specificity Arms Race
- **Symptom:** deep selectors, IDs, repeated overrides, and `!important` accumulate.
- **Root cause:** CSS ownership/cascade model is unclear.
- **Violates:** File 07 CSS architecture.
- **Test:** trace why an ordinary property wins.
- **Route / remedy:** File 07; simplify scope, layers, selector strategy, component ownership.
- **Do not fix by:** one more `!important` unless a deliberate exception layer requires it.

### Token Accounting
- **Symptom:** every literal becomes a design token, alias depth grows, and semantics become harder to understand than values.
- **Root cause:** token count was mistaken for system maturity.
- **Violates:** File 07 token architecture.
- **Test:** ask whether the token encodes reuse, semantic role, theme, or meaningful configuration.
- **Route / remedy:** File 07; keep stable roles, remove bookkeeping tokens.
- **Do not fix by:** abandoning useful semantic tokens.

### JS Responsive Duplication
- **Symptom:** separate DOM/component trees are maintained for desktop/mobile when responsive CSS/structure could preserve one semantic system.
- **Root cause:** viewport-specific implementation was chosen before testing shared architecture.
- **Violates:** G5/G6; Files 06/07/09 if material.
- **Test:** identify duplicated content/state and divergence risk.
- **Route / remedy:** File 06/07; share semantics where practical, duplicate only when mechanics genuinely require it and costs are accepted.
- **Do not fix by:** forcing one DOM when two experiences are legitimately different.

### State Duplication
- **Symptom:** URL, component state, CSS classes, DOM attributes, and stores disagree.
- **Root cause:** no authoritative state owner.
- **Violates:** File 07 state architecture.
- **Test:** trace one user action through every state representation.
- **Route / remedy:** File 07; choose single source of truth and derive downstream state.
- **Do not fix by:** synchronization effects between unnecessary copies.

### Boolean State Soup
- **Symptom:** many booleans create impossible or contradictory UI combinations.
- **Root cause:** mutually exclusive state machine was modeled as independent flags.
- **Violates:** File 07.
- **Test:** enumerate valid/invalid combinations.
- **Route / remedy:** File 07; use explicit states/transitions where complexity warrants.
- **Do not fix by:** even more booleans.

### Client-Only Document Without Need
- **Related File 08 term:** Client-Only Content by Habit when meaningful content is deferred to client runtime without a project requirement.
- **Symptom:** meaningful marketing/editorial/product content arrives only after client JS despite no user-specific/app requirement.
- **Root cause:** application rendering was defaulted to document content.
- **Violates:** File 07 rendering architecture; File 08 performance/SEO/resilience.
- **Test:** inspect initial HTML and failure without client runtime.
- **Route / remedy:** File 07; use static/server/hybrid delivery appropriate to content.
- **Do not fix by:** SSR everything regardless of application needs.

### Enhancement Hostage
- **Symptom:** core content or action disappears when an optional enhancement, client subsystem, API, media layer, or renderer fails.
- **Root cause:** CORE and ENHANCEMENT responsibilities were never separated.
- **Violates:** Files 07/08 progressive-enhancement and failure-containment contracts.
- **Test:** disable/fail the enhancement and complete the primary document/action path where resilience is required.
- **Route / remedy:** File 07 architecture + File 08 resilience; isolate optional systems and preserve required value.
- **Do not fix by:** demanding every JavaScript-native application fully work without JavaScript when that is not the project requirement.

### Hydrate Everything
- **Symptom:** static content participates in client runtime because some page regions need interaction.
- **Root cause:** component framework boundaries replaced interaction boundaries.
- **Violates:** File 07 interactive-island principle; File 08 performance.
- **Test:** inventory which regions actually require client behavior.
- **Route / remedy:** File 07; isolate interactivity.
- **Do not fix by:** removing hydration from genuinely stateful application regions.

### Canvas Everything
- **Symptom:** ordinary text, navigation, links, or controls are rendered into canvas/WebGL.
- **Root cause:** renderer capability was treated as universal presentation layer.
- **Violates:** G3/G6; Files 07/08/09.
- **Test:** identify which elements require DOM semantics/selectable text/native interaction.
- **Route / remedy:** File 07 hybrid architecture; File 08 semantic/accessibility validation; File 09 viability.
- **Do not fix by:** banning canvas for workloads it genuinely suits.

### Library Pile
- **Symptom:** several dependencies overlap in capability, runtime, state, animation, UI, or utility jobs.
- **Root cause:** local convenience decisions accumulated without portfolio ownership.
- **Violates:** G6; File 07 dependency discipline; File 09 if cross-system cost is material.
- **Test:** dependency record and removal/overlap analysis.
- **Route / remedy:** File 07; consolidate based on actual capability/value.
- **Do not fix by:** rewriting stable specialist capabilities in-house without justification.

### Animation Architecture Sprawl
- **Symptom:** CSS animation, multiple JS libraries, renderer timelines, scroll engines, and ad-hoc timers compete.
- **Root cause:** animation implementation was selected per feature rather than as architecture.
- **Violates:** Files 05/07/09.
- **Test:** map motion state ownership and implementation stacks.
- **Route / remedy:** File 05 for grammar, File 07 for implementation architecture, File 09 for material stacks.
- **Do not fix by:** migrating everything to the newest motion library automatically.

### Z-Index Inflation
- **Symptom:** escalating numbers are used to make overlays appear above each other.
- **Root cause:** stacking contexts/layer ownership are not understood.
- **Violates:** File 07 layer architecture.
- **Test:** inspect stacking-context boundaries and semantic overlay hierarchy.
- **Route / remedy:** File 07; define meaningful layers and ownership.
- **Do not fix by:** another zero.

### Fixed-Height Fragility
- **Symptom:** text, localization, zoom, dynamic content, or font substitution causes clipping/overlap.
- **Root cause:** content-containing blocks were treated as fixed geometry.
- **Violates:** Files 06/07/08 where reflow fails.
- **Test:** long content, text scaling, font failure, zoom.
- **Route / remedy:** File 07; content-driven sizing unless fixed height is genuinely required.
- **Do not fix by:** per-language pixel overrides.

### Hidden-but-Still-Loaded
- **Symptom:** responsive/optional media, components, scripts, or third parties are visually hidden but still downloaded/executed.
- **Root cause:** display state was confused with delivery cost.
- **Violates:** Files 06/07/08.
- **Test:** network/runtime profile in hidden states.
- **Route / remedy:** File 07/08; omit/defer resources when value is not present.
- **Do not fix by:** hiding with CSS and assuming cost vanished.

### Third-Party Hostage
- **Symptom:** analytics, chat, embeds, personalization, payment adjuncts, or other vendors can block core rendering/action or make failure unrecoverable.
- **Root cause:** optional external systems entered the critical path without containment.
- **Violates:** Files 07/08/09 when substantial.
- **Test:** simulate third-party timeout/failure/blocking.
- **Route / remedy:** isolate, defer, fallback, or explicitly accept critical dependency only when core function truly requires it.
- **Do not fix by:** blindly removing business-critical vendors.

### Premature Enterprise Architecture
- **Symptom:** small site has layers, abstractions, packages, state platforms, and directories designed for hypothetical scale.
- **Root cause:** imagined future complexity dictated present architecture.
- **Violates:** G6; File 07 maintainability/scalability.
- **Test:** identify which current requirement each abstraction solves.
- **Route / remedy:** File 07; architect for credible scale and clear reasons to change.
- **Do not fix by:** making a genuinely large multi-team platform monolithic.

## 25. AF6 — PERFORMANCE / ACCESSIBILITY / SEMANTICS / SEO / RESILIENCE

### Lighthouse Worship
- **Symptom:** one synthetic score becomes the definition of performance/accessibility/SEO quality.
- **Root cause:** a diagnostic instrument was mistaken for the governing outcome.
- **Violates:** File 08 distinction between field reality, normative requirements, and diagnostics.
- **Test:** compare actual field/task evidence and unresolved manual issues to the score.
- **Route / remedy:** File 08; use Lighthouse to diagnose, not absolve.
- **Do not fix by:** ignoring useful lab regression signals.

### Automated-A11y Overconfidence
- **Symptom:** “zero violations” is treated as proof the experience is accessible.
- **Root cause:** machine-detectable rules were confused with full usability/conformance.
- **Violates:** File 08 testing layers.
- **Test:** keyboard, focus, source order, screen-reader sanity, responsive/reflow, reduced-motion, task testing.
- **Route / remedy:** File 08.
- **Do not fix by:** abandoning automated testing.

### WCAG Checkbox Theater
- **Symptom:** individual criteria are mechanically checked while the real task remains confusing, fragile, or exclusionary.
- **Root cause:** conformance bookkeeping replaced accessible experience design.
- **Violates:** File 08 hard-gate intent; G7.
- **Test:** complete representative user tasks across relevant assistive/input conditions.
- **Route / remedy:** File 08; preserve both conformance and practical usability.
- **Do not fix by:** treating WCAG as optional because usability also matters.

### Accessibility Retrofit DOM
- **Symptom:** semantic and keyboard behavior are bolted onto fundamentally unsuitable markup after interaction architecture is complete.
- **Root cause:** accessibility/semantics were deferred until the end.
- **Violates:** G3; Files 07/08.
- **Test:** native-element and semantic-tree tests.
- **Route / remedy:** File 07 architecture first, File 08 validation.
- **Do not fix by:** a parallel screen-reader-only interface when shared semantics are practical.

### ARIA Bandages
- **Symptom:** roles, states, labels, and keyboard scripts are added to recreate native behavior unnecessarily.
- **Root cause:** incorrect HTML was preserved and ARIA asked to repair it.
- **Violates:** File 08 native-semantics rule.
- **Test:** ask which native element/principle already provides the required semantics/behavior.
- **Route / remedy:** Files 07/08.
- **Do not fix by:** removing ARIA that is genuinely needed for custom states not expressible natively.

### Hidden Focus / Focus Under Sticky UI
- **Symptom:** keyboard focus is invisible or obscured by author-created overlays/sticky regions.
- **Root cause:** visual polish/layout layers did not account for focus as a first-class state.
- **Violates:** File 08 normative focus requirements; File 05 focus design.
- **Test:** keyboard-only traversal at relevant zoom/viewport states.
- **Route / remedy:** File 05 visual state + File 08 hard validation.
- **Do not fix by:** moving focus programmatically in ways that break order/context.

### Positive-Tabindex Repair
- **Symptom:** positive `tabindex` values are used to force keyboard order to match visual composition.
- **Root cause:** source order/DOM architecture is wrong.
- **Violates:** Files 06/07/08.
- **Test:** inspect source order and CSS visual order.
- **Route / remedy:** fix semantic/source order upstream.
- **Do not fix by:** more tabindex bookkeeping.

### Screen-Reader Special UI
- **Symptom:** a separate, divergent interface is maintained only for screen readers while primary UI remains semantically hostile.
- **Root cause:** equivalent access is treated as a duplicate product rather than shared architecture where possible.
- **Violates:** Files 07/08; sometimes File 09.
- **Test:** ask whether a common semantic DOM + enhanced presentation can serve both.
- **Route / remedy:** Files 07/08/09.
- **Do not fix by:** rejecting legitimate alternate representations for genuinely non-DOM experiences.

### Bad Source Order + CSS Cosmetics
- **Symptom:** visual order appears logical but DOM reading/focus order tells a different story.
- **Root cause:** presentation fixed a semantic sequencing mistake.
- **Violates:** G3/G5; Files 06/07/08.
- **Test:** CSS-off reading order + keyboard traversal.
- **Route / remedy:** source architecture first.
- **Do not fix by:** ARIA flow hacks or positive tabindex.

### Hover Owns Meaning / Drag-Only Interface
- **Symptom:** essential information or operation requires hover or dragging.
- **Root cause:** one input method owns the task.
- **Violates:** Files 06/08.
- **Test:** no-hover and single-pointer-alternative tests.
- **Route / remedy:** Files 05/06/08; preserve task through visible/alternate control.
- **Do not fix by:** duplicate hidden controls nobody can discover.

### Tiny Targets by Aesthetic Preference
- **Symptom:** controls are visually refined but too small/close for reliable pointer use.
- **Root cause:** visual compactness overrode operability.
- **Violates:** File 08 target requirements; File 06 ergonomics.
- **Test:** target-size/spacing validation and real coarse-pointer use.
- **Route / remedy:** File 06/08.
- **Do not fix by:** making every decorative object enormous.

### Contrast by Eyeballing
- **Symptom:** subtle text/control boundaries “look fine” but fail under actual contrast conditions, overlays, states, or media frames.
- **Root cause:** aesthetic judgment substituted for measured/per-state validation.
- **Violates:** File 08; File 04 color roles.
- **Test:** measured contrast across all meaningful states/backgrounds.
- **Route / remedy:** File 04 + 08.
- **Do not fix by:** removing all subtlety from noncritical decorative surfaces.

### Image-of-Text Branding
- **Symptom:** important text exists only inside imagery because exact typography/composition is desired.
- **Root cause:** visual fidelity overrode scalable/selectable/semantic text.
- **Violates:** File 08, except legitimate logo/essential-image exceptions where applicable.
- **Test:** zoom, localization, screen-reader, selectable-text needs.
- **Route / remedy:** File 04/08; use real text when content is text.
- **Do not fix by:** recreating actual logos as plain text when the logo image is appropriate.

### Mobile Reflow Failure / Fixed-Height Typography
- **Symptom:** zoom, text scaling, narrow width, localization, or altered spacing causes clipping, overlap, or horizontal scroll.
- **Root cause:** typography/layout was encoded as fixed geometry.
- **Violates:** File 08 reflow/text-spacing; Files 04/06/07.
- **Test:** 320 CSS-px equivalent, 200% text, high zoom, long content, text-spacing changes where relevant.
- **Route / remedy:** upstream type/layout architecture then File 08 validation.
- **Do not fix by:** shrinking text below readable intent.

### Autoplay Theater / Captionless Information Video
- **Symptom:** motion/audio begins for atmosphere without control, or informational video lacks equivalent access.
- **Root cause:** media treatment ignored user preference/information alternatives.
- **Violates:** Files 04/05/08.
- **Test:** reduced-motion, audio control, captions/transcript/description needs, content-without-playback.
- **Route / remedy:** File 08 hard requirements, upstream media role decisions as needed.
- **Do not fix by:** removing all autoplay atmospheric media when compliant and justified.

### Canvas-Only Semantics / WebGL as Navigation Requirement
- **Symptom:** meaningful copy, controls, destinations, or task state exist only inside non-semantic rendering.
- **Root cause:** renderer became the document/interface instead of a rendering layer.
- **Violates:** G3/G6; Files 07/08/09.
- **Test:** renderer-off, keyboard, screen-reader, crawl, failure fallback.
- **Route / remedy:** hybrid semantic layer or legitimate equivalent, File 09 if cost changes viability.
- **Do not fix by:** banning WebGL when it carries real experiential value.

### Lazy-Load Everything / LCP Lazy Loading / Preload Everything
- **Symptom:** loading attributes/priorities are applied universally rather than according to criticality.
- **Root cause:** optimization tactic became a rule without resource-role reasoning.
- **Violates:** File 08 loading strategy.
- **Test:** identify critical render/LCP resources, offscreen resources, network priority, and actual waterfall.
- **Route / remedy:** File 08.
- **Do not fix by:** reversing the universal rule.

### Oversized JavaScript / Font Collection / Hidden-but-Loaded Media
- **Symptom:** runtime/assets exceed what the route’s user value warrants.
- **Root cause:** optional capability, weights/styles, media variants, or hidden components accumulated without contextual budgets.
- **Violates:** File 08 performance budgets; Files 06/07.
- **Test:** resource inventory tied to route value and real-device profile.
- **Route / remedy:** File 08; route architecture back to File 07 or complexity to File 09 when needed.
- **Do not fix by:** one universal KB budget across every project.

### Fake Progress / Infinite Spinner / Error = Empty State
- **Symptom:** system invents progress, waits forever without recovery, or failure is indistinguishable from “nothing here.”
- **Root cause:** asynchronous failure/status model is incomplete.
- **Violates:** Files 07/08; File 05 feedback.
- **Test:** timeout, offline, API error, partial data, retry, cancellation where relevant.
- **Route / remedy:** File 07 state/resilience + File 08 status/access integrity.
- **Do not fix by:** more reassuring copy around a broken process.

### SEO Score Worship / Schema Everywhere / Canonical Superstition
- **Symptom:** technical SEO features are added because tools recommend them rather than because crawl/index/duplicate/entity problems exist.
- **Root cause:** SEO superstition replaced frontend integrity reasoning.
- **Violates:** File 08 technical SEO scope.
- **Test:** identify the exact crawl/index/duplicate/metadata/structured-data problem being solved.
- **Route / remedy:** File 08.
- **Do not fix by:** ignoring valid canonicals, metadata, or structured data where relevant.

### Robots.txt as Noindex
- **Symptom:** crawl blocking is used as though it reliably removes/index-prevents content.
- **Root cause:** crawl control and index control are conflated.
- **Violates:** File 08 technical SEO integrity.
- **Test:** verify intended crawler access and index directive delivery.
- **Route / remedy:** File 08.
- **Do not fix by:** blanket `noindex` without route intent.

### False Universal Performance Budget
- **Symptom:** one byte/request/JS/media limit is applied to all projects/routes regardless of value, audience, device risk, or architecture.
- **Root cause:** numeric simplicity replaced contextual budgeting.
- **Violates:** File 08 contextual budget model.
- **Test:** connect budget to route role, field evidence, device/network risk, and core value.
- **Route / remedy:** File 08.
- **Do not fix by:** having no budgets.

### Desktop-Only Performance Testing
- **Symptom:** site appears fast on developer hardware/network while constrained devices overheat, jank, decode slowly, or delay interaction.
- **Root cause:** development environment was treated as representative reality.
- **Violates:** File 08 real-device/field testing.
- **Test:** constrained representative hardware/network + field data where available.
- **Route / remedy:** File 08; File 09 if advanced feature viability changes.
- **Do not fix by:** choosing one synthetic mobile score as reality.

### Token / Checklist Bloat
- **Symptom:** integrity audit spends more context tracking fields than resolving real risk.
- **Root cause:** process completeness became the objective.
- **Violates:** project context-efficiency rules; File 08’s diagnostic-vs-normative distinction.
- **Test:** ask which fields change a decision, test, or acceptance outcome.
- **Route / remedy:** compress records to material issues.
- **Do not fix by:** removing traceability from consequential decisions.

## 26. AF7 — COMPLEXITY / PATTERN MISUSE / PRESTIGE DESIGN

### Prestige Complexity
- **Symptom:** difficult implementation is cited as evidence the site is sophisticated or premium.
- **Root cause:** technical difficulty replaced project value.
- **Violates:** G6; File 09.
- **Test:** credible simpler-alternative and unique-value tests.
- **Route / remedy:** File 09.
- **Do not fix by:** simplification for its own sake.

### Awwwards Cargo Cult / Design-by-Awards Reference
- **Symptom:** loader, smooth scroll, giant type, custom cursor, WebGL, pinning, minimal nav, or cinematic transition are copied because admired sites use them.
- **Root cause:** precedent was mistaken for causal evidence.
- **Violates:** G1/G6; Files 09/10.
- **Test:** remove the reference site and state the project-specific job/value independently.
- **Route / remedy:** return to relevant specialist module, then File 09/10.
- **Do not fix by:** rejecting award-winning precedents as useless; use them as hypotheses/options.

### Technology-First Concepting
- **Symptom:** WebGL/GSAP/3D/framework capability is chosen before communication/product job is defined.
- **Root cause:** implementation medium generated the concept.
- **Violates:** reasoning order; G1/G6; File 09.
- **Test:** state value without naming technology.
- **Route / remedy:** route upstream to purpose/specialist system, then reassess technology.
- **Do not fix by:** forbidding technology-led experimentation when exploratory R&D is itself the project.

### Premium by Friction
- **Symptom:** delay, hidden navigation, long transitions, scarcity of labels, or forced discovery is justified because it feels luxurious/exclusive.
- **Root cause:** user effort was mistaken for premium perception.
- **Violates:** G1/G2/G3/G6; Files 03/05/09.
- **Test:** identify whether friction creates meaningful desire, pacing, or value versus mere obstacle.
- **Route / remedy:** relevant specialist module + File 09.
- **Do not fix by:** making every luxury experience utilitarian and instant.

### Complexity by Accumulation / Pattern-Stack Incoherence
- **Symptom:** individually defensible effects/components create a collectively slow, noisy, fragile, or inconsistent experience.
- **Root cause:** features/patterns were approved independently without portfolio review.
- **Violates:** G7; Files 09/10.
- **Test:** Complexity Stack Test + Pattern Stack Test.
- **Route / remedy:** File 09/10; remove overlap, concentrate justified complexity, unify grammar.
- **Do not fix by:** blaming one visible feature without examining interactions.

### Desktop Demo Bias
- **Symptom:** advanced concept is approved from a high-end desktop prototype while mobile, keyboard, reduced-motion, fallback, low-power GPU, or maintenance realities are unknown.
- **Root cause:** the easiest showcase environment was treated as production evidence.
- **Violates:** G5/G6; Files 08/09.
- **Test:** prototype the constraint most likely to invalidate the feature.
- **Route / remedy:** File 09 validation + File 08 testing.
- **Do not fix by:** rejecting ambitious features before testing them.

### Fallback Theater
- **Symptom:** fallback technically exists but preserves neither task, meaning, orientation, nor meaningful value.
- **Root cause:** fallback was implemented for compliance optics rather than equivalence/resilience.
- **Violates:** Files 07/08/09.
- **Test:** complete core task/value with advanced subsystem unavailable.
- **Route / remedy:** redesign fallback around preserved purpose; reassess viability in File 09.
- **Do not fix by:** pixel-matching the advanced version if a simpler equivalent works.

### Accessibility as Duplicate Tax
- **Symptom:** team claims accessibility is too expensive because chosen architecture requires a second complete interface.
- **Root cause:** inaccessible architecture externalized its cost to accessibility.
- **Violates:** Files 07/08/09.
- **Test:** ask whether a semantic/hybrid architecture reduces duplicate implementation.
- **Route / remedy:** revisit architecture/feature viability.
- **Do not fix by:** reducing the accessible experience to a lesser task.

### Mobile Sacrifice
- **Symptom:** desktop is treated as the “real” experience while mobile receives generic leftovers or lost core value.
- **Root cause:** showcase fidelity outranked cross-environment value.
- **Violates:** G5; Files 06/09.
- **Test:** core-value mechanism and brand-survival comparison.
- **Route / remedy:** File 06; File 09 if desktop feature causes the tradeoff.
- **Do not fix by:** literal desktop preservation.

### Loader Justification Loop
- **Symptom:** heavy architecture causes avoidable waiting; branded loader is then cited as a signature experience, reinforcing the heavy architecture.
- **Root cause:** a cost created its own aesthetic justification.
- **Violates:** G6; Files 08/09.
- **Test:** remove/stream/defer the blocking system and reassess whether loader value remains.
- **Route / remedy:** File 08 architecture/performance + File 09.
- **Do not fix by:** making the loader more elaborate.

### Framework as Requirement
- **Symptom:** stakeholder/product rationale is retrofitted around a developer-preferred stack.
- **Root cause:** tool choice preceded requirement analysis.
- **Violates:** File 07; File 09 when cost is material.
- **Test:** state the user/business requirement independent of framework.
- **Route / remedy:** File 07 architecture decision.
- **Do not fix by:** rejecting frameworks that legitimately reduce product/system complexity.

### Renderer Hostage
- **Symptom:** ordinary navigation, copy, CTA, or route availability waits on optional canvas/WebGL renderer initialization.
- **Root cause:** advanced rendering layer became critical infrastructure without necessity.
- **Violates:** G3/G6; Files 07/08/09.
- **Test:** renderer-failure/core-task test.
- **Route / remedy:** isolate renderer, move critical UI to resilient layer, reassess if renderer is truly core.
- **Do not fix by:** pretending all renderer-dependent products are optional experiences.

### Innovation by Unfamiliarity
- **Symptom:** interaction is considered innovative mainly because users must learn it.
- **Root cause:** novelty/learning cost was mistaken for differentiated value.
- **Violates:** G2/G3/G6; Files 05/09.
- **Test:** ask what unique user value remains after replacing unfamiliar mechanic with familiar semantics.
- **Route / remedy:** File 05/09.
- **Do not fix by:** banning unfamiliar interaction when the novel mechanic is itself valuable and well taught.

### Irreversible Architecture
- **Symptom:** experimental feature is deeply entangled with routing, state, content, and layout so removal would require a rebuild.
- **Root cause:** uncertainty was committed as permanent infrastructure too early.
- **Violates:** G6; Files 07/09.
- **Test:** exit-cost and subsystem-isolation tests.
- **Route / remedy:** File 09/07; prototype first, isolate high-risk systems.
- **Do not fix by:** abstracting everything “just in case.”

### Maintenance Amnesia
- **Symptom:** prototype/build success is used as proof a complex system is worth owning long term.
- **Root cause:** lifecycle, content, upgrade, staffing, and regression costs were excluded.
- **Violates:** File 09 full-cost model.
- **Test:** identify owner, upgrade path, content-production burden, QA matrix, vendor risk six months out.
- **Route / remedy:** File 09.
- **Do not fix by:** rejecting systems simply because they require maintenance.

### Metric Cherry-Picking / Fake ROI Math
- **Symptom:** one favorable metric or arbitrary weighted score is used to make a complex decision appear objective while major costs remain hidden.
- **Root cause:** measurement theater replaced causal judgment.
- **Violates:** File 09 evidence/qualitative ROI model.
- **Test:** inspect omitted cost dimensions and whether weights are evidence-based.
- **Route / remedy:** File 09; use real measures where available and explicit qualitative tradeoffs elsewhere.
- **Do not fix by:** refusing quantitative evidence entirely.

### Simplification Dogma
- **Symptom:** necessary depth, powerful tools, rich media, or advanced interaction are removed merely because “simpler is better.”
- **Root cause:** reaction against complexity became a new aesthetic ideology.
- **Violates:** G1/G6; File 09.
- **Test:** identify value lost with the simpler alternative.
- **Route / remedy:** File 09; optimize for proportionate complexity, not minimum complexity.
- **Do not fix by:** restoring every complex feature.

### Pattern as Strategy
- **Symptom:** a card grid, editorial split, proof strip, sticky story, carousel, or immersive hero is selected before the problem/job is resolved.
- **Root cause:** File 10 was used upstream of its authority.
- **Violates:** authority order; File 10.
- **Test:** state which approved upstream decision the pattern implements.
- **Route / remedy:** return to the unresolved specialist module.
- **Do not fix by:** selecting a different pattern before resolving intent.

## 27. TECHNIQUE MISUSE MATRIX

Use this matrix to prevent aesthetic prejudice.

| Technique | Valid when | Misuse condition | Typical failure mechanism |
|---|---|---|---|
| Large typography | scale communicates real hierarchy/brand emphasis | everything competes at display scale | hierarchy collapse, wrapping, viewport domination |
| Dense layout | task requires comparison, data, retrieval, or technical depth | density lacks grouping/hierarchy | cognitive overload, poor scanability |
| Sparse layout | focused narrative/desire/emphasis benefits from low density | emptiness hides missing information or manufactures luxury | false simplicity, low decision support |
| Cards | items are meaningfully independent/repeated/comparable/interactive | unrelated content is containerized by default | fragmentation, monotony, false sameness |
| Carousel | constrained sequential browsing serves a real collection/job | important content is hidden in low-discoverability slides | discoverability loss, interaction tax |
| Accordion | secondary/optional detail benefits from on-demand exposure | primary content is collapsed to save space | low information scent, scanning burden |
| Horizontal scroll | content has genuine horizontal/spatial/comparison logic | novelty changes axis without semantic benefit | orientation/agency loss |
| Sticky/pinned | persistent context/comparison/narrative continuity creates value | pinning consumes viewport or traps progress | Pinned Prison |
| Custom cursor | pointer feedback adds meaningful affordance/brand signal | cursor becomes sole signifier or decoration only | Cursor Theater, touch collapse |
| Loader | unavoidable wait needs status/brand containment | wait is avoidable or intentionally prolonged | Loader Theater |
| Cinematic transitions | rare route continuity/brand narrative gains value | routine navigation pays repeated delay | Transition Hostage |
| WebGL/3D | spatial/visual interaction creates unique core/supportive value | renderer carries ordinary semantics or prestige only | Renderer Hostage, Canvas-Only Semantics |
| Unconventional nav | mental model/experience benefits enough to justify learning | unfamiliarity is the only innovation | Orientation Loss, Innovation by Unfamiliarity |
| Minimalism | content and brand genuinely benefit from restraint | critical information or distinctions are removed | False Simplicity |
| Maximalism | layered density/energy/identity is intentionally structured | hierarchy/orientation do not rise with complexity | Motion/Visual Soup, G2 failure |

Technique choice remains contextual. File 11 diagnoses misuse, not membership in this table.

## 28. FALSE-POSITIVE CHECK

Before naming an anti-pattern, ask:
1. Is the technique actually failing the project job, or merely violating my taste?
2. Is the symptom measurable/observable in this artifact?
3. Which user/task/system consequence follows?
4. Which higher-authority rule is actually violated?
5. Could the same technique be valid under a different Strategy Vector?
6. Is the problem execution quality rather than the pattern itself?
7. Did File 09 explicitly approve this complexity with conditions that are being met?
8. Is the supposed “fix” simply the opposite aesthetic extreme?

If no project-specific consequence can be named, downgrade the diagnosis to preference or hypothesis.

## 29. CURE-BY-OPPOSITE-EXTREME

A common review failure is replacing one misuse with its mirror image:
- too many cards -> no cards;
- too much whitespace -> dense everything;
- too much motion -> no motion;
- hidden navigation -> every link visible at all times;
- oversized type -> timid type;
- overengineering -> no architecture;
- long page -> artificially short page;
- complex experience -> simplistic experience.

This is not diagnosis. It is aesthetic recoil.

Repair the violated function while retaining any valid value from the original decision.

## 30. LOCAL PATCH LOOP

Detect when the same class of failure is being patched repeatedly:

`symptom -> local CSS/content tweak -> nearby breakage -> another tweak -> exception stack`

Typical signs:
- growing breakpoint count;
- repeated one-off margins;
- component variants named after pages;
- extra ARIA because underlying control remains wrong;
- copy added to explain unclear interaction rather than fixing it;
- loaders/skeletons compensating for preventable latency;
- duplicated mobile components compensating for desktop-bound architecture.

When two or more patches address the same structural problem, route to the upstream cause before adding another patch.

## 31. FAILURE-CHAIN DIAGNOSIS

For cross-system issues, map the chain explicitly:

```text
EARLIEST WRONG DECISION:
DOWNSTREAM ADAPTATION:
VISIBLE SYMPTOM:
INTEGRITY / USER CONSEQUENCE:
CURRENT PATCHES:
PRIMARY ROUTE:
SECONDARY ROUTES:
REPAIR PRINCIPLE:
```

The earliest wrong decision is not automatically the earliest chronological decision. It is the highest causal decision that is actually incorrect.

## 32. COMPOUND CHAIN — WEAK IA TO DISCLOSURE DEBT

`unclear taxonomy -> too many top-level choices -> mobile congestion -> Accordion Everything / drawers -> low information scent -> repeated open/close effort`

Primary route: File 03 IA. Secondary: File 06 presentation.

Do not spend a week perfecting accordion animation while the taxonomy remains wrong.

## 33. COMPOUND CHAIN — GENERIC BRAND TO PERFORMANCE DEBT

`generic art direction -> motion/effects added to manufacture distinction -> additional libraries/media -> runtime cost -> mobile simplification -> identity disappears`

Primary route: File 04. Secondary: Files 05/08/09.

The fix may be stronger static art direction, not simply “optimize the animation.”

## 34. COMPOUND CHAIN — DESKTOP COMPOSITION TO ACCESSIBILITY FAILURE

`desktop composition treated as semantic order -> CSS reorder on mobile -> focus/source mismatch -> screen-reader sequence conflict -> File 08 failure`

Primary route: Files 06/07. File 08 governs severity and conformance.

Do not repair this with tabindex manipulation.

## 35. COMPOUND CHAIN — PRESTIGE STACK TO FRAGILITY

`award reference -> custom scroll -> pinned sections -> route transitions -> WebGL hero -> third-party analytics/chat -> stack interaction -> performance/accessibility/QA compounding`

Primary route: File 09 Complexity Stack Test; File 10 Pattern Stack Test.

The right answer may be to concentrate one or two high-value expressive mechanisms and remove the rest.

## 36. ARCHETYPE — SAAS / B2B

Especially dangerous:
- feature laundry replacing outcome/workflow explanation;
- generic neon/gradient/product-dashboard “SaaS look” replacing distinction;
- proof graveyard detached from enterprise claims;
- CTA spam before trust/fit/implementation questions are answered;
- tiny product screenshots pretending to explain the product;
- framework/client-runtime excess on marketing routes;
- animated product theater that obscures actual workflow;
- unclear role-based navigation in high-complexity platforms.

Do not infer that SaaS/B2B must be visually restrained. Expression is valid when clarity, trust, and decision support survive.

## 37. ARCHETYPE — ECOMMERCE

Especially dangerous:
- editorial art direction obscuring product identification/price/variant/action;
- carousels hiding decision-critical product media;
- filters/categories modeled around internal merchandising rather than shopper mental models;
- mobile reduction removing comparison or purchase-confidence information;
- third-party scripts degrading product/cart/checkout responsiveness;
- variant/cart state duplication;
- oversized promotional media displacing product decision information;
- “minimal” checkout that hides delivery/returns constraints.

Do not condemn rich storytelling if it improves desirability without degrading transaction continuity.

## 38. ARCHETYPE — LUXURY / HOSPITALITY

Especially dangerous:
- Premium by Friction;
- Generic Premium styling;
- atmospheric media dominating location/offer/practical information;
- slow loaders/transitions justified as exclusivity;
- illegible typography/contrast as refinement;
- hidden availability/inquiry paths;
- desktop cinematic composition collapsing into generic mobile leftovers;
- heavy autoplay media without performance/accessibility control.

Do not “fix” luxury by removing pacing, atmosphere, editorial composition, or desire. Preserve them when they create real value.

## 39. ARCHETYPE — EDITORIAL / RESEARCH

Especially dangerous:
- false simplicity deleting depth;
- long-form content with weak hierarchy/navigation;
- every subsection collapsed on mobile;
- decorative visualization without readable labels/alternatives;
- citations/evidence visually detached from claims;
- horizontal overflow caused by figures/tables without intentional handling;
- client-only article content;
- typography optimized for display rather than sustained reading.

Dense, long content is not an anti-pattern when structured for retrieval and comprehension.

## 40. ARCHETYPE — PORTFOLIO / AGENCY

Especially dangerous:
- spectacle obscuring the actual work;
- cursor/hover owning project titles or navigation;
- award-site imitation masquerading as creative differentiation;
- generic project grids with no relevance/context/outcomes;
- case studies reduced to images without evaluative information;
- contact/conversion hidden behind experimental navigation;
- brand identity disappearing under reduced motion/mobile.

Experimental presentation may itself demonstrate capability. The failure occurs when evaluability and access no longer survive.

## 41. ARCHETYPE — BRAND / GUIDELINES

Especially dangerous:
- expressive demonstrations making rules hard to retrieve;
- reference navigation hidden behind theatrical browsing;
- component examples inconsistent with stated system rules;
- motion examples without static/reduced-motion equivalents;
- excessive bespoke sections making the guidelines themselves non-systematic;
- brand expression dependent on effects that cannot scale to ordinary production.

The site can embody the brand while remaining a usable reference system.

## 42. ARCHETYPE — PUBLIC SERVICE / UTILITY

Especially dangerous:
- brand narrative before task;
- jargon/internal-org IA;
- unnecessary JavaScript/runtime dependence;
- low-contrast “modern” styling;
- unconventional navigation;
- hidden requirements/eligibility;
- inaccessible forms/errors;
- third-party hostage on critical flows;
- responsive or language/localization fragility.

Avoidable user learning/friction is particularly costly because users did not arrive to admire the interface.

## 43. ARCHETYPE — CAMPAIGN / LAUNCH

Especially dangerous:
- visual concept replacing offer/message clarity;
- temporary hype claims outrunning proof;
- cinematic entry delaying action-ready users;
- heavy media/runtime for short-lived value;
- social/ad landing paths forced through long narrative ritual;
- one-off engineering complexity with no maintenance owner;
- countdown/scarcity mechanics that are misleading or unsupported.

Campaigns can sustain stronger expression when it earns attention and preserves action clarity.

## 44. ARCHETYPE — DATA / VISUALIZATION

Especially dangerous:
- canvas-only semantics;
- color-only meaning;
- desktop-only interaction precision;
- visualization chosen because it looks advanced rather than because it improves comparison/comprehension;
- responsive collapse that destroys the relationship the visualization exists to show;
- hidden data tables/alternate representations that do not preserve useful value;
- heavy rendering without constrained-device strategy;
- state/URL choices that prevent shareable/restorable views when needed.

Complexity may be necessary here. The goal is legible, accessible complexity, not simplification by deletion.

## 45. ARCHETYPE — EXPERIENCE-FIRST / WEBGL

Especially dangerous:
- Renderer Hostage;
- WebGL as Navigation Requirement;
- Orientation Loss;
- Innovation by Unfamiliarity;
- Fallback Theater;
- Desktop Demo Bias;
- Mobile Sacrifice;
- reduced-motion afterthought;
- inaccessible duplicate-experience burden;
- irreversible architecture;
- complexity stack overload.

Experience-first does not mean integrity-optional. File 09 should already have justified the advanced mechanism; File 11 checks whether implementation drifted into the known failure modes.

## 46. USE MODE — CRITIQUE

For critique:
1. identify the top user/project objective;
2. name only observed symptoms;
3. group symptoms by likely root cause;
4. map to relevant laws/modules;
5. assign qualitative severity;
6. propose remedy principles, not premature design solutions;
7. separate taste observations from system failures.

Return the highest-leverage issues first. Do not drown the user in every minor smell.

## 47. USE MODE — RED TEAM

For red-team:
- actively search for assumptions the current design depends on;
- challenge project-fit of selected patterns;
- test whether complexity value survives real constraints;
- inspect where mobile/accessibility/performance costs were externalized;
- compare intended `PROJECT_WEBSITE_SPEC` to actual build;
- look for compound failure chains;
- seek a credible simpler alternative without assuming it is better;
- distinguish blocker/integrity issues from polish.

Red-team is adversarial to the work, not to ambition.

## 48. USE MODE — DEBUGGING WEAK GENERATED WEBSITE WORK

When AI-generated work looks “off”:
1. do not immediately rewrite CSS;
2. inspect whether the generator guessed strategy or hierarchy;
3. compare section jobs to actual components;
4. run Generic Premium / Everything Is a Card / Section Slot Machine / Template-First checks;
5. inspect mobile/source-order/state behavior;
6. inspect runtime/dependencies only after architecture intent is clear;
7. repair upstream cause, then regenerate/refactor affected output.

AI often produces locally plausible fragments that are globally incoherent. Diagnose the system, not each fragment in isolation.

## 49. USE MODE — POST-BUILD AUDIT

Audit in this order:
`purpose/spec drift -> information/decision architecture -> visual hierarchy/system -> interaction/state -> responsive transformation -> engineering architecture -> File 08 integrity -> complexity stack -> pattern misuse -> polish`

If a hard File 08 issue appears, record it immediately even if deeper root-cause analysis continues.

## 50. USE MODE — RESPONSIVE AUDIT

Prioritize:
- core-value preservation;
- PRIORITY A1 content/action survival;
- semantic/source order;
- navigation transformation;
- hover/cursor/drag alternatives;
- crop/art direction;
- short viewport/keyboard;
- reflow/zoom;
- spectacle preservation versus mechanic replacement;
- hidden-but-loaded resources.

Do not evaluate mobile as visual similarity to desktop.

## 51. USE MODE — CONVERSION AUDIT

Prioritize:
- user decision and required beliefs;
- relevance before commitment;
- claim/proof pairing;
- objection timing;
- CTA readiness/repetition;
- action clarity;
- high-commitment trust burden;
- practical constraints/pricing/fit visibility;
- whether experimental interaction blocks conversion.

Do not use File 11 to invent manipulative urgency or generic funnel tactics.

## 52. USE MODE — DESIGN AUDIT

Prioritize:
- PRIORITY A1 visual dominance;
- grouping and section cadence;
- Generic Premium / competitor swap;
- media role;
- typography/readability;
- contrast hierarchy;
- stable invariants vs expressive variation;
- card/section repetition;
- desktop art-direction resilience;
- brand survival without logo/motion.

Separate art-direction disagreement from actual system incoherence.

## 53. USE MODE — IMPLEMENTATION AUDIT

Prioritize:
- semantic tree/source order;
- component responsibilities;
- cascade/token explainability;
- JS responsibility;
- state ownership;
- rendering mode;
- dependency overlap;
- progressive enhancement/failure containment;
- asset/runtime delivery;
- advanced-renderer isolation;
- responsive architecture;
- File 08 hard-gate findings.

Do not refactor merely to match personal coding style.

## 54. PROJECT_WEBSITE_SPEC WRITEBACK

File 11 is primarily diagnostic. Do not dump every smell into `PROJECT_WEBSITE_SPEC`.

Write back only when diagnosis causes:
- a material upstream decision to change;
- an approved pattern/complexity decision to be reversed or conditioned;
- a new explicit exception/residual risk;
- a material acceptance criterion;
- a cross-system constraint future work must preserve.

Use:

```text
DIAGNOSTIC CHANGE RECORD
Issue / Anti-Pattern:
Observed Consequence:
Root Cause:
Primary Route:
Affected Spec Decision:
Previous Decision:
Revised Decision / Constraint:
File 08 Integrity Impact:
File 09 Complexity Impact:
Residual Risk / Exception:
Verification Required:
```

Routine local fixes stay in implementation/issue tracking, not the project specification.

## 55. HANDOFF TO FILE 12

Provide `12_BUILD_WORKFLOW_OS.md` with the prevention and correction concepts that should become part of production sequencing:
- root-cause-first correction;
- upstream routing before local patching;
- early checks for Template-First Architecture and Generic Premium;
- pattern selection only after resolved upstream intent;
- File 09 gate before material complexity commitment;
- File 08 integrity checks before launch-only crunch;
- responsive/core-value checks before desktop art direction hardens;
- periodic pattern/complexity stack review;
- stop conditions for repeated patch loops;
- proportionate spec writeback after material correction.

File 12 should turn these into workflow checkpoints, not duplicate this diagnostic catalog.

## 56. RELATIONSHIP TO FILE 13

File 11 is a review aid. It helps explain **why** work is weak and where correction belongs.

`13_SCORECARD_QA_REDTEAM_OS.md` defines full evaluation/acceptance authority, scoring if appropriate, acceptance gates, and launch-readiness logic.

Do not declare a major project world-class/launch-ready merely because no File 11 anti-patterns are obvious.

## 57. MODULE ACCEPTANCE GATE

PASS only when:
- A5 authority boundary is explicit;
- diagnosis is causal rather than aesthetic;
- symptoms and root causes are separated;
- severity is qualitative and compatible with File 08 hard gates;
- routing covers Files 03–10;
- established upstream anti-pattern terms are normalized rather than blindly duplicated;
- false-positive protection is explicit;
- technique misuse is distinguished from technique membership;
- cure-by-opposite-extreme is rejected;
- compound failure chains are supported;
- required archetype adaptations are covered;
- critique/red-team/debug/post-build/responsive/conversion/design/implementation use modes exist;
- `PROJECT_WEBSITE_SPEC` writeback is proportionate;
- File 12 handoff is clear;
- File 13 remains final QA authority;
- token-efficiency rules prevent always-on catalog loading.

## 58. DIAGNOSTIC TESTS

### Purpose Test
What user/project objective is actually being harmed?

### Symptom Test
What can be observed rather than inferred?

### Root-Cause Test
What upstream decision would remove several symptoms if corrected?

### Authority Test
Which higher-authority law/module governs the issue?

### False-Positive Test
Could this same technique be excellent under another valid context?

### Competitor-Swap Test
Is “premium” styling actually project-specific?

### Headings-Only Test
Can users reconstruct topic/progression/action from semantic headings?

### Removal Test
What meaningful value disappears if the suspect pattern/effect is removed?

### Opposite-Extreme Test
Is the proposed cure merely the inverse aesthetic?

### Patch-Count Test
How many local exceptions already exist for this same problem?

### Source-Order Test
Does semantic/focus order remain meaningful without CSS composition?

### Hover-Off / Motion-Off Test
Does essential meaning/function survive alternate input/preferences?

### Reflow Test
Does the system survive narrow/zoomed/long-content conditions?

### Failure Test
What remains if JS/media/API/third party/renderer fails?

### 50th-Use Test
Does repeated friction remain justified?

### Stack Test
Do individually valid patterns/advanced systems remain coherent together?

### Simpler-Alternative Test
Does a credible simpler mechanism preserve nearly all relevant value?

## 59. RED TEAM

Before approving this module or a diagnosis, ask:
- Did aesthetic prejudice sneak in as a rule?
- Did we label a technique bad instead of naming its misuse condition?
- Did we duplicate an existing anti-pattern under a more dramatic name?
- Did we confuse visible symptom with upstream root cause?
- Is the proposed remedy just the opposite extreme?
- Did File 11 start duplicating File 10 pattern definitions?
- Did File 11 restate doctrine instead of routing to it?
- Are we dumping generic best practices unrelated to observed failure?
- Did we contradict an approved File 09 decision without showing failed conditions/new evidence?
- Did we treat File 08 accessibility/performance/semantic requirements as style preferences?
- Did responsive diagnosis collapse to screen width only?
- Did anti-Awwwards skepticism become a dogma against experimental work?
- Did framework preference or anti-framework preference bias diagnosis?
- Are we using a number where qualitative severity is more truthful?
- Did we route to too many modules rather than identify the primary cause?
- Are we writing so much anti-pattern metadata that diagnosis becomes slower than fixing the issue?

## 60. TOKEN-EFFICIENCY RULE

The full Anti-Pattern Library should remain cold unless broad audit/diagnosis is required.

In ordinary use:
1. identify the visible failure family;
2. load/retrieve only the relevant family when possible;
3. use the Compact Diagnostic Record;
4. expand to the Extended Record only for consequential/cross-system ambiguity;
5. route to the governing specialist module rather than restating it;
6. write back only material decision changes;
7. stop diagnosing once the causal issue and verification path are sufficiently clear.

The library should save context by giving failures stable names and routes, not consume context by reciting itself.

## 61. OPERATIONAL WORKFLOW

`Artifact / build -> observe symptom -> classify failure family -> distinguish symptom/root cause -> false-positive check -> map law/module -> assign severity -> trace compound chain if needed -> route to highest wrong causal layer -> define remedy principle -> correct upstream -> propagate downstream changes -> File 08/File 09 recheck when implicated -> verify artifact -> write PROJECT_WEBSITE_SPEC only if material -> File 12 prevention loop / later File 13 acceptance QA`

## 62. SUCCESS STANDARD

This module succeeds when the Website OS can diagnose weak work without becoming a taste police manual; distinguish technique from misuse; trace visible failures to their causal layer; preserve ambition where it earns itself; identify integrity failures without softening them; prevent local patch loops; recognize compound failures across strategy, design, responsive behavior, engineering, accessibility, performance, and complexity; and route correction back to the system that actually owns the decision.

The goal is not to produce websites with no recognizable patterns.

The goal is to prevent **unexamined, misapplied, incoherent, inaccessible, fragile, or strategically empty patterns from surviving merely because they are familiar, fashionable, convenient, or impressive**.

# 10 — PATTERN LIBRARY

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A5 — CONDITIONAL IMPLEMENTATION OPTIONS  
**Dependencies:** `PROJECT_CUSTOM_INSTRUCTIONS.md`, `00_OS_MANIFEST_ROUTER.md`, `01_GOVERNING_DOCTRINE.md`, `02_STRATEGY_VECTOR_AND_ROUTER.md`, relevant specialist modules `03`–`09`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC` only for consequential pattern decisions  
**Hands Off To:** `11_ANTI_PATTERN_LIBRARY.md` for failure diagnosis; `12_BUILD_WORKFLOW_OS.md` for production sequencing; affected specialist modules for implementation  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Provide a compact library of proven website solution patterns that can be selected **after** project purpose, Strategy Vector, specialist-system decisions, integrity requirements, and required Complexity ROI decisions are resolved.

A pattern is a reusable solution shape for a recurring problem. It is not a law, aesthetic mandate, page template, framework prescription, or evidence that a site is world-class.

This file exists to answer:

> Given the project decisions already made, which implementation pattern best expresses them with the least unnecessary cost?

The library organizes options by the **job they solve**, not by trend, prestige, visual fashion, or awards culture.

## 2. AUTHORITY BOUNDARY

Patterns sit at **A5**, below:
1. A0 — Current Project Brief;
2. A1 — Project Custom Instructions;
3. A2 — Governing Doctrine;
4. A3 — Strategy Vector + specialist systems;
5. A4 — Scorecard / QA / acceptance gates.

A pattern may instantiate an upstream decision. It may not create, revise, or overrule that decision.

If a pattern conflicts with project purpose, semantic integrity, accessibility, responsive value, performance budgets, approved engineering architecture, or File 09 conditions, the pattern loses.

If the real problem is unresolved strategy, hierarchy, IA, interaction, responsive behavior, engineering, or integrity, route upstream. Do not use a pattern as decorative duct tape.

## 3. OPERATING PREMISE

Patterns reduce invention cost when the problem is known.

They become dangerous when they replace reasoning.

Use patterns to accelerate implementation of a resolved intent, not to decide what the intent should be.

The correct sequence remains:

`Purpose -> Strategy Vector -> Governing Laws -> Specialist Systems -> PROJECT_WEBSITE_SPEC -> Complexity / Integrity Gates -> Pattern Selection -> Implementation -> Verification`

Never reverse this into:

`Cool pattern -> page concept -> invented rationale`.

## 4. WHEN TO LOAD FILE 10

Load this file when:
- implementation options are genuinely being selected;
- a resolved project requirement could be expressed through several valid structures;
- a team needs a compact vocabulary for recurring solution shapes;
- a build needs alternatives before committing to a component or interaction model;
- a project needs a pattern portfolio checked for coherence or cumulative complexity.

Do **not** load File 10 merely to generate inspiration, make a page look premium, or substitute for unresolved strategy.

Per `00_OS_MANIFEST_ROUTER.md`, patterns are optional and should remain unloaded when implementation options are not the current problem.

## 5. REQUIRED INPUTS

Before consequential pattern selection, know or provisionally resolve:
- current `PROJECT_WEBSITE_SPEC`;
- Strategy Vector;
- page/route role;
- primary user and primary action;
- PRIORITY A1–A4 information priorities;
- narrative / decision sequence;
- visual-system constraints;
- interaction grammar;
- responsive transformations;
- engineering architecture;
- File 08 integrity requirements;
- approved File 09 decisions where complexity is material.

If those inputs are materially unknown, pattern selection is premature.

## 6. WHAT COUNTS AS A PATTERN

A pattern has:
- a recurring problem/job;
- a reusable structural or behavioral solution shape;
- identifiable fit conditions;
- identifiable failure conditions;
- meaningful tradeoffs;
- enough abstraction to work across more than one project.

Examples:
- claim + adjacent proof;
- chapter index for long documents;
- filter + sort for large product sets;
- persistent comparison headers;
- product demonstration paired with explanatory copy;
- exploratory surface with conventional fallback navigation.

A pattern is **not** merely:
- a color palette;
- a font pairing;
- “large typography”;
- “minimalism”;
- rounded cards;
- gradients;
- grain;
- black-and-white photography;
- generous whitespace;
- parallax;
- custom cursor;
- WebGL;
- serif headings;
- smooth scrolling.

Those are techniques or stylistic choices. They need a project-specific job before they deserve selection.

## 7. PATTERN CLASSIFICATION

Each pattern belongs primarily to one job family:

- **PF1 STRUCTURE / NARRATIVE** — organize what comes before what;
- **PF2 NAVIGATION / ORIENTATION** — help users find, locate, and recover;
- **PF3 CONVERSION / ACTION** — support appropriate next action;
- **PF4 PROOF / TRUST** — connect claims to evidence and confidence;
- **PF5 COMPARISON / CHOICE** — support evaluation among alternatives;
- **PF6 DISCLOSURE / DENSITY** — stage complexity without losing access;
- **PF7 VISUAL / COMPOSITION** — translate hierarchy into recurring spatial form;
- **PF8 MEDIA / DEMONSTRATION** — use imagery/video/UI/diagrams to carry value;
- **PF9 INTERACTION / STATE** — make behavior, feedback, and state legible;
- **PF10 MOTION / SCROLL** — communicate progression, continuity, or spatial relation over time;
- **PF11 RESPONSIVE TRANSFORMATION** — preserve value under changing constraints;
- **PF12 DOMAIN-SPECIFIC** — commerce, editorial/research, portfolio, data, brand/reference;
- **PF13 EXPERIENTIAL / ADVANCED** — spatial, WebGL, unusual navigation, cinematic systems requiring File 09 when material.

A pattern may touch multiple families, but assign one primary job to prevent duplicate naming.

## 8. PATTERN COMPLEXITY CLASS

Use a lightweight class to aid routing. This is not a quality score.

### P0 — NATIVE / STRUCTURAL
Mostly semantic HTML/CSS or familiar document structure. Low novelty and low systemic cost.

### P1 — ENHANCED
Adds moderate UI behavior, disclosure, responsive transformation, media treatment, or state coordination.

### P2 — ADVANCED
Adds substantial interaction, motion, rendering, runtime, responsive substitution, or cross-system coordination. Review against File 09 triggers.

### P3 — EXPERIENTIAL
Materially novel/spatial/cinematic/renderer-dependent behavior. **File 09 approval required before adoption.**

Complexity class describes implementation burden, not desirability.

## 9. PATTERN SELECTION WORKFLOW

For each meaningful choice:

1. **Name the job.** What problem is being solved?
2. **Confirm upstream intent.** Which `PROJECT_WEBSITE_SPEC` decision requires a solution?
3. **List the simplest credible options.** Include native/document-level options.
4. **Match context.** Strategy Vector, archetype, page role, commitment, information complexity, trust, experiential intensity, novelty, brand expression.
5. **Check fit.** Does the pattern improve the required user/business outcome?
6. **Check rejection conditions.** When would it make the experience worse?
7. **Check integrity.** Semantics, keyboard, focus, reflow, reduced motion, performance, crawlability, failure resilience.
8. **Check responsive transformation.** Preserve, recompose, reorder, replace, collapse, simplify, remove.
9. **Check complexity.** Route to File 09 when triggered.
10. **Check the stack.** Does this pattern conflict with or duplicate existing patterns?
11. **Select or reject.** Record only consequential decisions.
12. **Verify in implementation.** Pattern name is never proof that execution works.

## 10. PATTERN FIT CRITERIA

A pattern is a strong candidate when most relevant conditions are true:
- solves a clearly named user/project problem;
- aligns with page role and decision sequence;
- improves comprehension, retrieval, trust, comparison, action, orientation, demonstration, emotion, or brand in a way that matters;
- fits the Strategy Vector rather than fighting it;
- preserves familiar meaning even when presentation is expressive;
- has a viable responsive transformation;
- satisfies File 08 hard requirements;
- fits approved engineering architecture;
- does not introduce disproportionate maintenance or content burden;
- if complex, has passed File 09;
- composes coherently with the rest of the system.

## 11. REJECTION CRITERIA

Reject or route upstream when:
- the pattern exists mainly because a prestigious site used it;
- its job cannot be stated without aesthetic adjectives;
- it compensates for unclear strategy, weak IA, or weak hierarchy;
- a simpler pattern preserves essentially all relevant value;
- it creates orientation or clarity debt without meaningful return;
- its mobile/touch transformation destroys core value;
- it hides essential information/function behind hover, drag, motion, or novelty;
- it conflicts with WCAG/integrity requirements;
- it pushes primary routes outside approved performance budgets without sufficient value;
- it creates a new interaction grammar for no meaningful reason;
- it requires unsupported content/media production;
- it duplicates another selected pattern’s job;
- it increases cumulative complexity beyond the project’s ownership capacity.

## 12. COMPACT PATTERN RECORD

Use this when selecting patterns in ordinary project work:

```text
PATTERN:
JOB:
FIT WHEN:
AVOID WHEN:
VECTOR / PAGE FIT:
USER VALUE:
SYSTEM COST: Low / Medium / High
RESPONSIVE MOVE:
INTEGRITY RISKS:
FILE 09 REQUIRED: Yes / No / Conditional
DECISION: Use / Adapt / Reject / Validate
```

Do not fill fields mechanically when irrelevant.

## 13. EXTENDED PATTERN RECORD

Use only for consequential or unusual patterns:

```text
PATTERN:
FAMILY:
COMPLEXITY CLASS: P0 / P1 / P2 / P3
PROBLEM / JOB:
UPSTREAM DECISION SERVED:
STRATEGY VECTOR CONNECTION:
PAGE / ROUTE ROLE:
PREREQUISITES:

CORE MECHANISM:
USER VALUE:
BUSINESS / BRAND VALUE:
SIMPLEST CREDIBLE ALTERNATIVE:

FIT CONDITIONS:
REJECTION CONDITIONS:
OVERUSE SIGNALS:

SEMANTIC MODEL:
KEYBOARD / POINTER MODEL:
FOCUS / STATE MODEL:
RESPONSIVE TRANSFORMATION:
REDUCED-MOTION TREATMENT:
PERFORMANCE COST:
MEDIA / CONTENT COST:
MAINTENANCE COST:
FAILURE BEHAVIOR:

FILE 08 CONDITIONS:
FILE 09 STATUS:
INTERACTIONS WITH OTHER PATTERNS:
PROJECT_WEBSITE_SPEC WRITEBACK:
DECISION:
```

## 14. PATTERN PORTFOLIO RULE

Do not evaluate patterns only one at a time.

A page/site has a **pattern portfolio**. Individually sensible patterns can create a collectively incoherent experience.

After selection ask:
- How many navigation grammars exist?
- How many disclosure models exist?
- How many card/container anatomies exist?
- How many motion grammars exist?
- How many sections demand dominant attention?
- How many patterns require special mobile substitutions?
- How many rely on custom JS/runtime?
- How many require special accessibility/fallback paths?
- Are several patterns solving the same job differently?
- Does the combined page still feel like one system?

When the portfolio becomes difficult to explain, reduce or consolidate.

## 15. COMBINATION RULES

### COMB-1 — One dominant structural logic per page phase
A page may contain multiple section forms, but the overall decision/narrative logic should remain legible.

### COMB-2 — Reuse interaction grammar
Similar state changes should behave similarly unless meaning differs.

### COMB-3 — Vary expression more than semantics
Composition/media may vary while labels, controls, destinations, and state conventions remain stable.

### COMB-4 — Do not stack novelty casually
Custom cursor + smooth-scroll engine + pinned sequence + horizontal traversal + WebGL + cinematic route transitions is a system, not six isolated decorations. Route the stack through File 09.

### COMB-5 — Concentrate complexity
Place justified complexity where it creates the most value. Let evaluation, transaction, support, and repeated utility become more conventional when appropriate.

### COMB-6 — Protect critical actions
Primary navigation, conversion, transaction, and core tasks should not depend on optional expressive layers unless that layer is itself the product.

### COMB-7 — Responsive combination matters
A set of desktop-valid patterns can become a mobile disaster when all require separate transformations. Evaluate the combined narrow-state experience.

### COMB-8 — Pattern count is not quality
Do not maximize variety. High-resolution coherence is the target.

---

## PATTERN FAMILIES

## 16. PF1 — STRUCTURE / NARRATIVE

### 16.1 Outcome-Led Platform
**Job:** orient users around desired outcomes before capability detail.  
**Fit:** SaaS/B2B, platforms, services where users first evaluate relevance/value.  
**Avoid:** when the product category itself is unclear and capability/mechanism must be established first.  
**Shape:** Outcome → capability families → proof → buyer/use contexts → implementation → action.  
**Cost:** P0.  
**Risk:** generic outcome language without proof/mechanism.

### 16.2 Operational Workflow
**Job:** explain a product/service through the workflow it changes.  
**Fit:** operational software, services, process-heavy B2B, technical systems.  
**Avoid:** when users do not think in the proposed workflow or when steps are invented for marketing neatness.  
**Shape:** Context/problem → workflow stages → solution mapping → outcomes → proof → action.  
**Cost:** P0–P1.

### 16.3 High-Consideration Decision Ramp
**Job:** support a high-commitment decision with increasing confidence.  
**Fit:** enterprise, luxury inquiry, high-ticket service, substantial purchase.  
**Avoid:** low-commitment tasks where the ramp creates unnecessary ceremony.  
**Shape:** Relevance → value → mechanism → evidence → fit → risk resolution → action.  
**Cost:** P0.

### 16.4 Product Discovery Path
**Job:** move from broad catalog/category intent toward confident selection.  
**Fit:** ecommerce, marketplaces, large content/product ecosystems.  
**Avoid:** tiny catalogs where filters/categories add more structure than useful choice.  
**Shape:** Category → browse/filter → compare → evaluate → confidence → transaction.  
**Cost:** P0–P1.

### 16.5 Experience-to-Utility
**Job:** allow expressive discovery while progressively revealing practical decision information.  
**Fit:** luxury, hospitality, cultural, portfolio, campaign, experience-first work.  
**Avoid:** urgent utility, public service, routine transaction, or high-frequency tools.  
**Shape:** Atmosphere/context → exploration → specific offer/content → practical evaluation → action.  
**Cost:** P1–P3 depending on mechanics. File 09 required when materially advanced.

### 16.6 Editorial Depth
**Job:** make deep content navigable without flattening it.  
**Fit:** editorial, research, documentation, long-form institutional content.  
**Avoid:** short pages where chapter architecture becomes pompous overhead.  
**Shape:** Summary → chapter choices → analysis → evidence/data → deeper reference.  
**Cost:** P0–P1.

## 17. PF2 — NAVIGATION / ORIENTATION

### 17.1 Global + Local Navigation Split
**Job:** separate site-wide destinations from section/product-specific navigation.  
**Fit:** large ecosystems, docs, SaaS suites, institutions.  
**Avoid:** small sites where two navigation layers create artificial complexity.  
**Cost:** P0–P1.  
**Responsive:** local navigation may become an Index/disclosure rather than remain persistent.

### 17.2 Priority Navigation + More
**Job:** keep highest-value destinations visible while containing secondary choices.  
**Fit:** medium-complexity navigation with clear priority differences.  
**Avoid:** when hidden items are equally important or “More” becomes a junk drawer.  
**Cost:** P1.

### 17.3 Sidebar / Rail + Mobile Index
**Job:** provide persistent orientation in deep sections without forcing the same geometry on narrow screens.  
**Fit:** docs, research, brand guidelines, long reports, category reference.  
**Avoid:** shallow pages.  
**Cost:** P1.  
**Responsive:** persistent rail → labeled on-demand index while preserving current state.

### 17.4 Drill-Down Navigation
**Job:** expose large hierarchical navigation progressively.  
**Fit:** ecommerce, large institutions, product ecosystems.  
**Avoid:** shallow taxonomy or ambiguous parent labels.  
**Cost:** P1.  
**Integrity:** focus, back behavior, current level, and close/recovery must be explicit.

### 17.5 Breadcrumb / Hierarchy Trail
**Job:** communicate location and parent hierarchy.  
**Fit:** deep hierarchical structures, ecommerce categories, documentation.  
**Avoid:** flat sites or non-hierarchical journeys where the trail lies about structure.  
**Cost:** P0.

### 17.6 Chapter Index / Progress Navigation
**Job:** orient users within long, staged, or chaptered content.  
**Fit:** research, long-form narrative, guidelines, complex product stories.  
**Avoid:** short pages or where progress indicators imply a forced linear process that does not exist.  
**Cost:** P0–P1.

### 17.7 Search-First Navigation
**Job:** prioritize retrieval when users know what they seek and the information space is large.  
**Fit:** docs, support, catalogs, research archives.  
**Avoid:** low-content sites or discovery-led experiences where categories matter more than lookup.  
**Cost:** P1–P2 depending on search architecture.

### 17.8 Exploratory Surface + Conventional Fallback
**Job:** permit expressive/spatial exploration without making it the only way to navigate.  
**Fit:** portfolios, cultural experiences, spatial data, experience-first campaigns.  
**Avoid:** when the fallback is treated as an afterthought or core destinations remain unnamed.  
**Cost:** P2–P3.  
**File 09:** required when exploration is materially novel.

## 18. PF3 — CONVERSION / ACTION

### 18.1 Contextual CTA Repetition
**Job:** make the next action available at genuine readiness moments.  
**Fit:** medium/high-consideration pages where new evidence creates new readiness.  
**Avoid:** repeating the same CTA after every section without new decision support.  
**Cost:** P0.

### 18.2 Progressive Commitment
**Job:** offer a lower-friction step before a high-commitment action when useful.  
**Fit:** complex B2B, high-ticket services, long buying cycles.  
**Avoid:** when it distracts from an action-ready user or creates fake funnel stages.  
**Examples:** view pricing, see implementation, download spec, then request consultation.  
**Cost:** P0–P1.

### 18.3 Action-Ready Shortcut
**Job:** let returning/decided users bypass introductory narrative.  
**Fit:** bookings, demos, purchase, account actions, repeat visitors.  
**Avoid:** when the shortcut removes information genuinely required for safe/informed action.  
**Cost:** P0.

### 18.4 Persistent Task Action
**Job:** keep a frequent or critical action available while context changes.  
**Fit:** cart, save, apply, book, compare, map controls, high-frequency utilities.  
**Avoid:** intrusive sticky CTAs on low-frequency reading or when they consume scarce mobile viewport height.  
**Cost:** P1.

### 18.5 Multi-Path CTA Hierarchy
**Job:** distinguish primary conversion from secondary exploration/utility.  
**Fit:** sites serving users at different readiness states.  
**Avoid:** when several “primary” actions compete equally.  
**Cost:** P0.

## 19. PF4 — PROOF / TRUST

### 19.1 Claim + Adjacent Proof
**Job:** resolve skepticism near the claim that creates it.  
**Fit:** important outcomes, differentiation, capability, trust claims.  
**Avoid:** decorative logo/testimonial placement disconnected from actual claims.  
**Cost:** P0.

### 19.2 Proof Cluster
**Job:** combine complementary evidence types around a high-stakes decision.  
**Fit:** enterprise, high-ticket, regulated/high-trust contexts.  
**Avoid:** dumping unrelated proof into a generic credibility wall.  
**Possible mix:** outcome + authority + product/process evidence.  
**Cost:** P0.

### 19.3 Case Evidence Narrative
**Job:** demonstrate mechanism + outcome through a specific real example.  
**Fit:** services, B2B, portfolio/agency, complex products.  
**Avoid:** thin “case studies” that contain only praise or visual screenshots.  
**Cost:** P0–P1, content-heavy.

### 19.4 Process Transparency
**Job:** reduce uncertainty about what happens after action.  
**Fit:** services, enterprise implementation, applications, bookings, transactions.  
**Avoid:** invented process theater or detail irrelevant to the decision.  
**Cost:** P0.

### 19.5 Policy / Risk Reassurance at Point of Need
**Job:** surface shipping, returns, cancellation, privacy, guarantee, compatibility, security, or implementation constraints when they affect decision confidence.  
**Fit:** ecommerce, SaaS, high-trust conversion.  
**Avoid:** generic trust-badge clutter.  
**Cost:** P0.

## 20. PF5 — COMPARISON / CHOICE

### 20.1 Comparison Matrix
**Job:** compare options across shared decision criteria.  
**Fit:** plans, products, packages, vendors, specifications.  
**Avoid:** when attributes are not genuinely comparable or the matrix creates false precision.  
**Cost:** P0–P1.  
**Responsive:** preserve cross-option comparison through controlled horizontal table, selected subset, or attribute-first transformation.

### 20.2 Filter + Sort
**Job:** reduce a large set according to user-recognizable criteria.  
**Fit:** catalogs, marketplaces, archives, large resources.  
**Avoid:** tiny sets, internally defined filters, or filters with negligible impact.  
**Cost:** P1–P2 depending on data/state.

### 20.3 Attribute-First Comparison
**Job:** let users compare one important criterion across several options before deep detail.  
**Fit:** narrow screens, technical specifications, product selection.  
**Avoid:** when users need whole-product context rather than isolated attributes.  
**Cost:** P1.

### 20.4 Guided Recommendation
**Job:** narrow choices using explicit user criteria.  
**Fit:** large option spaces where user needs map reliably to choices.  
**Avoid:** opaque quizzes that primarily collect leads or steer users dishonestly.  
**Cost:** P1–P2.  
**Integrity:** recommendation logic must be explainable enough for the stakes.

### 20.5 Package / Plan Ladder
**Job:** show meaningful differences in scope, capability, support, or commitment.  
**Fit:** plans/packages genuinely differ along coherent dimensions.  
**Avoid:** fake three-tier pricing architecture created only because SaaS pages often have three cards.  
**Cost:** P0.

## 21. PF6 — DISCLOSURE / DENSITY

### 21.1 Native Disclosure / Accordion
**Job:** defer secondary detail while preserving access.  
**Fit:** FAQs, specifications, secondary technical depth, mobile local navigation.  
**Avoid:** hiding page purpose, critical comparison, pricing, warnings, or information users need simultaneously.  
**Cost:** P0–P1.

### 21.2 Tabs
**Job:** switch among peer content states that share a context.  
**Fit:** product modes, role-specific examples, compact comparisons.  
**Avoid:** when users need simultaneous comparison, deep linking is required but unsupported, or labels are weak.  
**Cost:** P1.

### 21.3 Detail Drawer / Side Panel
**Job:** reveal contextual detail without losing the underlying selection context.  
**Fit:** dashboards, maps, galleries, product lists, spatial surfaces.  
**Avoid:** narrow screens without a clear replacement or when panel state becomes navigation without URL/history.  
**Cost:** P1–P2.

### 21.4 Progressive Technical Depth
**Job:** present a readable gist first while retaining expert-level detail.  
**Fit:** technical B2B, research, documentation, data products.  
**Avoid:** hiding information required for expert evaluation.  
**Cost:** P0–P1.

### 21.5 Summary + Expandable Evidence
**Job:** preserve scanability while making source/evidence depth available.  
**Fit:** research, case evidence, methodology, long reports.  
**Avoid:** when the evidence itself is the primary content.  
**Cost:** P0–P1.

## 22. PF7 — VISUAL / COMPOSITION

These patterns translate an already-resolved hierarchy. They do not establish hierarchy by themselves.

### 22.1 Editorial Split
**Job:** create meaningful tension/relationship between text and media or two content roles.  
**Fit:** editorial, luxury, portfolio, narrative marketing.  
**Avoid:** when columns become equal-weight noise or mobile stacking destroys intended sequence.  
**Cost:** P0–P1.

### 22.2 Product Stage
**Job:** give one product/media object dominant attention with supporting explanation/actions.  
**Fit:** product launch, ecommerce hero, SaaS demonstration.  
**Avoid:** decorative mockup dominance when users need broader context first.  
**Cost:** P0–P1.

### 22.3 Modular System Grid
**Job:** express repeated categories/items with stable anatomy and variable content.  
**Fit:** commerce, resources, capabilities, portfolio indexes.  
**Avoid:** when every concept is forced into cards despite different semantic roles.  
**Cost:** P0.

### 22.4 Full-Bleed Chapter
**Job:** create a major narrative/emotional transition through dominant media or surface.  
**Fit:** luxury, hospitality, campaign, portfolio.  
**Avoid:** frequent use that turns every section into a climax or pushes critical content below atmospheric media.  
**Cost:** P0–P2 depending on media.

### 22.5 Dense Technical Editorial
**Job:** carry high information density with deliberate hierarchy and readable structure.  
**Fit:** research, technical B2B, documentation, data narratives.  
**Avoid:** sparse content where density is manufactured.  
**Cost:** P0.

### 22.6 Stable Grid + Controlled Break
**Job:** create authored visual distinction by breaking a known alignment system selectively.  
**Fit:** expressive editorial/portfolio/luxury.  
**Avoid:** when there is no perceivable base system, turning “grid breaking” into random placement.  
**Cost:** P0–P1.

## 23. PF8 — MEDIA / DEMONSTRATION

### 23.1 Product Demonstration
**Job:** show workflow, behavior, capability, or outcome that static claims cannot establish as efficiently.  
**Fit:** SaaS, products, tools, technical systems.  
**Avoid:** video/UI theater that proves only that software exists.  
**Cost:** P1–P2.  
**Integrity:** captions/transcript/alternative explanation as required; performance budget; user control when appropriate.

### 23.2 Annotated Product UI
**Job:** focus attention on the meaningful part of a complex interface.  
**Fit:** SaaS/B2B explanation.  
**Avoid:** microscopic full-dashboard screenshots or annotations too dense to read responsively.  
**Cost:** P0–P1.

### 23.3 Narrative Gallery
**Job:** build evidence/desire through a sequenced set of images/media.  
**Fit:** hospitality, ecommerce, portfolio, editorial.  
**Avoid:** carousels used to hide unrelated content or when essential items become undiscoverable.  
**Cost:** P1.

### 23.4 Before / After or State Comparison
**Job:** demonstrate meaningful transformation or difference.  
**Fit:** design, services, visual products, data states.  
**Avoid:** manipulated comparisons, inaccessible drag-only sliders, or false equivalence.  
**Cost:** P0–P1.

### 23.5 Diagram + Progressive Detail
**Job:** explain systems/relationships while keeping first view legible.  
**Fit:** technical products, research, process.  
**Avoid:** diagrams whose decorative complexity exceeds explanatory value.  
**Cost:** P1–P2.

### 23.6 Ambient Media Layer
**Job:** create atmosphere, place, emotion, or brand character without owning critical information.  
**Fit:** luxury, hospitality, culture, experience-first campaigns.  
**Avoid:** utility routes, slow-network critical paths, autoplay/audio coercion, or when atmosphere displaces decision information.  
**Cost:** P1–P3; File 09 when heavy/continuous.

## 24. PF9 — INTERACTION / STATE

### 24.1 Stateful Disclosure
**Job:** reveal secondary content with clear open/closed state and reversal.  
**Fit:** menus, accordions, inspectors, detail regions.  
**Avoid:** when content should simply remain visible.  
**Cost:** P0–P1.

### 24.2 Preview on Hover + Non-Hover Equivalent
**Job:** offer a fast preview without forcing navigation.  
**Fit:** pointer-rich portfolio/product lists where preview is supplementary.  
**Avoid:** essential content/function or touch-only assumptions.  
**Cost:** P1.  
**Responsive:** promote content, tap preview, or remove preview while preserving destination.

### 24.3 Spatial Detail Panel
**Job:** select an object/location while retaining spatial context.  
**Fit:** maps, property/hospitality exploration, data/spatial interfaces.  
**Avoid:** when narrow screens cannot preserve context or selection is not spatially meaningful.  
**Cost:** P2–P3 depending on renderer. File 09 when materially advanced.

### 24.4 Persistent Selection State
**Job:** reduce memory burden by showing active filter/tab/category/item.  
**Fit:** any multi-state interface.  
**Avoid:** almost never when state matters; the implementation can be visually subtle.  
**Cost:** P0–P1.

### 24.5 Direct Manipulation + Explicit Controls
**Job:** allow drag/spatial manipulation while preserving an alternate precise operation path.  
**Fit:** ordering, maps, sliders, canvases, comparisons.  
**Avoid:** when drag is decorative or the alternate controls are missing.  
**Cost:** P1–P3. File 09 for complex systems.

### 24.6 Async Action Feedback
**Job:** expose loading/progress/success/error/retry after asynchronous action.  
**Fit:** forms, uploads, checkout, generators, search, data actions.  
**Avoid:** silent state changes.  
**Cost:** P1.  
**Integrity:** async status must be perceivable programmatically where required.

## 25. PF10 — MOTION / SCROLL

Motion patterns require a named File 05 motion job. If no job exists, do not select one.

### 25.1 Hierarchical Reveal
**Job:** reinforce priority/order as content enters or state changes.  
**Fit:** limited section entrances, product explanation, staged disclosures.  
**Avoid:** reveal-everything choreography or delaying ordinary reading.  
**Cost:** P1.

### 25.2 Scroll Chapter Transition
**Job:** communicate chapter/progression relationship during scroll.  
**Fit:** narrative, product story, editorial chaptering.  
**Avoid:** routine content where scroll-linked effects tax reading.  
**Cost:** P1–P2; File 09 when bespoke or heavily pinned.

### 25.3 Pinned Comparison / Explanation
**Job:** preserve one reference while related content changes.  
**Fit:** feature explanation, visual comparison, data/story relationships.  
**Avoid:** short viewports, mobile trapping, content that works just as well in flow.  
**Cost:** P1–P2.

### 25.4 Route Continuity
**Job:** preserve a useful sense of spatial/visual continuity between destinations.  
**Fit:** portfolios, product exploration, app-like navigation.  
**Avoid:** when every click pays cinematic delay or browser navigation becomes fragile.  
**Cost:** P1–P3. File 09 for substantial transition systems.

### 25.5 Progress-Coupled Demonstration
**Job:** map user-controlled progression to explanatory visual state.  
**Fit:** product mechanisms, data stories, spatial explanation.  
**Avoid:** when reading speed becomes hostage to animation or reduced-motion equivalent is weak.  
**Cost:** P2–P3; File 09 when material.

## 26. PF11 — RESPONSIVE TRANSFORMATION

These are **transformation patterns**, not separate mobile aesthetics.

### 26.1 Persistent Rail → On-Demand Index
**Job:** preserve location/section access when viewport width cannot support a rail.  
**Fit:** deep documents/reference systems.  
**Cost:** P1.

### 26.2 Mega Menu → Drill-Down Menu
**Job:** preserve taxonomy while reducing simultaneous width demand.  
**Fit:** ecommerce/large ecosystems.  
**Cost:** P1.

### 26.3 Split Composition → Priority Stack
**Job:** preserve semantic priority when side-by-side geometry fails.  
**Fit:** text/media, proof/content, editorial splits.  
**Cost:** P0.

### 26.4 Comparison Grid → Controlled Horizontal / Attribute-First
**Job:** preserve comparison instead of destroying it by card stacking.  
**Fit:** plans/specifications/tables.  
**Cost:** P0–P1.

### 26.5 Hover Preview → Visible Context / Tap / Remove
**Job:** preserve meaning when hover disappears.  
**Fit:** any hover-enhanced desktop pattern.  
**Cost:** P0–P1.

### 26.6 Pinned Story → Flow Sequence
**Job:** preserve narrative/value when viewport height/input/performance makes pinning poor.  
**Fit:** narrow/short viewports.  
**Cost:** P1.

### 26.7 Cinematic Media → Poster / Alternate Crop / Short Edit
**Job:** preserve brand/content role while reducing cost or fitting portrait/narrow constraints.  
**Fit:** heavy image/video systems.  
**Cost:** P1, often content-production dependent.

## 27. PF12A — DOMAIN-SPECIFIC COMMERCE

### 27.1 Category → Filter → Product Grid
**Job:** progressive product discovery at catalog scale.  
**Fit:** ecommerce/marketplace.  
**Avoid:** tiny catalogs.  
**Cost:** P1–P2.

### 27.2 Product Media Stage + Decision Stack
**Job:** combine product inspection with price/options/confidence/action.  
**Fit:** physical/digital product detail.  
**Avoid:** media theater that separates decision information too far from product context.  
**Cost:** P1.

### 27.3 Sticky Purchase Summary
**Job:** retain selected variant/price/action during long PDP evaluation.  
**Fit:** complex PDPs.  
**Avoid:** short pages or mobile layouts where sticky UI crowds content.  
**Cost:** P1.

### 27.4 Variant Selector with Immediate State Confirmation
**Job:** make product choice visible and update dependent price/media/availability coherently.  
**Fit:** products with meaningful variants.  
**Avoid:** decorative pseudo-variants.  
**Cost:** P1–P2.

### 27.5 Cart Continuity
**Job:** preserve transaction state across discovery and navigation.  
**Fit:** commerce.  
**Cost:** P1–P2; business-state authority remains server-side per File 07.

## 28. PF12B — DOMAIN-SPECIFIC EDITORIAL / RESEARCH

### 28.1 Summary + Chapter Index
**Job:** give gist and navigation before deep content.  
**Fit:** long reports, research, documentation.  
**Cost:** P0.

### 28.2 Citation / Source Detail
**Job:** connect claims to evidence without overloading the reading line.  
**Fit:** research, journalism, institutional material.  
**Cost:** P0–P1.

### 28.3 Figure + Caption + Source
**Job:** keep visual evidence semantically attached to interpretation and provenance.  
**Fit:** editorial/research/data.  
**Cost:** P0.

### 28.4 Sticky / Local Table of Contents
**Job:** reduce orientation cost in deep documents.  
**Fit:** long-form reference.  
**Avoid:** short articles.  
**Cost:** P1; mobile may transform to Index.

### 28.5 Isolated Interactive Visualization
**Job:** add interactive data exploration without converting the whole article into an application.  
**Fit:** research/data storytelling.  
**Cost:** P2–P3; File 09 when materially complex.

## 29. PF12C — DOMAIN-SPECIFIC PORTFOLIO / AGENCY

### 29.1 Work Index + Strong Project Routes
**Job:** make work discoverable and directly addressable.  
**Fit:** portfolios/agencies.  
**Cost:** P0.

### 29.2 Project Preview + Detail Route
**Job:** allow fast browsing while preserving full case depth.  
**Fit:** visual portfolios.  
**Avoid:** hover-only discovery or previews that replace accessible project links.  
**Cost:** P1.

### 29.3 Case Study: Context → Work → Outcome / Learning
**Job:** support judgment beyond image galleries.  
**Fit:** design, development, strategy, creative services.  
**Avoid:** invented business outcomes or bloated process theater.  
**Cost:** P0–P1.

### 29.4 Capability Through Work Evidence
**Job:** demonstrate skill via relevant projects rather than generic capability claims.  
**Fit:** agency/portfolio.  
**Cost:** P0.

## 30. PF12D — DOMAIN-SPECIFIC DATA / VISUALIZATION

### 30.1 Overview → Filter → Detail
**Job:** progressively enter complex data.  
**Fit:** dashboards, research/data products.  
**Cost:** P1–P2.

### 30.2 Linked View + Detail Panel
**Job:** preserve context while inspecting a selected data object.  
**Fit:** maps, networks, plots, spatial data.  
**Cost:** P2–P3; File 09 when custom rendering or high interaction complexity.

### 30.3 Table Fallback / Parallel Representation
**Job:** preserve access to underlying information when visual encoding is insufficient or inaccessible.  
**Fit:** meaningful charts/maps/data.  
**Cost:** P0–P1; may be required by File 08 depending on content/function.

### 30.4 Progressive Metric Density
**Job:** show essential metrics first, then allow expert depth.  
**Fit:** dashboards/research.  
**Cost:** P1.

## 31. PF12E — DOMAIN-SPECIFIC BRAND / GUIDELINES

### 31.1 Stable Category Rail + Example Canvas
**Job:** pair reference navigation with rich demonstrations.  
**Fit:** brand/design systems.  
**Cost:** P1.

### 31.2 Rule → Example → Exception
**Job:** make guidelines operational rather than ornamental.  
**Fit:** design systems, brand standards, documentation.  
**Cost:** P0.

### 31.3 Reference Token / Spec Block
**Job:** expose exact implementation values near contextual examples.  
**Fit:** technical brand/design systems.  
**Cost:** P0–P1.

## 32. PF13 — EXPERIENTIAL / ADVANCED

These are not “premium patterns.” They are expensive solution classes. **P3 patterns require File 09 approval.**

### 32.1 Spatial Navigator + Named Destination Fallback
**Job:** make spatial exploration itself create value while preserving conventional access.  
**Fit:** place, map, culture, immersive portfolio, spatial product.  
**Reject:** if spatiality adds novelty but not understanding/emotion/function.  
**Cost:** P3.  
**Requirements:** named routes, home/reset, keyboard/single-pointer path, reduced-motion strategy, responsive replacement, renderer failure fallback.

### 32.2 Horizontal Narrative with Explicit Orientation
**Job:** use horizontal progression because the content relationship is genuinely horizontal/sequential/spatial.  
**Fit:** timelines, galleries, spatial stories, selected experience-first narratives.  
**Reject:** generic landing-page novelty.  
**Cost:** P2–P3.  
**Requirements:** scroll agency, progress/orientation, vertical/narrow alternative, no trapped wheel/touch behavior.

### 32.3 WebGL / 3D Scene + DOM Semantic Layer
**Job:** create spatial/product/environmental value unavailable through ordinary media.  
**Fit:** 3D product understanding, experiential world, spatial visualization.  
**Reject:** decorative 3D that competes with content.  
**Cost:** P3.  
**Requirements:** File 09 approval, File 08 budgets, DOM navigation/content, reduced-motion/capability fallback, failure containment.

### 32.4 Cinematic Pinned Narrative
**Job:** tightly coordinate copy and visual state when the synchronization itself explains or emotionally carries the story.  
**Fit:** selected product explanations, campaigns, experiential narratives.  
**Reject:** when normal flow preserves the value.  
**Cost:** P3.  
**Requirements:** short-viewport/mobile alternative, user-controlled pace, reduced-motion path, performance budget.

### 32.5 Bespoke Route Transition System
**Job:** communicate continuity/world model between destinations.  
**Fit:** rare experience-first or portfolio systems where transition meaning is material.  
**Reject:** prestige animation on routine navigation.  
**Cost:** P3.  
**Requirements:** URL/history integrity, interruptibility, failure-safe navigation, no transition hostage.

### 32.6 Functional Custom Cursor
**Job:** add contextual interaction information not otherwise conveyed as efficiently.  
**Fit:** selected spatial/media surfaces.  
**Reject:** decorative cursor replacement or sole affordance.  
**Cost:** P2–P3.  
**Requirements:** pointer-specific enhancement, touch removal/replacement, native pointer safety.

### 32.7 Real-Wait Loader / Preloader
**Job:** communicate unavoidable initialization for a genuinely gated subsystem.  
**Fit:** renderer/application initialization that cannot expose useful content earlier.  
**Reject:** fake branded waiting or delaying content for theater.  
**Cost:** P2–P3.  
**Requirements:** real readiness state, useful feedback/progress where measurable, repeat-visit strategy, failure/retry.

### 32.8 Immersive Ambient Video / Audio Environment
**Job:** make atmosphere/place/sound itself part of the core experience.  
**Fit:** rare cultural, hospitality, campaign, artistic contexts.  
**Reject:** conversion/utility routes or when media is merely expensive wallpaper.  
**Cost:** P3.  
**Requirements:** user control, autoplay/accessibility rules, reduced-motion/sound-safe alternatives, bandwidth/device strategy.

## 33. CAROUSEL DECISION RULE

Carousel is neither banned nor preferred.

Use when:
- items are genuinely peer content;
- sequential browsing is acceptable;
- not all items require simultaneous comparison;
- controls, current position, keyboard/touch, and responsive behavior are robust;
- important content is not effectively hidden by default.

Avoid when:
- users need cross-item comparison;
- every slide contains critical information;
- the carousel exists mainly to fit more stakeholder content above the fold;
- autoplay steals attention or reading control;
- a grid/list would be simpler and equally valuable.

## 34. CARD DECISION RULE

Card is a grouping pattern, not a default page atom.

Use when the grouped unit has a coherent identity/action and repeated anatomy helps scanning/comparison.

Avoid when:
- unrelated content is forced into rectangles;
- cards add borders/surfaces without meaningful grouping;
- nested cards destroy hierarchy;
- every section becomes the same component grammar.

## 35. STICKY / FIXED DECISION RULE

Use sticky/fixed behavior when persistent context, comparison, navigation, or action materially reduces user burden.

Avoid when it:
- steals too much viewport;
- obscures focus/content;
- traps short viewports;
- creates overlapping mobile chrome;
- persists merely because “premium sites have sticky elements.”

File 08 focus-not-obscured and reflow requirements remain hard constraints.

## 36. MINIMAL / MAXIMAL DECISION RULE

Minimalism and maximalism are not patterns in this library because they describe broad aesthetic strategies rather than reusable solutions to one recurring job.

If used, they must emerge from File 04 art direction, information density, brand expression, and project purpose.

“Premium = minimal” and “distinctive = maximal” are both rejected.

## 37. TYPOGRAPHIC STYLE DECISION RULE

Serif, sans, grotesk, monospace, giant display type, tiny editorial labels, outlined type, variable fonts, and similar techniques belong to File 04 typography/art direction.

Do not select them from File 10 as quality signals.

The pattern library may select a **typographic hierarchy relationship**, but not elevate a font genre into a project strategy.

## 38. AESTHETIC EFFECT DECISION RULE

Gradients, grain, glow, blur, glass, shadows, rounded corners, borders, textures, dark mode, and similar effects are File 04 material/color/surface decisions.

They are not standalone world-class patterns.

Use only when the visual system assigns them a job and recurrence logic.

## 39. FRAMEWORK / LIBRARY NEUTRALITY

Patterns describe solution behavior, not implementation brands.

Do not define patterns as “GSAP section,” “React carousel,” “Three.js hero,” or “Framer Motion reveal.”

File 07 chooses implementation technology after the pattern/job is resolved.

A library may help implement a pattern, but it is not the pattern.

## 40. NATIVE-PRIMITIVE PREFERENCE

When a native semantic primitive solves the job completely and reliably, start there.

Examples:
- actual links for navigation;
- buttons for actions;
- native forms;
- `<details>/<summary>` where disclosure semantics fit;
- `<dialog>` where modal dialog semantics fit;
- tables for real tabular comparison.

Custom patterns inherit the semantic, focus, keyboard, resilience, and maintenance work that native primitives already solve.

## 41. RESPONSIVE TRANSFORMATION CONTRACT

Every consequential pattern must answer:

```text
PATTERN:
CORE VALUE:
WIDE STATE:
NARROW / CONSTRAINED STATE:
TRANSFORMATION: PRESERVE / RECOMPOSE / REORDER / REPLACE / COLLAPSE / SIMPLIFY / REMOVE
SOURCE-ORDER IMPLICATION:
HOVER / POINTER IMPLICATION:
VIEWPORT-HEIGHT RISK:
MEDIA / CROP RISK:
VALUE PRESERVED:
```

Do not approve desktop-only patterns and delegate the real problem to “make it responsive later.”

## 42. ACCESSIBILITY / SEMANTIC CONTRACT

File 08 remains authoritative.

For any pattern with custom interaction, verify:
- native semantic equivalent considered first;
- correct link/button/control semantics;
- accessible name/role/state/value;
- keyboard operability;
- visible and unobscured focus;
- logical source/focus order;
- target/pointer/drag alternatives;
- no hover-only essential content;
- reflow/zoom behavior;
- reduced-motion path;
- media alternatives;
- async status;
- failure/recovery.

A pattern cannot be “approved visually” while these remain unknowable.

## 43. PERFORMANCE CONTRACT

Evaluate pattern cost against File 08 contextual budgets.

Ask:
- Does it add client JS/runtime?
- Does it delay LCP or primary content?
- Does it add main-thread work on critical interactions?
- Does it add media transfer or decode cost?
- Does it require continuous animation/rendering?
- Does it add third-party dependency?
- Does it load while hidden?
- Can it be conditional/lazy after user intent?
- Does it remain useful on slower devices/networks?

Do not select a high-cost pattern and later ask optimization to perform a miracle.

## 44. COMPLEXITY ROUTING

Route pattern selection to File 09 when:
- complexity class is P3;
- P2 cost is material across two or more dimensions;
- interaction is exploratory;
- advanced behavior touches navigation/content/conversion;
- multiple P2 patterns stack;
- failure blast radius reaches an important or critical path;
- File 08 constraints materially change viability;
- maintaining responsive/assistive equivalents becomes costly;
- stakeholder justification is primarily novelty/prestige.

File 09 may return KEEP, KEEP WITH CONDITIONS, VALIDATE, SIMPLIFY, REPLACE, or REMOVE. File 10 obeys that result.

## 45. PATTERN STACK TEST

After selection, record when complexity is nontrivial:

```text
SELECTED PATTERNS:
PRIMARY STRUCTURAL PATTERN:
NAVIGATION GRAMMAR:
DISCLOSURE GRAMMAR:
COMPARISON GRAMMAR:
MOTION GRAMMAR:
ADVANCED SYSTEMS:
DUPLICATED JOBS:
RESPONSIVE SUBSTITUTIONS:
ACCESSIBILITY SPECIAL CASES:
RUNTIME / MEDIA STACK:
THIRD-PARTIES:
FAILURE INTERACTIONS:
COHERENCE RISKS:
FILE 09 STACK REVIEW REQUIRED: YES / NO
```

This supplements File 09’s Complexity Stack Test; it does not replace it.

## 46. UPSTREAM ROUTING — WHEN NOT TO PICK A PATTERN

### Route to File 03 when:
- page role is unclear;
- section order is being guessed;
- user questions/decision states are unresolved;
- CTA readiness is unclear;
- proof requirements are unknown;
- taxonomy/navigation labels are weak.

### Route to File 04 when:
- the issue is visual hierarchy, art direction, typography, spacing, color, media style, or brand distinctiveness.

### Route to File 05 when:
- state, feedback, motion job, orientation debt, reversal, gesture behavior, or interaction grammar is unresolved.

### Route to File 06 when:
- the main question is transformation across width/height/input/capability.

### Route to File 07 when:
- the decision is framework, rendering mode, component architecture, CSS, state, JS responsibility, asset delivery, or implementation mechanism.

### Route to File 08 when:
- the issue is performance, accessibility, semantics, technical SEO, resilience, or acceptance integrity.

### Route to File 09 when:
- the pattern’s complexity must be justified.

Pattern selection begins only after the actual problem belongs here.

## 47. ARCHETYPE ADAPTATION — SAAS / B2B

Favor patterns that improve:
- proposition clarity;
- workflow/mechanism explanation;
- product demonstration;
- proof adjacency;
- implementation transparency;
- buyer-role depth;
- comparison;
- high-consideration decision support.

Useful families often include Outcome-Led Platform, Operational Workflow, High-Consideration Decision Ramp, Annotated Product UI, Claim + Adjacent Proof, Comparison Matrix, Progressive Technical Depth.

Use immersive/advanced patterns only when they uniquely demonstrate product value or strategic brand difference. High trust burden usually makes ambiguity expensive.

## 48. ARCHETYPE ADAPTATION — ECOMMERCE

Favor:
- product discovery;
- category/filter systems;
- product media inspection;
- clear variant state;
- comparison;
- risk reassurance near decision;
- cart/transaction continuity;
- responsive preservation of search/filter/purchase.

Editorial/immersive expression may support desirability but must not obscure product identity, price, variant, availability, policy, or purchase action.

## 49. ARCHETYPE ADAPTATION — LUXURY / HOSPITALITY

Favor:
- Experience-to-Utility;
- Full-Bleed Chapter;
- Narrative Gallery;
- editorial splits;
- sense-of-place media;
- restrained practical conversion patterns;
- clear availability/inquiry paths.

Atmosphere can carry more value here than in utility contexts, but practical information must emerge before it is required. Advanced media/motion must pass File 09 when material.

## 50. ARCHETYPE ADAPTATION — EDITORIAL / RESEARCH

Favor:
- Editorial Depth;
- Summary + Chapter Index;
- local TOC;
- citation/source detail;
- figure/caption/source;
- dense technical editorial;
- progressive technical/evidence depth;
- isolated interactive visualizations.

Do not flatten deep content into cards or accordions merely to look clean.

## 51. ARCHETYPE ADAPTATION — PORTFOLIO / AGENCY

Favor:
- work index + real project routes;
- project previews;
- case evidence narratives;
- capability through work;
- authored composition;
- selective expressive interaction.

The work must remain judgeable. Experimental presentation may demonstrate capability but should not hide project type, role, metadata, evidence, or contact.

## 52. ARCHETYPE ADAPTATION — BRAND / GUIDELINES

Favor:
- stable category navigation;
- rule → example → exception;
- example canvas;
- reference/spec blocks;
- strong persistent orientation;
- repeated visual anatomy.

Expression demonstrates the brand; reference retrieval determines whether the system is useful.

## 53. ARCHETYPE ADAPTATION — PUBLIC SERVICE / UTILITY

Favor:
- direct utility structures;
- task-oriented navigation;
- visible requirements/next steps;
- forms with robust recovery;
- native disclosure;
- search when information space is large;
- resilient document patterns.

Avoid novelty tax. Users did not arrive to admire the interface.

## 54. ARCHETYPE ADAPTATION — CAMPAIGN / LAUNCH

Favor:
- focused narrative sequence;
- strong product/idea stage;
- evidence appropriate to stakes;
- deliberate CTA timing;
- selective high-impact media/motion.

Campaign does not mean every section requires spectacle. Concentrate expression at moments that create memory, understanding, or desire.

## 55. ARCHETYPE ADAPTATION — DATA / VISUALIZATION

Favor:
- overview → filter → detail;
- persistent selection/state;
- linked view + detail panel;
- table/parallel representation where needed;
- progressive metric density;
- explicit orientation and reset.

Custom rendering/drag/spatial patterns often require File 09 and strong File 08 treatment.

## 56. ARCHETYPE ADAPTATION — EXPERIENCE-FIRST / WEBGL

Favor advanced patterns only after the core value mechanism is explicit.

Typical approved stack may include:
- DOM semantic/navigation layer;
- exploratory/spatial surface;
- conventional destination fallback;
- capability-sensitive rendering;
- reduced-motion equivalent;
- named routes/objects;
- failure containment;
- explicit exit/home/reset;
- complexity concentration.

The renderer should not become the only place where navigation, body copy, forms, or primary conversion exist.

## 57. PATTERN SELECTION BY STRATEGY VECTOR

Use the Vector as a constraint profile, not a pattern vending machine.

### Buyer Commitment 2 / Trust Burden 2
Prefer patterns increasing proof, transparency, fit, comparison, implementation clarity, and action confidence. Be cautious with ambiguity around conversion.

### Information Complexity 2
Prefer orientation, taxonomy, progressive disclosure, filters/search, comparison structures, repeated anatomy, and chaptering. Do not respond with arbitrary simplification.

### Experiential Intensity 2
Allow more narrative/media/spatial patterns when they carry core value. Still protect task completion and integrity.

### Interaction Novelty 2
Require explicit orientation, reversal, fallback, responsive transformation, File 08 review, and File 09 approval for material complexity.

### Brand Expression 2
Expression may vary strongly through File 04; preserve stable interaction/semantic anchors from G3/G4.

## 58. PAGE-ROLE ADAPTATION

### ORIENT
Favor category clarity, navigation, overview, proposition, chapter/index patterns.

### EXPLAIN
Favor workflow, product demonstration, diagrams, progressive detail.

### EXPLORE
Favor filter/browse, galleries, spatial/detail patterns when justified.

### COMPARE
Favor matrices, attribute-first structures, persistent comparison context.

### PROVE
Favor claim-proof adjacency, case evidence, process/product evidence.

### CONVERT
Favor action clarity, risk reassurance, process transparency, minimal novelty tax.

### TRANSACT
Favor predictable state, error recovery, transaction continuity, low interaction tax.

### SUPPORT / USE
Favor retrieval, state clarity, native control semantics, resilience, search/navigation efficiency.

## 59. OVERUSE SIGNALS

A pattern is likely overused when:
- it appears because every section needs “something interesting”;
- repeated instances have no semantic differences;
- the page rhythm becomes monotonous or theatrical;
- users repeatedly pay the same interaction/motion tax;
- the pattern consumes more attention than the content it serves;
- responsive substitutions multiply;
- content is bent to fit the component;
- the implementation API requires increasingly strange exceptions;
- removal improves clarity without meaningful loss.

Overuse is not automatically an anti-pattern diagnosis. File 11 performs the fuller diagnosis.

## 60. WARNING FLAGS FOR FILE 11

Route to `11_ANTI_PATTERN_LIBRARY.md` during audit when you observe:
- Template-First Architecture;
- Everything Is a Card;
- Generic Premium;
- CTA Spam;
- Proof Graveyard;
- Accordion Everything;
- Hover Dependency;
- Motion Soup;
- Scroll Hijacking;
- Loader Theater;
- Pinned Prison;
- Mobile Spectacle Preservation;
- Framework Cargo Cult;
- Canvas Everything;
- Third-Party Hostage;
- Accessibility-Retrofit DOM;
- Breakpoint Patchwork;
- Pattern Stack incoherence.

File 10 flags possible misuse. File 11 diagnoses causes and remedies.

## 61. PROJECT_WEBSITE_SPEC WRITEBACK

Do not record every ordinary component pattern. Write back only consequential choices that constrain downstream work.

When relevant update:

```text
PATTERN DECISIONS

Primary Page / Narrative Pattern:
Navigation / Orientation Pattern:
Comparison / Choice Pattern:
Disclosure / Density Pattern:
Proof / Trust Pattern:
Conversion / Action Pattern:
Media / Demonstration Pattern:
Interaction / State Pattern:
Motion / Scroll Pattern:
Responsive Transformation Pattern:
Domain-Specific Patterns:
Advanced / Experiential Patterns:
File 09 Approval / Conditions:
Rejected Alternatives:
Pattern Stack Risks:
Required Fallbacks:
Known Exceptions:
```

If selection changes an upstream strategy/design/system decision, update that upstream section rather than hiding the change here.

## 62. HANDOFF TO FILE 11

Provide File 11 with:
- selected pattern portfolio;
- repeated pattern grammars;
- rejected alternatives where useful;
- known complexity stack;
- unresolved overuse/warning flags;
- responsive substitutions;
- special accessibility/performance conditions;
- places where implementation may have drifted from the selected pattern’s intended job.

File 11 should diagnose why weak patterns fail, not merely list disliked aesthetics.

## 63. HANDOFF TO FILE 12

File 12 uses pattern decisions as implementation inputs after upstream strategy/design/engineering/integrity decisions are approved.

Patterns should enter production sequencing as resolved choices, not become a parallel design process during coding.

## 64. PATTERN LIBRARY ACCEPTANCE GATE

PASS only when:
- authority boundary is explicit;
- patterns are organized by job rather than trend;
- pattern selection occurs after upstream decisions;
- fit and rejection criteria are explicit;
- Strategy Vector and page-role adaptation are represented;
- structural, navigation, conversion, proof, comparison, disclosure, visual, media, interaction, motion, responsive, domain-specific, and experiential families are covered;
- advanced patterns route through File 09;
- semantics/accessibility/performance/responsive conditions are embedded;
- native primitives remain preferred when sufficient;
- pattern stacking/cumulative complexity is addressed;
- project-type adaptations cover the required archetypes;
- aesthetic techniques are not elevated into quality rules;
- framework neutrality is preserved;
- `PROJECT_WEBSITE_SPEC` writeback is proportionate;
- handoff to File 11 is clean.

## 65. DIAGNOSTIC TESTS

### Job Test
Can the pattern’s job be stated without aesthetic adjectives?

### Upstream Test
Which approved project decision does it implement?

### Removal Test
What meaningful value disappears if the pattern is removed?

### Simpler-Alternative Test
Does a materially simpler option preserve nearly all relevant value?

### Semantics Test
Is underlying meaning still obvious without visual/motion novelty?

### Reflow Test
What does the pattern become under narrow/short/zoomed conditions?

### Hover-Off Test
Does essential meaning/function survive without hover?

### Motion-Off Test
Does meaning survive reduced/no motion?

### Failure Test
What remains if media/JS/renderer/third party fails?

### Stack Test
What happens when all selected patterns coexist?

### 50th-Use Test
Would repeated interaction still feel helpful?

### Competitor-Swap Test
Is the pattern merely generic category styling, or does File 04 give it project-specific expression?

## 66. RED TEAM

Before approving the library or a pattern portfolio ask:
- Did we confuse precedent with proof?
- Did we select a pattern because an award-winning site used it?
- Did aesthetic preference override project purpose?
- Did a pattern quietly rewrite IA or narrative?
- Did the pattern become a universal rule?
- Are cards/carousels/accordions being used because they are convenient rather than appropriate?
- Are hover, drag, motion, or cursor carrying essential meaning?
- Is desktop spectacle producing mobile compromise?
- Are several P1/P2 patterns collectively creating P3 system complexity?
- Did we forget File 08 because the pattern looks familiar?
- Did advanced behavior bypass File 09?
- Are framework/library choices being mistaken for UX patterns?
- Are we recording so much metadata that the library costs more context than it saves?
- Does the portfolio preserve G4 consistency without sameness?
- Would a simpler pattern portfolio preserve the same project value?

## 67. TOKEN-EFFICIENCY RULE

The full library should not be loaded merely to decorate a page.

In ordinary use:
1. identify the current job/family;
2. retrieve only the relevant pattern family if possible;
3. use the Compact Pattern Record;
4. escalate to Extended Record only for consequential choices;
5. route advanced complexity to File 09;
6. write only consequential selections to `PROJECT_WEBSITE_SPEC`.

The library succeeds partly by preventing repeated reinvention without forcing ChatGPT to recite the entire design system.

## 68. OPERATIONAL WORKFLOW

`PROJECT_WEBSITE_SPEC -> identify implementation job -> choose relevant pattern family -> simplest credible options -> fit/rejection check -> responsive + File 08 integrity check -> File 09 if triggered -> pattern-stack check -> select/adapt/reject/validate -> consequential writeback -> implementation -> verification -> File 11 during diagnosis/audit`

## 69. SUCCESS STANDARD

This module succeeds when patterns accelerate execution **without becoming doctrine**; selection begins from a real project problem; familiar semantics remain underneath expressive presentation; advanced patterns earn their cost; responsive/accessibility/performance consequences are visible before implementation; multiple patterns compose into one coherent system; and teams can reuse proven solution shapes without turning the Website OS into an Awwwards imitation engine, component catalog, or style trend archive.

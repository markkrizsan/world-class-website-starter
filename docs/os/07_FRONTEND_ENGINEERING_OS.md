# 07 — FRONT-END ENGINEERING OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A3  
**Dependencies:** `01`–`06`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC`  
**Hands Off To:** `08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md`; `09_COMPLEXITY_ROI_OS.md` when relevant  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Determine how approved strategic, visual, behavioral, and responsive systems are encoded into resilient production architecture without silently redesigning them.

Governs semantic structure, DOM/source order, component architecture, state architecture, tokens, CSS/cascade/custom properties, layout, Grid/Flexbox/media/container queries, logical properties, fluid sizing, responsive implementation, JavaScript responsibility, rendering architecture, static/server/client/hybrid delivery, framework/Web Components decisions, progressive enhancement, forms/navigation/async states, motion implementation, DOM vs canvas/WebGL, assets, images/video/fonts/SVG, dependencies, failure containment, maintainability, scalability, graceful degradation.

## 2. OPERATING PREMISE

Engineering is not a second design phase. Encode the resolved system while improving resilience, semantics, maintainability, performance potential, accessibility potential, reuse, clarity, and testability.

If engineering reveals an upstream design is unreasonable, identify the conflict, explain cost/risk, route upstream/File 09, resolve, update `PROJECT_WEBSITE_SPEC`. Never silently substitute another design.

## 3. LEAST POWERFUL SUFFICIENT TECHNOLOGY

Under G6:

> Use the least powerful technology that completely and reliably solves the actual problem.

This is not vanilla ideology. Frameworks, JavaScript, or advanced rendering are justified when requirements justify them.

### Escalation ladder
`Semantic HTML -> CSS -> Native Interactive Primitives -> Small Client JS -> Component/Application Architecture -> Specialized Interaction Library -> Canvas/WebGL/Advanced Rendering`

Escalate only when lower layers cannot solve cleanly.

## 4. ARCHITECTURE DECISION RECORD

```text
PROJECT TYPE:
CONTENT DYNAMICS: Static / Periodic / Request-Time / Realtime
USER-SPECIFIC CONTENT: None / Limited / Extensive
INTERACTION COMPLEXITY: Low / Medium / High
STATE COMPLEXITY: Low / Medium / High
ROUTING COMPLEXITY: Low / Medium / High
SEO / INITIAL HTML IMPORTANCE: Low / Medium / High
OFFLINE / INSTALLABLE NEEDS:
RENDERING COMPLEXITY: DOM / Mixed / Canvas-WebGL
CMS / DATA SOURCES:
TEAM / MAINTAINER SKILLS:
HOSTING CONSTRAINTS:
EXPECTED LIFESPAN:
EXPECTED SCALE:
RECOMMENDED ARCHITECTURE:
WHY:
REJECTED ALTERNATIVES:
COMPLEXITY ROI REQUIRED: YES / NO
```

## 5. RENDERING ARCHITECTURE

Rendering modes are tools and may coexist.

### Static Generation
Use when content is knowable before request time, rebuild cadence is acceptable, user-specific response generation is unnecessary, simple delivery is valuable. Strong fit: marketing, portfolio, docs, editorial, campaigns.

### Server-Side Rendering
Use when initial HTML depends materially on request context, auth/personalization/current data/server computation, or meaningful initial HTML is important.

### Client-Side Rendering
Use when the interface is highly stateful and browser-side interaction/data after initial load dominates. Do not default simple documents/marketing pages to pure CSR.

### Hybrid Rendering
Combine modes by need: static/server documents + interactive widgets, SSR shell + hydrated regions, static marketing + authenticated app, server-rendered product + client variant/cart state.

### Interactive-Island Principle
Ship interactivity where interactivity exists. Do not make static paragraphs participate in app runtime because one widget needs JavaScript.

## 6. FRAMEWORK DECISION

Framework justified when it materially improves reusable interactive components, complex state, routing, server/client coordination, data loading, build architecture, large-team consistency, lifecycle.

Not justified merely by popularity or developer preference.

Evaluate:
- rendering modes
- client JS cost
- routing
- data/server integration
- component model
- state needs
- accessibility compatibility
- deployment/hosting
- build complexity
- ecosystem/library fit
- team expertise
- testing
- upgrade path
- maintenance
- lock-in/migration
- CMS/content integration
- motion/rendering fit

Cargo-cult test: what capability becomes meaningfully harder without it?

## 7. WEB COMPONENTS

Consider when cross-framework reuse, embedded widgets, standards-based encapsulation, or long-lived framework independence matters.

Do not use automatically; Shadow DOM may complicate theming, testing, integration, and accessibility debugging.

## 8. SEMANTIC DOCUMENT ARCHITECTURE

DOM describes meaning before presentation.

Use appropriate elements for headings, paragraphs, lists, nav, main, sections/articles, buttons, links, forms, tables, figures, dialogs, disclosures.

### Element responsibility
- `<a>` navigates to a destination.
- `<button>` performs an action/state change.
- `<nav>` meaningful navigation groups.
- `<main>` primary page content.
- `<article>` independently meaningful content where appropriate.
- `<section>` thematic grouping when semantically meaningful.
- `<ul>/<ol>` actual lists.
- `<table>` real tabular relationships.

Do not choose HTML by default browser styling.

### Heading structure
Semantic hierarchy, not typography. File 04 styles it.

### Source order
DOM order represents meaningful reading/interaction sequence. Responsive visual rearrangement must not corrupt reading/focus meaning.

### Div soup test
Replace generic wrappers with semantic elements when meaning/behavior exists. `<div>` remains appropriate when no semantic element fits.

## 9. COMPONENT ARCHITECTURE

Components represent stable responsibilities, not arbitrary DOM fragments.

A useful component often has reusable behavior, structure, semantic role, styling contract, state, composition role, or repeated system responsibility.

### Levels
- Native Primitive
- System Primitive
- Component
- Composite
- Section/Feature
- Experience Subsystem

Not every level needs a framework component.

### Component-boundary test
Extract when behavior/structure repeats meaningfully, independent testing is valuable, interface is stable, unit appears in materially different contexts, or isolation improves maintainability.

Avoid extraction when markup is one-off/simple, abstraction adds more configuration than clarity, or variants are unrelated.

### False reuse
Do not force unrelated content through mega-components because both have heading/text/image/button. Reuse primitives and compose.

Avoid `<UniversalSection variant="17">` architecture.

### Component APIs
Expose intent, not incidental implementation details. Avoid escape-hatch APIs larger than the component itself.

## 10. DESIGN TOKENS

File 04/05 define decisions; File 07 encodes reusable roles.

Possible layers:
- Reference/primitive
- Semantic
- Component aliases only when meaningful

Families when needed:
- typography
- spacing
- color
- layout
- surface
- radius
- border
- shadow
- motion
- layers/z-index
- control sizing

Token-bloat test: suspicious if used once, page-named, replacing a literal without reuse/semantic value, or adding excessive alias depth.

## 11. CSS CUSTOM PROPERTIES

Use for reusable values, themes, inherited contextual values, component configuration, dynamic state-driven styling. Not every property needs a variable.

Consider registered properties when typing/inheritance/animation behavior genuinely helps.

## 12. CSS ARCHITECTURE

CSS should make predictable where a style comes from, what overrides it, and how changes propagate.

### Cascade strategy
Use an explicit project model, e.g. reset/base/theme/components/utilities/overrides. Exact layers are project-dependent.

### Specificity discipline
Prefer low/moderate specificity, predictable selectors, local scope, intentional cascade. Avoid IDs for ordinary styling, deep descendant chains, selector wars, repeated `!important`.

### Nesting
Use when it reflects genuine ownership; avoid DOM-mirroring selector trees and accidental specificity.

### Logical properties
Prefer flow-relative properties when they improve internationalization/bidirectional/responsive reuse. Use physical properties when physical positioning is genuinely intended.

## 13. LAYOUT TECHNOLOGY

Choose relationship-appropriate primitives:
- Normal Flow — default when it already expresses content.
- Flexbox — primarily one-dimensional alignment/distribution.
- Grid — two-dimensional tracks/relationships.
- Absolute positioning — genuine layering/positioned effects, not primary dynamic document architecture.
- Canvas/WebGL — rendering workloads inappropriate for DOM/CSS.

Absolute-position fragility: dynamic body copy/page sections should not depend on fixed coordinates.

## 14. MEDIA / CONTAINER / FEATURE QUERIES

Media queries implement environment/viewport/input/user-preference conditions defined by File 06.

Container queries when component behavior depends on local available space rather than viewport.

Feature queries (`@supports`) when enhancement depends on actual capability. Prefer capability detection to browser sniffing.

Do not invent engineering-only breakpoints to patch badly structured CSS without updating File 06.

## 15. FLUID SIZING / UTILITIES

Use fluid interpolation when File 04/06 says a relationship should scale smoothly. Some values should remain stable until a breakpoint transformation.

Utilities can support simple recurring responsibilities such as visually-hidden, stack, cluster, flow, alignment, container. Avoid utility explosion that bypasses the design system.

## 16. RESPONSIVE IMPLEMENTATION

Implement File 06's explicit actions:
- PRESERVE
- RECOMPOSE
- REORDER
- REPLACE
- COLLAPSE
- SIMPLIFY
- REMOVE

Responsive behavior should not emerge accidentally from flex-wrap.

Source-order safety is a hard constraint where sequence affects meaning.

## 17. JAVASCRIPT RESPONSIBILITY

Use JS for behavior/state HTML/CSS cannot adequately provide: application state, data fetching, async workflows, complex coordination, navigation enhancement, nontrivial interaction, programmatic motion, canvas/WebGL, business logic.

### HTML before JS
Check native controls/disclosure/dialog/forms/links/buttons first.

### CSS before JS
Check selectors, state pseudo-classes, media/container/feature queries, transitions/animations before JS-driven layout/visibility.

### JS should orchestrate, not micromanage
Prefer JS for semantic state/business logic; CSS for layout/presentation when feasible. Geometry-driven interaction/canvas/physics are legitimate exceptions.

## 18. STATE ARCHITECTURE

Classify:
- Local UI State
- URL/Navigation State
- Server/Remote State
- Form State
- Session/Persistent State
- Derived State

### Single source of truth
Avoid independent unsynchronized copies in DOM attributes, component state, URL, CSS classes, global store.

### URL as state
Use when bookmark/share/history/restoration/direct linking are valuable.

### Boolean explosion
Use explicit state models when mutually exclusive complexity warrants it.

### State transition table
```text
CURRENT STATE:
EVENT:
NEXT STATE:
SIDE EFFECT:
VISIBLE FEEDBACK:
RECOVERY:
```

## 19. FORMS

Start with semantic native form architecture: `<form>`, correct input types, `<label>`, `<fieldset>`, `<legend>`, appropriate buttons, browser validation primitives where useful.

Client validation improves feedback but never replaces authoritative server validation.

Model form states: idle, editing, invalid, submitting, success, server error, network error. Prevent double submission and silent failure.

## 20. NAVIGATION / DIALOG / DISCLOSURE IMPLEMENTATION

Navigation to real destinations remains actual links with meaningful URLs/history.

Use native `<dialog>` where it fits; custom versions inherit focus/dismissal/labeling burden.

Use native disclosure where semantics/behavior fit; custom implementations must preserve robust keyboard/semantic behavior.

## 21. PROGRESSIVE ENHANCEMENT

Distinguish:
- CORE — required content/function
- ENHANCEMENT — improves experience but should fail safely
- EXPERIMENTAL/OPTIONAL — high-complexity behavior whose failure should not destroy core tasks where feasible

Do not demand every JavaScript-native app fully work without JS. Apply proportionate resilience.

### Resilience tiers
- RES-0 Document Resilience
- RES-1 Action Resilience
- RES-2 Enhancement Resilience
- RES-3 Subsystem Containment

Isolate high-risk systems such as renderer, third-party widgets, maps, recommendation engines, chats, media galleries so failures do not unnecessarily erase navigation/copy/conversion.

## 22. THIRD-PARTY DEPENDENCIES

Every substantial dependency should justify capability, runtime/server cost, maintenance, privacy/security implications, failure risk, lock-in, accessibility/performance risk, and removal cost.

Dependency record:
```text
DEPENDENCY:
PURPOSE:
CAPABILITY GAIN:
NATIVE/SMALLER ALTERNATIVE:
CLIENT COST:
SERVER COST:
MAINTENANCE:
LOCK-IN:
ACCESSIBILITY RISK:
PERFORMANCE RISK:
FAILURE BEHAVIOR:
KEEP/REJECT:
```

No universal dependency-count budget. Evaluate system-wide cost.

## 23. MOTION IMPLEMENTATION

File 05 defines jobs/timing classes/easing/sequencing/reduced motion. File 07 selects implementation level:
- CSS transitions/animations
- programmatic browser animation APIs
- specialized motion library
- canvas/WebGL

Select from requirements, not prestige.

### Motion state ownership
Authoritative UI/app state drives visual transitions. Animation must not diverge from semantic state.

### Interruptibility
User-controlled interactions should reverse/interrupt/complete/skip where appropriate without corrupting state.

### Reduced motion
Architecture must make File 05's PRESERVE/REDUCE/REPLACE/REMOVE alternatives feasible without duplicating entire components.

## 24. DOM VS CANVAS / WEBGL

Use DOM/HTML for semantics, links, forms, selectable text, headings, accessible controls, ordinary nav/document flow.

Use canvas/WebGL for high-volume drawing, realtime scenes, 3D, particles, shaders, simulation, rendering workloads inappropriate for DOM.

For advanced creative experiences prefer a hybrid when practical:
- rendered layer: atmosphere/3D/spatial visuals
- DOM layer: navigation/text/metadata/controls

Do not render critical body copy/navigation/ordinary controls into canvas merely because possible.

Canvas/WebGL with material cross-system cost requires File 09.

## 25. ASSET ARCHITECTURE

Treat assets as a delivery system with source, transformation, formats, variants, dimensions, usage, preload/lazy policy, fallback, ownership.

### Images
Implement File 04/06 role/focal/crop/art direction with responsive image mechanisms such as `srcset`, `sizes`, `<picture>` where appropriate. Encode intrinsic dimensions/aspect where practical.

Choose formats by image characteristics, quality, transparency, browser/encoding pipeline, operational complexity. Modern formats can reduce bytes but are tools, not trophies.

### Video
Implement sources/poster/preload/controls/inline/fallback intentionally. Avoid preloading huge assets without strategic need.

### Fonts
Ship only required families/weights/styles/subsets. Choose static vs variable based on actual needs. Choose `font-display` deliberately. Subset only when localization/dynamic content requirements permit.

### Icons/SVG
Use a consistent strategy. SVG is appropriate for scalable interface graphics. Avoid enormous icon libraries for a handful of icons.

Distinguish decorative vs semantic graphics so File 08 can validate alternatives.

## 26. LAYER / Z-INDEX ARCHITECTURE

Use semantic layers such as base, raised, sticky, dropdown, overlay, modal, toast, critical. Create only needed levels.

If a new overlay requires adding another zero, investigate stacking contexts/ownership/portal architecture rather than inflating numbers.

## 27. CODE ORGANIZATION

Organize according to project size/ownership, e.g. primitives, components, composites/features, routes, utilities, styles/tokens, assets, data/services.

Do not create archaeology-grade directory structures.

Co-locate files that change together and belong to one unit; separate when reused independently or concerns/ownership differ.

Modules should have clear reasons to change. Avoid units simultaneously owning unrelated data fetching, rendering, validation, animation, analytics, and layout behavior.

Comments explain why/constraints/tradeoffs/workarounds, not obvious syntax.

## 28. FAILURE STATES / RESILIENCE

Async systems define initial/loading/success/empty/partial/error/retry/offline where relevant.

Test missing image/video/font/third-party/API/JS enhancement. Degrade intentionally rather than collapse mysteriously.

Optional third parties should not block critical rendering where avoidable. Critical third-party dependencies must be documented.

## 29. PROJECT-TYPE ADAPTATIONS

### Content/Marketing
Bias toward meaningful server/static HTML, semantics, low unnecessary client JS, progressive enhancement, reusable content components, responsive images, resilient nav/forms.

### SaaS/B2B
Marketing surface may use content-oriented rendering while authenticated app justifies richer state architecture. They can share tokens/components without identical runtime assumptions.

### Ecommerce
Prioritize rendering, navigation/search/filter, variants, cart, forms, transaction resilience, server-authoritative price/inventory/order. Client state improves UX but is not business authority.

### Editorial/Research
Prioritize semantic documents, headings, reading, citations, responsive figures, search/nav. Isolate interactive visualizations rather than turning whole article into client app.

### Portfolio/Creative
Preserve real project routes, semantic metadata, contact/nav, accessible DOM content; layer expressive enhancement on top.

### Experience-First/WebGL
Require File 09, renderer isolation, loading strategy, DOM semantic/navigation layer where practical, fallback, responsive renderer decisions, reduced-motion path, failure containment.

## 30. BROWSER / FEATURE SUPPORT

Define support from actual audience/product/org requirements/feature criticality. Do not support obsolete environments from fear or use brand-new features blindly.

Prefer capability detection/progressive enhancement/fallbacks to browser sniffing.

## 31. MAINTAINABILITY / SCALABILITY

Maintainability = future changes without disproportionate risk: local reasoning, ownership, limited side effects, consistent naming, predictable state, modular dependencies, documented constraints, stable tokens.

Do not architect for imaginary scale. A five-page site does not need an enterprise frontend platform; a large multi-team app should not be one enormous component.

### Engineering complexity
- E0 DOCUMENT
- E1 ENHANCED SITE
- E2 APPLICATION
- E3 CREATIVE APPLICATION
- E4 HIGH-COMPLEXITY PLATFORM

Architecture should match actual level.

## 32. CONDITIONAL RULES

- Native primitives before custom reimplementation when sufficient.
- JavaScript must earn client runtime.
- Componentize stable responsibilities, not every wrapper.
- Source order represents meaning.
- Components respond to container when container is the true constraint.
- Advanced rendering is isolated from critical document UI.
- Optional enhancement failure should fail locally where practical.
- State has one authoritative owner.
- Tokens encode system roles, not every literal.
- Dependencies require exit-cost assessment.

## 33. ANTI-PATTERNS

- Framework Cargo Cult
- JavaScript Everything
- Div Soup
- Component Confetti
- Universal Mega-Component
- Absolute-Position Page Architecture
- Specificity Arms Race
- Token Accounting
- Breakpoint Patchwork
- JS Responsive Duplication
- State Duplication
- Boolean State Soup
- Client-Only Document without need
- Hydrate Everything
- Accessibility-Retrofit DOM
- Canvas Everything
- Library Pile
- Animation Architecture Sprawl
- Z-index Inflation
- Fixed-Height Fragility
- Hidden-but-Still-Loaded
- Third-Party Hostage
- Premature Enterprise Architecture

## 34. DIAGNOSTIC TESTS

- Semantic Tree
- Button/Link
- Heading
- JS-off/enhancement-fail
- CSS-off reading/source-order diagnostic
- Component Boundary
- Duplication
- Mega-Component
- Token
- Specificity
- Continuous Resize
- Container Reuse
- Source Order
- Long Content
- State Race
- URL Restore
- Native Primitive
- Dependency
- Third-Party Failure
- Asset Missing
- Motion State
- No-Motion
- Canvas Failure
- Form Failure
- Fixed Height
- Layer/Stacking

## 35. PROJECT_WEBSITE_SPEC WRITEBACK

Update Engineering Complexity, Rendering Architecture, Framework/no-framework rationale, Semantic Architecture, Component Architecture, Token Architecture, CSS/Cascade, Responsive Implementation, JavaScript Responsibilities, State Architecture, Native Primitives, Motion Architecture, Advanced Rendering/Fallback/Complexity ROI, Assets, Dependencies, Progressive Enhancement, Resilience Tier, Failure Containment, Browser/Feature Support, Known Risks, Integrity Handoff.

## 36. HANDOFF TO FILE 08

Provide rendering mode, semantic outline, interactive inventory, native vs custom widgets, focus/source-order requirements, form inventory, async states, image/video/font/SVG architecture, client JS surface, third parties, motion/reduced-motion implementation plan, responsive/reflow implementation, canvas/WebGL, progressive-enhancement baseline, failure containment, known performance/accessibility/semantic/SEO risks.

## 37. HANDOFF TO FILE 09

Required for materially costly WebGL/canvas, animation/runtime libraries, bespoke scrolling, complex hydration, unusual navigation engines, duplicated device-specific experiences, substantial third-party runtime, or custom systems replacing strong native primitives.

Provide value created, why simpler capabilities are insufficient, UX/engineering/performance/accessibility/responsive/maintenance/lock-in costs, failure mode, simpler substitute, recommendation.

## 38. PRE-INTEGRITY ACCEPTANCE GATE

PASS when:
- architecture/rendering/framework have explicit justification;
- semantics and source order are appropriate;
- components reflect stable responsibilities;
- tokens/cascade/layout are maintainable;
- File 06 transformations have real implementation paths;
- JS/state responsibilities are explicit;
- forms/interactive primitives are robust;
- motion can honor state/reduced-motion contracts;
- assets have intentional delivery strategy;
- resilience baseline/failure containment defined;
- dependencies justified;
- File 09 requirement identified;
- `PROJECT_WEBSITE_SPEC` updated.

## 39. WORKFLOW

`PROJECT_WEBSITE_SPEC -> engineering level -> rendering model -> framework/no-framework -> semantic structure/source order -> components -> tokens -> CSS/layout -> responsive implementation -> JS responsibility -> state -> native/custom primitives -> forms/async -> motion architecture -> DOM vs canvas/WebGL -> assets -> dependencies -> progressive enhancement/resilience -> diagnostics -> File 09 if required -> PROJECT_WEBSITE_SPEC -> gate -> File 08`

## 40. RED TEAM

Ask why the framework is needed, whether HTML semantics are being recreated with divs, whether components have real responsibilities, whether tokens encode stable decisions, whether CSS cascade is explainable, whether breakpoints solve File 06 failures, whether JS is doing CSS/native work, where authoritative state lives, whether rendering mode is justified, whether animation systems conflict, what unique value canvas/WebGL adds, whether unused assets/fonts ship, whether dependency removal is costly, and what happens when the network/third party/enhancement fails.

## 41. SUCCESS STANDARD

This module succeeds when implementation follows the actual project rather than fashion; semantics carry document meaning; components/tokens/CSS/state have clear ownership; responsive intent is encoded deliberately; JS is used for actual behavior; rendering fits content/data needs; advanced rendering is isolated from critical semantics; assets/dependencies are intentional; optional failures are contained; and the codebase can evolve without fighting its own abstractions.

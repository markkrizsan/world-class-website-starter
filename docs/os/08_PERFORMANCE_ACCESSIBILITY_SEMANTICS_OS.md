# 08 — PERFORMANCE · ACCESSIBILITY · SEMANTICS OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A3 / HARD-GATE INTEGRITY LAYER  
**Dependencies:** `01`–`07`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC`  
**Hands Off To:** `09_COMPLEXITY_ROI_OS.md` when integrity changes the viability of advanced features; `13_SCORECARD_QA_REDTEAM_OS.md` for full acceptance QA  
**Relevant Laws:** G1, G2, G3, G4, G5, G6, G7  
**Default Accessibility Standard:** WCAG 2.2 AA unless a project explicitly requires another standard  
**Standards Baseline Validated:** 2026-09-12
**Last Validated:** 2026-09-12

## 1. PURPOSE

Protect the website’s technical and human integrity after strategy, design, interaction, responsive behavior, and engineering architecture have been defined.

This module governs:
- performance and real-user responsiveness;
- Core Web Vitals and performance measurement;
- loading, rendering, JavaScript, CSS, media, font, animation, canvas/WebGL, and third-party cost;
- semantic HTML integrity;
- WCAG 2.2 AA accessibility by default;
- keyboard, focus, navigation, forms, dialogs, disclosures, tables, pointer/touch, target sizing, dragging alternatives, reflow, contrast, motion, media alternatives, screen-reader semantics, names/descriptions, live status, language/direction;
- frontend technical SEO integrity: crawlability, indexability, canonicalization, metadata, structured data, URL/link semantics;
- progressive enhancement and graceful failure;
- launch-blocking integrity severity and acceptance gates.

This file is not optional polish. A site does not become world-class by being beautiful first and accessible, fast, semantic, crawlable, or resilient later.

## 2. OPERATING PREMISE

Integrity is the condition under which the intended experience remains usable, understandable, perceivable, operable, discoverable, and recoverable across real users and real conditions.

File 08 does **not** redesign upstream strategy or aesthetics merely to satisfy a checklist. It tests whether upstream decisions survive reality.

If an integrity requirement conflicts with an approved design or advanced feature:
1. identify the exact conflict;
2. determine whether the feature is essential to the project’s core value;
3. attempt the least destructive compliant/performance-safe implementation;
4. if cost or compromise becomes material, route to File 09;
5. update `PROJECT_WEBSITE_SPEC` with the decision, exception, and residual risk.

Do not silently waive integrity because a feature looks premium or because a framework/library makes compliance inconvenient.

## 3. REQUIREMENT CLASSES

Every rule in this module belongs to one of three classes.

### N — NORMATIVE REQUIREMENT
A hard integrity requirement when applicable.

Includes:
- the project’s required legal/organizational accessibility standard;
- WCAG 2.2 A/AA under the default OS target;
- valid core semantics required for accessible name/role/state/relationships;
- critical task operability;
- intentional crawl/index behavior;
- failure behavior necessary to preserve required content/function.

Known unmet applicable N requirements fail the File 08 acceptance gate.

### Q — QUALITY TARGET
A recommended target for world-class quality that may exceed minimum conformance or depend on project context.

Examples:
- current Core Web Vitals “good” thresholds;
- more generous control sizing than the minimum;
- stronger focus treatment than minimum AA requires;
- owned real-user monitoring;
- aggressive performance budgets;
- transcripts in addition to required captions where useful.

A Q target may be changed only through explicit project reasoning and `PROJECT_WEBSITE_SPEC` writeback.

### D — DIAGNOSTIC HEURISTIC
A signal, test, metric, audit, or smell that helps identify risk but is not itself proof of failure.

Examples:
- Lighthouse scores;
- HTML validator warnings;
- bundle-size warnings;
- heading-level skips;
- request counts;
- automated accessibility findings that require interpretation.

Never convert a D heuristic into a universal rule merely because a tool displays it in red.

Statements without an explicit N/Q/D marker are implementation guidance subordinate to the nearest classified requirement; they are not independent conformance criteria.

## 4. HARD-GATE PRINCIPLE

File 08 evaluates whether the built experience can actually be used and delivered as intended.

A design may be visually approved and still fail integrity because:
- the primary flow is not keyboard operable;
- focus disappears under sticky UI;
- a modal traps the user incorrectly;
- text becomes unreadable at zoom;
- hover owns essential information;
- drag is the only pointer operation;
- the renderer contains the only navigation;
- media or JavaScript makes the page unusably slow;
- a third party blocks the primary action;
- search engines receive an empty shell or accidental `noindex`;
- an API error erases the conversion path;
- the site only performs acceptably on the developer’s machine.

G7 applies: high-resolution coherence includes performance, accessibility, semantics, responsive behavior, and resilience.

## 5. INPUT CONTRACT FROM FILE 07

File 08 expects, when relevant:
- rendering mode;
- semantic outline and source order;
- interactive inventory;
- native vs custom widget decisions;
- focus requirements;
- form inventory and validation model;
- async/loading/error states;
- image/video/font/SVG architecture;
- client JavaScript surface;
- dependencies and third parties;
- motion/reduced-motion implementation plan;
- responsive/reflow implementation;
- canvas/WebGL architecture and fallback;
- progressive-enhancement baseline;
- failure containment;
- known performance/accessibility/semantic/SEO risks.

If these are materially unresolved, route back to File 07 rather than auditing an undefined implementation.

## 6. INTEGRITY PROFILE

Before testing, resolve the project-specific integrity profile.

```text
INTEGRITY PROFILE

ACCESSIBILITY TARGET: WCAG 2.2 AA / other
FORMAL LEGAL OR ORGANIZATIONAL STANDARD:
PUBLIC / BROAD-AUDIENCE BURDEN: Low / Medium / High
TRANSACTION / HIGH-STAKES FLOW: None / Limited / Material
PRIMARY DEVICE / NETWORK RISKS:
PRIMARY ASSISTIVE-TECH RISKS:
CORE PERFORMANCE-SENSITIVE ROUTES:
HEAVY MEDIA: None / Moderate / High
CLIENT JS COMPLEXITY: Low / Medium / High
THIRD-PARTY DEPENDENCE: Low / Medium / High
ADVANCED RENDERING: None / Canvas / WebGL / Mixed
INDEXABILITY IMPORTANCE: Low / Medium / High
FIELD DATA AVAILABLE: Yes / No
OWNED RUM AVAILABLE: Yes / No
COMPLEXITY ROI REQUIRED: Yes / No
KNOWN EXCEPTIONS:
```

Higher interaction novelty, public reach, transaction stakes, heavy media, trust burden, or rendering complexity increases the rigor of testing. It does not reduce the integrity baseline.

---

**DOMAIN: PERFORMANCE**

## 7. PERFORMANCE IS USER EXPERIENCE, NOT SCOREKEEPING

Performance exists to protect access to value, interaction responsiveness, visual stability, task completion, and confidence.

Do not optimize a number while making the product worse.

### Performance hierarchy
1. Critical content and task availability
2. Responsiveness to user input
3. Visual stability
4. Useful loading progression
5. Efficient resource delivery
6. Secondary polish and diagnostic scores

A 100 Lighthouse score is not a project objective unless the project brief explicitly requires that outcome.

## 8. CURRENT CORE WEB VITALS BASELINE

**Q — Current Core Web Vitals quality targets** are:
- **LCP — Largest Contentful Paint:** `≤ 2.5 s`
- **INP — Interaction to Next Paint:** `≤ 200 ms`
- **CLS — Cumulative Layout Shift:** `≤ 0.1`

Evaluate the **75th percentile** of real page visits, conventionally segmented across mobile and desktop.

Current “poor” boundaries for diagnosis are:
- LCP `> 4.0 s`
- INP `> 500 ms`
- CLS `> 0.25`

Do not replace these with older FID-based guidance.

## 9. FIELD DATA VS LAB DATA

### Field data
Field data describes actual users under actual devices, networks, caches, geography, behavior, banners, personalization, and runtime conditions.

Preferred sources:
- owned RUM when practical;
- CrUX / PageSpeed Insights field data;
- Search Console Core Web Vitals grouping where useful.

**Q:** when sufficient field data exists, real-user distributions govern performance judgment.

### Lab data
Lab data is controlled and reproducible enough for diagnosis, development, regression testing, and pre-launch comparison.

Useful tools include:
- Chrome DevTools Performance panel;
- Lighthouse / Lighthouse CI;
- WebPageTest or equivalent controlled tests;
- browser profiling and network/CPU simulation.

**D:** Lighthouse is a diagnostic instrument, not a substitute for field evidence.

INP is fundamentally a field metric. Lab tools may use proxies such as Total Blocking Time or scripted interaction traces; these diagnose likely causes but do not prove field INP.

### No-field-data rule
A new or low-traffic site without sufficient field data cannot truthfully claim a field Core Web Vitals pass.

Use representative lab budgets as a provisional launch gate, begin field monitoring where justified, and reevaluate after real data exists.

## 10. PERFORMANCE BUDGETS ARE CONTEXTUAL

Reject one universal website budget.

Set budgets from:
- project archetype;
- core value mechanism;
- audience/device/network distribution;
- route role;
- media necessity;
- interaction complexity;
- rendering architecture;
- third-party requirements;
- business stakes;
- existing field baseline;
- maintainability and production constraints.

### Performance Budget Record

```text
PAGE / ROUTE CLASS:
USER / DEVICE COHORT:
NETWORK ASSUMPTION:
PRIMARY TASK:
LCP CANDIDATE:
CRITICAL INTERACTIONS:

FIELD TARGETS:
LCP:
INP:
CLS:

DELIVERY BUDGETS:
HTML:
CSS:
CLIENT JS TRANSFER:
CLIENT JS EXECUTION / MAIN-THREAD:
IMAGE / HERO MEDIA:
VIDEO:
FONTS:
THIRD-PARTY:
REQUEST / CONNECTION CONSTRAINTS:
MEMORY / GPU IF RELEVANT:

LAB REGRESSION THRESHOLDS:
MEASUREMENT METHOD:
EXCEPTIONS / RATIONALE:
OWNER:
```

Numbers are project decisions, not doctrine. Their purpose is preventing regressions and forcing tradeoffs into the open.

## 11. LOADING STRATEGY

**N/Q depending on criticality:** load resources according to value and dependency, not markup order or convenience.

Classify resources:
- CRITICAL — required for primary content/task;
- EARLY — materially improves near-term experience;
- DEFERRED — useful after primary content/task;
- OPTIONAL — enhancement or secondary feature;
- CONDITIONAL — load only when capability, route, viewport, intent, or interaction justifies it.

Rules:
- do not lazy-load the actual LCP resource merely because “lazy loading is good”;
- avoid preloading assets without evidence they are needed early;
- prioritize critical above-the-fold media deliberately;
- do not fetch hidden desktop/mobile duplicates when one can be omitted;
- avoid loading optional subsystems before user intent when cost is material;
- preserve useful rendering progress rather than gate the entire page behind decorative loaders.

## 12. LCP INTEGRITY

For the likely LCP element inspect:
- server/TTFB delay;
- discovery delay;
- resource priority;
- image/video dimensions and source selection;
- render-blocking CSS/fonts;
- client rendering/hydration delay;
- unnecessary loader or transition delay.

**Q:** make the primary content discoverable and renderable as early as its project role permits.

A dramatic hero that arrives late because several visual effects initialize first has reversed the priority system.

## 13. INP / MAIN-THREAD INTEGRITY

Protect the interactions users actually perform.

Inspect:
- long JavaScript tasks;
- event-handler work;
- layout/style recalculation;
- synchronous data processing;
- hydration storms;
- oversized component rerenders;
- third-party listeners;
- animation work competing with input;
- DOM size/complexity where material.

Rules:
- split or defer non-urgent work;
- avoid doing expensive computation synchronously inside high-frequency events;
- schedule rendering and work so interaction feedback can paint promptly;
- treat primary conversion, navigation, filtering, cart, search, forms, and application controls as high-priority interaction paths;
- do not mask slow interaction behind animation.

## 14. CLS / VISUAL-STABILITY INTEGRITY

Prevent unexpected movement that changes what users are reading or targeting.

Common sources:
- images without dimensions/aspect reservation;
- ads/embeds/iframes without reserved space;
- dynamic injections above existing content;
- late font swaps with materially different metrics;
- banners/toolbars appearing without planned layout behavior;
- animation implemented through layout-changing properties without containment.

Rules:
- reserve space for predictable late content;
- encode intrinsic media dimensions/aspect where practical;
- introduce user-triggered changes deliberately;
- do not insert nonessential content above the user’s current reading position unexpectedly.

## 15. JAVASCRIPT COST

Client JavaScript must justify both capability and runtime cost.

Evaluate:
- transfer bytes;
- parse/compile cost;
- execution;
- hydration;
- memory;
- event listeners;
- rerender frequency;
- route duplication;
- long-task risk;
- low-end-device behavior.

**Q:** static or server-rendered content should not inherit application runtime merely because the project uses a framework.

**D:** bundle size alone is not enough. Small code can be expensive; large code can be deferred or rarely executed. Measure behavior.

## 16. CSS COST

CSS becomes material when it delays rendering, grows without ownership, forces expensive style/layout work, or ships large unused systems.

Inspect:
- render-blocking critical path;
- duplicated framework/theme CSS;
- unused legacy rules;
- selector complexity only when measurement shows cost or maintainability harm;
- layout thrashing caused by JS/CSS coordination;
- animation of layout-heavy properties where paint/composite alternatives preserve intent.

Do not sacrifice maintainable CSS architecture for microscopic byte wins unless evidence justifies it.

## 17. IMAGE PERFORMANCE

From File 04/06/07 preserve image role and art direction while delivering efficiently.

Rules:
- size assets near actual display need;
- provide responsive source selection where useful;
- use `<picture>` for true art direction or format/source differences, not ceremony;
- use `srcset`/`sizes` when responsive resolution selection matters;
- encode dimensions/aspect to reduce layout shift;
- lazy-load below-the-fold images when useful, but not blindly;
- avoid shipping high-resolution originals to small rendered slots;
- choose formats based on content, quality, pipeline, compatibility, and operational cost;
- do not destroy photographic quality merely to win a byte contest.

## 18. VIDEO PERFORMANCE

Classify video as informational, demonstrative, narrative, atmospheric, or decorative.

Rules:
- use an intentional poster;
- choose preload strategy deliberately;
- do not preload large video merely because it exists in the hero;
- consider shorter/alternate mobile edits when File 06 calls for them;
- prefer user-triggered loading for expensive nonessential video;
- ensure removal or failure of atmospheric video does not erase critical meaning;
- reserve dimensions to avoid shift;
- monitor decoder/GPU/device stress when video is persistent or layered.

## 19. FONT PERFORMANCE

Fonts are a brand and reading system, not collectible files.

Rules:
- ship only required families, styles, weights, and character coverage;
- choose variable vs static fonts from actual usage and file/runtime tradeoffs;
- subset only when localization/dynamic-content requirements remain safe;
- choose `font-display` deliberately;
- provide robust fallback stacks;
- avoid prolonged invisible text;
- account for fallback/final font metric differences when CLS matters;
- preload only truly critical font resources.

Do not delay readable content by loading font resources that are not required for the initial experience.

## 20. ANIMATION PERFORMANCE

File 05 defines motion jobs. File 08 verifies runtime viability.

Inspect:
- simultaneous animated regions;
- main-thread animation;
- large paint areas;
- filters/blurs/shadows;
- scroll-linked work;
- DOM reads/writes causing layout thrash;
- high-frequency listeners;
- mobile/low-power behavior;
- reduced-motion path cost.

Use transform/opacity-style composited movement when it preserves the intended effect, but do not treat compositor use as a universal aesthetic rule.

Animation that drops interaction responsiveness or creates persistent device heat must re-enter G6 / File 09 reasoning.

## 21. CANVAS / WEBGL PERFORMANCE

Advanced rendering requires explicit budgets for:
- initial payload;
- texture/model/media weight;
- shader/scene complexity;
- CPU/GPU frame cost;
- memory;
- device capability;
- resize/orientation behavior;
- tab/background behavior;
- renderer teardown;
- battery/thermal impact where material.

Quality strategies may include:
- adaptive resolution;
- lower-detail assets;
- reduced effects;
- conditional initialization;
- pausing when offscreen/backgrounded;
- static fallback;
- alternate DOM experience.

Do not hold navigation or primary conversion hostage to renderer initialization unless the renderer is literally the product and File 09 approves the tradeoff.

## 22. THIRD-PARTY PERFORMANCE

Every material third party inherits scrutiny from File 07.

Measure:
- transfer/runtime cost;
- main-thread work;
- connection setup;
- layout shifts;
- privacy/consent side effects where relevant;
- failure behavior;
- load timing;
- necessity.

Examples include analytics, tag managers, chat, maps, embeds, personalization, A/B systems, reviews, ads, booking widgets, consent managers.

Prefer:
- delayed/conditional loading when compatible with purpose;
- server-side or lighter alternatives when justified;
- local failure containment;
- removal of redundant vendors.

Stakeholder request alone does not waive performance review; material third-party cost still requires justification.

## 23. SLOW-NETWORK / LOW-DEVICE RESILIENCE

Test the experience under constrained conditions.

The goal is not pixel-identical fidelity. Preserve:
- primary content;
- navigation;
- core task;
- conversion/action;
- status/recovery;
- readable hierarchy.

Decorative media, ambient motion, speculative prefetching, and high-detail renderers may degrade before core value does.

---

**DOMAIN: ACCESSIBILITY & SEMANTICS**

## 24. DEFAULT CONFORMANCE MODEL

**N:** Unless the project specifies another standard, target **WCAG 2.2 Level AA**, including all applicable Level A and AA criteria.

Conformance is evaluated on the actual experience, not by claiming that a component library is accessible.

Automated tooling cannot prove WCAG conformance.

If the project has stricter legal, procurement, policy, contractual, or platform requirements, record them in the Integrity Profile and apply the stricter applicable requirement.

## 25. NATIVE SEMANTICS FIRST

G3 + File 07 apply.

Prefer native HTML whose behavior and semantics already match the requirement.

Examples:
- real links for navigation;
- real buttons for actions;
- form controls with labels;
- `<details>/<summary>` where disclosure semantics fit;
- `<dialog>` where modal/dialog behavior fits and support requirements are acceptable;
- actual lists for lists;
- actual tables for tabular relationships.

**N:** ARIA must not be used to disguise fundamentally incorrect interaction or document structure.

First rule of ARIA in this OS: if native semantics solve the problem correctly, prefer them.

## 26. HTML VALIDATION WITHOUT PARSING SUPERSTITION

WCAG 2.2 removed the old 4.1.1 Parsing success criterion.

Therefore:
- **D:** HTML validation remains useful for catching duplicate IDs, malformed nesting, invalid relationships, and cross-browser risk;
- invalid HTML is not automatically a WCAG 2.2 failure merely because a validator complains;
- **N:** markup becomes an integrity failure when it breaks required semantics, names, roles, values, relationships, reading order, focus behavior, or browser/assistive-technology reliability.

Do not resurrect obsolete checklist rules through habit.

## 27. DOCUMENT STRUCTURE

**N:** information and relationships conveyed visually must be available programmatically where required.

Validate:
- meaningful page title;
- correct `html lang`;
- `dir` where language/direction requires it;
- primary content identifiable;
- landmarks used meaningfully;
- headings represent content hierarchy rather than typography;
- lists are represented as lists;
- figures/captions used where they express a real relationship;
- semantic regions are not invented merely to increase landmark count.

### Heading rules
- one clear page-level heading is a strong **Q** default, not a mystical search-engine law;
- heading levels should reflect hierarchy;
- a skipped level is **D**, not automatically failure, unless it creates a false/unclear information relationship;
- do not use heading tags purely to obtain a font style.

## 28. SOURCE ORDER / READING ORDER

**N:** DOM/source order must preserve a meaningful sequence where sequence affects meaning or operation.

Validate against:
- CSS visual reordering;
- grid placement;
- responsive reorder;
- portals/overlays;
- sticky regions;
- visually positioned cards;
- duplicated mobile/desktop UI.

Reading order and focus order should not force assistive-technology or keyboard users through a different conceptual story from sighted users.

Visual novelty may depart from source geometry. It may not corrupt meaning.

## 29. LANDMARKS / BYPASS / NAVIGATION

**N:** provide a mechanism to bypass repeated blocks when required.

Strong default:
- visible-on-focus “skip to main content” link;
- meaningful `<main>` region;
- semantic header/nav/footer as appropriate.

When multiple navigation landmarks exist, give them distinguishable accessible labels.

Use `aria-current` where current destination/state benefits from programmatic identification.

Navigation labels should retain File 03 information scent; accessibility is not improved by technically named but semantically vague links.

## 30. LINKS VS BUTTONS

**N:** semantic role must match behavior.

- Link: moves to a destination/resource/state represented by navigation.
- Button: performs an action, changes interface state, submits, opens, closes, toggles, starts.

Do not create clickable `<div>` or `<span>` elements when a link/button fits.

**N:** link purpose must be understandable from link text plus allowed programmatic/contextual relationship.

Avoid repeated ambiguous action labels where context does not sufficiently disambiguate them.

## 31. KEYBOARD OPERABILITY

**N:** all functionality must be keyboard operable except where the underlying function is genuinely dependent on a path/movement in a way WCAG permits.

Validate:
- Tab and Shift+Tab sequence;
- Enter/Space behavior according to control semantics;
- arrow-key behavior for composite widgets where appropriate;
- Escape where dismissal behavior calls for it;
- no keyboard trap;
- no unreachable custom controls;
- no positive `tabindex` used to manually rewrite a broken source order;
- no interaction that works only on hover or pointer drag.

Keyboard testing must complete the actual primary journey, not merely reach every element.

## 32. FOCUS ORDER / FOCUS VISIBILITY / FOCUS OBSCURATION

**N:** focus order preserves meaning and operability.

**N:** keyboard focus must be visible.

**N — WCAG 2.2 AA:** focused components must not be entirely hidden by author-created sticky headers, footers, overlays, cookie banners, or other content.

**Q:** prefer a strong focus indicator that remains clearly perceivable across surfaces, ideally approaching the WCAG 2.2 AAA focus-appearance model where practical rather than settling for a faint brand-tinted glow.

Rules:
- never remove `outline` without providing an equally or more visible replacement;
- do not hide focus because it “looks ugly”;
- ensure dark/light section transitions preserve indicator visibility;
- test sticky/pinned UI;
- use scrolling offsets or layout adjustments when fixed elements obscure focus.

## 33. FOCUS MANAGEMENT

Programmatic focus is a responsibility, not decoration.

Use it when a user action materially changes interaction context, such as:
- modal/dialog opening;
- route transition in a client application when the new context would otherwise be ambiguous;
- error summary/navigation in long forms where useful;
- composite widgets according to expected pattern.

Avoid:
- stealing focus on incidental content updates;
- moving focus merely because an animation completed;
- dumping focus to `<body>` after closing UI.

After temporary overlays, normally return focus to the logical invoking control unless context changed legitimately.

## 34. DIALOGS / MODALS

For a modal dialog:

**N:**
- expose dialog semantics and an accessible name;
- move focus into the dialog intentionally;
- keep keyboard interaction within the modal context while open;
- make background content inert/unavailable to interaction as appropriate;
- provide a clear close mechanism;
- support expected Escape dismissal unless the action is intentionally non-dismissible and that constraint is justified;
- return focus logically on close;
- ensure focus is not visually hidden;
- prevent scroll/viewport behavior from hiding controls on small/short screens.

Prefer native `<dialog>` when it fits the support and behavior requirements. Custom modals inherit the entire behavior burden.

## 35. DISCLOSURES / ACCORDIONS / TABS

Use native disclosure semantics when sufficient.

For custom disclosure:
- **N:** trigger is a real control;
- expose expanded/collapsed state programmatically;
- associate trigger and controlled region where useful;
- collapsed content must not leave hidden focusable controls in the tab order.

For tabs:
- use an established keyboard/focus pattern;
- expose selected state and relationships;
- avoid turning ordinary anchor navigation into faux tabs merely for styling.

## 36. FORMS

Forms are high-integrity surfaces because they convert understanding into action.

**N:**
- every input has a persistent programmatic label;
- placeholder is not the only label/instruction;
- required state and constraints are communicated programmatically and visibly where needed;
- related controls are grouped with `<fieldset>/<legend>` or equivalent relationships when appropriate;
- input purpose/autocomplete tokens are used where WCAG requires and browser support makes them applicable;
- errors are identified in text, not color alone;
- error messages are programmatically associated with fields;
- valid user-entered data should survive validation/server errors where practical;
- client validation does not replace authoritative server validation;
- submission state is clear;
- success, server error, and network error have recoverable outcomes.

### Multi-step forms
**N — WCAG 2.2:** previously entered information required again in the same process must be auto-populated or available for selection unless an allowed exception applies.

### Authentication
**N — WCAG 2.2 AA:** accessible authentication must not impose prohibited cognitive-function tests without an allowed alternative/exception. Do not block password managers or paste merely to look secure.

### Consequential submission
For legal, financial, test, or user-data changes, provide the applicable review/confirmation/reversal/error-prevention protections required by WCAG.

## 37. FORM ERRORS / STATUS

Error architecture should answer:
1. What failed?
2. Where?
3. Why, if known?
4. How can it be corrected?
5. Was the user’s data preserved?

For long forms, an error summary linking to invalid fields is a strong **Q** pattern.

Do not automatically focus every inline error as it appears. Announce or focus at the level appropriate to the interaction.

## 38. ACCESSIBLE NAMES / DESCRIPTIONS / STATES

**N:** every interactive component requiring a name must expose an accurate programmatic name.

Rules:
- visible labels should normally be part of the accessible name;
- icon-only controls require an accessible name;
- decorative icons should not pollute names;
- descriptions/help/errors may use appropriate programmatic associations;
- name, role, value, and state must update when the component changes;
- do not use `aria-label` to overwrite useful visible text without reason;
- `aria-hidden="true"` must not hide focusable/required interactive content from assistive technology.

Voice-control compatibility matters: a visible label that says “Search” should not expose an unrelated accessible name such as “Find records in database”.

## 39. ASYNC / LIVE STATUS

Dynamic interfaces must communicate important state changes without forcing users to visually hunt for them.

Use appropriate semantics for:
- loading/busy;
- saved;
- added to cart;
- results updated;
- validation summary;
- background completion;
- urgent error.

Prefer polite status announcements for non-urgent updates; reserve assertive alerts for genuinely urgent interruption.

**N — WCAG AA:** status messages that can be programmatically determined must be exposed so assistive technology can receive them without requiring focus.

Do not move focus merely to announce “Saved”.

## 40. TABLES

Use tables for actual two-dimensional data relationships, not layout.

**N:**
- use table semantics;
- identify header cells;
- associate headers with data cells adequately for the table’s complexity;
- provide a caption or accessible identification when users need context;
- preserve relationships in responsive transformations.

For complex tables, use additional header association techniques when native scope is insufficient.

When horizontal scrolling is necessary for comparison:
- make the scroll region operable;
- preserve labels/context;
- avoid trapping focus;
- test at zoom/reflow conditions.

Do not convert a relationship-dependent comparison table to cards if that destroys cross-row comparison merely to eliminate horizontal scroll.

## 41. TARGET SIZE

**N — WCAG 2.2 AA:** pointer targets are at least **24 × 24 CSS px** unless one of WCAG’s allowed exceptions applies, including sufficient spacing, equivalent target, inline context, user-agent control, or essential presentation.

**Q:** for frequent, destructive, difficult, edge-positioned, or sequential actions, prefer more generous target geometry and spacing. The WCAG AAA 44 × 44 model is a useful quality reference, not the default AA requirement.

Do not measure the icon artwork when the actual clickable area is larger; measure the target.

## 42. DRAGGING / POINTER GESTURES

**N — WCAG 2.2 AA:** any functionality using dragging must also be achievable with a single pointer without dragging, unless dragging is essential or user-agent-controlled.

Examples of alternatives:
- up/down controls for reordering;
- previous/next buttons for a draggable carousel;
- select-item then select-destination;
- direct numeric/value input for a slider-like control.

Keyboard accessibility alone does not automatically satisfy the non-drag single-pointer requirement.

**N:** multipoint or path-based gestures need a simpler single-pointer alternative unless essential.

## 43. POINTER / HOVER INDEPENDENCE

Essential content/function cannot depend on hover.

Where hover/focus reveals additional content, **N — WCAG AA** requires that applicable content be:
- dismissible;
- hoverable when pointer-triggered;
- persistent until focus/hover is removed, dismissed, or no longer valid.

Touch/coarse pointer users must receive the value through an appropriate alternate mechanic.

Test hybrid devices. “Desktop” does not imply mouse-only.

## 44. POINTER CANCELLATION / MOTION INPUT

Where relevant:
- avoid irreversible action on pointer-down when cancellation/up-event behavior can be used;
- provide undo/confirmation for consequential actions when appropriate;
- do not require device motion/tilting if an accessible interface alternative can perform the function;
- allow accidental activation to be corrected.

## 45. COLOR / TEXT CONTRAST

**N — WCAG AA:**
- normal text and images of text: at least `4.5:1` contrast except defined exceptions;
- large-scale text: at least `3:1`;
- required visual boundaries/states of user-interface components and meaningful graphics: at least `3:1` against adjacent colors where WCAG 1.4.11 applies.

Do not use color as the only means of communicating status, error, selection, availability, or required action.

Test actual states:
- default;
- hover;
- focus;
- disabled where meaning remains relevant;
- selected/current;
- error/success;
- text over responsive imagery/video.

Dynamic media behind text requires worst-case contrast handling, not a screenshot that happened to pass once.

## 46. IMAGES OF TEXT / SEMANTIC GRAPHICS

Prefer real text when the same visual result can reasonably be achieved.

For meaningful images/graphics:
- provide text alternatives appropriate to role and context;
- avoid restating nearby text redundantly;
- decorative images use null/ignored alternatives appropriately;
- complex diagrams/charts require an equivalent explanation or data access sufficient for the task.

Alt text describes the function/information needed in context, not every visible pixel.

## 47. ZOOM / RESIZE / REFLOW

**N — WCAG AA:**
- text can be resized to 200% without loss of content/functionality, subject to WCAG exceptions;
- vertically scrolling content must reflow without two-dimensional scrolling at a width equivalent to **320 CSS px**, except content that genuinely requires two-dimensional layout for usage/meaning;
- horizontal writing contexts should be tested at high zoom, not just by shrinking the browser window.

Two-dimensional exceptions can include maps, diagrams, video, games, data tables, or manipulation interfaces where spatial relationships are essential. The exception does not excuse the rest of the page.

Test:
- 200% text zoom/resize;
- 400% browser zoom / 320 CSS-px equivalent;
- long localized strings;
- browser/OS text enlargement where relevant;
- sticky/fixed UI at zoom;
- form errors and dialogs at zoom.

## 48. TEXT SPACING

**N — WCAG AA:** user-adjusted text spacing must not cause loss of content or functionality when users apply WCAG 1.4.12 conditions, including line height of at least `1.5×` font size, paragraph spacing of at least `2×` font size, letter spacing of at least `0.12×` font size, and word spacing of at least `0.16×` font size.

Avoid fixed-height text containers and clipping that break under these overrides.

## 49. REDUCED MOTION

File 05 defines PRESERVE / REDUCE / REPLACE / REMOVE per motion event.

File 08 validates the implementation.

**N:** motion cannot create flashing patterns that violate WCAG 2.3.1 Three Flashes or Below Threshold.

**N:** when moving, blinking, or scrolling content starts automatically, lasts more than five seconds, and appears in parallel with other content, provide pause/stop/hide unless the movement is essential. Auto-updating content requires the applicable pause/stop/hide or update-frequency control.

**Q:** honor `prefers-reduced-motion` for nonessential animation and especially vestibular/spatial effects.

Reduced motion is not “turn every transition off”. Preserve information and state understanding while removing unnecessary movement.

## 50. AUTOPLAY / AUDIO

**N:** if audio plays automatically for more than **three seconds**, provide a mechanism to pause/stop it or control its volume independently from the overall system volume.

Avoid unexpected autoplay audio by default.

For autoplaying movement that runs alongside other content and exceeds WCAG timing conditions, provide required pause/stop/hide unless essential.

Atmospheric media is never exempt from user control merely because it is branded.

## 51. MEDIA ALTERNATIVES

Apply WCAG 2.2 media requirements according to media type.

**N where applicable:**
- prerecorded synchronized audio/video requires captions;
- live synchronized audio requires captions at AA;
- prerecorded synchronized video requires audio description at AA when visual information is needed and not otherwise available in the audio;
- audio-only/video-only alternatives follow their applicable Level A requirements.

Transcripts are often a strong **Q** addition and may satisfy specific media-alternative cases, but a transcript does not automatically substitute for captions where captions are required.

Media controls must be keyboard operable and expose accessible names/states.

## 52. LANGUAGE / DIRECTION

**N:**
- declare the page’s primary human language;
- identify passages in another language when WCAG requires and an exception does not apply;
- support text direction correctly where RTL/LTR content requires it.

Use logical CSS properties where they improve direction resilience, consistent with File 07.

Do not treat localization as a copy-only concern; it can affect layout, truncation, source order, field labels, and accessible names.

## 53. SCREEN-READER SEMANTIC SANITY

A screen-reader sanity pass should confirm the user can determine:
- page/context title;
- landmarks;
- heading structure;
- navigation destinations;
- control names/roles/states;
- form labels/instructions/errors;
- dialog context;
- table relationships;
- live status;
- content order;
- route/state changes;
- media alternatives.

Do not attempt to script a “special screen-reader experience” unless a real problem requires it. Fix the semantic interface.

## 54. CUSTOM WIDGETS

Before building a custom widget:
1. identify the native primitive/pattern it replaces;
2. identify required keyboard behavior;
3. identify accessible name/role/state/value;
4. define focus model;
5. define pointer/touch alternatives;
6. define screen-reader announcements;
7. define responsive/reflow behavior;
8. define reduced-motion behavior;
9. define failure state;
10. test against established WAI-ARIA Authoring Practices where relevant.

A custom widget with only a `role` attribute is not accessible engineering.

## 55. EXPERIENCE-FIRST / CANVAS / WEBGL ACCESSIBILITY

Exploratory presentation does not remove semantic obligations.

For advanced rendering systems:
- keep critical navigation, headings, labels, forms, and primary actions in accessible DOM where practical;
- provide accessible names and state for controls that manipulate the scene;
- ensure keyboard and single-pointer alternatives;
- provide non-spatial or named-destination navigation when spatial exploration would otherwise block access;
- provide textual/data alternatives for meaningful rendered information;
- preserve core content outside the renderer when the renderer is atmospheric/decorative;
- provide reduced-motion treatment;
- test zoom/reflow around the DOM interface;
- ensure renderer failure does not erase critical conversion/content where feasible;
- avoid canvas-only body copy or ordinary controls;
- ensure scene loading does not create an inaccessible full-screen gate.

If an equivalent accessible experience requires enough duplicate engineering or conceptual compromise that the feature’s ROI changes materially, route to File 09.

---

**DOMAIN: TECHNICAL SEO / FRONTEND DISCOVERABILITY**

## 56. SCOPE OF TECHNICAL SEO

File 08 governs frontend discoverability and semantic integrity, not content-marketing strategy, keyword plans, backlink campaigns, or editorial calendars.

The question is:
> Can intended indexable content be crawled, rendered, understood, and associated with the correct URL without technical contradiction?

Do not turn this module into SEO superstition.

## 57. CRAWLABILITY

For indexable public content:

**N/Q by project intent:**
- intended public URLs are reachable by crawlable links;
- important resources required to understand/render the page are not accidentally blocked;
- server/network status is correct;
- meaningful content is not available only after an interaction a crawler cannot reasonably perform;
- addressable content has stable URLs when discoverability matters.

Use real `<a href>` links for navigable destinations rather than click handlers pretending to be links.

## 58. INDEXABILITY

For each route class explicitly decide:
- INDEX;
- NOINDEX;
- AUTHENTICATED/PRIVATE;
- DUPLICATE/VARIANT requiring canonical strategy.

**N:** do not launch with accidental `noindex`, staging robots, password assumptions, or environment flags on intended public pages.

Do not use `robots.txt` as a reliable mechanism for keeping an HTML page out of search results; crawling and indexing are different controls.

## 59. HTTP / ERROR INTEGRITY

Use status behavior that matches reality.

Examples:
- successful canonical content: appropriate `200` response;
- permanent moves: permanent redirect where appropriate;
- missing content: `404`/`410` as appropriate rather than a soft-404 page returning success;
- temporary server failure: appropriate server error rather than deceptive empty `200` content.

Client-side error UI must not hide contradictory server status on indexable documents.

## 60. TITLES / META / DOCUMENT HEAD

**N for accessibility:** each page has a useful document title.

**Q for discoverability:** indexable pages use unique, descriptive titles appropriate to content.

Meta descriptions are useful search-result metadata but are not a guaranteed ranking signal and may be rewritten by search engines.

Also validate where relevant:
- viewport metadata;
- character encoding;
- social/share metadata as product quality, not search-ranking doctrine;
- language/alternate relationships for multilingual/regional variants.

## 61. CANONICALIZATION

Use canonicalization when duplicate/near-duplicate URL variants need a representative URL.

Rules:
- canonical target should represent genuinely equivalent/duplicate content;
- avoid contradictory canonicals;
- avoid canonicalizing unrelated pages merely to “concentrate SEO”;
- align internal links, redirects, sitemap references, and canonical signals where practical;
- remember search engines treat canonical declarations as signals/hints, not an absolute command.

If no duplicate/variant problem exists, do not create canonical bureaucracy for its own sake.

## 62. JAVASCRIPT / RENDERING SEO INTEGRITY

Google and other modern crawlers can render JavaScript, but rendering introduces another failure surface.

For discoverability-critical content:
- prefer meaningful initial/server/static HTML when it fits File 07 architecture;
- do not depend on a fragile client API call for the only version of essential indexable content if a more resilient architecture is justified;
- provide actual URLs for navigable application/content states when discovery/direct access matters;
- ensure title, canonical, robots, and structured-data logic do not conflict between original HTML and client mutation;
- test rendered output, not only source code.

Client-side rendering is not forbidden. Unverified crawler assumptions are.

## 63. LINK SEMANTICS

Technical SEO and accessibility agree here:
- destinations use crawlable anchors;
- link text gives meaningful destination scent;
- links are not empty/icon-only without names;
- internal routes do not rely solely on hash fragments for distinct indexable content when proper URLs are required;
- broken internal links are fixed or intentionally redirected.

## 64. STRUCTURED DATA

Structured data is conditional.

Use it when:
- a supported schema accurately represents visible/main page content;
- the project benefits from the relevant search feature;
- required properties can be maintained reliably.

Rules:
- never mark up content users cannot actually access merely to trigger rich results;
- do not fabricate ratings, products, events, authorship, availability, prices, or other facts;
- validate syntax and eligibility;
- keep dynamic structured data consistent with visible/server truth;
- understand that valid structured data does not guarantee a rich result.

Schema everywhere is not technical excellence.

## 65. SITEMAPS / ROBOTS / HREFLANG

Use when project architecture warrants them.

### Sitemaps
Useful for communicating important URLs, especially larger/dynamic sites and media-heavy ecosystems. They do not replace internal crawlable navigation.

### robots.txt
Use primarily to manage crawler access/traffic to URL patterns/resources. Do not confuse crawl prevention with guaranteed de-indexing.

### hreflang
Use for legitimate language/region variants. Coordinate with canonical strategy; avoid autogenerated language relationships that point to missing/non-equivalent pages.

---

**DOMAIN: RESILIENCE / PROGRESSIVE ENHANCEMENT**

## 66. FAILURE IS A DESIGN STATE

From File 07, classify core capability:
- CORE;
- ENHANCEMENT;
- EXPERIMENTAL/OPTIONAL.

Then define what happens when dependencies fail.

A failure state is unacceptable when it removes critical information/action that could reasonably have survived.

## 67. JAVASCRIPT FAILURE

For document/content/marketing surfaces, preserve meaningful content and navigation without unnecessary dependence on client JavaScript.

For JavaScript-native applications, proportionate resilience may instead mean:
- a reliable application shell/error state;
- clear retry/reload/re-auth path;
- server-preserved user work where appropriate;
- contained subsystem failure;
- no indefinite blank screen.

Do not pretend every application must fully function with JS disabled. Do not pretend a marketing page needs JavaScript to display a paragraph.

## 68. IMAGE FAILURE

If an image fails:
- layout should not collapse catastrophically;
- meaningful images retain their textual alternative;
- decorative images may disappear without meaning loss;
- primary actions must not exist only inside raster imagery.

For image-based proof/product information, ensure enough textual context survives to preserve user understanding where feasible.

## 69. VIDEO FAILURE

If video fails or is intentionally not loaded:
- poster/fallback state is coherent;
- critical explanatory information exists elsewhere when the video is not the sole permitted medium;
- controls do not become dead UI;
- transcript/captions/description assets remain accessible according to media requirements.

Atmosphere may disappear before meaning does.

## 70. FONT FAILURE

If a custom font fails:
- text remains visible;
- fallback maintains workable hierarchy and controls;
- layout does not become unusable;
- iconography must not depend on missing font glyphs when failure would erase meaning without fallback.

## 71. API / REMOTE-DATA FAILURE

Define states:
- initial;
- loading;
- success;
- empty;
- partial;
- stale if applicable;
- error;
- retry;
- offline if relevant.

Critical rules:
- no endless spinner as the only failure state;
- preserve user input where practical;
- explain whether retry is safe;
- distinguish “no results” from “could not load results”;
- prevent duplicate consequential submissions.

## 72. THIRD-PARTY FAILURE

Optional third parties should fail locally.

Examples:
- chat failure should not erase contact details;
- map failure should not remove an address;
- review-widget failure should not collapse surrounding layout;
- analytics failure should not block content;
- booking/payment dependency failure needs an explicit recovery path if it is commercially critical.

Critical third-party dependencies must be documented in `PROJECT_WEBSITE_SPEC` with contingency behavior.

## 73. NETWORK FAILURE / OFFLINE

For network-sensitive products:
- distinguish slow from failed;
- avoid premature failure messages;
- provide useful progress/status only when truthful;
- allow retry/cancel where appropriate;
- preserve local edits/input when possible;
- do not claim offline support unless actually implemented.

Offline-first architecture is a product decision, not a generic website requirement.

## 74. DEVICE / CAPABILITY FAILURE

Use feature/capability detection rather than browser mythology.

For advanced features:
- test unsupported APIs;
- test insufficient GPU/memory where possible;
- test reduced motion;
- test coarse pointer/no hover;
- test narrow/short viewport;
- provide fallback or alternate experience proportional to feature criticality.

---

**DOMAIN: TESTING & VERIFICATION**

## 75. TESTING LAYERS

No single layer is sufficient.

### TEST-1 — CODE / STATIC INSPECTION
Check:
- semantic elements;
- accessible names/relationships;
- duplicate IDs/invalid ARIA;
- `lang`/document title;
- form labels;
- image alternatives;
- link/button semantics;
- robots/canonical/meta configuration;
- known asset and dependency risks.

### TEST-2 — AUTOMATED TOOLS
Use accessibility/performance/SEO automation to find detectable defects and regressions.

Possible tools:
- axe or equivalent;
- Lighthouse / Lighthouse CI;
- HTML/ARIA linters;
- framework accessibility linting;
- bundle/network analysis;
- rich-results/schema validators;
- link/status checks.

Automation is evidence, not verdict.

### TEST-3 — KEYBOARD / MANUAL INTERACTION
Complete critical journeys using keyboard only.

Check:
- order;
- visibility;
- no traps;
- dialogs;
- menus/disclosures/tabs;
- forms/errors;
- route transitions;
- custom controls;
- skip mechanism.

### TEST-4 — SCREEN-READER SANITY
Test representative combinations proportionate to audience/stakes.

Examples may include:
- VoiceOver + Safari on Apple platforms;
- NVDA with a major Windows browser;
- mobile screen reader when mobile use is strategically central.

Check real tasks, not random element announcements.

### TEST-5 — RESPONSIVE / REFLOW
Test:
- continuous resizing;
- 320 CSS-px equivalent reflow;
- 200% text scaling;
- high browser zoom;
- long content/localization;
- portrait/landscape;
- short viewport;
- software keyboard;
- coarse/fine/hybrid pointer;
- tables/diagrams/allowed two-dimensional exceptions.

### TEST-6 — REDUCED MOTION / USER PREFERENCES
Test:
- `prefers-reduced-motion`;
- reduced/removed/replaced motion behavior;
- forced colors/high-contrast modes where audience/support warrants;
- text-spacing modifications where testing tooling exists.

### TEST-7 — REAL-DEVICE / PERFORMANCE
Use representative actual hardware when practical, including at least a constrained mobile class for performance-sensitive sites.

Test:
- cold/warm loads;
- constrained network;
- CPU/main thread;
- interaction flows;
- media decode;
- WebGL/device fallback;
- third-party behavior.

### TEST-8 — FIELD MONITORING
When traffic and project stakes justify it:
- monitor LCP/INP/CLS distributions;
- segment by route/device where useful;
- watch regressions after deployment;
- use owned RUM where actionable detail is needed.

### TEST-9 — USER TESTING
Use disabled users and/or domain-representative users when stakes justify it, especially for:
- public service;
- high-stakes transactions;
- formal accessibility obligations;
- novel/custom interfaces;
- complex data tools;
- mission-critical workflows.

Compliance testing and usability testing answer different questions. Mature projects use both.

## 76. TEST MATRIX

```text
INTEGRITY TEST MATRIX

ROUTE / FLOW:
PRIMARY TASK:

SEMANTICS: PASS / FAIL / N/A
KEYBOARD: PASS / FAIL / N/A
FOCUS: PASS / FAIL / N/A
SCREEN READER: PASS / FAIL / N/A
FORMS / ERRORS: PASS / FAIL / N/A
TARGET / POINTER / DRAG: PASS / FAIL / N/A
REFLOW / ZOOM: PASS / FAIL / N/A
CONTRAST: PASS / FAIL / N/A
MOTION / REDUCED MOTION: PASS / FAIL / N/A
MEDIA ALTERNATIVES: PASS / FAIL / N/A
PERFORMANCE LAB: PASS / RISK / N/A
PERFORMANCE FIELD: PASS / RISK / NO DATA
FAILURE RESILIENCE: PASS / FAIL / N/A
CRAWL / INDEX: PASS / FAIL / N/A
CANONICAL / METADATA: PASS / FAIL / N/A
STRUCTURED DATA: PASS / FAIL / N/A

HIGHEST SEVERITY:
OPEN ISSUES:
OWNER:
```

## 77. AUTOMATED-A11Y LIMIT

Automated scanners can detect only a subset of accessibility failures.

They are useful for:
- missing labels;
- obvious contrast issues;
- invalid ARIA;
- certain structural problems;
- regression prevention.

They cannot reliably determine:
- whether alt text is useful;
- whether focus order makes conceptual sense;
- whether a custom interaction is understandable;
- whether errors are usable;
- whether a screen-reader flow is coherent;
- whether visual order conflicts meaningfully with source order;
- whether an advanced experience provides equivalent value.

“No axe violations” does not equal accessible.

## 78. LIGHTHOUSE LIMIT

Do not use a Lighthouse Performance/Accessibility/SEO score as the hard gate by itself.

Lighthouse is valuable for:
- repeatable lab diagnosis;
- regression detection;
- surfacing likely issues;
- development/CI feedback.

It is not:
- field performance;
- WCAG conformance certification;
- complete SEO validation;
- proof of real-user usability.

A site can score 100 and still fail real-user performance, accessibility, or task usability.

---

**DOMAIN: SEVERITY / ACCEPTANCE**

## 79. SEVERITY MODEL

Severity depends on:
- user impact;
- affected audience/input modality;
- scope/frequency;
- task criticality;
- recoverability;
- legal/contractual obligation;
- whether the defect blocks core value.

### BLOCKER
Release must not proceed for the affected experience.

Examples:
- core task impossible for keyboard users;
- keyboard trap;
- primary navigation unavailable to assistive technology;
- checkout/submission unusable;
- entire launch unintentionally `noindex` or inaccessible;
- critical renderer failure leaves blank page with no recovery;
- severe failure causing data loss or irreversible wrong action in a core flow.

### CRITICAL
Major integrity failure with substantial user/business risk; must be fixed before integrity approval.

Examples:
- inaccessible modal in primary journey;
- widespread focus invisibility/obscuration;
- primary form labels/errors unusable;
- critical media information lacks required alternative;
- persistent severe performance on a primary task;
- core content depends on a third party with no viable failure path;
- advanced interface has no practical non-drag/keyboard/semantic path.

### MAJOR
Meaningful defect that degrades a subset of users/pages or violates a normative requirement without fully blocking the product.

Examples:
- isolated WCAG AA failure;
- secondary route source-order problem;
- inaccessible secondary comparison table;
- material performance-budget regression;
- incorrect canonical/index signal on a subset of pages;
- missing status announcement in an important but recoverable flow.

### MINOR
Polish/quality issue with low direct impact and no known normative failure.

Examples:
- recommended target sizing not reached while AA minimum is satisfied;
- noncritical asset could be lighter;
- redundant metadata;
- imperfect lab diagnostic without observed user impact.

Severity never changes whether a WCAG criterion is met. It changes prioritization and release risk.

## 80. PROJECT-TYPE ADAPTATIONS

### Content / Marketing
Prioritize:
- meaningful initial HTML;
- LCP/media discipline;
- semantic headings/landmarks;
- crawlable links;
- accessible forms;
- limited unnecessary JS;
- indexability/canonical correctness;
- resilient conversion path.

Primary failure: an art-directed page that delays or obscures the actual message/action.

### SaaS / B2B
Marketing surface:
- same priorities as content/marketing plus product demonstrations/proof.

Authenticated product:
- keyboard and focus architecture;
- custom widgets;
- async status;
- form/state recovery;
- INP responsiveness;
- route/focus management;
- data-table integrity.

Primary failure: an application that technically renders but becomes unusable under keyboard, assistive tech, latency, or state failure.

### Ecommerce
Prioritize:
- category/product crawlability;
- product media performance;
- variant/state semantics;
- target sizing;
- cart/checkout keyboard and forms;
- error prevention/recovery;
- server-authoritative price/inventory/order states;
- third-party payment resilience;
- CLS around merchandising/ads/embeds.

Primary failure: visual merchandising that makes transaction continuity fragile.

### Editorial / Research
Prioritize:
- document hierarchy;
- reading/source order;
- citations/links;
- table/figure/diagram alternatives;
- reflow/zoom;
- language;
- low unnecessary JS;
- deep-route crawlability;
- long-page performance.

Primary failure: beautiful typography around structurally inaccessible information.

### Portfolio / Creative
Prioritize:
- project discoverability;
- real routes/links;
- text/metadata outside optional spectacle;
- media delivery;
- contact path;
- keyboard/reduced-motion alternatives;
- renderer failure containment.

Primary failure: work that can only be discovered through hover, cursor, drag, or cinematic navigation.

### Experience-First / WebGL
Prioritize:
- File 09 review;
- DOM semantic layer;
- named destinations/fallback navigation;
- keyboard + single-pointer alternatives;
- reduced motion;
- renderer capability/failure fallback;
- aggressive media/JS/GPU budgeting;
- no canvas-only critical copy/forms;
- explicit accessible equivalent for meaningful scene information.

Primary failure: allowing technical spectacle to exclude users or low-capability devices.

### Public Service / Utility
Prioritize:
- WCAG rigor;
- task completion;
- broad device/network support;
- plain semantic structure;
- robust forms;
- recovery/help;
- low runtime dependency;
- user testing with disabled users when stakes justify it.

Primary failure: avoidable complexity imposed on users who did not choose to admire the website.

## 81. PROJECT_WEBSITE_SPEC WRITEBACK

Update:

```text
PERFORMANCE / ACCESSIBILITY / SEMANTICS

Integrity Profile:
Accessibility Standard:
Formal Compliance Obligations:
Core Performance Routes:
Field Data / RUM Status:
Core Web Vitals Targets:
Contextual Performance Budgets:
Loading / LCP Strategy:
JS / Main-Thread Strategy:
Media / Font Performance Strategy:
Third-Party Performance Rules:
Advanced Rendering Budget / Fallback:
Semantic Document Requirements:
Keyboard / Focus Requirements:
Forms / Errors / Authentication:
Dialogs / Disclosures / Custom Widgets:
Target / Pointer / Drag Requirements:
Reflow / Zoom / Text Spacing:
Contrast / Non-Text Contrast:
Reduced Motion / Autoplay:
Media Alternatives:
Screen-Reader / Async Status Requirements:
Language / Direction:
Technical SEO / Crawl / Index:
Canonical / Metadata / Structured Data:
Progressive Enhancement Baseline:
Failure Resilience Matrix:
Testing Matrix:
Severity Register:
File 09 Escalations:
Explicit Exceptions / Residual Risk:
Integrity Acceptance Status:
```

Do not leave performance/accessibility as generic lines such as “follow best practices”.

## 82. HANDOFF TO FILE 09

Route to `09_COMPLEXITY_ROI_OS.md` when performance/accessibility/semantic constraints materially change the viability of an advanced feature.

Triggers include:
- WebGL/canvas requires substantial duplicate DOM experience;
- bespoke scroll/navigation cannot meet keyboard/reflow/reduced-motion needs without major redesign;
- feature pushes primary routes beyond approved performance budget;
- heavy video/3D/media compromises slow-device access;
- third-party runtime becomes critical-path dependency;
- custom widget accessibility cost exceeds expected value;
- maintaining equivalent mobile/assistive experiences creates major ongoing cost;
- an advanced feature makes current CWV or primary-task responsiveness materially worse;
- semantic/crawlable fallback changes the feature’s conceptual value.

Provide:

```text
FEATURE:
VALUE CREATED:
CORE OR OPTIONAL:
SIMPLER SUBSTITUTE:
PERFORMANCE COST:
ACCESSIBILITY COST:
SEMANTIC / SEO COST:
RESPONSIVE COST:
FAILURE MODE:
REQUIRED FALLBACK:
FIELD / LAB EVIDENCE:
WCAG / INTEGRITY RISK:
MAINTENANCE COST:
RECOMMENDATION: KEEP / SIMPLIFY / REPLACE / REMOVE
```

File 09 decides whether the complexity still earns itself under G6.

## 83. HARD ACCEPTANCE GATE

File 08 is PASS only when all applicable conditions are satisfied.

### Accessibility / semantics
- target accessibility standard is explicit;
- no known unmet applicable WCAG 2.2 A/AA requirements under the default target;
- primary journeys are keyboard operable;
- focus order is meaningful, focus visible, and focus not improperly obscured;
- semantic names/roles/states/relationships are correct;
- source/reading order is meaningful;
- forms, errors, authentication, dialogs, disclosures, tables, async status, target sizing, pointer/drag alternatives, contrast, reflow/zoom, motion, media alternatives, language/direction are verified where applicable;
- custom/experimental systems have an accessible operating model.

### Performance
- current CWV targets are recorded as Q targets;
- contextual budgets exist for performance-sensitive route classes;
- representative lab tests show no unresolved critical performance defect;
- where sufficient field data exists, key routes meet the current good CWV targets or have verified remediation with explicit field-data lag/risk documented;
- no primary task is knowingly held behind unjustified JS/media/third-party/renderer cost;
- slow-device/network behavior preserves core value.

### Technical SEO
- intended indexable pages are crawlable/indexable;
- accidental `noindex`/robots/environment blocks are absent;
- status codes, titles, links, canonicals, and JS rendering behavior are coherent;
- structured data, hreflang, sitemaps, robots rules exist only where relevant and are valid enough for their intended role.

### Resilience
- JS/image/video/font/API/third-party/network/device failure paths have been tested proportionately;
- no optional subsystem failure unnecessarily destroys a core task;
- recovery states are explicit.

### Governance
- all BLOCKER/CRITICAL issues are resolved;
- known normative failures are resolved regardless of severity before claiming integrity approval;
- explicit project exceptions/residual risks are documented;
- File 09 escalation has occurred where required;
- `PROJECT_WEBSITE_SPEC` is updated.

A site may launch under a business decision despite an unresolved issue, but it must not be mislabeled `INTEGRITY PASS`, `WCAG CONFORMANT`, `WORLD-CLASS`, or `LAUNCH_READY` when the relevant hard gate is not met.

## 84. DIAGNOSTIC TESTS

Use as applicable:
- CWV Field Distribution
- LCP Candidate / Discovery
- INP Critical Interaction
- CLS Shift Attribution
- Slow Network
- Low-End Device
- JS Cost / Long Task
- Third-Party Removal
- Image Source Selection
- Video Necessity
- Font Failure
- Semantic Tree
- Heading / Landmark
- Source Order
- Link / Button
- Skip / Bypass
- Keyboard Journey
- Focus Visibility
- Focus Obscuration
- Dialog Trap / Return
- Disclosure State
- Form Label / Error / Recovery
- Accessible Authentication
- Name / Role / Value
- Live Status
- Table Header Association
- Target Size
- Drag Alternative
- Hover Removal
- Coarse Pointer
- 200% Text
- 320 CSS-px Reflow
- Text Spacing
- Contrast / Non-Text Contrast
- Reduced Motion
- Autoplay / Pause
- Captions / Audio Description
- Screen-Reader Sanity
- Canvas/WebGL Fallback
- JS-Off / Enhancement Failure
- API Failure
- Third-Party Failure
- Crawlable Link
- Robots / Noindex
- Canonical Consistency
- Rendered HTML / JS SEO
- Structured Data Truth
- HTTP Status

## 85. ANTI-PATTERNS

- Lighthouse Worship
- Automated-A11y Overconfidence
- WCAG Checkbox Theater
- Accessibility Retrofit DOM
- ARIA Bandages
- Clickable Div Architecture
- Hidden Focus
- Focus Under Sticky UI
- Positive-Tabindex Repair
- Screen-Reader Special UI
- Bad Source Order + CSS Cosmetics
- Hover Owns Meaning
- Drag-Only Interface
- Tiny Targets by Aesthetic Preference
- Contrast by Eyeballing
- Image-of-Text Branding
- Mobile Reflow Failure
- Fixed-Height Typography
- Reduced-Motion Afterthought
- Autoplay Theater
- Captionless Information Video
- Canvas-Only Semantics
- WebGL as Navigation Requirement
- Lazy-Load Everything
- Preload Everything
- LCP Lazy Loading
- Hydrate Everything
- Oversized JavaScript
- Font Collection
- Hidden-but-Loaded Media
- Third-Party Hostage
- Fake Progress
- Infinite Spinner
- Error = Empty State
- SEO Score Worship
- Schema Everywhere
- Canonical Superstition
- Robots.txt as Noindex
- Client-Only Content by Habit
- False Universal Performance Budget
- Desktop-Only Performance Testing
- Token / Checklist Bloat

## 86. RED TEAM

Before approval ask:
- Are we optimizing real users or a green tool score?
- Do field and lab data disagree, and which one actually represents the problem?
- Is the LCP resource delayed by our own design theater?
- Which JavaScript is actually necessary before interaction?
- What breaks on a low-end device?
- What happens when third parties fail?
- Is any critical information owned by hover, motion, canvas, or imagery?
- Can the primary journey be completed by keyboard?
- Can focus ever disappear behind author-created UI?
- Does source order tell the same story as visual order?
- Are labels persistent and errors recoverable?
- Did we use ARIA because the underlying HTML is wrong?
- Can all drag functions be done with simple pointer input?
- Are controls actually large enough, not merely visually large?
- Does the page survive 200% text and 320 CSS-px-equivalent reflow?
- Does text over responsive media pass in worst-case frames/crops?
- Is reduced motion a designed state or a media-query afterthought?
- Are captions/descriptions based on informational need rather than production inconvenience?
- Is WebGL carrying content that belongs in the DOM?
- Can crawlers reach intended routes through real links?
- Are canonical/index rules solving an actual duplicate/index problem?
- Is structured data truthful and visible?
- What happens when JS, image, video, font, API, network, or renderer fails?
- Which issue would make us refuse to call this world-class?

## 87. WORKFLOW

`PROJECT_WEBSITE_SPEC -> File 07 integrity handoff -> Integrity Profile -> requirement class -> performance measurement model -> contextual budgets -> loading/runtime/media/third-party review -> WCAG 2.2 AA semantic/keyboard/focus/forms/widget/media review -> reflow/contrast/reduced-motion review -> technical SEO integrity -> failure/resilience matrix -> layered testing -> severity classification -> File 09 if complexity viability changes -> PROJECT_WEBSITE_SPEC writeback -> hard acceptance gate -> File 13 later for full-system QA`

## 88. SUCCESS STANDARD

This module succeeds when:
- performance is judged by real user value and field evidence rather than score theater;
- current Core Web Vitals are correctly understood and lab tools remain diagnostic;
- budgets are contextual and enforceable;
- WCAG 2.2 AA is the default baseline rather than an afterthought;
- semantics carry meaning before ARIA is added;
- keyboard, focus, forms, dialogs, tables, targets, drag, reflow, contrast, motion, media, status, language, and custom widgets are explicitly testable;
- experimental experiences retain accessible semantic anchors and viable fallbacks;
- intended content remains technically crawlable/indexable without SEO superstition;
- core value survives realistic failure conditions;
- unresolved integrity defects cannot be hidden behind visual quality;
- complexity is routed back to File 09 when its performance/accessibility cost changes the investment case.

World-class integrity means the experience remains coherent across users, devices, networks, assistive technology, crawlers, failures, and time.

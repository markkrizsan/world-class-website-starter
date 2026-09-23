# 06 — RESPONSIVE & MOBILE OS

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A3  
**Dependencies:** `01`–`05`, current `PROJECT_WEBSITE_SPEC`  
**Writes To:** `PROJECT_WEBSITE_SPEC`  
**Hands Off To:** `07_FRONTEND_ENGINEERING_OS.md`  
**Primary Law:** G5 — Responsive Design Preserves Value, Not Geometry  
**Additional Laws:** G1, G2, G3, G4, G6, G7
**Last Validated:** 2026-09-12

## 1. PURPOSE

Determine what must remain valuable and understandable when conditions change, and what can transform to preserve that value.

Responsive design is deliberate transformation of hierarchy, composition, density, navigation, typography, imagery, media, interaction, motion, order, disclosure, comparison, and controls.

It is not desktop layout multiplied by a smaller number.

## 2. CENTRAL LAW

Preserve purpose, critical information, user decisions, core functionality, identity, orientation, critical actions, and core-value mechanisms.

Freely alter columns, order, visible density, crop, navigation form, interaction mechanic, motion, section arrangement, control position, framing, and persistent/on-demand UI when doing so preserves value better.

## 3. FALSE MODELS REJECTED

### Desktop but smaller
Symptoms: same geometry, narrow columns, scaled hero type, hover with no touch equivalent, impossible sticky/pinned systems, unreadable comparisons, broken crops, identical animation regardless of constraint.

### Mobile-first as dogma
Small-first can expose priority, but it is a workflow technique, not a universal strategic law. Value-first, constraint-aware responsive design is the governing model.

## 4. FORENSIC LESSONS

- Shopify: persistent rail -> on-demand mobile index; scenic composition recomposed.
- Google Store: broad desktop nav -> drill-down touch nav; stacked/portrait merchandising.
- Cash App: expressive desktop entry simplified; reference usability preserved; identity survived.
- Primland: core spatial grammar survived because spatial exploration carried value.
- Active Theory: literal preservation of spectacle reduced mobile scanability.

Preserve value selectively, not implementation indiscriminately.

## 5. RESPONSIVE INPUT MODEL

From File 03: PRIORITY A1–A4 content priorities, critical journeys/decisions/actions/content.

From File 04: hierarchy, grid/container/type/media/crop/invariants, preserve/transform/remove flags.

From File 05: grammar, core interactions, hover/cursor/drag/spatial/scroll/pinned/gesture/orientation/reduced-motion classifications.

Do not make responsive design guess what matters.

## 6. CORE-VALUE MECHANISM

Identify what actually creates primary value: rapid retrieval, comparison, immersive place exploration, desirability, spatial understanding, data comparison, reading, transaction, demonstration, narrative, portfolio discovery, interactive utility.

Record:
```text
CORE VALUE MECHANISM:
VALUE CREATED:
DEPENDENCIES:
CAN THE MECHANIC CHANGE? YES/NO/PARTIALLY
WHAT MUST SURVIVE?
```

## 7. TRANSFORMATION FRAMEWORK

Every major responsive system gets one action:

**PRESERVE** — keep mechanism substantially intact.

**RECOMPOSE** — keep content/role, change spatial relationship.

**REORDER** — change presentation order to preserve semantic priority, while maintaining meaningful logical/source order.

**REPLACE** — preserve purpose with a different mechanism.

**COLLAPSE** — move secondary info behind disclosure without losing access.

**SIMPLIFY** — keep mechanism with reduced complexity.

**REMOVE** — delete nonessential material under constraint.

Never remove critical information merely because space is smaller.

## 8. RESPONSIVE TRANSFORMATION RECORD

```text
SYSTEM:
LARGE-ENVIRONMENT STATE:
CORE VALUE:
CONTENT PRIORITY A1/A2/A3/A4:
TRANSFORMATION:
NARROW STATE:
VALUE PRESERVED:
INFORMATION LOST:
INTERACTION CHANGE:
ORIENTATION IMPACT:
ACCESSIBILITY RISK:
PERFORMANCE IMPACT:
ENGINEERING NOTES:
```

## 9. RESPONSIVE IS MULTIDIMENSIONAL

Consider:
- width
- height
- aspect ratio
- orientation
- pointer precision
- hover capability
- touch availability
- zoom/font scaling
- input mechanism
- motion preference
- bandwidth/performance
- browser chrome
- software keyboard
- segmented/foldable environments where relevant

Never equate small viewport with touch-only or wide viewport with mouse-only.

## 10. BREAKPOINT REASONING

Avoid device-brand breakpoints. Create a breakpoint when the current system fails requirements.

Failure signals:
- uncomfortable line length
- hierarchy collapse
- navigation no longer fits
- unsafe target spacing
- focal crop loss
- comparison failure
- text/media competition
- unusable cards/columns
- excessive dead space
- control collision
- impractical pinning
- overflow

Record trigger, transformation, affected systems, why threshold exists, whether content-dependent.

Use as few major breakpoints as necessary.

## 11. COMPONENT-LOCAL RESPONSIVENESS

Some components should respond to their available container rather than page viewport. File 06 defines need; File 07 chooses container-query implementation.

## 12. CONTENT PRIORITY UNDER CONSTRAINT

PRIORITY A1 must remain easily perceivable/accessed.
PRIORITY A2 usually remains visible/immediately accessible.
PRIORITY A3 may become disclosed/spatially reduced.
PRIORITY A4 may be deferred/collapsed/moved/removed when safe.

Responsive design may change exposure, not semantic importance.

## 13. MOBILE CONTENT ORDER

When linearizing, follow decision sequence: what must be understood first, what supports it, what proof precedes action, what is optional/deferred.

Do not preserve desktop left/right order if mobile sequence becomes semantically wrong. Do not repair meaning solely with CSS visual order; source/focus order should remain meaningful.

## 14. REFLOW

Normal content should reflow rather than require horizontal scrolling. Two-dimensional content such as maps/complex diagrams/tables may legitimately retain two-dimensional interaction when essential.

Even then, design the best narrow-screen experience practical.

## 15. GRID TRANSFORMATION

Preserve the relationship the grid communicates, not exact column count.

Examples:
- 4-column products -> 2 -> 1/2 depending on item role
- text+media -> stack
- editorial asymmetry -> vertical sequence preserving scale/crop logic
- complex dashboard may retain multi-axis structure if collapse destroys comparison

## 16. CONTAINERS

File 04 defines reading/content/wide/media/full-bleed. File 06 determines narrow behavior. Preserve readable measure, adequate edge padding, and intended full-bleed/media behavior without compounded cramped nested padding.

## 17. TYPOGRAPHY RESPONSIVENESS

Preserve hierarchy, readability, brand character, emphasis. Do not scale every role by one ratio.

For each role ask line count, viewport consumption, hierarchy, intended line breaks, measure, legibility, localization risk.

Large display type may need smaller scale, different measure, line breaks, width, tracking, or composition.

Do not shrink body text to rescue layout.

Fluid scaling is optional when interpolation genuinely helps.

## 18. SPACING / DENSITY

Compress spacing while preserving relational meaning and target usability. Do not uniformly halve everything.

Mobile often needs less simultaneous content, not necessarily less content. Use sequentialization, disclosure, grouping.

## 19. NAVIGATION TRANSFORMATION

Ask what needs constant visibility/immediate access/on-demand access, how many primary destinations exist, repeat-journey frequency, search importance, conversion importance.

Do not default automatically to hamburger.

Possible solutions:
- visible primary + More
- bottom navigation
- tabs
- priority-plus
- compact labeled menu
- search-first
- contextual local nav
- full-screen menu

Critical destinations remain findable: primary context, major categories, primary action, account/cart if relevant, search if important, current location, overlay escape.

## 20. CARDS / COMPARISON / TABLES

Cards may stack, reduce columns, become rails, change image aspect. Do not auto-carousel every mobile section.

Comparison transformations:
- stacked
- attribute-first
- controlled horizontal table
- selected subset comparison

Tables: classify identity columns, high-priority metrics, secondary fields, actions. Use horizontal scroll, stacked records, selected columns, or detail disclosure based on comparison job. Do not convert a comparison table to cards when cross-row comparison is the main task.

## 21. FORMS / TARGETS / REACH

Forms preserve label clarity, logical sequence, input context, errors, primary action. Avoid awkward multi-column forms when narrow.

Software keyboard reduces viewport height; important controls must remain usable.

Formal target-size conformance belongs to File 08; design generously for frequent/difficult/edge-positioned actions.

Do not encode one universal “thumb zone.” Test one-handed use when relevant and avoid unnecessary precision.

## 22. INPUT CAPABILITY

Use capability concepts rather than width alone:
- hover / any-hover
- pointer / any-pointer

Hybrid devices may have touch + fine pointer. Functionality must remain sensible across concurrent inputs.

## 23. HOVER -> TOUCH

Classify:
- no touch equivalent needed (decorative)
- direct tap
- first-tap preview / second-tap action (use sparingly)
- explicit control
- content promotion (meaningful hover content becomes permanently visible)

Hover-removal test: critical tasks/content remain understandable without hover.

## 24. CUSTOM CURSOR -> NO CURSOR

Cursor behavior normally disappears on touch. Preserve its purpose if any via visible label, onboarding cue, or direct affordance. Never simulate a cursor on touch for vanity.

## 25. DRAG

Account for touch precision, finger occlusion, page-scroll conflict, gesture conflict, and alternative operation.

Possible alternatives: arrows, next/previous, tap destination, direct selection, textual menu.

## 26. SPATIAL INTERACTION

On narrow spatial systems ask whether spatial exploration still creates unique value, whether reduced overview causes unacceptable orientation cost, marker size, overlay occlusion, fallback navigation, reset/home, drag-scroll conflicts.

Spatial interaction survives mobile only when value exceeds orientation/viewport cost.

## 27. PINNED / STICKY / SCROLL-LINKED

Desktop pinning often fails on short viewports. Evaluate height, browser chrome, keyboard, content length, scroll distance, fatigue, reduced motion.

Possible transformations:
- normal flow
- shorter pin
- card sequence
- swipe steps
- static media + scroll copy
- disclosure

Scroll-linked motion may be preserved, simplified, replaced, or removed based on value/performance/reading.

## 28. MOTION BUDGET ON MOBILE

Motion may become shorter, smaller, less layered, less simultaneous, less parallax/camera/pinned. But mobile is not universally “less motion.” Preserve core-value motion when appropriate.

When simplifying, generally sacrifice decorative ambient motion before feedback/orientation/explanation/core experiential movement.

## 29. RESPONSIVE ART DIRECTION

Responsive visuals may require different crops, aspect ratios, image choices, video edits, or composition. One desktop asset is not sacred.

### Focal-point record
```text
IMAGE:
ROLE:
FOCAL SUBJECT:
MUST PRESERVE:
SAFE CROP REGION:
DESKTOP CROP:
NARROW CROP:
ALTERNATE ASSET REQUIRED?:
TEXT OVERLAY?:
RESPONSIVE RISK:
```

Distinguish responsive sizing from responsive art direction.

## 30. VIDEO

May require alternate crop, portrait edit, shorter version, poster, no autoplay, reduced quality, or removal. Preserve informational content when video demonstrates the product; simplify atmospheric media when cost exceeds value.

Text-over-image overlays may need text separated from media, controlled surface, alternate crop, or different layout.

## 31. MOBILE INFORMATION ARCHITECTURE

IA meaning can stay stable while presentation changes:
- persistent sidebar -> Index
- mega menu -> drill-down
- visible filters -> drawer

Progressive disclosure is useful for secondary nav/specs/details/settings, not for hiding page purpose, critical differences, pricing, eligibility, primary CTA, or warnings.

Do not accordion everything.

## 32. CONTENT REDUCTION

Actual content reduction needs justification: duplicate/redundant/decorative/environment-specific material. “Not enough room” is not enough.

## 33. FIRST VIEW / FOLD

Do not compress everything into one mobile viewport. Establish enough context/value to invite continuation. Fold varies by device/browser/orientation/font size.

## 34. VIEWPORT HEIGHT

Browser chrome and keyboard make mobile height dynamic. Flag full-screen systems for stable-vs-dynamic viewport behavior, control reachability, keyboard effects, orientation.

File 07 implements `svh/lvh/dvh` or other techniques as appropriate.

## 35. SAFE EDGES / ORIENTATION

Conceptually account for browser UI, cutouts, system gesture regions, rounded screens, fixed bottom controls. Test important portrait/landscape flows; landscape may be wide but shallow.

## 36. PERFORMANCE IMPLICATIONS

Flag oversized imagery/video/offscreen assets/heavy motion/WebGL/unnecessary hidden content/font load. Preserve required content/core interaction/meaningful evidence/conversion before ornament.

Hidden does not mean free; visually hidden assets/runtime may still download/execute. File 07 must know when something should be omitted rather than merely hidden.

## 37. RESPONSIVE BRAND IDENTITY

Preserve enough stable brand carriers: type, color, imagery character, iconography, language, composition logic, motifs. Identity should survive loss of desktop-only geometry/cursor/spectacle.

## 38. ARCHETYPE ADAPTATIONS

### SaaS/B2B
Prioritize proposition, product explanation, proof, CTA, readable product UI, navigation. Avoid tiny dashboard screenshots.

### Ecommerce
Prioritize search, category nav, filters, product imagery/price/variants/cart/purchase. Preserve comparability/identification.

### Luxury/Hospitality
Preserve place/media/desire/practical info/inquiry. Recompose cinematic layouts to portrait/stacked/named destination systems.

### Editorial/Research
Prioritize measure, chapter nav, citations/evidence/figures/search. Sidebar TOC -> Index; multi-column -> linear; deep content stays deep.

### Portfolio/Agency
Preserve work quality/discovery/identity/contact. Simplify cursor/hover/transitions/parallax when needed.

### Brand/Guidelines
Preserve categories/rules/examples/identity. Persistent sidebar -> mobile Index is common.

### Public Service/Utility
Prioritize tasks, readable type, direct nav, robust reflow, targets, forms, semantic sequence.

### Experience-First Campaign
May preserve conceptual world/narrative/spatial/expressive media only after explicit orientation/input/performance/CTA/reduced-motion evaluation.

## 39. CONDITIONAL RULES

- Break when content breaks.
- Preserve semantic priority during linearization.
- Replace mechanics when purpose survives better another way.
- Hover may disappear; essential meaning may not.
- Disclosure may reduce simultaneous complexity but not access.
- Core-value experiences may survive even when expensive.
- Responsive art direction may require new assets.
- Mobile motion may differ in kind, not only amount.
- Logical reading order outranks visual reordering convenience.
- Account for input capability, not just width.

## 40. FAILURE MODES

- Desktop Compression
- Mobile Amnesia
- Hamburger by Reflex
- Hover Ghost
- Microscopic Desktop UI
- Crop Decapitation
- Breakpoint Collection
- CSS Order Abuse
- Accordion Everything
- Preserved Spectacle
- Pinned Prison Mobile Edition
- VH Trap
- Sideways Accident
- Tiny Targets
- Touch Precision Fantasy
- Content Reorder Semantic Break
- Mobile = Less Content
- Device-Sniffing Mindset
- Art-Direction Collapse
- Keyboard Viewport Failure

## 41. DIAGNOSTIC TESTS

- Core Value
- PRIORITY A1 Preservation
- Linearization
- Hover-Off
- Coarse-Pointer
- Navigation Discoverability
- Crop
- Overflow
- Type Wrap
- Viewport Height
- Source Order
- Target
- Motion Value
- Media Necessity
- Comparison
- Orientation
- Rotation
- Hybrid Input
- 320 Reflow capability
- Brand Survival

## 42. DEVICE / ENVIRONMENT TEST MATRIX

Representative classes:
- ENV-1 Narrow / coarse pointer
- ENV-2 Narrow / fine pointer
- ENV-3 Medium / coarse pointer
- ENV-4 Medium / hybrid
- ENV-5 Wide / fine pointer
- ENV-6 Short viewport
- ENV-7 Zoom/enlarged content
- ENV-8 Reduced motion

More useful than enumerating device models.

## 43. BREAKPOINT QA PROCESS

Start narrow, expand continuously, observe exact failure, confirm breakpoint fixes the relationship, continue to widest, reverse direction, inspect awkward intermediate widths. Do not test only canonical screenshots.

## 44. PROJECT_WEBSITE_SPEC WRITEBACK

Update Core Value Mechanism, Responsive Strategy, Transformation Map, Breakpoint Logic, PRIORITY A1–A4 treatment, Mobile Content Order, Navigation states, Grid/Container/Type/Spacing transformations, Media focal/crop/alternate assets, Interaction transforms, Input ergonomics, Viewport risks, Performance flags, Accessibility flags, Engineering handoff, Open questions.

## 45. HANDOFF TO FILE 07

Provide responsive intent, core value, transformation map, content-driven breakpoints, grid/container/type/media behavior, nav states, disclosure, input capability rules, hover/pointer/touch/drag alternatives, pinned/scroll/motion/reduced-motion behavior, viewport-height/source-order/reflow requirements, horizontal-scroll exceptions, asset priorities, component-local needs, test matrix, known risks.

## 46. PRE-ENGINEERING GATE

PASS when core value identified, major systems have transformation decisions, PRIORITY A1–A4 narrow behavior/order defined, navigation/type/media/interaction conceptually resolved, viewport/keyboard/orientation risks identified, accessibility/performance risks flagged, and `PROJECT_WEBSITE_SPEC` updated.

## 47. RED TEAM

Ask what actual desktop value must survive, whether PRIORITY A1 disappeared, whether breakpoints solve real failures, whether nav was hidden unnecessarily, whether text shrank to rescue layout, whether crop murdered subject, what happens without hover/cursor, whether spectacle remains useful, whether visual order conflicts with source/focus order, what happens with chrome/keyboard, whether hidden desktop complexity still loads, and whether identity survives transformation.

## 48. SUCCESS STANDARD

This module succeeds when no single viewport is treated as the “real” design; hierarchy, information, navigation, media, interaction, brand, reflow, logical order, target usability, viewport-height behavior, and core-value mechanisms all have intentional cross-environment behavior, and engineering receives explicit responsive intent rather than “make it responsive.”

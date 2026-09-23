# 02 — STRATEGY VECTOR & ROUTER

**OS Version:** 1.0.0  
**Module Version:** 1.0.0  
**Status:** STABLE  
**Authority:** A2/A3  
**Dependencies:** `01_GOVERNING_DOCTRINE.md`  
**Last Validated:** 2026-09-12

## 1. PURPOSE

The Website Strategy Vector determines what kind of website the project requires before specialist design rules are applied.

It answers:

> What does world-class execution mean for this specific project?

## 2. WHEN REQUIRED

Create or materially update the Vector when beginning a new website, creating a major new funnel/page with a distinct purpose, redesigning an existing site, materially changing audience/offer/positioning/commercial objective, changing experiential role, or introducing a major new interaction model.

Do not regenerate it for minor copy edits, spacing fixes, isolated bugs, or local component tweaks.

## 3. V1 — PRIMARY JOB

Choose one primary and optionally one secondary:
- INFORM
- EXPLORE
- EVALUATE
- CONVERT
- TRANSACT
- USE

## 4. V2 — ARCHETYPE

Select dominant archetype, optionally a secondary:
- SaaS
- Enterprise/B2B
- Ecommerce
- Marketplace
- Luxury
- Hospitality
- Editorial
- Research
- Cultural/Institutional
- Portfolio/Agency
- Campaign/Launch
- Data/Visualization
- Brand/Guidelines
- Public Service
- Product/Documentation
- Other

## 5. V3 — COMMERCIAL OBJECTIVE

Choose dominant objective:
- AWARENESS
- LEAD
- CONSULTATION
- PURCHASE
- RETENTION
- NON-COMMERCIAL

## 6. V4 — BUYER / ACTION COMMITMENT

`0 LOW` — inexpensive, reversible, routine, low-risk.  
`1 MEDIUM` — meaningful attention/data/cost/deliberation.  
`2 HIGH` — substantial trust, money, organizational commitment, or stakeholder involvement.

High commitment elevates strategy/conversion/copy, proof, trust, objection handling, and decision support.

## 7. V5 — INFORMATION COMPLEXITY

`0 LOW` — few concepts/products/choices/dependencies.  
`1 MEDIUM` — several categories, user paths, or proof layers.  
`2 HIGH` — large ecosystem, deep technical content, many users/offers/workflows/data.

High complexity elevates IA, progressive disclosure, navigation, hierarchy, orientation, and responsive transformation.

## 8. V6 — EXPERIENTIAL INTENSITY

`0 UTILITY-FIRST`  
`1 BALANCED`  
`2 EXPERIENCE-FIRST`

At 2, elevate Visual and Interaction/Motion and activate Complexity ROI for advanced behavior. Experience-first never means usability-optional.

## 9. V7 — INTERACTION NOVELTY

`0 CONVENTIONAL`  
`1 ENHANCED`  
`2 EXPLORATORY`

At 2, elevate `05`, `06`, `08`, and `09`; require explicit orientation and reversal.

## 10. V8 — BRAND EXPRESSION

`0 RESTRAINED`  
`1 DISTINCTIVE`  
`2 HIGHLY EXPRESSIVE`

Higher scores elevate visual/art direction/motion systems. High expression never excuses incoherence.

## 11. V9 — TRUST BURDEN

`0 LOW`  
`1 MEDIUM`  
`2 HIGH`

High trust elevates proof architecture, specificity, expert/authority evidence, technical credibility, transparency, objection handling, and integrity quality.

## 12. VECTOR FORMAT

```text
WEBSITE STRATEGY VECTOR

Primary Job:
Primary Archetype:
Secondary Archetype:
Commercial Objective:

Buyer Commitment: 0/1/2
Information Complexity: 0/1/2
Experiential Intensity: 0/1/2
Interaction Novelty: 0/1/2
Brand Expression: 0/1/2
Trust Burden: 0/1/2

Known Constraints:
Primary User:
Primary Action:
Core Value Mechanism:
Status: PROVISIONAL / RESOLVED
Confidence: HIGH / MEDIUM / LOW
```

## 13. NO SINGLE COMPOSITE SCORE

Do not sum the Vector into a generic sophistication score. The dimensions interact; the profile is what matters.

## 14. ACTIVATION LEVELS

Each specialist module receives STANDARD, ELEVATED, or CRITICAL relevance.

### File 03 Strategy/IA/Narrative/Conversion/Copy
Elevated when Information Complexity >=1, Buyer Commitment >=1, or Primary Job = Evaluate/Convert/Transact. Critical when high complexity + high commitment, or conversion with very high trust burden.

### File 04 Visual System
Elevated when Brand Expression >=1 or Experiential Intensity >=1. Critical when Brand Expression =2 or visual desirability is central.

### File 05 UI/Interaction/Motion
Elevated when Interaction Novelty >=1 or Experiential Intensity >=1. Critical when Interaction Novelty =2 or interface behavior carries core experience value.

### File 06 Responsive/Mobile
Standard always. Elevated with high information complexity, interaction novelty, desktop-specific composition, or strategically central mobile use. Critical when interaction materially changes by input/device or core function risks degradation.

### File 07 Front-End Engineering
Elevated during custom production. Critical with high component/state/creative-development complexity or strategic scalability requirements.

### File 08 Performance/Accessibility/Semantics
Standard always. Elevated with heavy media, interaction novelty, trust burden, transaction, or broad public use. Critical when core function depends on complex interaction or formal accessibility/performance obligations are material.

### File 09 Complexity ROI
Activate when Interaction Novelty =2, Experience-first uses advanced technical execution, any proposal has meaningful cross-system cost, or unusual interaction affects critical navigation/content.

## 15. ARCHETYPE EMPHASIS

### SaaS / Enterprise B2B
Prioritize clarity, buyer-native IA, proof, trust, product explanation, conversion readiness, technical credibility.

### Ecommerce
Prioritize discoverability, comparison, merchandising consistency, transaction continuity, responsive clarity, performance.

### Luxury / Hospitality
Prioritize desire, art direction, narrative, environment/place, media quality, brand, and friction appropriate to purchase model.

### Editorial / Research
Prioritize hierarchy, reading, IA, typography, progressive disclosure, data/media integration.

### Portfolio / Agency
Prioritize differentiation, proof of craft, work discoverability, art direction, narrative, appropriate experiential behavior.

### Data / Visualization
Prioritize IA, interaction, accessibility, responsive handling, progressive complexity.

### Public Service / Utility
Prioritize task completion, accessibility, semantic clarity, performance, resilience.

## 16. VECTOR INTERACTION RULES

### High Complexity + High Novelty
Require explicit orientation, conventional semantics, fallback navigation, strong responsive strategy, and Complexity ROI.

### High Commitment + High Trust Burden
Require clear proposition, integrated proof, objection reduction, explicit conversion architecture, and no critical conversion dependency on experimental interaction.

### High Expression + Utility-First
Use brand first through typography, composition, imagery, color, and microinteraction before high-friction behavior.

### Experience-First + Exploratory
Permit more friction only when it produces core value, orientation remains adequate, reversal exists, accessibility/responsive implications are addressed, and complexity passes G6.

### High Complexity + Utility-First
Favor predictable systems, progressive disclosure, filtering/search, repeated anatomy, and clear hierarchy over cinematic sequencing.

## 17. PROVISIONAL VECTOR PROTOCOL

When important details are missing:
1. resolve known dimensions;
2. mark uncertain dimensions;
3. use the least assumption-heavy interpretation;
4. assign PROVISIONAL;
5. record assumptions in `PROJECT_WEBSITE_SPEC`;
6. proceed when low-risk;
7. validate consequential uncertain dimensions during strategy.

## 18. PROJECT_WEBSITE_SPEC

After Vector resolution, create/update `PROJECT_WEBSITE_SPEC`. The Vector becomes its strategic header. Downstream modules write their resolved decisions into that specification.

If a build contradicts the spec, fix the build or deliberately revise the spec. Do not allow silent drift.

## 19. MATERIAL CHANGE RULE

Recompute affected dimensions when audience, offer, business model, objective, primary conversion, purchase commitment, content volume, brand strategy, experiential role, or interaction model changes materially.

## 20. ROUTING OUTPUT

Internally resolve:

```text
VECTOR STATUS:
CRITICAL MODULES:
ELEVATED MODULES:
STANDARD MODULES:
COMPLEXITY ROI REQUIRED: YES / NO
KEY DESIGN CONSEQUENCES:
KEY RISKS:
```

Expose the full routing summary only when useful.

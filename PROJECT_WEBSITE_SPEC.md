# PROJECT WEBSITE SPEC

This file is the persistent project contract. Keep only current material project decisions here. Do not turn it into a chat transcript, brainstorming archive, or CSS-value dump. When a consequential decision changes, update this file before downstream implementation continues.

## 1. Project State

* Project
* Spec version/date
* Current state
* Current gate
* Active Website OS modules
* Next required state

## 2. Project Brief

* Project purpose
* Business context
* Primary user
* Secondary user
* Primary site/page objective
* Primary user action / CTA
* Required functionality
* Known constraints
* Supported environments
* Timeline / launch requirements

## 3. Strategy Vector

* Primary Job
* Primary Archetype
* Secondary Archetype
* Commercial Objective
* Buyer Commitment: 0/1/2
* Information Complexity: 0/1/2
* Experiential Intensity: 0/1/2
* Interaction Novelty: 0/1/2
* Brand Expression: 0/1/2
* Trust Burden: 0/1/2
* Core Value Mechanism
* Status: PROVISIONAL / RESOLVED
* Confidence
* Critical Modules
* Elevated Modules
* Complexity ROI Required

## 4. Audience / User Job / Strategy

* Primary user
* Situation
* User job
* Desired progress
* Business objective
* User decision
* Top frictions
* Required beliefs
* Strategic thesis

## 5. Offer / Value Proposition

* Offer
* Desired outcome
* Mechanism
* Meaningful difference
* Evidence
* Limitations / tradeoffs

## 6. Information Architecture

* Route/page map
* Global navigation
* Contextual navigation
* Primary entry states
* Critical user journeys
* Page roles
* Content gaps

## 7. Narrative Architecture

* Narrative mode
* Information priority A1/A2/A3/A4
* Section order
* Section contracts
* Progressive disclosure
* Decision sequence

## 8. Proof / Trust / Objections

* Material claims
* Claim-proof map
* Available proof
* Proof gaps
* Objections
* Risk reduction

## 9. Conversion / Copy

* Primary CTA
* Secondary CTA
* Conversion path
* CTA readiness
* Page promise
* Copy hierarchy
* Voice / language constraints

## 10. Reference Lock

* Primary reference
* Primary reference responsibilities
* Secondary references
* Responsibility assigned to each secondary reference
* Reference forensic status
* Measured facts
* Inferences
* Explicitly rejected reference traits

## 11. Art Direction / Visual System

* Visual thesis
* Art direction
* Grid / containers
* Typography
* Color
* Spacing / rhythm / density
* Media / imagery
* Materiality
* Signature devices
* Asset requirements
* Keyframe status

## 12. Interaction / Motion

* Interaction grammar
* Motion budget
* Motion jobs
* Timing / easing families
* Scroll behavior
* Route transitions
* Experimental interactions
* Reduced-motion behavior
* Orientation / clarity requirements

## 13. Responsive / Mobile

For each major system classify:
PRESERVE / RECOMPOSE / REORDER / REPLACE / COLLAPSE / SIMPLIFY / REMOVE

Also record:

* mobile content order
* navigation transformation
* typography transformation
* media/crop changes
* touch alternatives
* motion transformation
* mobile-specific assets
* responsive test matrix

## 14. Engineering Architecture

* Rendering architecture
* Framework rationale
* Semantic/source-order architecture
* Component architecture
* Design-token architecture
* CSS architecture
* JavaScript responsibilities
* State architecture
* Motion implementation
* Advanced rendering
* Asset delivery
* Dependencies
* Progressive enhancement
* Resilience / failure containment
* Browser support

## 15. Complexity Decisions

For every materially complex feature:

* Feature
* Purpose
* Simplest credible alternative
* Unique value
* Costs
* Responsive impact
* Accessibility impact
* Performance impact
* Fallback
* Decision: KEEP / VALIDATE / SIMPLIFY / REPLACE / REMOVE

## 16. Performance / Accessibility / Semantics

* Accessibility target
* Performance-sensitive routes
* Core Web Vitals targets
* Media/font strategy
* JavaScript strategy
* semantic requirements
* keyboard/focus requirements
* reduced-motion requirements
* SEO/indexing requirements
* test matrix
* exceptions / residual risks

## 17. Vertical Slice Gate

* Desktop keyframe approved
* Mobile keyframe approved
* Required assets production-ready
* Experience spikes approved
* Vertical slice implemented
* Reference comparison completed
* Visual quality gate passed
* Responsive quality gate passed
* Approval status

Rule: Full-site production must not begin until the vertical slice is approved.

## 18. Acceptance Criteria

* Strategy acceptance
* Visual acceptance
* Interaction acceptance
* Responsive acceptance
* Engineering acceptance
* Accessibility acceptance
* Performance acceptance
* Content acceptance
* Final QA requirements

## 19. Assumptions / Open Questions

Classify as:

* LOW-RISK
* MATERIAL UNRESOLVED
* VALIDATION REQUIRED
* BLOCKER

## 20. Decision Log

Record only consequential decisions:

* Date
* Decision
* Reason
* Authority/source
* Supersedes
* Downstream impact

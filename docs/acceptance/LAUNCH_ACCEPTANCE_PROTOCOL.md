# LAUNCH ACCEPTANCE PROTOCOL

Use this route for final delivery. `docs/os/13_SCORECARD_QA_REDTEAM_OS.md` is the acceptance authority; `docs/os/08_PERFORMANCE_ACCESSIBILITY_SEMANTICS_OS.md` owns hard integrity obligations. The templates record evidence and decisions without replacing either file.

1. Freeze an identifiable Launch Candidate and complete `LAUNCH_CANDIDATE_HANDOFF_TEMPLATE.md` from the current `PROJECT_WEBSITE_SPEC.md`, applicable gates, and actual build. Candidate status means ready to evaluate, not ready to launch.
2. Verify the deployed or production-like artifact and access to critical paths. Run current automated QA and collect rendered desktop/mobile, interaction, input, state, and failure evidence using `BROWSER_QA_PROTOCOL.md`. Source review, CI success, screenshot regression, and accessibility automation alone are insufficient.
3. Review applicable File 08 hard gates first. Then execute File 13 `L3 — FULL ACCEPTANCE QA` against the actual artifact, current obligations, supported environments, applicable reference-fidelity evidence, and File 09 conditions. Reference prestige is insufficient.
4. Run File 13's adversarial red team. Classify material findings and route each to its highest wrong causal layer; correct the cause rather than cosmetically patching symptoms.
5. After material fixes, run targeted retests and affected dependency regression, then repeat affected acceptance checks. Record results in `FINAL_ACCEPTANCE_REPORT_TEMPLATE.md`.
6. Apply File 13 verdict caps and issue one final verdict. `LAUNCH READY` and `WORLD-CLASS STANDARD MET` are separate gates. Acceptance requires sufficient evidence for the claimed scope; automation is evidence, not certification.
7. Write only the report's compact acceptance state to `PROJECT_WEBSITE_SPEC.md`. A material post-acceptance change invalidates the affected portion of acceptance and requires proportional re-evaluation before repeating the claim.

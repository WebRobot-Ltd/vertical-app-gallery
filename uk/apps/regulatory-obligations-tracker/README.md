# Regulith

_Compliance workspace for small regulated firms._

**Sector:** B2B AI and SaaS · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want Regulith, a compliance workspace for small regulated businesses such as payment firms, brokers and consumer credit lenders. The firm signs up; roles are compliance officer, control owner and senior manager, and control owners see only the controls assigned to them. At onboarding a form asks for permissions held, products, customer types and size; an agent builds an obligations register from legislation.gov.uk, the FCA Handbook, PRA publications and gov.uk content, each obligation linked to its source text. The compliance officer maps obligations to controls, assigns owners and frequencies, and owners upload evidence (policies, test results, minutes). An agent reviews the evidence, says whether it seems to meet the control and asks the officer to confirm. Each user can set monitors on topics: a daily agent reads new publications and consultations, summarises changes and proposes which obligations and controls are affected, for the officer to approve. Email reminders before each control is due, escalation to the senior manager when overdue, and a monthly board report as PDF. Dashboard of coverage, overdue controls and open regulatory changes. Pricing: subscription per firm in three tiers by number of users. English.

## Contract errors

- `agent monitor_agent: goalTemplate placeholder {scope_label} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`
- `trigger review_evidence: evidence_reviewer writes evidence, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **overdue_flag**: Overdue controls are shown by sorting on next due date and by the daily escalation email; a 'today'-relative filter is not available in data blocks.
- **firm_teams**: Users of one firm are linked through the control records (owner, senior manager and officer emails). A control owner who signs up directly also gets the signup role, but only sees records assigned to them.

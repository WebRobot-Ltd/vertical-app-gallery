# Paystride

_Pay your suppliers now. Repay in 30 to 120 days._

**Sector:** Fintech, proptech, insurtech · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

We want Paystride, which finances small businesses' payments to their suppliers so they can pay now and repay over 30 to 120 days. The lending, the debt facility and the payment execution are with our regulated lending and payment partners; I need the software around it. A business signs up, connects its bank via Open Banking and its accounting software via OAuth, and applies with company number, turnover, monthly supplier spend and directors' details. The software pulls Companies House data, summarises bank transactions and sends the file to the partner, who sets a credit limit. The business then uploads or selects supplier invoices; an agent extracts supplier, amount, bank details and due date, checks for duplicates and suspicious bank detail changes, and submits the payment request. The partner approves and pays the supplier directly. The business chooses a repayment term and sees fees upfront; repayments are collected by Direct Debit with email reminders. Dashboards show limit, outstanding balance and upcoming repayments. Partner credit staff review flagged requests. Roles: business owner, finance user, partner credit, admin. Pricing: fee per financed payment. English.

## Contract errors

- `data.credentials: users connect their keys on the account page — add a view of type account`
- `trigger screen_application: underwriter_prep writes applications, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **open_banking**: Connecting the bank through Open Banking needs OAuth/consent, which is not available yet. Applicants upload bank statements (CSV or PDF) instead; the agent summarises them.
- **accounting_oauth**: Connecting accounting software by OAuth (Xero, QuickBooks, Sage) is not available yet. Users upload or select invoices as files.
- **partner_exchange**: No direct API to the lending partner: partner credit staff work inside the app (sign-in by invite) to set limits, review flagged requests, approve and mark payments paid.
- **direct_debit**: Direct Debit collection and payment execution stay with the partners; staff record the repayment date and status, and the app sends email reminders.
- **fee_rates**: Fee per financed payment is the fee_quote slot (illustrative 1.5/2.5/3.5/4.5 percent for 30/60/90/120 days); set the real rates before launch. The fee is collected in the repayment, not billed through the app.
- **finance_user_runs**: Invoices created by a finance user are stored under that user, so owner and finance email fields on the record decide who sees them.

# Fundrift

_Instant invoice finance and working capital for small businesses._

**Sector:** Fintech, proptech, insurtech · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want Fundrift, instant invoice finance and working capital for small businesses. The funding line and the lending decision are with our regulated lending partner and its funders; I need the software around it. A business signs up, connects its accounting software (Xero, QuickBooks or Sage via OAuth) and its bank account via Open Banking, and fills a form: company number, sector, main customers, amount needed. The software pulls Companies House data, analyses the invoice ledger and customer concentration, and builds an application file for the partner's underwriting; the partner returns a facility limit and pricing. The business then selects invoices to fund; the agent checks each invoice against the ledger and debtor history and the partner approves funding, paying out within hours. When the debtor pays, the money is reconciled and the advance settled. Businesses see a dashboard with available facility, funded invoices, fees and repayment dates, and get email reminders and statements. Partner staff work a queue of applications and exceptions. Roles: business user, partner underwriter, admin. Pricing: fee per invoice funded set by the partner, with our platform share. English.

## Contract errors

- `agent statementer: goalTemplate placeholder {period_label} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`
- `data.credentials: users connect their keys on the account page — add a view of type account`
- `trigger invoice_submitted: checker writes invoices, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **accounting_oauth**: Connecting Xero, QuickBooks or Sage via OAuth is not available yet. For now the business uploads a ledger export (CSV/XLSX/PDF).
- **open_banking**: Open Banking (OAuth to bank accounts) is not available yet. For now the business uploads bank statements (CSV/PDF).
- **payout_and_collection**: Payout of advances and collection of debtor payments happen on the partner's rails. The partner or admin records debtor payments in the reconcile form; automatic bank matching needs Open Banking.
- **platform_share**: Platform share of the per-invoice fee is not computed by the app. Fees are set by the partner (fee_pct) and the share is settled with the partner outside the app; the funded fee column supports the monthly statement.
- **companies_house_key**: The Companies House key is an org credential set by admins as the base64 of '<key>:' for Basic authentication.

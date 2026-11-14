# Buyquill

_AI procurement for mid-sized companies: from request to purchase order._

**Sector:** B2B AI and SaaS · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

We need Buyquill, an AI procurement platform with a team of agents for sourcing, purchasing and supplier management in mid-sized companies. The company signs up; roles are requester, buyer, budget holder and finance, and requesters see only their own requests. A requester fills a purchase request: item or service, quantity, budget, need-by date, cost centre, preferred supplier. A buyer agent checks the existing supplier list and contracts, a sourcing agent drafts a request for quotation and emails it to suggested suppliers, a comparison agent scores the returned quotes on price, delivery and terms, and a supplier-risk agent checks each supplier on the Companies House API (status, filings, officers count, insolvency notices from The Gazette). The budget holder approves above thresholds and the buyer issues the purchase order. Suppliers reply by email, so the real product reads inbound supplier email, and it connects to the company's ERP and purchase-to-pay system (orders, invoices, budgets) via OAuth. Scheduled reminders to suppliers who have not quoted, contract renewal alerts 90 days ahead. Dashboards of spend by category, savings and cycle times. Pricing: annual subscription by spend under management. English.

## Contract errors

- `trigger check_new_request: buyer_check writes purchase_requests, which starts it — add a where filter`
- `trigger compare_quotes: comparison writes quotes, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **inbound_supplier_email**: Not available yet: reading supplier replies from an inbox. For now suppliers reply to the sender address and the buyer enters each quote in the quote form (agents then score it).
- **erp_p2p_oauth**: Not available yet: OAuth connection to the company's ERP and purchase-to-pay system (orders, invoices, budgets). For now POs, savings and cycle times are entered in the app; budgets are checked by the budget holder.
- **spend_tier_billing**: Plan is chosen by the customer; automatic tier selection from measured spend under management needs the ERP connection.
- **single_company_workspace**: Assumes one company per app deployment: suppliers, contracts and staff roles are not separated between different signed-up companies.

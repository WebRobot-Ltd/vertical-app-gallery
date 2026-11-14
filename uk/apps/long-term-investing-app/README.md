# Growvest

_Long-term investing, made simple._

**Sector:** Fintech, proptech, insurtech · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want Growvest, an investing app for long-term investors. Acting as an FCA-authorised investment firm, holding client assets in custody and executing trades are done by our regulated partner; I need the software around it. Users sign up on web and in a native mobile app, complete identity checks through the partner and fill a form: goals, time horizon, risk questionnaire, monthly amount, whether they want a Stocks and Shares ISA, a general account or a pension. The app proposes ready-made portfolios of ETFs matching their risk, which they can adjust. They set up monthly investing by Direct Debit, with automatic rebalancing. A dashboard shows holdings, performance, dividends and progress to goals. An agent explains market moves and portfolio changes in plain language and answers questions from our educational content, without giving personal advice. A portfolio simulator shows possible outcomes over time. Users get email and push notifications for contributions, dividends and the ISA allowance before 5 April. Admins manage content and see aggregate metrics. Pricing: free plan plus monthly subscription tiers with lower fees and extra features. English.

## Contract errors

- `agent simulator: goalTemplate placeholder {low} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`
- `agent simulator: goalTemplate placeholder {mid} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`
- `agent simulator: goalTemplate placeholder {high} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`
- `agent simulator: goalTemplate placeholder {contributed} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`
- `agent simulator: goalTemplate placeholder {mu_pct} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`

## Features not expressible today (spec.extensions)

- **partner_integration**: The FCA-authorised partner must provide: identity checks (KYC), custody, trade execution, Direct Debit mandates, ISA/pension account opening, and the data feeds (holdings, contributions, dividends, daily snapshots) that call the webhook triggers. The partner's payload must identify the user and the record owner; OAuth or signed partner sessions are not available yet, so this link is custom work.
- **fee_tiers**: Lower fees for paid tiers are applied by the partner's fee schedule per plan; the app only sells the subscription.
- **risk_scoring**: The risk questionnaire stores answers and a self-chosen risk level; an automatic score and suitability assessment by the regulated firm is custom work.
- **auto_rebalance_and_sms**: Rebalancing is executed by the partner according to the saved preference. SMS/WhatsApp messages are not available.

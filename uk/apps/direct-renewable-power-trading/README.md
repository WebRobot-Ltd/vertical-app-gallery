# Voltara

_Buy electricity directly from renewable generators._

**Sector:** Sanità, istruzione, energia, gov · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want Voltara, an energy-transaction platform letting businesses buy electricity directly from renewable generators. Being a licensed supplier is the product: the Ofgem supply licence, BSC accession and Elexon settlement are ours to hold, and I need the software around them. Businesses sign up, enter their sites, meter numbers and consumption, and upload bills. Generators list their output and price. An agent matches each business's demand profile with generators, forecasts using public Elexon BMRS prices, and proposes contracts that a trading manager approves. Customers see live consumption, the share supplied by their generators and invoices; generators see their sales and payments. Billing runs monthly with Stripe direct debit. Roles: business customer, generator, trader, admin. Businesses can set preferences such as local generation, technology type and a maximum price, and the agent explains every match. A monthly statement shows half-hourly matching between consumption and generation, and an assistant answers billing questions from the customer's own invoices. Contract renewals trigger email reminders sixty days ahead. Pricing is a margin per megawatt-hour plus a platform fee. English only.

## Contract errors

- `agent statement_writer: tool read_readings is declared by another agent with a different action, target or limits — give one of them another name`

## Features not expressible today (spec.extensions)

- **direct_debit**: Monthly Stripe direct debit (BACS mandate and collection of the invoices) is not available in the app's billing yet. Invoices are generated as records; collection runs in Stripe outside the app.
- **settlement_feed**: Half-hourly data reaches the app through the webhooks meter_feed and generation_feed, posted by the licensed settlement systems (BSC and Elexon). Matching volumes are computed there, not in the app.

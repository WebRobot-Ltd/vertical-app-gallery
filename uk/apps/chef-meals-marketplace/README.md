# Hobplate

_Ready meals cooked by independent chefs, delivered chilled._

**Sector:** Consumer, travel, retail · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want a storefront called Hobplate for ready meals cooked by independent chefs. The physical part is outside the software: the kitchens, food production, chilled packaging, cold-chain delivery and distribution to retailers are run by us and our chefs, under FSA food business registration; I need the software around it. Chefs apply through a form (kitchen address, FSA registration number, hygiene rating, cuisine, sample menu, photos) and an admin approves them. Approved chefs publish dishes with ingredients, full allergen labelling as Natasha's Law requires, nutrition, portion size, price and weekly availability. Customers sign up with a delivery postcode, browse dishes by cuisine and diet, order and pay by card; orders close two days before each delivery day. An agent checks every new dish listing for missing allergen information and flags it for admin review before it goes live. Chefs see only their own dishes, orders and earnings; we pay chefs their share weekly. Customers get order confirmations, delivery-day emails and a review request afterwards. Retail buyers have a separate role to place wholesale orders. Dashboards: orders by chef, dish and postcode, revenue and margin. English.

## Contract errors

- `trigger finalize_order: order_finalizer writes orders, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **card_checkout**: Card payment of each order at checkout (per-dish prices, collected by Hobplate and paid out to chefs) is not available yet: the app records orders with their totals, and payment must be taken outside the app.
- **order_cutoff**: The two-day order cut-off is enforced after the order is placed by the order agent (late orders become cutoff_missed and the customer is emailed), not by blocking the form.
- **chef_payouts**: Weekly chef payouts are calculated on the dashboard from confirmed orders and recorded by admins in the payouts collection; the transfer itself is made outside the app. Chef invitations and approval decisions are made by admins (applications table, then invite).
- **wholesale_pricing**: Wholesale orders are recorded and confirmed by admins; wholesale price lists and invoicing are not modelled.

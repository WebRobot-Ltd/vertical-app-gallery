# Roundly

_Window cleaning and home maintenance, booked, paid and managed in one place._

**Sector:** Consumer, travel, retail · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want a web and phone app called Roundly for booking, paying for and managing window cleaning and home maintenance. Homeowners sign up with address and postcode, choose services (windows, gutters, conservatory, driveway) and a frequency, and pay by recurring card subscription or per visit. Cleaners and small firms sign up, set their service postcodes, prices and capacity; postcodes come from ONS and OS open data. The app groups customers into rounds per postcode and day, and should optimise the route order for each cleaner. On the day, the cleaner uses the phone app with GPS to check in at each house and takes before and after photos; the customer gets a push notification and email when the job is done, with the photos. Customers can report a problem, and the firm owner decides on a re-clean or refund. Payment is collected from homeowners and paid out to each cleaner or firm minus our fee. Owners see their team, rounds, revenue and missed visits on a dashboard; cleaners see their own rounds; customers their own visits. English.

## Contract errors

- `trigger allocate_plan: allocator writes service_plans, which starts it — add a where filter`
- `trigger triage_issue: issue_triage writes issues, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **route_optimisation**: The planner agent orders stops with a nearest-neighbour approximation using postcode coordinates; true road-network route optimisation is not available.
- **photos_in_email**: The done email links to the visit; photos are shown in the app, not attached to the email.
- **refund_execution**: The owner's refund decision is recorded and the customer is notified; the money refund itself is made in Stripe, not automated.
- **per_customer_subscription_price**: The subscription plan has a fixed price; per-customer recurring amounts based on the firm's quote are not available yet.

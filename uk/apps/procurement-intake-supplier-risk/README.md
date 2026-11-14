# Intakely

_One front door for every purchase, with supplier risk checked before anyone signs._

**Sector:** Data, media, cyber, devtools · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want an app called Intakely for procurement intake and orchestration with third-party risk assessment. Employees in a company request anything they want to buy, such as software, services or contractors, through one intake form: supplier name, description, cost, contract length, data shared and business owner. Requests can also come from Slack and Microsoft Teams in the real product, through OAuth, which I want included. Based on the answers, the app routes each request through the right steps: security review if data is shared, legal review for contracts, finance approval above a value. Each reviewer gets a task with a deadline and reminders by email. New suppliers are checked automatically against the Companies House API and the free OFSI sanctions list; credit data only if we have a licence. Suppliers fill a risk questionnaire in a portal and upload documents such as insurance certificates, which an agent extracts and checks. An agent summarises risk and recommends a decision, but people approve. Signed contracts come through an e-signature integration, and approved purchases sync to the ERP in the real product. Dashboards show requests by stage, cycle times and supplier risk. Roles: admin, requester, reviewer, approver, supplier. Pricing: from £25,000 a year. English only.

## Contract errors

- `trigger route_request: router writes requests, which starts it — add a where filter`
- `trigger screen_supplier: screener writes suppliers, which starts it — add a where filter`

## Features not expressible today (spec.extensions)

- **slack_teams_intake**: Requests from Slack and Microsoft Teams through OAuth sign-in. OAuth to other services is not available yet; employees use the intake form for now.
- **erp_sync**: Sync of approved purchases (purchase order or vendor creation) to the ERP. Needs the customer's ERP API or OAuth connection; not available yet. Approved requests stay at stage approved and can be exported as CSV.
- **esignature**: E-signature integration (send for signature, receive signed contract). Not available yet; legal staff upload the signed PDF on the contract upload page.
- **credit_data**: Credit reports are off until the customer holds a licence with a credit bureau. Add the bureau API key as an admin credential and one http tool for the screener then.
- **companies_house_key**: The admins set the Companies House API key on the account page (credential companies_house, HTTP basic authentication: the key as username, empty password, pasted base64-encoded as 'key:'). The free OFSI list file can be large and is read up to 2 MB, so a very late entry might be cut.
- **requester_identity**: The requester email field is typed by the requester. Prefilling it from the signed-in user and a per-request supplier link are not available yet.

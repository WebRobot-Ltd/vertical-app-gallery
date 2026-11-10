# Seconda Vita

_Il tuo usato, la sua seconda vita sull'e-shop del brand._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (33 checks passed)

## Description given to the app builder (Italian)

Ci serve Seconda Vita, un'app per brand di moda che vogliono vendere il proprio usato direttamente sul loro sito. I clienti del brand si registrano, scelgono un capo acquistato in passato (anche dallo storico ordini), caricano foto, indicano taglia, condizioni e prezzo desiderato. Un agente riconosce il modello confrontandolo con il catalogo storico del brand, suggerisce un prezzo in base a condizioni e domanda, e prepara la scheda. Il team del brand deve verificare l'autenticità e lo stato del capo, quando arriva in magazzino o dalle foto, e approvare la messa in vendita. Le schede approvate compaiono in una sezione dell'e-shop del brand. Chi compra paga con carta; la piattaforma divide l'incasso tra venditore, brand e commissione di servizio tramite Stripe Connect. In alternativa il venditore può scegliere un buono acquisto del brand di valore maggiore. Bisogna gestire spedizione, resi entro 14 giorni e rimborsi. Il brand vede tutte le transazioni e un report mensile su capi rivenduti e CO2 risparmiata; il cliente vede solo i suoi capi.

## Functional test: what did not pass

- **trigger has its effect** (trigger listing_to_review): email to role:staff: no such recipient in the test (role nobody holds or empty field) _(warning)_
- **trigger has its effect** (trigger order_new): email to role:staff, record.seller_email: no such recipient in the test (role nobody holds or empty field) _(warning)_
- **trigger has its effect** (trigger return_new): email to role:staff: no such recipient in the test (role nobody holds or empty field) _(warning)_
- **saved record shown where its collection is read** (view my_items): a record was saved in listings (by admin) but the page does not show it (as user) _(warning)_
- **saved record shown where its collection is read** (view my_orders): a record was saved in orders (by user, admin) but the page does not show it (as user) _(warning)_
- **saved record shown where its collection is read** (view my_vouchers): a record was saved in vouchers (by admin-data, admin-data) but the page does not show it (as user) _(warning)_
- **saved record shown where its collection is read** (view orders_admin): a record was saved in orders (by user, admin) but the page does not show it (as admin) _(warning)_
- **saved record shown where its collection is read** (view monthly_report): a record was saved in orders (by user, admin) but the page does not show it (as admin) _(warning)_

## Features not expressible today (spec.extensions)

- **eshop_embed**: Embedding the Seconda Vita section in the brand's existing e-shop and syncing the order history (webhook history_feed) from its platform.
- **split_rules**: Stripe Connect split seller/brand/service fee per sale and the refund executed after an accepted return: percentages are set in the studio; automatic refund and shipping-label generation are done by staff manually for now.
- **carrier_labels**: Shipping carrier integration (labels, tracking) is not available yet; staff enter the tracking number.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### shop
![03-shop.png](screenshots/03-shop.png)

### buy
![04-buy.png](screenshots/04-buy.png)

### new_listing
![05-new_listing.png](screenshots/05-new_listing.png)

### my_listings
![06-my_listings.png](screenshots/06-my_listings.png)

### my_items
![07-my_items.png](screenshots/07-my_items.png)

### my_orders
![08-my_orders.png](screenshots/08-my_orders.png)

### return_request
![09-return_request.png](screenshots/09-return_request.png)

### my_vouchers
![10-my_vouchers.png](screenshots/10-my_vouchers.png)

### seller_profile
![11-seller_profile.png](screenshots/11-seller_profile.png)

### review
![12-review.png](screenshots/12-review.png)

### review_edit
![13-review_edit.png](screenshots/13-review_edit.png)

### orders_admin
![14-orders_admin.png](screenshots/14-orders_admin.png)

### order_edit
![15-order_edit.png](screenshots/15-order_edit.png)

### returns_admin
![16-returns_admin.png](screenshots/16-returns_admin.png)

### return_edit
![17-return_edit.png](screenshots/17-return_edit.png)

### vouchers_admin
![18-vouchers_admin.png](screenshots/18-vouchers_admin.png)

### monthly_report
![19-monthly_report.png](screenshots/19-monthly_report.png)

### account
![20-account.png](screenshots/20-account.png)

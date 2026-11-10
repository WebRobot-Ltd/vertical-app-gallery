# OrdinaPronto

_Gli ordini dei negozianti, dalla chat all'ERP, con l'approvazione del tuo agente di vendita._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (34 checks passed)

## Description given to the app builder (Italian)

Voglio costruire OrdinaPronto, un gestionale con assistente AI per distributori all'ingrosso (food, ferramenta, cosmetica). I ruoli sono tre: il distributore admin che carica il catalogo, gli agenti di vendita interni e i clienti negozianti. Il catalogo arriva dal gestionale ERP del distributore tramite connettore sincronizzato ogni notte, oppure da upload Excel con codice articolo, descrizione, unità di vendita, prezzo per fascia cliente, giacenza e minimo d'ordine. Il negoziante scrive in chat in modo libero, anche incollando un messaggio WhatsApp o un elenco fotografato ("10 cartoni acqua naturale, 3 detersivo come la volta scorsa"); un agente riconosce gli articoli, li abbina al catalogo, propone alternative se mancano e compone una bozza d'ordine in una tabella modificabile. Un secondo agente controlla prezzi di listino e fido residuo e segnala anomalie. L'agente di vendita vede la coda delle bozze, le approva o corregge, e solo dopo l'approvazione l'ordine viene scritto nell'ERP e il cliente riceve una email di conferma. Ogni negoziante vede solo i propri ordini e storico; l'agente vede i clienti assegnati; l'admin tutto, più una dashboard con ordinato per settimana. Abbonamento mensile del distributore per numero di clienti attivi. Italiano e francese.

## Functional test: what did not pass

- **saved record shown where its collection is read** (view all_orders): a record was saved in orders (by customer, admin) but the page does not show it (as admin) _(warning)_

## Features not expressible today (spec.extensions)

- **erp_connector**: Nightly ERP sync is exposed as a webhook (POST /api/hooks/erp_catalog_sync, one article per call) and approved orders are readable by the ERP at the token-protected /api/erp/orders; a push of the order into a specific ERP API needs its host and key, to be added once the ERP is known.
- **active_customers_metering**: The plan tiers match the number of active customers, but automatic enforcement or metering of the active-customer count is not available yet; the distributor chooses the tier.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### chat
![03-chat.png](screenshots/03-chat.png)

### photo_order
![04-photo_order.png](screenshots/04-photo_order.png)

### run_history
![05-run_history.png](screenshots/05-run_history.png)

### my_drafts
![06-my_drafts.png](screenshots/06-my_drafts.png)

### edit_order
![07-edit_order.png](screenshots/07-edit_order.png)

### queue
![08-queue.png](screenshots/08-queue.png)

### review_order
![09-review_order.png](screenshots/09-review_order.png)

### my_customers
![10-my_customers.png](screenshots/10-my_customers.png)

### all_orders
![11-all_orders.png](screenshots/11-all_orders.png)

### new_customer
![12-new_customer.png](screenshots/12-new_customer.png)

### catalog
![13-catalog.png](screenshots/13-catalog.png)

### catalog_upload
![14-catalog_upload.png](screenshots/14-catalog_upload.png)

### sales_dashboard
![15-sales_dashboard.png](screenshots/15-sales_dashboard.png)

### account
![16-account.png](screenshots/16-account.png)

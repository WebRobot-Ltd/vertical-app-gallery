# ComputoOfferte

_Dal computo metrico all'ordine al fornitore più conveniente._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (22 checks passed)

## Description given to the app builder (Italian)

Ci serve ComputoOfferte per imprese edili. Il tecnico carica il computo metrico del cantiere in PDF o Excel. Un agente estrae le voci (materiali, quantità, unità di misura), le raggruppa per categoria di fornitore e prepara le richieste d'offerta. Il tecnico rivede e approva le richieste, che partono via email ai fornitori della sua rubrica per quella categoria. Le risposte dei fornitori arrivano in una casella dedicata: l'agente legge le offerte, estrae prezzi, tempi di consegna e condizioni e compila una tabella di confronto per voce, evidenziando il fornitore più conveniente. Il tecnico sceglie e conferma l'ordine. Ogni impresa vede solo i propri cantieri e fornitori. Abbonamento mensile per impresa.

## Functional test: what did not pass

- **saved record shown where its collection is read** (view rfqs_list): a record was saved in rfqs (by user) but the page does not show it (as user) _(warning)_

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new
![03-new.png](screenshots/03-new.png)

### runs
![04-runs.png](screenshots/04-runs.png)

### site_new
![05-site_new.png](screenshots/05-site_new.png)

### sites_list
![06-sites_list.png](screenshots/06-sites_list.png)

### supplier_new
![07-supplier_new.png](screenshots/07-supplier_new.png)

### suppliers_list
![08-suppliers_list.png](screenshots/08-suppliers_list.png)

### items_list
![09-items_list.png](screenshots/09-items_list.png)

### rfqs_list
![10-rfqs_list.png](screenshots/10-rfqs_list.png)

### rfq_review
![11-rfq_review.png](screenshots/11-rfq_review.png)

### offers_list
![12-offers_list.png](screenshots/12-offers_list.png)

### order_new
![13-order_new.png](screenshots/13-order_new.png)

### orders_list
![14-orders_list.png](screenshots/14-orders_list.png)

### account
![15-account.png](screenshots/15-account.png)

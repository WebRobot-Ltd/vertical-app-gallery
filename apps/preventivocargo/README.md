# PreventivoCargo

_Preventivo trasporto in pochi secondi, vettori in gara, consegna tracciata._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (36 checks passed)

## Description given to the app builder (Italian)

Mi serve PreventivoCargo, uno strumento per spedizionieri e aziende che spediscono merci su strada in Italia ed Europa. Il cliente compila il modulo di richiesta: luogo e data di carico, luogo e finestra di consegna, tipo di merce, numero di bancali o metri lineari, peso, temperatura controllata, ADR sì/no, servizi accessori (sponda, appuntamento). Un agente normalizza gli indirizzi, calcola distanze e pedaggi da dati open, poi stima il prezzo con un modello addestrato sullo storico delle tratte dello spedizioniere, tenendo conto di stagionalità, prezzo del gasolio pubblicato e rischio di viaggio a vuoto al ritorno. Il cliente riceve in pochi secondi un prezzo indicativo con forchetta e tempi; se accetta, la richiesta passa a un marketplace di vettori registrati, che vedono i carichi disponibili nella loro zona e fanno offerta. L'operatore dello spedizioniere sceglie il vettore e conferma; serve la sua approvazione per margini sotto soglia. Poi tracking della consegna con aggiornamenti via email e caricamento del documento di trasporto firmato. Il cliente vede solo le sue spedizioni, il vettore solo i carichi assegnati, l'operatore tutto più una dashboard margini. Commissione per spedizione. Italiano, inglese, tedesco.

## Functional test: what did not pass

- **form saves a record** (form bid): only role carrier may fill it, and the test cannot hold that role _(warning)_
- **form saves a record** (form update_delivery): only role carrier may fill it, and the test cannot hold that role _(warning)_
- **saved record shown where its collection is read** (view my_shipments): a record was saved in shipments (by user) but the page does not show it (as user) _(warning)_
- **saved record shown where its collection is read** (view my_jobs): a record was saved in shipments (by user) but the page does not show it (as carrier) _(warning)_
- **saved record shown where its collection is read** (view ops_shipments): a record was saved in shipments (by user) but the page does not show it (as admin) _(warning)_

## Features not expressible today (spec.extensions)

- **trained_price_model**: A price model trained on the forwarder's lane history is not available yet: the quoter estimates from similar lanes (median EUR/km) adjusted for fuel, seasonality and return risk. Bulk CSV import of the history and model training are missing.
- **toll_api**: No open toll API: tolls are estimated with per-country per-km rates.
- **carrier_zone_filter**: Carriers see all open loads; automatic filtering by the zones of their profile is not available yet.
- **sms_whatsapp_tracking**: Tracking updates are by email only; SMS/WhatsApp/push and live GPS positions are not available yet.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_quote
![03-new_quote.png](screenshots/03-new_quote.png)

### quotes_history
![04-quotes_history.png](screenshots/04-quotes_history.png)

### my_shipments
![05-my_shipments.png](screenshots/05-my_shipments.png)

### accept
![06-accept.png](screenshots/06-accept.png)

### loads_open
![07-loads_open.png](screenshots/07-loads_open.png)

### bid
![08-bid.png](screenshots/08-bid.png)

### my_bids
![09-my_bids.png](screenshots/09-my_bids.png)

### my_jobs
![10-my_jobs.png](screenshots/10-my_jobs.png)

### update_delivery
![11-update_delivery.png](screenshots/11-update_delivery.png)

### ops_shipments
![12-ops_shipments.png](screenshots/12-ops_shipments.png)

### ops_quotes
![13-ops_quotes.png](screenshots/13-ops_quotes.png)

### ops_bids
![14-ops_bids.png](screenshots/14-ops_bids.png)

### assign
![15-assign.png](screenshots/15-assign.png)

### approvals
![16-approvals.png](screenshots/16-approvals.png)

### margins
![17-margins.png](screenshots/17-margins.png)

### carriers_list
![18-carriers_list.png](screenshots/18-carriers_list.png)

### carrier_new
![19-carrier_new.png](screenshots/19-carrier_new.png)

### lane_new
![20-lane_new.png](screenshots/20-lane_new.png)

### account
![21-account.png](screenshots/21-account.png)

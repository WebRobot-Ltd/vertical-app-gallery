# ViaggioSartoriale

_Viaggi su misura, rifiniti da un esperto locale._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (20 checks passed)

## Description given to the app builder (Italian)

ViaggioSartoriale propone viaggi su misura costruiti con un esperto locale. Il viaggiatore, anche senza account, compila un modulo con destinazione o regione, date, numero di persone, budget, interessi (enogastronomia, arte, natura, sport) e ritmo preferito. Una squadra di agenti prepara tre proposte di itinerario diverse usando open data degli enti turistici, OpenStreetMap e Wikidata per luoghi, distanze ed eventi; non uso dati delle agenzie di viaggio online. Le proposte vengono assegnate a un esperto locale registrato sulla piattaforma per quella zona, che le rivede, aggiunge consigli personali e strutture di fiducia, e le approva. Entro 24 ore il viaggiatore riceve un'email con le tre proposte e un link per sceglierne una e chiedere modifiche in chat con l'esperto. Quando conferma, paga un acconto con carta e l'esperto riceve la sua parte. Il viaggiatore vede solo le proprie richieste, l'esperto solo quelle della sua zona, l'admin tutto. Monetizzazione: commissione sul viaggio venduto. Interfaccia in italiano e inglese.

## Functional test: what did not pass

- **saved record shown where its collection is read** (view my_requests): a record was saved in requests (by admin-data, admin-data, user) but the page does not show it (as user) _(warning)_

## Features not expressible today (spec.extensions)

- **expert_chat**: A live chat between traveler and human expert is not available yet: change requests and replies go through the change_request and expert_reply fields of the proposal, with email notifications.
- **deposit_checkout**: The card deposit on confirmation and the payout to the expert (via Stripe Connect on the experts' accounts) must be wired in the studio; the expert must connect their payout account.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### request
![03-request.png](screenshots/03-request.png)

### my_requests
![04-my_requests.png](screenshots/04-my_requests.png)

### trips
![05-trips.png](screenshots/05-trips.png)

### review
![06-review.png](screenshots/06-review.png)

### expert_admin
![07-expert_admin.png](screenshots/07-expert_admin.png)

### experts_list
![08-experts_list.png](screenshots/08-experts_list.png)

### all_requests
![09-all_requests.png](screenshots/09-all_requests.png)

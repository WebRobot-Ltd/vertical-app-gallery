# Avventure all'Aperto

_Escursioni, kayak, arrampicata e cicloturismo con guide verificate._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (29 checks passed)

## Description given to the app builder (Italian)

Voglio realizzare Avventure all'Aperto, un marketplace di esperienze outdoor come escursioni, kayak, arrampicata e cicloturismo. Le guide si registrano come professionisti, caricano il loro tesserino, collegano il conto Stripe per ricevere i pagamenti e pubblicano le esperienze con descrizione, luogo di ritrovo su mappa, durata, difficoltà, numero minimo e massimo di partecipanti, attrezzatura e prezzo. Le date disponibili devono arrivare dal calendario della guida. Il cliente cerca per zona, data e tipo di attività, prenota e paga. La guida riceve una notifica e deve confermare entro 48 ore; se non conferma o il gruppo minimo non si raggiunge, un agente propone al cliente un'alternativa simile o lo rimborsa. Alla conferma il cliente riceve un voucher con QR e le istruzioni, e il giorno prima un promemoria con il meteo. Si possono anche acquistare voucher regalo. Dopo l'esperienza parte una richiesta di recensione. Ogni guida vede solo le sue prenotazioni, l'admin tutto. La piattaforma trattiene una commissione su ogni prenotazione e versa il resto alla guida dopo l'esperienza.

## Functional test: what did not pass

- **form saves a record** (form new_experience): only role guide may fill it, and the test cannot hold that role _(warning)_
- **form saves a record** (form add_departure): only role guide may fill it, and the test cannot hold that role _(warning)_
- **page opened by a role allowed to** (view new_experience): only role guide may open it, the test cannot hold it _(warning)_
- **page opened by a role allowed to** (view add_departure): only role guide may open it, the test cannot hold it _(warning)_

## Design checks (who fills each collection)

- view new_experience: roles guide cannot add to experiences, a shared collection only the admins fill — keep roles: [admin], or own the records by user
- view add_departure: roles guide cannot add to departures, a shared collection only the admins fill — keep roles: [admin], or own the records by user

## Features not expressible today (spec.extensions)

- **guide_calendar_sync**: Le date arrivano da un calendario della guida (Google/Microsoft): non disponibile (OAuth). Per ora la guida inserisce le date nella vista 'Aggiungi data'.
- **stripe_onboarding_and_payout**: Onboarding Stripe Connect della guida, checkout al momento della prenotazione, incasso/pagamento dopo l'esperienza (ritenuta fino al giorno dopo) e rimborsi: da collegare nella configurazione dei pagamenti; i rimborsi vengono eseguiti dall'admin sullo stato refund_requested.
- **voucher_qr**: Generazione dell'immagine QR del voucher e dei voucher regalo con codice univoco e riscatto: oggi il voucher mostra il codice testuale.
- **search_filters**: Filtri interattivi per zona, data e attività sulla ricerca; oggi tabella e mappa con elenco date disponibili.
- **group_minimum**: Controllo automatico del gruppo minimo sommando le prenotazioni di più clienti: oggi la guida annulla ('declined') se il minimo non è raggiunto e l'agente propone l'alternativa.
- **date_trigger_status_filter**: I trigger a data non filtrano per stato: promemoria, scadenza e richiesta di recensione partono per ogni prenotazione con quella data; l'agente controlla lo stato, mentre l'email di recensione non è filtrata per stato 'confirmed'.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### experiences
![03-experiences.png](screenshots/03-experiences.png)

### departures_list
![04-departures_list.png](screenshots/04-departures_list.png)

### map
![05-map.png](screenshots/05-map.png)

### book
![06-book.png](screenshots/06-book.png)

### my_bookings
![07-my_bookings.png](screenshots/07-my_bookings.png)

### proposals_list
![08-proposals_list.png](screenshots/08-proposals_list.png)

### reminders_list
![09-reminders_list.png](screenshots/09-reminders_list.png)

### gift
![10-gift.png](screenshots/10-gift.png)

### review
![11-review.png](screenshots/11-review.png)

### guide_apply
![12-guide_apply.png](screenshots/12-guide_apply.png)

### new_experience
![13-new_experience.png](screenshots/13-new_experience.png)

### add_departure
![14-add_departure.png](screenshots/14-add_departure.png)

### guide_bookings
![15-guide_bookings.png](screenshots/15-guide_bookings.png)

### guide_confirm
![16-guide_confirm.png](screenshots/16-guide_confirm.png)

### guide_reviews
![17-guide_reviews.png](screenshots/17-guide_reviews.png)

### admin
![18-admin.png](screenshots/18-admin.png)

### admin_data
![19-admin_data.png](screenshots/19-admin_data.png)

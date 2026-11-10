# Tariffa Giusta

_Il prezzo giusto per ogni camera e ogni notte, ogni mattina._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (17 checks passed)

## Description given to the app builder (Italian)

Vorrei Tariffa Giusta, un assistente di revenue management per hotel. Il revenue manager o il titolare collega il gestionale della struttura (PMS) per leggere prenotazioni, occupazione, tariffe e cancellazioni, e inserisce tipologie di camera, prezzi minimi e massimi, regole di soggiorno minimo ed eventi in città che conosce. Ogni mattina un agente analizza il ritmo delle prenotazioni per ogni data futura rispetto all'anno precedente, il calendario di festività ed eventi, e propone il prezzo per ogni camera e notte dei prossimi 365 giorni, spiegando il motivo di ogni variazione. Ci piacerebbe confrontare i prezzi dei concorrenti, ma le OTA lo vietano, quindi l'app usa solo dati interni dell'hotel e informazioni che l'albergatore inserisce a mano. Le proposte compaiono in un calendario a colori: il revenue manager approva in blocco o modifica, e dopo l'approvazione i prezzi devono essere inviati al PMS e al channel manager. Se l'occupazione di una data cambia bruscamente arriva un alert. Ogni hotel vede solo i suoi dati; i gruppi vedono tutte le strutture. Abbonamento mensile per camera.

## Features not expressible today (spec.extensions)

- **color_calendar**: Calendario a colori delle proposte (camera × notte, colore per livello di variazione) con approvazione in blocco e modifica per cella: non disponibile come vista; per ora tabella delle proposte e approvazione dell'intera proposta.
- **per_room_pricing**: Abbonamento calcolato per numero di camere: approssimato con tre piani a fasce di camere.
- **pms_connectors**: Connettori specifici per PMS e channel manager (host e formato API reali di ogni fornitore, eventuale OAuth): da definire per fornitore.
- **proposal_editing**: Modifica cella per cella dei prezzi proposti prima dell'approvazione e stato 'sent' dopo l'invio.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### hotel
![03-hotel.png](screenshots/03-hotel.png)

### rooms
![04-rooms.png](screenshots/04-rooms.png)

### room_list
![05-room_list.png](screenshots/05-room_list.png)

### event_new
![06-event_new.png](screenshots/06-event_new.png)

### event_list
![07-event_list.png](screenshots/07-event_list.png)

### watches
![08-watches.png](screenshots/08-watches.png)

### proposals
![09-proposals.png](screenshots/09-proposals.png)

### approve
![10-approve.png](screenshots/10-approve.png)

### alerts
![11-alerts.png](screenshots/11-alerts.png)

### group_overview
![12-group_overview.png](screenshots/12-group_overview.png)

### account
![13-account.png](screenshots/13-account.png)

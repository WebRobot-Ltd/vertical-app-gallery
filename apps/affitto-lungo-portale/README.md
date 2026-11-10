# Affitti Medio-Lungo

_Cerca, candidati e prenota la visita: tutto in un portale._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (27 checks passed)

## Description given to the app builder (Italian)

Descrivo solo lo strato software di un servizio di affitti a medio e lungo termine: il portale di ricerca, candidatura e gestione, non l'attivita di intermediazione immobiliare svolta dall'agenzia. L'inquilino in cerca compila un modulo con citta, budget, date, durata e preferenze; un agente propone gli alloggi compatibili tra quelli pubblicati sulla piattaforma dai gestori e spiega perche. L'inquilino salva i preferiti, invia la candidatura caricando i documenti richiesti e prenota una visita scegliendo uno slot. Il gestore dell'alloggio pubblica gli annunci con foto, prezzo e disponibilita, riceve le candidature, le valuta e conferma; un operatore umano dell'agenzia segue la trattativa e la firma del contratto fuori dalla piattaforma. Entrambe le parti comunicano in chat e ricevono aggiornamenti via email. Gli annunci provengono solo dai gestori che li caricano sulla piattaforma. L'inquilino vede le proprie candidature, il gestore i propri alloggi e le candidature ricevute, l'admin tutto. Monetizzazione: commissione sul contratto concluso. In italiano e inglese.

## Features not expressible today (spec.extensions)

- **manager_chat**: Direct human-to-human chat between tenant and manager is not available yet; the assistant chat is provided instead. Per-manager filtering of 'my listings' is also not available: listings are a shared catalogue and each carries manager_email.
- **contract_signing**: Contract negotiation and signing are done by an agency operator outside the platform; the operator marks the application contract_signed, which triggers the fee.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### search
![03-search.png](screenshots/03-search.png)

### history
![04-history.png](screenshots/04-history.png)

### browse
![05-browse.png](screenshots/05-browse.png)

### favorite
![06-favorite.png](screenshots/06-favorite.png)

### my_favorites
![07-my_favorites.png](screenshots/07-my_favorites.png)

### apply
![08-apply.png](screenshots/08-apply.png)

### my_applications
![09-my_applications.png](screenshots/09-my_applications.png)

### book
![10-book.png](screenshots/10-book.png)

### publish
![11-publish.png](screenshots/11-publish.png)

### received
![12-received.png](screenshots/12-received.png)

### review
![13-review.png](screenshots/13-review.png)

### bookings
![14-bookings.png](screenshots/14-bookings.png)

### chat
![15-chat.png](screenshots/15-chat.png)

### account
![16-account.png](screenshots/16-account.png)

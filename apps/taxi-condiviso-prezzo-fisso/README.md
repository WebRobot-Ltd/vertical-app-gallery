# TaxiInsieme

_Taxi con prezzo massimo garantito, e se condividi paghi meno._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (15 checks passed)

## Description given to the app builder (Italian)

Voglio TaxiInsieme, un servizio di taxi con prezzo massimo garantito e possibilità di condividere la corsa. L'utente inserisce partenza, destinazione e orario; un calcolo stima il prezzo massimo dalla distanza e dalle tariffe comunali pubblicate, e propone un prezzo ridotto se accetta di condividere la corsa con altri passeggeri sulla stessa direzione. Le richieste compatibili vengono raggruppate e inviate alle cooperative taxi partner, che le accettano dalla loro coda. L'utente riceve conferma via email e paga con carta. Ogni utente vede solo le proprie corse. Commissione per corsa.

## Features not expressible today (spec.extensions)

- **card_checkout_per_ride**: Card payment of each accepted ride with the per-ride commission is declared via per_transaction billing; a dedicated checkout step per ride and the update of the user's ride status after cooperative acceptance may need custom logic.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_ride
![03-new_ride.png](screenshots/03-new_ride.png)

### rides
![04-rides.png](screenshots/04-rides.png)

### history
![05-history.png](screenshots/05-history.png)

### account
![06-account.png](screenshots/06-account.png)

### queue
![07-queue.png](screenshots/07-queue.png)

### accept
![08-accept.png](screenshots/08-accept.png)

### tariffs_admin
![09-tariffs_admin.png](screenshots/09-tariffs_admin.png)

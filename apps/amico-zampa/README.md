# PappaSu

_Il piano alimentare su misura per il tuo cane, in abbonamento._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (18 checks passed)

## Description given to the app builder (Italian)

Questo e lo strato software di un servizio di cibo per cani su abbonamento: descrivo l'app di prenotazione e gestione, non la produzione o la consegna fisica del cibo. Il padrone compila un modulo con dati del cane: razza, eta, peso, livello di attivita, allergie, obiettivo (mantenimento, dimagrimento). Un agente calcola il fabbisogno calorico e nutrizionale e propone un piano alimentare personalizzato con razioni giornaliere e prodotti consigliati, spiegando le scelte. Il padrone conferma e attiva un abbonamento ricorrente con carta, scegliendo la frequenza delle forniture; l'app gestisce il calendario delle consegne previste, permette di mettere in pausa o modificare il piano e invia promemoria via email prima di ogni rinnovo. Quando il cane cresce o cambiano le esigenze, l'agente aggiorna il piano e ricalcola le razioni. Il padrone vede solo i propri cani e abbonamenti, l'admin gestisce prodotti e piani. Monetizzazione: abbonamento ricorrente. In italiano.

## Features not expressible today (spec.extensions)

- **card_delivery_note**: Il pagamento ricorrente con carta dell'abbonamento è gestito da Stripe Connect tramite i piani di fatturazione; il costo dei prodotti inviati e la logistica fisica sono fuori dall'app.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_plan
![03-new_plan.png](screenshots/03-new_plan.png)

### plans_history
![04-plans_history.png](screenshots/04-plans_history.png)

### dog_form
![05-dog_form.png](screenshots/05-dog_form.png)

### my_dogs
![06-my_dogs.png](screenshots/06-my_dogs.png)

### subscribe
![07-subscribe.png](screenshots/07-subscribe.png)

### my_subs
![08-my_subs.png](screenshots/08-my_subs.png)

### my_deliveries
![09-my_deliveries.png](screenshots/09-my_deliveries.png)

### products_list
![10-products_list.png](screenshots/10-products_list.png)

### product_admin
![11-product_admin.png](screenshots/11-product_admin.png)

### account
![12-account.png](screenshots/12-account.png)

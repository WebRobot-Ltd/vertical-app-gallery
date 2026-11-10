# SettimanaInTavola

_Il menu della settimana che non spreca nulla, con la spesa già pronta._

**Manifest:** valid (schema + runtime contract) · **Functional test:** 1 failure(s) (17 checks passed)

## Description given to the app builder (Italian)

Ci serve SettimanaInTavola, un pianificatore di pasti contro lo spreco. L'utente indica numero di persone, preferenze, allergie e budget. Ogni giovedì un agente propone il menu della settimana successiva con ricette che riusano gli stessi ingredienti per evitare avanzi, e genera la lista della spesa con le quantità esatte. L'utente può sostituire una ricetta e la lista si aggiorna. Il fornitore partner riceve gli ordini confermati in una coda e prepara le box con gli ingredienti porzionati per la consegna. Ogni utente vede solo i propri menu e ordini. Abbonamento settimanale per numero di pasti.

## Functional test: what did not pass

- **run started and report ready** (view swap): required menu (options from collection:menus) has no option

## Features not expressible today (spec.extensions)

- **weekly_billing**: Weekly billing interval is not available yet: plans are monthly (4 weeks) per number of meals. Box ingredient cost and delivery fees to the supplier are not handled by the app.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### setup
![03-setup.png](screenshots/03-setup.png)

### menus_view
![04-menus_view.png](screenshots/04-menus_view.png)

### list_view
![05-list_view.png](screenshots/05-list_view.png)

### swap
![06-swap.png](screenshots/06-swap.png)

### swaps
![07-swaps.png](screenshots/07-swaps.png)

### orders_view
![08-orders_view.png](screenshots/08-orders_view.png)

### confirm_order
![09-confirm_order.png](screenshots/09-confirm_order.png)

### queue
![10-queue.png](screenshots/10-queue.png)

### queue_work
![11-queue_work.png](screenshots/11-queue_work.png)

### account
![12-account.png](screenshots/12-account.png)

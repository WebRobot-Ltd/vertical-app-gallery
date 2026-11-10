# TrovaVet

_Il veterinario specialista giusto, vicino a casa tua._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (36 checks passed)

## Description given to the app builder (Italian)

Requisito: piattaforma TrovaVet per proprietari di animali che cercano un veterinario specialista (cardiologia, dermatologia, ortopedia, esotici) vicino a casa. Ruoli: proprietario, veterinario/clinica, admin. Il veterinario crea il profilo con specializzazioni, specie trattate, indirizzo, orari, tariffe indicative e titoli; l'admin verifica l'iscrizione all'ordine prima della pubblicazione. Il proprietario compila un modulo: specie, razza, età, sintomo o esame richiesto, comune, distanza massima, urgenza. Un agente interpreta la descrizione del problema, la mappa sulla specializzazione corretta senza fare diagnosi, cerca nella collezione dei professionisti e restituisce una lista ordinata per pertinenza e distanza, visualizzata anche su mappa. Il proprietario sceglie uno slot libero dal calendario del veterinario, sincronizzato con il suo calendario esterno, e invia la richiesta di prenotazione; il veterinario accetta o propone un altro orario. Seguono email di conferma e promemoria 24 ore prima, più un SMS opzionale. Il proprietario vede solo le sue prenotazioni e la scheda dell'animale; il veterinario vede solo le richieste ricevute; l'admin vede tutto e gestisce le recensioni dopo la visita, che vengono moderate. Gratuito per i proprietari, abbonamento mensile per le cliniche. Italiano.

## Functional test: what did not pass

- **saved record shown where its collection is read** (view my_bookings): a record was saved in appointments (by admin) but the page does not show it (as owner) _(warning)_
- **saved record shown where its collection is read** (view vet_requests): a record was saved in appointments (by admin) but the page does not show it (as vet) _(warning)_
- **saved record shown where its collection is read** (view admin_bookings): a record was saved in appointments (by admin) but the page does not show it (as admin) _(warning)_

## Features not expressible today (spec.extensions)

- **calendar_sync**: Sincronizzazione del calendario del veterinario con Google/Outlook: richiede OAuth, non ancora disponibile. Per ora gli slot sono definiti nel profilo (campo slots).
- **sms_reminder**: SMS opzionale di conferma e promemoria: SMS non ancora disponibile; il cellulare e' raccolto in prenotazione per uso futuro. Email attive.
- **public_reviews**: Visualizzazione pubblica delle recensioni approvate nel catalogo e media voti per veterinario: da collegare al catalogo dopo la moderazione.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### find
![03-find.png](screenshots/03-find.png)

### searches
![04-searches.png](screenshots/04-searches.png)

### map
![05-map.png](screenshots/05-map.png)

### book
![06-book.png](screenshots/06-book.png)

### my_bookings
![07-my_bookings.png](screenshots/07-my_bookings.png)

### pet_new
![08-pet_new.png](screenshots/08-pet_new.png)

### pets
![09-pets.png](screenshots/09-pets.png)

### review_new
![10-review_new.png](screenshots/10-review_new.png)

### vet_profile
![11-vet_profile.png](screenshots/11-vet_profile.png)

### vet_requests
![12-vet_requests.png](screenshots/12-vet_requests.png)

### respond
![13-respond.png](screenshots/13-respond.png)

### admin_vets
![14-admin_vets.png](screenshots/14-admin_vets.png)

### admin_verify
![15-admin_verify.png](screenshots/15-admin_verify.png)

### admin_reviews
![16-admin_reviews.png](screenshots/16-admin_reviews.png)

### admin_review_edit
![17-admin_review_edit.png](screenshots/17-admin_review_edit.png)

### admin_bookings
![18-admin_bookings.png](screenshots/18-admin_bookings.png)

### account
![19-account.png](screenshots/19-account.png)

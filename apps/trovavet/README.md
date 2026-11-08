# TrovaVet

_Il veterinario specialista giusto, vicino a casa._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Requisito: piattaforma TrovaVet per proprietari di animali che cercano un veterinario specialista (cardiologia, dermatologia, ortopedia, esotici) vicino a casa. Ruoli: proprietario, veterinario/clinica, admin. Il veterinario crea il profilo con specializzazioni, specie trattate, indirizzo, orari, tariffe indicative e titoli; l'admin verifica l'iscrizione all'ordine prima della pubblicazione. Il proprietario compila un modulo: specie, razza, età, sintomo o esame richiesto, comune, distanza massima, urgenza. Un agente interpreta la descrizione del problema, la mappa sulla specializzazione corretta senza fare diagnosi, cerca nella collezione dei professionisti e restituisce una lista ordinata per pertinenza e distanza, visualizzata anche su mappa. Il proprietario sceglie uno slot libero dal calendario del veterinario, sincronizzato con il suo calendario esterno, e invia la richiesta di prenotazione; il veterinario accetta o propone un altro orario. Seguono email di conferma e promemoria 24 ore prima, più un SMS opzionale. Il proprietario vede solo le sue prenotazioni e la scheda dell'animale; il veterinario vede solo le richieste ricevute; l'admin vede tutto e gestisce le recensioni dopo la visita, che vengono moderate. Gratuito per i proprietari, abbonamento mensile per le cliniche. Italiano.

## Funzioni non esprimibili oggi (spec.extensions)

- **map_view**: Visualizzazione dei risultati su mappa e calcolo esatto della distanza (geocodifica) non disponibili: la distanza è stimata dall'agente e l'elenco è testuale.
- **calendar_sync**: Sincronizzazione con il calendario esterno del veterinario (Google/Outlook) richiede credenziali per utente, non ancora disponibili: gli slot liberi sono inseriti a mano nel profilo.
- **notifications**: Email di conferma, promemoria 24 ore prima e SMS opzionale non sono ancora disponibili: lo stato della prenotazione si vede nelle viste.
- **vet_visibility**: Il veterinario vede la richiesta tramite condivisione (sharing editor) del record e la decisione in 'Da decidere'; l'invio del record al veterinario scelto va completato nello studio.
- **documents**: Il caricamento di file (titoli, referti) non è disponibile: usare link o testo.
- **free_for_owners**: I proprietari usano l'app gratuitamente: nessun costo per ricerca è dichiarato; solo le cliniche hanno un abbonamento.

## Screenshot (runtime interpretativo)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_search
![03-new_search.png](screenshots/03-new_search.png)

### searches
![04-searches.png](screenshots/04-searches.png)

### my_pets
![05-my_pets.png](screenshots/05-my_pets.png)

### my_bookings
![06-my_bookings.png](screenshots/06-my_bookings.png)

### my_reviews
![07-my_reviews.png](screenshots/07-my_reviews.png)

### my_profile
![08-my_profile.png](screenshots/08-my_profile.png)

### requests
![09-requests.png](screenshots/09-requests.png)

### decisions
![10-decisions.png](screenshots/10-decisions.png)

### all_vets
![11-all_vets.png](screenshots/11-all_vets.png)

### all_reviews
![12-all_reviews.png](screenshots/12-all_reviews.png)

### admin
![13-admin.png](screenshots/13-admin.png)

### account
![14-account.png](screenshots/14-account.png)


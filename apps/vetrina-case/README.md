# Vetrina Case

_Annunci immobiliari delle agenzie, con stima automatica del valore._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (29 checks passed)

## Description given to the app builder (Italian)

Voglio Vetrina Case, un portale di annunci immobiliari pubblicati dalle agenzie, con una stima automatica del valore. Descrivo solo lo strato software, non l'attività di mediazione. Le agenzie si registrano, caricano gli annunci con foto, planimetria, prezzo, superficie, classe energetica e posizione, oppure li importano dal loro gestionale con un feed. Il visitatore cerca per zona sulla mappa, prezzo, locali e caratteristiche, salva le ricerche e riceve un'email quando compare un annuncio nuovo compatibile. Può contattare l'agenzia con un modulo, che arriva all'agente. Un servizio di stima chiede indirizzo, metri quadri, piano, stato e anno di costruzione e calcola un intervallo di valore usando le quotazioni dell'Osservatorio del Mercato Immobiliare e i prezzi degli annunci presenti sul portale; il proprietario che chiede la stima può decidere di essere contattato da un'agenzia della zona. Un agente controlla gli annunci duplicati o con dati incoerenti e li segnala all'admin. Ogni agenzia vede i suoi annunci e contatti. Le agenzie pagano un abbonamento mensile per numero di annunci.

## Features not expressible today (spec.extensions)

- **listing_sync**: Le modifiche e le cancellazioni di un annuncio dal form non si propagano ancora alla copia pubblica; il feed webhook aggiorna per external_id. Geocodifica automatica dell'indirizzo (lat/lon) e precompilazione dell'agenzia nel modulo contatto dal singolo annuncio non sono ancora disponibili.
- **lead_routing**: I proprietari che chiedono di essere contattati arrivano all'admin, che li inoltra alle agenzie della zona: l'assegnazione automatica per zona non è ancora disponibile. I dati OMI vengono letti dall'agente via WebRobot MCP (nessuna API ufficiale).

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### map
![03-map.png](screenshots/03-map.png)

### listings
![04-listings.png](screenshots/04-listings.png)

### contact
![05-contact.png](screenshots/05-contact.png)

### new_valuation
![06-new_valuation.png](screenshots/06-new_valuation.png)

### valuations
![07-valuations.png](screenshots/07-valuations.png)

### searches
![08-searches.png](screenshots/08-searches.png)

### new_listing
![09-new_listing.png](screenshots/09-new_listing.png)

### my_listings
![10-my_listings.png](screenshots/10-my_listings.png)

### my_contacts
![11-my_contacts.png](screenshots/11-my_contacts.png)

### flags
![12-flags.png](screenshots/12-flags.png)

### leads
![13-leads.png](screenshots/13-leads.png)

### account
![14-account.png](screenshots/14-account.png)

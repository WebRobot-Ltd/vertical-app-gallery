# Osservatorio Talenti

_Scouting calcistico: shortlist, radar e note, sul profilo che cerca il tuo club._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (18 checks passed)

## Description given to the app builder (Italian)

Ci serve Osservatorio Talenti, un'app di scouting per società di calcio dilettantistiche e professionistiche. Il direttore sportivo del club è admin e invita gli osservatori. Il club definisce il profilo cercato: ruolo, età massima, piede, caratteristiche fisiche e tecniche, budget di cartellino. Un agente analizza i dati delle partite e dei giocatori: risultati storici di football-data e gli eventi open di StatsBomb, che però sono utilizzabili solo per scopi non commerciali, e i dati evento completi dei campionati che il club ottiene da un fornitore a licenza. Calcola indicatori per ruolo, confronta i candidati con il profilo e con i titolari attuali, e produce una shortlist con schede giocatore, grafici radar e note. Gli osservatori aggiungono valutazioni dal campo con un modulo (partita vista, voto, note) e l'agente le integra nel punteggio. Ogni lunedì arriva un'email con i giocatori cresciuti di più. Ogni club vede solo le proprie liste e note; i dati statistici sono condivisi. Abbonamento stagionale per club, con template di analisi diversi per prima squadra e settore giovanile.

## Features not expressible today (spec.extensions)

- **licensed_provider_api**: Connessione diretta all'API del fornitore a licenza non possibile senza host noto: il club carica l'export nel form. Se il fornitore ha una API con chiave, aggiungere credenziale e tool http.
- **club_workspace**: La condivisione tra staff del club usa la lista email 'members' di ogni record; non esiste ancora un'entità club con inviti automatici.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_analysis
![03-new_analysis.png](screenshots/03-new_analysis.png)

### analyses
![04-analyses.png](screenshots/04-analyses.png)

### profile_form
![05-profile_form.png](screenshots/05-profile_form.png)

### profiles
![06-profiles.png](screenshots/06-profiles.png)

### starters_form
![07-starters_form.png](screenshots/07-starters_form.png)

### rating_form
![08-rating_form.png](screenshots/08-rating_form.png)

### ratings
![09-ratings.png](screenshots/09-ratings.png)

### shortlist_view
![10-shortlist_view.png](screenshots/10-shortlist_view.png)

### watches
![11-watches.png](screenshots/11-watches.png)

### account
![12-account.png](screenshots/12-account.png)

# CalcioAnalytics

_Indicatori avanzati su giocatori e squadre, aggiornati dopo ogni giornata._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (19 checks passed)

## Description given to the app builder (Italian)

CalcioAnalytics e uno strumento di data intelligence per societa calcistiche, osservatori e settori giovanili. L'analista della societa inserisce le squadre e i giocatori da seguire e importa i dati delle partite da fonti dati calcistiche concesse in licenza o inserite dal cliente (eventi di gioco, minuti, esiti). Un agente calcola indicatori avanzati per ogni giocatore e squadra, per esempio contributo atteso, qualita delle conclusioni e tendenze di rendimento, e li aggiorna dopo ogni giornata. L'analista vede dashboard e schede giocatore con grafici confrontabili tra atleti e periodi, e puo fare domande in chat tipo "mostrami i centrocampisti in crescita nelle ultime cinque partite". Un report settimanale via email riassume le variazioni di forma della rosa. I dati da dispositivi indossabili dei giocatori restano fuori: qui si tratta solo dello strato software di analisi, senza raccolta da wearable. Ogni societa vede solo i propri dati. Abbonamento stagionale per numero di squadre. In italiano e inglese.

## Features not expressible today (spec.extensions)

- **licensed_feeds**: Direct connectors to licensed football data providers are not available; data enters as files uploaded by the club (or via its own API key if a provider offers one).

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### import
![03-import.png](screenshots/03-import.png)

### imports
![04-imports.png](screenshots/04-imports.png)

### team_form
![05-team_form.png](screenshots/05-team_form.png)

### teams
![06-teams.png](screenshots/06-teams.png)

### player_form
![07-player_form.png](screenshots/07-player_form.png)

### players
![08-players.png](screenshots/08-players.png)

### dashboard
![09-dashboard.png](screenshots/09-dashboard.png)

### metrics
![10-metrics.png](screenshots/10-metrics.png)

### ask
![11-ask.png](screenshots/11-ask.png)

### watches
![12-watches.png](screenshots/12-watches.png)

### account
![13-account.png](screenshots/13-account.png)

# GridWise Energy

_Cruscotto e agenti per la tua rete energetica locale._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (12 checks passed)

## Description given to the app builder (Italian)

Descrivo solo lo strato software di un sistema di gestione dell'energia rinnovabile: il cruscotto e gli agenti che leggono i dati, non i dispositivi hardware di controllo, che sono un prodotto a parte. Il gestore registra gli impianti, le batterie e i punti di consumo di una rete locale e collega la fonte dei dati (il sistema di misura) tramite webhook. Un agente mostra in tempo quasi reale produzione, consumo, carica delle batterie e scambio con la rete, calcola l'autoconsumo e stima, in base alle previsioni meteo da Open-Meteo e ai profili di consumo, come conviene usare o accumulare l'energia nelle ore successive, proponendo i suggerimenti al gestore. Quando rileva un funzionamento anomalo apre una segnalazione per il tecnico. Il gestore vede la dashboard della propria rete e un report periodico via email con autoconsumo e risparmio; i tecnici vedono gli allarmi assegnati. Ogni gestore vede solo i propri impianti. Abbonamento mensile in base alla potenza gestita. In italiano e inglese.

## Features not expressible today (spec.extensions)

- **webhook_owner**: The metering webhook must identify the operator (per-operator hook secret) so readings are saved in that operator's records; device hardware control is out of scope.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### dashboard
![03-dashboard.png](screenshots/03-dashboard.png)

### add_asset
![04-add_asset.png](screenshots/04-add_asset.png)

### assets
![05-assets.png](screenshots/05-assets.png)

### watches
![06-watches.png](screenshots/06-watches.png)

### reports_setup
![07-reports_setup.png](screenshots/07-reports_setup.png)

### advice_list
![08-advice_list.png](screenshots/08-advice_list.png)

### tickets
![09-tickets.png](screenshots/09-tickets.png)

### account
![10-account.png](screenshots/10-account.png)

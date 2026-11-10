# VetrinaAI

_Scopri come gli assistenti AI parlano del tuo hotel._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (13 checks passed)

## Description given to the app builder (Italian)

Vorrei costruire VetrinaAI, un servizio in abbonamento per hotel che vogliono sapere come vengono raccontati dagli assistenti di intelligenza artificiale. L'albergatore registra la struttura: nome, città, categoria, punti di forza, concorrenti diretti e le domande tipiche dei suoi ospiti. Ogni settimana un agente interroga i principali modelli linguistici tramite le loro API ufficiali con una batteria di domande realistiche ("miglior hotel per famiglie a Rimini", "hotel con spa vicino al centro di Firenze"), registra se l'hotel viene citato, in che posizione, con quali aggettivi e accanto a quali concorrenti. Poi un secondo agente confronta i risultati con la settimana precedente, calcola un indice di visibilità e scrive raccomandazioni concrete: testi da migliorare sul sito, informazioni mancanti, recensioni da stimolare. L'albergatore vede una dashboard con l'andamento, la tabella delle risposte e il report settimanale che arriva anche via email. Le catene vedono tutte le loro strutture, ogni direttore solo la propria. Abbonamento mensile per struttura, con sconto per gruppi. Italiano e inglese.

## Features not expressible today (spec.extensions)

- **group_discount_per_property**: Per-property monthly price with automatic volume discount is approximated by the group and chain plans; exact per-seat metering is not available yet.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### hotel_new
![03-hotel_new.png](screenshots/03-hotel_new.png)

### hotels
![04-hotels.png](screenshots/04-hotels.png)

### watches
![05-watches.png](screenshots/05-watches.png)

### dashboard
![06-dashboard.png](screenshots/06-dashboard.png)

### trend
![07-trend.png](screenshots/07-trend.png)

### latest
![08-latest.png](screenshots/08-latest.png)

### answers_table
![09-answers_table.png](screenshots/09-answers_table.png)

### history
![10-history.png](screenshots/10-history.png)

### account
![11-account.png](screenshots/11-account.png)

# RadarAgevolazioni

_I bandi giusti per la tua impresa, ogni mattina, con il punteggio di ammissibilità._

**Manifest:** valid (schema + runtime contract) · **Functional test:** 1 failure(s) (20 checks passed)

## Description given to the app builder (Italian)

Ci serve RadarAgevolazioni, una piattaforma per PMI e consulenti di finanza agevolata. Il cliente si registra e compila il profilo aziendale: codice ATECO, regione e provincia della sede, numero di dipendenti, fatturato, anno di costituzione, tipo di investimento previsto (macchinari, digitale, assunzioni, energia) e importo. Ogni mattina un agente monitora più di trenta fonti pubbliche, tra cui incentivi.gov.it, i portali delle Regioni, il Registro Nazionale Aiuti e il portale EU Funding & Tenders, indicizza i nuovi bandi e ne estrae requisiti, scadenze, dotazione e percentuale di contributo. Un secondo agente confronta ogni bando con il profilo e calcola un punteggio di ammissibilità, spiegando quali requisiti sono soddisfatti e quali mancano. Il cliente riceve un'email con i bandi compatibili e vede una dashboard con tabella filtrabile e motore di ricerca full-text. Per i bandi scelti l'agente prepara una bozza di domanda e di relazione tecnica, che un consulente dello studio deve rivedere e approvare prima che il cliente la scarichi. Il consulente vede tutti i clienti assegnati, il cliente solo i propri dati. Abbonamento mensile tramite Stripe, più una tariffa a pratica per la bozza di domanda.

## Functional test: what did not pass

- **run started and report ready** (view new_draft): required match (options from collection:matches) has no option

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### profile
![03-profile.png](screenshots/03-profile.png)

### dashboard
![04-dashboard.png](screenshots/04-dashboard.png)

### grants
![05-grants.png](screenshots/05-grants.png)

### radar
![06-radar.png](screenshots/06-radar.png)

### new_draft
![07-new_draft.png](screenshots/07-new_draft.png)

### my_drafts
![08-my_drafts.png](screenshots/08-my_drafts.png)

### history
![09-history.png](screenshots/09-history.png)

### clients
![10-clients.png](screenshots/10-clients.png)

### client_matches
![11-client_matches.png](screenshots/11-client_matches.png)

### drafts_review
![12-drafts_review.png](screenshots/12-drafts_review.png)

### approvals
![13-approvals.png](screenshots/13-approvals.png)

### account
![14-account.png](screenshots/14-account.png)

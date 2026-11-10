# NormaRadar

_Il radar normativo europeo, su misura per la tua azienda._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (13 checks passed)

## Description given to the app builder (Italian)

Voglio un'app di monitoraggio normativo per aziende regolate (banche, fintech, assicurazioni, crypto). L'azienda descrive il suo profilo: settore, paesi in cui opera, prodotti, normative che la riguardano (es. DORA, MiCAR, AI Act, GDPR, PSD2). Ogni giorno un agente controlla le novità normative europee su EUR-Lex (ha feed RSS e un'API pubblica, il riuso è libero con attribuzione) e manda un radar con le novità rilevanti per quell'azienda, con priorità alta/media/bassa e il perché. L'utente può caricare le sue policy interne (PDF o Word): un agente fa la gap analysis tra una norma scelta e le policy, indica le clausole non conformi e propone il testo correttivo. C'è anche una chat per fare domande sulle norme: risponde solo citando la fonte (articolo e documento) e dice 'non lo so' se non trova la fonte. Ogni output va approvato da un responsabile compliance prima di essere condiviso. Nome: NormaRadar. Lingue italiano e inglese. Abbonamento mensile per il radar, crediti per gap analysis e chat.

## Features not expressible today (spec.extensions)

- **chat_approval**: The chat answers are interactive and are not put through the approval step; only radar and gap analysis reports require compliance approval before sharing.
- **share_channel**: Sharing an approved output with colleagues is by exporting or printing the report; no in-app team sharing yet.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### profile
![03-profile.png](screenshots/03-profile.png)

### watches
![04-watches.png](screenshots/04-watches.png)

### radar_feed
![05-radar_feed.png](screenshots/05-radar_feed.png)

### new_gap
![06-new_gap.png](screenshots/06-new_gap.png)

### gaps
![07-gaps.png](screenshots/07-gaps.png)

### chat
![08-chat.png](screenshots/08-chat.png)

### approvals
![09-approvals.png](screenshots/09-approvals.png)

### account
![10-account.png](screenshots/10-account.png)

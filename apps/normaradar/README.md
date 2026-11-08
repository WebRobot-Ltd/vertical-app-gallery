# NormaRadar

_Il radar normativo europeo per aziende regolate._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Voglio un'app di monitoraggio normativo per aziende regolate (banche, fintech, assicurazioni, crypto). L'azienda descrive il suo profilo: settore, paesi in cui opera, prodotti, normative che la riguardano (es. DORA, MiCAR, AI Act, GDPR, PSD2). Ogni giorno un agente controlla le novità normative europee su EUR-Lex (ha feed RSS e un'API pubblica, il riuso è libero con attribuzione) e manda un radar con le novità rilevanti per quell'azienda, con priorità alta/media/bassa e il perché. L'utente può caricare le sue policy interne (PDF o Word): un agente fa la gap analysis tra una norma scelta e le policy, indica le clausole non conformi e propone il testo correttivo. C'è anche una chat per fare domande sulle norme: risponde solo citando la fonte (articolo e documento) e dice 'non lo so' se non trova la fonte. Ogni output va approvato da un responsabile compliance prima di essere condiviso. Nome: NormaRadar. Lingue italiano e inglese. Abbonamento mensile per il radar, crediti per gap analysis e chat.

## Errori residui

- `spec: Additional properties are not allowed ('collections' was unexpected)`
- `runtime: /spec: must NOT have additional properties`

## Funzioni non esprimibili oggi (spec.extensions)

- **approval_gate**: Un output (voce del radar, gap analysis, risposta di chat) resta 'pending' e visibile solo al responsabile compliance finché non lo approva; solo gli output 'approved' sono condivisibili con gli altri utenti.


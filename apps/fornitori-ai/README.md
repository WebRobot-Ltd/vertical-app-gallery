# Fornitori AI

_Trova, verifica e confronta nuovi fornitori senza uscire dalla tua casella._

**Manifest status:** remaining errors

## Description given to the app builder (Italian)

Voglio un'app per gli uffici acquisti delle aziende. Il buyer descrive cosa deve comprare (categoria, specifiche tecniche, quantità, area geografica, certificazioni richieste come ISO 9001 o ISO 14001, scadenza). Un agente cerca nuovi fornitori sul web e nei siti aziendali, verifica partita IVA (VIES) e certificazioni dichiarate, e propone una shortlist con il perché di ogni fornitore. Il buyer approva la shortlist e il testo della richiesta di offerta. Poi l'app manda la richiesta di offerta via email ai fornitori approvati, a nome del buyer, con solleciti automatici dopo 3 e 7 giorni a chi non risponde, e un link per non ricevere più email. Le risposte arrivano in una casella: un agente le legge, estrae prezzo, tempi di consegna, condizioni e allegati, e compila una tabella comparativa delle offerte, segnalando i dati mancanti. Il database dei fornitori cresce con ogni richiesta. Nome: Fornitori AI. Lingua italiana. Piano mensile per azienda con un numero di richieste incluse.

## Remaining errors

- `spec: Additional properties are not allowed ('collections' was unexpected)`
- `runtime: /spec: must NOT have additional properties`

## Features not expressible today (spec.extensions)

- **approval_step**: Approvazione da parte del buyer di shortlist e testo RFQ prima dell'invio: lo stato della richiesta passa a 'approvata' solo dopo il consenso.
- **unsubscribe_link**: Link pubblico di disiscrizione nelle email ai fornitori; imposta suppliers.unsubscribed.
- **rfq_mailbox**: Casella dedicata per richiesta che riceve le risposte dei fornitori, letta dall'agente comparer.


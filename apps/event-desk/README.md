# Event Desk

_Location e fornitori per i tuoi eventi aziendali: preventivi, trattative e confronto, con la tua approvazione._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Un'app per chi organizza eventi aziendali (offsite, cene di team, convention). Il cliente compila un modulo: tipo di evento, città, date, numero di persone, budget, esigenze (sala riunioni, catering, accessibilità). Un team di agenti cerca sul web location e fornitori adatti, scrive a ciascun fornitore una richiesta di preventivo via email, legge le risposte che arrivano nella casella dell'app, risponde per negoziare prezzo e condizioni (anche più giri), e prepara un confronto delle offerte. Prima di inviare ogni email e prima di accettare un'offerta il cliente deve approvare. Ogni cliente vede solo i propri eventi e i propri fornitori. Si paga a crediti per evento organizzato. Italiano.

## Errori residui

- `agent negotiator: goalTemplate placeholder {event} is not a form field, a context key or a built-in`
- `runtime: agent negotiator: tool save_message is declared differently by another agent`
- `runtime: agent comparer: tool read_event is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **email_outbound**: Invio reale delle email ai fornitori dopo l'approvazione: oggi non disponibile. Le bozze approvate restano in 'messages' con stato approved e vanno inviate manualmente finché non esiste uno strumento di invio dall'app.
- **email_inbox**: La casella email dell'app (channel email) legge le risposte dei fornitori; il collegamento con la creazione dei record 'messages' inbound e la casella dedicata vanno configurati alla pubblicazione.


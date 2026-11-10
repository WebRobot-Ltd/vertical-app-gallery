# PartitaSerena

_Il tuo commercialista online per il regime forfettario._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (25 checks passed)

## Description given to the app builder (Italian)

Vorrei realizzare PartitaSerena, un servizio di commercialista online per liberi professionisti in regime forfettario. Il cliente si iscrive indicando codice ATECO, anno di apertura, cassa previdenziale e fatturato previsto; ogni volta che emette una fattura la registra con importo, cliente e data. L'app calcola in tempo reale tasse e contributi dovuti, mostra quanto accantonare e la soglia di ricavi rimanente prima di uscire dal regime. Un agente prepara il calendario delle scadenze personali (acconti, saldi, contributi INPS) e manda email di promemoria con l'importo dieci giorni prima. In chat il cliente fa domande fiscali e riceve risposte basate sulla documentazione dell'Agenzia delle Entrate; se la domanda è complessa la chat passa la richiesta al commercialista assegnato, che risponde entro 24 ore. La dichiarazione dei redditi viene preparata in bozza dall'app ma l'invio telematico lo fa sempre il professionista abilitato. Il cliente vede solo la sua posizione, il commercialista i suoi clienti. Abbonamento annuale. Italiano.

## Functional test: what did not pass

- **form saves a record** (form answer): only role consultant may fill it, and the test cannot hold that role _(warning)_
- **saved record shown where its collection is read** (view clients_list): a record was saved in clients (by user, admin) but the page does not show it (as consultant) _(warning)_

## Features not expressible today (spec.extensions)

- **consultant_assignment**: L'assegnazione del commercialista a ogni cliente è fatta da un amministratore (vista 'Assegna commercialista'); non è ancora automatica o per carico di lavoro.
- **telematic_filing**: L'invio telematico della dichiarazione non è fatto dall'app: la bozza approvata viene trasmessa dal professionista abilitato con i propri strumenti.
- **response_sla_24h**: Il termine di 24 ore per la risposta del commercialista è un impegno di servizio, non applicato dal sistema; il promemoria al professionista è una email alla creazione della richiesta.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### onboarding
![03-onboarding.png](screenshots/03-onboarding.png)

### new_invoice
![04-new_invoice.png](screenshots/04-new_invoice.png)

### position
![05-position.png](screenshots/05-position.png)

### deadlines_list
![06-deadlines_list.png](screenshots/06-deadlines_list.png)

### chat
![07-chat.png](screenshots/07-chat.png)

### my_questions
![08-my_questions.png](screenshots/08-my_questions.png)

### new_draft
![09-new_draft.png](screenshots/09-new_draft.png)

### drafts_history
![10-drafts_history.png](screenshots/10-drafts_history.png)

### account
![11-account.png](screenshots/11-account.png)

### clients_list
![12-clients_list.png](screenshots/12-clients_list.png)

### clients_positions
![13-clients_positions.png](screenshots/13-clients_positions.png)

### escalations_inbox
![14-escalations_inbox.png](screenshots/14-escalations_inbox.png)

### answer
![15-answer.png](screenshots/15-answer.png)

### approvals
![16-approvals.png](screenshots/16-approvals.png)

### admin_clients
![17-admin_clients.png](screenshots/17-admin_clients.png)

### assign
![18-assign.png](screenshots/18-assign.png)

# ScudoPMI

_La sicurezza informatica della tua PMI, senza un reparto IT._

**Manifest status:** remaining errors

## Description given to the app builder (Italian)

Vorrei realizzare ScudoPMI, un servizio di sorveglianza della sicurezza per piccole e medie imprese senza un reparto IT. Il titolare inserisce i domini aziendali, gli indirizzi email dei dipendenti e l'elenco dei servizi esposti che conosce. Ogni settimana un agente esegue controlli passivi e leciti: certificati SSL in scadenza, configurazione SPF, DKIM e DMARC, record DNS, presenza di indirizzi aziendali in archivi pubblici di data breach, versioni software dichiarate dai banner pubblici confrontate con il database CVE. Nessuna scansione attiva senza autorizzazione scritta. Un secondo agente trasforma i risultati in un punteggio di rischio e in un report comprensibile anche per chi non è tecnico, con le azioni da fare in ordine di priorità. C'è poi una parte di formazione: ogni mese i dipendenti ricevono via email una breve lezione e un quiz, e l'admin vede chi l'ha completato. Alert immediato via email se compare una nuova vulnerabilità critica o un breach. L'admin vede tutto, i dipendenti solo la propria formazione. Abbonamento mensile per numero di dipendenti, in italiano.

## Remaining errors

- `agent analyst: goalTemplate placeholder {instance} is not a form field, a context key or a built-in`

## Features not expressible today (spec.extensions)

- **email_alerts**: Gli alert immediati via email per nuove vulnerabilità critiche o breach non sono ancora disponibili: gli alert compaiono nella sezione 'Alert critici' del report. Servono notifiche email.
- **email_training**: L'invio mensile via email di lezione e quiz ai dipendenti non è ancora disponibile: i dipendenti, invitati come ruolo 'dipendente', leggono la lezione in app nella pagina Formazione.
- **company_training_overview**: La vista dell'admin con chi ha completato la formazione richiede di raggruppare gli utenti per azienda: oggi gli esiti sono per singolo utente (ownedBy user) e non vengono aggregati.
- **breach_sources**: I breach sono cercati su fonti pubbliche tramite WebRobot MCP; servizi con chiave API (es. HIBP) richiedono credenziali non ancora supportate.
- **per_employee_pricing**: Il prezzo per numero di dipendenti è modellato con tre piani a fasce; il limite di dipendenti per fascia non è applicato dal runtime.


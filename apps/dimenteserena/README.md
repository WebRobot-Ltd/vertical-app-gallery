# Di MenteSerena

_Prenota la seduta giusta con psicologi e medici iscritti agli albi._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Di MenteSerena descrivo solo lo strato software di prenotazione e gestione: le sedute le svolgono psicologi e medici iscritti agli albi, e la videochiamata è un servizio esterno. L'utente si registra e compila un questionario iniziale: motivo della richiesta, preferenze sul professionista (genere, approccio, lingua), fasce orarie disponibili, eventuale bonus o convenzione aziendale. Un agente legge il questionario solo per abbinare l'utente a tre professionisti compatibili, senza fare valutazioni cliniche, e mostra i loro profili; se dalle risposte emergono segnali di urgenza mostra subito i numeri di emergenza. L'utente sceglie, prenota uno slot dal calendario del professionista e paga la seduta o il pacchetto con carta; riceve email e promemoria con il link alla videochiamata. Il professionista vede solo i propri pazienti, tiene note cliniche private e cifrate, e può proporre il cambio di terapeuta. I dati sanitari sono trattati come categoria particolare: consenso esplicito, accesso registrato, nessun dato clinico visibile all'admin, che vede solo agenda, pagamenti e dashboard di utilizzo. Le aziende convenzionate vedono solo numeri aggregati anonimi. Pagamento per seduta o abbonamento. Italiano e inglese.

## Errori residui

- `agent rematcher: goalTemplate placeholder {reason_generic} is not a form field, a context key or a built-in`
- `agent rematcher: goalTemplate placeholder {suggested_professional} is not a form field, a context key or a built-in`
- `runtime: agent rematcher: tool search_professionals is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **calendar_booking**: Per-professional calendar with slot selection, locking and cancellation; for now slots are listed in the professionals catalogue and bookings are records.
- **email_reminders**: Confirmation emails and reminders with the video-call link are not available yet (no notifications); the link is shown in the bookings view.
- **encrypted_clinical_notes**: End-to-end encryption of clinical notes, access logging and per-patient access restricted to the assigned professional need runtime support (field encryption, audit log); consent text must be reviewed by the data protection officer.
- **admin_clinical_isolation**: Admin must not read intake, notes or change requests: requires role-level exclusion of these collections in the admin views and API.
- **company_aggregates**: Anonymous aggregates for partner companies (minimum cohort size) need a platform-side aggregation; no agent reads all users' records.
- **video_service**: Video call is an external service; the link is set manually on each booking.
- **per_session_payment**: Per-session card payment is modelled with credit packs; direct per-booking checkout and payout to professionals is a gap.


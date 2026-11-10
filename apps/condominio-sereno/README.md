# Condominio Sereno

_Il condominio gestito in digitale: segnalazioni, spese, verbali e un assistente sempre disponibile._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (52 checks passed)

## Description given to the app builder (Italian)

Ci serve Condominio Sereno, un'app per gestire i condomini in modo digitale. Ci sono quattro ruoli: l'amministratore, i condomini, i fornitori e il consiglio di condominio. L'amministratore crea lo stabile con unità, millesimi e proprietari, e invita tutti. I condomini aprono segnalazioni con foto (guasto ascensore, infiltrazione), vedono le spese, i verbali e le comunicazioni, e possono chiedere informazioni a un assistente in chat che risponde su regolamento, bilancio e scadenze. Le email e PEC in arrivo all'indirizzo del condominio vengono lette da un agente che le classifica e collega a una pratica. Per una segnalazione l'agente chiede preventivi ai fornitori via email e li confronta; ogni spesa sopra una soglia deve essere approvata dall'amministratore e, se straordinaria, dal consiglio. A ogni evento, come un guasto o una scadenza, partono notifiche ai condomini interessati. Vogliamo che i condomini paghino le rate direttamente dall'app e che i documenti si carichino in archivio. Il condomino vede solo il suo stabile e la sua posizione. Abbonamento per unità immobiliare pagato dallo studio.

## Functional test: what did not pass

- **form saves a record** (form send_quote): only role fornitore may fill it, and the test cannot hold that role _(warning)_
- **trigger has its effect** (trigger rfq_notify_suppliers): email to role:fornitore: no such recipient in the test (role nobody holds or empty field) _(warning)_
- **trigger has its effect** (trigger comm_notify): email to role:condomino: no such recipient in the test (role nobody holds or empty field) _(warning)_
- **saved record shown where its collection is read** (view my_tickets): a record was saved in tickets (by admin) but the page does not show it (as condomino) _(warning)_
- **saved record shown where its collection is read** (view expenses_view): a record was saved in expenses (by admin-data, admin-data, admin) but the page does not show it (as condomino) _(warning)_
- **saved record shown where its collection is read** (view documents_view): a record was saved in documents (by admin-data, admin-data, admin) but the page does not show it (as condomino) _(warning)_
- **saved record shown where its collection is read** (view comms_view): a record was saved in communications (by admin-data, admin-data, admin) but the page does not show it (as condomino) _(warning)_

## Features not expressible today (spec.extensions)

- **rate_payments**: Pagamento delle rate direttamente dall'app da parte dei condomini verso lo studio: oggi i pagamenti Stripe Connect coprono solo i crediti/abbonamenti dell'app; la rata resta registrata e il pagamento va collegato in seguito.
- **per_unit_pricing**: L'abbonamento è a scaglioni di unità immobiliari (quota limitata da limits create:units), non un prezzo esatto per unità.
- **email_inbound**: L'indirizzo email/PEC del condominio deve inoltrare i messaggi al webhook /api/hooks/inbound_mail; la connessione di una casella PEC non è disponibile.
- **member_emails_fill**: Le spese, i documenti e le comunicazioni portano l'elenco email dei condomini dello stabile per limitare la visibilità; compilazione automatica dallo stabile non ancora disponibile.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_ticket
![03-new_ticket.png](screenshots/03-new_ticket.png)

### my_tickets
![04-my_tickets.png](screenshots/04-my_tickets.png)

### expenses_view
![05-expenses_view.png](screenshots/05-expenses_view.png)

### installments_view
![06-installments_view.png](screenshots/06-installments_view.png)

### documents_view
![07-documents_view.png](screenshots/07-documents_view.png)

### comms_view
![08-comms_view.png](screenshots/08-comms_view.png)

### assistant_chat
![09-assistant_chat.png](screenshots/09-assistant_chat.png)

### rfqs_view
![10-rfqs_view.png](screenshots/10-rfqs_view.png)

### send_quote
![11-send_quote.png](screenshots/11-send_quote.png)

### quotes_view
![12-quotes_view.png](screenshots/12-quotes_view.png)

### decisions
![13-decisions.png](screenshots/13-decisions.png)

### practices_view
![14-practices_view.png](screenshots/14-practices_view.png)

### admin_building
![15-admin_building.png](screenshots/15-admin_building.png)

### admin_unit
![16-admin_unit.png](screenshots/16-admin_unit.png)

### admin_supplier
![17-admin_supplier.png](screenshots/17-admin_supplier.png)

### admin_board
![18-admin_board.png](screenshots/18-admin_board.png)

### admin_document
![19-admin_document.png](screenshots/19-admin_document.png)

### admin_comm
![20-admin_comm.png](screenshots/20-admin_comm.png)

### admin_installment
![21-admin_installment.png](screenshots/21-admin_installment.png)

### admin_expense
![22-admin_expense.png](screenshots/22-admin_expense.png)

### account
![23-account.png](screenshots/23-account.png)

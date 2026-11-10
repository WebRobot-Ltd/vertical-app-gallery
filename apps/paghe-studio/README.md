# Portale Paghe

_Il portale per la gestione paghe e personale: dati, variabili mensili, controlli e cedolini in un unico posto._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (35 checks passed)

## Description given to the app builder (Italian)

Descrivo solo lo strato software di un servizio di gestione paghe e amministrazione del personale: il portale, non la parte di consulenza del lavoro ne gli adempimenti verso gli enti, che restano in capo a professionisti abilitati. L'azienda cliente registra i propri dipendenti con dati anagrafici, inquadramento, retribuzione e orario. Ogni mese il responsabile HR carica le variabili del periodo (presenze, assenze, straordinari, note spese) tramite un modulo o un file. Un agente verifica la coerenza dei dati inseriti, segnala valori mancanti o anomali e prepara una scheda riepilogativa per ciascun dipendente che il consulente del lavoro partner rivede e approva prima dell'elaborazione vera e propria. Una volta pronti, i cedolini vengono messi a disposizione: ogni dipendente accede alla propria area e scarica solo la propria busta paga e i propri documenti, l'HR vede tutta l'azienda, il consulente i clienti assegnati. Promemoria via email alle scadenze mensili. Abbonamento mensile per numero di dipendenti gestiti. Interfaccia in italiano.

## Functional test: what did not pass

- **saved record shown where its collection is read** (view employees): a record was saved in employees (by admin) but the page does not show it (as consultant) _(warning)_
- **saved record shown where its collection is read** (view variables): a record was saved in monthly_variables (by admin) but the page does not show it (as consultant) _(warning)_
- **saved record shown where its collection is read** (view payslips): a record was saved in payslips (by admin) but the page does not show it (as user) _(warning)_
- **saved record shown where its collection is read** (view documents): a record was saved in documents (by admin) but the page does not show it (as user) _(warning)_

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### company
![03-company.png](screenshots/03-company.png)

### employee_new
![04-employee_new.png](screenshots/04-employee_new.png)

### employees
![05-employees.png](screenshots/05-employees.png)

### period_new
![06-period_new.png](screenshots/06-period_new.png)

### variables_new
![07-variables_new.png](screenshots/07-variables_new.png)

### variables
![08-variables.png](screenshots/08-variables.png)

### check_run
![09-check_run.png](screenshots/09-check_run.png)

### checks
![10-checks.png](screenshots/10-checks.png)

### summaries
![11-summaries.png](screenshots/11-summaries.png)

### reviews
![12-reviews.png](screenshots/12-reviews.png)

### payslip_upload
![13-payslip_upload.png](screenshots/13-payslip_upload.png)

### payslips
![14-payslips.png](screenshots/14-payslips.png)

### document_upload
![15-document_upload.png](screenshots/15-document_upload.png)

### documents
![16-documents.png](screenshots/16-documents.png)

### account
![17-account.png](screenshots/17-account.png)

# Studio Dentistico

_Agenda, pazienti e comunicazioni per il tuo studio dentistico._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (28 checks passed)

## Description given to the app builder (Italian)

Descrivo lo strato software gestionale per studi dentistici: agenda, anagrafiche e comunicazioni, con la dovuta attenzione ai dati sanitari (categoria particolare, art. 9 GDPR) che sono visibili solo al personale autorizzato dello studio. La segretaria gestisce il calendario degli appuntamenti con medici e poltrone, registra i pazienti con anagrafica, piano di cure e storico delle visite. Un agente ottimizza l'agenda proponendo gli slot migliori quando si prenota, invia ai pazienti promemoria dell'appuntamento via email ed eventualmente un messaggio, e avvisa chi e in ritardo con i controlli periodici di richiamo (recall). Il dentista vede la cartella dei propri pazienti e i piani di cura, la segretaria l'agenda e le anagrafiche, il paziente puo accedere a una propria area per vedere appuntamenti e documenti condivisi. In futuro vorrei la firma elettronica dei consensi informati direttamente nell'app. Ogni studio vede solo i propri pazienti. Abbonamento mensile per studio in base al numero di poltrone o utenti. In italiano.

## Functional test: what did not pass

- **saved record shown where its collection is read** (view my_documents): a record was saved in documents (by admin-data, admin-data, admin) but the page does not show it (as patient) _(warning)_
- **saved record shown where its collection is read** (view patients): a record was saved in patients (by admin-data, admin-data, admin) but the page does not show it (as dentist) _(warning)_
- **saved record shown where its collection is read** (view care_plans): a record was saved in care_plans (by admin-data, admin-data, admin) but the page does not show it (as dentist) _(warning)_
- **saved record shown where its collection is read** (view visits): a record was saved in visits (by admin-data, admin-data, admin) but the page does not show it (as dentist) _(warning)_
- **saved record shown where its collection is read** (view recalls): a record was saved in recall_reports (by admin-data, admin-data) but the page does not show it (as dentist) _(warning)_

## Features not expressible today (spec.extensions)

- **firma_consensi**: Firma elettronica dei consensi informati nell'app: non ancora disponibile, prevista in futuro.
- **sms_whatsapp**: Messaggi SMS/WhatsApp ai pazienti non disponibili: i promemoria sono inviati via email.
- **multi_studio**: Ogni studio usa la propria istanza dell'app, così i pazienti restano separati; DPA e registro dei trattamenti art. 9 GDPR a cura dello studio.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### assistant
![03-assistant.png](screenshots/03-assistant.png)

### book
![04-book.png](screenshots/04-book.png)

### agenda
![05-agenda.png](screenshots/05-agenda.png)

### my_appointments
![06-my_appointments.png](screenshots/06-my_appointments.png)

### my_documents
![07-my_documents.png](screenshots/07-my_documents.png)

### patients
![08-patients.png](screenshots/08-patients.png)

### patient_form
![09-patient_form.png](screenshots/09-patient_form.png)

### care_plans
![10-care_plans.png](screenshots/10-care_plans.png)

### care_plan_form
![11-care_plan_form.png](screenshots/11-care_plan_form.png)

### visits
![12-visits.png](screenshots/12-visits.png)

### visit_form
![13-visit_form.png](screenshots/13-visit_form.png)

### document_form
![14-document_form.png](screenshots/14-document_form.png)

### recalls
![15-recalls.png](screenshots/15-recalls.png)

### account
![16-account.png](screenshots/16-account.png)

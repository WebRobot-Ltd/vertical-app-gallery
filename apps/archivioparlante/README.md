# ArchivioParlante

_Interroga i tuoi documenti come se parlassero._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (25 checks passed)

## Description given to the app builder (Italian)

Voglio costruire ArchivioParlante, un'app per uffici amministrativi e studi professionali che hanno migliaia di documenti (contratti, fatture, polizze, verbali) e non riescono a interrogarli. L'operatore carica PDF, scansioni e file Office in una pratica, indicando tipo di documento, cliente e data di riferimento; le scansioni passano da OCR. Un agente classifica ogni documento, estrae i campi chiave secondo uno schema per tipo (per un contratto: parti, oggetto, durata, importo, clausole di recesso, scadenze) e li salva in una collezione strutturata, segnalando con un livello di confidenza i campi incerti. Un revisore umano conferma o corregge i campi a bassa confidenza prima che diventino definitivi. Sopra la collezione c'è un assistente in chat che risponde a domande in linguaggio naturale citando sempre il documento e la pagina di origine, ad esempio 'quali contratti scadono entro marzo con penale sopra 10.000 euro'. Una tabella filtrabile mostra i dati estratti ed è esportabile in CSV; ogni lunedì arriva un'email con le scadenze del mese. Ruoli: admin dell'organizzazione, operatore che carica, revisore, consultatore in sola lettura; ogni organizzazione vede solo i propri documenti. Abbonamento mensile per numero di pagine elaborate. Interfaccia in italiano e inglese.

## Features not expressible today (spec.extensions)

- **org_isolation**: Organizations are separated by the members list (emails) on each document; there is no native per-organization tenant, so operators must list colleagues' emails. Roles are app-wide invites.
- **page_count**: Pages are declared by the operator in the form; automatic page counting of uploads is not available. Extraction is billed by metered usage (tokens and compute), which follows the pages processed.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### upload
![03-upload.png](screenshots/03-upload.png)

### documents
![04-documents.png](screenshots/04-documents.png)

### data
![05-data.png](screenshots/05-data.png)

### review_list
![06-review_list.png](screenshots/06-review_list.png)

### review
![07-review.png](screenshots/07-review.png)

### chat
![08-chat.png](screenshots/08-chat.png)

### deadlines
![09-deadlines.png](screenshots/09-deadlines.png)

### account
![10-account.png](screenshots/10-account.png)

### admin_data
![11-admin_data.png](screenshots/11-admin_data.png)

# Portale Welfare

_Il welfare aziendale in un unico portale: budget, rimborsi e voucher._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (28 checks passed)

## Description given to the app builder (Italian)

Ci serve Portale Welfare, la parte software di un servizio di welfare aziendale. Descrivo solo lo strato digitale: la rete di fornitori convenzionati, l'emissione dei voucher e gli aspetti fiscali sono gestiti dal provider. L'HR dell'azienda cliente carica l'elenco dei dipendenti e assegna a ciascuno un budget welfare annuale secondo il regolamento aziendale. Il dipendente accede, vede il saldo e sceglie come usarlo: rimborso di spese scolastiche o mediche caricando la ricevuta, abbonamento ai trasporti, buoni spesa, palestra, versamento alla previdenza. Un agente controlla che la richiesta di rimborso sia ammissibile secondo le regole fiscali e il regolamento, legge la ricevuta e prepara la pratica; l'HR o l'operatore del provider la approva. Un assistente in chat risponde alle domande dei dipendenti sul piano. Ogni mese l'HR riceve un report con utilizzo per categoria, budget residuo e scadenze. Il dipendente vede solo il proprio conto, l'HR i dati dell'azienda, i fornitori solo i voucher emessi presso di loro. L'azienda paga una commissione sul budget gestito.

## Functional test: what did not pass

- **form saves a record** (form voucher_request): only role employee may fill it, and the test cannot hold that role _(warning)_
- **template instance created and run** (template monthly_report): reserved to hr _(warning)_
- **page opened by a role allowed to** (view reports): only role hr may open it, the test cannot hold it _(warning)_

## Features not expressible today (spec.extensions)

- **commission_on_budget**: La commissione dell'azienda sul budget gestito (percentuale) è fatturata dal provider fuori dal portale: il manifest non la calcola.
- **budget_enforcement**: Il saldo residuo è mostrato e verificato dall'agente; non esiste un blocco automatico oltre il budget.
- **csv_upload_employees**: Il caricamento in blocco dei dipendenti da CSV non è disponibile per le raccolte di utente: l'HR li inserisce dal form.
- **provider_integration**: Rete fornitori, emissione voucher ed effettivo rimborso sono nei sistemi del provider.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### balance
![03-balance.png](screenshots/03-balance.png)

### new_claim
![04-new_claim.png](screenshots/04-new_claim.png)

### my_claims
![05-my_claims.png](screenshots/05-my_claims.png)

### voucher_request
![06-voucher_request.png](screenshots/06-voucher_request.png)

### assistant_chat
![07-assistant_chat.png](screenshots/07-assistant_chat.png)

### employees_form
![08-employees_form.png](screenshots/08-employees_form.png)

### employees_table
![09-employees_table.png](screenshots/09-employees_table.png)

### company_claims
![10-company_claims.png](screenshots/10-company_claims.png)

### company_usage
![11-company_usage.png](screenshots/11-company_usage.png)

### reviews
![12-reviews.png](screenshots/12-reviews.png)

### supplier_vouchers
![13-supplier_vouchers.png](screenshots/13-supplier_vouchers.png)

### reports
![14-reports.png](screenshots/14-reports.png)

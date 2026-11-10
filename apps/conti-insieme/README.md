# ContiInsieme

_La contabilità della tua PMI, insieme al tuo commercialista._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (22 checks passed)

## Description given to the app builder (Italian)

ContiInsieme è un software di contabilità per PMI che lavora insieme al commercialista. L'imprenditore collega il proprio conto corrente bancario tramite open banking e il cassetto fiscale per ricevere le fatture elettroniche dal Sistema di Interscambio; può anche caricare scontrini, ricevute e documenti in foto o PDF. Un agente abbina ogni movimento bancario alla fattura corrispondente, propone la registrazione contabile con il piano dei conti e calcola in tempo reale IVA da versare, liquidità prevista e margini. Le registrazioni incerte finiscono in una coda di approvazione dove il commercialista dello studio le conferma o corregge. Ogni mese l'imprenditore riceve via email un cruscotto con ricavi, costi, scadenze fiscali e cash flow previsto per i tre mesi successivi. Il commercialista vede tutti i clienti dello studio, l'imprenditore solo la propria azienda, i collaboratori dello studio solo i clienti assegnati. Abbonamento mensile pagato dall'impresa, con quota allo studio partner. In italiano.

## Features not expressible today (spec.extensions)

- **open_banking**: Il collegamento al conto corrente via open banking richiede un consenso OAuth (PSD2) verso la banca, non ancora disponibile. Per ora l'imprenditore carica l'estratto conto in CSV, Excel o PDF.
- **cassetto_fiscale_sdi**: Il collegamento automatico al cassetto fiscale e al Sistema di Interscambio non è disponibile (accesso con SPID/Entratel, non con chiave API). Per ora le fatture XML si caricano a mano; un intermediario SDI con chiave API potrà essere aggiunto come credenziale.
- **studio_payout**: La quota allo studio partner è registrata come ripartizione di ricavo con pagamento manuale; il collegamento di ogni impresa al proprio studio va impostato dall'amministratore.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### azienda
![03-azienda.png](screenshots/03-azienda.png)

### nuova
![04-nuova.png](screenshots/04-nuova.png)

### storico
![05-storico.png](screenshots/05-storico.png)

### panoramica
![06-panoramica.png](screenshots/06-panoramica.png)

### scadenze
![07-scadenze.png](screenshots/07-scadenze.png)

### registrazioni
![08-registrazioni.png](screenshots/08-registrazioni.png)

### movimenti
![09-movimenti.png](screenshots/09-movimenti.png)

### fatture
![10-fatture.png](screenshots/10-fatture.png)

### coda
![11-coda.png](screenshots/11-coda.png)

### da_correggere
![12-da_correggere.png](screenshots/12-da_correggere.png)

### clienti
![13-clienti.png](screenshots/13-clienti.png)

### cruscotti
![14-cruscotti.png](screenshots/14-cruscotti.png)

### abbonamento
![15-abbonamento.png](screenshots/15-abbonamento.png)

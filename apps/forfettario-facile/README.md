# ForfettarioFacile

_Il regime forfettario sotto controllo: imposte, contributi e scadenze sempre aggiornati._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

ForfettarioFacile è per liberi professionisti in regime forfettario. Al primo accesso l'utente compila un modulo con codice ATECO, anno di apertura della partita IVA, cassa previdenziale o gestione separata, eventuali altri redditi. Durante l'anno emette le fatture elettroniche dall'app, che le invia al Sistema di Interscambio tramite un intermediario abilitato, e registra gli incassi. Un agente calcola in ogni momento l'imposta sostitutiva, i contributi dovuti, gli acconti e il saldo, applicando il coefficiente di redditività e le regole aggiornate del regime, e avvisa se ci si avvicina alla soglia degli 85.000 euro. Prima di ogni scadenza fiscale l'utente riceve un'email con l'importo da pagare e il modello F24 precompilato. A fine anno l'agente prepara la bozza della dichiarazione dei redditi, che un commercialista della piattaforma controlla e trasmette. L'utente può fare domande fiscali in chat. Ogni utente vede solo i propri dati. Abbonamento annuale pagato con carta, in italiano.

## Funzioni non esprimibili oggi (spec.extensions)

- **fatturazione_sdi**: Emissione e invio delle fatture elettroniche al Sistema di Interscambio tramite intermediario abilitato: richiede un connettore con credenziali dell'intermediario, non ancora disponibile. Per ora fatture e incassi si registrano a mano o dalla chat.
- **email_scadenze**: Email prima di ogni scadenza con importo e F24: le notifiche email non sono ancora disponibili. I promemoria appaiono nella vista Scadenze e F24.
- **trasmissione_dichiarazione**: Trasmissione telematica della dichiarazione da parte del commercialista: la revisione è nell'app (approvazione), l'invio all'Agenzia delle Entrate avviene fuori dall'app.
- **pdf_f24**: Il modello F24 precompilato è fornito come tabella di dati (codici tributo, importi), non come file PDF.

## Screenshot (runtime interpretativo)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### nuovo_calcolo
![03-nuovo_calcolo.png](screenshots/03-nuovo_calcolo.png)

### storico
![04-storico.png](screenshots/04-storico.png)

### chat
![05-chat.png](screenshots/05-chat.png)

### fatture_view
![06-fatture_view.png](screenshots/06-fatture_view.png)

### incassi_view
![07-incassi_view.png](screenshots/07-incassi_view.png)

### scadenze_view
![08-scadenze_view.png](screenshots/08-scadenze_view.png)

### dichiarazioni_view
![09-dichiarazioni_view.png](screenshots/09-dichiarazioni_view.png)

### revisioni
![10-revisioni.png](screenshots/10-revisioni.png)

### account
![11-account.png](screenshots/11-account.png)


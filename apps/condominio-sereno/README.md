# Condominio Sereno

_Il condominio, in digitale e senza pensieri._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Ci serve Condominio Sereno, un'app per gestire i condomini in modo digitale. Ci sono quattro ruoli: l'amministratore, i condomini, i fornitori e il consiglio di condominio. L'amministratore crea lo stabile con unità, millesimi e proprietari, e invita tutti. I condomini aprono segnalazioni con foto (guasto ascensore, infiltrazione), vedono le spese, i verbali e le comunicazioni, e possono chiedere informazioni a un assistente in chat che risponde su regolamento, bilancio e scadenze. Le email e PEC in arrivo all'indirizzo del condominio vengono lette da un agente che le classifica e collega a una pratica. Per una segnalazione l'agente chiede preventivi ai fornitori via email e li confronta; ogni spesa sopra una soglia deve essere approvata dall'amministratore e, se straordinaria, dal consiglio. A ogni evento, come un guasto o una scadenza, partono notifiche ai condomini interessati. Vogliamo che i condomini paghino le rate direttamente dall'app e che i documenti si carichino in archivio. Il condomino vede solo il suo stabile e la sua posizione. Abbonamento per unità immobiliare pagato dallo studio.

## Funzioni non esprimibili oggi (spec.extensions)

- **file_upload**: Foto delle segnalazioni e documenti d'archivio: il caricamento file non è ancora disponibile; per ora si incolla un link o il testo.
- **notifiche**: Notifiche automatiche (email/push) ai condomini a ogni guasto o scadenza non disponibili: per ora l'agente pubblica una comunicazione visibile nell'app.
- **pagamento_rate**: Pagamento delle rate dei condomini direttamente dall'app (verso il conto del condominio) non disponibile: i pagamenti Stripe vanno al titolare dell'app. Per ora le rate si registrano come 'pagata' dall'amministratore.
- **preventivi_via_email**: L'invio di email ai fornitori non è disponibile: la richiesta di preventivo è pubblicata nell'app e i fornitori rispondono dal loro accesso. La lettura di email/PEC dipende dal canale email.
- **isolamento_stabile**: Il condomino vede solo il suo stabile e la sua posizione tramite condivisione per record (sharing viewer) dell'amministratore; l'abbonamento per unità richiede il conteggio delle unità dello studio.

## Screenshot (runtime interpretativo)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### assistente
![03-assistente.png](screenshots/03-assistente.png)

### nuova_segnalazione
![04-nuova_segnalazione.png](screenshots/04-nuova_segnalazione.png)

### pratiche
![05-pratiche.png](screenshots/05-pratiche.png)

### stabili
![06-stabili.png](screenshots/06-stabili.png)

### preventivi
![07-preventivi.png](screenshots/07-preventivi.png)

### spese
![08-spese.png](screenshots/08-spese.png)

### archivio
![09-archivio.png](screenshots/09-archivio.png)

### comunicazioni
![10-comunicazioni.png](screenshots/10-comunicazioni.png)

### posta_view
![11-posta_view.png](screenshots/11-posta_view.png)

### approvazioni
![12-approvazioni.png](screenshots/12-approvazioni.png)

### account
![13-account.png](screenshots/13-account.png)


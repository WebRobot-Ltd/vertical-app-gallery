# CinqueMinuti

_Cinque minuti al giorno per capire i soldi._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (21 checks passed)

## Description given to the app builder (Italian)

L'idea è CinqueMinuti, un'app di educazione finanziaria per giovani adulti che non sanno nulla di investimenti. All'iscrizione l'utente compila un breve profilo: età, se lavora, se ha risparmi, obiettivi (fondo emergenze, casa, pensione) e livello di conoscenza. Ogni mattina un agente genera una micro-lezione personalizzata da cinque minuti su un tema del percorso (inflazione, interesse composto, ETF, costi dei fondi, debito), con un esempio pratico e una domanda di verifica a scelta multipla; l'utente risponde e il percorso si adatta. C'è anche una chat dove fare domande libere, con l'avvertenza chiara che non è consulenza personalizzata. La lezione arriva per email e deve arrivare anche come notifica push su telefono, perché la vogliamo come app mobile installabile con una serie di giorni consecutivi da mantenere. L'utente vede i progressi, i badge e lo storico delle lezioni; l'admin vede statistiche aggregate e può modificare il piano dei contenuti. Gratis le prime due settimane, poi abbonamento mensile. In italiano.

## Features not expressible today (spec.extensions)

- **push_notifications**: Notifica push su telefono con la lezione del giorno: non ancora disponibile (solo email). La shell mobile installabile è dichiarata in spec.mobile; il push va aggiunto quando la piattaforma lo supporterà.
- **free_trial_14_days**: Le prime due settimane gratuite prima dell'abbonamento non sono esprimibili nel manifest: da configurare come periodo di prova nel piano Stripe o con crediti di benvenuto.
- **streak_reminder**: Promemoria per non perdere la serie di giorni: richiede push, per ora solo email giornaliera.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### profile
![03-profile.png](screenshots/03-profile.png)

### setup
![04-setup.png](screenshots/04-setup.png)

### lessons
![05-lessons.png](screenshots/05-lessons.png)

### quiz
![06-quiz.png](screenshots/06-quiz.png)

### progress
![07-progress.png](screenshots/07-progress.png)

### chat
![08-chat.png](screenshots/08-chat.png)

### account
![09-account.png](screenshots/09-account.png)

### admin_plan
![10-admin_plan.png](screenshots/10-admin_plan.png)

### admin_plan_edit
![11-admin_plan_edit.png](screenshots/11-admin_plan_edit.png)

### admin_stats
![12-admin_stats.png](screenshots/12-admin_stats.png)

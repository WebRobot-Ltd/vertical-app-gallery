# Prestazione in Campo

_Carico, rischio sovraccarico e piano settimanale per ogni atleta._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (35 checks passed)

## Description given to the app builder (Italian)

Mi serve Prestazione in Campo, la piattaforma di analisi per un servizio che misura la performance degli atleti con dispositivi indossabili e telecamere. Descrivo solo lo strato software di analisi e reportistica: i sensori, le telecamere e l'elaborazione video sono forniti a parte. Il preparatore atletico della squadra è admin e crea la rosa con ruolo, età, peso e storico infortuni. Dopo ogni allenamento o partita i dati dei dispositivi (distanza, velocità, accelerazioni, frequenza cardiaca, carico) dovrebbero arrivare in automatico; per ora si caricano come file esportati. Un agente calcola indicatori di carico acuto e cronico, confronta ogni atleta con la sua media, segnala chi è a rischio sovraccarico e propone come modulare il carico della settimana successiva. Lo staff tecnico riceve un report dopo ogni sessione e un riepilogo settimanale; in chat può chiedere confronti tra giocatori o tra partite. Il medico della squadra vede i dati sanitari, l'allenatore solo gli indicatori di prestazione, l'atleta solo i propri. Abbonamento stagionale per squadra, in italiano e inglese.

## Features not expressible today (spec.extensions)

- **device_auto_ingest**: Automatic arrival of device data (webhook/API from the sensor vendor) and automatic analysis on arrival: for now sessions are uploaded as exported files.
- **video_metrics**: Camera and video-processing indicators are provided separately and not part of this software layer.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_session
![03-new_session.png](screenshots/03-new_session.png)

### sessions
![04-sessions.png](screenshots/04-sessions.png)

### session_reports_list
![05-session_reports_list.png](screenshots/05-session_reports_list.png)

### weekly_list
![06-weekly_list.png](screenshots/06-weekly_list.png)

### loads
![07-loads.png](screenshots/07-loads.png)

### metrics
![08-metrics.png](screenshots/08-metrics.png)

### health_data
![09-health_data.png](screenshots/09-health_data.png)

### roster
![10-roster.png](screenshots/10-roster.png)

### athlete_form
![11-athlete_form.png](screenshots/11-athlete_form.png)

### health_form
![12-health_form.png](screenshots/12-health_form.png)

### health_profiles_list
![13-health_profiles_list.png](screenshots/13-health_profiles_list.png)

### assistant_chat
![14-assistant_chat.png](screenshots/14-assistant_chat.png)

### account
![15-account.png](screenshots/15-account.png)

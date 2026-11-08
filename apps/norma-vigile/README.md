# NormaVigile

_La normativa finanziaria, leggibile e monitorata._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Voglio costruire NormaVigile, un servizio per uffici compliance di banche, SIM e fintech che rende la normativa finanziaria leggibile e monitorata. L'admin del cliente registra la propria azienda e definisce un perimetro: tipo di intermediario, temi di interesse (antiriciclaggio, credito, ICT, trasparenza) e le autorità da seguire. Ogni notte un agente scarica le novità da EUR-Lex, Gazzetta Ufficiale, Banca d'Italia, EBA ed ESMA, salva ogni atto con le sue versioni e calcola il diff rispetto alla versione precedente, articolo per articolo. Un secondo agente classifica le modifiche per tema e impatto e indicizza tutto in un archivio ricercabile full text. Gli utenti compliance hanno una chat in cui fanno domande sulla normativa e ricevono risposte con citazione puntuale dell'articolo e del link ufficiale. Ogni lunedì arriva via email un report con le novità rilevanti per il loro perimetro, e un alert immediato quando cambia un atto marcato come critico. Ogni azienda vede solo i propri perimetri e le proprie note. Abbonamento mensile per numero di utenti, interfaccia in italiano e inglese.

## Funzioni non esprimibili oggi (spec.extensions)

- **email_notifications**: Not available yet: the Monday digest and the immediate critical-act alert are shown in the app (digests and alerts views) but cannot be sent by email until notifications exist.
- **company_tenancy**: Not available yet: there is no company/seat concept. Company profile, notes and critical marks are per user and shared with colleagues through per-record invitations (viewer/editor); user seats per plan are tiers, not enforced per-seat billing.
- **per_customer_critical_alert**: Alerts on critical acts are produced by a daily per-user watch instance (cheap) rather than an instant event, since app-wide data is shared and critical marks are private to each company.

## Screenshot (runtime interpretativo)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### assistant_chat
![03-assistant_chat.png](screenshots/03-assistant_chat.png)

### perimeters
![04-perimeters.png](screenshots/04-perimeters.png)

### critical
![05-critical.png](screenshots/05-critical.png)

### digests
![06-digests.png](screenshots/06-digests.png)

### changes_feed
![07-changes_feed.png](screenshots/07-changes_feed.png)

### acts_archive
![08-acts_archive.png](screenshots/08-acts_archive.png)

### company_view
![09-company_view.png](screenshots/09-company_view.png)

### notes_view
![10-notes_view.png](screenshots/10-notes_view.png)

### account
![11-account.png](screenshots/11-account.png)


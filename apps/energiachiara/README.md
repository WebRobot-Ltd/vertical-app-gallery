# EnergiaChiara

_Meno sprechi energetici, più risparmi dimostrabili._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (17 checks passed)

## Description given to the app builder (Italian)

Voglio EnergiaChiara, piattaforma per energy manager di aziende, condomini e piccoli comuni che vogliono ridurre i consumi energetici. L'admin dell'organizzazione registra i siti (stabilimenti, uffici, edifici) con superficie, destinazione d'uso, orari di attività e tariffa. I dati di consumo arrivano dai contatori e smart meter del cliente tramite connettore o, in alternativa, con upload periodico di CSV quartorari di elettricità e gas esportati dal portale del fornitore; si aggiungono dati meteo open (gradi giorno). Un agente pulisce le serie, colma i buchi e calcola il profilo base per sito; un secondo agente individua anomalie (consumi notturni o nel weekend, picchi rispetto a giorni simili, scostamenti stagionali) e stima gli euro sprecati. Un terzo agente propone azioni concrete con risparmio atteso e tempo di rientro, e prepara un report mensile in PDF con grafici e confronto anno su anno. Gli alert per anomalie gravi arrivano via email entro un'ora dal dato. L'energy manager approva il piano d'azione prima che venga inviato alla direzione. Ogni sito è visibile solo agli utenti assegnati; la direzione vede la dashboard aggregata. Abbonamento annuale per numero di punti di misura. Italiano e inglese.

## Features not expressible today (spec.extensions)

- **supplier_connectors**: Direct connectors to supplier portals and smart-meter vendors are not available yet; the data arrives via CSV upload or the webhook /api/hooks/meter_hook.
- **pdf_report**: The monthly report is the printable report view (save as PDF from the browser); automatic PDF attachments in email are not available.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### overview
![03-overview.png](screenshots/03-overview.png)

### new_analysis
![04-new_analysis.png](screenshots/04-new_analysis.png)

### reports
![05-reports.png](screenshots/05-reports.png)

### sites_list
![06-sites_list.png](screenshots/06-sites_list.png)

### site_form
![07-site_form.png](screenshots/07-site_form.png)

### meters_list
![08-meters_list.png](screenshots/08-meters_list.png)

### meter_form
![09-meter_form.png](screenshots/09-meter_form.png)

### anomalies
![10-anomalies.png](screenshots/10-anomalies.png)

### plans
![11-plans.png](screenshots/11-plans.png)

### approvals
![12-approvals.png](screenshots/12-approvals.png)

### monitors
![13-monitors.png](screenshots/13-monitors.png)

### account
![14-account.png](screenshots/14-account.png)

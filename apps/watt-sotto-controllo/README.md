# Watt sotto Controllo

_Trova gli sprechi energetici dei tuoi edifici prima che li paghi in bolletta._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (21 checks passed)

## Description given to the app builder (Italian)

Voglio Watt sotto Controllo, la piattaforma di analisi per un servizio che monitora i consumi energetici di edifici commerciali e industriali con sensori installati. Descrivo solo lo strato software: l'installazione dei sensori e l'hardware sono a parte. Il gestore dell'edificio si registra, descrive le sedi, gli impianti (climatizzazione, illuminazione, linee di produzione) e gli orari di attività. I dati dei sensori e dei contatori dovrebbero arrivare in automatico ogni quarto d'ora; per ora possono anche essere caricati in CSV. Un agente analizza le curve di consumo, individua sprechi come impianti accesi di notte o nei festivi, picchi anomali e apparecchiature che consumano più del normale, e stima il risparmio di ogni intervento usando i prezzi dell'energia del contratto. Quando rileva un'anomalia in tempo reale manda un alert via email. Ogni mese arriva un report con consumi, costi, emissioni e azioni consigliate, e in chat il gestore può chiedere spiegazioni. Il manutentore vede solo gli alert sugli impianti di sua competenza. Abbonamento mensile per sede.

## Features not expressible today (spec.extensions)

- **webhook_device_mapping**: I contatori inviano le letture a POST /api/hooks/meter_feed con il segreto dell'app; l'associazione del dispositivo al cliente (proprietario delle letture) va configurata in fase di attivazione.
- **realtime_alerts**: Gli alert sono 'quasi in tempo reale': l'agente controlla le letture ogni due ore (costo AI), non a ogni quarto d'ora. Un rilevamento continuo a soglia richiederebbe codice dedicato.
- **sms_push**: Alert via SMS/WhatsApp/push non disponibili: solo email.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### sites_form
![03-sites_form.png](screenshots/03-sites_form.png)

### sites
![04-sites.png](screenshots/04-sites.png)

### plant_form
![05-plant_form.png](screenshots/05-plant_form.png)

### plants
![06-plants.png](screenshots/06-plants.png)

### contract_form
![07-contract_form.png](screenshots/07-contract_form.png)

### import
![08-import.png](screenshots/08-import.png)

### imports
![09-imports.png](screenshots/09-imports.png)

### consumption
![10-consumption.png](screenshots/10-consumption.png)

### alerts
![11-alerts.png](screenshots/11-alerts.png)

### watches
![12-watches.png](screenshots/12-watches.png)

### monthly
![13-monthly.png](screenshots/13-monthly.png)

### chat
![14-chat.png](screenshots/14-chat.png)

### account
![15-account.png](screenshots/15-account.png)

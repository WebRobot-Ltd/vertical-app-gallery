# SentieroAperto

_Itinerari outdoor su misura, con meteo e traccia GPX._

**Manifest status:** valid (schema validator + runtime contract)

## Description given to the app builder (Italian)

SentieroAperto genera itinerari per escursioni, bici e attivita all'aperto. L'utente compila un modulo con zona, tipo di attivita, difficolta, durata o dislivello desiderato, periodo e punto di partenza. Un agente costruisce un itinerario usando i percorsi e i punti di interesse di OpenStreetMap, aggiunge la previsione meteo lungo il tracciato da Open-Meteo e avvisa se le condizioni sono sconsigliate. L'utente vede il percorso su una mappa interattiva con profilo altimetrico, tappe e tempi stimati, puo chiedere varianti in chat ("piu corto", "evita i tratti esposti", "adatto ai bambini") e scaricare la traccia in formato GPX per il navigatore. Un modello giornaliero ricalcola la fattibilita dei percorsi salvati in base al meteo e avvisa via email. Vorrei anche un'app nativa che funzioni offline in montagna, dove non c'e campo, con il GPS per seguire la traccia. Gratuito per gli itinerari base, abbonamento per tracce offline e avvisi meteo. In italiano, tedesco e inglese.

## Features not expressible today (spec.extensions)

- **interactive_map**: Interactive map with the route and an elevation profile linked to the cursor is not available as a view yet: the report shows stages, a chart of the elevation profile and the waypoints.
- **gpx_download**: The GPX track is delivered as a fenced gpx block inside the report; a one-click .gpx file download button is not available yet.
- **email_alerts**: Emails when a route becomes not advisable are not available yet: the daily check writes its verdict to the route's alerts view; e-mail notifications must be added later.
- **native_offline_app**: Native app with GPS track following and offline maps/tracks for places without coverage: requires a separate native shell (Capacitor) with offline map tiles; not expressible in the manifest. Offline track access is reserved to the Pro plan.
- **open_meteo_licence**: Open-Meteo's free API is non-commercial: a commercial API licence is needed before charging for the Pro plan.


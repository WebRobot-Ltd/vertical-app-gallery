# SpiaggiaGiusta

_La spiaggia migliore di oggi, in base a mare e vento._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

SpiaggiaGiusta consiglia ogni giorno la spiaggia migliore in base al mare e al vento. L'utente si registra, sceglie una zona costiera, indica le sue preferenze (mare calmo o onde per il surf, sabbia o scogli, tolleranza al vento, presenza di bambini) e le spiagge preferite. Ogni mattina alle 7 un agente scarica le previsioni di Copernicus Marine (onda, temperatura dell'acqua, correnti) e di Open-Meteo (vento, nuvolosità, UV) per le spiagge della zona, calcola un punteggio da 0 a 10 per ciascuna in base alle preferenze dell'utente e spiega il perché in due righe. L'utente vede una classifica giornaliera con punteggi, icone meteo e la previsione per i tre giorni successivi, e riceve un'email mattutina con le prime tre spiagge consigliate. Può anche impostare un avviso del tipo "scrivimi quando nel weekend c'è mare calmo a Torre dell'Orso". Le spiagge e le loro caratteristiche le gestisce l'admin. Gratuito con funzioni base, abbonamento stagionale per avvisi personalizzati. In italiano e inglese.

## Funzioni non esprimibili oggi (spec.extensions)

- **morning_email**: Email at 7 with the top 3 beaches, and an email when an alert matches: notifications are not available yet. For now results are shown in the app (ranking and triggered alerts).
- **copernicus_direct**: Copernicus Marine needs per-account credentials and NetCDF/Zarr downloads, which an HTTP tool cannot do. Marine data (waves, sea temperature, currents) comes via the Open-Meteo Marine API instead.
- **alerts_plan_gate**: Alerts are limited to subscribers of the 'season' plan through the agent cost's requiresPlan; the free tier only has the daily ranking.
- **open_meteo_licence**: Open-Meteo free API is non-commercial: buy a commercial API key before charging for the season plan.


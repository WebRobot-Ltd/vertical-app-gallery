# LegamiKYC

_Adeguata verifica e antiriciclaggio, con i legami in chiaro e ogni decisione tracciata._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

LegamiKYC e uno strumento di adeguata verifica e antiriciclaggio per studi professionali e intermediari. L'operatore apre una pratica su un soggetto (persona o azienda) inserendo i dati anagrafici, oppure caricando i documenti di identita e visure del cliente da cui estrarre i dati. Un agente costruisce un grafo dei legami tra persone e societa (titolari effettivi, cariche, partecipazioni) e cerca riscontri con tolleranza agli errori di trascrizione nelle liste pubbliche di sanzioni UE, ONU e OFAC e nelle notizie negative (adverse media) da fonti aperte. Per le persone politicamente esposte serve l'integrazione di liste in licenza. Ogni riscontro potenziale viene presentato all'operatore con il livello di somiglianza e la fonte; l'operatore conferma o scarta, e la decisione resta tracciata per l'audit. Il sistema produce un fascicolo di verifica esportabile e rifa i controlli periodicamente, avvisando via webhook se compare un nuovo riscontro. Ogni studio vede solo le proprie pratiche. Abbonamento mensile piu crediti per verifica. In italiano e inglese.

## Funzioni non esprimibili oggi (spec.extensions)

- **file_upload**: Uploading ID documents and company registry extracts to extract data from is not available yet: the form asks to paste the text or give a link.
- **webhook_alerts**: Notifying new matches from periodic re-screening by outbound webhook (or email) is not available yet: new matches appear in the monitoring view only.
- **licensed_pep_lists**: PEP screening needs a licensed list integration (commercial provider with its own credentials/licence); not included, the agent reports open-source indications only.
- **case_file_export**: The case file is exported by printing the report view (PDF); a structured export bundle with decisions is not available yet.

## Screenshot (runtime interpretativo)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)


# GaraPronta

_Dal bando alla bozza di offerta, con ogni affermazione citata._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Voglio un'app per le aziende italiane che partecipano alle gare d'appalto pubbliche (all'inizio fornitori di dispositivi medici e farmaci per ospedali e ASL). L'azienda inserisce il suo profilo: settori (codici CPV), regioni di interesse, importo minimo e massimo, certificazioni possedute, parole chiave. Ogni giorno un agente cerca i nuovi bandi pubblicati sulle fonti ufficiali (TED, la banca dati europea degli appalti, ha un'API pubblica gratuita: POST https://api.ted.europa.eu/v3/notices/search, filtro buyer-country=ITA) e manda un avviso con i bandi adatti al profilo, ordinati per rilevanza, con ente, importo, lotti e scadenza. Su un bando scelto l'utente chiede un'analisi: l'agente legge il bando e i documenti di gara (disciplinare e capitolato, che l'utente può caricare), estrae requisiti di partecipazione, criteri di punteggio, scadenze, segnala incongruenze tra i documenti e quesiti da fare alla stazione appaltante, e dice se l'azienda ha i requisiti. Poi prepara una bozza della relazione tecnica riusando le offerte passate dell'azienda che l'utente ha caricato in un archivio. Ogni affermazione deve citare il documento da cui viene. L'invio dell'offerta resta all'azienda. Lingua italiana. Si paga a crediti: analisi e bozza costano crediti, l'osservatorio giornaliero ha un abbonamento. Nome dell'app: GaraPronta.

## Errori residui

- `agent watcher: goalTemplate placeholder {instance} is not a form field, a context key or a built-in`

## Funzioni non esprimibili oggi (spec.extensions)

- **file_upload**: Il caricamento di file (disciplinare, capitolato, offerte passate) non è ancora disponibile: l'utente incolla il testo o indica un link.
- **email_alerts**: L'avviso giornaliero non può ancora essere inviato per email: si consulta nell'app.
- **italian_sources**: Altre fonti ufficiali italiane (ANAC, portali regionali, MEPA) non hanno API riusabili configurate: per ora solo TED.


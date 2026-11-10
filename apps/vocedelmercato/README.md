# VoceDelMercato

_Ascolta il mercato ogni notte: sentiment, temi e quota di voce._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

Mi serve VoceDelMercato, una piattaforma di consumer intelligence per marketing manager e agenzie. L'utente crea un progetto di ascolto indicando brand, concorrenti, parole chiave, esclusioni, lingue, paesi e periodo. Ogni notte gli agenti cercano sul web e raccolgono contenuti pubblici da fonti lecite: feed RSS di testate e blog, forum che permettono la raccolta nei termini d'uso, recensioni pubbliche e Reddit tramite API commerciale. I social che vietano lo scraping non vanno toccati; se il cliente ha un abbonamento ufficiale alle API di un social, lo collega con la sua chiave. Ogni contenuto viene deduplicato, classificato per sentiment, emozione, tema e tipo di autore (consumatore, giornalista, brand) e indicizzato in un motore di ricerca full-text. La dashboard mostra volume nel tempo, quota di voce rispetto ai concorrenti, temi emergenti, citazioni rappresentative con link alla fonte e una mappa per paese. Un analista può chiedere in chat 'perché a ottobre è salito il sentiment negativo?' e l'agente risponde con evidenze. Alert email quando il volume negativo supera una soglia. Report PDF mensile approvato dall'analista prima dell'invio al cliente finale. Ruoli: admin agenzia, analista, cliente in sola lettura sul proprio progetto. Abbonamento per numero di progetti e menzioni; interfaccia italiano e inglese.

## Contract errors

- `agent collector: tool reddit_search: credential 'reddit' is not an api_key credential in spec.data.credentials`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

## Features not expressible today (spec.extensions)

- **social_api_keys**: Connecting a client's official social API subscription with their own key needs per-client hosts and provider-specific tools; not available yet. OAuth-based social APIs are also not available.
- **project_quota**: A hard cap on the number of projects per plan (3/15/unlimited) is not enforceable on template instances yet; only the monthly mentions cap is enforced via limits. Project counts are stated in the plan description.
- **pdf_export**: The monthly report is a printable view (save as PDF from the browser); automatic PDF attachments in email are not available. The notification links to the report.
- **fulltext_engine**: Full-text search uses the collection's searchable index; a dedicated external search engine is not wired.

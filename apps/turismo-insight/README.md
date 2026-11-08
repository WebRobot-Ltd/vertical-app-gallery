# TurismoInsight

_Decision intelligence per destinazioni, consorzi e catene alberghiere._

**Manifest status:** valid (schema validator + runtime contract)

## Description given to the app builder (Italian)

Ho bisogno di TurismoInsight, uno strumento di decision intelligence per destinazioni turistiche, consorzi e catene alberghiere. L'analista del cliente definisce un territorio (comuni o provincia) e i mercati di provenienza che gli interessano. Ogni settimana un agente raccoglie arrivi e presenze da ISTAT ed Eurostat, calendari di eventi pubblicati dagli enti locali, dati sui voli e notizie di settore da fonti aperte, e li indicizza in un archivio ricercabile. Un agente di analisi calcola trend, stagionalità e confronto con destinazioni simili, mentre un altro valuta il sentiment delle notizie e dei comunicati pubblici sul territorio; non uso recensioni di TripAdvisor o Booking. Il risultato è una dashboard interattiva con grafici per mercato e periodo, filtri e mappe, più un report PDF mensile inviato via email ai dirigenti. Gli analisti possono anche fare domande in chat sui dati. Ogni cliente vede solo i propri territori. Abbonamento annuale per territorio, in italiano e inglese.

## Features not expressible today (spec.extensions)

- **monthly_pdf_email**: Sending the monthly PDF report by email to executives is not available yet (no notifications). Meanwhile each report is printable as PDF from the report view.
- **map_view**: Interactive maps are not available as a display type yet; the dashboard shows charts, tables and filters by market and period.
- **per_territory_seat_limit**: The annual price is per territory: the number of territories is capped by maxPerUser; enforcing it from the purchased plan quantity needs custom logic.


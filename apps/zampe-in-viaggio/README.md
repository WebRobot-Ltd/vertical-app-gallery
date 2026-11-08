# Zampe in Viaggio

_Viaggia con il tuo cane o gatto senza sorprese: la checklist giusta per il tuo viaggio._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Vorrei un'app chiamata Zampe in Viaggio per chi viaggia con cani e gatti. L'utente si registra e crea il profilo dei suoi animali: specie, razza, peso con trasportino, età, microchip, vaccinazioni. Poi descrive il viaggio: partenza, destinazione, date e mezzo (aereo, treno, traghetto, auto). Un agente consulta una base di conoscenza costruita dalle regole pubbliche delle compagnie aeree, ferroviarie e di navigazione sul trasporto di animali e dalle norme pubblicate dalle autorità sanitarie su passaporto europeo, antirabbica e requisiti di ingresso nei paesi, e restituisce una checklist personalizzata: se l'animale può viaggiare in cabina o in stiva, dimensioni del trasportino, documenti da preparare e con quanti giorni di anticipo, costi indicativi. Dopo il report l'utente può fare domande in chat. Non vogliamo integrare portali di prenotazione alberghiera, solo informazioni. Le regole vengono ricontrollate ogni settimana e, se cambia una regola che riguarda un viaggio salvato, l'utente riceve un'email. Ogni utente vede solo i suoi animali e viaggi. Gratis per la checklist base, abbonamento annuale economico per viaggi illimitati e avvisi.

## Errori residui

- `billing: free cannot be combined with other modes`
- `runtime: agent assistant: tool search_rules is declared differently by another agent`
- `runtime: agent watcher: tool read_pets is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **email_alerts**: Email to the user when a rule affecting a saved trip changes is not available yet: alerts are shown in the app (Trip alerts view) for now; the weekly watch runs and the email digest must be added when notifications are supported.
- **plan_aware_limits**: Free users are limited to 3 checklists per month; lifting the limit (and enabling trip alerts) for annual subscribers needs plan-aware limits, to be configured in the studio.


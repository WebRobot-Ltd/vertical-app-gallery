# OspiteRelazione

_Il CRM intelligente che cura il rapporto con i tuoi ospiti._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

OspiteRelazione e un CRM intelligente per hotel e strutture ricettive che vogliono curare il rapporto con gli ospiti. La struttura collega il proprio gestionale alberghiero (PMS) tramite accesso autorizzato per importare prenotazioni, soggiorni e dati di contatto, oppure carica un export. Un agente costruisce per ogni ospite una scheda con storico dei soggiorni, preferenze e valore, e li raggruppa in segmenti (prima visita, cliente fedele, viaggiatore d'affari, famiglia). In base a eventi (prenotazione confermata, tre giorni prima dell'arrivo, giorno della partenza, anniversario del primo soggiorno) parte in automatico un'email personalizzata: conferma con informazioni utili, proposta di servizi extra, richiesta di recensione dopo il check-out. Il direttore approva i modelli dei messaggi e vede una dashboard con tassi di apertura, prenotazioni dirette generate e segmenti. Il personale vede solo gli ospiti della propria struttura. Abbonamento mensile per numero di camere. In italiano, inglese e tedesco.

## Contract errors

- `data.collections: 'outbox' is a reserved name (the runtime's own data)`
- `spec.agents[1].appTools[2]: collection 'outbox' is reserved (the runtime's own data)`
- `spec.triggers[4].on: collection 'outbox' is reserved (the runtime's own data)`
- `spec.views[10].source: collection 'outbox' is reserved (the runtime's own data)`
- `spec.views[11].sections[0].source: collection 'outbox' is reserved (the runtime's own data)`
- `spec.views[11].sections[3].source: collection 'outbox' is reserved (the runtime's own data)`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

## Design checks (who fills each collection)

- collection direct_bookings: a data block of dashboard reads it, but nothing writes it — add a form view on it (the users fill their own records), an agent tool that writes or appends to it, or a trigger write; or, for a list the admins keep, make it ownedBy shared (admins fill it on the data page)

## Features not expressible today (spec.extensions)

- **pms_connector**: Direct PMS connection needs a specific vendor API (host and key): add it as a credential and http tool once the PMS is chosen. For now the export upload is used.
- **open_rate_tracking**: Email open tracking is not available: the dashboard shows emails sent and direct bookings recorded in direct_bookings; open rates need a tracking provider.
- **rooms_quota**: Plans are by number of rooms; the runtime enforces them as guest-record quotas, not as a count of rooms.

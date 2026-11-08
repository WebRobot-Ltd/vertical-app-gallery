# CalcioAnalytics

_Data intelligence per società calcistiche, osservatori e settori giovanili._

**Manifest status:** remaining errors

## Description given to the app builder (Italian)

CalcioAnalytics e uno strumento di data intelligence per societa calcistiche, osservatori e settori giovanili. L'analista della societa inserisce le squadre e i giocatori da seguire e importa i dati delle partite da fonti dati calcistiche concesse in licenza o inserite dal cliente (eventi di gioco, minuti, esiti). Un agente calcola indicatori avanzati per ogni giocatore e squadra, per esempio contributo atteso, qualita delle conclusioni e tendenze di rendimento, e li aggiorna dopo ogni giornata. L'analista vede dashboard e schede giocatore con grafici confrontabili tra atleti e periodi, e puo fare domande in chat tipo "mostrami i centrocampisti in crescita nelle ultime cinque partite". Un report settimanale via email riassume le variazioni di forma della rosa. I dati da dispositivi indossabili dei giocatori restano fuori: qui si tratta solo dello strato software di analisi, senza raccolta da wearable. Ogni societa vede solo i propri dati. Abbonamento stagionale per numero di squadre. In italiano e inglese.

## Remaining errors

- `runtime: agent assistant: tool read_matches is declared differently by another agent`
- `runtime: agent assistant: tool read_player_metrics is declared differently by another agent`

## Features not expressible today (spec.extensions)

- **weekly_email**: Weekly report by email is not available yet: the report is shown in the Weekly reports view.
- **file_upload**: File upload for match data is not available yet: the analyst pastes text or a link.
- **team_limit**: Enforcing the number of teams per season plan needs custom logic; for now the plan describes it.


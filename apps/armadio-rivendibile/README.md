# ArmadioRivendibile

_Il tuo guardaroba digitale: scopri quanto valgono i tuoi capi usati._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Vorrei ArmadioRivendibile, un guardaroba digitale per chi vuole rivendere i propri capi. L'utente si registra e aggiunge i capi al suo armadio: foto, marca, taglia, materiale, stato d'uso e prezzo pagato. Un agente stima per ogni capo un prezzo di rivendita realistico confrontando annunci pubblici di usato della stessa marca e categoria, e suggerisce titolo e descrizione per l'annuncio. L'utente vede il valore totale del suo armadio, i capi che conviene vendere subito e quelli da tenere. Ogni mese riceve un'email con i capi il cui valore sta scendendo. Ogni utente vede solo il proprio armadio. Piano gratuito fino a 30 capi, abbonamento mensile per armadi più grandi. Italiano e inglese.

## Errori residui

- `runtime: agent monitor: tool garments_write is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **photo_upload**: Photo upload is not available yet: the user pastes a link to the photo.
- **monthly_email**: The monthly email with garments losing value is not available yet (no notifications). The monthly check runs and the result is shown in the Monthly check view.
- **free_cap_30**: The free plan of 30 garments is expressed as 300 signup credits at 10 credits per appraisal; there is no hard cap on stored garments.


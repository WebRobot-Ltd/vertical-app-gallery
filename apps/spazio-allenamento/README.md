# FitSpot

_Prenota uno spazio fitness e paga solo il tempo che usi._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

Descrivo solo lo strato software, cioe la piattaforma che gestisce la prenotazione pay per use di spazi fitness; gli spazi fisici e le attrezzature sono un servizio a parte. L'utente cerca una palestra o uno spazio per orario, zona e tipo di attivita, vede disponibilita e prezzo a sessione, prenota uno slot e paga online con carta solo per il tempo che usa, ricevendo un codice o un QR per l'accesso. Un agente suggerisce gli spazi piu adatti in base alle preferenze e agli orari abituali dell'utente e invia promemoria prima della sessione prenotata. Il gestore dello spazio pubblica orari, capienza e prezzi, vede le prenotazioni e la saturazione delle fasce, e gestisce aperture straordinarie. L'utente vede le proprie prenotazioni e lo storico, il gestore quelle del proprio spazio, l'admin tutto. Report periodico via email al gestore su utilizzo e incassi. Monetizzazione: commissione sulle prenotazioni. In italiano e inglese.

## Contract errors

- `trigger booking_new: booking_desk writes bookings, which starts it — add a where filter`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

## Features not expressible today (spec.extensions)

- **qr_image**: QR image rendering of access_code and variable-price card payment per booking (price_per_session) are not expressible in the manifest; the code is shown as text and the 10% commission is configured via per_transaction.
- **openings_in_slots**: Extraordinary openings/closures in the openings collection are not applied automatically to booking slots; managers can also edit the slots field of their space.
- **occupancy_bands**: Saturation per time band is approximated by bookings per day; finer bands need a custom aggregate.

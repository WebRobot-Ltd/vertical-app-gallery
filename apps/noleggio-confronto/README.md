# NoleggioConfronto

_Confronta il noleggio auto a lungo termine e scopri quale conviene a te._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

NoleggioConfronto e un comparatore per il noleggio auto a lungo termine. L'utente compila un modulo con il tipo di auto che cerca (categoria, alimentazione, cambio), chilometraggio annuo, durata del contratto, anticipo massimo e se gli serve per uso privato o partita IVA. Un agente confronta le offerte disponibili e restituisce una classifica con canone mensile, servizi inclusi (manutenzione, assicurazione, pneumatici), anticipo e costo totale, spiegando quale conviene secondo il profilo. Le offerte provengono solo da feed e accordi con operatori e concessionari che ne autorizzano l'uso; verifico prima i termini di servizio e non copio dati da siti che lo vietano. L'utente puo salvare le ricerche e impostare un avviso "avvisami quando esce un'offerta sotto 300 euro al mese per questa categoria", ricevendo un'email quando si verifica. Chi e interessato lascia un contatto e la richiesta viene passata all'operatore. L'utente vede solo le proprie ricerche. Gratuito per l'utente, commissione sui contatti qualificati agli operatori. In italiano.

## Contract errors

- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2/type: must be equal to constant`
- `/spec/views/0/sections/2/items/0/text: must be string`
- `/spec/views/0/sections/2/items/0/text: must NOT have additional properties`
- `/spec/views/0/sections/2/items/0/text: must match exactly one schema in oneOf`
- `/spec/views/0/sections/2: must have required property 'content'`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2/type: must be equal to constant`
- `/spec/views/0/sections/2: must have required property 'content'`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2/type: must be equal to constant`
- `/spec/views/0/sections/2: must have required property 'html'`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2: must NOT have additional properties`
- `/spec/views/0/sections/2/type: must be equal to constant`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

## Features not expressible today (spec.extensions)

- **lead_commission**: La commissione sui contatti qualificati agli operatori si fattura fuori dall'app (accordo con ciascun operatore); in app si segue solo lo stato della richiesta (nuova, inviata, qualificata, scartata).
- **feed_terms_check**: Prima di attivare un feed o un accordo con un operatore, verificare e archiviare i termini d'uso che ne autorizzano l'uso nel comparatore; nessuna copia di dati da siti che lo vietano.

# NoleggioConfronto

_Il noleggio auto a lungo termine che conviene davvero al tuo profilo._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

NoleggioConfronto e un comparatore per il noleggio auto a lungo termine. L'utente compila un modulo con il tipo di auto che cerca (categoria, alimentazione, cambio), chilometraggio annuo, durata del contratto, anticipo massimo e se gli serve per uso privato o partita IVA. Un agente confronta le offerte disponibili e restituisce una classifica con canone mensile, servizi inclusi (manutenzione, assicurazione, pneumatici), anticipo e costo totale, spiegando quale conviene secondo il profilo. Le offerte provengono solo da feed e accordi con operatori e concessionari che ne autorizzano l'uso; verifico prima i termini di servizio e non copio dati da siti che lo vietano. L'utente puo salvare le ricerche e impostare un avviso "avvisami quando esce un'offerta sotto 300 euro al mese per questa categoria", ricevendo un'email quando si verifica. Chi e interessato lascia un contatto e la richiesta viene passata all'operatore. L'utente vede solo le proprie ricerche. Gratuito per l'utente, commissione sui contatti qualificati agli operatori. In italiano.

## Errori residui

- `runtime: agent watcher: tool search_offers is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **offer_feeds**: Importazione nel catalogo offers dei feed degli operatori e concessionari con accordo scritto. Prima di ogni nuova fonte si verificano i termini di servizio; nessuno scraping di siti che lo vietano.
- **email_alerts**: Email quando scatta un avviso di prezzo: le notifiche email non sono ancora disponibili. Per ora l'esito dell'avviso compare in 'Esiti degli avvisi'.
- **operator_handoff**: Passaggio delle richieste di contatto all'operatore (invio, ruolo operatore, conteggio dei contatti qualificati e commissione): non ancora disponibile. Le richieste sono salvate in leads, visibili solo all'utente.


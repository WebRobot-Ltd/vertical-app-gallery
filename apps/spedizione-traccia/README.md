# SpedizioneTraccia

_Tracking spedizioni e notifiche ai clienti, in un unico posto._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

SpedizioneTraccia da agli e-commerce il tracciamento delle spedizioni e le notifiche ai clienti in un unico posto. Il negozio collega i propri corrieri tramite accesso autorizzato e invia gli ordini spediti con numero di tracking, oppure li importa via webhook dal proprio gestionale. Un agente interroga periodicamente i corrieri, normalizza i diversi stati in un percorso unico (preso in carico, in transito, in consegna, consegnato, giacenza, eccezione) e aggiorna ogni spedizione. Quando lo stato cambia, parte una notifica email al cliente finale con la grafica del negozio e un link a una pagina di tracciamento brandizzata; per gli stati critici come giacenza o mancata consegna l'agente avvisa anche il negozio. Una dashboard mostra tutte le spedizioni, i corrieri piu lenti, i tassi di consegna e i colli bloccati, con filtri e ricerca. Ogni negozio vede solo i propri ordini. Abbonamento mensile a scaglioni di spedizioni gestite. Interfaccia in italiano e inglese, notifiche nella lingua del cliente.

## Funzioni non esprimibili oggi (spec.extensions)

- **carrier_authorized_access**: Connecting each shop's carrier accounts with authorized access (OAuth/API keys) is not available yet; the agent reads carriers' public tracking pages by tracking number.
- **email_notifications**: Sending emails to end customers with the shop's branding is not available yet; notifications are drafted in the customer's language in the outbox, and shop alerts appear in the alerts view.
- **branded_tracking_page**: A public branded tracking page for end customers is not available yet (it would need anonymous access to a shop's records).
- **webhook_import**: Importing orders by webhook from the shop's management system is not available per shop yet; use the paste import.


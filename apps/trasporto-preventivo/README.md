# TrasportoPreventivo

_Preventivo immediato per il trasporto sanitario non urgente._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

TrasportoPreventivo e lo strato software per prenotare trasporto sanitario non urgente (per esempio verso visite e terapie) e ottenere un preventivo immediato; non gestisco il mezzo ne il servizio fisico, che resta in capo agli operatori accreditati. L'utente o un suo familiare compila un modulo con luogo di partenza e destinazione, data e ora, tipo di trasporto (in autonomia, con sedia a rotelle, in barella), eventuale accompagnatore e note sulle condizioni. Un agente calcola distanza e durata, applica i listini degli operatori accreditati sulla piattaforma e mostra subito un preventivo con il prezzo e la disponibilita. L'utente conferma e paga online con carta. La richiesta viene inoltrata all'operatore della zona, che la accetta; un coordinatore umano supervisiona i casi particolari e puo intervenire prima della conferma definitiva. L'utente riceve conferma e promemoria via email, l'operatore vede solo le corse assegnate, l'admin tutto. Monetizzazione: commissione su ogni corsa prenotata. In italiano.

## Funzioni non esprimibili oggi (spec.extensions)

- **email_notifications**: Conferma e promemoria via email all'utente non sono ancora disponibili: per ora lo stato è visibile in 'Le mie richieste'.
- **routing_provider**: Distanza e durata sono stimate dall'agente: un servizio di calcolo percorsi con licenza commerciale andrebbe collegato in seguito.
- **operator_assignment**: L'inoltro all'operatore di zona avviene condividendo la corsa (sharing viewer) con l'email operatore; l'accettazione da parte dell'operatore e il filtro 'solo corse assegnate' richiedono logica dedicata.
- **ride_payment_flow**: Pagamento con carta per singola corsa con commissione (12%, da confermare) sui conti Stripe Connect degli operatori: richiede onboarding Connect di ciascun operatore.


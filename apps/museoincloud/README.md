# MuseoInCloud

_Il gestionale web per musei piccoli e medi._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Vorrei MuseoInCloud, un gestionale web per musei piccoli e medi, fondazioni e siti culturali. Ogni museo è un tenant separato con il proprio staff: direttore, biglietteria, responsabile didattica, comunicazione. Funzioni principali: anagrafica visitatori e CRM (dati di contatto, consenso marketing, storico visite, membership), calendario di mostre, eventi e laboratori con capienza per fascia oraria, biglietteria online con tipologie (intero, ridotto, scuole, gruppi) e pagamento con carta, emissione del biglietto con QR code da validare all'ingresso. Le scuole compilano un modulo di prenotazione per visite didattiche (istituto, classe, numero alunni, data preferita, laboratorio scelto) e il responsabile didattica conferma o propone un'altra data. Un agente prepara la newsletter mensile con mostre ed eventi in programma, segmentando i destinatari per interessi; la comunicazione la approva prima dell'invio. Un altro agente ogni lunedì produce un report con visitatori, incassi per tipologia, tasso di riempimento degli eventi e confronto con l'anno precedente. Alert email quando un evento è quasi esaurito. Ogni museo vede solo i propri dati. Abbonamento mensile per museo più una piccola commissione sui biglietti venduti online. Italiano e inglese.

## Errori residui

- `runtime: agent weekly_report: tool read_events is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **online_ticketing**: Card checkout per ticket type, QR code issuing and entrance validation, with the commission on online sales: needs custom logic not yet expressible. The orders collection is ready to receive them.
- **capacity_alert_email**: Email alert when an event is almost sold out: notifications are not available yet. For now the weekly report flags events above 90%.
- **newsletter_delivery**: Sending the approved newsletter by email is not available yet: after approval the issue is available to copy into the mailing tool.
- **school_booking_decision_record**: Per-museum tenancy is provided by deploying one app per museum; the approved or proposed date is stored on the run, not yet on the school's record.


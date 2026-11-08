# OrdinaPronto

_Ordini all'ingrosso in chat, approvati dal tuo agente di vendita._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Voglio costruire OrdinaPronto, un gestionale con assistente AI per distributori all'ingrosso (food, ferramenta, cosmetica). I ruoli sono tre: il distributore admin che carica il catalogo, gli agenti di vendita interni e i clienti negozianti. Il catalogo arriva dal gestionale ERP del distributore tramite connettore sincronizzato ogni notte, oppure da upload Excel con codice articolo, descrizione, unità di vendita, prezzo per fascia cliente, giacenza e minimo d'ordine. Il negoziante scrive in chat in modo libero, anche incollando un messaggio WhatsApp o un elenco fotografato ("10 cartoni acqua naturale, 3 detersivo come la volta scorsa"); un agente riconosce gli articoli, li abbina al catalogo, propone alternative se mancano e compone una bozza d'ordine in una tabella modificabile. Un secondo agente controlla prezzi di listino e fido residuo e segnala anomalie. L'agente di vendita vede la coda delle bozze, le approva o corregge, e solo dopo l'approvazione l'ordine viene scritto nell'ERP e il cliente riceve una email di conferma. Ogni negoziante vede solo i propri ordini e storico; l'agente vede i clienti assegnati; l'admin tutto, più una dashboard con ordinato per settimana. Abbonamento mensile del distributore per numero di clienti attivi. Italiano e francese.

## Errori residui

- `runtime: agent checker: tool catalog_search is declared differently by another agent`
- `runtime: agent checker: tool customer_read is declared differently by another agent`
- `runtime: agent finalizer: tool draft_read is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **erp_connector**: Nightly ERP catalogue sync and writing the approved order into the ERP need a connector with the distributor's credentials: not available yet. For now: paste catalogue rows (Excel upload is not available); approved orders are recorded in the app only.
- **confirmation_email**: Confirmation email to the customer after approval: notifications are not available yet.
- **photo_lists**: Photographed lists / file upload are not available: customers paste text.
- **assigned_customers**: Sales agents see only their assigned customers, the admin sees all orders, and the admin sets tier and credit limit on customer records: needs cross-user visibility rules not expressible yet. Today the sales agent works from the approval queue.
- **distributor_subscription**: Monthly subscription paid by the distributor to WebRobot, tiered by number of active customers, is handled at platform level, not in this manifest.


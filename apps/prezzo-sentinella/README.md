# PrezzoSentinella

_Sai ogni giorno come prezzano i tuoi concorrenti, nel rispetto delle regole dei loro shop._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

PrezzoSentinella è per brand e retailer che vogliono sapere come prezzano i concorrenti. L'utente carica o inserisce il proprio elenco di prodotti (SKU, EAN, nome, prezzo proprio) e indica gli shop concorrenti da seguire. Per ogni coppia prodotto-shop l'app verifica prima robots.txt e termini d'uso: se lo shop lo vieta, viene segnalato e escluso; non uso mai i siti comparatori, solo gli shop diretti. Ogni giorno alle 6 un agente legge le pagine prodotto consentite, estrae prezzo, disponibilità e promozioni, e salva tutto nello storico. Un secondo agente abbina i prodotti tra shop diversi usando EAN e somiglianza del nome, chiedendo conferma all'utente quando il match è incerto. L'utente vede una tabella con il proprio prezzo, il minimo, la media di mercato e la posizione, più il grafico storico per ciascun SKU. Riceve un alert email quando un concorrente scende sotto una soglia o va fuori stock. Ogni cliente vede solo i propri cataloghi. Abbonamento mensile a scaglioni di SKU monitorati, interfaccia in italiano e inglese.

## Errori residui

- `runtime: agent matcher: tool read_pairs is declared differently by another agent`

## Funzioni non esprimibili oggi (spec.extensions)

- **email_alerts**: Email alerts when a competitor drops below the threshold or goes out of stock are not available yet: alerts are shown in the Alert view. Needs the notifications feature.
- **file_upload**: Uploading a product file (CSV/Excel) is not available yet: products are pasted as text.
- **sku_tier_enforcement**: The monthly plan tiers by number of monitored SKUs are declared, but the runtime cannot yet cap the SKU count per plan; the limit must be enforced manually or by a custom extension.


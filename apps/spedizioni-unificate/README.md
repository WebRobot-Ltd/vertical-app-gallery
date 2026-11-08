# Spedizioni Unificate

_Un pannello unico per spedire con più corrieri: tariffe a confronto, tracking e reclami._

**Manifest status:** valid (schema validator + runtime contract)

## Description given to the app builder (Italian)

Ci serve Spedizioni Unificate, un pannello unico per negozi online che spediscono con più corrieri. Il negoziante si registra, collega via OAuth il suo negozio Shopify, WooCommerce o un marketplace per importare gli ordini in automatico, e inserisce i propri contratti con i corrieri (chiavi API). Per ogni ordine un agente confronta le tariffe dei corrieri collegati in base a peso, dimensioni e destinazione, propone il più conveniente o il più veloce secondo le regole del negoziante e crea la spedizione stampando l'etichetta. Poi interroga ogni poche ore le API di tracking dei corrieri e riceve i loro webhook; a ogni cambio di stato manda al cliente finale un'email brandizzata con lo stato aggiornato. Se una spedizione è ferma da più di due giorni o c'è un'eccezione di consegna, crea un avviso nella coda del negoziante e prepara il reclamo al corriere. Il cliente finale può aprire una pagina di tracking e chiedere un reso compilando un modulo. Il negoziante vede dashboard di costi, tempi e problemi per corriere; ogni membro del team vede solo i suoi negozi. Abbonamento mensile per numero di spedizioni.

## Features not expressible today (spec.extensions)

- **shop_oauth**: Collegamento OAuth a Shopify, WooCommerce e marketplace con import automatico degli ordini: non disponibile, gli ordini si inseriscono a mano.
- **carrier_api**: Chiavi API dei corrieri, tariffe live, creazione spedizione e stampa etichetta, webhook di tracking: non disponibili (servono credenziali per cliente); si usano tabelle tariffarie inserite dal negoziante e il tracking pubblico.
- **customer_emails**: Email brandizzate al cliente finale a ogni cambio di stato e notifiche al negoziante: non disponibili.
- **public_tracking_returns**: Pagina di tracking pubblica per il cliente finale e modulo di reso: richiede lettura/scrittura anonima su dati del negoziante, non disponibile.
- **team_sharing**: Più membri del team sugli stessi negozi con visibilità per negozio: oggi i dati sono per singolo utente.

## Screenshots (interpretive runtime)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_shipment
![03-new_shipment.png](screenshots/03-new_shipment.png)

### history
![04-history.png](screenshots/04-history.png)

### approvals
![05-approvals.png](screenshots/05-approvals.png)

### shops_view
![06-shops_view.png](screenshots/06-shops_view.png)

### carriers_view
![07-carriers_view.png](screenshots/07-carriers_view.png)

### orders_view
![08-orders_view.png](screenshots/08-orders_view.png)

### shipments_view
![09-shipments_view.png](screenshots/09-shipments_view.png)

### watches
![10-watches.png](screenshots/10-watches.png)

### stats
![11-stats.png](screenshots/11-stats.png)

### account
![12-account.png](screenshots/12-account.png)


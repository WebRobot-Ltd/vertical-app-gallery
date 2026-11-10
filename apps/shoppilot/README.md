# ShopPilot

_Il CRM marketing del tuo e-commerce, guidato da un agente AI._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (16 checks passed)

## Description given to the app builder (Italian)

Voglio un'app per negozi e-commerce che fa il lavoro di un CRM marketing con un agente AI. Il negozio collega il suo shop (Shopify o WooCommerce) e l'app importa clienti, ordini e catalogo. Ogni lunedì un agente propone un piano settimanale: quali campagne mandare (email e WhatsApp), a quali segmenti di clienti (es. 'ha comprato scarpe negli ultimi 90 giorni ma non ha riacquistato'), con quali prodotti del catalogo e con il testo dei messaggi. Il titolare approva, modifica o rifiuta ogni campagna: non parte niente senza approvazione. Flussi automatici per carrello abbandonato, post-acquisto e riacquisto. Un assistente risponde ai clienti su WhatsApp e sul sito su ordini, spedizioni, resi e consigli di prodotto. Report settimanale dei ricavi per campagna. I messaggi marketing vanno solo a chi ha dato il consenso. Nome: ShopPilot. Lingue italiano e inglese. Abbonamento mensile per negozio.

## Features not expressible today (spec.extensions)

- **campaign_sending**: Email campaign sending to lists and WhatsApp messages (sending and customer replies on WhatsApp) are not available yet: approved campaigns are stored and exportable (CSV of consented customers) but not delivered by the platform.
- **woocommerce**: WooCommerce connection not available: its hosts are arbitrary per store and the egress allow-list only supports named hosts or Shopify wildcard. Shopify only for now.
- **public_widget**: Embeddable site chat widget for the shop's own visitors (anonymous, per-shop data) is not available yet; the assistant runs in the signed-in chat view.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### plans
![03-plans.png](screenshots/03-plans.png)

### new
![04-new.png](screenshots/04-new.png)

### history
![05-history.png](screenshots/05-history.png)

### approve
![06-approve.png](screenshots/06-approve.png)

### campaigns
![07-campaigns.png](screenshots/07-campaigns.png)

### edit_campaign
![08-edit_campaign.png](screenshots/08-edit_campaign.png)

### revenue
![09-revenue.png](screenshots/09-revenue.png)

### customers
![10-customers.png](screenshots/10-customers.png)

### chat
![11-chat.png](screenshots/11-chat.png)

### account
![12-account.png](screenshots/12-account.png)

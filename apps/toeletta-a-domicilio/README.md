# Toeletta a Domicilio

_Toelettatura professionale a casa tua, con il furgone attrezzato._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

Ci serve Toeletta a Domicilio, il sito di prenotazione e gestione per un servizio di toelettatura che va a casa dei clienti con un furgone attrezzato. Descrivo solo la parte software, il servizio fisico lo fanno i nostri toelettatori. Il cliente si registra, crea la scheda dell'animale (specie, razza, peso, tipo di pelo, carattere, note sanitarie) e prenota indicando indirizzo, servizio (bagno, tosatura, unghie, trattamento antiparassitario) e fascia oraria. Un agente calcola durata e prezzo in base a razza e servizi, verifica che l'indirizzo sia nella zona coperta e propone gli slot liberi ottimizzando i giri dei furgoni sulla mappa per ridurre i chilometri. Il cliente paga online. Il toelettatore vede dal telefono il suo giro del giorno con indirizzi e schede, e dopo il servizio carica foto e note. Il cliente riceve un messaggio WhatsApp quando il furgone sta arrivando e un promemoria automatico per il prossimo appuntamento. L'admin vede calendario di tutti i furgoni, incassi e recensioni. Abbonamenti mensili per toelettature periodiche oppure pagamento a servizio.

## Contract errors

- `agent quote: goalTemplate placeholder {date_today} is not a form field, a context key or a built-in — a value derived from the form comes from a slot (context from: slot:<key>), a record from a collection (context from: collection:<name>) or a tool`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

## Features not expressible today (spec.extensions)

- **whatsapp**: I messaggi WhatsApp (furgone in arrivo, promemoria) non sono ancora disponibili: sono inviati come email dalla piattaforma.
- **variable_price_charge**: L'addebito alla prenotazione è fisso (50 crediti = 50 EUR); il prezzo variabile per razza e servizi è mostrato nel preventivo ma non è addebitato automaticamente.
- **seed_data**: L'admin deve inserire furgoni (vans) e zone coperte (zones); i toelettatori ricevono il ruolo groomer su invito.
- **groomer_scope**: Ogni toelettatore vede tutte le prenotazioni, non solo quelle del proprio furgone.

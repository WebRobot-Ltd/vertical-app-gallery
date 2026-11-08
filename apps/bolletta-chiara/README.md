# Bolletta Chiara

_Capisci la tua bolletta di luce e gas e scopri quanto puoi risparmiare._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Mi serve Bolletta Chiara, un'app che aiuta famiglie e piccole imprese a capire le bollette di luce e gas e a risparmiare. L'utente carica la foto o il PDF dell'ultima bolletta; l'app la legge ed estrae fornitore, offerta, consumi annui, potenza, prezzo per kWh o per Smc e costi fissi. In alternativa l'utente compila a mano un modulo con questi dati e il CAP. Un agente confronta la spesa attuale con tutte le offerte del Portale Offerte di ARERA compatibili con il profilo, calcola il risparmio annuo stimato per ciascuna e mostra una tabella ordinata con le condizioni da controllare. Tiene conto dell'andamento del PUN pubblicato dal GME per le offerte variabili. L'utente può attivare un monitoraggio: ogni settimana l'agente ricontrolla le offerte e se ne compare una che fa risparmiare più di una certa soglia manda un'email. Vorremmo che, con il consenso dell'utente, il cambio di fornitore venisse avviato direttamente dall'app. Ogni utente vede solo le sue bollette. Il confronto è gratuito, il monitoraggio costa un piccolo abbonamento annuale.

## Errori residui

- `billing: free cannot be combined with other modes`

## Funzioni non esprimibili oggi (spec.extensions)

- **bill_file_upload**: Upload of a photo or PDF of the bill with automatic reading is not available yet: the user pastes a link or the text of the bill, or fills in the form.
- **email_alerts**: Weekly email when an offer exceeds the saving threshold is not available yet (no notifications): the result appears in the Monitoring checks view.
- **supplier_switch**: Starting the supplier switch directly from the app (with user consent) is not available: it needs the customer's identity data, contractual mandate and supplier credentials. The report points to the chosen supplier.


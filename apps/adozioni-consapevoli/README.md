# CasaGiusta

_La casa giusta per ogni animale, l'animale giusto per ogni casa._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Vorrei un'app per le associazioni animaliste che si chiami CasaGiusta. Ogni associazione ha un account e inserisce gli animali in adozione: specie, razza, età, taglia, carattere, compatibilità con bambini e altri animali, esigenze sanitarie, foto e canile di provenienza. Chi vuole adottare si registra e compila un questionario pre-affido: tipo di casa, giardino, ore fuori casa, esperienza, composizione della famiglia, altri animali. Un agente confronta il questionario con le schede e propone gli animali più compatibili con una spiegazione, segnalando anche le incompatibilità. L'adottante invia la candidatura per un animale; il volontario dell'associazione la riceve, vede questionario e punteggio, può fare domande e approva o rifiuta. Ad ogni passaggio l'adottante riceve un'email; dopo l'adozione l'app manda promemoria per i controlli post-affido. Ogni associazione vede solo i propri animali e candidati, l'adottante solo le sue candidature, l'admin della piattaforma tutto. Gratuita per gli adottanti, abbonamento piccolo per le associazioni. Italiano.

## Errori residui

- `agent screener: goalTemplate placeholder {animal} is not a form field, a context key or a built-in`
- `agent screener: goalTemplate placeholder {questionnaire} is not a form field, a context key or a built-in`

## Funzioni non esprimibili oggi (spec.extensions)

- **email_notifications**: Le email all'adottante a ogni passaggio (candidatura ricevuta, domanda, approvata, rifiutata) e i promemoria post-affido via email non sono ancora disponibili: i promemoria compaiono nella vista Post-affido, e lo stato nella vista Le mie candidature.
- **photo_upload**: Il caricamento delle foto non è disponibile: la scheda ha un link alla foto.
- **per_association_isolation**: Le schede animali sono in una raccolta condivisa perché gli adottanti devono confrontarle tutte; la separazione 'ogni associazione vede solo i propri animali e candidati' e l'instradamento delle candidature all'associazione giusta richiedono un filtro per proprietario/associazione non ancora esprimibile nel manifest. Da completare con logica dedicata.
- **application_submit**: L'invio della candidatura per un animale e lo scambio di domande col volontario richiedono un modulo su collezione, non ancora disponibile come vista.


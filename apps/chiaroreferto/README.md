# ChiaroReferto

_Il referto spiegato bene, dopo la revisione del tuo medico._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Per ChiaroReferto descrivo solo lo strato software informativo e gestionale: l'integrazione con i sistemi ospedalieri e la lettura automatica di immagini diagnostiche restano fuori, e l'app non sostituisce il medico. È pensata per strutture sanitarie e medici di base. Ruoli: paziente, medico, admin della struttura. Il medico carica il referto testuale o in PDF del paziente (esami del sangue, ecografie, visite specialistiche) oppure il paziente lo carica dalla propria area dopo aver dato il consenso esplicito. Un agente estrae valori, diagnosi e indicazioni, li confronta con i range di riferimento riportati nel referto e prepara due documenti: una spiegazione in linguaggio semplice per il paziente e una bozza di piano di cura con controlli e scadenze per il medico. Nulla arriva al paziente prima che il medico abbia letto, corretto e approvato la bozza. Il paziente vede poi il proprio fascicolo con la spiegazione, il calendario dei controlli e promemoria via email; può fare domande in chat sul testo approvato, con l'avviso di rivolgersi al medico per ogni decisione. Ogni paziente vede solo i propri referti, il medico solo i suoi pazienti; accessi registrati. Licenza per struttura. Italiano.

## Errori residui

- `agent finalizzatore: goalTemplate placeholder {event} is not a form field, a context key or a built-in`

## Funzioni non esprimibili oggi (spec.extensions)

- **upload_pdf**: Caricamento di referti in PDF: non ancora disponibile; per ora il testo del referto si incolla nel modulo.
- **promemoria_email**: Promemoria via email dei controlli al paziente: le notifiche non sono ancora disponibili; per ora il calendario è consultabile nel fascicolo.
- **registro_accessi**: Registro degli accessi ai dati sanitari da esporre all'admin della struttura: da verificare con il runtime.
- **collegamento_medico_paziente**: Assegnazione dei pazienti al medico e revisione/correzione della bozza prima dell'approvazione: da rifinire nello Studio (la correzione dell'editor non è espressa dal manifest).


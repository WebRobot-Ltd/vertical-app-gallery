# vertical-app-gallery

176 applicazioni verticali generate dall'**app builder WebRobot** a partire da descrizioni funzionali in linguaggio naturale, con il manifest prodotto, gli screenshot del runtime e l'analisi di cosa il manifest non riesce ancora a esprimere.

Lo scopo è dimostrativo e di ricerca: misurare **quanto è generale ed espressivo il formato `VerticalApp`** provando a riprodurre le funzioni di prodotti reali molto diversi tra loro (legaltech, fintech, HR, turismo, sanità, energia, agritech, media, e-commerce, PA). Le app non sono copie di prodotti esistenti: ogni descrizione riformula in modo generico le funzioni di un tipo di servizio, con nomi inventati e senza marchi.

## Come è fatto

1. **Descrizione.** Per ogni tipo di servizio è stata scritta una descrizione funzionale (attori, dati, flussi, automazioni, notifiche, approvazioni, prezzi, lingue), senza riferimenti a una piattaforma.
2. **Generazione.** La descrizione è stata data all'app builder (un agente di sistema della piattaforma WebRobot) che risponde con un manifest `VerticalApp` (`webrobot.eu/v1alpha1`). Se il manifest non passa la validazione, il builder riceve gli errori e ha una sola possibilità di correggerlo.
3. **Validazione.** Ogni manifest è controllato due volte: con il validatore dello schema e con il contratto del runtime (riferimenti incrociati, tool, approvazioni, segnaposto).
4. **Runtime interpretativo.** Le app valide sono servite dal runtime vertical-kit, che **interpreta il manifest così com'è**: nessun codice viene generato. Gli screenshot mostrano la home (desktop e mobile) e ogni vista, con login di prova e senza dati.
5. **Analisi delle lacune.** Quello che il builder non riesce a esprimere finisce in `spec.extensions`. In più ogni descrizione è stata scomposta in funzioni elementari e confrontata con il manifest.

## Numeri

| | |
|---|---|
| App generate | 176 |
| Manifest validi (schema + contratto runtime) | 153 (87%) |
| Manifest con errori residui dopo una correzione | 23 |
| Agenti per app (media) | 2,7 |
| Viste per app (media) | 9,3 |
| Funzioni elementari analizzate | 2.566 |
| … espresse con un costrutto del manifest | 1.512 (59%) |
| … dichiarate non esprimibili (`spec.extensions`) | 888 (35%) |
| … solo nel testo delle istruzioni dell'agente | 104 (4%) |
| … perse senza traccia | 62 (2%) |

Il builder perde poco in silenzio: il limite principale è l'**espressività del manifest**, non la comprensione della richiesta.

## Le funzioni che mancano di più

Numero di app in cui la funzione serve ma non è esprimibile oggi (dettaglio in [`gaps/all_gaps_by_category.tsv`](gaps/all_gaps_by_category.tsv), costrutti proposti in [`gaps/feature_gaps.tsv`](gaps/feature_gaps.tsv)):

| Funzione | App |
|---|---|
| Caricamento di file, foto, CSV con estrazione testo/OCR | 96 |
| Email all'utente quando succede qualcosa | 71 |
| Visibilità dei record per assegnazione o ruolo dello staff | 69 |
| Collegamento del singolo utente a sistemi esterni (OAuth/API key verso CRM, gestionali, e-commerce, calendari) | 68 |
| Email periodica di riepilogo | 46 |
| Regole di conformità applicabili dal runtime (oggi solo nel prompt) | 34 |
| Promemoria relativi a una data | 34 |
| Limiti per piano (es. fino a N record o utenti) | 33 |
| Prezzo per quantità (per posto, camera, ettaro) | 33 |
| Team/organizzazione del cliente dentro l'app | 31 |
| Pagamento per singolo record, caparre, ripartizione verso venditori | 30 |
| Email a terzi e campagne | 28 |
| Form e azioni sui singoli record | 27 |

Seguono casella email in entrata, export Word/Excel/PDF, mappe, prenotazione di slot, ingest da webhook, aggregati, voce, WhatsApp/SMS, widget incorporabile, SSO, firma elettronica, risposte con fonte citata.

## Struttura

```
apps/index.json                 elenco delle app con stato, numero di agenti, viste, extensions
apps/<slug>/manifest.yaml       manifest VerticalApp generato
apps/<slug>/README.md           descrizione data al builder, errori residui, extensions, screenshot
apps/<slug>/screenshots/*.png   home anonima, home mobile, una schermata per vista
gaps/feature_gaps.tsv           44 categorie di lacune: classe, app impattate, costrutto proposto
gaps/all_gaps_by_category.tsv   categorie ordinate per numero di app (extensions + analisi per funzione)
gaps/extensions_labeled.tsv     ogni voce di spec.extensions con la sua categoria
gaps/features_per_app.tsv       ogni funzione elementare di ogni descrizione con esito e riferimento nel manifest
tools/                          script usati: generazione in blocco, validazione, screenshot
```

Classi nelle tabelle delle lacune: **a** già esprimibile (il builder non lo sapeva), **b** manca il costrutto nello schema, **c** il costrutto esiste ma il runtime non lo esegue ancora, **d** fuori perimetro (attività regolate o fisiche).

## Note

- Le schermate interne sono vuote perché il runtime gira senza dati: mostrano struttura, navigazione e ruoli, non contenuti.
- Il runtime vertical-kit e l'app builder fanno parte della piattaforma WebRobot e non sono inclusi in questo repository; gli script in `tools/` documentano il procedimento.
- I manifest con errori residui sono pubblicati comunque: sono parte del risultato.

Questa è la prima tornata. Le lacune vengono corrette nello schema, nel runtime e nelle istruzioni del builder; poi le stesse descrizioni vengono rigenerate per misurare il prima e il dopo.

WebRobot Ltd — [webrobot.eu](https://www.webrobot.eu)

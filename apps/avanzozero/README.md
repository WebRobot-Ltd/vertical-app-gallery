# AvanzoZero

_Meno scarti in cucina, più margine e un bilancio di sostenibilità solido._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

Di AvanzoZero descrivo solo lo strato software: le bilance e i cestini intelligenti che pesano e riconoscono gli scarti sono hardware di un fornitore e qui arrivano solo i loro dati. L'app è per mense aziendali e scolastiche, ristoranti e hotel che vogliono ridurre lo spreco alimentare. Ruoli: responsabile della cucina, addetto e direzione. Il responsabile registra le sedi, i menù settimanali con piatti, porzioni e costo per porzione, e il numero di coperti previsti. Ogni giorno arrivano le pesate degli scarti per categoria e piatto dai dispositivi oppure inserite a mano dall'addetto con un modulo rapido. Un agente incrocia scarti, menù e coperti reali, individua i piatti più avanzati e i giorni critici, e stima il costo economico e le emissioni evitabili. Un secondo agente propone ogni settimana correzioni concrete: porzioni da ridurre, quantità da preparare per il giorno successivo, piatti da sostituire; il responsabile approva prima che diventino il piano di produzione. La direzione riceve un report mensile in PDF e una dashboard con l'andamento per sede, utile anche per il bilancio di sostenibilità. Ogni sede vede solo i propri dati. Abbonamento per sede. Italiano e inglese.

## Contract errors

- `collection sites: access for unknown role 'user'`
- `collection menu_items: access for unknown role 'user'`
- `collection covers: access for unknown role 'user'`
- `collection waste_logs: access for unknown role 'user'`
- `collection production_plan: access for unknown role 'user'`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

# Garage Online

_Vendi auto usate online con un assistente AI e consulenti umani._

**Manifest:** refused by the runtime contract · **Functional test:** 1 failure(s) (0 checks passed)

## Description given to the app builder (Italian)

Vorrei Garage Online, un'app per concessionarie di auto usate che vogliono vendere online con un assistente e consulenti umani. La concessionaria carica il suo stock: modello, anno, chilometri, prezzo, foto, optional, garanzia. Il visitatore anonimo del sito chatta con un assistente che lo aiuta a scegliere in base a budget, uso, tipo di alimentazione e rata mensile desiderata, confronta le auto disponibili solo nello stock del concessionario e calcola una simulazione di rata a titolo indicativo. Il cliente interessato lascia contatti, chiede una prova su strada o la valutazione della propria auto, e un consulente riceve la richiesta con il riassunto della conversazione, la approva e richiama; vorremmo anche che l'assistente risponda al telefono e che il consulente possa chiamare dalla piattaforma. Per bloccare un'auto il cliente paga un acconto con carta, rimborsabile secondo regole chiare. La richiesta di finanziamento vera va girata alla finanziaria partner. Non usiamo dati dei portali di annunci. Ogni concessionaria vede solo il suo stock e i suoi clienti. Abbonamento mensile più una commissione per auto venduta.

## Contract errors

- `trigger new_lead: screener writes leads, which starts it — add a where filter`

## Functional test: what did not pass

- **app served by the runtime** (app): the runtime does not serve this app (invalid manifest?)

## Features not expressible today (spec.extensions)

- **deposit_card**: Acconto con carta per bloccare un'auto, con regole di rimborso: il pagamento dei visitatori al proprietario via Stripe Connect non è esprimibile come pagamento per singola auto; da configurare a parte, con le regole di rimborso scritte dalla concessionaria.
- **phone_and_click_to_call**: Il canale telefonico dell'assistente è dichiarato in channels (richiede Activate phone); la chiamata del consulente dalla piattaforma non è ancora disponibile.
- **chat_summary_handoff**: L'assistente anonimo non può scrivere in una raccolta riservata: il riassunto della conversazione arriva nel modulo di contatto (compilato dal visitatore) e viene rifinito dall'agente istruttore.
- **financing_partner**: La richiesta di finanziamento viene girata alla finanziaria partner dal consulente; nessuna integrazione API con la finanziaria.
- **per_dealer_isolation**: Ogni concessionaria è un'app separata (stock e clienti non condivisi); una nuova concessionaria si crea duplicando il manifest.

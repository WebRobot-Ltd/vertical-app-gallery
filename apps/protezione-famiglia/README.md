# ProtezioneFamiglia

_Quanto serve davvero alla tua famiglia se un giorno non ci sei?_

**Manifest status:** remaining errors

## Description given to the app builder (Italian)

Voglio ProtezioneFamiglia, un consulente online per chi valuta una polizza vita temporanea caso morte. L'utente risponde a domande su reddito, mutuo, figli, risparmi e spese familiari. Un calcolo determina il capitale che servirebbe alla famiglia e la durata consigliata, e un agente spiega il risultato in linguaggio semplice con esempi. L'utente può salvare la simulazione e chiedere di essere ricontattato da un intermediario iscritto all'albo, che riceve la richiesta in una coda e la gestisce; l'app non vende polizze direttamente. Ogni utente vede solo le proprie simulazioni. Gratuito per l'utente, compenso per contatto qualificato dall'intermediario.

## Remaining errors

- `agent advisor: goalTemplate placeholder {part_education} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {part_support} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {support_years} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {part_mortgage} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {part_savings} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {part_final} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {duration} is not a form field, a context key or a built-in`
- `agent advisor: goalTemplate placeholder {capital} is not a form field, a context key or a built-in`

## Features not expressible today (spec.extensions)

- **intermediary_fee**: Per-qualified-contact fee charged to intermediaries is not supported by billing yet: invoice outside the app, counting approved contact_request items.
- **intermediary_email**: Email notification to intermediaries on new requests is not available yet: they check the queue view.


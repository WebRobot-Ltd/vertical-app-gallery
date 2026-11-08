# SapereInterno

_Le risposte dell'azienda, con la fonte, per ogni dipendente._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

SapereInterno è un assistente aziendale che risponde ai dipendenti usando la conoscenza interna dell'organizzazione. L'admin IT collega le fonti documentali dell'azienda: SharePoint, Microsoft Teams e cartelle condivise, oppure carica manualmente manuali, procedure e FAQ in PDF e Word. I documenti vengono indicizzati con i permessi originali, così ogni dipendente ritrova solo ciò che è autorizzato a vedere. I dipendenti fanno domande in una chat con login aziendale, sia nell'app web sia dentro Teams, e ricevono risposte con citazione del documento fonte. Quando l'agente non è sicuro o la domanda riguarda un argomento sensibile, inoltra il quesito all'esperto interno designato, che risponde; la sua risposta viene salvata e arricchisce la base di conoscenza. Ogni settimana i responsabili ricevono un report con le domande più frequenti senza risposta e i documenti obsoleti da aggiornare. L'indicizzazione si aggiorna ogni notte. Licenza annuale per numero di dipendenti. Italiano e inglese.

## Funzioni non esprimibili oggi (spec.extensions)

- **source_connectors**: Not available yet: connecting SharePoint, Microsoft Teams and shared folders (they need the company's own credentials) and indexing with the original permissions. For now the admin pastes document text and sets an area; restricted areas are only withheld by the assistant's instructions, not by real ACLs.
- **file_upload**: Not available yet: upload of PDF and Word files. Paste the text or give a link.
- **teams_channel**: Not available yet: the chat inside Microsoft Teams and corporate (SSO) login; the app uses magic-link login and the web chat.
- **nightly_indexing**: Not available yet: nightly re-indexing from the connected sources, which depends on the connectors; documents are indexed as soon as they are added.
- **email_digest**: Not available yet: sending the weekly report by email; managers read it in the Reports view.
- **expert_routing**: Escalations go to one shared inbox for all users with the expert role; routing to a designated expert per topic and notifying the asker of the answer are not available yet.


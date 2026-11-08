# VerificaDifese

_Controlla le tue applicazioni web prima che lo faccia qualcun altro._

**Manifest status:** valid (schema validator + runtime contract)

## Description given to the app builder (Italian)

Vorrei VerificaDifese, un servizio di valutazione della sicurezza per aziende che vogliono controllare le proprie applicazioni web prima che lo faccia qualcun altro. Il cliente registra un'applicazione di sua proprietà e dimostra di controllarla pubblicando un codice di verifica sul proprio dominio; senza verifica e senza l'accettazione di un'autorizzazione scritta al test nessuna analisi può partire. Il cliente sceglie l'ambiente (test o produzione) e le finestre orarie consentite. Un agente esegue solo controlli non distruttivi e a basso carico sul dominio verificato: configurazione TLS e intestazioni di sicurezza, versioni di componenti con vulnerabilità note pubblicate, esposizione di pagine amministrative, conformità alle buone pratiche OWASP, e traffico limitato agli host dichiarati. I risultati sono classificati per gravità con spiegazione e indicazioni di correzione per gli sviluppatori. Un consulente di sicurezza della piattaforma rivede e approva il report prima che arrivi al cliente via email. Il cliente può pianificare una verifica mensile e confrontare i risultati nel tempo. Ogni cliente vede solo le proprie applicazioni e i propri report. Abbonamento per numero di applicazioni verificate. Italiano e inglese.

## Features not expressible today (spec.extensions)

- **email_delivery**: Emailing the approved report to the customer is not available yet: the report appears in 'My reports' once published.
- **app_limit_per_plan**: Limiting the number of verified applications to the subscribed plan (1 or 5) needs custom logic; for now it is a manual check by the owner.
- **platform_domain_verification**: Domain verification is performed by the registrar agent through the web tool; a deterministic platform check and enforcement of time windows by the runtime are not available yet.


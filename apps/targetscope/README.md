# TargetScope

_Intelligence sui mercati privati: dalla tesi di investimento alle aziende target, con le fonti._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Voglio un'app di intelligence sui mercati privati per fondi di private equity, search fund e advisor M&A. L'utente scrive una tesi di investimento in linguaggio naturale (es. 'PMI manifatturiere nel nord Italia, ricavi 10-50 milioni, a controllo familiare, settore packaging') e l'app restituisce una lista di aziende target con scheda: descrizione, sito, settore, dimensione stimata, notizie recenti, segnali (assunzioni, nuovi stabilimenti, appalti vinti, brevetti), fonte di ogni dato. Le aziende si possono salvare in una pipeline con fasi (screening, analisi, approvata, contattata, due diligence). L'utente può caricare documenti (bilanci, memo, cap table) e chiedere a un agente un memo di investimento o un confronto con i comparabili, con le fonti citate. Alert settimanali sulle aziende in pipeline (nuove notizie, nomine, operazioni). Usare solo fonti aperte o dati caricati dall'utente: Companies House UK ha un'API gratuita, TED e ANAC per gli appalti, siti aziendali e comunicati stampa. Nome: TargetScope. Lingue italiano e inglese. Abbonamento per utente.

## Errori residui

- `spec: Additional properties are not allowed ('collections' was unexpected)`
- `runtime: /spec: must NOT have additional properties`


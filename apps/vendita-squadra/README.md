# VenditaSquadra

_Sei agenti AI per trovare, qualificare e contattare i clienti giusti._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

VenditaSquadra è un team di sei agenti per vendite e marketing diretto rivolto a PMI B2B. Il responsabile commerciale descrive il cliente ideale (settore, dimensione, area geografica, ruolo del decisore) e l'offerta da proporre. Il primo agente cerca aziende in target su fonti pubbliche come registri imprese aperti, siti istituzionali e notizie; il secondo arricchisce ogni azienda con informazioni utili; il terzo valuta e ordina i lead; il quarto scrive email personalizzate di primo contatto; il quinto gestisce i follow-up programmati dopo tre e sette giorni; il sesto legge le risposte, le classifica (interessato, non ora, non interessato) e propone il passo successivo. Prima dell'invio delle prime email di ogni campagna il responsabile approva testi e lista. Tutti i lead e le interazioni devono essere sincronizzati in automatico con il CRM aziendale, come HubSpot o Salesforce, tramite collegamento autorizzato. Ogni lunedì arriva un report con tassi di apertura, risposte e appuntamenti fissati. Ogni azienda vede solo le proprie campagne. Abbonamento mensile più crediti per contatto. In italiano e inglese.

## Funzioni non esprimibili oggi (spec.extensions)

- **crm_sync**: Automatic two-way sync of leads and interactions with HubSpot or Salesforce through an authorised connection (OAuth per customer) is not available yet: connectors needing each customer's credentials are not supported. For now leads and interactions are kept in the app's collections; a CRM export/import is the planned follow-up.
- **email_sending**: Sending emails and tracking opens/replies is not available yet (no notifications or mailbox connectors). Approved drafts are shown in the app for the manager to send from their own mail; opens are reported as 'not tracked'; replies are pasted into the replies collection to be classified.
- **replies_collection**: The trigger on_reply starts when a 'replies' record is inserted by the user (pasted text, company, campaign); a dedicated input view for it still has to be added in the studio.


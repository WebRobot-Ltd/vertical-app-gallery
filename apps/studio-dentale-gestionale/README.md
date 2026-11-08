# Studio Dentistico

_Agenda, pazienti e richiami del tuo studio, con un assistente AI._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Descrivo lo strato software gestionale per studi dentistici: agenda, anagrafiche e comunicazioni, con la dovuta attenzione ai dati sanitari (categoria particolare, art. 9 GDPR) che sono visibili solo al personale autorizzato dello studio. La segretaria gestisce il calendario degli appuntamenti con medici e poltrone, registra i pazienti con anagrafica, piano di cure e storico delle visite. Un agente ottimizza l'agenda proponendo gli slot migliori quando si prenota, invia ai pazienti promemoria dell'appuntamento via email ed eventualmente un messaggio, e avvisa chi e in ritardo con i controlli periodici di richiamo (recall). Il dentista vede la cartella dei propri pazienti e i piani di cura, la segretaria l'agenda e le anagrafiche, il paziente puo accedere a una propria area per vedere appuntamenti e documenti condivisi. In futuro vorrei la firma elettronica dei consensi informati direttamente nell'app. Ogni studio vede solo i propri pazienti. Abbonamento mensile per studio in base al numero di poltrone o utenti. In italiano.

## Funzioni non esprimibili oggi (spec.extensions)

- **staff_condiviso_studio**: Più utenti (segretaria, dentisti, pazienti) sullo stesso studio con visibilità per ruolo: oggi i dati sono del singolo account titolare e si condividono per record tramite inviti viewer/editor. Manca un vero 'studio' con membri e permessi per ruolo.
- **invio_promemoria**: Invio automatico di email e messaggi ai pazienti: non disponibile. L'agente prepara bozze in 'comunicazioni' che il personale invia.
- **firma_consensi**: Firma elettronica dei consensi informati nell'app: prevista in futuro; per ora il consenso si registra come casella nell'anagrafica e il documento si condivide come link.
- **upload_documenti**: Caricamento file non disponibile: i documenti condivisi sono link.
- **adempimenti_gdpr**: Nomina a responsabile del trattamento (art. 28), registro dei trattamenti e DPIA da definire con il titolare prima dell'uso con dati reali.


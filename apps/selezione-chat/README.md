# SelezioneChat

_Selezione del personale in chat: screening, punteggio e colloquio fissato._

**Manifest status:** valid (schema validator + runtime contract)

## Description given to the app builder (Italian)

SelezioneChat automatizza la selezione del personale via WhatsApp per aziende che assumono molto, come retail, logistica e ristorazione. Il recruiter crea una posizione aperta con requisiti, sede, turni, stipendio e domande di screening. I candidati arrivano da un link o un QR code e parlano con un agente su WhatsApp: l'agente presenta l'offerta, fa le domande di screening, raccoglie disponibilità e chiede il CV come foto o documento. Ogni candidato viene salvato in un archivio con le sue risposte e un punteggio di aderenza ai requisiti. Quando un candidato supera la soglia, l'agente propone automaticamente gli slot liberi del calendario del responsabile e fissa il colloquio, mandando promemoria il giorno prima. Il recruiter vede una pipeline per posizione con stato di ogni candidato e può intervenire nella conversazione. I candidati scartati ricevono un messaggio di cortesia. I dati dei candidati li vede solo l'azienda titolare e vengono cancellati dopo dodici mesi. Abbonamento mensile per posizioni attive. Italiano, inglese, rumeno e spagnolo.

## Features not expressible today (spec.extensions)

- **whatsapp_channel**: WhatsApp is not available yet (needs the company's WhatsApp Business credentials). Candidates chat in the web chat opened from the link/QR code.
- **candidate_access_and_ownership**: Candidates reaching the chat without an account and their records landing in the hiring company's private archive needs runtime support not available yet; for now the chat runs for signed-in users.
- **calendar_connector**: Google/Outlook calendar sync needs credentials: the manager enters free slots in the interview_slots collection and the agent books those.
- **reminders**: Day-before reminders to candidates need notifications (not available yet).
- **cv_upload**: CV as photo or document is not supported yet: the agent asks for a link or pasted text.
- **retention_12_months**: Automatic deletion of candidate records after 12 months is not expressible yet; must be implemented as a platform retention rule.
- **courtesy_message_delivery**: Rejection messages are sent inside the chat only; no email or WhatsApp push.
- **active_position_quota**: Plans limit active positions, but quota enforcement per plan is not expressible in the manifest.


# SoldiSereni

_Capisci i tuoi soldi, con calma. Educazione finanziaria e consulenza a parcella._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

SoldiSereni e un'app di educazione finanziaria con tracciamento delle spese e consulenza a parcella (fee-only); descrivo lo strato software, mentre la consulenza regolamentata resta in capo a consulenti iscritti all'albo. L'utente si registra e segue brevi percorsi formativi su budget, risparmio e investimenti, con quiz. Puo registrare entrate e spese manualmente e categorizzarle; un agente analizza l'andamento, mostra dove vanno i soldi e suggerisce obiettivi di risparmio. In futuro vorrei collegare i conti correnti via open banking (PSD2) per importare i movimenti in automatico. Chi vuole un parere personale prenota e paga una sessione con un consulente indipendente iscritto all'albo, che usa i dati che l'utente decide di condividere e fornisce lui la consulenza. L'utente chatta con un assistente per domande generali di educazione finanziaria, che non da raccomandazioni di investimento personalizzate. Ogni utente vede solo i propri dati, il consulente solo i clienti che lo hanno scelto. Piano gratuito, abbonamento per funzioni avanzate, pagamento a sessione per la consulenza. In italiano.

## Funzioni non esprimibili oggi (spec.extensions)

- **open_banking_psd2**: Collegamento dei conti via open banking (PSD2) per importare i movimenti: non ancora disponibile (richiede credenziali per ogni cliente e un provider AISP autorizzato). Per ora i movimenti si registrano a mano in chat.
- **advisor_booking_calendar**: Prenotazione con calendario e conferma automatica della sessione, e invio email di promemoria: non disponibile. La richiesta è un record in 'Le mie sessioni' che il consulente conferma; il pagamento a sessione passa da Stripe Connect sul conto del consulente.
- **advisor_selection**: L'utente condivide dossier e prenotazione invitando il consulente scelto (condivisione per record): il consulente vede solo i record per cui è stato invitato. L'iscrizione all'albo va verificata dall'admin prima di assegnare il ruolo 'advisor' per invito.


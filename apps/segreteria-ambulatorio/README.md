# SegreteriaAmbulatorio

_La segreteria del tuo centro medico, sempre disponibile in chat._

**Manifest status:** valid (schema validator + runtime contract)

## Description given to the app builder (Italian)

Ci serve SegreteriaAmbulatorio, un assistente che risponde ai pazienti di un centro medico al posto della segreteria. L'admin del centro carica medici, specialità, orari e prestazioni con durata e prezzo. Il paziente scrive o parla in chat sul sito: l'agente risponde su prestazioni, preparazione agli esami e orari, propone gli slot liberi e prenota la visita, che finisce nell'agenda del centro. Il giorno prima il paziente riceve un'email di promemoria con il link per disdire. Le richieste cliniche o urgenti non vengono gestite dall'agente: passano a un operatore umano che risponde dalla sua coda. Dati sanitari trattati con consenso esplicito. Ogni centro vede solo i propri pazienti. Abbonamento mensile per centro più costo per prenotazione.

## Features not expressible today (spec.extensions)

- **reminder_email**: Email reminder the day before with a cancel link (using cancel_token) is not available yet: notifications are missing. For now the agenda lists tomorrow's visits for staff.
- **voice_chat**: Speaking to the assistant (voice/phone) is not available in this manifest; text chat only.
- **file_upload**: Admin loads doctors, services and hours by entering them in tables; file/CSV upload is not available yet.
- **cancel_link**: A public cancellation page via token needs custom logic; for now patients can ask the assistant to cancel.
- **per_booking_fee**: The per-booking charge is approximated by metered cost of each assistant run; an exact fee per confirmed booking needs custom billing.
- **multi_centre**: Each centre is its own app instance (own subscription, patients and agenda), which guarantees centres only see their own patients.


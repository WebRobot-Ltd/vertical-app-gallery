# SettimanaInTavola

_Il menu della settimana che non spreca nulla, con la spesa già calcolata._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Ci serve SettimanaInTavola, un pianificatore di pasti contro lo spreco. L'utente indica numero di persone, preferenze, allergie e budget. Ogni giovedì un agente propone il menu della settimana successiva con ricette che riusano gli stessi ingredienti per evitare avanzi, e genera la lista della spesa con le quantità esatte. L'utente può sostituire una ricetta e la lista si aggiorna. Il fornitore partner riceve gli ordini confermati in una coda e prepara le box con gli ingredienti porzionati per la consegna. Ogni utente vede solo i propri menu e ordini. Abbonamento settimanale per numero di pasti.

## Funzioni non esprimibili oggi (spec.extensions)

- **weekly_billing**: Billing intervals are only month or year: plans are monthly prices for a weekly number of meals (billed per month), not charged each week.
- **thursday_email**: No notifications yet: the user sees the new menu in the app, no email on Thursday.
- **supplier_status**: The supplier sees the queue but cannot yet mark a box as prepared or delivered from the app; a status update action is missing.


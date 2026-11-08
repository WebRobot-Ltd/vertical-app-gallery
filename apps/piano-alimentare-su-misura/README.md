# NutriPasso

_Il tuo piano alimentare settimanale, calcolato su di te._

**Stato manifest:** con errori residui

## Descrizione data all'app builder

Desidero costruire NutriPasso, un'app che crea piani alimentari settimanali personalizzati. L'utente compila un modulo con età, sesso, peso, altezza, livello di attività, obiettivo (dimagrire, mantenere, massa muscolare), preferenze (vegetariano, vegano), allergie e cibi che non ama, budget e tempo disponibile per cucinare. L'app calcola il fabbisogno calorico e la ripartizione dei macronutrienti con formule standard, poi un agente compone il piano di sette giorni con ricette, porzioni e lista della spesa, usando i valori nutrizionali delle tabelle pubbliche CREA e USDA. Ogni domenica il piano si rigenera tenendo conto del peso aggiornato che l'utente inserisce e dei piatti che ha segnato come graditi o no. L'utente vede il piano in una pagina e lo riceve per email. Non raccogliamo dati clinici né diagnosi: se l'utente segnala patologie, l'app lo invita a rivolgersi a un professionista. Abbonamento mensile con una settimana di prova. Italiano.

## Errori residui

- `agent planner: goalTemplate placeholder {kcal} is not a form field, a context key or a built-in`
- `agent planner: goalTemplate placeholder {protein_g} is not a form field, a context key or a built-in`
- `agent planner: goalTemplate placeholder {carb_g} is not a form field, a context key or a built-in`
- `agent planner: goalTemplate placeholder {bmi} is not a form field, a context key or a built-in`
- `agent planner: goalTemplate placeholder {fat_g} is not a form field, a context key or a built-in`
- `agent weekly: goalTemplate placeholder {instance} is not a form field, a context key or a built-in`

## Funzioni non esprimibili oggi (spec.extensions)

- **trial_week**: Una settimana di prova gratuita prima dell'abbonamento: non esprimibile nel manifesto; per ora signupCredits copre le prime prove.
- **email_delivery**: Invio del piano via email ogni domenica: le notifiche non sono ancora disponibili. Il piano resta consultabile nella pagina.
- **profile_and_weight_entry**: Salvataggio del profilo del modulo in nutrition_profile e inserimento rapido del peso: oggi l'utente aggiunge i record dalle viste; il salvataggio automatico del modulo richiede logica dedicata.
- **food_tables**: CREA e USDA sono consultate dall'agente tramite WebRobot MCP su pagine pubbliche; USDA FoodData Central via API richiederebbe una chiave, non prevista.


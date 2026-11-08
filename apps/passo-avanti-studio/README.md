# Passo Avanti Studio

_Il tuo piano di studio, il tuo tutor, i tuoi progressi._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Voglio creare Passo Avanti Studio, una piattaforma di preparazione per studenti delle superiori, test d'ingresso universitari e concorsi pubblici. Lo studente si registra, sceglie l'obiettivo (recupero di una materia, test di medicina, concorso per insegnanti o per enti pubblici), indica la data dell'esame, le ore disponibili a settimana e il livello di partenza. Un agente costruisce un piano di studio settimanale basato sui programmi ministeriali del MIM e sui bandi del MUR e dei concorsi. Un tutor in chat spiega gli argomenti passo per passo, usando la base di conoscenza dei contenuti didattici caricati dalla redazione. Ogni settimana l'app genera quiz a risposta multipla e simulazioni d'esame cronometrate, corregge, registra i punteggi per argomento e riadatta il piano. Lo studente vede una dashboard dei progressi; i genitori di uno studente minorenne possono avere un accesso di sola lettura; i docenti della redazione possono rivedere le domande segnalate come sbagliate. Le lezioni dal vivo con insegnanti reali fanno parte dell'offerta e vanno prenotate in calendario, anche se per ora sono fuori dall'app. Si paga a crediti per le ore di tutor, con abbonamento mensile.

## Funzioni non esprimibili oggi (spec.extensions)

- **live_lessons**: Live lessons with real teachers and calendar booking are not in the app yet; handled outside it.
- **parent_access**: Read-only parent access relies on per-record viewer sharing and the guardians collection; a dedicated invitation flow and age check for minors are not available yet.
- **timed_mock_exam**: Mock exams state a recommended time but the app has no countdown timer or interactive quiz answering; answers are pasted into the grading form.
- **editorial_upload**: Editors add lessons as text records; uploading files (PDF, slides) is not available yet.
- **notifications**: No email reminders for weekly quizzes or exam dates yet.

## Screenshot (runtime interpretativo)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new
![03-new.png](screenshots/03-new.png)

### history
![04-history.png](screenshots/04-history.png)

### tutor_chat
![05-tutor_chat.png](screenshots/05-tutor_chat.png)

### paths
![06-paths.png](screenshots/06-paths.png)

### progress
![07-progress.png](screenshots/07-progress.png)

### guardians_view
![08-guardians_view.png](screenshots/08-guardians_view.png)

### flagged
![09-flagged.png](screenshots/09-flagged.png)

### kb
![10-kb.png](screenshots/10-kb.png)

### account
![11-account.png](screenshots/11-account.png)


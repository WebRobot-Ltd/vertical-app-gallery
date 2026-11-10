# AI Academy

_Percorsi, community e un tutor AI per portare l'AI in azienda._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (41 checks passed)

## Description given to the app builder (Italian)

Descrivo solo lo strato software di un servizio che aiuta le imprese ad adottare l'AI tramite una community e percorsi formativi; la consulenza e i servizi erogati da persone restano a parte. L'azienda iscrive i propri collaboratori a una piattaforma dove trovano percorsi formativi sull'AI, con lezioni, quiz e progetti pratici, e una community in cui fare domande. Un agente consiglia a ciascun utente i contenuti giusti in base al ruolo e al livello, risponde in chat alle domande basandosi sui materiali del corso citando la fonte, e quando non sa passa la domanda a un tutor umano. Il responsabile formazione dell'azienda vede l'avanzamento dei propri collaboratori, i progressi e i temi su cui serve piu supporto, e riceve un report mensile via email. Gli utenti vedono i propri corsi e i propri risultati, il responsabile la propria azienda, l'admin tutto. I contenuti li gestisce l'admin della piattaforma. Monetizzazione: abbonamento aziendale per numero di utenti. In italiano e inglese.

## Functional test: what did not pass

- **template instance created and run** (template monthly_report): reserved to manager/admin _(warning)_
- **trigger has its effect** (trigger question_escalated): email to role:tutor: no such recipient in the test (role nobody holds or empty field) _(warning)_

## Features not expressible today (spec.extensions)

- **seat_limits**: Enforcing the per-company seat limit of the plan (25/100/500 learners) is not expressible per company; the admin records seats in companies and checks them.
- **auto_manager_link**: Learners' manager_email is typed in the profile and progress forms; automatic linking from the learner's company is not available.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### assistant_chat
![03-assistant_chat.png](screenshots/03-assistant_chat.png)

### profile
![04-profile.png](screenshots/04-profile.png)

### courses_list
![05-courses_list.png](screenshots/05-courses_list.png)

### log_progress
![06-log_progress.png](screenshots/06-log_progress.png)

### my_progress
![07-my_progress.png](screenshots/07-my_progress.png)

### ask_tutor
![08-ask_tutor.png](screenshots/08-ask_tutor.png)

### my_questions
![09-my_questions.png](screenshots/09-my_questions.png)

### team_progress_view
![10-team_progress_view.png](screenshots/10-team_progress_view.png)

### team_topics
![11-team_topics.png](screenshots/11-team_topics.png)

### team_reports
![12-team_reports.png](screenshots/12-team_reports.png)

### tutor_queue
![13-tutor_queue.png](screenshots/13-tutor_queue.png)

### answer
![14-answer.png](screenshots/14-answer.png)

### admin_course
![15-admin_course.png](screenshots/15-admin_course.png)

### admin_lesson
![16-admin_lesson.png](screenshots/16-admin_lesson.png)

### admin_lessons
![17-admin_lessons.png](screenshots/17-admin_lessons.png)

### admin_company
![18-admin_company.png](screenshots/18-admin_company.png)

### admin_companies
![19-admin_companies.png](screenshots/19-admin_companies.png)

### account
![20-account.png](screenshots/20-account.png)

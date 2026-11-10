# CasaGiusta

_L'animale giusto per la casa giusta._

**Manifest:** valid (schema + runtime contract) · **Functional test:** 1 failure(s) (25 checks passed)

## Description given to the app builder (Italian)

Vorrei un'app per le associazioni animaliste che si chiami CasaGiusta. Ogni associazione ha un account e inserisce gli animali in adozione: specie, razza, età, taglia, carattere, compatibilità con bambini e altri animali, esigenze sanitarie, foto e canile di provenienza. Chi vuole adottare si registra e compila un questionario pre-affido: tipo di casa, giardino, ore fuori casa, esperienza, composizione della famiglia, altri animali. Un agente confronta il questionario con le schede e propone gli animali più compatibili con una spiegazione, segnalando anche le incompatibilità. L'adottante invia la candidatura per un animale; il volontario dell'associazione la riceve, vede questionario e punteggio, può fare domande e approva o rifiuta. Ad ogni passaggio l'adottante riceve un'email; dopo l'adozione l'app manda promemoria per i controlli post-affido. Ogni associazione vede solo i propri animali e candidati, l'adottante solo le sue candidature, l'admin della piattaforma tutto. Gratuita per gli adottanti, abbonamento piccolo per le associazioni. Italiano.

## Functional test: what did not pass

- **form can be filled (options, uploads)** (form apply): required animal_ref (options from collection:animals) has no option to choose
- **page opened by a role allowed to** (view account): only role association may open it, the test cannot hold it _(warning)_

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### questionnaire
![03-questionnaire.png](screenshots/03-questionnaire.png)

### new_match
![04-new_match.png](screenshots/04-new_match.png)

### matches
![05-matches.png](screenshots/05-matches.png)

### browse
![06-browse.png](screenshots/06-browse.png)

### apply
![07-apply.png](screenshots/07-apply.png)

### my_applications
![08-my_applications.png](screenshots/08-my_applications.png)

### answer
![09-answer.png](screenshots/09-answer.png)

### animal_new
![10-animal_new.png](screenshots/10-animal_new.png)

### my_animals
![11-my_animals.png](screenshots/11-my_animals.png)

### candidates
![12-candidates.png](screenshots/12-candidates.png)

### decide
![13-decide.png](screenshots/13-decide.png)

### account
![14-account.png](screenshots/14-account.png)

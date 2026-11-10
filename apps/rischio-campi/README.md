# RischioCampi

_Rischio e danni sui campi assicurati, dai satelliti aperti e dal meteo._

**Manifest:** valid (schema + runtime contract) · **Functional test:** passed (16 checks passed)

## Description given to the app builder (Italian)

Voglio RischioCampi, un servizio per assicurazioni e consorzi di difesa agricola. L'assicuratore carica l'elenco delle polizze con coordinate o particelle catastali dei campi e coltura dichiarata. Per ogni campo un agente calcola indici di vegetazione dalle immagini satellitari aperte Sentinel-2, li confronta con la media storica della zona e con i dati meteo aperti (grandine, siccità, gelate), e produce un punteggio di rischio e una stima del danno dopo un evento. Dopo ogni evento meteo estremo nella zona parte in automatico una verifica dei campi colpiti, e il perito riceve un report con i campi da ispezionare in ordine di priorità, che approva prima dell'invio alla compagnia. Ogni compagnia vede solo le sue polizze. Prezzo per ettaro monitorato all'anno.

## Features not expressible today (spec.extensions)

- **annual_per_hectare**: Pricing per monitored hectare per year is approximated with credits per hectare (1 credit = 1 ha-year); a real annual subscription billed on the hectares in the policy list is not available yet.
- **cadastral_parcels**: Cadastral parcels are only geocoded approximately (Nominatim centroid); exact parcel polygons from the Agenzia delle Entrate cadastre are not wired in — coordinates are preferable.
- **ndvi_via_pipeline**: NDVI is computed by the agent through a WebRobot pipeline over Sentinel-2 assets; results depend on cloud cover and are shown with a confidence level.

## Screenshots (interpretive runtime, no data)

### home-anon
![00-home-anon.png](screenshots/00-home-anon.png)

### home-mobile
![01-home-mobile.png](screenshots/01-home-mobile.png)

### home
![02-home.png](screenshots/02-home.png)

### new_analysis
![03-new_analysis.png](screenshots/03-new_analysis.png)

### analyses
![04-analyses.png](screenshots/04-analyses.png)

### add_policy
![05-add_policy.png](screenshots/05-add_policy.png)

### policies
![06-policies.png](screenshots/06-policies.png)

### scores
![07-scores.png](screenshots/07-scores.png)

### map
![08-map.png](screenshots/08-map.png)

### watches
![09-watches.png](screenshots/09-watches.png)

### approvals
![10-approvals.png](screenshots/10-approvals.png)

### reports
![11-reports.png](screenshots/11-reports.png)

### account
![12-account.png](screenshots/12-account.png)

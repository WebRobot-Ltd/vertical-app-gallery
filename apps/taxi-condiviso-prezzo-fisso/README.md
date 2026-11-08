# TaxiInsieme

_Taxi con prezzo massimo garantito, e meno se condividi la corsa._

**Stato manifest:** valido (validatore Python + contratto runtime)

## Descrizione data all'app builder

Voglio TaxiInsieme, un servizio di taxi con prezzo massimo garantito e possibilità di condividere la corsa. L'utente inserisce partenza, destinazione e orario; un calcolo stima il prezzo massimo dalla distanza e dalle tariffe comunali pubblicate, e propone un prezzo ridotto se accetta di condividere la corsa con altri passeggeri sulla stessa direzione. Le richieste compatibili vengono raggruppate e inviate alle cooperative taxi partner, che le accettano dalla loro coda. L'utente riceve conferma via email e paga con carta. Ogni utente vede solo le proprie corse. Commissione per corsa.

## Funzioni non esprimibili oggi (spec.extensions)

- **routing_distance**: Distance is estimated by the agent from its own knowledge. A routing/geocoding API with terms allowing commercial reuse is needed for a truly guaranteed price.
- **municipal_tariffs**: Tariffs in the slot are indicative placeholders; real published tariffs per municipality must be entered and kept updated.
- **email_confirmation**: Confirmation email to the passenger is not available yet (no notifications); the confirmation is shown in the app (My rides).
- **card_payment_per_ride**: Card payment of each ride with the platform fee requires the owner to connect Stripe and each cooperative to have a Connect account; checkout at ride acceptance is to be configured.


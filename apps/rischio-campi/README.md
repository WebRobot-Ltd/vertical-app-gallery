# RischioCampi

_Rischio e danni sui campi assicurati, dai satelliti aperti e dal meteo._

**Manifest status:** remaining errors

## Description given to the app builder (Italian)

Voglio RischioCampi, un servizio per assicurazioni e consorzi di difesa agricola. L'assicuratore carica l'elenco delle polizze con coordinate o particelle catastali dei campi e coltura dichiarata. Per ogni campo un agente calcola indici di vegetazione dalle immagini satellitari aperte Sentinel-2, li confronta con la media storica della zona e con i dati meteo aperti (grandine, siccità, gelate), e produce un punteggio di rischio e una stima del danno dopo un evento. Dopo ogni evento meteo estremo nella zona parte in automatico una verifica dei campi colpiti, e il perito riceve un report con i campi da ispezionare in ordine di priorità, che approva prima dell'invio alla compagnia. Ogni compagnia vede solo le sue polizze. Prezzo per ettaro monitorato all'anno.

## Remaining errors

- `agent watcher: goalTemplate placeholder {sensitivity} is not a form field, a context key or a built-in`
- `runtime: agent analyst: tool policies_read is declared differently by another agent`
- `runtime: agent watcher: tool policies_read is declared differently by another agent`

## Features not expressible today (spec.extensions)

- **per_hectare_pricing**: Annual price per monitored hectare is not expressible yet: billing uses credit packs with metered runs; a per-hectare yearly plan needs custom logic.
- **file_upload**: Policy files cannot be uploaded yet: policies are pasted as text in the chat.
- **parcel_lookup**: Cadastral parcel to coordinates lookup is not available: coordinates are required for the satellite analysis.
- **notifications**: Email notification when an event check finds affected fields is not available yet: users see them in the app.


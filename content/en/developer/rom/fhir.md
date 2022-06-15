---
title: FHIR
---

## Retrieving RoQua responses as Observations

Every organization has a FHIR endpoint for retrieving Observations available under the url `https://organization_key.rom.roqua.nl/medmij_fhir/Observation`, or `https://organization_key.rom.roqua-staging.nl/medmij_fhir/Observation` for the staging environment. 

Access to this endpoint is authenticated through the [api token mechanism](../overview/authentication/). RoQua production and staging environments have separate databases with separate administrator panels, at `https://organization_key.rom.roqua.nl/admin` and `https://organization_key.rom.roqua-staging.nl/admin` respectively. Each environment thus needs its own ApiTokens to be configured through the respective administrator panels. The Api token used should include the "Toegang tot FHIR endpoint om responses als GeneralMeasurement Observations op te halen" right.

Currently, only the FHIR GGZ Algemene Meting endpoint of the [MedMij standard](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/FHIR_GGZ) is implemented. Only the last 50 questionnaire responses will be returned as observations. Since response values are transformed into individual observations, the exact amount of observation resources returned varies.

To request the observation bundle for an organization's dossier, send a GET request to the endpoint with the subject id as the 'subject' parameter. The subject id should be the same identifier used for the clientid in the [EPD SSO connection](/en/developer/rom/sso/epd_v3/) for that organization.

An equivalent curl command to retrieve subject `2075` with the authentication token `token_key` and its secret `token_secret` would be: `curl 'https://demo.rom.roqua-staging.nl/medmij_fhir/Observation?subject=2075' -H 'Content-Type: application/json' -u token_key:token_secret`
Please take care to securely store and use the token secret, since it provides access to dossier data.

## Storing Observation document Bundles as RoQua responses

Every organization has a FHIR json endpoint for storing [GeneralMeasurement Observation](https://simplifier.net/NictizSTU3-Zib2017/ZIB-GeneralMeasurement/~overview) document [Bundles](https://simplifier.net/coreprofilesstu3/bundle) available under the url `https://organization_key.rom.roqua.nl/medmij_fhir/Bundle/[id]`, or `https://organization_key.rom.roqua-staging.nl/medmij_fhir/Bundle/[id]` for the staging environment. \[id\] should correspond to the id field of the Bundle json that is PUT to this URL. 

Access to this endpoint is authenticated through the [api token mechanism](../overview/authentication/). RoQua production and staging environments have separate databases with separate administrator panels, at `https://organization_key.rom.roqua.nl/admin` and `https://organization_key.rom.roqua-staging.nl/admin` respectively. Each environment thus needs its own ApiTokens to be configured through the respective administrator panels. The Api token used should include the "Toegang om Observation document bundles op te slaan op het FHIR endpoint om zo responses aan te maken" right.

Currently only Observation bundles describing Honos+ questionnaire responses can be processed by this API. At the time of implementation, there were no official Dutch FHIR codings for the response values of the Honos+. The response value coding used in the example json below is what is implemented for the current API, but we are interested in efforts to standardize these codings. Please let us (and others) know about any efforts for standardization.

Only document bundles that contain all observation entries (answer values) needed to construct one RoQua questionnaire response are accepted. This [json file example](/assets/files/honos_plus_fhir.json) would make a RoQua Honos+ response.

An equivalent curl command to push this Honos+ response to demo staging with the authentication token `token_key` and its secret `token_secret` would be: `curl -d @honos_plus_fhir.json -X PUT -H 'Content-Type: application/json' -u token_key:token_secret 'https://demo.rom.roqua-staging.nl/medmij_fhir/Bundle/30002596-395f-430f-aac8-abdb6de37104'`
Please take care to securely store and use the token secret, since it provides access to dossier data.

---
title: FHIR
---

Every organization has a FHIR endpoint available under the url `https://organization_key.rom.roqua.nl/medmij_fhir/Observation`, or `https://organization_key.rom.roqua-staging.nl/medmij_fhir/Observation` for the staging environment. Access to this endpoint is authenticated through the [api token mechanism](../overview/authentication/). RoQua production and staging environments have separate databases with separate administrator panels, at `https://organization_key.rom.roqua.nl/admin` and `https://organization_key.rom.roqua-staging.nl/admin` respectively. Each environment thus needs its own ApiTokens to be configured through the respective administrator panels.


Currently, only the FHIR GGZ Algemene Meting endpoint of the [MedMij standard](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/FHIR_GGZ) is implemented. Only the last 50 questionnaire responses will be returned as observations. Since response values are transformed into individual observations, the exact amount of observation resources returned varies.

To request the observation bundle for an organization's dossier, send a GET request to the endpoint with the subject id as the 'subject' parameter. The subject id should be the same identifier used for the clientid in the [EPD SSO connection](/en/developer/rom/sso/epd_v3/) for that organization.

An equivalent curl command to retrieve subject `2075` with the authentication token `token_key` and its secret `token_secret`would be: `curl 'https://demo.rom.roqua-staging.nl/medmij_fhir/Observation?subject=2075' -H 'Content-Type: application/json' -u token_key:token_secret`.
Please take care to securely store and use the token secret, since it provides access to dossier data.
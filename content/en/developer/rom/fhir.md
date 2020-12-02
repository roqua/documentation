---
title: FHIR GraphQL endpoint
---

* TOC
  {:toc}

Every organization has a FHIR GraphQL endpoint available under the url `https://organization_key.rom.roqua.nl/fhir/$graphql`, or `https://organization_key.rom.roqua-staging.nl/fhir/$graphql` for the staging environment. Access to this endpoint is authenticated through the [api token mechanism](../overview/authentication/). RoQua production and staging environments have separate databases with separate administrator panels, at `https://organization_key.rom.roqua.nl/admin` and `https://organization_key.rom.roqua-staging.nl/admin` respectively. Each environment thus needs its own ApiTokens to be configured through the respective administrator panels.

Currently, only the FHIR GGZ Algemene Meting endpoint of the [MedMij standard](https://informatiestandaarden.nictiz.nl/wiki/MedMij:V2020.01/FHIR_GGZ) is implemented. FHIR GraphQL endpoints do not necessarily return regular FHIR resources, but this implementation returns an observation bundle that validates as regular FHIR resources. However, resources are wrapped in a `"data": { "ObservationBundle": {..etc..}}` attribute to conform as a GraphQL response.

The observation bundle is retrievable with the following GraphQL query. Returning the individual question answers and scores as contained references for the `related targets` instead of as `components` is WIP.
```graphql
query {
  ObservationBundle { resourceType type total entry { resource {
    resourceType
    id
    status
    category { text coding (system: "http://hl7.org/fhir/observation-category", code: "survey") { system code }}
    code { text coding { system code } }
    subject  {
      identifier (value: "fhir_test_dossier") { type { coding (system: "http://hl7.org/fhir/v2/0203", code: "MR") {system, code} }, value }
      display
    }
    meta { lastUpdated, profile }
    category { text }
    effectiveDateTime
    component {
      ... on StringComponent { valueString code { text coding { system code } } }
    }
  } } }
}
```

The `subject identifier value` parameter is filled with the EPD dossier number of the client of which observations should be returned. The number should correspond to the EPD number system that is used for the other RoQua EPD connections. Only the last 50 responses will be returned as observations.
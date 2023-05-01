---
title: Report Calculations
status: draft
---

## Calculations over multiple responses.

### Calculate over specific responses.

    GET /api/v1/dossiers/:dossier_id/report_calculations?calculator=test&response_ids[]=1&response_ids[]=6

### Calculate over responses defined by filters

    GET /api/v1/dossiers/:dossier_id/report_calculations?calculator=test&filters[questionnaire_keys][]=rand361

### Parameters

Name               | Type      | Description
-------------------|-----------|--------------
`dossier_id`       | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`calculator`       | `string`  | **Required**. Name of ReportCalculator.
`response_ids`       | `array of int` | specific responses to do the calculation over.
`filters`          | `hash`    | See below. Required if no responses_ids are given.

#### filter attributes:

Name                | Type               | Description
--------------------|--------------------|------------
`questionnaire_keys`| `array of string`  | **Required**. Keys of the questionnaires we want responses from.
`completed_after`   | `integer`          | Unix timestamp search for responses after this time
`completed_before`  | `integer`          | Unix timestamp search for responses before this time


### Success

%= headers 200 %>
%= json 'results' => {'key' => 'value'}, 'response_ids' => [1, 6] %>


### When validations fail

%= headers 422 %>
%= json errors: {
           filters: {
             questionnaire_keys: ['blank'],
           }
         }
%>

### When no dossier_id is provided

%= headers 404 %>
%= no_body %>

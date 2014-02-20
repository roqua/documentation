---
title: Responses
---

* TOC
{:toc}

Responses are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, responses for all selected questionnaires are created. At this point, the responses have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

## List open responses for given token

If you know the token that can be used to log in as a respondent, you can use that to request a list of the names of the questionnaires that will be presented when logging in with that token. This can be done without any authentication.

    GET /login.json?token=:token

### Response

<%= headers 200 %>
<%= json "questionnaires" => [
  {
    "key"               => "srs",
    "name"              => "SRS",
    "short_description" => nil
  },
  {
    "key"               => "oq45",
    "name"              => "OQ-45",
    "short_description" => "Outcome Questionnaire"
  },
  {
    "key"               => "scl90",
    "name"              => "SCL-90",
    "short_description" => "Klachtenlijst"
  }
]
%>

## List all responses for dossier

Requests for more detailed information about responses are namespaced under a specific [dossier](https://github.com/roqua/developer/blob/master/api/v1/dossiers.md), which is the `/api/v1/dossiers/DOSSIER_ID` path. In this path `DOSSIER_ID` is the external identifier used by the EPD to represent this patient.

    GET /api/v1/dossiers/:dossier_id/responses.json

### Parameters

Name | Type | Description
---- |------|--------------
`respondent_type` | `string` | Request only responses where the `completer_type` would equal the given value.
`status`          | `string` | Request only responses where the `status` would equal the given value.

### Response

<%= headers 200 %>
<%= json "responses" => [
    {
      "name"           => "OQ-45",
      "status"         => "scheduled",
      "open_from"      => "2012-11-23T12:40:20+00:00+0200",
      "open_till"      => "2012-11-25T12:40:20+00:00+0200",
      "completer_type" => "patient",
      "completed_at"   => nil,
      "completing_url" => "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "name"           => "OQ-45",
      "status"         => "open",
      "open_from"      => nil,
      "open_till"      => nil,
      "completer_type" => "parent",
      "completed_at"   => nil,
      "completing_url" => "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "name"           => "OQ-45",
      "status"         => "completed",
      "open_from"      => nil,
      "open_till"      => nil,
      "completer_type" => "patient",
      "completed_at"   => "2012-11-20T15:40:20+00:00+0200",
      "completing_url" => nil
    }
  ]
%>

### Response Attributes

Name             | Type     | Description
-----------------|----------|--------------
`name`           | `string` | The name of the response.
`status`         | `string` | One of the following values:<br/>* `scheduled` - This response is scheduled to be completed at a later time. Cannot be completed right now, and visiting its URL will not result in this response being presented. See `open_from` and `open_till` attributes for the time window when this response will be `open`.<br/>* `open` - This response is completable right now.<br/> * `completed` - This response has been completed.
`open_from`      | `string` | An ISO 8601 formatted string that indicates when the response becomes completable, or `null` if this response is not only completable within a specific time window.
`open_till`      | `string` | An ISO 8601 formatted string that indicates when the response expires and is no longer completable, or `null` if this response is not only completable within a specific time window.
`completer_type` | `string` | Describes for whom this response is intended. Can be `patient`, `professional`, `parent`, `second_parent` or `teacher`. More types might be added later, therefore it is advised that API consumers select the desired types, and not reject the undesired types.
`completed_at`   | `string` | An ISO 8601 formatted string that indicates when the response was completed, or `null` if this response is not yet completed.
`completing_url` | `string` | The URL that can be visited to complete this (and possibly other) response(s). Will be `null` if response is already completed.

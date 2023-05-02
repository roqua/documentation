---
title: Protocol Subscriptions
---

Manage protocol subscriptions for individual patients.

## List active protocol subscriptions for a patient

    GET /api/v1/dossiers/:dossier_id/protocol_subscriptions

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient of interest.

### Success

<snapshot json={{
  request: {request_method: "GET", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions"},
  response: {
    status: 200,
    body: [
      {
        id:               124,
        daily_start_time: 32400,
        start_at:         "2014-02-14T15:43:24+01:00",
        stop_at:          "2014-03-14T15:43:24+01:00",
        protocol_key:     "rom",
        protocol_name:    "ROM",
        flags:            {dagboek_roker: false},
        textvars:         {dagboek_hoofdprobleem: "Slaaptekort"}
      }
    ]
  }
}} />

## Start a protocol subscription

    POST /api/v1/dossiers/:dossier_id/protocol_subscriptions/

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`protocol_key` | `string`  | **Required** unless protocol_id given. Key uniquely identifying the protocol of interest as specified in RoQua.
`protocol_id` | `integer`  | **Required** unless protocol_key given. Key uniquely identifying the protocol of interest as specified in RoQua.
`start_at`     | `integer` | The Unix time when the first measurement should be prepared. Defaults to the current time.
`flags`        | `hash`    | Boolean flags that are passed in when a questionnaire is being filled out.
`textvars`     | `hash`    | String textvars that are passed in when a questionnaire is being filled out.

### Success

<snapshot json={{
  request: {request_method: "POST", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions"},
  response: {
    status: 200,
    body: {
      id:               124,
      daily_start_time: 32400,
      start_at:         "2014-02-14T15:43:24+01:00",
      stop_at:          "2014-03-14T15:43:24+01:00",
      protocol_key:     "rom",
      protocol_name:    "ROM",
      flags:            {dagboek_roker: false},
      textvars:         {dagboek_hoofdprobleem: "Slaaptekort"},
      responses:        [
        {
          id: 2,
          name: "OQ-45",
          questionnaire_name: "OQ-45",
          questionnaire_key: "oq45",
          status: "open",
          open_from: "2014-11-23T21:40:20+00:00+0200",
          open_till: "2014-11-23T22:10:20+00:00+0200",
          completer_type: "patient",
          started_at: null,
          completed_at: null,
          completing_url: "https://demo.roqua.nl/login?token=abcdefgh",
          values: {},
          outcome: {scores: {}, action: null, actions: {}, alarm: null, attention: null, complete: null}
        },
        {etc: "etc"}
      ]
    }
  }
}} />

### When no protocol exists with the `protocol_key` provided

<snapshot json={{
  request: {request_method: "POST", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions"},
  response: {status: 404}
}} />

### When a flag does not exist within the protocol

<snapshot json={{
  request: {request_method: "POST", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions"},
  response: {status: 422, body: {errors: {base: ['flag_does_not_exist']}}}
}} />

### When a flag is set to an invalid value

<snapshot json={{
  request: {request_method: "POST", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions"},
  response: {status: 422, body: {errors: {base: ['flag_value_invalid']}}}
}} />


## Stop a protocol subscription.

    DELETE /api/v1/dossiers/:dossier_id/protocol_subscriptions/:id

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`id`           | `string`  | **Required**. Key uniquely identifying the protocol subscription to be stopped.


### Success

<snapshot json={{
  request: {request_method: "DELETE", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions/:id"},
  response: {
    status: 200,
    body: {
      id:               124,
      daily_start_time: 32400,
      start_at:         "2014-02-14T15:43:24+01:00",
      stop_at:          "2014-03-14T15:43:24+01:00",
      protocol_key:     "rom",
      protocol_name:    "ROM"
    }
  }
}} />

### When no protocol subscription exists with the given `id`

<snapshot json={{
  request: {request_method: "DELETE", path: "/api/v1/dossiers/:dossier_id/protocol_subscriptions/:id"},
  response: {status: 404}
}} />



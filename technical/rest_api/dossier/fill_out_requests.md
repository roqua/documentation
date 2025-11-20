# Fill Out Requests

A fill_out_request specifies a list of questionnaires that need to be filled out within a certain timespan.
At opened/reminder/expired a callback is made to the callback url.

## Create a FillOutRequest

<Snapshot json={{
  request: {
    request_method: "POST",
    path: "/api/v1/dossiers/:dossier_id/fill_out_request"
  },
  response: {
    status: 200,
    body: {
      id: 1234
    }
  }
}} />

### Parameters

Name               | Type      | Description
-------------------|-----------|--------------
`dossier_id`       | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`fill_out_request` | `hash`    | **Required**. attributes (see below).

#### fill_out_request attributes:

Name                | Type               | Description
--------------------|--------------------|------------
`questionnaire_keys`| `array of string`  | **Required**. List of questionnaires that need to be filled out.
`respondent_id`     | `integer`          | Id of the respondent that should fill out the questionnaire.
`respondent_type`   | `string`           | \['patient_version'(default) \| 'profess_version'\] String identifying the respondent that should fill out the questionnaires. can be used instead of respondent_id.
`callback_url`      | `string`           | URL to call on events (see below).
`reminders`         | `array of integer` | List of offsets in seconds after open_from to make a reminder callback.
`open_from`         | `integer`          | Unix timestamp for when the questionnaires can be filled out. Defaults to Time.now
`open_till`         | `integer`          | Unix timestamp for when the questionnaires expire. Default to never.

## Callbacks

For each event the callback url is called with the following params:

name | Type | Description
-----|------|------------
`dossier_id` | `string` | The dossier the fill out request was created for.
`event`      | `string` | The name of the event (opened/reminder/expired)
`fill_out_request_id` | `integer` |
`url`        | `string` | url to fill in all open questionnaires (not just the ones for this fill out request).

The callback url should contain the authentication for the request.


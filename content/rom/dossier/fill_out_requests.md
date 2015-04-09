---
title: Fill Out Requests
status: draft
---

* TOC
{:toc}

A fill_out_request specifies a list of questionnaires that need to be filled out within a certain timespan.
At opened/reminder/expired a callback is made to the callback url.

## Create a FillOutRequest

    POST /api/v1/dossiers/:dossier_id/fill_out_request/

### Parameters

Name               | Type      | Description
-------------------|-----------|--------------
`dossier_id`       | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`fill_out_request` | `hash`    | **Required**. attributes (see below).

#### fill_out_request attributes:

Name                | Type               | Description
--------------------|--------------------|------------
`questionnaire_keys`| `array of string`  | **Required**. List of questionnaires that need to be filled out.
`respondent_type`   | `string`           | Defaults to `patient_version`.
`callback_url`      | `string`           | URL to call on events (see below).
`reminders`         | `array of integer` | List of offsets in seconds after open_from to make a reminder callback.
`open_from`         | `integer`          | Unix timestamp for when the questionnaires can be filled out. Defaults to Time.now
`open_till`         | `integer`          | Unix timestamp for when the questionnaires expire. Default to never.


### Success

<%= headers 200 %>
<%= json id: 1234 %>


### Callbacks

For each event the callback url is called with the following params:

name | Type | Description
-----|------|------------
`dossier_id` | `string` | The dossier the fill out request was created for.
`event`      | `string` | The name of the event (opened/reminder/expired)
`fill_out_request_id` | `integer` |
`url`        | `string` | url to fill in all open questionnaires (not just the ones for this fill out request).

The callback url should contain the authentication for the request.


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When validations fail

<%= headers 422 %>
<%= json errors: {
           open_till: ['in_past'],
           questionnaire_keys: ['blank', 'invalid'], #invalid when a key could not be found.
         }
%>

### When no dossier_id is provided

<%= headers 404 %>
<%= no_body %>

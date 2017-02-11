---
title: Responses
status: draft
---

* TOC
{:toc}

Responses are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, responses for all selected questionnaires are created. At this point, the responses have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

## List all responses for dossier

Requests for more detailed information about responses are namespaced under a specific [dossier](/developer/rom/dossier/dossiers/), which is the `/api/v1/dossiers/DOSSIER_ID` path. In this path `DOSSIER_ID` is the external identifier used by the EPD to represent this patient.

    GET /api/v1/dossiers/:dossier_id/responses.json

### Parameters

Name | Type | Description
---- |------|--------------
`questionnaire_keys`       | 'array of strings' | Only return responses on questionnaires whose key is listed
`completed_before`         | `time`             | Only return responses filled out before the specified time
`completed_after`          | `time`             | Only return responses filled out after the specified time
`respondent_type`          | `string`           | Only return responses whose `completer_type` equals the given value
`status`                   | `string`           | ['completed', 'aborted', 'open', 'scheduled'] Only return responses whose `status` equals the given value
`protocol_subscription_id` | `string`           | Only return responses associated to the protocol subscription with the given id

### Response

<%= snapshot_response('rom', 'responses_index') %>

### Response Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the reponse record.
`respondent_id`       | `integer` | Id of [respondent](/developer/rom/dossier/respondents) who the response belong to (not always the person who typed them into the system)
`completed_at`        | `string`  | An ISO 8601 formatted string that indicates when the response was completed, or `null` if this response is not yet completed.
`completer_type`      | `string`  | Describes who the response was prepared for, e.g. ad_hoc_professional for bulk versions of patient lists. Can be `patient`, `ad_hoc_professional`, `parent`, `second_parent` or `teacher`. More types might be added later, therefore it is advised that API consumers select the desired types, and not reject the undesired types.
`completing_url`      | `string`  | The URL that can be visited to complete this (and possibly other) response(s). Will be `null` if response is already completed.
`flags`               | `hash     | Hash of flag_name to boolean
`measurement_id`      | `integer` | The [measurement](/developer/rom/global/measurements/) this response was created from (leads to protocol)
`non_response_id`     | `integer` | Id of [non_response](/developer/rom/dossier/non_responses) this response belongs to.
`open_from`           | `string`  | An ISO 8601 formatted string that indicates when the response becomes completable, or `null` if this response is not only completable within a specific time window.
`open_till`           | `string`  | An ISO 8601 formatted string that indicates when the response expires and is no longer completable, or `null` if this response is not only completable within a specific time window.
`outcome`             | `hash`    | Hash with various outcome elements. See below for more details.
`questionnaire_name`  | `string`  | The name of the [questionnaire](/developer/rom/global/questionnaires) that was filled out.
`questionnaire_key`   | `string`  | Key uniquely identifying the questionnaire that was filled out.
`requesters`          | `array`   | Array of objects identifying the professionals that requested this questionnaire to be completed.
`status`              | `string`  | One of the following values:<br/>* `scheduled` - This response is scheduled to be completed at a later time. Cannot be completed right now, and visiting its URL will not result in this response being presented. See `open_from` and `open_till` attributes for the time window when this response will be `open`.<br/>* `open` - This response is completable right now.<br/> * `aborted` - Filling out the questionnaire has been aborted.<br/> * `completed` - This response has been completed.
`started_at`          | `string`  | An ISO 8601 formatted string that indicates when the response was started being filled out, or `null` if this data is not available.
`textvars`            | `hash`    | Hash of textvar_name to string
`values`              | `hash`    | Hash with key value pairs for every question in the questionnaire. Will be empty when the response is not completed.
`name`                | `string`  | The name of the response. **Warning, this field is deprecated, use questionnaire\_name instead**

#### Outcome

Name             | Type     | Description
-----------------|----------|--------------
`scores`         | `hash`   | Hash containing a hash for each calculated score, index on the score key. Each score contains a `value` entry when the score was calculated successfully and may contain extra key value pairs for interpretation and t-scores. See the outcome description of each questionnaire for more information on the calculated scores.
`action`         | `string` | ['attention', 'alarm'] Whether the calculated outcome requires extra attention or whether it is alarming.
`alarm`          | `array`  | Array containing all question keys giving rise to the `alarm` flag.
`attention`      | `array`  | Array containing all question keys giving rise to the `attention` flag.
`complete`       | `string` | String indicating the percentage a questionnaire has been completed. Either '100%' or  `null` when a questionnaire is fully completed, depending on whether the questionnaire has a definition for 'completeness'.

#### Requesters

Name             | Type     | Description
-----------------|----------|--------------
`epd_id`         | `string` | The identifier for this professional given by the EPD during single sign-on.


## Store a new response

To store an externally captured response perform a POST request to the path beneath. The `dossier_id` in the path is the unique identifier of the dossier to store the response with.

    POST /api/v1/dossiers/:dossier_id/responses/

### Parameters

Name | Type | Description
---- |------|--------------
`questionnaire_key` | `string`  | [Required] Key uniquely identifying the questionnaire in the ROM application
`answer_data`       | `hash`    | [Required] Hash storing the answered option key for every question key
`started_at`        | `integer` | The Unix time when the questionnaire was started being filled out (greater or equal to 31 december 1999)
`filled_out_at`     | `integer` | The Unix time when the questionnaire was filled out (greater or equal to 31 december 1999)
`respondent`        | `string`  | ['patient'(default) \| 'parent' \| 'second_parent' \| 'teacher' \| 'caregiver'] String identifying the respondent which filled out the questionnaire

### Response

The created response is returned. See the section on listing all responses for an explanation of the response object attribute fields.

<%= snapshot_request('rom', 'responses_create') %>
<%= snapshot_response('rom', 'responses_create') %>

### When no questionnaire exists for the `questionnaire_key` provided

<%= headers 404 %>
<%= no_body %>

## Update a response

To store external data on an existent pending response perform a put request to the path beneath.
The `:dossier_id` in the path is the unique identifier of the dossier to store the response with.
The `:id` in the path is the id of the pending response to store the data with.

    PUT /api/v1/dossiers/:dossier_id/responses/:id

### Parameters

Name | Type | Description
---- |------|--------------
`questionnaire_key` | `string`  | [Required] Key uniquely identifying the questionnaire in the ROM application
`answer_data`       | `hash`    | [Required] Hash storing the answered option key for every question key
`started_at`        | `integer` | The Unix time when the questionnaire was started being filled out (greater or equal to 31 december 1999)
`filled_out_at`     | `integer` | The Unix time when the questionnaire was filled out (greater or equal to 31 december 1999)

### Response

The created response is returned. See the section on listing all responses for an explanation of the response object attribute fields.

<%= snapshot_request('rom', 'responses_update') %>
<%= snapshot_response('rom', 'responses_update') %>

### When the response already stores data updating is not allowed

<%= headers 403 %>
<%= no_body %>

### When no response exists for the `id` provided

<%= headers 404 %>
<%= no_body %>

### When no questionnaire exists for the `questionnaire_key` provided

<%= headers 404 %>
<%= no_body %>

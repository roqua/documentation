---
title: SQL Export
---

* TOC
{:toc}

## Download the latest sql export

    GET /api/v1/data_exports/download_sql

Is usually updated every hour. Download is a sqlite .db file.

**Note:** The GET request will return a redirect to a location on our storage server. If fetching automatically, make sure to follow the redirect (`Location:` header). E.g. with cURL:

```
curl -L -u consumer_key:consumer_secret -O https://demo.rom.roqua.nl/api/v1/data_exports/download_sql
```

## Schema

**Note:** For a thorough analysis of the schema check out the [interactive schema representation](https://roqua.info/sqlite-export-schema/) generated with SchemaSpy of our demo sqlite export db.

### dossiers

Attribute           | Description
--------------------|-----------------
external_identifier | Also known as `epd_id` or `clientid`, the clientid we got over sso.

### respondents

A respondent is a someone who fills out a questionnaire. It's the you in “How are you?” and “How is your child/patient” on a questionnaire. The one who enters the data into roqua is not always the respondent.

Right now there is only one respondent per type, but that will change in the future.

Attribute             | Description
----------------------|-----------------
type                  | patient, parent, second_parent, teacher, caregiver, profess. second_parent will likely be merged into parent in the future.
label                 | human readable specifier. e.g. Moeder, Medewerker, Buurman.

### protocol_subscriptions

A protocol subscription is when an automatic protocol is activated for a dossier. The same protocol can be subscribed multiple times for one dossier, but only once the previous subscription has been stopped (either automatically upon completion, or by cancelling manually).

Attribute             | Description
----------------------|-----------------
dossier_id            | foreign key to the dossier which is subscribed to this protocol
protocol_id           | foreign key to the protocol that is subscribed to
start_at              | the first day that responses will be created on
stop_at               | the last day that responses will be created on
status                | `scheduled` when the automatic protocol is activated but the first questionnaires haven't been prepared yet (usually because at time of export, `start_at` was in the future; `started` while the protocol is ongoing; `paused` when the protocol is on hold for a while (currently not feature exposed in the API or UI); `stopped` when stopped (either because `stop_at` is in the past, or because it was stopped manually in the UI)

### responses

A Response the set of answers to one fill out of a questionnaire. Most attributes descriptions can be found at [response endpoint](../../dossier/responses/#response-attributes)

Attribute             | Description
----------------------|-----------------
respondent_id         | foreign key to respondent who the answers belong to.
entered_by_id         | foreign key to professional who typed in the answer if the respondent didn't do it directly (so copying from paper or doing an interview)
questionnaire_key     | roqua-key of questionnaire (in a few cases different from quby-key)
questionnaire_variant | roqua-key of specific questionnaire variant (e.g. bulk version)
requester_id          | foreign key to professional who prepared the response in the RoQua epd interface
observation_time      | deprecated

### response_values

Answer to a single question in a response

Attribute             | Description
----------------------|-----------------
question_key          | key in definition e.g. v_1a
data                  | value of answer e.g. '2' for radio with value 2, '1' for checked checkbox, 'hello' for text

### response_scores

Scores are defined in the questionnaire definition:

```
score <score_key> do
  {<score_subkey>: <data>, ..}
end
```

### non_responses

Attribute             | Description
----------------------|-----------------
timestamp             | Time at of non-response, can be set by the user, defaults to creation time.
reason_group:         | e.g. "Patiënt is wel benaderd voor de ROM
reason_option:        | e.g. "Patiënt retourneert meetinstrument niet."
reason_code:          | e.g. "04"
reason_other:         | user entered text

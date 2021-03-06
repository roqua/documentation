---
title: SQL Export
---

* TOC
{:toc}

## Download the latest sql export

    GET /api/v1/data_exports/download_sql

Is usually updated every hour. Download is a sqlite .db file.

## Schema

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

### responses

A Response the set of answers to one fill out of a questionnaire. Most attributes descriptions can be found at [response endpoint](/developer/rom/dossier/responses/#response-attributes)

Attribute             | Description
----------------------|-----------------
respondent_id         | foreign key to respondent who the answers belong to.
entered_by_id         | foreign key to professional who typed in the answer if the respondent didn't do it directly (so copying from paper or doing an interview)
questionnaire_key     | roqua-key of questionnaire (in a few cases different from quby-key)
questionnaire_variant | roqua-key of specific questionnaire variant (e.g. bulk version)
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

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

A respondent is a someone who fills out a questionnaire. It's the you in “How are you?” and “How is your child/patient” on a questionnaire.

### responses

A Response the set of answers to one fill out of a questionnaire. Most attributes descriptions can be found at [response endpoint](/developer/rom/dossier/responses/#response-attributes)

Attribute             | Description
----------------------|-----------------
respondent_id         | foreign key to respondent whoe the answers belong to.
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

# Schema

## Major Release V2 (2025-12)

**We are switching to v2 of our sqlite database, which is about half the size. We've made it forward compatible. Incompatible changes are:**

* Renamed `completed_at` to `entered_at` in `responses` (entered_at added to v1 for forward copatibility)
* Not exporting null values in response_values#data anymore. Use fields-table to know all the fields.
* Removed `question_key` in `response_values`. `field_key` has been in v1 for years with same value, add an index to `[response_id, field_key]` for v1 for forward compatibilty. Sadly it looks like you can't name a primary key in sqlite, so either you have to check if question_key is in the table or just accept there is an duplicate index for a short while.
  ```sql
  CREATE INDEX if not exists response_values_response_id_field_key ON response_values (response_id, field_key);
  ```
* Removed anonymous from responses, use hide_pii_from_researchers and hide_values_from_professionals instead. They are already present in v1 and have been for years.
* `questions.type` changed date => date_parts, check_box => multi_select, radio/select/scale => single_select, string/textarea => text. integer and float remained the same. Add renames for the new/old values as needed before you switch to v2.

## Schema v2

**Note:** For a thorough analysis of the schema check out the [interactive schema representation](https://roqua.info/sqlite-export-schema/) generated with SchemaSpy of our demo sqlite export db.

## Dossier info

### dossiers

Attribute           | Description
--------------------|-----------------
id                  | our internal id
external_identifier | also known as `epd_id` or `clientid`, the clientid we got over sso when internally_managed is false
internally_managed  | true when dossier not created through sso, but within RoQua admin area
tester              | true if tagged as test account, should not be used for research
metadata            | json string of extra metadata added to dossier.

### respondents

A respondent is a someone who fills out a questionnaire. It's the you in “How are you?” and “How is your child/patient” on a questionnaire. The one who enters the data into roqua is not always the respondent.

Right now there is only one respondent per type, but that will change in the future.

Attribute             | Description
----------------------|-----------------
id                    | Our internal id.
dossier_id            | foreign key to dossier this respondent belongs to
type                  | patient, parent, second_parent, teacher, caregiver, profess. second_parent will likely be merged into parent in the future
email_present         | true if we have an email in our system for this respondent
label                 | human readable specifier. e.g. Moeder, Medewerker, Buurman

### protocol_subscriptions

A protocol subscription is when an automatic protocol is activated for a dossier. The same protocol can be subscribed multiple times for one dossier, but only once the previous subscription has been stopped (either automatically upon completion, or by cancelling manually).

Attribute             | Description
----------------------|-----------------
dossier_id            | foreign key to the dossier which is subscribed to this protocol
protocol_id           | foreign key to the protocol that is subscribed to
start_at              | the first day that responses will be created on
stop_at               | the last day that responses will be created on
status                | `scheduled` when the automatic protocol is activated but the first questionnaires haven't been prepared yet (usually because at time of export, `start_at` was in the future; `started` while the protocol is ongoing; `paused` when the protocol is on hold for a while (currently not feature exposed in the API or UI); `stopped` when stopped (either because `stop_at` is in the past, or because it was stopped manually in the UI)

## Response data

### responses

A Response the set of answers to one fill out of a questionnaire. Most attributes descriptions can be found at [response endpoint](../../dossier/responses/#response-attributes)

Attribute             | Description
----------------------|-----------------
id                    | our internal id. Same in all api's. 
dossier_id            | foreign key to dossier who the answer belongs to.
respondent_id         | foreign key to respondent who the answers belong to.
entered_by_id         | foreign key to professional who typed in the answer if the respondent didn't do it directly (so copying from paper or doing an interview)
entered_at            | datetime the response was entered into our system.
observation_time      | datetime the respondent answered the questions (can be changed in the interface, when copied from paper)
questionnaire_key     | roqua-key of questionnaire (in a few cases different from quby-key) points to questionnaires.key
questionnaire_variant | roqua-key of specific questionnaire variant (e.g. bulk version)
requester_id          | foreign key to professional who prepared the response in the RoQua epd interface
status                | inactive / aborted / completed / scheduled / open / expired / unattached
non_response_id       | foreign key to non_response
open_from             | datetime start of timewindow to fill out the response, usually the time we send an email/sms
open_till             | datetime end of the timewindow to fill out the response
started_at            | datetime the respondent opened the response
hide_pii_from_researchers | Should show the respondent id with the response_values/scores.
hide_values_from_professionals | Should not show the response_values/scores within a dossiers.
notes                 | notes added by a professional.
measurement_id        | foreign key to measurement this response was prepared from.
team_id               | foreign key to team that was active when response was prepared.

### response_values

Answer to a single question in a response

Attribute             | Description
----------------------|-----------------
response_id           |
field_key             | often the question key, but option_key for multi_select and date_part_keys for date_parts e.g. v_1, v_2_a3, v_3_yyyy.
data                  | value of answer e.g. '2' for radio with value 2, '1' for checked checkbox, 'hello' for text
question_option_key.  | option key in case the question is of type single_select.

### response_scores

Scores are calculated values, based on the response_values. 

Attribute             | Description
----------------------|-----------------
response_id           | int
score_key             |
score_subkey          | main score is called `value`,  
data                  | stringified result of the subscore integer/float/string

### non_responses

Attribute             | Description
----------------------|-----------------
timestamp             | Time at of non-response, can be set by the user, defaults to creation time.
reason_group:         | e.g. "Patiënt is wel benaderd voor de ROM
reason_option:        | e.g. "Patiënt retourneert meetinstrument niet."
reason_code:          | e.g. "04"
reason_other:         | user entered text

### response_flags

Flags turn on/off questions in a response.

Attribute   | Description
------------|------------------
response_id | foreign key to responses
key         | e.g. first_measurement_of_day / last_measurement_of_day / ptr_semi_slaap / caps_5_copisac
value       | true/false/null

Primary key: `[response_id, key]`

### response_textvars

Textvars allow for customizing questions to e.g. make them more specific.

Attribute   | Description
------------|------------------
response_id | foreign key to responses
key         | e.g. adhd_rs5_l_tijdsperiode / ptr_semi_eigen_vraag1
value       | text

Primary key: `[response_id, key]`

## Global data

### questionnaires

Attribute         | Description
------------------|------------------
key               | Primary key string
title             |
short_description |
description       |
license           | free / pay_per_completion / private / deprecated / unknown
sbg_key           |

### questions

Attribute            | Description
---------------------|------------------
questionnaire_key    | point to questionnaires.key
key                  |
position             | order on the screen
title                | title on screen for the respondent
context_free_title   | title for professional, adds context if needed, often removes examples. defaults to title
sbg_key              |
question_type        | text / integer / float / single_select / multi_select / date_parts

Primary key: `[questionnaire_key, key]`

### question_options

Attribute         |  Description
------------------|-------------------
questionnaire_key |  points to questionnaires.key
question_key      |  points to questions.key
key               |  option key
position          |  order on screen
description       |
value             |  stringified integer/float

Primary key: `[questionnaire_key, question_key, key]`

### fields

Attribute         | Description
------------------|------------------
questionnaire_key | points to questionnaires.key
key               | see responses.field_key
type              | string / integer / decimal / boolean
description       |

Primary key: `[questionnaire_key, key]`

### scores

Attribute         | Description
------------------|------------------
questionnaire_key | points to questionanires.key
score_key         | 
score_subkey      | primary subscore is value. 
csv_key           | header to use in csv export
label             | 
sbg_key           | 

Primary key: `[questionnaire_key, score_key, score_subkey]`

---
title: Responses
status: draft
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

<%= headers 200 %>
<%= json [
    {
      "id"                 => 1,
      "name"               => "OQ-45",
      "questionnaire_name" => "OQ-45",
      "questionnaire_key"  => "oq45",
      "status"             => "scheduled",
      "open_from"          => "2012-11-23T12:40:20+00:00+0200",
      "open_till"          => "2012-11-25T12:40:20+00:00+0200",
      "completer_type"     => "patient",
      "started_at"         => nil,
      "completed_at"       => nil,
      "completing_url"     => "https://demo.roqua.nl/login?token=abcdefgh",
      "values"             => {},
      "outcome"            => {:scores=>{},
                              :action=>nil,
                              :actions=>{},
                              :alarm=>nil,
                              :attention=>nil,
                              :complete=>nil}
    },
    {
      "id"                 => 2,
      "name"               => "OQ-45",
      "questionnaire_name" => "OQ-45",
      "questionnaire_key"  => "oq45",
      "status"             => "open",
      "open_from"          => nil,
      "open_till"          => nil,
      "completer_type"     => "parent",
      "started_at"         => nil,
      "completed_at"       => nil,
      "completing_url"     => "https://demo.roqua.nl/login?token=abcdefgh",
      "values"             => {},
      "outcome"            => {:scores=>{},
                              :action=>nil,
                              :actions=>{},
                              :alarm=>nil,
                              :attention=>nil,
                              :complete=>nil}
    },
    {
      "id"                 => 3,
      "name"               => "OQ-45",
      "questionnaire_name" => "OQ-45",
      "questionnaire_key"  => "oq45",
      "status"             => "aborted",
      "open_from"          => nil,
      "open_till"          => nil,
      "completer_type"     => "parent",
      "started_at"         => "2012-11-20T15:30:20+00:00+0200",
      "completed_at"       => "2012-11-20T15:40:20+00:00+0200",
      "completing_url"     => "https://demo.roqua.nl/login?token=abcdefgh",
      "values"             => {},
      "outcome"            => {:scores=>{},
                              :action=>nil,
                              :actions=>{},
                              :alarm=>nil,
                              :attention=>nil,
                              :complete=>nil}
    },
    {
      "id"                 => 4,
      "name"               => "OQ-45",
      "questionnaire_name" => "OQ-45",
      "questionnaire_key"  => "oq45",
      "status"             => "completed",
      "open_from"          => nil,
      "open_till"          => nil,
      "completer_type"     => "patient",
      "started_at"         => "2012-11-20T15:30:20+00:00+0200",
      "completed_at"       => "2012-11-20T15:40:20+00:00+0200",
      "completing_url"     => nil,
      "values"             => {"v_1"=>4,
                               "v_2"=>1,
                               "v_3"=>2,
                               "v_4"=>3,
                               "v_5"=>4,
                               "v_6"=>4,
                               "v_7"=>4,
                               "v_8"=>4,
                               "v_9"=>4,
                               "v_10"=>4,
                               "v_11"=>3,
                               "v_12"=>1,
                               "v_13"=>1,
                               "v_14"=>3,
                               "v_15"=>3,
                               "v_16"=>2,
                               "v_18"=>2,
                               "v_19"=>2,
                               "v_20"=>2,
                               "v_21"=>2,
                               "v_22"=>3,
                               "v_23"=>1,
                               "v_24"=>1,
                               "v_25"=>3,
                               "v_26"=>1,
                               "v_27"=>0,
                               "v_28"=>0,
                               "v_29"=>0,
                               "v_30"=>0,
                               "v_31"=>0,
                               "v_32"=>3,
                               "v_33"=>1,
                               "v_34"=>1,
                               "v_35"=>1,
                               "v_36"=>1,
                               "v_37"=>3,
                               "v_38"=>1,
                               "v_39"=>3,
                               "v_40"=>3,
                               "v_41"=>4,
                               "v_42"=>4,
                               "v_43"=>4,
                               "v_44"=>0,
                               "v_45"=>4,
                               "v_46"=>4},
      "outcome"            => {:scores=>{"totaal"=>
                                          {"score"=>true,
                                           "label"=>"Totaal",
                                           "value"=>101,
                                           "norm"=>">55",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>89,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH",
                                           "global"=>true},
                                         "psychisch"=>
                                          {"score"=>true,
                                           "label"=>"Psychisch Onwelbevinden",
                                           "value"=>61,
                                           "norm"=>">33",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>89,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH"},
                                         "interpers"=>
                                          {"score"=>true,
                                           "label"=>"Interpersoonlijk Functioneren",
                                           "value"=>19,
                                           "norm"=>">12",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>71,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH"},
                                         "sociaal"=>
                                          {"score"=>true,
                                           "label"=>"Sociale Rolvervulling",
                                           "value"=>21,
                                           "norm"=>">10",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>93,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH"}},
                               :action=>:alarm,
                               :alarm=>["v_8", "v_11", "v_45"],
                               :attention=>["v_33"],
                               :complete=>nil}
    }
  ]
%>

### Response Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the reponse record.
`name`                | `string`  | The name of the response. **Warning, this field is deprecated, use questionnaire\_name instead**
`questionnaire_name`  | `string`  | The name of the questionnaire that was filled out.
`questionnaire_key`   | `string`  | Key uniquely identifying the questionnaire that was filled out.
`status`              | `string`  | One of the following values:<br/>* `scheduled` - This response is scheduled to be completed at a later time. Cannot be completed right now, and visiting its URL will not result in this response being presented. See `open_from` and `open_till` attributes for the time window when this response will be `open`.<br/>* `open` - This response is completable right now.<br/> * `aborted` - Filling out the questionnaire has been aborted.<br/> * `completed` - This response has been completed.
`open_from`           | `string`  | An ISO 8601 formatted string that indicates when the response becomes completable, or `null` if this response is not only completable within a specific time window.
`open_till`           | `string`  | An ISO 8601 formatted string that indicates when the response expires and is no longer completable, or `null` if this response is not only completable within a specific time window.
`completer_type`      | `string`  | Describes for whom this response is intended. Can be `patient`, `professional`, `parent`, `second_parent` or `teacher`. More types might be added later, therefore it is advised that API consumers select the desired types, and not reject the undesired types.
`started_at`          | `string`  | An ISO 8601 formatted string that indicates when the response was started being filled out, or `null` if this data is not available.
`completed_at`        | `string`  | An ISO 8601 formatted string that indicates when the response was completed, or `null` if this response is not yet completed.
`completing_url`      | `string`  | The URL that can be visited to complete this (and possibly other) response(s). Will be `null` if response is already completed.
`values`              | `hash`    | Hash with key value pairs for every question in the questionnaire. Will be empty when the response is not completed.
`outcome`             | `hash`    | Hash with various outcome elements. See below for more details.

#### Outcome

Name             | Type     | Description
-----------------|----------|--------------
`scores`         | `hash`   | Hash containing a hash for each calculated score, index on the score key. Each score contains a `value` entry when the score was calculated successfully and may contain extra key value pairs for interpretation and t-scores. See the outcome description of each questionnaire for more information on the calculated scores.
`action`         | `string` | ['attention', 'alarm'] Whether the calculated outcome requires extra attention or whether it is alarming.
`alarm`          | `array`  | Array containing all question keys giving rise to the `alarm` flag.
`attention`      | `array`  | Array containing all question keys giving rise to the `attention` flag.
`complete`       | `string` | String indicating the percentage a questionnaire has been completed. Either '100%' or  `null` when a questionnaire is fully completed, depending on whether the questionnaire has a definition for 'completeness'.


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

<%= headers 200 %>
<%= json  "id"                 => 4,
      "name"               => "OQ-45",
      "questionnaire_name" => "OQ-45",
      "questionnaire_key"  => "oq45",
      "status"             => "completed",
      "open_from"          => nil,
      "open_till"          => nil,
      "completer_type"     => "patient",
      "started_at"         => "2012-11-20T15:30:20+00:00+0200",
      "completed_at"       => "2012-11-20T15:40:20+00:00+0200",
      "completing_url"     => nil,
      "values"             => {"v_1"=>4,
                               "v_2"=>1,
                               "v_3"=>2,
                               "v_4"=>3,
                               "v_5"=>4,
                               "v_6"=>4,
                               "v_7"=>4,
                               "v_8"=>4,
                               "v_9"=>4,
                               "v_10"=>4,
                               "v_11"=>3,
                               "v_12"=>1,
                               "v_13"=>1,
                               "v_14"=>3,
                               "v_15"=>3,
                               "v_16"=>2,
                               "v_18"=>2,
                               "v_19"=>2,
                               "v_20"=>2,
                               "v_21"=>2,
                               "v_22"=>3,
                               "v_23"=>1,
                               "v_24"=>1,
                               "v_25"=>3,
                               "v_26"=>1,
                               "v_27"=>0,
                               "v_28"=>0,
                               "v_29"=>0,
                               "v_30"=>0,
                               "v_31"=>0,
                               "v_32"=>3,
                               "v_33"=>1,
                               "v_34"=>1,
                               "v_35"=>1,
                               "v_36"=>1,
                               "v_37"=>3,
                               "v_38"=>1,
                               "v_39"=>3,
                               "v_40"=>3,
                               "v_41"=>4,
                               "v_42"=>4,
                               "v_43"=>4,
                               "v_44"=>0,
                               "v_45"=>4,
                               "v_46"=>4},
      "outcome"            => {:scores=>{"totaal"=>
                                          {"score"=>true,
                                           "label"=>"Totaal",
                                           "value"=>101,
                                           "norm"=>">55",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>89,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH",
                                           "global"=>true},
                                         "psychisch"=>
                                          {"score"=>true,
                                           "label"=>"Psychisch Onwelbevinden",
                                           "value"=>61,
                                           "norm"=>">33",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>89,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH"},
                                         "interpers"=>
                                          {"score"=>true,
                                           "label"=>"Interpersoonlijk Functioneren",
                                           "value"=>19,
                                           "norm"=>">12",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>71,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH"},
                                         "sociaal"=>
                                          {"score"=>true,
                                           "label"=>"Sociale Rolvervulling",
                                           "value"=>21,
                                           "norm"=>">10",
                                           "interpretation"=>"Klinisch",
                                           "tscore"=>93,
                                           "tscore_interpretation"=>"Zeer hoog",
                                           "oru_flag"=>"HH"}},
                               :action=>:alarm,
                               :alarm=>["v_8", "v_11", "v_45"],
                               :attention=>["v_33"],
                               :complete=>nil}
    %>

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

<%= headers 200 %>
<%= json "id"                 => 4,
         "name"               => "OQ-45",
         "questionnaire_name" => "OQ-45",
         "questionnaire_key"  => "oq45",
         "status"             => "completed",
         "open_from"          => nil,
         "open_till"          => nil,
         "completer_type"     => "patient",
         "started_at"         => "2012-11-20T15:30:20+00:00+0200",
         "completed_at"       => "2012-11-20T15:40:20+00:00+0200",
         "completing_url"     => nil,
         "values"             => {"v_1"=>4,
                                  "v_2"=>1,
                                  "v_3"=>2,
                                  "v_4"=>3,
                                  "v_5"=>4,
                                  "v_6"=>4,
                                  "v_7"=>4,
                                  "v_8"=>4,
                                  "v_9"=>4,
                                  "v_10"=>4,
                                  "v_11"=>3,
                                  "v_12"=>1,
                                  "v_13"=>1,
                                  "v_14"=>3,
                                  "v_15"=>3,
                                  "v_16"=>2,
                                  "v_18"=>2,
                                  "v_19"=>2,
                                  "v_20"=>2,
                                  "v_21"=>2,
                                  "v_22"=>3,
                                  "v_23"=>1,
                                  "v_24"=>1,
                                  "v_25"=>3,
                                  "v_26"=>1,
                                  "v_27"=>0,
                                  "v_28"=>0,
                                  "v_29"=>0,
                                  "v_30"=>0,
                                  "v_31"=>0,
                                  "v_32"=>3,
                                  "v_33"=>1,
                                  "v_34"=>1,
                                  "v_35"=>1,
                                  "v_36"=>1,
                                  "v_37"=>3,
                                  "v_38"=>1,
                                  "v_39"=>3,
                                  "v_40"=>3,
                                  "v_41"=>4,
                                  "v_42"=>4,
                                  "v_43"=>4,
                                  "v_44"=>0,
                                  "v_45"=>4,
                                  "v_46"=>4},
         "outcome"            => {:scores=>{"totaal"=>
                                             {"score"=>true,
                                              "label"=>"Totaal",
                                              "value"=>101,
                                              "norm"=>">55",
                                              "interpretation"=>"Klinisch",
                                              "tscore"=>89,
                                              "tscore_interpretation"=>"Zeer hoog",
                                              "oru_flag"=>"HH",
                                              "global"=>true},
                                            "psychisch"=>
                                             {"score"=>true,
                                              "label"=>"Psychisch Onwelbevinden",
                                              "value"=>61,
                                              "norm"=>">33",
                                              "interpretation"=>"Klinisch",
                                              "tscore"=>89,
                                              "tscore_interpretation"=>"Zeer hoog",
                                              "oru_flag"=>"HH"},
                                            "interpers"=>
                                             {"score"=>true,
                                              "label"=>"Interpersoonlijk Functioneren",
                                              "value"=>19,
                                              "norm"=>">12",
                                              "interpretation"=>"Klinisch",
                                              "tscore"=>71,
                                              "tscore_interpretation"=>"Zeer hoog",
                                              "oru_flag"=>"HH"},
                                            "sociaal"=>
                                             {"score"=>true,
                                              "label"=>"Sociale Rolvervulling",
                                              "value"=>21,
                                              "norm"=>">10",
                                              "interpretation"=>"Klinisch",
                                              "tscore"=>93,
                                              "tscore_interpretation"=>"Zeer hoog",
                                              "oru_flag"=>"HH"}},
                                  :action=>:alarm,
                                  :alarm=>["v_8", "v_11", "v_45"],
                                  :attention=>["v_33"],
                                  :complete=>nil}
    %>

### When the response already stores data updating is not allowed

<%= headers 403 %>
<%= no_body %>

### When no response exists for the `id` provided

<%= headers 404 %>
<%= no_body %>

### When no questionnaire exists for the `questionnaire_key` provided

<%= headers 404 %>
<%= no_body %>



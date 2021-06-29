---
title: Protocol Subscriptions
---

* TOC
{:toc}

Manage protocol subscriptions for individual patients.

## List active protocol subscriptions for a patient

    GET /api/v1/dossiers/:dossier_id/protocol_subscriptions


### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient of interest.


### Success

<%= headers 200 %>
<%= json [{id:               124,
           daily_start_time: 32400,
           start_at:         "2014-02-14T15:43:24+01:00",
           stop_at:          "2014-03-14T15:43:24+01:00",
           protocol_key:     "rom",
           protocol_name:    "ROM",
           flags:            {dagboek_roker: false},
           textvars:         {dagboek_hoofdprobleem: "Slaaptekort"}}]
%>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 404 %>
<%= no_body %>


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

<%= headers 200 %>
<%= json id:               124,
         daily_start_time: 32400,
         start_at:         "2014-02-14T15:43:24+01:00",
         stop_at:          "2014-03-14T15:43:24+01:00",
         protocol_key:     "rom",
         protocol_name:    "ROM",
         flags:            {dagboek_roker: false},
         textvars:         {dagboek_hoofdprobleem: "Slaaptekort"},
         responses:        [{
                              "id"                 => 2,
                              "name"               => "OQ-45",
                              "questionnaire_name" => "OQ-45",
                              "questionnaire_key"  => "oq45",
                              "status"             => "open",
                              "open_from"          => "2014-11-23T21:40:20+00:00+0200",
                              "open_till"          => "2014-11-23T22:10:20+00:00+0200",
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
                            }, 'etc']
%>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 404 %>
<%= no_body %>


### When no protocol exists with the `protocol_key` provided

<%= headers 404 %>
<%= no_body %>


### When a flag does not exist within the protocol

<%= headers 422 %>
<%= json errors: {'base' => ['flag_does_not_exist']} %>


### When a flag is set to an invalid value

<%= headers 422 %>
<%= json errors: {'base' => ['flag_value_invalid']} %>


## Stop a protocol subscription.

    DELETE /api/v1/dossiers/:dossier_id/protocol_subscriptions/:id

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`id`           | `string`  | **Required**. Key uniquely identifying the protocol subscription to be stopped.


### Success

<%= headers 200 %>
<%= json id:               124,
         daily_start_time: 32400,
         start_at:         "2014-02-14T15:43:24+01:00",
         stop_at:          "2014-03-14T15:43:24+01:00",
         protocol_key:     "rom",
         protocol_name:    "ROM"
%>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 404 %>
<%= no_body %>


### When no protocol subscription exists with the given `id`

<%= headers 404 %>
<%= no_body %>



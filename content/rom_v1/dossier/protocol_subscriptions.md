---
title: Protocol Subscriptions
---

* TOC
{:toc}

Manage protocol subscriptions for individual patients.

## Retrieve all active protocol subscriptions for a patient

    GET /api/v1/dossiers/:dossier_id/protocol_subscriptions


### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient of interest.


### Success

<%= headers 200 %>
<%= json [{daily_start_time: 32400,
       patient_id:       16893,
       protocol_id:      35,
       start_at:         "2014-02-14T15:43:24+01:00"}]
%>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 422 %>
<%= json errors: ['Dossier id moet opgegeven zijn'] %>


## Start a protocol subscription

    POST /api/v1/dossiers/:dossier_id/protocol_subscriptions/


### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`protocol_key` | `string`  | **Required**. Key uniquely identifying the protocol of interest as specified in RoQua.
`start_at`     | `integer` | The Unix time when the first measurement should be prepared. Defaults to the current time.


### Success

<%= headers 200 %>
<%= json daily_start_time: 32400,
         patient_id:       16893,
         protocol_id:      35,
         start_at:         "2014-02-14T15:43:24+01:00"
%>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 422 %>
<%= json errors: ['Dossier id moet opgegeven zijn'] %>


### When no protocol exists with the `protocol_key` provided

<%= headers 404 %>
<%= json errors: ["Protocol met sleutel 'protocol_key' niet gevonden"] %>


## Stop a protocol subscription.

    DELETE /api/v1/dossiers/:dossier_id/protocol_subscriptions/:id

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`   | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`id`           | `string`  | **Required**. Key uniquely identifying the protocol subscription to be stopped.


### Success

<%= headers 200 %>
<%= json daily_start_time: 32400,
         patient_id:       16893,
         protocol_id:      35,
         start_at:         "2014-02-14T15:43:24+01:00"
%>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 422 %>
<%= json errors: ['Dossier id moet opgegeven zijn'] %>


### When no protocol subscription exists with the given `id`

<%= headers 404 %>
<%= json errors: ["Protocolabonnement met id 'id' niet gevonden"] %>



---
title: Protocol Subscriptions
---

* TOC
{:toc}

Manage protocol subscriptions for individual patients.


## Start a protocol subscription.

    POST /api/v1/protocol_subscriptions/

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


### When no protocol can be found for the protocol_key provided

<%= headers 404 %>
<%= json error: "Protocol with key 'protocol_key' not found" %>

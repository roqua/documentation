---
title: FillOut Sessions
---

* TOC
{:toc}


## Start a fill out session.

    POST /api/v1/dossiers/:dossier_id/fill_out_sessions/


### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`        | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`questionnaire_key` | `string`  | **Required**. Key uniquely identifying the questionnaire to be filled out.
`return_to`         | `string`  | **Required**. URL to redirect to after the questionnaire has been filled out.


### Success

<%= headers 200 %>
<%= json questionnaire_url: 'https://roqua.dev/fill_out/session/login?fill_out_session_key=fcecc8dd96fa7eb1&hmac=a1bd635d733b18cc034eb7f8d1f75daf6951dad23feb7c2ec8fe6257a590908a&nonce=6dae8fb5601ccfb81d7cbedb5986fd25&timestamp=1399363374' %>


### When basic HTTP authentication fails

<%= headers 401 %>
<%= no_body %>


### When no `dossier_id` is provided

<%= headers 422 %>
<%= json errors: ['Dossier id moet opgegeven zijn'] %>


### When no questionnaire exists with the `questionnaire_key` provided

<%= headers 422 %>
<%= json errors: ["Vragenlijst met sleutel 'questionnaire_key' niet gevonden"] %>


### When no `return_to` url is provided

<%= headers 422 %>
<%= json errors: ['Return url is vereist'] %>

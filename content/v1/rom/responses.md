---
title: Responses | RoQua API
---

# Contents

* TOC
{:toc}

Responses are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, responses for all selected questionnaires are created. At this point, the responses have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

Requests for responses are namespaced under a specific [dossier](https://github.com/roqua/developer/blob/master/api/v1/dossiers.md), which is the `/api/v1/dossiers/DOSSIER_ID` path. In this path `DOSSIER_ID` is the external identifier used by the EPD to represent this patient.

## Parameters

  * `respondent_type` - Request only responses where the `completer_type` would equal the given value. See the `completer_type` response attribute for a list of valid values.
  * `status`          - Request only responses where the `status` would equal the given value. See the `status` attribute for a list of valid values.

## Response

* `GET /api/v1/dossiers/123/responses.json` will return a list of questionnaires that will be presented to the user when he logs in with that token.

<%= headers 200 %>
<%= json "responses" => [
                          {
                            "name"           => "OQ-45",
                            "status"         => "scheduled",
                            "open_from"      => "2012-11-23T12:40:20+00:00+0200",
                            "open_till"      => "2012-11-25T12:40:20+00:00+0200",
                            "completer_type" => "patient",
                            "completed_at"   => nil,
                            "completing_url" => "https://demo.roqua.nl/login?token=abcdefgh"
                          },
                          {
                            "name"           => "OQ-45",
                            "status"         => "open",
                            "open_from"      => nil,
                            "open_till"      => nil,
                            "completer_type" => "parent",
                            "completed_at"   => nil,
                            "completing_url" => "https://demo.roqua.nl/login?token=abcdefgh"
                          },
                          {
                            "name"           => "OQ-45",
                            "status"         => "completed",
                            "open_from"      => nil,
                            "open_till"      => nil,
                            "completer_type" => "patient",
                            "completed_at"   => "2012-11-20T15:40:20+00:00+0200",
                            "completing_url" => nil
                          }
                        ]
%>

### Response Attributes

  * `name` - The name of the response.
  * `status` - One of the following values:
      * `scheduled` - This response is scheduled to be completed at a later time.
                      Cannot be completed right now, and visiting its URL will
                      not result in this response being presented. See `open_from`
                      and `open_till` attributes for the time window when this
                      response will be `open`.
      * `open`      - This response is completable right now.
      * `completed` - This response has been completed.
  * `open_from` - An ISO 8601 formatted string that indicates when the response becomes
                  completable, or `null` if this response is not only completable within a
                  specific time window.
  * `open_till` - An ISO 8601 formatted string that indicates when the response expires and is
                  no longer completable, or `null` if this response is not only completable
                  within a specific time window.
  * `completer_type` - Describes for whom this response is intended. Can be `patient`,
                       `professional`, `parent`, `second_parent` or `teacher`. More types
                       might be added later, therefore it is advised that API consumers
                       select the desired types, and not reject the undesired types.
  * `completed_at` - An ISO 8601 formatted string that indicates when the response was completed,
                     or `null` if this response is not yet completed.
  * `completing_url` - The URL that can be visited to complete this (and possibly
                       other) response(s). Will be `null` if response is already completed.

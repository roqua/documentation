---
title: Tokens | RoQua ROM API
---

API v1: Tokens
==============

It is possible to request a JSON-hash of the questionnaires that are
prepared for a given token.

## Get questionnaires to be filled in.

* `GET /login.json?token=abcdefgh` will return a list of questionnaires that will
  be presented to the user when he logs in with that token.

## Response

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
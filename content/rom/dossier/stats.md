---
title: Stats
status: not implemented yet
---

* TOC
{:toc}

Stats that are generated over different aspects of a dossier.

## Stats

    GET /api/v1/dossier/:dossier_id/stats

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id` | `string|array of string` | **Required**. Unique identifier for the patient which requires stats. Multiple dossier_ids are allowed and must be comma-separated, for example `2,35,64` will return stats for three dossiers.

### Response

<%= headers 200 %>
<%= json "2" =>
  {
    "answers" => {
      "total" => 2,
      "completed" => 10,
      "aborted" => 10,
      "expired" => 10,
      "pending" => 10,
      "scheduled" => 10,
      "open" => 10
    },
    "invitations" => {
      "total"     => 10,
      "active"    => 10,
      "expired"   => 10,
      "unexpired" => 10
    },
    "protocol_subscriptions" => {
      "total"          => 2,
      "to_be_prepared" => 2,
      "to_be_stopped"  => 0
    }
  }
%>

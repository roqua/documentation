---
title: Stats
status: draft
---

* TOC
{:toc}

Stats that are generated over different aspects of a dossier.

## Stats

    GET /api/v1/dossier/:epd_ids/stats

### Parameters

Name | Type | Description
-----|------|--------------
`epd_ids` | `string|array of string` | **Optional**. Unique identifier(s) for the patient(s) which require stats. Multiple epd_ids are allowed and must be comma-separated, for example `1234567890,1234567891,1234567892` will return stats for three dossiers if they exist. When no epd_ids are provided, returns all dossier stats for organization.

### Response

%= headers 200 %>
%= json "1234567890" =>
  {
    "responses" => {
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
  },
  "1234567891" =>
  {
    "responses" => {
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
  },
  "1234567892" =>
  {
    "responses" => {
      "total" => 2,
      "completed" => 5,
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

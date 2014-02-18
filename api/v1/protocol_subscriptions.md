API v1: ProtocolSubscriptions
==============

Manage protocol subscriptions for individual patients

## Authentication

 - Basic HTTP authentication

## Start a protocol subscription.

    POST /api/v1/protocol_subscriptions/

### Parameters

 * `dossier_id`   [Required]                - Unique identifier for the patient to be subscribed.
 * `protocol_key` [Required]                - Key uniquely identifying the protocol of interest as specified in RoQua
 * `start_at`     [Defaults to the present] - The [Unix time](http://en.wikipedia.org/wiki/Unix_time) when the first measurement should be prepared.

### Success

    HTTP/1.1 200 OK

    {
      daily_start_time: 32400,
      patient_id: 16893,
      protocol_id: 35,
      start_at: "2014-02-14T15:43:24+01:00"
    }

### Failures

1. When basic HTTP authentication fails

        HTTP/1.1 401 Unauthorized

1. When no protocol can be found for the protocol_key provided

        HTTP/1.1 404 Not Found

        {
          error: "Protocol not found"
        }

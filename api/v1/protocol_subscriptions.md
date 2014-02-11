API v1: ProtocolSubscriptions
==============

Manage protocol subscriptions for individual patients

## Start a protocol subscription.

    POST /api/v1/protocol_subscriptions/

Provide de following parameters:

 * `dossier_id`     - Unique identifier for the patient to be subscribed.
 * `start_at`       - The [Unix time](http://en.wikipedia.org/wiki/Unix_time) when the first measurement should be prepared. Defaults to the present.
 * `stop_at`        - The [Unix time](http://en.wikipedia.org/wiki/Unix_time) when the subscription is revoked. By default subscriptions are never revoked.
 * `daily_start_at` - The Integer number of seconds since midnight determining the time of the first measurement to be prepared.


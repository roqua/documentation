---
title: Rails Engine - Entering Quby
status: draft
---

## Query parameters

Name                  | Type      | Description
----------------------|-----------|--------------
`token`               | `string`  | The random generated per-answer `token`.
`hmac`                | `string`  | An HMAC of all parameters. Used to ensure that parameters cannot be tampered with.
`timestamp`           | `string`  | A ISO 8601 formatted timestamp for this request. Used to block old URLs being re-requested.
`return_token`        | `string`  | *Optional.* Will be returned as-is as a `return_token` parameter.
`return_url`          | `string`  | *Optional.* See [returning from Quby](/developer/quby_v1/engine/returning_from/).
`display_mode`        | `string`  | *Optional.* Possible values:<br> * `paged` - Show questionnaire broken up in multiple pages.<br> * `bulk` - Show entire questionnaire on a single page, for easy data entry, leaves out descriptions.
`stylesheet`          | `string`  | *Optional.* URL to a CSS file which Quby will load *after* its own.

## Session data

Set the value of `session[:quby_answer_id]` to the `id` of the answer you're redirecting to.


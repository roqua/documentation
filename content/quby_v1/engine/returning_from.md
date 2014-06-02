---
title: Rails Engine - Returning to your application
status: draft
---

When you redirected to the Quby URL, you specified a `return_url`. After some events (e.g. completion of an answer), Quby will redirect to this URL.

## Query parameters

Name                  | Type      | Description
----------------------|-----------|--------------
`key`                 | `string`  | The value that was supplied for the `return_token` parameter.
`return_from_answer`  | `string`  | The ID of the answer which was just accessed. This might not be the ID you redirected to (because the user might have used the back button in their browser).
`status`              | `string`  | *Optional.* Possible values:<br> * `back` - user requested to browse backwards to the previous questionnaire.<br> * `close` - user requested to abort their fill out session and stop completing more questionnaires.<br> * `authorization_error` - something went wrong while authorizing the user against the requested URL (e.g. the answer id in the session was incorrect, or the HMAC did not validate).<br>
`expired_session`     | `string`  | *Optional.* Present and set to `true` if the timestamp in the requested URL has expired.

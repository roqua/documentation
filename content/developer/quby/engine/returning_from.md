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
`status`              | `string`  | Possible values:<br> * `updated` - form was completed and answer was saved<br> * `error` - something went wrong while authorizing the user against the requested URL (e.g. the answer id in the session was incorrect, or the HMAC did not validate).<br>
`go`                  | `string`  | If `status` is `updated`, this parameter represents the desired direction to move within the fill out session. Possible values:<br> * `back` - user requested to browse backwards to the previous questionnaire.<br> * `stop` - user requested to abort their fill out session and stop completing more questionnaires.<br> * `next` - Default, user submitted using the "klaar" button.<br>
`error`               | `string`  | If `status` is `error`, this parameter identifies the specific error that occured. Specific examples:<br> * `Quby::TimestampExpiredError` if the timestamp in the requested URL has expired.<br> * `Quby::InvalidAuthorizationError` if the answer ID in the session did not match with the answer ID requested.

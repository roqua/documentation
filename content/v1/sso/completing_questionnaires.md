---
title: Single Sign-On for Respondents
---

The login for a patient (or other respondents for a dossier) is normally done by entering a token which the person has received by e-mail or snailmail. It's also possible to open the login URL with this token prefilled as a query parameter, in which case the login will happen automatically and the person will be presented the first pending questionnaire immediately.

## API Call

To open RoQua client-interface and start filling in pending questionnaires, tell a browser
window or frame to navigate to:

`https://#(GGZ_NAME).roqua.nl/login`

To this URL, you may add a number of query parameters (i.e. `?key=value&foo=bar&baz=quux`). These parameters are used for specifying the token to be logged in.

## Parameters

Name | Type | Description
---- |------|--------------
`token`      | `string`  | **Required**. The login token.
`return_url` | `string`  | If given, when all pending questionnaires have been answered, thus completing the fill out session, RoQua will redirect to this URL instead of showing a default thank-you screen.
`stylesheet` | `string`  | If given, this CSS URL will be loaded after our built-in stylesheets to allow some visual customization of the look and feel.
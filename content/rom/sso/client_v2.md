---
title: Respondents using SHA1
status: deprecated
---

Automatic login of a patient (or other respondents for a dossier) can be done with a signed URL. **This style of signature is deprecated.**

## SSO URL

To start completing questionnaires for a given dossier, tell a browser window or frame to navigate to:

    https://:ggzname.roqua.nl/client/sso


## Required parameters

To this URL, you must add a number of query parameters (i.e. `?key=value&foo=bar&baz=quux`). These parameters are used for specifying the user to be logged in, the dossier to be shown, and authenticating that the request is signed by a valid authority.

The following query parameters are **required**:

### `version` - Version of the SSO specification implemented

The value of this parameter should be `2` if you are implementing the specification you are currently reading. This number will be increased whenever we change the specification in a manner that would break existing implementations. Older versions will remain working unless there are security issues with that version of the spec.

### `consumer_key` - The API consumer key you were issued.

All parties that should be able to generate valid SSO requests are issued two strings: a `consumer_key` and a `consumer_secret`. The consumer key is sent as a parameter, so that we know which secret to use while validating the HMAC for the request. These pairs of keys can be generated in the RoQua Admin. The `consumer_secret` is only shown once after generating, if you forget the key or secret you must invalide the old pair and generate a new pair.

### `timestamp` - The Unix time when this request was constructed

Timestamps are supplied as [ISO 8601 formatted strings](http://en.wikipedia.org/wiki/ISO_8601) at the moment the request was generated, which should be easily generated in all programming languages. Note that we reject requests with timestamps that are too far in the past or future, and that it is therefore important to keep the clock of the system generating requests in sync with NTP. Take care to correctly URL-escape this parameter, since the plus-sign in the timestamp otherwise unescapes on our side to a space character which would make the timestamp malformed.

### `clientid` - Identifier for the dossier

This identifies patient dossiers in RoQua. The value given here will also be used in our data exports and in HL7 communication for data associated with this dossier. This dossier must already exist (ie. have been accessed by a professional), otherwise login will fail.

### `sha1` - SHA1 digest.

In order to make sure that requests cannot be tampered with, we require that all requests are signed with an SHA1. The SHA1 is calculated using a secret key. The secret key is the `consumer_secret`, a 64 character long string which can be generated in the RoQua Admin module.

The SHA1 is to be calculated using:

```
CONSUMER_KEY + "|" + CONSUMER_SECRET + "|" + TIMESTAMP + "|" + CLIENTID + "|" + VERSION
```

## Optional parameters

Because the signature is not defined in a way that it signs unknown parameters, this version of the SSO does not support optional parameters. Version 3 will support this.

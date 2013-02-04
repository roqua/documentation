Single Sign-On for Patient Dossiers
===================================

When used in conjunction with an EPD, RoQua has an authentication scheme that relies on the EPD to open a URL that will authenticate a user and open a given dossier number. This enables EPD vendors to build a single sign-on solution that integrates RoQua without the need for the management of users within RoQua. When the SSO-authentication is enabled, the only way for a user to open a dossier, is when the EPD generates a URL with a valid signature.

This signature is generated as a hash of all parameters in the URL, as well as an organization specific secret key. RoQua can then validate the request by calculating the hash itself, and comparing it against the given hash. This protects against tampering with the URL.

In order to ensure URLs cannot be used more than once, a nonce must be supplied as one of the parameters.

A [reference implementation](https://github.com/roqua/authmac) is available. See the *Example* section below for more information.

## API Call

To open RoQua EPD-interface as a given user for a given dossier, tell a browser
window or frame to navigate to:

`https://epd.#(GGZ_NAME).roqua.nl/epd/session/create`

To this URL, you must add a number of query parameters (i.e. `?key=value&foo=bar&baz=quux`). These parameters are used for specifying the user to be logged in, the dossier to be shown, and authenticating that the request is signed by a valid authority.

The following query parameters are **required**:

### `version` - Version of the SSO specification implemented

The value of this parameter should be `3` if you are implementing the specification you are currently reading. This number will be increased whenever we change the specification in a manner that would break existing implementations. Older versions will remain working unless there are security issues with that version of the spec.

### `consumer_key` - The API consumer key you were issued.

All parties that should be able to generate valid SSO requests are issued two strings: a `consumer_key` and a `consumer_secret`. The consumer key is sent as a parameter, so that we know which secret to use while validating the HMAC for the request. These pairs of keys can be generated in the RoQua Admin. The `consumer_secret` is only shown once after generating, if you forget the key or secret you must invalide the old pair and generate a new pair.

### `nonce` - Randomly generated unique token

Nonces should be unique for each request, and are used to determine whether requests have been submitted multiple times. In our reference application we generate nonces by generating a string of 32 hexadecimal randomly chosen characters, but any approach that produces relatively random alphanumeric strings should suffice.

### `timestamp` - The Unix time when this request was constructed

Timestamps are supplied as [the number of seconds since the Unix epoch](http://en.wikipedia.org/wiki/Unix_time) at the moment the request was generated, which should be easily generated in all programming languages. Note that we reject requests with timestamps that are too far in the past or future, and that it is therefore important to keep the clock of the system generating requests in sync with NTP. Additionally, in the beginning of the year 2038 you might wish for this to be generated as a 64-bit signed integer.

Because we reject requests with old timestamps, it is safe to assume that the uniqueness of a nonce only has to be guaranteed for up to 24 hours, if you desire to make sure you generate unique nonces. After all, it is reasonable to say that the chance of a collision between to randomly generated nonces is slim, and the consequences of it are minor (the sign-on would fail, and the user would likely try again, which would generate a new nonce), and that such guarantees need not be made by the EPD.

### `userid` - Identifier for the professional

This identifies the employee being signed in.

Identifiers must be completely unique; if you're using multiple datastores on your end, for example, make sure there cannot be any collisions when passing them to RoQua as that will result in account conflicts.

### `clientid` - Identifier for the dossier

This identifies patient dossiers in RoQua. The value given here will also be used in our data exports and in HL7 communication for data associated with this dossier.

Identifiers must be completely unique; if you're using multiple datastores on your end, for example, make sure there cannot be any collisions when passing them to RoQua as that will result in account conflicts.

### `hmac` - HMAC-SHA256 hash.

In order to make sure that requests cannot be tampered with, we require that all requests are signed with an HMAC. The mechanism behind HMAC is described in [RFC 2104](http://www.ietf.org/rfc/rfc2104.txt), although as with all crypto-related things, please do not go implement them yourself. OpenSSL has an implementation that can be used in most programming languages that can interface with a C-library, so it's doubtful there is not already a library that can take care of the HMAC algorithm for you.

The HMAC algorithm can be used with any cryptographic hashing function, and we decided that **SHA256** should be safe enough for the forseeable future.

HMACs then are calculated using three parameters: the hashing function, a secret key and a message. The secret key is a 64 character long string which can be generated in the RoQua Admin module.

The message is generated by taking all parameter values, sorting them by their parameter keys, and joining them with a pipe character `|`. This means that the following parameters:

```
foo=value-of-foo&bar=value-of-bar&timestamp=1359373315
```

would become the following input message for the HMAC:

```
value-of-bar|value-of-foo|1359373315
```

Given a secret `very-secret`, this message would result in the following HMAC: `7ada2feaa64e7af5665b5ad92530f64983fdb3c0`.

# Example

The library we use to sign and validate requests is open source and can be found [on Github](https://github.com/roqua/authmac). In that library, we have an example web server implemented in [this file](https://github.com/roqua/authmac/blob/master/example/app.rb). This web server is running [on Heroku](http://roqua-urlspec.herokuapp.com), where you can use it to validate your own requests. In that case, use `http://roqua-urlspec.herokuapp.com/auth` as base URL, instead of the one documented above.

# TODO

* Explain the sorting procedure for the HMAC message better. Possibly just do it like Twitter does (see references)
* Explain the procedure for URL-encoding query parameters?

# References

* http://blog.jcoglan.com/2012/06/09/why-you-should-never-use-hash-functions-for-message-authentication/
* https://dev.twitter.com/docs/auth/creating-signature
* https://developers.facebook.com/docs/howtos/login/signed-request/#step2
* http://rc3.org/2011/12/02/using-hmac-to-authenticate-web-service-requests/
* http://blog.jcoglan.com/2012/06/09/why-you-should-never-use-hash-functions-for-message-authentication/
* http://tools.ietf.org/html/rfc4868#page-17

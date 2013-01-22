Single Sign-On for Patient Dossiers
===================================

When used in conjunction with an EPD, RoQua has an authentication scheme that relies on the EPD to open a URL that will authenticate a user and open a given dossier number. This enables EPD vendors to build a single sign-on solution that integrates RoQua without the need for the management of users within RoQua. When the SSO-authentication is enabled, the only way for a user to open a dossier, is when the EPD generates a URL with a valid signature.

This signature is generated as a hash of all parameters in the URL, as well as an organization specific secret key. RoQua can then validate the request by calculating the hash itself, and comparing it against the given hash. This protects against tampering with the URL.

In order to ensure URLs cannot be used more than once, a nonce must be supplied as one of the parameters.

A [reference implementation](https://github.com/roqua/urlspec/blob/master/app/controllers/generators_controller.rb) is available. It is also possible to validate your URLs against this implementation by [visiting its running instance](http://roqua-urlspec.heroku.com/generator/new).

#### TODO

* Does the EPD request a nonce from RoQua, or does it generate them? If it is requested, we can get rid of the timestamp parameter, and just expire the nonces. This also means we don't have any NTP differences between our servers and theirs, nor timezone issues. Having EPD request nonces means it has to do an additional request though.

## API Call

To open RoQua EPD-interface as a given user for a given dossier, tell a browser
window or frame to navigate to:

`https://epd.#(GGZ_NAME).roqua.nl/epd/session/create`

#### Required parameters:

  * `version`       - The version this document describes is `3`.
  * `timestamp`     - ISO 8601 formatted date and time (YYYY-MM-DDThh:mm:ssTZD).
  * `userid`        - Nummer behandelaar; matchen in Roqua met MFN.
  * `clientid`      - Patientnummer; matchen in Roqua met A04/A08/A19.
  * `hmac`          - SHA1-hash #(HMAC)= SHA1(GGZ_NAME + ‘|’ + TIMESTAMP + ‘|’ + USERID + ‘|’ + CLIENTID + ‘|’ + ROLEID + ‘|’ + PROTOCOLID + ‘|’ + VERSION + ‘|’ + SHARED_SECRET)

#### Optional parameters:

  * `roleid`        - Rechten-differentiering vanuit EPD (optioneel).
  * `protocolid`    - Protocol sturing vanuit EPD (optioneel)
  * `GGZ_NAME`      - "lentis" of "ggzfriesland" of "ucp" of … (aangeleverd door RGOc).

#### Never communicated over the wire:

  * `SHARED_SECRET` - A String of at least 64 characters.

Alleen bekend bij RGOc/Roqua en EPD-leverancier: GPR, McKesson, ...). Dient bij voorkeur als configureerbare parameter te worden geimplementeerd in verband met mogelijkheid tot wijzigen bij vermoeden van corrumpering.

Voor iedere string geldt lowercase en trimmen (een lege parameter wordt dus een empty string ‘’):GGZ_NAME=rtrim(ltrim(lowercase(GGZ_NAME)))

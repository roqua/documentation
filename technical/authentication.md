# API Authentication

The REST API supports two authentication schemes. Access to the API is controlled by [API tokens](../../../../rom_manual/admin/integration/api_tokens) in [RoQua-Admin](https://rom.roqua.nl/manage). When opting for JWT tokens, please provide us with your public key so we can hook it to the API token.

## JWT tokens

JWT tokens can be used for the REST API (and in the GraphQL API to-be).

These must be sent in an `Authorization: Bearer <TOKEN_HERE>` header.

JWT Header:

| header | content |
|--------|---------|
| typ | (required) `JWT` |
| alg | (required) `RS256` or `RS512` |
| kid | (required) The `consumer_key` as given when uploading the public key into the RoQua Admin |

Payload claims:

| Field | Content |
|-------|---------|
| iss | (required) The issuer of the token, e.g. `roqua-rom-prod` or a third-party like `mconsole`. |
| aud | (required) Audience. Must be `api` (to discern between API and a future use in SSO logins).
| iat | (required) Timestamp when this JWT was generated |
| exp | (required) Timestamp when this JWT should be considered expired and be rejected (required, roqua imposes a maximum of 1 hour which is also the default) |
| nbf | (optional) Do not consider this JWT to be valid before this timestamp. |
| sub | (optional) The dossier ID (required to perform dossier-related actions) |

Note that the `sub` claim is optional in some cases, but not in all. Trying to access dossier-specific resources without it will result in an authorization error.

## HTTP Basic

HTTP Basic authentication over SSL is supported for `/api` and `/fhir/$graphql`.

### Creating an API token

Create a token via `/admin/api_tokens/new` [(manual)](../../../../rom_manual/admin/integration/api_tokens/). After creation you receive:

| Credential | Use as |
|------------|--------|
| `consumer_key` | HTTP Basic username |
| `consumer_secret` | HTTP Basic password (shown only once — store it securely) |

### Sending the credentials

Virtually every HTTP client and library has built-in support for HTTP Basic auth — use it rather than constructing the header yourself. For example, `curl` has the `-u` flag, Python's `requests` accepts an `auth=` tuple, and most SDKs expose a `basicAuth` option:

```sh
curl -u "$CONSUMER_KEY:$CONSUMER_SECRET" https://rom.roqua.nl/api/...
```

If you do need to build the header by hand, combine the credentials as `consumer_key:consumer_secret`, Base64-encode the result, and send it as:

```
Authorization: Basic <base64(consumer_key:consumer_secret)>
```

Note that Base64 is an encoding, not encryption — anyone who intercepts the header can trivially recover the credentials. What makes HTTP Basic safe to use here is that the API is only served over HTTPS, so the header is encrypted in transit. Never send these credentials over plain HTTP.

### Scoping access

When configuring a right on the token you can:

- restrict which endpoints the token can access, and
- allow-list the IP addresses that may use the token.

Requests that fall outside these restrictions are rejected before reaching the endpoint.

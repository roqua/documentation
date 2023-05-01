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

Authentication for `/api` and `/fhir/$graphql` is done by HTTP Basic authentication over SSL.

Through `/admin/api_tokens/new` [(manual)](../../../../rom_manual/admin/integration/api_tokens/) you can create an api_token. The provided `consumer_key` is used as the username and the returned  `consumer_secret` is used as the password for HTTP Basic authentication.

When creating a right you can specify which endpoints it gives access to and allows you to specify the ip's that can access the api with that token.

---
title: Authentication
---

## api

Authentication for `/api` and `/fhir/$graphql` is done by HTTP Basic authentication over SSL.

Through `/admin/api_tokens/new` [(manual)](../../../../rom_manual/admin/integration/api_tokens/) you can create an api_token. The provided `consumer_key` is used as the username and the returned  `consumer_secret` is used as the password for HTTP Basic authentication.

When creating a right you can specify which endpoints it gives access to and allows you to specify the ip's that can access the api with that token.

## [sso](../../sso/)

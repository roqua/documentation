---
title: Single sign-on tokens
sort: 100
---

<img src="/assets/images/screenshots/admin_sso_tokens_index.png" />

## Creation

Enter an identifying name under "consumer_key".

In addition, for each token the actions that are allowed with that particular key must be indicated. This is done with check marks under "Rights". The text at each check mark links to the documentation of the particular right.

<img src="/assets/images/screenshots/admin_sso_tokens_new.png" />

After creation, the `consumer_secret` will be shown **only once**. Consider this as a password, and thus never send it unencrypted to colleagues. Ideally, the code would be copied straight from RoQua to the configuration of the target system.

<img src="/assets/images/screenshots/admin_sso_tokens_created.png" />

## Withdrawal

To ensure that a token no longer has access to RoQua, it can be withdrawn. Withdrawn tokens remain in the overview.

<img src="/assets/images/screenshots/admin_sso_tokens_revoked.png" />


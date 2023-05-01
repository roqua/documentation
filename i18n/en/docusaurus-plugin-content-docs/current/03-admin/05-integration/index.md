---
title: Integration
sort: 450
---

RoQua has two integration methods: the HTTP API by which our application is made accessible through programming, and the single sign-on links with which your users in RoQua can log in without manual authentication.

Both links have the concept of a "token". API tokens are used by your application to authenticate itself with our service. SSO tokens use the consumer_secret to sign the login URL in order for our application to check that it is a valid login.

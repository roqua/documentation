---
title: Authentication
---

For Core, we support two different types of authentication. Any request that exposes personal details about a specific dossier requires authentication using a valid OAuth access token.

This design makes is more difficult for any client application to leak an entire dataset that includes names, since any OAuth access token is always locked to a specific subset of data.

However, there are also API calls that need to made in the background, outside of the context of an active end-user session. For these types of requests, Core supports HTTP Basic authentication over SSL. However, these requests are command-style, e.g. "send this given email template to this given dossier_id", such that the client application need not remember any personal details.
---
title: RoQua ROM API
---

* TOC
{:toc}

All API endpoints for dossier specific information and actions require a `dossier_id` parameter. When this parameter is blank, an HTTP `not_found` response code is returned:

<%= headers 404 %>
<%= no_body %>

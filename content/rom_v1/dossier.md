---
title: RoQua ROM API
---

* TOC
{:toc}

All API endpoints for dossier specific information and actions require a `dossier_id` parameter. When this parameter is blank, an HTTP unprocessable entity response code is returned:

<%= headers 422 %>
<%= json errors: ['Dossier id moet opgegeven zijn'] %>

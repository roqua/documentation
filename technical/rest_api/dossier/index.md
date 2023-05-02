---
title: Dossier-specific data
---

All API endpoints for dossier specific information and actions require a `dossier_id` parameter. When this parameter is blank, an HTTP `not_found` response code is returned:

<snapshot json={{
  request: {request_method: "GET", path: "/api/v1/dossiers//responses"},
  response: {status: 404}
}} />

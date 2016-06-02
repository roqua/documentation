---
title: Responses
---

* TOC
{:toc}

All exports contain the data up until last night.

An export version defines which answers are exported and the names of the columns. When a questionnaire changes, a new export version is created.

## List all export versions

    GET /api/v1/data_exports.json

### Response

<%= snapshot_response('rom', 'data_exports_index') %>


## Download the latest export version

    GET /api/v1/data_exports/download


## Download a specific export version

    GET /api/v1/data_exports/:data_export_id

---
title: Responses
---

All exports contain the data up until last night.

An export version defines which answers are exported and the names of the columns. When a questionnaire changes, a new export version is created.

## List all export versions

<snapshot json={{
  request: {
    request_method: "GET",
    path: "/api/v1/data_exports.json"
  },
  response: {
    status: 200,
    body: [
      {id: 3, key: "v201402", name: "Exportformaat van na 20 februari 2014", hash: "xulog-rarat-zorud-nesys-memit", version: "2014-02-20T10:58:29+01:00"},
      {id: 2, key: "v201205", name: "Exportformaat van vóór 16 mei 2012", hash: "xovoc-polos-kosif-puhiz-kycut", version: "2012-05-03T14:13:45+02:00"}
    ]
  }
}} />

## Download the latest export version

<snapshot json={{
  request: {
    request_method: "GET",
    path: "/api/v1/data_exports/download"
  },
  response: {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=\"demo_v201402_20140220105832.zip\"",
      "Content-Transfer-Encoding": "binary"
    },
    body: "THE BINARY DATA"
  }
}} />

## Download a specific export version

    GET /api/v1/data_exports/:data_export_id

## Download the latest sql export

<snapshot json={{
  request: {
    request_method: "GET",
    path: "/api/v1/data_exports/download_sql"
  },
  response: {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=\"demo.db\"",
      "Content-Transfer-Encoding": "binary"
    },
    body: "THE BINARY DATA"
  }
}} />

Is usually updated every hour. Download is a sqlite .db file.


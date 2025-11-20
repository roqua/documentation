---
title: Download via API
---

<Snapshot json={{
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


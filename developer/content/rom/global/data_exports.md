---
title: Data Exports
status: draft
---

* toc
{:toc}

## List known export versions

    GET /api/v1/data_exports

### Response

<%= headers 200 %>
<%= json [{id: 3, key: "v201402", name: "Exportformaat van na 20 februari 2014",
           hash: "xulog-rarat-zorud-nesys-memit", version: "2014-02-20T10:58:29+01:00"},
          {id: 2, key: "v201205", name: "Exportformaat van vóór 16 mei 2012",
           hash: "xovoc-polos-kosif-puhiz-kycut", version: "2012-05-03T14:13:45+02:00"}
           ] %>


## Get the export in the latest export version

    GET /api/v1/data_exports/download

### Response

<%= headers 200, "Content-Type" => "application/zip",
                 "Content-Disposition" => "attachment; filename=\"demo_v201402_20140220105832.zip\"",
                 "Content-Transfer-Encoding" => "binary" %>

    (the binary data for the zip file)


## Get the export in a specific export version

    GET /api/v1/data_exports/:id

### Response

<%= headers 200, "Content-Type" => "application/zip",
                 "Content-Disposition" => "attachment; filename=\"demo_v201402_20140220105832.zip\"",
                 "Content-Transfer-Encoding" => "binary" %>

    (the binary data for the zip file)

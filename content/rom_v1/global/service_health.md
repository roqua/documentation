---
title: Service Health
status: draft
---

* toc
{:toc}

## Get current service health

    GET /api/v1/service_health

### Response

<%= headers 200 %>
<%= json status: 'ok',
         a19: {last_success: "2012-11-23T12:40:20+00:00+0200"},
         oru: {last_success: "2012-11-23T12:40:20+00:00+0200"}
%>



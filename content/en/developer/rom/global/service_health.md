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
         a19: {queue_size: 24, last_success: (Time.now - 10).iso8601},
         oru: {queue_size: 11, last_success: (Time.now - 6012).iso8601}
%>



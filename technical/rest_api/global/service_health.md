# Service Health

## Get current service health

<snapshot json={{
  request: {
    request_method: "GET",
    path: "/api/v1/service_health"
  },
  response: {
    status: 200,
    body: {
      a19: {queue_size: 24, last_success: new Date().toISOString()},
      oru: {queue_size: 11, last_success: new Date().toISOString()}
    }
  }
}} />



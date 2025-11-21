# REST API Error Handling

## When basic HTTP authentication fails

<Snapshot json={{
  request: {
    request_method: "GET",
    path: "/api/v1/some_resource"
  },
  response: {
    status: 401
  }
}} />

## When validations fail

<Snapshot json={{
  request: {
    request_method: "POST",
    path: "/api/v1/some_resource"
  },
  response: {
    status: 422,
    body: {
      errors: {
        open_till: ['in_past'],
        questionnaire_keys: ['blank', 'invalid']
      }
    }
  }
}} />

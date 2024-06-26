# Fill Out Sessions

## Start a fill out session.

    POST /api/v1/dossiers/:dossier_id/fill_out_sessions/

### Parameters

Name | Type | Description
-----|------|--------------
`dossier_id`         | `string`  | **Required**. Unique identifier for the patient to be subscribed.
`questionnaire_keys` | `array`   | Array of keys uniquely identifying the questionnaires to be filled out.
`response_ids`       | `array`   | Array containing ids of aborted responses for which filling out has to be resumed.
`return_to`          | `string`  | **Required**. URL to redirect to after the questionnaire has been filled out.
`progress_url`       | `string`  | URL of your progress page (see the progress page section below).
`stylesheet`         | `string`  | When given, this CSS URL will be loaded after our built-in stylesheets to allow some customization of the look and feel.

When an array of questionnaire keys is provided, a set of blank questionnaires will be filled out. When an array of
ids corresponding with aborted responses is provided, filling out will be resumed for these responses.

### Success

<snapshot json={{
  request: {
    request_method: "POST",
    path: "/api/v1/dossiers/:dossier_id/fill_out_sessions"
  },
  response: {
    status: 200,
    body: {
      fill_out_url: 'https://roqua.dev/fill_out/session/login?fill_out_session_key=fcecc8dd96fa7eb1&hmac=a1bd635d733b18cc034eb7f8d1f75daf6951dad23feb7c2ec8fe6257a590908a&nonce=6dae8fb5601ccfb81d7cbedb5986fd25&timestamp=1399363374'
    }
  }
}} />

### When no questionnaire keys or answer ids are provided.

<snapshot json={require('@site/static/snapshots/rom/fill_out_session_missing_questionnaire_key')} />

### When no questionnaire exists for one of the `questionnaire_key`s provided

<snapshot json={{
  request: {request_method: "POST", path: "/api/v1/dossiers/:dossier_id/fill_out_sessions"},
  response: {status: 404}
}} />

### When no aborted answer exists for one of the `answer_id`s provided

<snapshot json={{
  request: {request_method: "POST", path: "/api/v1/dossiers/:dossier_id/fill_out_sessions"},
  response: {status: 404}
}} />

### When no `return_to` url is provided

<snapshot json={require('@site/static/snapshots/rom/fill_out_session_missing_return_to')} />

## Progress page

By providing a `progress_url` when creating a fill_out session, respondents are redirected to your custom progress page
before filling out and between every questionnaire. We provide you with the following url parameters:

- `continue_url` : a url to fill out the next questionnaire
- `interrupt_url` : a url to abort filling out
- `completed_questionnaire_keys[]` : a list of keys of filled out questionnaires
- `pending_questionnaire_keys[]` : a list of keys of questionnaires to be filled out

The actual names of these questionnaires can be queried through the
[questionnaires API endpoint](../../global/questionnaires/).

These url parameters can be used on your progress page to show the respondent's progress and provide links for
continuing filling out or aborting the fill out session.

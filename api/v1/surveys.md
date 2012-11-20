Surveys [DRAFT]
===============

Surveys are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, surveys for all selected questionnaires are created. At this point, the surveys have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

## Attributes

  * `name`      - The name of the survey.
  * `status`    - One of the following values:

      * `scheduled` - This survey is scheduled to be completed at a later time.
                      Cannot be compled right now.
      * `open`      - This survey is completable right now.
      * `completed` - This survey has been completed.

  * `open_from` - An ISO 8601 formatted string that indicates when the survey
    becomes completable, or `null` if this survey is not only completable within
    a specific time window.
  * `open_till` - An ISO 8601 formatted string that indicates when the survey
    expires and is no longer completable, or `null` if this survey is not only
    completable within a specific time window.
  * `completed_at` - An ISO 8601 formatted string that indicates when the survey,
    or `null` if this survey is not yet completed.
  * `completing_url` - The URL that can be visited to complete this (and possibly
    other) survey(s). Will be `null` if survey is already completed.

## Get a list of surveys

* `GET /api/v1/dossiers/123/surveys.json` will return a list of questionnaires that will
  be presented to the user when he logs in with that token.

```json
{
  "surveys": [
    {
      "name": "OQ-45",
      "status": "scheduled",
      "open_from": "2012-11-23T12:40:20+00:00+0200",
      "open_till": "2012-11-25T12:40:20+00:00+0200",
      "completed_at": null,
      "completing_url": "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "name": "OQ-45",
      "status": "open",
      "open_from": null,
      "open_till": null,
      "completed_at": null,
      "completing_url": "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "name": "OQ-45",
      "status": "completed",
      "open_from": null,
      "open_till": null,
      "completed_at": "2012-11-20T15:40:20+00:00+0200",
      "completing_url": null
    },
  ]
}
```
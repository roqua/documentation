Surveys [DRAFT]
===============

Surveys are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, surveys for all selected questionnaires are created. At this point, the surveys have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

Requests for surveys are namespaced under a specific [dossier](https://github.com/roqua/developer/blob/master/api/v1/dossiers.md), which is the `/api/v1/dossiers/DOSSIER_ID` path. In this path `DOSSIER_ID` is the external identifier used by the EPD to represent this patient.

## Survey Attributes

  * `name`      - The name of the survey.
  * `status`    - One of the following values:
      * `scheduled` - This survey is scheduled to be completed at a later time.
                      Cannot be completed right now, and visiting its URL will
                      not result in this survey being presented. See `open_from`
                      and `open_till` attributes for the time window when this
                      survey will be `open`.
      * `open`      - This survey is completable right now.
      * `completed` - This survey has been completed.
  * `open_from` - An ISO 8601 formatted string that indicates when the survey becomes
                  completable, or `null` if this survey is not only completable within a
                  specific time window.
  * `open_till` - An ISO 8601 formatted string that indicates when the survey expires and is
                  no longer completable, or `null` if this survey is not only completable
                  within a specific time window.
  * `completer_type` - Describes for whom this survey is intended. Can be `patient`,
                       `professional`, `parent`, `second_parent` or `teacher`. More types
                       might be added later, therefore it is advised that API consumers
                       select the desired types, and not reject the undesired types.
  * `completed_at` - An ISO 8601 formatted string that indicates when the survey,
                     or `null` if this survey is not yet completed.
  * `completing_url` - The URL that can be visited to complete this (and possibly
                       other) survey(s). Will be `null` if survey is already completed.

## API Calls

* `GET /api/v1/dossiers/123/surveys.json` will return a list of questionnaires that will be presented to the user when he logs in with that token.

```json
{
  "surveys": [
    {
      "name": "OQ-45",
      "status": "scheduled",
      "open_from": "2012-11-23T12:40:20+00:00+0200",
      "open_till": "2012-11-25T12:40:20+00:00+0200",
      "completer_type": "patient",
      "completed_at": null,
      "completing_url": "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "name": "OQ-45",
      "status": "open",
      "open_from": null,
      "open_till": null,
      "completer_type": "parent",
      "completed_at": null,
      "completing_url": "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "name": "OQ-45",
      "status": "completed",
      "open_from": null,
      "open_till": null,
      "completer_type": "patient",
      "completed_at": "2012-11-20T15:40:20+00:00+0200",
      "completing_url": null
    }
  ]
}
```
Surveys [DRAFT]
===============

Surveys are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, surveys for all selected questionnaires are created. At this point, the surveys have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

## Attributes

* `status` is one of:
    * `scheduled` - This survey is scheduled to be completed at a later time. Cannot
       be compled right now.
    * `open` - This survey is completable right now.
    * `completed` - This survey has been completed.

## Get a list of surveys

* `GET /api/v1/dossiers/123/surveys.json` will return a list of questionnaires that will
  be presented to the user when he logs in with that token.

```json
{
  "surveys": [
    {
      "id": 1,
      "name": "OQ-45",
      "status": "scheduled",
      "open_from": "2012-11-23T12:40:20+00:00+0200",
      "open_till": "2012-11-25T12:40:20+00:00+0200",
      "completed_at": null,
      "completing_url": "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "id": 2,
      "name": "OQ-45",
      "status": "open",
      "open_from": null,
      "open_till": null,
      "completed_at": null,
      "completing_url": "https://demo.roqua.nl/login?token=abcdefgh"
    },
    {
      "id": 3,
      "name": "OQ-45",
      "status": "completed",
      "completed_at": "2012-11-20T15:40:20+00:00+0200",
      "completing_url": null
    },
  ]
}
```
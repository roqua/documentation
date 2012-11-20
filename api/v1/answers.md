Answers [DRAFT]
===============

Answers are questionnaire completions, although they need not be filled out yet. Upon creating an invitation, answers for all selected questionnaires are created. At this point, the answers have status `new`. When the patient fills out the questionnaire for the answer, its status will change to `completed`.

## Get a list of answers

* `GET /api/v1/dossiers/123/answers.json` will return a list of questionnaires that will
  be presented to the user when he logs in with that token.

```json
{
  "answers": [
    {
      "id": 12345,
      "questionnaire_key": "oq45",
      "questionnaire_variant": "oq45",
      "questionnaire_name": "OQ-45",
      "status": "new"
    },
  ]
}
```
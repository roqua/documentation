---
title: NonResponses
status: draft
---

NonResponses are wrappers around responses that haven't been filled out. They are needed for SBG and follow that format.

They are created:
- 6 hours after responses expire (always code 04)
- When a professional deletes uncompleted responses.
- Directly by the professional on the prepare responses page for a set of questionnaires.

See SBG definition: https://www.sbggz.nl/MDS?contentitem=cded80f9-83e4-4159-8596-9d04c7fde64f#Reden-non-response

## Get a single non_response {#show}

    GET /api/v1/dossier/:epd_id/non_responses/:id

### Response

<Snapshot json={require("@site/static/snapshots/rom/non_responses_show")} />

### Response Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the non_response.
`non_response_at`     | `datetime`| moment the non_response was registered.
`reason_group`        | `string`  | e.g. "Patiënt is wel benaderd voor de ROM meting, maar:"
`reason_option`       | `string`  | e.g. "Patiënt retourneert meetinstrument niet."
`reason_code`         | `string`  | e.g. "04"
`reason_other`        | `string`  | user entered text.

## Get all non_responses for a dossier {#index}

    GET /api/v1/dossier/:epd_id/non_responses

Returns an array of hashes of the same format as show.

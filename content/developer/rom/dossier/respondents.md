---
title: Respondents
status: draft
---

* TOC
{:toc}

Respondents are people that fill out questionnaires. The default respondent is the patient, but there's also profess, parent, second_parent, teacher and caregiver.

- In the future second_parent will be merged into parent.
- You won't see a profess respondent, since you can't send out to professionals, since there isn't usually just one.


## Get a single respondent

    GET /api/v1/dossier/:epd_id/respondents/:id

### Response

<%= snapshot_response('rom', 'respondents_show') %>

### Response Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the respondent.
`label`               | `string`  | Non identifying name for the respondent (e.g. `history teacher`)
`respondent_type`     | `string`  | patient, parent, second_parent, teacher or caregiver.


## Get all respondents for a dossier

    GET /api/v1/dossier/:epd_id/respondents

Returns an array of hashes of the same format as show.

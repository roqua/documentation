---
title: Measurements
status: draft
---

* TOC
{:toc}

See [protocols](/developer/rom/global/protocols/) for a general description.

## Get a single measurement

    GET /api/v1/measurements/:id

### Response

<%= snapshot_response('rom', 'measurements_show') %>

### Response Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the measurement.
`protocol_id`         | `integer` | Id of [protocol](/developer/rom/global/protocols/).
`name`                | `string`  | The name of the measurement, as shown when preparing responses.
`description`         | `string`  | Blob of text what the measurement is for
`active`              | `boolean` | If false, the protocol doesn't show up in the interface.
`questionnaires`      | `array`   | array of hashes with basic questionnaires info (see below)


### Questionnaire attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the questionnaire.
`key`                 | `string`  | key identifying the questionnaire in roqua, use this one for getting more info on [questionnaire](/developer/rom/global/questionnaires/).
`quby_key`            | `string`  | Key identifying the actual questionnaire definition (one quby key can be used in multiple roqua questionnaires, but will have exact same questions)
`name`                | `string`  | The name of the questionnaire, as shown when preparing responses.


# Measurements

See [protocols](protocols) for a general description.

## Get a single measurement

<Snapshot json={require('@site/static/snapshots/rom/measurements_show.json')} />

### Measurement Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the measurement.
`protocol_id`         | `integer` | Id of [protocol](../protocols/).
`name`                | `string`  | The name of the measurement, as shown when preparing responses.
`description`         | `string`  | Blob of text what the measurement is for
`active`              | `boolean` | If false, the protocol doesn't show up in the interface.
`questionnaires`      | `array`   | array of hashes with basic questionnaires info (see below)

### Questionnaire attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the questionnaire.
`key`                 | `string`  | key identifying the questionnaire in roqua, use this one for getting more info on [questionnaire](../questionnaires/).
`quby_key`            | `string`  | Key identifying the actual questionnaire definition (one quby key can be used in multiple roqua questionnaires, but will have exact same questions)
`name`                | `string`  | The name of the questionnaire, as shown when preparing responses.


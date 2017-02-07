---
title: Protocols
status: draft
---

* TOC
{:toc}

A protocol is a group of questionnaires that users can prepare. They are divided into measurements.

There are two flavors of protocols.
Normal protocol are not much more than simple lists of questionnaires that you can prepare for the user by hand.
Automatic protocols can be subscribed to, to fill out questionnaire every month or even multiple times a day, see [protocol subscriptions](/developer/rom/dossier/protocol_subscriptions/).

## Get a single protocol

    GET /api/v1/protocols/:id

### Response

<%= snapshot_response('rom', 'protocols_show') %>

### Response Attributes

Name                  | Type      | Description
----------------------|-----------|--------------
`id`                  | `integer` | Id uniquely identifying the protocol.
`name`                | `string`  | The name of the protocol, as shown when preparing answers
`description`         | `string`  | Blob of text what the protocol is for
`active`              | `boolean` | If false, the protocol doesn't show up in the interface.
`automatic`           | `boolean` | true for automatic protocols, we don't show settings (yet).
`measurements`        | `array`   | array of hashes of format [measurements](/developer/rom/global/measurements/).


## Get a all protocols

    GET /api/v1/protocols

Returns an array of protocols, each with the same data as show.
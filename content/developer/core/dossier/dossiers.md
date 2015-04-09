---
title: Dossiers
status: draft
---

## Get all the dossiers the user has access to

    GET /api/v1/dossiers

### Response

<%= headers 200 %>
<%= json headers: ['id', 'birth_year', 'gender', 'firstname', 'lastnameid'],
         rows: [['59abe42d-ad25-4273-95ef-86444705e8d3', 1980, 'M', 'john', 'doe']]
%>


## Search for dossiers

    GET /api/v1/dossiers?name=john+doe
    GET /api/v1/dossier_groups/:dossier_group_id/dossiers?external_identifier=some_id

When searching for a name, all the words need to match complete words in either in firstname or lastname, but order and casing is unimportant.

When searching for external_identifier, the dossier_group must be specified, since they are only garanteed unique within a dossier_group.

### Response

Same as index.


## Create a dossier

    POST /api/v1/dossier_groups/:dossier_group_id/dossiers

### Parameters

Name      | Type   | Description
----------|--------|--------------
`dossier` | `hash` | Dossier info.
`person`  | `hash` | Info of the person the dossier is about.

#### Dossier info

Name                  | Type   | Description
----------------------|--------|--------------
`external_identifier` | `string` | Id from epd or other source the patient is identified from.

#### Person info

Name                  | Type   | Description
----------------------|--------|--------------
`firstname`        | `string` |
`lastname`         | `string` |
`initials`         | `string` |
`email`            | `string` |
`phone_home`       | `string` |
`phone_work`       | `string` |
`phone_cell`       | `string` |
`birthdate`        | `string` | '1980-02-23'
`gender`           | `string` | 'M' for Male, 'F' for Female.
`country_of_birth` | `string` |
`street`           | `string` |
`city`             | `string` |
`zipcode`          | `string` |
`country`          | `string` |
`subject_code`     | `string` | Code used for research to retrieve the anonymous data of the client.

### Response

<%= headers 200 %>
<%= json id: '59abe42d-ad25-4273-95ef-86444705e8d3' %>

---
title: People
status: draft
---

## Rights

To view/edit a person you need the correct role and rights.

- Users with the role of 'professional' have access to all the people under the dossier_groups they have access to.
- Users with the role of 'admin' have access to people with the role professional under the organizations they have access to.
- Users have access to the person tied to their credential.

## Get all the people under a dossier

    GET /api/v1/dossiers/:dossier_id/people

### Response

<%= headers 200 %>
<%= json "people"=>
  [{"id"=>"ce53e53c-d062-4802-8a58-7b3703aa4150",
    "role"=>"patient",
    "firstname"=>"grip",
    "lastname"=>"patient",
    "initials"=>nil,
    "email"=>nil,
    "phone_home"=>nil,
    "phone_work"=>nil,
    "phone_cell"=>nil,
    "birthdate"=>nil,
    "gender"=>'M',
    "country_of_birth"=>nil,
    "address_type"=>nil,
    "street"=>nil,
    "city"=>nil,
    "zipcode"=>nil,
    "country"=>nil,
    "subject_code"=>nil}] %>


## Get a single person

    GET /api/v1/people/:person_id

### Response

<%= headers 200 %>
<%= json "person"=>
  {"id"=>"ce53e53c-d062-4802-8a58-7b3703aa4150",
   "role"=>"patient",
   "firstname"=>"grip",
   "lastname"=>"patient",
   "initials"=>nil,
   "email"=>nil,
   "phone_home"=>nil,
   "phone_work"=>nil,
   "phone_cell"=>nil,
   "birthdate"=>nil,
   "gender"=>'F',
   "country_of_birth"=>nil,
   "address_type"=>nil,
   "street"=>nil,
   "city"=>nil,
   "zipcode"=>nil,
   "country"=>nil,
   "subject_code"=>nil} %>


## Update a person

    PATCH /api/v1/people/:person_id

### Parameters

Name      | Type   | Description
----------|--------|--------------
`person`  | `hash` | Hash of person attributes to set.

#### Person info

Role and id are readonly, the rest are simple self-explanatory strings.

Name               | Type     | Description
-------------------|----------|--------------
`birthdate`        | `string` | '1980-02-23'
`gender`           | `string` | 'M' for male, 'F' for female.
`subject_code`     | `string` | Code used for research to retrieve the anonymous data of the client.

### Response

<%= json "person"=>
  {"id"=>"ce53e53c-d062-4802-8a58-7b3703aa4150",
   "role"=>"patient",
   "firstname"=>"grip",
   "lastname"=>"patient",
   "initials"=>nil,
   "email"=>nil,
   "phone_home"=>nil,
   "phone_work"=>nil,
   "phone_cell"=>nil,
   "birthdate"=>nil,
   "gender"=>'F',
   "country_of_birth"=>nil,
   "address_type"=>nil,
   "street"=>nil,
   "city"=>nil,
   "zipcode"=>nil,
   "country"=>nil,
   "subject_code"=>nil} %>

## Send an invite

    POST /api/v1/people/:person_id/send_invite_email

### Parameters

Name            | Type     | Description
----------------|----------|--------------
`email_subject` | `string` |
`email_body`    | `string` | Needs to contain `%create_account_link%` for where invite the link should go.

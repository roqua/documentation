---
title: Non-response
---

* TOC
{:toc}

For various reasons, patients will not always want to participate in ROM. This is recorded in the responses files as a number in the `questkey_non_response` column:

<%= csv <<-CSV
"roqua_id";"patient_id";"...";"ors_id";"...";"ors_non_response";"..."
"";"1234";"...";"167";"...";"37";"..."
CSV
%>

If a value is present in this column, it means that the patient either did not get contacted for a ROM measurement, did not reply, or did not want to complete the measurement. If the column is empty, it means that either the response was completed, or is still pending completion.

This number can be traced to the `nonrespons/nonrespons.json` in the downloaded export. This file contains a list of all recorded non-responses. This is stored in a seperate file since multiple entries in the CSV can have the same non-response identifier (because non-response can be registerd for multiple questionnaires at once).

<%= json [
  {
    "id" => 37,
    "timestamp" => "2014-06-18T00:02:45.000+02:00",
    "data" => {
      "reden_non_respons" => "Patient is wel benaderd voor de ROM meting, maar: Patient retourneert meetinstrument niet."
    }
  },
  {
    "id" => 38,
    "timestamp" => "2014-06-19T02:00:00.000+02:00",
    "data" => {
      "reden_non_respons" => "Patient is niet benaderd voor de ROM meting, omdat: Andere reden, namelijk:",
      "andere_reden" => "Foo bar"
    }
  }
]
%>

### Attributes

Name                     | Type      | Description
-------------------------|-----------|--------------
`id`                     | `integer` | Identifier as represented in the CSV export.
`timestamp`              | `string`  | An ISO 8601 formatted string that indicates for which date and time a non-response has been recorded.
`data.reden_non_respons` | `string`  | Textual reason for this non-response
`data.andere_reden`      | `string`  | *Optional* Anything the user entered in a free text field for reasons that were not built-in

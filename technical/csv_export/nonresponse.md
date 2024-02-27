---
title: Non-response
---

For various reasons, patients will not always want to participate in ROM. This is recorded in the responses files as a number in the `questkey_non_response` column:

```csv
"roqua_id";"patient_id";"...";"ors_id";"...";"ors_non_response";"..."
"";"1234";"...";"167";"...";"2";"..."
```

If a value is present in this column, it means that the patient either did not get contacted for a ROM measurement, did not reply, or did not want to complete the measurement. If the column is empty, it means that either the response was completed, or is still pending completion.

This number can be traced to the `nonrespons/nonrespons.json` in the downloaded export. This file contains a list of all recorded non-responses. This is stored in a seperate file since multiple entries in the CSV can have the same non-response identifier (because non-response can be registered for multiple questionnaires at once).

```json
[
  {
    "id": 1,
    "timestamp": "2015-09-24T00:00:00.000+02:00",
    "reden_non_respons": "Patiënt is wel benaderd voor de ROM meting, maar: Patiënt is niet in staat tot responderen.",
    "reason_group": "Patiënt is wel benaderd voor de ROM meting, maar:",
    "reason_code": "02",
    "reason_option": "Patiënt is niet in staat tot responderen.",
    "reason_other": "",
    "data": {
      "reden_non_respons": "Patiënt is wel benaderd voor de ROM meting, maar: Patiënt is niet in staat tot responderen.",
      "reason_group": "Patiënt is wel benaderd voor de ROM meting, maar:",
      "reason_code": "02",
      "reason_option": "Patiënt is niet in staat tot responderen.",
      "reason_other": ""
    }
  },
  {
    "id": 2,
    "timestamp": "2015-09-24T00:00:00.000+02:00",
    "reden_non_respons": "Patiënt is niet benaderd voor de ROM meting, omdat: Andere reden, namelijk:",
    "reason_group": "Patiënt is niet benaderd voor de ROM meting, omdat:",
    "reason_code": "10",
    "reason_option": "Andere reden, namelijk:",
    "reason_other": "another reason people can specify",
    "data": {
      "reden_non_respons": "Patiënt is niet benaderd voor de ROM meting, omdat: Andere reden, namelijk:",
      "andere_reden": "another reason people can specify",
      "reason_group": "Patiënt is niet benaderd voor de ROM meting, omdat:",
      "reason_code": "10",
      "reason_option": "Andere reden, namelijk:",
      "reason_other": "another reason people can specify"
    }
  }
]
```

### Attributes

Name                     | Type      | Description
-------------------------|-----------|--------------
`id`                | `integer` | Identifier as represented in the CSV export
`timestamp`         | `string`  | An ISO 8601 formatted string that indicates for which date and time a non-response has been recorded.
`reden_non_respons` | `string`  | Human readable reason for this non-response
`reason_group     ` | `string`  | Part of the human readable reason for this non-response
`reason_code`       | `string`  | SBG compliant non response code suitable for automation, see table for details
`reason_option`     | `string`  | Part of the human readable reason for this non-response
`reason_other`      | `string`  | *Optional* Anything the user entered in a free text field for reasons that were not built-in
`data`              | `json object`  | *Deprecated* 

### Non response codes

Code | Corresponding reden_non_respons
----|------------
01  | Patiënt is wel benaderd voor de ROM meting, maar: Patiënt weigert meting.
02  | Patiënt is wel benaderd voor de ROM meting, maar: Patiënt is niet in staat tot responderen.
02a | Patiënt is wel benaderd voor de ROM meting, maar: Patiënt is niet in staat tot responderen <i>vanwege taal</i>.
02b | Patiënt is wel benaderd voor de ROM meting, maar: Patiënt is niet in staat tot responderen <i>vanwege de ernst van de stoornis</i>.
03  | Patiënt is wel benaderd voor de ROM meting, maar: Patiënt is (herhaaldelijk) niet verschenen op de afspraak voor de meting.
04  | Patiënt is wel benaderd voor de ROM meting, maar: Patiënt retourneert meetinstrument niet.
05  | Patiënt is wel benaderd voor de ROM meting, maar: Meetinstrument is incompleet of onjuist ingevuld.
06  | Patiënt is niet benaderd voor de ROM meting, omdat: Patiënt niet in staat werd geacht tot responderen
06a | Patiënt is niet benaderd voor de ROM meting, omdat: Patiënt niet in staat werd geacht tot responderen <i>vanwege taal</i>.
06b | Patiënt is niet benaderd voor de ROM meting, omdat: Patiënt niet in staat werd geacht tot responderen <i>vanwege de ernst van de stoornis</i>.
07  | Patiënt is niet benaderd voor de ROM meting, omdat: Er geen actie is ondernomen door de behandelaar/assessor.
08  | Patiënt is niet benaderd voor de ROM meting, omdat: Er geen evalueerbare behandeling is uitgevoerd (crisis, diagnostiek, ultrakorte &#39;behandeling&#39;, etc.).
09  | Patiënt is niet benaderd voor de ROM meting, omdat: De behandeling niet regulier is afgerond.
09a | Patiënt is niet benaderd voor de ROM meting, omdat: De behandeling niet regulier is afgerond <i>vanwege overlijden van de patiënt</i>.
09b |  Patiënt is niet benaderd voor de ROM meting, omdat: De behandeling niet regulier is afgerond <i>door eenzijdig staken van de behandeling door de patiënt</i>.
10 | Patiënt is niet benaderd voor de ROM meting, omdat: Andere reden, namelijk:

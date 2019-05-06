---
title: Questionnaires
---

* TOC
{:toc}

## Get a single questionnaire

    GET /api/v1/questionnaires/:key

### Optional GET params:

- `use_legacy_keys` (default: `true` *Will change!*): Prepend question keys with the questionnaire name instead of `v_`.
  - If you want to associate the questionnaire with a response, `false` is recommended, because the `responses` endpoint uses `v_` prefixes as well.
  - In the future, `use_legacy_keys=false` will become default.

### Response (with `use_legacy_keys=false`)

<%= headers 200 %>
<%= json questionnaire: {
    id: 116,
    key: "example",
    name: "Example",
    description: "(volwassenen)",
    short_description: "Health of the Nations Outcome Scales",
    questions: {
      v_1: {
        title: "1. Hoe vaak heeft u last van X?",
        type: "radio",
        options: {
          a1: {value: 0, description: "Nooit"},
          a2: {value: 1, description: "Zelden"},
          a3: {value: 2, description: "Regelmatig"},
          a4: {value: 3, description: "Vaak"},
          a5: {value: 4, description: "Voortdurend"},
          a9: {value: 9, description: "Niet van toepassing"}
        }
      },
      v_2: {
        title: "2. Hoe vaak heeft u last van Y?",
        type: "radio",
        options: {
          a1: {value: 0, description: "Nooit"},
          a2: {value: 1, description: "Zelden"},
          a3: {value: 2, description: "Regelmatig"},
          a4: {value: 3, description: "Vaak"},
          a5: {value: 4, description: "Voortdurend"},
          a9: {value: 9, description: "Niet van toepassing"}
        }
      }
    },
    scores: {
      tot:  {label: "Somscore"},
      gedr: {label: "Problemen"},
      bep:  {label: "Dingen"}
    },

    sbg_info: {
      sbg_key: "example_sbg_key",
      questions: {
        "1": "v_1",
        "2": "v_3"
      },
      scores: {
        totaalscoreMeting: "to"
      }
    }
  }
 %>

### Response Attributes

Name                  | Type          | Description
----------------------|---------------|--------------
`sbg_info`            | `hash`/`null` | Null if not an sbg questionnaire.

### sbg_info

Name                  | Type          | Description
----------------------|---------------|--------------
`sbg_key`             | `string`      | The name the SBG gave to the questionnaire.
`questions`           | `hash`        | From sbg identifier to roqua identifier (use_legacy_keys dependent).
`scores`              | `hash`        | From sbg identifier to roqua identifier.

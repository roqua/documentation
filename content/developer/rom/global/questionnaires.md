---
title: Questionnaires
---

* TOC
{:toc}

## Get a single questionnaire

    GET /api/v1/questionnaires/:key

### Response

<%= headers 200 %>
<%= json questionnaire: {
    id: 116,
    key: "example",
    name: "Example",
    description: "(volwassenen)",
    short_description: "Health of the Nations Outcome Scales",
    questions: {
      example_1: {
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
      example_2: {
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
      key: "example_sbg_key",
      questions: {
        example_sbg_question_key_1: "example_1",
        example_sbg_question_key_2: "example_2"
      },
      scores: {
        example_sbg_score_key_tot: "tot",
        example_sbg_score_key_gedr: "gedr",
        example_sbg_score_key_bep: "bep"
      }
    }
  }
 %>

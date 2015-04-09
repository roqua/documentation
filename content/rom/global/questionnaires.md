---
title: Questionnaires
status: draft
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
    }
  }
 %>
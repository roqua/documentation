---
title: Lifely API guide
---

* TOC
{:toc}

## Configuratie

    ROQUA_CORE_API_USERNAME
    ROQUA_CORE_API_PASSWORD
    ROQUA_ROM_API_USERNAME
    ROQUA_ROM_API_PASSWORD
    ROQUA_DOSSIER_GROUP_ID

## Stap 1: dossier aanmaken

Als eerste stap wordt bij aanmelding een call gedaan om een dossier te openen. Hierbij wordt het ROQUA_DOSSIER_ID die ontvangen is van het Espria Ledenpanel doorgestuurd zodat dit later te koppelen is.

[Full API Docs](/developer/core/dossier/dossiers/)

### Request

    POST https://core.roqua.nl/api/v1/dossier_groups/ROQUA_DOSSIER_GROUP_ID/dossiers
    {
      'dossier': {
        'external_identifier': ':espria_id'
      }
    }

### Response

<%= headers 200 %>
<%= json id: '59abe42d-ad25-4273-95ef-86444705e8d3' %>





## Stap 2: protocol subscription starten

Daarna wordt er een protocol subscription gestart. Dit zorgt er voor dat er responses worden klaargezet op de volgens het protocol vastgestelde momenten. Relevante parameters hier zijn de `protocol_key` (vast gegeven) en de `start_at`. De `start_at` geeft de datum en tijd aan van de eerste ochtendmeting, als unix timestamp. In dit geval moet de tijd door Lifely worden berekend op basis van de aan de gebruiker gevraagde bedtijd.

RoQua geeft in de JSON terug een lijst van `responses`. Elke response heeft een `open_from` en `open_till` die aangeven wat de wenselijke timeframe is waarbinnen een gebruiker mag (beginnen met) invullen.

[Full API Docs](/developer/rom/dossier/protocol_subscriptions/#start-a-protocol-subscription)

### Request

    POST https://leefplezier.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/protocol_subscriptions/
    {
      'protocol_key': 'leefplezier_diary',
      'start_at': 1414604287
    }

### Response

(Sommige extra JSON-velden weggelaten in deze guide. Geplande tijd tussen responses is fictief.)

<%= headers 200 %>
<%= json \
  id: 123,
  responses: [
    {
      "id"                 => 1,
      "questionnaire_key"  => "leefplz_db",
      "status"             => "scheduled",
      "open_from"          => "2014-11-23T09:40:20+00:00+0200",
      "open_till"          => "2014-11-23T10:10:20+00:00+0200"
    },
    {
      "id"                 => 2,
      "questionnaire_key"  => "leefplz_db",
      "status"             => "scheduled",
      "open_from"          => "2014-11-23T12:40:20+00:00+0200",
      "open_till"          => "2014-11-23T13:10:20+00:00+0200"
    },
    {
      "id"                 => 3,
      "questionnaire_key"  => "leefplz_db",
      "status"             => "scheduled",
      "open_from"          => "2014-11-23T21:40:20+00:00+0200",
      "open_till"          => "2014-11-23T22:10:20+00:00+0200"
    },
    {
      "id"                 => 4,
      "questionnaire_key"  => "leefplz_db",
      "status"             => "scheduled",
      "open_from"          => "2014-11-24T09:40:20+00:00+0200",
      "open_till"          => "2014-11-24T10:10:20+00:00+0200"
    },
    {
      "id"                 => 5,
      "questionnaire_key"  => "leefplz_db",
      "status"             => "scheduled",
      "open_from"          => "2014-11-24T12:40:20+00:00+0200",
      "open_till"          => "2014-11-24T13:10:20+00:00+0200"
    },

    'etc', 'etc', 'etc'
  ]
%>





## Stap 3: Ingevulde data terugsturen

Ingevulde data die op Lifely's servers is ontvangen kan worden teruggepost naar RoQua. Omdat deze operatie stiekem een upsert is (update OR insert if not found) moet zowel de `id` als de `questionnaire_key` van de response worden opgestuurd. De `questionnaire_key` is echter altijd `"leefplz_db"`.

Daarnaast wordt de `started_at` en `filled_out_at` opgestuurd. Dit zijn de Unix timestamps van de moment dat de vragenlijst getoond respectievelijk voltooid werd.

Onder `answer_data` worden de waarden opgestuurd.

[Full API Docs](/developer/rom/dossier/responses/#update-a-response)

### Request

    PUT https://leefplezier.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/responses/ROQUA_RESPONSE_ID
    {
        "questionnaire_key": "leefplz_db",
        "started_at": 1414604287,
        "filled_out_at": 1414604400,
        "answer_data": {"v_1" => "a1", "v_2" => 24}
    }


## Stap 3a: Gemiste data melden

Deze API wordt nog gemaakt door RoQua. Zal gaan lijken op de vorige, maar dan met andere parameters (iets als `"non_response": true` in plaats van `answer_data` wellicht).





## Af en toe: Vragenlijst-definitie ophalen

Dit wordt af en toe gedaan om de vragen te syncen met onze definitie. Daarna moet telkens worden nagekeken of er geen nieuwe vraagtypes zijn opgenomen die de weergave-module van Lifely's app niet snapt.

### Request

    GET https://leefplezier.roqua.nl/api/v1/questionnaires/leefplz_db

### Response

(Zie volledige docs)

<%= headers 200 %>
<%= json questionnaire: {id: 1, questions: {v_1: {}, v_2: {}}} %>



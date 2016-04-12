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

Als eerste stap wordt bij aanmelding een call gedaan om een dossier te openen.

[Full API Docs](/developer/core/dossier/dossiers/)

### Request

    POST https://core.roqua.nl/api/v1/dossier_groups/ROQUA_DOSSIER_GROUP_ID/dossiers
    {
      "dossier": {
      // Iets met credentials moet hierin? Hoe checked lifely op dit moment of een account al bestaat?
      },
      "person": {
        "birthdate": "1980-02-23",
        "email": "jan@gmail.com",
        "zipcode": "1602",
        "gender": "M"
      },
      "credential": {
        "username": 'jan@gmail.com', 
        "password": '12345678', 
        "password_confirmation": '12345678'},
    }

Als het dossier id nog niet bestaat wordt er eentje aangemaakt met daarin `email`, `birthdate`, `zipcode`, `gender` (alle gegevens die via het formulier in de app opgegeven worden). Daarnaast wordt er een `credential` mee gegeven, met daarin de `username` (email) en het `password` (de de `password_confirmation` daarvan) van de gebruiker.

### Response

<%= headers 200 %>
<%= json id: '59abe42d-ad25-4273-95ef-86444705e8d3' %>

- __Statuscode 422__ - als de gegeven input niet correct is (`password != password_confirmation` etc)
- __Statuscode XXX__ - als de `username` al bestaat.



## Stap 2a: protocol subscription starten

Daarna wordt er een protocol subscription gestart. Dit zorgt er voor dat er responses worden klaargezet op de volgens het protocol vastgestelde momenten. Relevante parameters hier zijn de `protocol_key` (vast gegeven), de `start_at`, de `textvars` en de `flags`. De `start_at` geeft de datum en tijd aan van de eerste ochtendmeting, als unix timestamp. In dit geval moet de tijd door Lifely worden berekend op basis van de aan de gebruiker gevraagde bedtijd. De `textvars` worden gebruikt om de gebruiker de mogelijkheid te geven om zelf een vraag te verzinnen. Hiervoor maken we altijd gebruik van dezelfde key, de `persoonlijke_vraag` key. Daarnaast moeten er nog `flags` meegegeven worden. Deze flags worden gebruikt om delen van de vragenlijst aan en uit te zetten. Bij deze flags is het belangrijk om altijd de 1e flag (`v2`) op true mee te geven. Op deze manier kunnen wij in de backend op een nette en eenvoudige manier onderscheid maken tussen de verschillende vragenlijst versies.

RoQua geeft in de JSON terug een lijst van `responses`. Elke response heeft een `open_from` en `open_till` die aangeven wat de wenselijke timeframe is waarbinnen een gebruiker mag (beginnen met) invullen. Daarnaast worden ook de opgegeven `flags` en `textvars` terug gegeven.

[Full API Docs](/developer/rom/dossier/protocol_subscriptions/#start-a-protocol-subscription)

### 2a.1 Request

    POST https://leefplezier.rom.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/protocol_subscriptions/
    {
      "protocol_key": "leefplezier_diary",
      "start_at": 1414604287
      "textvars": {
        "persoonlijke_vraag": "gepunnikt"
      },
      "flags": {
        "v2": true,
        "thema_1_slaap": true,
        "thema_2_beweging": false,
        "thema_3_lichaam": true,
        "thema_4_gedachten": false,
        "thema_5_sociaal": true,
        "thema_6_omgeving": false,
        "thema_7_mindfulness": false,
        "thema_8_betekenis": false
      }
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

Daarnaast moet er om een protocol subscription te starten ook een call naar Leefplezier gedaan worden. Deze call hoeft alleen het `protocol_subscription_id` en het `dossier_id` te bevatten. 

### 2a.2 Request

    POST https://leefplezier.nu/api/v1/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/subscription

Deze call moet gedaan worden op het moment dat een participant zich inschrijft nadat de protocol_subscription op RoQua is gestart.

## Stap 2b: protocol subscription stoppen

Om de protocol subscription te stoppen moet er een delete gestuurd worden naar RoQua, met daarin het `roqua_dossier_id` en het `protocol_subscription_id` van het protocol dat gestopt moet worden.
    
### 2b.1 Request

    DELETE https://leefplezier.rom.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/protocol_subscriptions/ROQUA_RESPONSE_ID

Daarnaast moet er om een protocol subscription te stoppen ook een call naar Leefplezier gedaan worden. Deze call hoeft alleen het `protocol_subscription_id` en het `dossier_id` te bevatten. 

### 2b.2 Request

    DELETE https://leefplezier.nu/api/v1/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/subscription

Deze call moet gedaan worden op het moment dat een participant zich uitschrijft van de studie of opnieuw begint (bij opnieuw beginnen moet ook weer de `POST` in stap 2a weer worden aangeroepen).

## Stap 3: Ingevulde data terugsturen

Ingevulde data die op Lifely's servers is ontvangen kan worden teruggepost naar RoQua. Omdat deze operatie stiekem een upsert is (update OR insert if not found) moet zowel de `id` als de `questionnaire_key` van de response worden opgestuurd. De `questionnaire_key` is echter altijd `"leefplz_db"`.

Daarnaast wordt de `started_at` en `filled_out_at` opgestuurd. Dit zijn de Unix timestamps van de moment dat de vragenlijst getoond respectievelijk voltooid werd.

*Let op:* Ingevulde data kan maximaal 1 dag na de `open_from` (dus in de toekomst) worden opgestuurd (gemeten aan de hand van de tijd die de server hanteert). Als er wordt getracht metingen op te sturen die meer dan 1 dag in de toekomst liggen dan zal de server een 422: Unprocessable Entity terugsturen.

Onder `answer_data` worden de waarden opgestuurd.

[Full API Docs](/developer/rom/dossier/responses/#update-a-response)

### Request

    PUT https://leefplezier.rom.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/responses/ROQUA_RESPONSE_ID
    {
        "questionnaire_key": "leefplz_db",
        "started_at": 1414604287,
        "filled_out_at": 1414604400,
        "answer_data": {"v_1": "a1", "v_2": 24}
    }

## Stap 3a: Gemiste data melden

Deze API wordt nog gemaakt door RoQua. Zal gaan lijken op de vorige, maar dan met andere parameters (iets als `"non_response": true` in plaats van `answer_data` wellicht).

Update: Nick zegt dat gemiste metingen niet worden opgestuurd naar RoQua. 

## Stap 4: Resultaten berekenen en ophalen
Base url = https://leefplezier.nu
Prefix = /leefplezier/api/v1

The API only supports GET requests and uses basic auth.


### Routes

POST `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/calculate`

- Deze route moet worden aangeroepen door de lifely backend nadat de laatste metingen naar RoQua gestuurd zijn, dus wanneer besloten wordt dat alle missende metingen daadwerkelijk missing zijn.
- __Statuscode 404__ - als een `listresponses naar RoQua geen dagboekstudie terug geeft voor de opgegeven gebruiker.
- __Statuscode 202__ - als de calculate al eerder aangeroepen was voor deze deelnemer/dagboekstudie combinatie, en de berekening nog steeds bezig is.
- __Statuscode 200__ - als alles goed gaat. Als de calculate aangeroepen wordt voor een deelnemer/dagboekstudie combinatie die al resultaten heeft, dan worden de resultaten opnieuw berekend.

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/voormeting.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker de voormeting nog niet heeft ingevuld.
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer. 

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/welbevinden.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<3 metingen verspreid over 3 dagen), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 3 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer. 

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/persoonlijke_vraag.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<3 metingen verspreid over 3 dagen), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 7 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer. 

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/dag_affect.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (minimaal 1 meting), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 14 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer. 

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/plezierigheid.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<3 metingen verspreid over 3 dagen), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 21 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer. 

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/voorspellend_netwerk.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (75% van de metingen), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 30 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer, of als Autovar geen model kon vinden voor deze deelnemer. 

GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/top_networks.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (75% van de metingen), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 30 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, en dus nog niet is opgepikt door de dagelijkse resultaten berekening en er nog geen calculate is aangeroepen voor deze deelnemer, of als Autovar geen model kon vinden voor deze deelnemer. 

### Example use

__URL__
`https://lifely_staging:api_secret@staging.leefplezier.nu/leefplezier/api/v1/dossier/123/protocol_subscriptions/abc/results/welbevinden.svg`

__CURL__
SVG example:
```bash
curl -X GET --user lifely_staging:api_secret https://staging.leefplezier.nu/leefplezier/api/v1/dossier/123/protocol_subscriptions/abc/results/welbevinden.svg
```

JSON example:
```bash
curl https://lifely_staging:api_secret@staging.leefezier.nu/leefplezier/api/v1/dossier/123/protocol_subscriptions/abc/results/top_networks.json
```

Returns: 
```json
["Meer onrust werd gevolgd door meer piekeren","Meer onrust werd gevolgd door minder concentratievermogen","Meer onrust werd gevolgd door minder opgewektheid"
```



## Af en toe: Vragenlijst-definitie ophalen

Dit wordt af en toe gedaan om de vragen te syncen met onze definitie. Daarna moet telkens worden nagekeken of er geen nieuwe vraagtypes zijn opgenomen die de weergave-module van Lifely's app niet snapt.

### Request

    # Dagboeklijst
    GET https://leefplezier.rom.roqua.nl/api/v1/questionnaires/leefplz_db
    
    # Voormeting
    GET https://leefplezier.rom.roqua.nl/api/v1/questionnaires/leefplz_vm

### Response

(Zie volledige docs)

<%= headers 200 %>
<%= json questionnaire: {id: 1, questions: {v_1: {}, v_2: {}}} %>



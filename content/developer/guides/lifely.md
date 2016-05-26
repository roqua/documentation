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
      // Iets met credentials moet hierin? Hoe checkt lifely op dit moment of een account al bestaat?
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

Daarna wordt er een protocol subscription gestart. Dit zorgt er voor dat er responses worden klaargezet op de volgens het protocol vastgestelde momenten. Relevante parameters hier zijn de `protocol_key` (vast gegeven), de `start_at`, de `textvars` en de `flags`. De `start_at` geeft de datum en tijd aan van de eerste ochtendmeting, als unix timestamp. In dit geval moet de tijd door Lifely worden berekend op basis van de aan de gebruiker gevraagde bedtijd. De `textvars` worden gebruikt om de gebruiker de mogelijkheid te geven om zelf een vraag te verzinnen. Hiervoor maken we altijd gebruik van dezelfde key, de `leefplz_db_persoonlijke_vraag` key. Daarnaast moeten er nog `flags` meegegeven worden. Deze flags worden gebruikt om delen van de vragenlijst aan en uit te zetten. Bij deze flags is het belangrijk om altijd de 1e flag (`leefplz_db_v2`) op true mee te geven. Op deze manier kunnen wij in de backend op een nette en eenvoudige manier onderscheid maken tussen de verschillende vragenlijst versies.

RoQua geeft in de JSON terug een lijst van `responses`. Elke response heeft een `open_from` en `open_till` die aangeven wat de wenselijke timeframe is waarbinnen een gebruiker mag (beginnen met) invullen. Daarnaast worden ook de opgegeven `flags` en `textvars` terug gegeven. Let er op dat de flags en textvars altijd geprefixed zijn met de naam van de vragenlijst (`leefplz_db_` of `leefplz_d2_`).

[Full API Docs](/developer/rom/dossier/protocol_subscriptions/#start-a-protocol-subscription)

### 2a.1 Request

    POST https://leefplezier.rom.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/protocol_subscriptions/
    {
      "protocol_key": "leefplezier_diary",
      "start_at": 1414604287
      "textvars": {
        "leefplz_db_persoonlijke_vraag": "gepunnikt"
      },
      "flags": {
        "leefplz_db_v2": true,
        "leefplz_db_thema_1_slaap": true,
        "leefplz_db_thema_2_beweging": false,
        "leefplz_db_thema_3_lichaam": true,
        "leefplz_db_thema_4_gedachten": false,
        "leefplz_db_thema_5_sociaal": true,
        "leefplz_db_thema_6_omgeving": false,
        "leefplz_db_thema_7_mindfulness": false,
        "leefplz_db_thema_8_betekenis": false
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

## Stap 3: Een voormeting starten
Voordat er data gepushed kan worden naar een voormeting moet er een voormeting gestart worden op RoQua. Allereerst moet er een _fill out request_ gestart worden. Dit kan gedaan worden met de volgende call:

    POST https://leefplezier.rom.roqua.nl/api/v1/dossiers/ROQUA_DOSSIER_ID/fill_out_requests/
    {
        "fill_out_request": {
            "questionnaire_keys": ["leefplz_vm"]
        }
    }

<%= snapshot_response('rom', 'fill_out_requests_create') %>

Om antwoorden terug te sturen naar de API moet op dit moment nog de `response_id` uit de `responses.json` gehaald worden. Deze kan opgehaald worden door een call te doen naar de responses API, en daarbij de filteren op questionnaire key en opened status. Zie hiervoor ook zie stap 2.a en de [RoQua docs](http://docs.roqua.net). Het is best om deze call te doen vlak voor het posten van de daadwerkelijke data (dus nadat de gebruiker zijn of haar meting heeft ingevuld. Op die manier is het nagenoeg onmolgelijk om een 422: unprocessable entity terug te krijgen.

## Stap 4: Ingevulde data terugsturen

Ingevulde data die op Lifely's servers is ontvangen kan worden teruggepost naar RoQua. Omdat deze operatie stiekem een upsert is (update OR insert if not found) moet zowel de `id` als de `questionnaire_key` van de response worden opgestuurd. De `questionnaire_key` is echter altijd `"leefplz_db"` voor de dagboekmetingen en `"leefplz_vm"` voor de voormeting.

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


## Stap 4a: Gemiste data melden

Deze API wordt nog gemaakt door RoQua. Zal gaan lijken op de vorige, maar dan met andere parameters (iets als `"non_response": true` in plaats van `answer_data` wellicht).

Update: Nick zegt dat gemiste metingen niet worden opgestuurd naar RoQua.

## Stap 5: Resultaten berekenen en ophalen
Base url = https://leefplezier.nu
Prefix = /leefplezier/api/v1

The API gebruikt basic auth om de authenticatie te doen,

### Routes

#### Results overzicht route
Naast het ophalen van de daadwerkelijke resultaten is het ook mogelijk om een JSON met daarin een overzicht van een deelnemer te krijgen, waarin staat welke resultaten op dit moment unlocked zijn en welke beschikbaar zijn om te laten zien in de app. Hiervoor moet de volgende call gedaan worden:

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results.json`
```json
  {
	"voormeting.svg": {
		"unlocked": true,
		"unlocked_from": "1970-01-01",
		"changed_at": null,
		"enough_measurements": true
	},
	"welbevinden.svg": {
		"unlocked": true,
		"unlocked_from": "2016-04-19",
		"changed_at": "2016-04-21T02:01:23.094+02:00",
		"enough_measurements": true
	},
	"persoonlijke_vraag.svg": {
		"unlocked": false,
		"unlocked_from": "2016-04-23",
		"changed_at": "2016-04-21T02:01:23.094+02:00",
		"enough_measurements": false
	},
	"gevoelens.svg": {
		"unlocked": false,
		"unlocked_from": "2016-04-30",
		"changed_at": "2016-04-21T02:01:23.094+02:00",
		"enough_measurements": false
	},
	"plezierigheid.svg": {
		"unlocked": false,
		"unlocked_from": "2016-05-07",
		"changed_at": "2016-04-21T02:01:23.094+02:00",
		"enough_measurements": false
	},
	"top_networks.svg": {
		"unlocked": false,
		"unlocked_from": "2016-05-16",
		"changed_at": null,
		"enough_measurements": false
	},
	"voorspellend_netwerk.svg": {
		"unlocked": false,
		"unlocked_from": "2016-05-16",
		"changed_at": null,
		"enough_measurements": false
	}
}
```

In deze JSON staan de velden: `unlocked`, `unlocked_from`, `changed_at` en `enough_measurements`. Het eerste veld, `unlocked` geeft aan of de deelnemer lang genoeg met de dagboekstudie bezig is om resultaten te kunnen krijgen (voor deze grafiek). Het tweede veld, `unlocked_from` geeft aan vanaf wanneer de grafiek beschikbaar is / was. Voor resultaten die altijd al beschikbaar zouden zijn (en dus niet unlocked hoefden te worden) geven we altijd 1 januari 1970 terug. Het derde veld, `changed_at`, kan gebruikt worden om te kijken wanneer een grafiek voor het laatst geupdate is. Hier zou je lokaal een cache van kunnen bij houden, en wanneer de results.json aangeeft dat de grafiek gechanged is hem lokaal up te daten. Het laatste veld, `enough_measurements`, geeft aan of er voldoende metingen voor de grafiek zijn, en of deze voldoende zijn verspreid over een aantal dagen. Wanneer zowel `unlocked` en `enough_measurements` `true` zijn is het mogelijk om resultaten op te halen van de API. Als één van deze velden nog niet `true` is, is dit niet mogelijk en wordt er een fout code gegeven.


#### Result Routes
    POST `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/calculate`

Deze route moet worden aangeroepen door de lifely backend nadat de laatste metingen naar RoQua gestuurd zijn, dus wanneer besloten wordt dat alle missende metingen daadwerkelijk missing zijn.
- __Statuscode 200__ - als alles goed gaat. Als de calculate aangeroepen wordt voor een deelnemer/dagboekstudie combinatie die al resultaten heeft, dan worden de resultaten opnieuw berekend.
- __Statuscode 202__ - als de calculate al eerder aangeroepen was voor deze deelnemer/dagboekstudie combinatie, en de berekening nog steeds bezig is.
- __Statuscode 404__ - als een `listresponses naar RoQua geen dagboekstudie terug geeft voor de opgegeven gebruiker.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/voormeting.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker de voormeting nog niet heeft ingevuld.
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, dwz er is nog geen /calculate aangeroepen voor deze deelnemer.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/welbevinden.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als dit plaatje nog gelocked is óf als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<3 metingen verspreid over 3 dagen of <3 dagen aan metingen).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, dwz er is nog geen /calculate aangeroepen voor deze deelnemer.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/persoonlijke_vraag.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als dit plaatje nog gelocked is óf als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<3 metingen verspreid over 3 dagen of <7 dagen aan metingen).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, dwz er is nog geen /calculate aangeroepen voor deze deelnemer.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/dag_affect.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als dit plaatje nog gelocked is óf als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<1 meting of <14 dagen aan metingen).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, dwz er is nog geen /calculate aangeroepen voor deze deelnemer.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/plezierigheid.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als dit plaatje nog gelocked is óf als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<3 metingen verspreid over 3 dagen of <21 dagen aan metingen).
- __Statuscode 404__ - als deze deelnemer nog niet bekend is in het systeem, dwz er is nog geen /calculate aangeroepen voor deze deelnemer.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/voorspellend_netwerk.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als dit plaatje nog gelocked is óf als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (<75% van de metingen ingevuld of <30 dagen aan metingen).
- __Statuscode 404__ - als Autovar geen model kon vinden voor deze deelnemer of als deze deelnemer nog niet bekend is in het systeem, dwz er nog geen /calculate aangeroepen voor deze deelnemer.

    GET `/dossier/{:dossier_id}/protocol_subscriptions/{:protocol_subscription_id}/results/top_networks.svg`

- __Statuscode 200__ - als de resultaten klaar staan, inclusief SVG afbeelding.
- __Statuscode 202__ - als dit plaatje nog gelocked is óf als de resultaten nog niet berekend zijn.
- __Statuscode 204__ - als de gebruiker nog niet voldoende metingen heeft (75% van de metingen), of als de resultaten nog niet beschikbaar zijn voor deze gebruiker (de 30 dagen grens is nog niet gepasseerd).
- __Statuscode 404__ - als Autovar geen model kon vinden voor deze deelnemer of als deze deelnemer nog niet bekend is in het systeem, dwz er nog geen /calculate aangeroepen voor deze deelnemer.

### Voorbeeld gebruik

__URL__
`https://lifely_staging:api_secret@staging.leefplezier.nu/leefplezier/api/v1/dossier/123/protocol_subscriptions/abc/results/welbevinden.svg`

__CURL__
SVG voorbeeld:
```bash
curl -X GET --user lifely_staging:api_secret https://staging.leefplezier.nu/leefplezier/api/v1/dossier/123/protocol_subscriptions/abc/results/welbevinden.svg
```

JSON voorbeeld:
```bash
curl https://lifely_staging:api_secret@staging.leefezier.nu/leefplezier/api/v1/dossier/123/protocol_subscriptions/abc/results/top_networks.json
```

Returns:
```json
["Meer onrust werd gevolgd door meer piekeren","Meer onrust werd gevolgd door minder concentratievermogen","Meer onrust werd gevolgd door minder opgewektheid"
```



## Af en toe: Vragenlijst-definitie ophalen

Dit wordt af en toe gedaan om de vragen te syncen met onze definitie. Daarna moet telkens worden nagekeken of er geen nieuwe vraagtypes zijn opgenomen die de weergave-module van Lifely's app niet snapt. __Note: er staat nu in dat de dagboekvragenlijst te vinden is onder leefplz_db. Dit klopt voor productie, voor testen maken we tijdelijk gebruik van de leefplz_d2 vragenlijst__

### Request

    # Dagboeklijst
    GET https://leefplezier.rom.roqua.nl/api/v1/questionnaires/leefplz_db

    # Voormeting
    GET https://leefplezier.rom.roqua.nl/api/v1/questionnaires/leefplz_vm

### Response

(Zie volledige docs)

<%= headers 200 %>
<%= json questionnaire: {id: 1, questions: {v_1: {}, v_2: {}}} %>



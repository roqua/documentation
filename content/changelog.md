---
title: Changelog
---

Achter de schermen wordt continue aan RoQua gewerkt. Voor zover wijzigingen invloed hebben
op de bestaande werkwijze van onze gebruikers bundelen we dit in releases, die vantevoren worden
aangekondigd via ons helpdesk-systeem. Iedereen kan zichzelf abonneren op e-mailnotificaties van
deze meldingen.

Maar naast dat soort grote wijzigingen brengen we ook continue verbeteringen aan in RoQua. Wanneer het
gebruikers niet treft in hun bestaande werkwijze (bijvoorbeeld een nieuwe menu-item in de Admin), klein
van aard is (toevoeging van tijd naast de datum van timeline-items) en uiteraard bugfixes voor problemen
waar mensen tegenaan lopen in productie.

Om ook deze wijzigingen beter te communiceren hebben we deze pagina opgericht waarop een chronologisch
overzicht te vinden is van alle kleine wijzigingen die we maken aan onze software. Anders dan de officiële
releasenotes op ons helpdesk-portaal is de bewoording op deze pagina vaak wat technischer van aard. Als u
zich afvraagt wat iets nou precies betekent leggen we het uiteraard graag uit.

## 2016-09-22

* Probleem opgelost waardoor voor automatische protocollen geen meldingen in de timeline kwamen voor uitnodigingen die werden verzonden. De uitnodigingen waren wel verzonden, en de uitnodigingen zullen allemaal weer verschijnen met deze release.

## 2016-09-14

* De 'Voorbeeld bijwerken' knop op de pagina waar je rapporten aanmaakt deselecteerde sinds zaterdag 10 september onterecht alle invullingen. De knop werkt nu weer zoals het hoort.

## 2016-09-08

* Bij de uitkomstenpagina is het tabblad "Help" hernoemd naar "Uitleg".

## 2016-07-14

* De knoppen op de pagina om vragenlijsten klaar te zetten scollen nu mee in het venster, waardoor je niet meer helemaal naar onderen hoeft te scrollen om op deze knoppen te drukken.
* Bij het naar beneden scrollen op de timeline pagina worden weer op de correcte manier meer timeline events geladen. Voorheen kon er  niet verder in het verleden gekeken worden dan 100 events.

## 2016-06-30

* Telefoonnummers uit het epd worden vanaf nu strikter gevalideerd voordat zij als mobiel nummer in RoQua doorvallen. Telefoonnummers die niet starten met 06, +316 of 00316 worden in geen geval meer aangezien voor mobiel telefoonnummer. Verder kijken we eerst naar het primaire telefoonnummer (primary residence number) en dan pas naar het alternatieve telefoonnummer (other residence number of andere doorgegeven nummers) om een mobiel telefoonnummer te vinden. Dit houdt in dat, anders dan voorheen, een mobiel telefoonnummer in het alternatieve nummer veld geen voorrang meer krijgt op een mobiel nummer in het primaire nummer veld. Hopelijk voorkomen we hiermee dat mobiele nummers van randpersonen die worden geregistreerd in het alternatieve telefoonnummer veld worden aangemerkt als mobiele nummers van de client. We zijn ook iets strikter geworden in wat voor tekens we accepteren in het telefoonnummer. Als er bijvoorbeeld commentaar zoals 'vader' bij het telefoonnummer veld is geplaatst wordt het nummer niet geaccepteerd. Indien het telefoonnummer uit het epd niet wordt geaccepteerd zal het mobiel telefoonnummer veld in RoQua leeg blijven.

## 2016-06-28

* Duidelijke indicator voor autoprotocollen in protocoloverzicht.
* respondent_id in sql_export answers. Pointing at the respondent whom the answers belong to (the you in 'how are you').

## 2016-06-27

* Lijst toegevoegd: fact_empo: EMPO Jongeren versie 2.0 (subschaal: interactionele empowerment)

## 2016-06-15

* api: Added parent_key to response json questions, to make it easier to reproduce nesting. 

## 2016-06-06

* Added `api/v1/data_exports/download_sql` to download the sql export.

## 2016-05-24

* Drag and drop measurements onder protocollen (admin)

## 2016-05-12

* measurement onder protocol mag niet worden verwijderd
* valideer naam van measurement op bestaan

## 2016-05-11

* Opmaak van het Nesda rapport is verbeterd zodat deze weer meer grafieken en tekst op 1 pagina zet.
* Trails T6 vragenlijst Uitgaan, Internetgebruik, Vrienden is weer bruikbaar.
* Bij de rapporttemplate editor in de admin omgeving worden de keuzes voor gekoppelde vragenlijsten nu op een meer gebruikvriendelijke manier gegeven.

## 2016-05-06

* Dagboekvragenlijsten worden voortaan voor andere vragenlijsten aangeboden voor invulling.
* BAL Medicatie/Behandeling vragenlijst vraag "Hoe vaak heeft u eerder een periode gehad met deze klachten?" toegevoegd.
* Het gebruik van `-` als volledig antwoord op vragen die naar getallen vragen is niet meer toegestaan. Dit voorkomt een onduidelijke foutmelding verderop bij het invullen.
* Het gebruik van bijvoorbeeld spaties in datum velden zorgt niet meer dat een lijst niet kan worden opgeslagen.

## 2016-04-26

* HMAC token authenticatie geeft nu specifiekere meldingen bij fouten.
* Amputee Mobility Predictor (zonder/met prothese) lijsten toegevoegd
* Indien er geen cookies gebruikt kunnen worden bij een client login wordt de client hiervan op de hoogte gesteld.
* Opmaak van rapporten en uitnodigingen is iets aangepast, waardoor deze beter uit te printen moeten zijn.

## 2016-04-21

* Bipo onderzoek vragenlijsten toegevoegd.
* Mogelijkheid om protocollen met slepen te herordenen toegevoegd
* Aan respondenten (ouder, leerkracht, ...) kan een label worden toegevoegd

## 2016-04-19

* MVI-20 vragenlijst toegevoegd (Multidimensionele Vermoeidheids Index)

## 2016-04-08

* User-P vragenlijst, codering van antwoordopties is aangepast

## 2016-04-01

* Symbolize keys in protocol settings
* Fix auto protocol editor when no measurement id exist

## 2016-03-30

* Admin: vragenlijsten binnen protocollen kunnen herordenen door te slepen.
* Added pearlin_75 questionnaire (Pearlin Mastery Scale)

## 2016-03-17

* Added entered_by to sql_export.
* Added paid questionnaire (PAID Vragenlijst) 

## 2016-03-08

* Added warning when we can't set a cookie on session/create_from_epd

## 2016-02-17

* Added MSPSS questionnaire (Multidimensional scale of perceived Social Support)
* Added CY-BOCS questionnaire (Children's Yale-Brown Obsessive Compulsive Scale)
* Added GAD-7 questionnaire (Gegeneraliseerde Angststoornis GAD-7)
* Added PHQ-9 questionnaire (Patiënten gezondheidsvragenlijst - 9)

## 2016-02-10

* Added Automatic Protocol Editor (super admin only)
* protocol schedules to array of hashes.
* five_shot questionnaire added (free).
* hrv_monbew (Monitor bewegen en gezondheid Hartrevalidatie) questionnaire added. (free).
* Optimized stats api call.
* Use questionnaire#response_grid? to show a response_grid in the timeline.

## 2016-02-02

* Added SvgListDrop for easier previews of svg's generated by R in report templates.
* Split zelfi_diary into zelfi_doe_diary en zelfi_denk_diary.

## 2016-01-27
Added no_textile option to templates, to not parse as textiel after liquid is done.

## 2016-01-20
added token_or_authmac authenticator that can handle both v_2 and v_3 of the sso coupling

## 2016-01-13
Added option to add svg images to reports (coming from report calculations).

## 2015-12-03
Fixed .main not scrolling in Internet Explorer

## 20115-12-02
Fixed reports showing wrong dates in some few instances.
ApiToken and SsoTokens are now 60 characters long (A-Z-a-z0-9_-)

##2015-10-20

* Added Device Area
* Fix plural translation

##2015-10-14

* Added cqi_veilig questionnaire
* Added cqi protocol
* Added lte questionnaire

##2015-10-07

* Added Zelf-i Project seeds

## 2015-10-05

* Added Paleo Project seeds

## 2015-09-30

* Added zccl questionnaire (Zelfcontrolecognitielijst)0
* Added asrm questionnaire (Altman Self-Rating Mania Scale)
* Added brs questionnaire (Brief Resilience Scale)
* Added brugha_20 questionnaire
* Added emaaa_ucp4 questionnaire (CC4 - Dagboek Casus Conceptualisatie UCP)
* Added fs_nl (Flourishing Scale)
* Added gvsg_45 (Groninger Vragenlijst Sociaal Gedrag)
* Added ob_bk_man (Bekkenbodem Score Mannen)
* Added who_bref (WHOQOL-BREF)

## 2015-09-01

* Respondent models.

## 2015-08-15

* Plaats inactieve protocollen en measurement achteraan. 
* Links in emails en smsjes naar <org>.rom.roqua.nl
* Escape html voor open textvragen in rapporten ipv het eruit te strippen.

## 2015-08-12

* Add charts and quby_key to api/responses

## 2015-07-08

* Renamed grip_intake to grip_screening

## 2015-07-01

* Documentatie over afdelingen toegevoegd (http://docs.roqua.net/rom_manual/admin/rom_config/departments/).

## 2015-06-28

* Upgrade van React 0.11 naar 0.13.

## 2015-06-12

* Verandering webhooks, alleen nog jobs in queue zetten indien nodig
* TREAT-rapport

## 2015-06-10

* Performanceverbetering RoQua Admin dashboard (N+1 query omgeschreven)

## 2015-06-05

* Wijziging aan data-export script na database merge

## 2015-06-04

* Bugfix: IDS-SR scores
* Bugfix: Brede monitoren hadden een layout-issue op de outcome grafieken pagina.

## 2015-06-03

* Bugfix: afdelingskeuze werkte niet correct wanneer er veel afdelingen zijn.

## 2015-05-27

* Protocollen zijn nu te filteren op afdeling
* Afdeling-keuze is verplaatst naar de "Vragenlijsten klaarzetten" en "Uitnodiging aanmaken" pagina's. Daar staat het duidelijker in context van wat het precies doet: filteren op wat je in die pagina's ziet.

## 2015-05-20

* Uitnodigingstemplates en SMS-templates zijn dynamischer en flexibeler in termen van hoe om te gaan met herinneringen. In een template is nu de variabele `event` beschikbaar, deze is `opened` danwel `reminder`.
* Uitnodigingstemplates hebben een los instelbare `subject` voor wanneer ze ingezet worden als e-mail.

## 2015-05-04

* SQLite-export downloadbaar gemaakt in de Admin (initieel op aanvraag)
* Snelheidsverbeteringen in CSV- en SQLite-exports

## 2015-05-01

* Overstap van Sendgrid naar Mandrill
* Kleiner-dan tekens in vraagtitels op de outcome-paginas weer zichtbaar gemaakt. De Rails 4.2-upgrade had gezorgd dat dezen wegvielen.
* Flexibelere notificaties bij automatische protocollen. Het is nu ook mogelijk om bijvoorbeeld tegelijk een e-mail en een SMS te sturen.
* Op de achtergrond beginnen we met een SQLite-gebaseerde export te genereren. Dit wordt een rijker exportformaat waarin meer informatie doorvalt, en welke continue up to date is (in tegenstelling tot de nachtelijke export naar CSV-files).

## 2015-04-25

* Bij de NESDA-vragenlijsten tonen we nu een overzicht van ingevulde en gemiste metingen.

## 2015-04-22

* Klaarstaande vragenlijsten kunnen nu in een andere volgorde worden gezet door ze te verslepen.

## 2015-04-16

* API voor het verwijderen van een fillout request toegevoegd. Dit haalt alle klaargezette lijsten van die request weg.

* De responses API geeft nu ook terug welke medewerker lijsten heeft klaargezet (`requester`).

* De URLs van EPD-gebruikers bevatten nu het huidige dossiernummer. Dit zorgt ervoor dat
  we beter kunnen detecteren wanneer iemand een oud tabblad open laat staan en tegelijk
  een nieuwe sessie begint in een ander tabblad.

* De applicatie is geüpgrade naar Rails 4.2

## 2015-04-07

* In de admin-interface hebben we de editor voor protocollen vrijgegeven.
* Verborgen scores (interne tussenstappen, of ongevalideerde scores) waren niet verborgen wanneer je op
  een ingevulde lijst klikte in de timeline.

## 2015-03-31

* Tijden van gebeurtenissen toegevoegd aan timeline.
* Betere foutpagina wanneer een URL niet gevonden kan worden (bijvoorbeeld door iets te verwijderen en daarna
  met de back-knop terug te gaan naar de pagina van dat verwijderde item).
* Enkele vragenlijsten hadden in de data-export kolommen met dezelfde header
* Timeline-pagina geoptimaliseerd door sorteer-tijdstempel niet meermaals te parsen.

## 2015-03-25

* Aanpassingen in databasestructuur in voorbereiding op bewerkbaar maken via de Admin.
* Als er zowel een gewone notificatie als een herinneringsnotificatie was bij een automatisch protocol,
  moest je beide apart kiezen. In de database is hier echter slechts één veld voor.
* Beginnende ondersteuning voor webhooks.

## 2015-03-19

* Aanpassingen in databasestructuur in voorbereiding op bewerkbaar maken via de Admin.
* De bewoording van het "Allemaal"-recht is verduidelijkt naar "Gebruikersrechten toekennen + alle andere rechten".
  Functioneel verandert niets, maar dit nieuwe label maakt duidelijker wat het effect altijd al geweest is.
* Clientlogin via HMAC-based SSO. Deze loginmethode is beschikbaar voor alle SSO-tokens die het
  nieuw-toegevoegde client-sso recht hebben.

## 2015-03-16

* Clientlogin via SHA1-based SSO. Omdat dit minder veilig is dan HMACs is deze methode in de API-docs als
  deprecated gemarkeerd en staat support hiervoor standaard niet aan.

## 2015-03-12

* Nieuwe `{{ url }}` Liquid variabele toegevoegd bij uitnodigingstemplates.
* Nieuwe `{{ variabele | when_blank: 'standaardwaarde' }}` helper `when_blank` toegevoegd voor alle templates.
* De gebruikersnamen zoals we ze doorkrijgen vanuit de EPD SSO zijn nu voor alle gebruikers zichtbaar en
  doorzoekbaar in de Admin.

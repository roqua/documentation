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

---
title: Afdelingen
sort: 100
---

## Afdelingen aanmaken

Met afdelingen kunnen medewerkers in de RoQua epd omgeving de lijsten van uitnodigingstemplates en
protocollen filteren, zodat alleen de opties die relevant zijn binnen een bepaalde afdeling getoond worden.
De afdelingen en welke protocollen en uitnodigingstemplates daar bij horen worden in de admin omgeving gedefinieerd.

De naam van de afdeling die was geselecteerd op het moment van het klaarzetten van een vragenlijst valt
door in de dataexport onder de &lt;vragenlijstsleutel&gt;_location kolom.

<screenshot src="/screenshots/admin_team_index.png" />

<ul class="hints">
  <li>De naam van een afdeling is vrij te kiezen. Er kan bijvoorbeeld voor een locatienaam
  gekozen worden, maar het is ook mogelijk om met afdelingen een ander soort managementniveau te omschrijven.</li>
  <li>Aangezien afdelingen in RoQua hoofdzakelijk als filterfunctie dienen is het aan te raden om afdelingen
  te maken waar medewerkers niet al te veel tussen moeten wisselen. Groepeer protocollen en
  uitnodigingstemplates die dezelfde personen vaak samen gebruiken onder dezelfde afdeling.</li>
  <li>Elke RoQua gebruiker is vrij om te wisselen tussen afdelingen of om geen
   afdeling geselecteerd te hebben. Er is dus geen garantie dat de juiste afdeling was geselecteerd bij het
    klaarzetten van een vragenlijst indien deze vragenlijst onder meerdere protocollen bij verschillende
    afdelingen te vinden is. Hetzelfde geldt voor uitnodigingstemplates.</li>
</ul>

Bij het openen van de afdelingen pagina in de admin omgeving wordt een lijst van bestaande afdelingen getoond.
Er kunnen nieuwe afdelingen worden aangemaakt met de knop 'Maak nieuwe afdeling aan'. Bestaande afdelingen kunnen
een andere naam worden gegeven met de 'Bewerk' knop of verwijderd worden met het prullenbak icoon.

<screenshot src="/screenshots/admin_team_new.png" />

Bij het aanmaken van een afdeling moet een naam worden opgegeven. Het email adres dat wordt opgegeven
bij 'afzenderadres e-mails' wordt als afzender opgenomen bij uitnodigingen die per email worden verstuurd door
medewerkers die deze afdeling hebben geselecteerd bij het aanmaken ervan. Het is echter sterk aan te raden om dit
veld leeg te laten tenzij je er zeker van bent dat het internetdomein dat het genoemde email adres
beheert correct toestemming verleent dat RoQua deze gebruikt als afzender adres. Indien het domein
geen toestemming geeft (de standaardinstelling), is er grote kans dat deze mails als SPAM worden aangemerkt.

Na het drukken op 'Afdeling Aanmaken' is de afdeling aangemaakt en kunnen er uitnodigingstemplates en protocollen
aan gekoppeld worden. Dit gebeurt onder de instellingspagina`s voor protocollen en uitnodigingstemplates onder
het ROM-config menu.

## Uitnodigingstemplate koppelen aan een afdeling

<screenshot src="/screenshots/admin_team_invitation_template.png" />

Uitnodigingstemplates kunnen aan 1 afdeling gekoppeld worden. Deze uitnodigingstemplate zal dan bij het versturen per
email het afzenderadres gebruiken dat is ingesteld bij de afdeling.

## Protocollen koppelen aan afdelingen

<screenshot src="/screenshots/admin_team_protocol.png" />

Protocollen kunnen aan meerdere afdelingen tegelijk gehangen worden.

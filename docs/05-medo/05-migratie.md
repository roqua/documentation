# Migratie van Medo naar RoQua

De beheeromgeving van RoQua is het afgelopen jaar flink uitgebreid met onder andere deelnemersbeheer, organisatie-specifieke deelnemersinfovelden, bulkacties en betere rapportages. Daarom brengen we alle projectbeheer samen in één systeem en sluiten we Medo.

Net zoals in Medo heeft elk dossier in de RoQua beheeromgeving een knop waarmee RoQua wordt geopend. Vanaf dat punt verandert er niets. Vragenlijsten versturen en uitkomsten inzien werkt hetzelfde. Voor deelnemers verandert er ook niets — zij blijven uitnodigingen ontvangen via e-mail en sms, precies zoals voorheen. De migratie heeft dus alleen betrekking op de beheerkant.

## Waar vind ik wat?

Veel onderdelen uit de navigatie van Medo zijn terug te vinden in RoQua, soms onder een andere naam of op een andere plek.

### Projectgegevens → Nachtelijke CSV export

In Medo stond de downloadknop voor de data-export op de pagina **Projectgegevens**.

<Screenshot src="/screenshots/medo-migration/export-medo.png" />

In RoQua vind je deze onder **[Nachtelijke CSV export](../admin/data_exports)**.

### Deelnemers → Ongekoppelde dossiers

Het deelnemersoverzicht is de pagina waar je als gebruiker het meest in werkt. In Medo heette dit **Deelnemers**.

<Screenshot src="/screenshots/medo-migration/deelnemers-medo.png" />

In RoQua heet dit **[Ongekoppelde dossiers](../admin/dossiers)**. "Ongekoppeld" betekent dat er geen extern EPD aan gekoppeld is — voor onderzoeksprojecten is dat altijd het geval, dus al je dossiers staan hier. De term "dossiers" wordt in RoQua breder gebruikt dan alleen voor onderzoeksdeelnemers.

#### Wat is er veranderd?

| Medo | RoQua |
|---|---|
| Deelnemer toevoegen | **Maak dossier** |
| Stats verversen | Niet meer nodig — statistieken zijn altijd actueel |
| Lijst importeren / Lijst exporteren | **Importeren** / **Exporteren** |
| Bulk aanmelden | **Automatische protocollen in bulk starten** (in het linkermenu) |
| Onderzoeksnummer (kolom) | **Patiëntnummer** |

#### Navigeren binnen een dossier

In Medo kon je op een rij klikken om naar de detailpagina van een deelnemer te gaan, en van daaruit via **"Open in RoQua"** het dossier in RoQua openen.

In RoQua zijn er twee knoppen per dossier:

- **Open** — opent de dossierweergave (was "Open in RoQua" in Medo)
- **Bewerk** — om gegevens zoals naam en e-mailadres aan te passen (niet zichtbaar in voorbeeldmodus)

### Medewerkers → Admin-gebruikers

De pagina **Medewerkers** in Medo heet in RoQua **[Admin-gebruikers](../admin/users)**.

### Instellingen

De pagina **Instellingen** uit Medo is in RoQua opgesplitst over verschillende pagina's binnen de beheermodule. Voor bestaande projecten die al correct zijn ingericht hoeft hier in de regel niets aan te worden aangepast.

## Hoe werkt de migratie?

Nadat je een RoQua-account hebt ontvangen, kun je inloggen en je projecten bekijken in de **voorbeeldmodus**. Je kunt de beheeromgeving verkennen en je deelnemers bekijken voordat je ergens aan vastzit.

Wanneer je er klaar voor bent, klik je op **"Migreer dit project"** om de overstap te voltooien. Daarna vervalt de toegang tot dat project in Medo en wordt RoQua de plek om het te beheren. Dit kan alleen door projectbeheerders worden gedaan.

:::info
Zolang een project nog in de voorbeeldmodus staat, kunnen deelnemers alleen in Medo worden toegevoegd of bewerkt. Na de migratie neemt RoQua dit volledig over.
:::

## Vragen?

Neem contact op via [support@roqua.nl](mailto:support@roqua.nl).

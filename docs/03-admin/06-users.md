# Gebruikers

Met behulp van deze interface kun je de RoQua gebruikersaccounts beheren. We hebben twee soorten accounts: admin-gebruikers en EPD-gebruikers.

## Admin-gebruikers

Admin-gebruikers hebben toegang tot de beheersomgeving van RoQua. Deze accounts werken op basis van emailadres, en 1 account kan worden gekoppeld aan meerdere organisaties tegelijk.

### Login

Authenticatie is standaard op basis van emailadres, wachtwoord en een tijdelijke code vanuit een authenticator-app op de telefoon.

In de praktijk raken gebruikers zo nu en dan hun authenticator-app kwijt, vaak wanneer ze van telefoon wisselen en vergeten deze app opnieuw in te stellen voordat ze de oude telefoon leeg gooien. In zo'n geval kan je met de knop "MFA verwijderen" de configuratie van de authenticator-app verwijderen bij een gebruiker.

:::caution
Let op voor phishing aanvallen: wanneer een aanvaller het wachtwoord van een gebruiker heeft achterhaald, is de volgende stap om een beheerder zo ver te krijgen om de tweede authenticatiefactor van het account te laten verwijderen. Het is daarom uitermate van belang om elk verzoek hiertoe onafhankelijk te verifieren. Dat de afzender van een email goed lijkt is niet voldoende, dat is zeer makkelijk te vervalsen.
:::

Daarnaast kunnen we ook koppelen met een Azure AD koppeling, of andere OAuth provider naar keuze. In dat geval kan de gebruiker inloggen met het systeem van de organisatie zelf, en is er bij ons geen los wachtwoordbeheer. Voordeel hieraan is ook dat bij uitdiensttreding het account aan de kant van de organisatie wordt afgesloten en daarmee ook meteen RoQua ontoegankelijk is.

### Rechten

Elke gebruiker heeft bij een organisatie een set aan rechten. Zonder rechten kan wel worden ingelogd maar kan alleen de startpagina worden bekeken. We hebben de volgende sets aan rechten:

* **Gebruikersrechten toekennen + alle andere rechten**: Wanneer een gebruiker rechten van gebruikers mag beheren, kan diegene automatisch bij alles binnen de beheeromgeving (omdat ze zichzelf anders altijd extra rechten kunnen uitdelen).
* **Dossiers**: Interne dossiers beheren
* **Templates**:
* **Data Exports**: Ophalen van de CSV-exports, SQLite export.
* **Instellingen**:
* **Protocollen**:
* **Integratie**:
* **Afdelingen**:
* **E-mailfouten**:
* **E-mailconfiguratie**:
* **Dossiers omnummeren/**samenvoegen****:

## EPD-gebruikers

Deze accounts worden automatisch aangemaakt op het moment dat een medewerker RoQua voor het eerst opstart, en kun je dus via de adminomgeving niet zelf aanmaken. Nadat een EPD-gebruikersaccount is gestart door een eerste login kun je diens rechten instellen. Klik op een van de "Bewerk" knoppen of typ een gebruikersnaam in het tekstveld en klik op "Zoeken" om een gebruikersaccount aan te passen. Je kunt nu de persoonlijke gegevens bijwerken en de rechten van een EPD-gebruiker beheren.

### Rechten

* **Alle rechten**: Alle onderstaande rechten, en rechten die we in de toekomst toevoegen.
* **Ingevulde vragenlijsten aanpassen**: In de timeline kun je een ingevulde vragenlijst aanklikken en met "Antwoorden aanpassen" bewerken, ook wanneer deze door de patient of andere respondent is ingevuld. Dit is bedoeld voor wanneer de patient zelf aangeeft een fout te hebben gemaakt.
* **Ingevulde vragenlijsten verwijderen**: In de timeline kun je een ingevulde vragenlijst aanklikken en dan rechtsbovenin met het prullenbakje deze invulling verwijderen. Dit is bedoeld voor wanneer een respondent de verkeerde inlogcode heeft gekregen, of een behandelaar per ongeluk in het verkeerde dossier werkte.

:::note
Vroeger hadden we hiervoor de "coördinator" rol. Tegenwoordig is dit opgesplitst in losse individuele rechten. De oude rol is wat nu "Alle rechten" is.
:::


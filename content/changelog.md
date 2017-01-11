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

# 2017-01-11

* Het is nu mogelijk om de navigatie aan de zijkant uit- of in te klappen.
* Managers kunnen nu inactieve protocollen zien in de admin interface en ze herstellen.
* prive/betaalde lijsten uit inactieve protocollen kunnen nu ook worden toegevoegd aan andere nieuwe protocollen.
* Als dezelfde vragenlijst 2x klaarstaat zal hij voortaan ook 2x afgenomen worden. In het verleden werd de tweede verwijderd.
* vragenlijst toegevoegd: Vragenlijst follow-up Kaakchirurgie (mka_follow - private)

# 2017-01-03

* Toon sleutel (key) van vragenlijst bij bewerken protocolmeting.
* vragenlijst toegevoegd: Work and Social Adjustment Scale (WSAS)
* vragenlijst toegevoegd: Gezondheidsvragenlijst (EQ-5D-5L) (pay per completion EuroQol)
* vragenlijst toegevoegd: Self-Compassion Scale (SCS)
* vragenlijst toegevoegd: UMCG Neurorevalidatie Beatrixoord
* vragenlijst toegevoegd: 6-minute walking-test (6MWT) Neurorevalidatie
* vragenlijst toegevoegd: Motoriek testspieren ASIA
* vragenlijst toegevoegd: WCC rolstoeltest (private UMCG)

# 2016-12-21

* vragenlijst toegevoegd: Athens Insomnia Scale (AIS)
* vragenlijst toegevoegd: Verslag Pediatric Evaluation of Disability Inventory (PEDI-NL)

# 2016-12-15

* vragenlijst toegevoegd: Endurance Shuttle Walk Test (ESWT) Kinderrevalidatie
* vragenlijst toegevoegd: Incremental Shuttle Walk Test (ISWT) Kinderrevalidatie
* vragenlijst toegevoegd: 6-minute walking-test (6MWT) Kinderrevalidatie
* vragenlijst toegevoegd: Motor Function Measure (MFM)
* vragenlijst toegevoegd: Gross Motor Function Measure (GMFM)
* vragenlijst toegevoegd: Zelfinventarisatielijst (ZIL)
* Bugfix: Toon vragenlijst op 1 pagina wanneer invulling wordt aangepast.
* Antwoorden op een vraag met een select input (dropdown) worden nu goed getoond in rapporten.

# 2016-12-08

* vragenlijst toegevoegd: Dagboek Langdurige Rehabilitatie Lentis
* vragenlijst toegevoegd: Functionele Spierkrachttest Kinderrevalidatie
* vragenlijst toegevoegd: (Halve) Bruce Test Kinderrevalidatie     
* vragenlijst toegevoegd: Wingate Anaerobe Test - Kinderrevalidatie
* vragenlijst toegevoegd: Spierkracht Hand-held Dynamometer (HHD) Kinderrevalidatie

# 2016-12-06

* Organizatie optie toegevoegd om team selectie verplicht te maken voor je lijsten kunt klaarzetten.
* vragenlijst aangepast: msip - textuele verbeteringen

# 2016-12-01

* Betere foutmeldingen bij aanpassen van patiëntgegevens.
* Fout in admin/settings opgelost, waardoor huidige export-versie niet geselecteerd was.

# 2016-11-30

* Bij het aanpassen van antwoorden van een reeds ingevulde vragenlijst worden alle vragen op één scherm getoond en is het mogelijk om validaties over te slaan.
* Rapporten geven nu gedetailleerdere feedback voor rapportbouwers bij fouten, waaronder een regelnummer waar de fout is opgetreden. Mochten er fouten optreden zonder regelnummer, neem dan contact op met het RoQua team.

# 2016-11-23

* vragelijst aangepast: 4Ks - optionele vraag deselecteerbaar gemaakt.
* vragenlijst toegevoegd: Communication Skills Questionnaire (CSQ) - csq_comm free
* vragenlijst toegevoegd: Sociale Netwerk Analyse soc_netw free
* vragenlijst toegevoegd: Sociale Netwerk Analyse eetclub Hospitality (HY) project hy_socnetw private
* vragenlijst toegevoegd: Werkzame mechanismen Lotgenotencontact - Hospitality project - hy_lotg private
* vragenlijst toegevoegd: Werkzamen mechanismen - Hospitality project - hy_mech private
* vragenlijst toegevoegd: Personal and Social Performance Scale - versie Hospitality project - hy_psp private
* vragenlijst toegevoegd: Sociodemografische gegevens - Hospitality project - hy_socio private
* vragenlijst toegevoegd: GAF versie Hospitality project - hy_gaf private

## 2016-11-17
* In de admin omgeving kan een email adres worden opgeven die bij verzonden emails wordt meegegeven als adres waar mensen op kunnen reageren met emails ('reply to' adres).
* In de rapporttemplates zijn variabelen toegevoegd om scores op een vergelijkbare manier uit te lezen als dat met antwoordwaardes gebeurt. Daarnaast kunnen scores en antwoordwaardes van de eerste of een na laatste invulling nu vergeleken worden met de laatste invulling via de variabelen vragenlijstsleutel.vraag/scoresleutel.last_minus_first en vragenlijstsleutel.vraag/scoresleutel.last_minus_first_to_last
* vragenlijst toegevoegd: Functional Social Support Questionnaire (FSSQ)
* vragenlijst toegevoegd: Self-Esteem Rating Scale (SERS-SF 20)
* vragenlijst toegevoegd: Internalized Stigma of Mental Illness (ISMI) scale - verkorte versie
* vragenlijst toegevoegd: De Jong Gierveld Loneliness Scale (DJGLS)

## 2016-11-16

* Voortaan is de manager-rol niet meer nodig om in te loggen in RoQua Admin. Zonder expliciete rechten kunnen medewerkers echter alleen de overzichtspagina zien. Ook moet er uiteraard wel al een RoQua Admin-wachtwoord voor deze medewerkers zijn ingesteld.
* Fout opgelost waarbij a19 faalde als de gender niet was gedefinieerd.
* verandering van 14/11 teruggedraaid dat lijsten in ie9 en lager in een apart venster wordt geopend gezien bij sommige klanten de sessie niet behouden bleef.

## 2016-11-14

* Het is nu mogelijk een default return_url, progress_url en stylesheet te zetten op organisatie niveau. Alleen door support in te stellen.
* <s>Bij Internet Explorer 9 en lager openen de vragenlijsten bij "direct invullen" of klikken op de link onder het token nu in een apart scherm. Dit is omdat sommige antwoordmogelijkheden niet goed werden weergegeven onder ie11 in ie8 compatibility mode, ie10 in ie8 compatibilty mode werkte wel prima.</s>

## 2016-11-10

* Betere vragenlijst kiezer bij het maken van een rapport template.
* Toevoegen van vragenlijsten aan metingen gaat sneller.
* Scores toegevoegd aan de copm (private) - UMCG Revalidatie Ortho Onco 
* nvt opties toegevoegd aan de kt_psyq (free) - PsyQ klanttevredenheid"

## 2016-11-08
* Added C-Groep Activity grid for the app
* vragenlijst toegevoegd: TransID lijsten

## 2016-11-07
* Fixed merging 2 dossiers by changing respondent of moved answers.
* vragenlijst toegevoegd: Anamneselijst Hoofd en Hals Oncologie (anam_hhonc - private)
* vragenlijst toegevoegd: Vragenlijst zorgverlener poli - Hoofd en Hals Oncologie (zv_hhonc - private)
* vragenlijst toegevoegd: Scored Patient-Generated Subjective Global Assessment (PG-SGA) Short Form (SF) (pg_sga - free)
* vragenlijst toegevoegd: Utrechtse Schaal voor Evaluatie van Revalidatie (USER) (user - free)
* vragenlijst toegevoegd: Druk en Dwars Ouderbegeleiding - Anamnese (dd_anamn/dd_anamn_o2 - private)
* vragenlijst toegevoegd: Druk en Dwars Ouderbegeleiding - T2 & T3 Evaluatie (dd_hulp_2/dd_hlp_o2 private)
* vragenlijst toegevoegd: Druk en Dwars - Algemene vragen (dd_opvoed/dd_opvd_o2 - private)

## 2016-11-03
* Er is een versie van de Mate 1 beschikbaar gesteld waar er voor de gebruiksvragen bij het openen van de vragenlijst nullen zijn vooringevuld. Deze Mate 1 is te vinden onder de naam 'MATE 1: Gebruik (nullen vooringevuld)'.

## 2016-11-01
* Overgestapt naar Sparkpost voor het verzenden van e-mails in verband met problemen bij hotmail, live en outlook accounts.

## 2016-10-28
* Emailbounces in de admin omgeving tonen nu hun jaartal
* vragenlijst toegevoegd: Eating Assessment Tool (EAT-10)
* vragenlijst toegevoegd: Vragenlijst borstkanker (BCSCQ)
* vragenlijst toegevoegd: Vragenlijst poli - Hoofd en Hals Oncologie
* vragenlijst toegevoegd: Dagboek 2 MIRORR

## 2016-10-26
* vragenlijst toegevoegd: EORTC QLQ-H&N35 
* vragenlijst toegevoegd: EORTC QLQ-BR23 
* vragenlijst toegevoegd: Brunnstrom Fugl-Meyer Assesment
* vragenlijst toegevoegd: Nine Hole Peg Test
* vragenlijst toegevoegd: 10 meter looptest (TML)
* vragenlijst toegevoegd: Multiple Sclerosis Impact Profile (MSIP)
* vragenlijst toegevoegd: Dutch Multifactor Fatigue Scale (DMFS)
* vragenlijst toegevoegd: Spraak Handicap Index (SHI)
* vragenlijst toegevoegd: Caregiver Strain Index (CSI)
* vragenlijst toegevoegd: Berg Balance Scale (BBS) 

## 2016-10-25

* Toon het tijdstip van een handmatige non-response in de tijdlijn, het tijdstip werd eerder niet getoond.
* gvlo/gvlo2 naam invuller verwijderd.

## 2016-10-24

* Voegt een notifier class toe waarmee via core SMSjes kunnen worden verstuurd voor protocols (invitations en reminders).
* besch_less textuele wijzigingen - Zelfbeschadigend en agressief gedrag
* cip_brs (free) verbeterd - BRS en Happiness Index
* cqi_add_dr (private) toegevoegd - CQi klinisch - GGZ Drenthe Ouderen
* inl_trls_3 (private) toegevoegd - Inleiding/SES Trails NEXT 3e meting
* mir_gzndh2 (private) toegevoegd - Gezondheidsvragenlijst 2
* mka_consul (private) toegevoegd - MKA Consult UMCG
* mka_interv (private) toegevoegd - MKA Interventie

## 2016-10-19

* Png's in rapporten worden voortaan in img-tags gestopt, ipv inline, waardoor ze ook werken in firefox en ie-edge (eerder werden elementen van andere svg's op de pagina geleend)
* Voor ggz-wnb wordt de roepnaam nu overgenomen vanuit A19 persoonsgegevens en deze is te gebruiken in uitnodigingsbrieven. Indien er geen roepnaam beschikbaar is wordt de voornaam gebruikt.
* Het is nu mogelijk om elke vragenlijst direct in te vullen, hiervoor was eerder een losse bulk-versie nodig. Direct invullen wordt gebruikt:
  * tijdens een interview met de patient
  * bij het overnemen van papieren bulk lijsten (invuldatum kan dan ook worden ingesteld)
* cbcl_6_18z (private) toegevoegd - CBCL 6-18 zonder inleidende vragen
nem_diary
* obvl, obvl2 (free) textueel aangepast, plus voorbeeldvraag toegevoegd. - Opvoedingsbelasting vragenlijst
* ct_wnb_jng, ct_wnb_oud, ct_wnb_ou2 (private) toegevoegd.
* obvl_z, obvl_z2 (free) toegevoegd - OBVL zonder 1e Ouder/2e Ouder

## 2016-10-03

* Kolommen toegevoegd aan cvs alle exports: respondent_id, respondent_type, respondent_label.

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

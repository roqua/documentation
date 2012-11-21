EPD Single Sign-On
==================

Roqua kan vanuit een lokaal EPD worden opgestart via een URL-aanroep voorzien
van de juiste parameters. Hierbij is geen aparte authenticatie in Roqua nodig.
Roqua volgt gewoon het EPD. Om erop te kunnen vertrouwen dat de URL inderdaad
vanuit het EPD is geconstrueerd wordt er over alle meegezonden parameters plus
een ‘shared secret’ een SHA1-hash berekend, die als extra parameter wordt
meegestuurd. In Roqua wordt die SHA1-hash uit de URL-parameters gereconstrueerd
en als daar hetzelfde uit komt wordt de URL geaccepteerd. Met de SHA1-hash
wordt ondervangen dat er niet moedwillig een valse URL-string kan worden
geconstrueerd om toegang te forceren tot een bepaald client-record of om onder
de identiteit van een ander (andere hulpverlener) malafide acties uit te voeren
in Roqua.

Als extra beveiliging zit er tussen de meegezonden parameters een
datetime-stamp waardoor Roqua kan besluiten om geen toegang te verlenen als de
URL verlopen is. Dit om hergebruik van een (ooit geldige) URL-string vanuit de
browser-cache tegen te gaan.

Eenmaal opgestart via deze URL zal Roqua gelockt blijven op CLIENTID en USERID.
Navigeren binnen Roqua naar een andere client-record is dan niet mogelijk.
Navigeren dient vanuit het EPD te geschieden. Als daar een andere client wordt
geselecteerd, verandert de URL mee en volgt Roqua.

A [reference implementation](https://github.com/roqua/urlspec/blob/master/app/controllers/generators_controller.rb) is available. It is also possible to validate your URLs against this implementation by [visiting its running instance](http://roqua-urlspec.heroku.com/generator/new).

## API Call

To open RoQua EPD-interface as a given user for a given dossier, tell a browser
window or frame to navigate to:

```
https://api.#(GGZ_NAME).roqua.nl/session/create_from_epd?timestamp=1997-07-16T19:02:30+01:00
                                                        &userid=BEHAND01
                                                        &clientid=PATIENT123
                                                        &roleid=2
                                                        &protocolid=0
                                                        &version=2
                                                        &token=feab40e1fca77c7360ccca1481bb8ba5f919ce3a
```

#### Required parameters:

  * `timestamp`     - **Required.** ISO 8601 formatted date and time (YYYY-MM-DDThh:mm:ssTZD).
  * `userid`        - **Required.** Nummer behandelaar; matchen in Roqua met MFN.
  * `clientid`      - **Required.** Patientnummer; matchen in Roqua met A04/A08/A19.
  * `version`       - **Required.** Should have value `2`.
  * `token`         - **Required.** SHA1-hash #(TOKEN)= SHA1(GGZ_NAME + ‘|’ + SHARED_SECRET + ‘|’ + TIMESTAMP + ‘|’ + USERID + ‘|’ + CLIENTID + ‘|’ + ROLEID + ‘|’ + PROTOCOLID + ‘|’ + VERSION)

#### Optional parameters:

  * `roleid`        - Rechten-differentiering vanuit EPD (optioneel).
  * `protocolid`    - Protocol sturing vanuit EPD (optioneel)
  * `GGZ_NAME`      - "lentis" of "ggzfriesland" of "ucp" of … (aangeleverd door RGOc).

#### Never communicated over the wire:

  * `SHARED_SECRET` - "zeer_geheime_frase" (hex-string van 64 tekens). (alleen bekend bij RGOc/Roqua en EPD-leverancier: GPR, McKesson, ...). Dient bij voorkeur als configureerbare parameter te worden geimplementeerd in verband met mogelijkheid tot wijzigen bij vermoeden van corrumpering.

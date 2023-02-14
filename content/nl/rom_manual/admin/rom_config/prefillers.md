---
title: Voorinvullers
sort: 260
---

Binnen een protocol is het mogelijk om, wanneer een **medewerker** een lijst zelf gaat invullen, hierin sommige vragen alvast te laten invullen. Momenteel ondersteunen we hierin twee soorten:

* Vragen invullen door een waarde over te nemen uit een eerdere invulling van dezelfde vragenlijst.
* Vragen invullen door een waarde over te nemen uit een labwaardenkoppeling (gebaseerd op de FHIR standaard).

Om dit te configureren begin je bij de vragenlijsten van een meting, en klik je bij de vragenlijst die je wil voorinvullen op de steeksleutel:

<%= img "prefillers/edit_measured_questionnaire_button.png" %>

Op de volgende pagina staat onderaan een lijst van voorinvullers. Elke voorinvuller is voor 1 specifieke vraag van de vragenlijst:

<%= img "prefillers/prefillers_list.png" %>

Daar kun je kiezen welke soort voorinvuller je wil maken. Per vraag moet je een losse voorinvuller maken. Met de plus-knoppen bovenin maak je nieuwe voorinvullers, en bestaande kun je bewerken en verwijderen met de knoppen rechts.

## Voorinvullen uit eerder ingevulde lijst

Bij een voorinvuller die een waarde overneemt uit de vorige invulling ziet het formulier er als volgt uit:

<%= img "prefillers/prior_response_form.png" %>

* _"In te vullen veld":_ welke vraag wil je voorinvullen
* _"Over te nemen vanuit":_ uit welke vraag van de vorige invulling wil je de waarde pakken. Meestal is dit dezelfde vraag.
* _"Hoe lang geleden":_ Om te voorkomen dat we een waarde overnemen uit een oud en reeds afgesloten behandeltraject moet opgegeven zijn hoe oud de vorige invulling maximaal mag zijn. Het is wat onhandig maar om de technische implementatie van deze admin-pagina binnen de perken te houden is dit veld het aantal **seconden** dat een labwaarde oud mag zijn, hoewel het ook mogelijk is om in te vullen met het [ISO8601](https://www.digi.com/resources/documentation/digidocs/90001488-13/reference/r_iso_8601_duration_format.htm) formaat.

## Voorinvullen uit labwaarden-koppeling

Bij een labwaarden-koppeling ziet het formulier er als volgt uit:

<%= img "prefillers/fhir_prefiller_form.png" %>

* _"In te vullen veld":_ welke vraag wil je voorinvullen
* _"Fhir endpoint":_ Het tot stand brengen van de koppeling met de labwaarden-server wordt door RoQua ingericht, in dit veld zijn alle ingerichte servers te kiezen. Meestal is hier maar 1 keuze (of geen enkele, als er geen koppelingen zijn)
* _"Coderingssysteem" & "Code":_ om de labwaarde op te halen geven we deze code door aan jullie labwaardenserver. Er zijn meerdere instanties die lijst van mogelijke coderingen beheren, maar `http://loinc.org` is momenteel gangbaar. De reden dat je dit los moet opgeven is omdat `HT_12` an sich niks zegt, het krijgt pas betekenis wanneer je bij Loinc kunt opzoeken waar dat voor staat.
* _"Soort waarde":_ Een labwaardenserver verschillende soorten data teruggeven. Momenteel ondersteunen we alleen `valueQuantity`, dat zijn numerieke hoeveelheden. We willen wel extra ondersteuning toevoegen voor bijvoorbeeld datums of zgh "booleans" (ja/nee, aan/uit, etc), neem vooral contact met ons op als je hier een concreet voorbeeld voor hebt.
* _"Eenheid":_ voor deze numerieke hoeveelheid, geef hier op welke eenheid de vraag in het RoQua-formulier verwacht. Als de eenheid die de labwaarden-server teruggeeft hier niet mee overeenkomt, voorkomen we dat waarde wordt ingevuld. Let op: *hoofdlettergevoelig, en liters komen meestal terug als `L`*
* _"Hoe oud":_ Meestal is het niet wenselijk om hele oude labbepalingen over te nemen, want de vragenlijst wordt waarschijnlijk voor de huidige situatie ingevuld. Het is wat onhandig maar om de technische implementatie van deze admin-pagina binnen de perken te houden is dit veld het aantal **seconden** dat een labwaarde oud mag zijn, hoewel het ook mogelijk is om in te vullen met het [ISO8601](https://www.digi.com/resources/documentation/digidocs/90001488-13/reference/r_iso_8601_duration_format.htm) formaat.

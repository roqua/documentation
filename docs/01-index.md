# Handleiding

RoQua bestaat uit een aantal modules. Kies links de module waar u mee wilt werken.

## Termen

In deze handleiding zullen we regelmatig termen gebruiken die wellicht niet precies overeenkomen met hoe het bij jullie op de werkvloer genoemd word.


### Dossiers

Het centrale model in onze applicatie is het Dossier. Elk dossier gaat over een cliënt. Toegang tot een dossier loopt via de EPD-module, die opgestart wordt vanuit het EPD. Het EPD geeft ons daarbij een nummer mee voor het dossier.

### Respondenten

Elk dossier heeft 1 of meerdere respondenten. Respondenten zijn de mensen die vragenlijsten beantwoorden. De cliënt waarover het dossier gaat is in elk geval een respondent (al zal deze niet altijd ook daadwerkelijk een vragenlijst invullen), omdat we op deze patient-respondent bijhouden over wie het dossier precies gaat. Respondenten gaan over mensen, en dit is waar we hun naam en contactgegevens opslaan.

### Vragenlijsten

Wanneer we het hebben over een vragenlijst, dan bedoelen we in ons geval altijd de lijst zelf, en niet een invulling ervan. Dit is dus bij wijze van spreken het oningevulde formulier. Van een vragenlijst weten we welke vragen hij heeft, welke scores er op welke manier berekend moeten worden, en wat voor grafieken er getoond kunnen worden.

### Responses

Bovenstaande modellen komen allemaal tezamen in het belangrijkste model van onze applicatie. Waar een *Vragenlijst* dus het oningevulde formulier is, is een *Respons* wat je krijgt wanneer een *Respondent* de vragen van een vragenlijst beantwoord. Een Respons bevat antwoorden (op vragen), en na opslaan voeren we de scoreberekeningen uit en slaan we die er ook bij op.

Een respons hangt aan een dossier, en weet daarnaast welke vragenlijst het was, welke respondent het heeft ingevuld, etc.

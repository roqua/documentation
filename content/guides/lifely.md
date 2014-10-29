---
title: Lifely API guide
---

* TOC
{:toc}

## Configuration variables:

    ROQUA_CORE_API_USERNAME
    ROQUA_CORE_API_PASSWORD
    ROQUA_ROM_API_USERNAME
    ROQUA_ROM_API_PASSWORD
    ROQUA_DOSSIER_GROUP_ID

## Create dossier in RoQua Core

Als eerste stap wordt bij aanmelding een call gedaan om een dossier te openen. Hierbij wordt het ID die ontvangen is van
het Espria Ledenpanel doorgestuurd zodat dit later te koppelen is.

[Full API Docs](/developer/core/dossier/dossiers/)

    POST https://core.roqua.nl/api/v1/dossier_groups/ROQUA_DOSSIER_GROUP_ID/dossiers

    {
      dossier: {
        external_identifier: ':espria_id'
      }
    }

<%= headers 200 %>
<%= json id: '59abe42d-ad25-4273-95ef-86444705e8d3' %>





## Create protocol subscription in RoQua ROM


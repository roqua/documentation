---
title: Changelog
layout: nl/changelog
---

Achter de schermen wordt continue aan RoQua gewerkt. Op deze pagina is een chronologisch
overzicht te vinden is van alle wijzigingen die we maken aan onze software. Sommige van
deze wijzigingen zijn primair technisch van aard en hebben niet of nauwelijks weerslag in
de interface die de eindgebruikers zien. Dat soort wijzigingen worden soms slechts in technischere
termen omschreven. Als u zich afvraagt wat iets nou precies betekent leggen we het uiteraard graag uit.

**Merk op:** Meldingen van toegevoegde of gewijzigde vragenlijsten staan vanaf oktober 2020 niet meer in deze changelog maar in RoQua-admin onder "ROM-config" "Vragenlijst-releasenotes".

<% sorted_articles.select {|post| post[:status] != 'draft' }.each do |post| %>
  <div class='post'>
    <h1><%= post[:title] %></h1>
    <article>
      <%= post.compiled_content %>
    </article>
  </div>
<% end %>

---
title: Changelog
layout: nl/changelog
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

<% sorted_articles.each do |post| %>
  <div class='post'>
    <h1><%= post[:title] %></h1>
    <article>
      <%= post.compiled_content %>
    </article>
  </div>
<% end %>

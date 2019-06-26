---
title: Settings
sort: 400
---

Here you can make some settings for the RoQua application such as the display of a link to the manual in the RoQua interface and whether practitioners will be asked for their personal information when they first use RoQua. You can also specify after which period prepared questionnaires receive a red label and which export format is used for sending ORU messages.

## Active functions

<div style="height: 230px; overflow: hidden">
  <img src="/assets/images/screenshots/instellingen.png" />
</div>

<ul>
  <li><strong>Fill-in period</strong> indicates the time after which the labels of the prepared questionnaires will turn red. This is for the attention of employees, but has no further consequences.</li>
  <li><strong>Name and address cache time</strong> indicates how long RoQua itself stores the name and address data retrieved via an A19 connection. Data that we always retain are zip code, date of birth and sex (for research), and mobile phone number and e-mail address (for automatic protocols).</li>
</ul>

## Migrating ORU connection

<img src="/assets/images/screenshots/instellingen.png" />

Perform the following steps to migrate the ORU connection to the most recent export format:

<ol>
  <li>
    In the RoQua <strong>acceptance environment</strong>, select the most recent export format as the ORU version.
  </li>
  <li>Check if this export format also exists in the RoQua production environment by comparing the key (the row of characters in brackets). If the format does not exist on production, choose an older version that does exist on both acceptance and production.</li>
  <li>Click on "Save Settings" in the RoQua <strong>acceptance environment</strong>.</li>
  <li>
    Subsequently click on the "Generate schedule" button to send an empty ORU message for all questionnaires.
  </li>
  <li>Use the sent ORU messages to update the database schemas on the communication server of your organization.</li>
  <li>Check if the schedule changes have been successfully made by sending empty ORU messages again for all questionnaires.</li>
  <li>
    In the RoQua <strong>production environment</strong>, select the export format with the same key (the row of characters in brackets) as the format selected in the acceptance environment and click on "Save settings"
  </li>
</ol>

The ORU connection has been successfully migrated!

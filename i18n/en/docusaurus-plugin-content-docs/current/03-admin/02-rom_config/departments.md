---
title: Departments
sort: 100
---

## Creating departments

Through departments, employees can filter lists of invitation templates and protocols in the RoQua EPR environment, thereby only showing relevant options within a certain department.
The departments and their associated protocols and invitation templates are defined in the Admin environment.

The name of the department that was selected at the moment a questionnaire was prepared will fall through in the data export in the \<vragenlijstsleutel\>_location column.

<Screenshot src="/screenshots/admin_team_index.png" />

<ul class="hints">
  <li>The name of a department can be chosen freely. For instance, a location name can be chosen, but it is also possible to use departments to distinguish a different management level.</li>
  <li>Since departments primarily serve a filter function in RoQua, it is recommended to create departments in such a way that employees do not need to switch all too often. Group protocols and invitation templates that are often used by the same persons in within the same department.</li>
  <li>Every RoQua user is free to change between departments or not to have a department selected. There is no guarantee that the correct department was selected when a questionnaire was prepared in case the particular questionnaire is part of multiple protocols at different departments. This also applies to invitation templates.</li>
</ul>

When opening the department page in the Admin environment, a list of existing departments is shown. New departments can be created using the button 'Create new department'. Existing departments can be renamed using the button 'Edit' or removed using the trash can icon.

<Screenshot src="/screenshots/admin_team_new.png" />

When creating a new department, a name must be specified. The e-mail address that is specified under 'Sender address e-mails' will be included as the sender address for invitations sent by e-mail by employees who selected this department when creating the invitation. However, it is strongly recommended to leave this field empty unless you are certain that the internet domain that manages the specified e-mail address correctly authorizes RoQua to use it as the sender address. If the domain does not give permission (the default setting), there is a good chance that these mails will be classified as SPAM.

After pressing 'Create Department', the department is created and invitation templates and protocols can be linked to it. This is done under the configuration pages for protocols and invitation templates under the ROM config menu.

## Linking invitation templates to a department

<Screenshot src="/screenshots/admin_team_invitation_template.png" />

Invitation templates can be linked to 1 department. This invitation template will subsequently use the e-mail address that has been specified for this department.

## Linking protocols to departments

<Screenshot src="/screenshots/admin_team_protocol.png" />

Protocols can be linked to multiple departments simultaneously.

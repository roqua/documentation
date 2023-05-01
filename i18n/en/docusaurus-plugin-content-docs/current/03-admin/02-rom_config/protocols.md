---
title: Protocols
sort: 250
---

## Protocols

The overview of protocols shows which protocols there are, and which measurements that protocol has. It is also possible to make a new protocol here. Clicking on the name of the protocol provides access to managing measurements from that protocol, while clicking on the name of a measurement goes directly to managing that measurement, where questionnaires can be assigned to that measurement.

Deleting protocols is done via the recycle bin button. Deleted protocols can be restored later

<screenshot src="/screenshots/admin_protocols_index.png" />

<ul class="hints hints-sidebar">
  <li>Deleted protocols and measurements remain visible in the Admin environment, but are not visible in the EPR view. Protocols can never be completely deleted because completed questionnaires (and other data) keep track of the protocol from which it was made, and this relationship must be maintained for historical data.</li>
</ul>

## Measurements

With each protocol there is a list of measurements, and it is possible to add new measurements. To do this, click on the "Create new measurement" button. Deleting measurements is done via the recycle bin button. Deleted measurements can be restored later.

<screenshot src="/screenshots/admin_protocols_measurements.png" />

## Questionnaires

The list of questionnaires is displayed with each measurement. At the bottom it is also possible to add extra questionnaires. It is possible to change the order of the questionnaires using the arrows next to a list.

With a measurement you can set a number of options per questionnaire. To do this, click on the <icon name="edit_icon" /> button at the questionnaire. In the next screen, you can set a number of options for the chosen questionnaire. These options are always limited to the questionnaire within this measurement, so lists can have different options per measurement.

<screenshot src="/screenshots/admin_recently_answered_questionnaires_timespan.png" />

### Selected by default

RoQua has the option to by default select questionnaires within a measurement when you are preparing questionnaires.

### Time span

A time span can be set for each questionnaire within a protocol. This time span is used to determine whether a questionnaire has been completed recently enough to not having to be completed again.

The effect of this setting is that when an employee prepares a questionnaire, and this questionnaire has been completed within, for example, the last 3 weeks, then this questionnaire is displayed separately from the rest. Recently completed questionnaires are never selected by default.

<screenshot src="/screenshots/epd_recently_answered_fixed_questionnaires.png" />



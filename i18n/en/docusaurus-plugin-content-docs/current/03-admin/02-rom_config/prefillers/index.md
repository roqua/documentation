# Prefillers

Within a protocol it is possible to prefill some answers, when a **professional** completes the questionnaire. We currently support two ways of calculating the prefilled answers:

* Prefill with answers from a previous completion of the same questionnaire.
* Prefill with answers based on data from a FHIR lab result.

To configure this, start with the questionnaires of a measurement, and click on the wrench:

<Screenshot src="/screenshots/prefillers/edit_measured_questionnaire_button.png" />

On the next page there's a list of prefillers at the bottom. Each prefiller is for 1 specific question of the questionnaire (but not every question needs to be prefilled):

<Screenshot src="/screenshots/prefillers/prefillers_list.png" />

Choose the type of prefiller you want to create, or manage existing prefillers using their buttons.

## Prefill from a previous completion

The form for this type of prefiller looks like:

<Screenshot src="/screenshots/prefillers/prior_response_form.png" />

* _"Field to prefill":_ which question do you want to prefill
* _"Copy from":_ from which question in the previous completion do you want to copy the answer
* _"Maximum age":_ To prevent copying over data from an old and finished treatment, you need to specify the maximum age of the previous completion for it to be viable for prefilling. We apologise for the inconvenience, but for technical reasons this value is given in **seconds**, although you can also enter it in [ISO8601](https://www.digi.com/resources/documentation/digidocs/90001488-13/reference/r_iso_8601_duration_format.htm) format.

## Prefill from lab results

The form for this type of prefiller looks like:

<Screenshot src="/screenshots/prefillers/fhir_prefiller_form.png" />

* _"Field to prefill":_ which question do you want to prefill
* _"Fhir endpoint":_ Setting up the connection to a FHIR server is handled for you by RoQua support, but once set up you can choose which FHIR server to query here. You'll probably only have one.
* _"Coding system" & "Code":_ to fetch the lab result from your server we ask it for a result with this code. There are multiple entities that maintain standard lists of codes, but `http://loinc.org` is usually the one used for the Coding system.
* _"Type of value":_ Lab results can be of different types. Currently we only support `valueQuantity`, which are numerical values. More support might be implemented if someone has a specific need, but we didn't want to build a lot of things if nobody needed it.
* _"Unit":_ for the `valueQuantity` we check that it matches this unit. It is up to you to make sure that this matches the unit that the questionnaire expects, we do not do unit conversions, but we do prevent using values returned that do not match the unit given here. Note: *case sensitive, and e.g. liters usually are `L`*
* _"Maximum age":_ Usually it's not desired to copy over very old lab results, because the questionnaire is probably being completed for the current time. We apologise for the inconvenience, but for technical reasons this value is given in **seconds**, although you can also enter it in [ISO8601](https://www.digi.com/resources/documentation/digidocs/90001488-13/reference/r_iso_8601_duration_format.htm) format.

---
title: HL7 2.4 ORU^R01
status: stable
---

This document describes the types of ORU messages RoQua sends out. The list of
examples when the ORUs are triggered are not exhaustive, and the given ORU-messages
serve as examples. For details, please refer to the HL7 v2.4 specification.

## Message format

### OBR

For responses, RoQua sends a single OBR record, with a series of OBX records. The OBR-15-1 field will contain the key of the questionnaire that the response is about. All OBX field names (OBX-3-1) will also be prefixed with this key.

    OBR|1||2599||||201211201139||||||||mansa||||||||||S

### OBX: Metadata

The first couple of OBX records will contain some metadata about the response: which protocol it was created under etc.

    OBX|1|ST|mansa_protocol^MANSA Protocol^L||ROM||||||F|||201407301421
    OBX|2|ST|mansa_project^MANSA Project^L||Measurement||||||F|||201407301421
    OBX|3|ST|mansa_measurement^MANSA Measurement^L||Intake||||||F|||201407301421
    OBX|4|ST|mansa_notes^MANSA Notes^L||||||||F|||201407301421
    OBX|5|ST|mansa_location^MANSA Location^L||Team||||||F|||201407301421
    OBX|6|ST|mansa_invited_at^^L||||||||F|||201407301421
    OBX|7|ST|mansa_compl_by^MANSA Completed By^L||johndoe||||||F|||201407301421
    OBX|8|ST|mansa_date^^L||||||||F|||201407301421

### OBX: Calculated scores

This is followed by records for each of the calculated scores a questionnaire has.

    OBX|9|NM|mansa_totaal^MANSA Score^L||24|||LL|||F|||201407301421
    OBX|10|ST|mansa_gemiddelde^^L||||||||F|||201407301421
    OBX|11|ST|mansa_interp^^L||||||||F|||201407301421

### OBX: Raw answers

Finally, records are given for the questions of the questionnaire. For example:

    OBX|12|ST|mansa_1^MANSA v_1^L||1|||HH|||F|||201407301421
    OBX|13|ST|mansa_6^MANSA v_6^L||2|||HH|||F|||201407301421
    OBX|14|ST|mansa_7^MANSA v_7^L||2|||HH|||F|||201407301421
    OBX|15|ST|mansa_8^MANSA v_8^L||3|||H|||F|||201407301421
    OBX|16|ST|mansa_9^MANSA v_9^L||2|||HH|||F|||201407301421
    OBX|17|ST|mansa_10^MANSA v_10^L||2|||HH|||F|||201407301421
    OBX|18|ST|mansa_11^MANSA v_11^L||1||||||F|||201407301421
    OBX|19|ST|mansa_12^MANSA v_12^L||2|||HH|||F|||201407301421
    ...

## Examples

### Empty response

Upon creation of a response, an ORU message will be sent with status `S`. This status
will also be sent when an incompletable response becomes completable again.

    MSH|^~\&|Roqua|RGOc|||20121120113522||ORU^R01|8da2b665b7|P|2.4|||||||
    PID|1||123^^^^^^^|||||||||||||||||||||||||||
    OBR|1||2599||||201211201139||||||||mansa||||||||||S
    OBX|1|ST|mansa_protocol^MANSA Protocol^L||ROM||||||S|||201211201139
    OBX|2|ST|mansa_project^MANSA Project^L||Meettraject 1||||||S|||201211201139
    OBX|3|ST|mansa_measurement^MANSA Measurement^L||Evaluatie||||||S|||201211201139
    OBX|4|ST|mansa_notes^MANSA Notes^L||||||||S|||201211201139
    OBX|5|ST|mansa_location^MANSA Location^L||||||||S|||201211201139
    OBX|6|ST|mansa_compl_by^MANSA Completed By^L||123||||||S|||201211201139
    OBX|7|NM|mansa_totaal^MANSA Score^L||||||||S|||201211201139
    OBX|8|ST|mansa_1^MANSA v_1^L||||||||S|||201211201139
    OBX|9|ST|mansa_6^MANSA v_6^L||||||||S|||201211201139
    OBX|10|ST|mansa_7^MANSA v_7^L||||||||S|||201211201139
    OBX|11|ST|mansa_8^MANSA v_8^L||||||||S|||201211201139
    OBX|12|ST|mansa_9^MANSA v_9^L||||||||S|||201211201139
    OBX|13|ST|mansa_10^MANSA v_10^L||||||||S|||201211201139
    OBX|14|ST|mansa_11^MANSA v_11^L||||||||S|||201211201139
    OBX|15|ST|mansa_12^MANSA v_12^L||||||||S|||201211201139
    OBX|16|ST|mansa_13^MANSA v_13^L||||||||S|||201211201139
    OBX|17|ST|mansa_14^MANSA v_14^L||||||||S|||201211201139
    OBX|18|ST|mansa_15^MANSA v_15^L||||||||S|||201211201139
    OBX|19|ST|mansa_16^MANSA v_16^L||||||||S|||201211201139
    OBX|20|ST|mansa_17^MANSA v_17^L||||||||S|||201211201139
    OBX|21|ST|mansa_18^MANSA v_18^L||||||||S|||201211201139
    OBX|22|ST|mansa_19^MANSA v_19^L||||||||S|||201211201139
    OBX|23|ST|mansa_20^MANSA v_20^L||||||||S|||201211201139

### Completed response

As an example, let's describe the ORU message for a completed response.

    MSH|^~\&|Roqua|RGOc|||20140730142614||ORU^R01|2fde231c54|P|2.4|||||||
    PID|1||123^^^^^^^|||||||||||||||||||||||||||
    OBR|1||4073||||201407301421||||||||mansa||||||||||F
    OBX|1|ST|mansa_protocol^MANSA Protocol^L||ROM||||||F|||201407301421
    OBX|2|ST|mansa_project^MANSA Project^L||Measurement||||||F|||201407301421
    OBX|3|ST|mansa_measurement^MANSA Measurement^L||Intake||||||F|||201407301421
    OBX|4|ST|mansa_notes^MANSA Notes^L||||||||F|||201407301421
    OBX|5|ST|mansa_location^MANSA Location^L||Team||||||F|||201407301421
    OBX|6|ST|mansa_invited_at^^L||||||||F|||201407301421
    OBX|7|ST|mansa_compl_by^MANSA Completed By^L||veldthuis||||||F|||201407301421
    OBX|8|ST|mansa_date^^L||||||||F|||201407301421
    OBX|9|NM|mansa_totaal^MANSA Score^L||24|||LL|||F|||201407301421
    OBX|10|ST|mansa_gemiddelde^^L||||||||F|||201407301421
    OBX|11|ST|mansa_interp^^L||||||||F|||201407301421
    OBX|12|ST|mansa_1^MANSA v_1^L||1|||HH|||F|||201407301421
    OBX|13|ST|mansa_6^MANSA v_6^L||2|||HH|||F|||201407301421
    OBX|14|ST|mansa_7^MANSA v_7^L||2|||HH|||F|||201407301421
    OBX|15|ST|mansa_8^MANSA v_8^L||3|||H|||F|||201407301421
    OBX|16|ST|mansa_9^MANSA v_9^L||2|||HH|||F|||201407301421
    OBX|17|ST|mansa_10^MANSA v_10^L||2|||HH|||F|||201407301421
    OBX|18|ST|mansa_11^MANSA v_11^L||1||||||F|||201407301421
    OBX|19|ST|mansa_12^MANSA v_12^L||2|||HH|||F|||201407301421
    OBX|20|ST|mansa_13^MANSA v_13^L||2||||||F|||201407301421
    OBX|21|ST|mansa_14^MANSA v_14^L||2||||||F|||201407301421
    OBX|22|ST|mansa_15^MANSA v_15^L||2||||||F|||201407301421
    OBX|23|ST|mansa_16^MANSA v_16^L||1|||HH|||F|||201407301421
    OBX|24|ST|mansa_17^MANSA v_17^L||2|||HH|||F|||201407301421
    OBX|25|ST|mansa_18^MANSA v_18^L||2|||HH|||F|||201407301421
    OBX|26|ST|mansa_19^MANSA v_19^L||3|||H|||F|||201407301421
    OBX|27|ST|mansa_20^MANSA v_20^L||2|||HH|||F|||201407301421

### Responses that can no longer be completed

When an uncompleted invitation gets closed or expires, the responses that were created
for it can no longer be completed. In this case, RoQua sends out ORUs with status `X`
for those responses.

    MSH|^~\&|Roqua|RGOc|||20121120113543||ORU^R01|bef30795c0|P|2.4|||||||
    PID|1||123^^^^^^^|||||||||||||||||||||||||||
    OBR|1||2599||||201211201139||||||||mansa||||||||||X
    OBX|1|ST|mansa_protocol^MANSA Protocol^L||ROM||||||X|||201211201139
    OBX|2|ST|mansa_project^MANSA Project^L||Meettraject 1||||||X|||201211201139
    OBX|3|ST|mansa_measurement^MANSA Measurement^L||Evaluatie||||||X|||201211201139
    OBX|4|ST|mansa_notes^MANSA Notes^L||||||||X|||201211201139
    OBX|5|ST|mansa_location^MANSA Location^L||||||||X|||201211201139
    OBX|6|ST|mansa_compl_by^MANSA Completed By^L||123||||||X|||201211201139
    OBX|7|NM|mansa_totaal^MANSA Score^L||||||||X|||201211201139
    OBX|8|ST|mansa_1^MANSA v_1^L||||||||X|||201211201139
    OBX|9|ST|mansa_6^MANSA v_6^L||||||||X|||201211201139
    OBX|10|ST|mansa_7^MANSA v_7^L||||||||X|||201211201139
    OBX|11|ST|mansa_8^MANSA v_8^L||||||||X|||201211201139
    OBX|12|ST|mansa_9^MANSA v_9^L||||||||X|||201211201139
    OBX|13|ST|mansa_10^MANSA v_10^L||||||||X|||201211201139
    OBX|14|ST|mansa_11^MANSA v_11^L||||||||X|||201211201139
    OBX|15|ST|mansa_12^MANSA v_12^L||||||||X|||201211201139
    OBX|16|ST|mansa_13^MANSA v_13^L||||||||X|||201211201139
    OBX|17|ST|mansa_14^MANSA v_14^L||||||||X|||201211201139
    OBX|18|ST|mansa_15^MANSA v_15^L||||||||X|||201211201139
    OBX|19|ST|mansa_16^MANSA v_16^L||||||||X|||201211201139
    OBX|20|ST|mansa_17^MANSA v_17^L||||||||X|||201211201139
    OBX|21|ST|mansa_18^MANSA v_18^L||||||||X|||201211201139
    OBX|22|ST|mansa_19^MANSA v_19^L||||||||X|||201211201139
    OBX|23|ST|mansa_20^MANSA v_20^L||||||||X|||201211201139

### Responses that are deleted

When a measurement is deleted, the responses that were recorded under it are
also deleted. When this happens, ORU messages with status `D` are triggered
for these responses.

    MSH|^~\&|Roqua|RGOc|||20121120122117||ORU^R01|5e771beaed|P|2.4|||||||
    PID|1||123^^^^^^^|||||||||||||||||||||||||||
    OBR|1||2599||||201211201139||||||||mansa||||||||||D
    OBX|1|ST|mansa_protocol^MANSA Protocol^L||ROM||||||D|||201211201139
    OBX|2|ST|mansa_project^MANSA Project^L||Meettraject 1||||||D|||201211201139
    OBX|3|ST|mansa_measurement^MANSA Measurement^L||Evaluatie||||||D|||201211201139
    OBX|4|ST|mansa_notes^MANSA Notes^L||||||||D|||201211201139
    OBX|5|ST|mansa_location^MANSA Location^L||||||||D|||201211201139
    OBX|6|ST|mansa_compl_by^MANSA Completed By^L||123||||||D|||201211201139
    OBX|7|NM|mansa_totaal^MANSA Score^L||||||||D|||201211201139
    OBX|8|ST|mansa_1^MANSA v_1^L||||||||D|||201211201139
    OBX|9|ST|mansa_6^MANSA v_6^L||||||||D|||201211201139
    OBX|10|ST|mansa_7^MANSA v_7^L||||||||D|||201211201139
    OBX|11|ST|mansa_8^MANSA v_8^L||||||||D|||201211201139
    OBX|12|ST|mansa_9^MANSA v_9^L||||||||D|||201211201139
    OBX|13|ST|mansa_10^MANSA v_10^L||||||||D|||201211201139
    OBX|14|ST|mansa_11^MANSA v_11^L||||||||D|||201211201139
    OBX|15|ST|mansa_12^MANSA v_12^L||||||||D|||201211201139
    OBX|16|ST|mansa_13^MANSA v_13^L||||||||D|||201211201139
    OBX|17|ST|mansa_14^MANSA v_14^L||||||||D|||201211201139
    OBX|18|ST|mansa_15^MANSA v_15^L||||||||D|||201211201139
    OBX|19|ST|mansa_16^MANSA v_16^L||||||||D|||201211201139
    OBX|20|ST|mansa_17^MANSA v_17^L||||||||D|||201211201139
    OBX|21|ST|mansa_18^MANSA v_18^L||||||||D|||201211201139
    OBX|22|ST|mansa_19^MANSA v_19^L||||||||D|||201211201139
    OBX|23|ST|mansa_20^MANSA v_20^L||||||||D|||201211201139

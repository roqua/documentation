---
sidebar_position: 0
---

# Technical Documentation

Expand 'overview' (on the right) for general information on the ROM (RoQua) API.

Access to these API endpoints is controlled by [API tokens](../../rom_manual/admin/integration/api_tokens) in [RoQua-Admin](https://rom.roqua.nl/manage). An administrator might generate an API token with rights to (a) certain endpoint(s) and provide the developer with a `consumer_key` and `consumer_secret`.

## Example requests:

General (substitute proper values for the `$vars`):
```
curl -u $consumer_key:$consumer_secret https://demo.rom.roqua.nl/api/v1/$endpoint
```


From [Dossier-specific data / Responses](dossier/responses/):
```
curl -X GET  https://demo.rom.roqua.nl/api/v1/dossiers/$dossier_id/responses \
     -u $consumer_key:$consumer_secret
```
```
curl -X POST https://demo.rom.roqua.nl/api/v1/dossiers/$dossier_id/responses \
     -u $consumer_key:$consumer_secret \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d '{"questionnaire_key": "honos_plus", "answer_data": "v_1": "a0", "v_2": "a1", "v_3": "a2", "v_4": "a3", "v_5": "a4", "v_6": "a0", "v_7": "a1", "v_8": "a2", "v_10": null, "v_9": null, "v_11": "a3", "v_14": "a4", "v_15": "a0", "v_16": "a1", "v_17": "a2", "v_18": "a3", "v_19": "a4", "v_20": "a0", "v_21": "a1", "v_22": "a2", "v_23": "a3", "v_z1": "a1"}, "started_at": 1654088400, "filled_out_at": 1654088400, "respondent": "profess"}'
```
En dan nog een keer met [JWT-token](overview/authentication/#api-jwt-tokens) (JWT-token kan voor tests b.v. op [jwt.io](https://jwt.io) worden gegenereerd)
```
curl -X POST https://demo.rom.roqua.nl/api/v1/dossiers/$dossier_id/responses \
     -H 'Authorization: Bearer $jwt_token' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d '{"questionnaire_key": "honos_plus", "answer_data": "v_1": "a0", "v_2": "a1", "v_3": "a2", "v_4": "a3", "v_5": "a4", "v_6": "a0", "v_7": "a1", "v_8": "a2", "v_10": null, "v_9": null, "v_11": "a3", "v_14": "a4", "v_15": "a0", "v_16": "a1", "v_17": "a2", "v_18": "a3", "v_19": "a4", "v_20": "a0", "v_21": "a1", "v_22": "a2", "v_23": "a3", "v_z1": "a1"}, "started_at": 1654088400, "filled_out_at": 1654088400, "respondent": "profess"}'
```

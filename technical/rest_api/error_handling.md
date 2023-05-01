# REST API Error Handling

## When basic HTTP authentication fails

%= headers 401 %>
%= no_body %>


## When validations fail

%= headers 422 %>
%= json errors: {
           open_till: ['in_past'],
           questionnaire_keys: ['blank', 'invalid'], #invalid when a key could not be found.
         }
%>

## When no dossier_id is provided

%= headers 404 %>
%= no_body %>

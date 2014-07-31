---
title: Overview
sort: -1000
---

# General flow

## validation errors

When trying to create an object and a validation fails (e.g. an email doesn't have an @) a status of 422 (unprocessable_entity) is returned with a list of errors.

The errors are keywords, so you can use your own translation files. For a list (TODO) we will link the default translation file of the core_api gem when it's up.

<%= headers 422 %>
<%= json errors: {
           email: ['invalid_email'],
           birthdate: ['invalid_date']
         }
%>

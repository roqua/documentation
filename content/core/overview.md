---
title: Overview
sort: -1000
---

# General flow

## validation errors

When trying to create an object and a validation fails (e.g. an email doesn't have an @) a status of 422 (unprocessable_entity) is returned with a list of errors.

The errors are keywords, so you can use your own translation files. For a list see the [translation file included in the ruby gem](http://rubydoc.info/gems/roqua-core-api/file/config/locales/validation_errors.yml)

<%= headers 422 %>
<%= json errors: {
           email: ['invalid_email'],
           birthdate: ['invalid_date']
         }
%>

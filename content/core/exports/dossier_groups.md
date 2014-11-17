---
title: Dossier Groups
status: draft
---

## Export all information under a dossier group

This call will return a serialized version of the entire tree of objects under a given dossier group. Note that this might take a very long time if the group is sufficiently large. We plan on adding an asynchronous version of this API later.

    POST /api/v1/dossier_groups/exports

### Response

<%= headers 200 %>
<%= json dossier_group_export: {
    dossiers: [
      {
        id: 1,
        external_identifier: '123',
        people: [
          {id: 'uuid', role: 'patient', firstname: 'John', lastname: 'Doe', etc: 'etc'},
          {id: 'uuid', role: 'parent', firstname: 'Jake', lastname: 'Doe', etc: 'etc'},
          {id: 'uuid', role: 'parent', firstname: 'Mary', lastname: 'Doe', etc: 'etc'}
        ]
      }
    ]
  }
%>

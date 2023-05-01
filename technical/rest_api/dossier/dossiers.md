# Dossiers

## Get a single dossier

<snapshot json={{
  request: {
    request_method: "GET",
    path: "/api/v1/dossiers/$ID"
  },
  response: {
    status: 200,
    body: {
      id: 1,
      epd_id: "123",
      gender: "2",
      birthdate: "1920-02-04",
      sync_status_message: "Ophalen meest recente gegevens mislukt! Deze gegevens kunnen daarom verouderd zijn",
      editable: false
    }
  }
}} />


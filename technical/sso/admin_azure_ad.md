# Management UI via Azure AD

For logging in to the admin area of RoQua, we can use Azure ActiveDirectory to let users log in with their regular organization account.

This needs to be set up by our support team. What we need is for someone to create two App Registrations (staging and production) in your Azure. Both should probably be created in your production Azure.

Configure these as follows:

* Redirect URI: https://rom.roqua-staging.nl/auth/NAME/callback (staging) or https://rom.roqua.nl/auth/NAME/callback (production)
* Optional claims: "email"
* Token type: ID

We then need to receive:

* Application (client) ID
* Directory (tenant) ID
* Secret Value
* Expiry date


# Glossary

In this manual we will regularly use terms that may not exactly match what is called at your workplace.

## Files

The central model in our application is the File. Each file is about a client. Access to a file is through the EPD module, which is started from the EPD. The EPD provides us with a number for the file.

## Respondents

Each file has 1 or more respondents. Respondents are the people who answer questionnaires. The client the file is about is in any case a respondent (although they will not always actually fill in a questionnaire), because we keep track of who exactly the file is about on this patient-respondent. In addition, there are different types such as parents, caregivers, teachers. Respondents are about people, and this is where we store their name and contact details.

## Questionnaires

When we talk about a questionnaire, in our case we always mean the list itself, and not a completion of it. So this is, so to speak, the unfilled form. For a questionnaire we know which questions it has, which scores must be calculated in which way, and what kind of graphs can be shown.

## Responses

The above models all come together in the most important model of our application. Where a *Questionnaire* is the unfilled form, a *Response* is what you get when a *Respondent* answers the questions of a questionnaire. A Response contains answers (to questions), and after saving we perform the score calculations and also store them.

A response is attached to a file, and also knows which questionnaire it was, which respondent completed it, etc.

## Non-response

When one or more questionnaires are not answered, RoQua registers a non-response. In addition, it is possible to create one yourself when you as a healthcare provider already know that the lists will not be completed.

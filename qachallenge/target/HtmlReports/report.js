$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/specifications/ContactFormError.feature");
formatter.feature({
  "name": "Feature to test Form Page funcionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "User navigate to the login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.GivenSteps.the_browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the home page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AndSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User fills the in an improper way",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@contacFormError"
    }
  ]
});
formatter.step({
  "name": "the user navigates to the contact form page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.GivenSteps.the_user_navigate_to_the_contact_form_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "does not fill all text fields properly",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AndSteps.does_not_fill_all_text_fields_properly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.WhenSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then the \"error\" message \"There is 1 error\" is displayed to the customer",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ThenSteps.then_the_message_is_displayed_to_the_customer(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User navigate to the login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.GivenSteps.the_browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the home page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AndSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User fills the form with invalid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@contacFormErrorEmail"
    }
  ]
});
formatter.step({
  "name": "the user navigates to the contact form page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.GivenSteps.the_user_navigate_to_the_contact_form_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and fills the email field in an invalid way",
  "keyword": "When "
});
formatter.match({
  "location": "steps.WhenSteps.and_fills_the_email_field_in_an_invalid_way()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the email field is highlited warning an error",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ThenSteps.the_email_field_is_highlited_warning_an_error()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/specifications/ContactFormSuccess.feature");
formatter.feature({
  "name": "Feature to test Form Page funcionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "User navigate to the login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.GivenSteps.the_browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the home page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AndSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User fills the form Submit Error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@contacFormSuccess"
    }
  ]
});
formatter.step({
  "name": "the user navigates to the contact form page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.GivenSteps.the_user_navigate_to_the_contact_form_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fills all text fields properly",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AndSteps.fills_all_text_fields_properly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.WhenSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then the \"success\" message \"Your message has been successfully sent to our team.\" is displayed to the customer",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ThenSteps.then_the_message_is_displayed_to_the_customer(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
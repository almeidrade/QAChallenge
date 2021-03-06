package steps;

import base.TestBase;
import io.cucumber.java.en.Given;
import pages.ContactUsPage;
import pages.HomePage;

public class GivenSteps extends TestBase {
	
	@Given("the browser is opened")
	public void the_browser_is_opened() throws Throwable {
		SetDriverType(DriverType.WEB, FrontEndType.CHROME);			
	}
	
	@Given("the user navigates to the contact form page")
	public void the_user_navigate_to_the_contact_form_page() throws Throwable {
		HomePage.ClickContactFormPage();
		ContactUsPage.validateLoggedContactUsPage("CUSTOMER SERVICE - CONTACT US");
	}
}

package base;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		features="src/specifications",
		glue = {"steps"},
		monochrome = true,
		plugin = {"pretty", "html:target/HtmlReports",
				"junit:target/JunitReports/report.xml",
				"json:target/JSONReports/report.json"},
		tags = {"@regression"})
public class TestRunner extends TestBase {	
	public static void TestCleanup() {
		driver.close();
		driver.quit();
	}	
}

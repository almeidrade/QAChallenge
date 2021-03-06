package base;

import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Helpers extends TestBase {

	public static By Click(By by) {
		driver.findElement(by).click();
		return by;
	}

	public static By SendKeys(By by, String text) {
			driver.findElement(by).sendKeys(text);
		return by;
	}

	public static By Select(By by, String value) {
		Select dropBox = new Select(driver.findElement(by));
		dropBox.selectByValue(value);
		return by;
	}

	public static void NavigateTo(String text) {
		driver.navigate().to(text);
	}

	public static void HoverElement(String element) {
		Actions builder = new Actions(driver);
		builder.moveToElement(driver.findElement(By.xpath("//*[@" + element + "]"))).perform();
	}

	public static String GetText(By by, int timeoutSeconds) throws Throwable {

		for (int i = 0; i < timeoutSeconds; i++) {
			try {
				return driver.findElement(by).getText();
			} catch (Exception e) {
				Thread.sleep(1000);
			}
		}
		return null;
	}

	public static boolean ElementExists(By by, int timeoutSeconds) throws InterruptedException {
		for (int i = 0; i <timeoutSeconds; i++) {
			try {
				if (driver.findElements(by).size() != 0) {
					return true;
				}
			} catch (Exception e) {
				Thread.sleep(1000);
			}
		}		
		return false;
	}
	
	public static void AttachFileToWebPage(By by, String pathAndName) {
		SendKeys(by, pathAndName);
	}
	

}

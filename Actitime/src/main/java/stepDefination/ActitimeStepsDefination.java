package stepDefination;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ActitimeStepsDefination {
	WebDriver driver;
	
	
	@Given("^when the user will pass the URL$")
	public void when_the_user_will_pass_the_URL() throws IOException{
	   
		driver= new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get(DemoProperties.getObject("LoginUrL"));
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	    
	}

	@Then("^The Login Page should be open$")
	public void the_Login_Page_should_be_open() {
		String expectedTitle="actiTIME - Login";
         String actualTitle=driver.getTitle();
         Assert.assertEquals(expectedTitle, actualTitle);
         System.out.println(actualTitle);
	    
	    
	}
	


	@When("^user will enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_will_enter_and(String un, String pw) throws IOException  {
	    driver.findElement(By.id(DemoProperties.getObject("UserNameID"))).sendKeys(un);
	    driver.findElement(By.name(DemoProperties.getObject("PasswordName"))).sendKeys(pw);
	   
	    
	}
	

	@When("^click on login$")
	public void click_on_login()  {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.id("loginButton")).click(); 
	}
	
	@When("^User will click on the task button$")
	public void user_will_click_on_the_task_button() throws IOException {
	    driver.findElement(By.xpath(DemoProperties.getObject("TaskButton"))).click();
	    
	    
	}

	@Then("^Task list should open$")
	public void task_list_should_open()  {
	    
		//Assertion Code Be deployed
		
	}

	@When("^the user clic on the Add New button and click on \\+New Customer$")
	public void the_user_clic_on_the_Add_New_button_and_click_on_New_Customer() throws IOException  {
		driver.findElement(By.xpath(DemoProperties.getObject("AddNewButton"))).click();
		driver.findElement(By.xpath(DemoProperties.getObject("NewCustomer"))).click();
	    
	}

	@Then("^Create New Pop Up Should Create$")
	public void create_New_Pop_Up_Should_Create() {
	    //Assertion Code Should Be Deployed
	}

	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String customerName, String customerDisc) {
		driver.findElement(By.id("customerLightBox_nameField")).sendKeys(customerName);
		driver.findElement(By.id("customerLightBox_descriptionField")).sendKeys(customerDisc);
		
		
	    
	}

	@When("^Click on The Create Customer button$")
	public void click_on_The_Create_Customer_button() {
		driver.findElement(By.id("customerLightBox_commitBtn")).click();
	}
	
	//Delete customer code
	@When("^the user click on the search box$")
	public void the_user_click_on_the_search_box() throws IOException {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath(DemoProperties.getObject("searchBox"))).click();
	}

	@When("^user will send the \"([^\"]*)\" and verify that the perticular customer is available or not$")
	public void user_will_send_the_and_verify_that_the_perticular_customer_is_available_or_not(String custname) throws IOException{
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath(DemoProperties.getObject("searchBox"))).sendKeys(custname);
		String expectedCustName=custname;
		System.out.println(expectedCustName);
		String ActualCustName=driver.findElement(By.xpath(DemoProperties.getObject("custNameXpath"))).getText();
		System.out.println(ActualCustName);
	}

	@When("^user mousover the pertcular customer and click on the setting button$")
	public void user_mousover_the_pertcular_customer_and_click_on_the_setting_button() throws IOException {
	    // Write code here that turns the phrase above into concrete actions
		Actions act= new Actions(driver);
	    WebElement custNode=driver.findElement(By.xpath("//span[@class='highlightToken']"));
	    
	    act.moveToElement(custNode).perform();
	    driver.findElement(By.xpath("//span[@class='highlightToken']/../..//div[@class='editButton available']")).click();
	}

	@Then("^a pop up of perticular customer will create$")
	public void a_pop_up_of_perticular_customer_will_create()  {
	    //later we will implement the code
	    
	}

	@When("^user click on the action button and click on delete button$")
	public void user_click_on_the_action_button_and_click_on_delete_button() throws IOException  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath(DemoProperties.getObject("actionButton"))).click();
	    driver.findElement(By.xpath(DemoProperties.getObject("deleteButton"))).click();
	}

	@When("^click on Delete permanently$")
	public void click_on_Delete_permanently() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("customerPanel_deleteConfirm_submitTitle")).click();
	}


	
	
	
	

	@Then("^Close the browser$")
	public void close_the_browser()  {
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	}


}

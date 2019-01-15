#Author: rajesh.rajeshthakur.selenium@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Actitime
Feature: This feature is used to Automate the Actitime Application 
  

  @login
  Scenario: this Scenario is used to login in the application
    Given when the user will pass the URL
    Then The Login Page should be open
    When user will enter "admin" and "manager" 
    And click on login
    
    

  @CreateCustomer
  Scenario Outline: This Scenario is used to create the number of custome
    Given when the user will pass the URL
    Then The Login Page should be open
    When user will enter "admin" and "manager" 
    And click on login
    When User will click on the task button
    Then Task list should open
    When the user clic on the Add New button and click on +New Customer
    Then Create New Pop Up Should Create
    When user enter "<customerName>" and "<customerDisc>"
    And Click on The Create Customer button
    Then Close the browser 

    Examples: 
      | customerName  | customerDisc        |
      | Rajesh        | He is Programmer    | 
      | Mithilesh     | He is test Engineer |

      
      
  @DeleteCustomer
  Scenario Outline: This Scenario is used to Delete the custome
    Given when the user will pass the URL
    Then The Login Page should be open
    When user will enter "admin" and "manager" 
    And click on login
    When User will click on the task button
    Then Task list should open
    When the user click on the search box
    And user will send the "<customerName>" and verify that the perticular customer is available or not
    When user mousover the pertcular customer and click on the setting button
		Then a pop up of perticular customer will create
		When user click on the action button and click on delete button
		And click on Delete permanently
    Then Close the browser 

    Examples: 
      | customerName  |
      | Rajesh        |
      | Mithilesh     |
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Actitime.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: rajesh.rajeshthakur.selenium@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "This feature is used to Automate the Actitime Application",
  "description": "",
  "id": "this-feature-is-used-to-automate-the-actitime-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Actitime"
    }
  ]
});
formatter.scenarioOutline({
  "line": 54,
  "name": "This Scenario is used to Delete the custome",
  "description": "",
  "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@DeleteCustomer"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "when the user will pass the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "The Login Page should be open",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user will enter \"admin\" and \"manager\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User will click on the task button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Task list should open",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the user click on the search box",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user will send the \"\u003ccustomerName\u003e\" and verify that the perticular customer is available or not",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user mousover the pertcular customer and click on the setting button",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "a pop up of perticular customer will create",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user click on the action button and click on delete button",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "click on Delete permanently",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome;",
  "rows": [
    {
      "cells": [
        "customerName"
      ],
      "line": 70,
      "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome;;1"
    },
    {
      "cells": [
        "Rajesh"
      ],
      "line": 71,
      "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome;;2"
    },
    {
      "cells": [
        "Mithilesh"
      ],
      "line": 72,
      "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "This Scenario is used to Delete the custome",
  "description": "",
  "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Actitime"
    },
    {
      "line": 53,
      "name": "@DeleteCustomer"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "when the user will pass the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "The Login Page should be open",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user will enter \"admin\" and \"manager\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User will click on the task button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Task list should open",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the user click on the search box",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user will send the \"Rajesh\" and verify that the perticular customer is available or not",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user mousover the pertcular customer and click on the setting button",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "a pop up of perticular customer will create",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user click on the action button and click on delete button",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "click on Delete permanently",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeStepsDefination.when_the_user_will_pass_the_URL()"
});
formatter.result({
  "duration": 28198710185,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.the_Login_Page_should_be_open()"
});
formatter.result({
  "duration": 44065333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 17
    },
    {
      "val": "manager",
      "offset": 29
    }
  ],
  "location": "ActitimeStepsDefination.user_will_enter_and(String,String)"
});
formatter.result({
  "duration": 832120358,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.click_on_login()"
});
formatter.result({
  "duration": 177416491,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.user_will_click_on_the_task_button()"
});
formatter.result({
  "duration": 14107999787,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.task_list_should_open()"
});
formatter.result({
  "duration": 20014,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.the_user_click_on_the_search_box()"
});
formatter.result({
  "duration": 4477163188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajesh",
      "offset": 20
    }
  ],
  "location": "ActitimeStepsDefination.user_will_send_the_and_verify_that_the_perticular_customer_is_available_or_not(String)"
});
formatter.result({
  "duration": 30621557877,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027highlightToken\u0027]\"}\nCommand duration or timeout: 30.10 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Rajesh-PC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c823e65e-772a-4d5d-b2b2-c8b31b8c5bd4\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027highlightToken\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefination.ActitimeStepsDefination.user_will_send_the_and_verify_that_the_perticular_customer_is_available_or_not(ActitimeStepsDefination.java:111)\r\n\tat ✽.And user will send the \"Rajesh\" and verify that the perticular customer is available or not(Actitime.feature:62)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027highlightToken\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Rajesh-PC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Rajesh/AppData/Local/Temp/anonymous2691846239253063532webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/Rajesh/AppData/Local/Temp/anonymous2691846239253063532webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ActitimeStepsDefination.user_mousover_the_pertcular_customer_and_click_on_the_setting_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.a_pop_up_of_perticular_customer_will_create()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.user_click_on_the_action_button_and_click_on_delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.click_on_Delete_permanently()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 72,
  "name": "This Scenario is used to Delete the custome",
  "description": "",
  "id": "this-feature-is-used-to-automate-the-actitime-application;this-scenario-is-used-to-delete-the-custome;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Actitime"
    },
    {
      "line": 53,
      "name": "@DeleteCustomer"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "when the user will pass the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "The Login Page should be open",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user will enter \"admin\" and \"manager\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User will click on the task button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Task list should open",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "the user click on the search box",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user will send the \"Mithilesh\" and verify that the perticular customer is available or not",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user mousover the pertcular customer and click on the setting button",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "a pop up of perticular customer will create",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user click on the action button and click on delete button",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "click on Delete permanently",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeStepsDefination.when_the_user_will_pass_the_URL()"
});
formatter.result({
  "duration": 23414091382,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.the_Login_Page_should_be_open()"
});
formatter.result({
  "duration": 12433723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 17
    },
    {
      "val": "manager",
      "offset": 29
    }
  ],
  "location": "ActitimeStepsDefination.user_will_enter_and(String,String)"
});
formatter.result({
  "duration": 198822570,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.click_on_login()"
});
formatter.result({
  "duration": 171924489,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.user_will_click_on_the_task_button()"
});
formatter.result({
  "duration": 8553746385,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.task_list_should_open()"
});
formatter.result({
  "duration": 18987,
  "status": "passed"
});
formatter.match({
  "location": "ActitimeStepsDefination.the_user_click_on_the_search_box()"
});
formatter.result({
  "duration": 2695094352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mithilesh",
      "offset": 20
    }
  ],
  "location": "ActitimeStepsDefination.user_will_send_the_and_verify_that_the_perticular_customer_is_available_or_not(String)"
});
formatter.result({
  "duration": 33538621571,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Rajesh-PC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5caf48dd-ef94-4b5c-bccf-3fb762daf5d6\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefination.ActitimeStepsDefination.user_will_send_the_and_verify_that_the_perticular_customer_is_available_or_not(ActitimeStepsDefination.java:111)\r\n\tat ✽.And user will send the \"Mithilesh\" and verify that the perticular customer is available or not(Actitime.feature:62)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:162)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefination.ActitimeStepsDefination.user_will_send_the_and_verify_that_the_perticular_customer_is_available_or_not(ActitimeStepsDefination.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 76 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ActitimeStepsDefination.user_mousover_the_pertcular_customer_and_click_on_the_setting_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.a_pop_up_of_perticular_customer_will_create()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.user_click_on_the_action_button_and_click_on_delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.click_on_Delete_permanently()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActitimeStepsDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});
package runnerpackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/resources/FeatureFile"},
		glue= {"stepDefination"},
		tags= {"@DeleteCustomer"},
		dryRun=false,
		format= {"pretty","html:test.output"}
		
		
		)

public class ActitimeRunnerClass {

}

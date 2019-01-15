package stepDefination;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Properties;
import java.io.FileReader;
import java.io.IOException;

//import com.gargoylesoftware.htmlunit.javascript.host.file.FileReader;

public class DemoProperties {
    static 	Properties  prop;
    public static void loadData() throws IOException {
    	prop= new Properties();
    	File f = new File(System.getProperty("user.dir")+"\\xpath.properties");
    	FileReader obj= new FileReader(f); 
    	prop.load(obj);
    }
    public static String getObject(String Data) throws IOException {
    	loadData();
    	String data=prop.getProperty(Data);
    	return data;
    }
	

}

# MySQL and Java

## Import the JDBC driver

### Using Netbeans

If you are using Netbeans, the MySQL JDBC (Java DataBase Connectivity) driver is already installed on your system. You only need to import it into you project.

#### Importing MySQL JDBC driver

Open your project in the `Projects` window. Right-click on the `Libraries` folder and select `Add Library...`![Netbeans: Add library menu](/assets/netbeans_add_library.PNG)

In the list with available libraries, find and select the `MySQL JDBC Driver`, and click on the `Add Library` button.

The library is now available in your project.

### Download from internet

If the library is not available in Netbeans, or you are not using Netbeans, you can download it manually from mysql.com: https://dev.mysql.com/downloads/connector/j/

## Creating a database object

```java
String url = "jdbc:mysql://hostname/dbname";
String user = "user";
String password = "mypassword"

Class.forName("com.mysql.jdbc.Driver");
connection = DriverManager.getConnection(url, user, password);     
```

Note: the code above can throw exceptions, thus the code must be placed within a try/catch.

### Connection string

`jdbc:mysql://hostname/dbname`

* hostname: hostname or ip address of the MySQL server
* dbname: Database name to connect to


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

## Creating a Statement

### SELECT statement

Create an `Statement` object and call its `executeQuery` method with the query as an argument.

The `executeQuery()` method will return an object of type `ResultSet` with all the results of the query.

```java
String query = "SELECT * FROM mytable";

Statement statement = connection.createStatement();
statement.executeQuery(query);
```

https://docs.oracle.com/javase/7/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)

the `executeQuery()` method will return an object of type `ResultSet` with all the results of the query.

### INSERT, UPDATE and DELETE statements

Create an `Statement` object and call its `executeUpdate` method with the query as an argument.

The `executeUpdate()` method will return an `int` containing the number of affected rows.

```java
String query = "INSERT into foo (id, name) VALUES (0, 'bar')";

Statement statement = connection.createStatement();
statement.executeUpdate(query);
```

https://docs.oracle.com/javase/7/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)

## Iterating a ResultSet

Iterating the an ResultSet object can be done by calling the `next()` method. This will place the cursor to the next item of the results. Then the `getInt()`, `getString()` and other methods can be used to fetch data from a single column.

```java

while(resultset.next()){
   int id = resultset.getInt("id");
   String name = resultset.getString("name");
   // Do you stuff with id and name
}
```









# MySQL introduction

> #### Info::MySQL vs MariaDB
>
> MySQL is maintained by Oracle. MySQL is free to use but not entirely open source. Some parts are closed source. This was not the vision of the original developers. Therefor they created a fork that replaces the closed source parts with open source alternatives. This fork is called **MariaDB**, and guarantees to stay open source.
>
> MariaDB and MySQL are therefor compatible. All MySQL command are compatible with MariaDB and vica versa.

MySQL has become one of the most popular database management systems in the world. It can be used for small development projects to large and prestigious sites on the web. MySQL has proven itself to be solid, reliable, fast and trusted to all sorts of data storage needs

MySQL and MariaDB are open source and free to use. This makes it one of the most popular databases. It is also the best supported and best documented database for web based projects. For example with PHP.

![MariaDB and MySQL logo](/forta/img/mariadb_vs_mysql.jpg)


## What is a database?

The word database is used in many ways. For our purpose we will use the following definition:

> A database is a collection of data stored in some organized fashion

You can think of a database as some kind of cabinet. It is simply a physical location to store data, regardless of what data is or how it is stored.

### DataBase Management System - DBMS

The term `database` does not refer to the database software that is used. This might create much confusion if not used correctly. The *database software* is called the Database Management System or DBMS.

The database is the container that is created and can be manipulated using the DBMS. MySQL in this case is a DBMS system, not the fysical database.

A database might be a file on a hard drive, but it might not.
It is not even significant as you never access a database directly anyway. You always use the DBMS that accesses the database for you.

![Database vs DBMS](/forta/img/dbms.jpg)

### Tables

When storing information in a filing cabinet, you don’t just toss it in a drawer. You create files within the cabinet.
You file related data in specific files.

In the database world, the file is called a table.
A table is a *structured file* that can store data of a specific type. A table may contain a list of customers, a product catalog or any other list of information.

![Filing cabinet](/forta/img/Ficherosclasicoscatalogo.JPG)

The key is that data stored in a table is of *one type* of data or a list. You should never store a list of customers and a list of orders in the same database table. Technically it is possible, but it would make retrieving information and access very difficult.

A better solution is to create two tables for each list
Every table in a database has a name that identifies it. 
The name is always unique for a given database.

**Customers table**: 

| Name  | Email  | Address | City | State   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

### Schema's

Tables have characteristics and properties that define how data is stored in them. This includes information about what data may be stored, how it is broken up, how individual pieces of information are named and much more…
The set of information that describes a table is known as a schema. Schema’s are used to describe specific tables within a database, as well as entire relationships between tables in them.

### Columns and datatypes

Tables are made up of columns. Columns contain a particular piece of information within the table. You can envision database tables as grids (like spreadsheets). Each column on the grid contains a particular piece of information.

Each column in a database has an associated **datatype**. It defines what the type the data the column can contain

Eg: Numeric, date, text, currency,…

Datatypes are very important for a database. They restrict the type of data that can be stored in the column, preventing wrong information to be stored. It can also help sorting the data correctly and efficiently. They play an important role in optimizing disk usage.

### Rows

Data in a table is stored in rows. Each record saved is stored in its own row.

Eg: A customer table might store one customer per row

The number of rows in the table is the number of records in it. *Record* and *row* are used interchangeably but row is technically the correct term.

### Primary keys

Every row in a table must have a column (or set of columns) that uniquely identifies it. These column or set of columns are called the primary key. The primary key is used to refer to a specific row.

Without a primary key updating or deleting specific rows in a table becomes extremely difficult. There is no guaranteed safe way to refer to just the rows to be affected.

*Always define primary keys !*

Primary keys are not required, but defining them makes future data manipulation is possible and manageable.

A primary key consisting out of multiple columns is also called a composite key.

Any column can be selected as the primary key as long as it meets the following conditions:

1. No two rows can have the same primary key value (unique)
1. Every row must have a primary key value (NULL is not allowed)

These rules are enforced by the MySQL. When multiple columns are used, the same rules apply to all columns that make up the primary key. Individual columns need not to have unique values, but the whole key must be unique.

#### Primary key best practices

In addition to the rules that MySQL enforces, there are some best practices when choosing a primary key

- Don't update values in primary key columns
- Don't reuse values in primary key columns
- Don't use values that might change in primary key columns

## Definitions

| Term | Definition |
|---|---|
| Database | A container (usually a file or a set of files) to store organized data |
| Table | A structured list of data of a specific type |
| Schema | Information about database and table layout and properties |
| Column | A single field in a table. All tables are made up of one or more columns |
| Datatype | A type of allowed data. Every table column has an associated datatype that restricts (or allows) specific data in that column |
| Row | A record in a table |
| Primary Key | A column (or set of columns) whose values uniquely identify every row in a table |

## What is SQL

SQL pronounced as: 
- Letters: S-Q-L 
- Or as `sequal`

Stands for Structured Query Language and is a  language that is designed specifically for communicating with databases. Unlike other languages (spoken languages, or programming languages such as Java or C++) SQL is made up of very few words. This is deliberate. SQL is designed to do one thing, and do it very well.
SQL provides you with a simple and efficient way to read and write data from a database.

### Advantages

SQL is not proprietary. It is not used by specific database vendors. Almost every major DBMS system supports SQL.
This enables you to interact with just about every database you’ll run into.

SQL is easy to learn. The statements are all made up of descriptive English words (and there aren’t many of them). Despite its apparent simplicity, SQL is actually very powerful. Cleverly using its language elements, you can perform very complex and sophisticated database operations.

### SQL: DDL vs DML

SQL statements can be divided into two categories:
- **Data definition language (DDL)** statements are used for creating tables, relationships and other structures.
- **Data manipulation language (DML)** statements are used for queries and data modification.

## Connecting to the database

Before we can start and connect to the DBMS, we need to start it. This can be done by starting MySQL or MariaDB using the XAMPP control panel.

One way to communicate with a DBMS is by using the *command line*. On Windows you can use `powershell`. The `mysql` command is not context or location aware, so it does not matter what the current directory is.

As we will see later on, MySQL makes use of users. By default a user `root` without password is available to use. To tell the `mysql` command that we want to log in as the user `root` we need to pass the `-u`option followed by the username.

To connect to the database you can use the following command:

```
mysql -u root
```

* `mysql`: this tells your commandpromp or powerschell to start the mysql client.
* `-u root`: the -u tells the client to log with the given name, in this case 'root'.
* `-p`: the -p tells the client to ask for a password after you pressed enter.
* `-h 127.0.0.1`: this tells the client to connect on ip-adress 127.0.0.1, can be used for connection on remote servers, when not specified it will use the default of localhost.

Running the command should show you something like this:

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.1.9-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

Take a look at the last line. MariaDB is the name of the database server that is installed and used by XAMPP.
Between the `[ ]`is the name of the selected database, for the moment we don't have a database selected so it says `(none)`.


> #### Info::MySQL vs MariaDB
> 
> To test and use the examples in this chapter, you must follow the [setup for the example]()(forta/creating_forta_database.md) database first.

## Inspecting existing databases

MySQL provides some commands to inspect the existing databases, tables, and there structure (columns and properties of those columns).

The following features are just some of the available:

- Listing the available databases
- Listing the tables from a specific database
- Listing the columns and there properties from a specific table
- ...

This can be used to explore the existing databases and getting to know what is available.

### Listing all available databases

```sql
SHOW DATABASES
```
```
+--------------------+
| Database           |
+--------------------+
| demo               |
| employees          |
| information_schema |
| mydb               |
| mysql              |
| performance_schema |
| phpmyadmin         |
| test               |
+--------------------+
8 rows in set (0.00 sec)
```

### Selecting the default database

This will enable us to omit the database name in the queries. This will shorten the queries allot and make it more readable and usable. This will become clear later on.

```sql
USE employees;
```
```
Database changed
```

### Listing the tables in a database

```sql
SHOW TABLES;
```
```
+----------------------+
| Tables_in_employees  |
+----------------------+
| current_dept_emp     |
| departments          |
| dept_emp             |
| dept_emp_latest_date |
| dept_manager         |
| employees            |
| salaries             |
| titles               |
+----------------------+
8 rows in set (0.00 sec)
```

## Listing all columns from a specific table

```sql
SHOW COLUMNS FROM employees;
```
```
+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| emp_no     | int(11)       | NO   | PRI | NULL    |       |
| birth_date | date          | NO   |     | NULL    |       |
| first_name | varchar(14)   | NO   |     | NULL    |       |
| last_name  | varchar(16)   | NO   |     | NULL    |       |
| gender     | enum('M','F') | NO   |     | NULL    |       |
| hire_date  | date          | NO   |     | NULL    |       |
+------------+---------------+------+-----+---------+-------+
6 rows in set (0.01 sec)  
```

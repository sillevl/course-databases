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



> #### Info::MySQL vs MariaDB
> 
> To test and use the examples in this chapter, you must follow the [setup for the example]()(forta/creating_forta_database.md) database first.

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

```sql
USE employees;
```
```
Database changed
```

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

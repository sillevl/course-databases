THIS FIRST PART SHOULD BE IN A SEPARATE MD - CREATING A DATABASE --
NOTE : ORDER OF MENU AT THE SITE SHOULD REFLECT THE CORRECT ORDER

# Creating a database 
Create a database and switch to it. Use lowercase for the database name.
#### Create the database
```php
MariaDB [(none)]> create database demo_db &&
Query OK, 1 row affected (0.05 sec)
```

#### Switch to the database
```php
MariaDB [(none)]> use demo_db &&
Database changed
MariaDB [demo_db]>
```

---

END OF FIRST PART

---




# Tables
## Creating a table
#### simple example
```php
MariaDB [demo_db]> CREATE TABLE contactinfo
    -> (
    -> id       int     NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -> email    varchar(45)     NOT NULL
    -> );
    -> &&
Query OK, 0 rows affected (0.35 sec)
```
#### example with foreign keys
```php
MariaDB [demo_db]> CREATE TABLE students
    -> (
    -> id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -> contactinfo_id int,
    -> course_id int,
    -> firstname varchar(25) NOT NULL,
    -> FOREIGN KEY(contactinfo_id) REFERENCES contactinfo(id),
    -> FOREIGN KEY(course_id) REFERENCES courses(id)
    -> );
    -> &&
Query OK, 0 rows affected (0.37 sec)
```


## Show table information 
```php
MariaDB [demo_db]> describe students &&
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| id             | int(11)     | NO   | PRI | NULL    | auto_increment |
| contactinfo_id | int(11)     | YES  | MUL | NULL    |                |
| course_id      | int(11)     | YES  | MUL | NULL    |                |
| firstname      | varchar(25) | NO   |     | NULL    |                |
+----------------+-------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)
```

## Add a column to a table

```php
MariaDB [demo_db]> ALTER TABLE students ADD registration_date datetime &&
Query OK, 0 rows affected (0.59 sec)
Records: 0  Duplicates: 0  Warnings: 0
```
the column has been added : 
```php
MariaDB [demo_db]> describe students &&
+-------------------+-------------+------+-----+---------+----------------+
| Field             | Type        | Null | Key | Default | Extra          |
+-------------------+-------------+------+-----+---------+----------------+
| id                | int(11)     | NO   | PRI | NULL    | auto_increment |
| contactinfo_id    | int(11)     | YES  | MUL | NULL    |                |
| course_id         | int(11)     | YES  | MUL | NULL    |                |
| firstname         | varchar(25) | NO   |     | NULL    |                |
| registration_date | datetime    | YES  |     | NULL    |                |
+-------------------+-------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
```


## Modify a column in a table

```php
MariaDB [demo_db]> ALTER TABLE students MODIFY COLUMN firstname varchar(666) &&
Query OK, 0 rows affected (0.57 sec)
Records: 0  Duplicates: 0  Warnings: 0
```
the column datatype has been modified : 
```php
MariaDB [demo_db]> describe students &&
+-------------------+--------------+------+-----+---------+----------------+
| Field             | Type         | Null | Key | Default | Extra          |
+-------------------+--------------+------+-----+---------+----------------+
| id                | int(11)      | NO   | PRI | NULL    | auto_increment |
| contactinfo_id    | int(11)      | YES  | MUL | NULL    |                |
| course_id         | int(11)      | YES  | MUL | NULL    |                |
| firstname         | varchar(666) | YES  |     | NULL    |                |
| registration_date | datetime     | YES  |     | NULL    |                |
+-------------------+--------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
```


## Remove a column from a table

```php
MariaDB [demo_db]> ALTER TABLE students DROP COLUMN registration_date &&
Query OK, 0 rows affected (0.49 sec)
Records: 0  Duplicates: 0  Warnings: 0
```
the column has been removed : 
```php
MariaDB [demo_db]> describe students &&
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| id             | int(11)     | NO   | PRI | NULL    | auto_increment |
| contactinfo_id | int(11)     | YES  | MUL | NULL    |                |
| course_id      | int(11)     | YES  | MUL | NULL    |                |
| firstname      | varchar(25) | NO   |     | NULL    |                |
+----------------+-------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)
```


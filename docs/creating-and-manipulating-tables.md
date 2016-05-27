# Creating and manipulating tables

##Creating a new table

```sql
CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text,
  `price` decimal(6,2) NOT NULL,
  `platform` set('XBOX','PS','PC') NOT NULL,
  `multiplayer` enum('YES','NO') NOT NULL,
  `timestamp` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  PRIMARY KEY (id)
);
```
To create a new table use the command CREATE TABLE 'yourTableName'(column1, column2,...);
In this case for column1 = `id` int(11) NOT NULL

* NOT NULL means that it is mandatory to enter a value, so this field can't be empty
* Note that when you add a primary key that you don't forget to give an argument: PRIMARY KEY (id)
* Every table has max. ONE primary key.

##Manipulating tables
###Altering tables
####Adding a table
```sql
ALTER TABLE `games`;
ADD `release` datetime;
SHOW COLUMNS FROM games;
```
```
+--------------+-----------------------+------+-----+---------+----------------+
| Field        | Type                  | Null | Key | Default | Extra          |
+--------------+-----------------------+------+-----+---------+----------------+
| id           | int(11)               | NO   | PRI | NULL    | auto_increment |
| name         | varchar(50)           | NO   |     | NULL    |                |
| description  | text                  | YES  |     | NULL    |                |
| price        | decimal(6,2)          | NO   |     | NULL    |                |
| platform     | set('XBOX','PS','PC') | NO   |     | NULL    |                |
| multiplayer  | enum('YES','NO')      | NO   |     | NULL    |                |
| timestamp    | datetime              | NO   |     | NULL    |                |
| user_id      | int(11)               | NO   |     | NULL    |                |
| publisher_id | int(11)               | NO   |     | NULL    |                |
| release      | datetime              | YES  |     | NULL    |                |
+--------------+-----------------------+------+-----+---------+----------------+
```
####Removing a table
```sql
ALTER TABLE `games`
DROP COLUMN `release`;
SHOW COLUMNS FROM games;
```
```
+--------------+-----------------------+------+-----+---------+----------------+
| Field        | Type                  | Null | Key | Default | Extra          |
+--------------+-----------------------+------+-----+---------+----------------+
| id           | int(11)               | NO   | PRI | NULL    | auto_increment |
| name         | varchar(50)           | NO   |     | NULL    |                |
| description  | text                  | YES  |     | NULL    |                |
| price        | decimal(6,2)          | NO   |     | NULL    |                |
| platform     | set('XBOX','PS','PC') | NO   |     | NULL    |                |
| multiplayer  | enum('YES','NO')      | NO   |     | NULL    |                |
| timestamp    | datetime              | NO   |     | NULL    |                |
| user_id      | int(11)               | NO   |     | NULL    |                |
| publisher_id | int(11)               | NO   |     | NULL    |                |
+--------------+-----------------------+------+-----+---------+----------------+
```
####Changing a datatype
```sql
ALTER TABLE `games`
MODIFY COLUMN `name` char(50);
```
```
+--------------+-----------------------+------+-----+---------+----------------+
| Field        | Type                  | Null | Key | Default | Extra          |
+--------------+-----------------------+------+-----+---------+----------------+
| id           | int(11)               | NO   | PRI | NULL    | auto_increment |
| name         | char(50)              | YES  |     | NULL    |                |
| description  | text                  | YES  |     | NULL    |                |
| price        | decimal(6,2)          | NO   |     | NULL    |                |
| platform     | set('XBOX','PS','PC') | NO   |     | NULL    |                |
| multiplayer  | enum('YES','NO')      | NO   |     | NULL    |                |
| timestamp    | datetime              | NO   |     | NULL    |                |
| user_id      | int(11)               | NO   |     | NULL    |                |
| publisher_id | int(11)               | NO   |     | NULL    |                |
+--------------+-----------------------+------+-----+---------+----------------+
```
Note that the datatype for the field name has been changed from varchar(50) to char(50)

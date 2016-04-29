
# Launching MySQL

## Start the MySQL server
two ways :
- Launch [Xammp control center](C:\xampp\xampp-control.exe) and click the MySQL server 
- Open a command window and enter ```C:\xampp\mysql\bin\mysqld ```    <i>(leave the terminal open)</i>


## Log in to MySQL Database Monitor
Open a new cmd window and navigate to ```C:\xampp\mysql\bin\```

And enter the following command :
```
.\mysql.exe -u root -p -h 127.0.0.1
```

---
To combine all steps above a script has been created for your ease , save the following code as a batch file (.bat extension) and double click it. This will open/run :
* Xammp Control center (for easier monitoring & managing of the server)
* a command window that will actually start the server (so you don't have to click Start, a real timesaver). This window remains open.
* a command window that will log in to the database monitor 
```bat
@echo off
ECHO -------------------------------------------------------------------------------
ECHO Description : MySQL auto start script"
ECHO Author : David Lejeune"
ECHO Created : 29/04/2016"
ECHO -------------------------------------------------------------------------------

ECHO Starting XAMMP Control Panel
start C:\xampp\xampp-control.exe

ECHO Starting MySQL Server
start cmd /c C:\xampp\mysql\bin\mysqld

ECHO Logging in to MySQL Database Monitor
cd C:\xampp\mysql\bin\
.\mysql.exe -u root -p -h 127.0.0.1


pause

```


---


# Navigating the MySQL Database Monitor (MariaDB)
<i><b>Pro tip</b> : first thing you should do is change the standard delimiter (``` ; ```) so when needed, you can combine SQL commands.</i>
```sql
delimiter &&
```


### Show Databases


```sql
MariaDB [(none)]> show databases &&
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| phpmyadmin         |
| test               |
+--------------------+
5 rows in set (0.00 sec)
```

### Select a database

```sql
MariaDB [(none)]> use phpmyadmin &&
Database changed
MariaDB [phpmyadmin]>
```
### Show tables
```sql
MariaDB [phpmyadmin]> show tables &&
+------------------------+
| Tables_in_phpmyadmin   |
+------------------------+
| pma__bookmark          |
| pma__central_columns   |
| pma__column_info       |
| pma__designer_settings |
| pma__export_templates  |
| pma__favorite          |
| pma__history           |
| pma__navigationhiding  |
| pma__pdf_pages         |
| pma__recent            |
| pma__relation          |
| pma__savedsearches     |
| pma__table_coords      |
| pma__table_info        |
| pma__table_uiprefs     |
| pma__tracking          |
| pma__userconfig        |
| pma__usergroups        |
| pma__users             |
+------------------------+
19 rows in set (0.04 sec)
```
### Show Column information of a table
```sql
MariaDB [phpmyadmin]> show columns from pma__bookmark &&
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int(11)      | NO   | PRI | NULL    | auto_increment |
| dbase | varchar(255) | NO   |     |         |                |
| user  | varchar(255) | NO   |     |         |                |
| label | varchar(255) | NO   |     |         |                |
| query | text         | NO   |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
5 rows in set (0.11 sec)
```

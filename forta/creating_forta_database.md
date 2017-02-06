# Creating a sample database

In this course we use the forta database. this database is made by Ben Forta (http://forta.com/). 
On this page we will go step by step how to create this database.

You will need a mysql server (XAMPP) and a mysql client(commandprompt, Bash or PowerShell will do).

You will also need to download the files [http://forta.com/books/0672327120/mysql_scripts.zip](mysql_scripts.zip) and unzip them.

> #### Note::SQL Keywords in capital letters
>
> In this course we will put all the SQL-code in capitals, this is not necessary but it will make clear to you what is static SQL-code and what are names that you can change.


## Connecting to the database

first start up your databaseserver as you learned on the previous page. 
now open your mysql client in the folder where you unziped the files. you can open the client by typing `PowerShell` in the adress bar in your windows explorer.
now type `mysql -u root` in your client.

* `mysql`: this tells your commandpromp or powerschell to start the mysql client.
* `-u root`: the -u tells the client to log with the given name, in this case 'root'.
* `-p`: the -p tells the client to ask for a password after you pressed enter.
* `-h 127.0.0.1`: this tells the client to connect on ip-adress 127.0.0.1, can be used for connection on remote servers, when not specified it will use localhost.

you should be connected now and see 

```
MariaDB [(none)]>
```

MarioDB is the name of the database server that is used in xampp.
between the `[ ]`is the name of the selected database, for the moment we don't have a database selected so it says `(none)`.

Before we create a new database, let's see what is already in here with 

```sql 
SHOW databases;
```

This will show a list of available databases.

```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| phpmyadmin         |
| test               |
+--------------------+
```

a database named test, let's look in there.
Do  `USE name;` to select the database with that name.
you see that the name of the selected database now `test` is.
Do `show tables;`do ask the list of tables in the database.
```Empty set (0.00 sec)```
it looks like this database is completely empty, you can leave it or delete it with `DROP DATABASE test;`

## Creating the database
First we will create a completely empty database with:

```sql
CREATE DATABASE forta;
```

Now a empty database with name forta has been created and we will now use that database with: 

```sql
USE forta;
```

When you see that the prompt has changed to: `MariaDB [forta]>` then you can continue.
We are now gonna create tables and cullomns in those tables but we are not doing it ourself.
to execute a script, use the command `SOURCE scriptname;`, 
we want to execute create.sql that you got from the zipmap first.

```sql
SOURCE create.sql;
```

if you get an error like:

```
ERROR: Failed to open file 'create.sql', error: 2
``` 

Then check if the create.sql file is in the folder where you started you PowerShell or commandprompt.

Now wait till the promp is back to his normal state.
There should be table in this database now, let's check with
`SHOW TABLES;`.

```
+-----------------+
| Tables_in_forta |
+-----------------+
| customers       |
| orderitems      |
| orders          |
| productnotes    |
| products        |
| vendors         |
+-----------------+
```

To see how a table was made, use `DESC tablename;`so let's test it with `DESC products;`

```
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| prod_id    | char(10)     | NO   | PRI | NULL    |       |
| vend_id    | int(11)      | NO   | MUL | NULL    |       |
| prod_name  | char(255)    | NO   |     | NULL    |       |
| prod_price | decimal(8,2) | NO   |     | NULL    |       |
| prod_desc  | text         | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
```

We can see for every collumn in this table what the name is, what the type is, if it can be empty(Null), if it is a key and what the default vallue is.
This one don't have any default values so it says NULL.
To see all info in a table you can always do:

```sql
SELECT* FROM tablename;
```

(more info on this will come in the next chapter: Retreiving data)
So we are gonna look in the products table to know what products this firma sells.

```sql
SELECT * FROM products;
```

And we get this as answer: `Empty set (0.00 sec)`.
This means that they don't have any products yet so let's put some in then.

##  Filling the database
Again, we are not gonna do this ourself but use the other script for this:

```sql
SOURCE populate.sql;
```

If we try it again now then we get this:

```
MariaDB [forta]> select * from products;
+---------+---------+----------------+------------+----------------------------------------------------------------+
| prod_id | vend_id | prod_name      | prod_price | prod_desc                                                      |
+---------+---------+----------------+------------+----------------------------------------------------------------+
| ANV01   |    1001 | .5 ton anvil   |       5.99 | .5 ton anvil, black, complete with handy hook                  |
| ANV02   |    1001 | 1 ton anvil    |       9.99 | 1 ton anvil, black, complete with handy hook and carrying case |
| ANV03   |    1001 | 2 ton anvil    |      14.99 | 2 ton anvil, black, complete with handy hook and carrying case |
| DTNTR   |    1003 | Detonator      |      13.00 | Detonator (plunger powered), fuses not included                |
| FB      |    1003 | Bird seed      |      10.00 | Large bag (suitable for road runners)                          |
| FC      |    1003 | Carrots        |       2.50 | Carrots (rabbit hunting season only)                           |
| FU1     |    1002 | Fuses          |       3.42 | 1 dozen, extra long                                            |
| JP1000  |    1005 | JetPack 1000   |      35.00 | JetPack 1000, intended for single use                          |
| JP2000  |    1005 | JetPack 2000   |      55.00 | JetPack 2000, multi-use                                        |
| OL1     |    1002 | Oil can        |       8.99 | Oil can, red                                                   |
| SAFE    |    1003 | Safe           |      50.00 | Safe with combination lock                                     |
| SLING   |    1003 | Sling          |       4.49 | Sling, one size fits all                                       |
| TNT1    |    1003 | TNT (1 stick)  |       2.50 | TNT, red, single stick                                         |
| TNT2    |    1003 | TNT (5 sticks) |      10.00 | TNT, red, pack of 10 sticks                                    |
+---------+---------+----------------+------------+----------------------------------------------------------------+
```

## A larger test database (optional)

Some of the examples use a larger testdatabase, a fake database with employees to be exact.
If you want test on this bigger database then you can get it over [datacharmer/test\_db](https://github.com/datacharmer/test_db) on Github.
Download the respository as zip or using `git clone`. go in the folder where you saved it(unziped) and start your mysql client here.
connect again to your database with the following command:

```sql
mysql -u root
```

We don't need to create a database ourself because that is done in the script so we only need to run 

```sql
SOURCE employees.sql
```

This will take a little longer because it is a way bigger script.
You can open another client and connect to continue this course while that is still running.

So now you have a database to test stuff on and you can continue to the next chapter: Retreiving data.

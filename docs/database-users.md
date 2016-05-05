# Database users

By adding users you can add a bit of sucurity to your database. A normal user should not be abble to drop tables.

### Adding a user:

```sql
CREATE USER 'thomas' @ 'localhost'
IDENTIFIED BY 'azerty123';
```

With these two lines you have added a new users with username 'thomas' and password 'azerty123'. He can only log in from the same computer where the database is running on. This is done by typing 'localhost', you can use this to add another layer of security by only allowing the admin to log in from localhost.

Now we need to give this user some rights

### Giving rights to a user:

```sql
GRANT ALL PRIVILIGES ON forta.products
TO 'thomas'@'localhost';
```

Here we gave the user 'thomas' all priviligs on the the table 'products' from the database called 'forta'. You can replace the table with * to give acces to all tables. Or you also could type *.* . The two asterikses mean acces to everything.

Here is a list of things you can place after 'GRANT' to give only specific rights to a user.

|Name|Description|
|---|---|
|ALL PRIVILIGES|You can do anything the database allows|
|CREATE|Allows the user to create new tables or databases|
|DROP|Allows the user to delete tables or databases|
|DELETE| Allows the user to delete rows from tables|
|INSERT|Allows them to insert rows into tables|
|SELECT|Allows them to use select queries to read data from tables|
|UPDATE|Allows them to update table rows|
|GRANT OPTION|Allows them to grant and remove other users' priviliges|

### Revoking rights of a user:

You can also revoke these rights. When someone abused his power over the database for example.
The code to do this is almost identical to that of granting the right.

```sql
REVOKE UPDATE ON forta.products
FROM 'thomas'@'localhost'
```

### Deleting users:

When someone stops working at a job and they want to delete his account on the database they can do this with this line.
It is just like dropping tables.

```sql
DROP USER 'thomas'@'localhost';
```

### Logging in:

Logging into MySQL with a user and password is possible with this method.

```
mysql -u 'thomas' -p
```

The -u stands for user, and the -p means that you want to enter a password.
A little thing that we need to keep in mind is the root user. This users does not have a password and has al rights. When setting up a database don't forget to secure this account or delete it.

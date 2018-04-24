# Managing database users

By adding users you can add security to your database. A normal user should not be able to drop tables.

Before we can create a user we'll have to sign in as the root user

```text
mysql -u root;
```

## Adding a user:

```sql
CREATE USER 'thomas' @ 'localhost'
IDENTIFIED BY 'azerty123';
```

With these two lines you have added a new users with username `thomas` and password `azerty123`. He can only log in from the same computer where the database is running on. This is achieved by typing `localhost`, you can use this to add another layer of security by only allowing the admin to log in from localhost.

Now we need to give this user some rights

To create a user in my MySQL that can access the database from any host:

```sql
CREATE USER 'username'@'%';
```

`%` is a wildcard character and specifies that the user can connect from a variable path

## Logging in:

We can now connect to the database using the credentials of the new user

```text
mysql -u username -p -h 10.177.33.192;
```

`-p` specifies that the user requires a password to be filled in

`-h` specifies that the user wants to access a database on another host

`10.177.33.192` is the IP address of the machine with the database

A little thing that we need to keep in mind is the root user. This users does not have a password and has al rights. When setting up a database don't forget to secure this account with a password or delete it.

## Giving rights to a user:

```sql
GRANT ALL PRIVILIGES ON forta.products
TO 'thomas'@'localhost';
```

Here we gave the user `thomas` all privileges on the table `products` from the database called `forta`. You can replace the table with `*` to give access to all tables. Or you also could type `*.*`. The two asterisks mean access to everything.

Here is a list of things you can place after `GRANT` to give only specific rights to a user.

| Name | Description |
| --- | --- |
| ALL PRIVILIGES | You can do anything the database allows |
| CREATE | Allows the user to create new tables or databases |
| DROP | Allows the user to delete tables or databases |
| DELETE | Allows the user to delete rows from tables |
| INSERT | Allows them to insert rows into tables |
| SELECT | Allows them to use select queries to read data from tables |
| UPDATE | Allows them to update table rows |
| GRANT OPTION | Allows them to grant and remove other users' privileges |

You can now view the granted privileges with

```sql
SHOW grants;
```

## Revoking rights of a user:

You can also revoke these rights. When someone abused his power over the database for example. The code to do this is almost identical to that of granting the right.

```sql
REVOKE UPDATE ON forta.products
FROM 'thomas'@'localhost'
```

## Deleting users:

When someone stops working at a job and they want to delete his account on the database they can do this with this line. It is just like dropping tables.

```sql
DROP USER 'thomas'@'localhost';
```


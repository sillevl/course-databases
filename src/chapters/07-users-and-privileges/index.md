# Users & Privileges

When connecting to a database a user and password is needed. The default user
is called `root` and currently has no password.

The `root` user is the administrative user. It has all privileges, can access
all the data and can execute any query. For local development this might be just
ok. But on a production server, this is actually a really bad idea. Someone with
bad intentions can easily guess this combination of username and password and
can just do whatever he wants. He can steal all data, change data or even delete
it.

MySQL enables you to define multiple users for a single server instance. This means
that you can create as many users, with their own username and password, as you want.
On top of that each user can have its own set or privileges, telling what it can
and cant do. For example you can create users that only need read privileges on
a single table where as another user can only create rows (without the ability to
read them.)

## Hosts

MySQL makes a difference for users depending from what machine they connect to the
database. This means that someone that connects with the username `root` from the
same machine as where the database server is running on `localhost`,
is not the same user that connects with username `root` from another computer on the
network or the internet.

Each username is tied to an interface it connects on. This is called the 'host'
part of the username.

If a server has 1 network interface with the ip `192.168.1.10`, then users can use
this connect interface to connect to the database. Every server/computer has also
a loopback interface that has the ip `127.0.0.1` also known as `localhost`.
MySQL/MariaDB can thus make a distinction between connections coming from each of
the two interfaces. This enables the database to control which machines are allowed
to make connections together with the corresponding username.

It is also possible to allow connections from any host. In this case a `%` wildcard
can be used.

By default MySQL and MariaDB are configured to listen only to connections on `localhost`.
This means that if you want to connect from a remote machine, you need to configure
this first.

## Users

To connect to the database with the `root` user you can use the following command:

```bash
mysql -u root -p
```

If the `root` user has no password, the `-p` can be omitted.

### The `root` user

Don't be alarmed if your `root` user has no password. Keep in mind that the database
server will also take the machine from where the connection is initiated
from into account. By default `root` is only allowed to connect from `localhost`.
This means that nobody can get access to your database, unless they have access to
your computer. Remote connections are not allowed.

In development situations this might be tolerated. On production environments this
is a real security problem. It's best to create a different user for each application
that needs to connect to the database.

### Changing passwords

It might be an good idea to change the root password in order to prevent unwanted
access to your database. This can be done once logged in, with the following command:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
```

Note that the full username consist out of the username `root` and hostname `localhost`,
separated with an `@` sign.

The `ALTER USER` query expects a password that is designated by the `IDENTIFIED BY`
clause. You can place your new password there in order to change the current password.

Note that if you change the `root` password, make sure you remember the password.
If it's the only user with adequate permissions, you might block yourself out of
your own database. If you ever get in this situation, remember that you can get
access again with a specific set of commands when starting the server service.

### Creating users

Creating users is done in a similar way. This can be done using a `CREATE USER`
query:

```sql
CREATE USER 'thomas'@'localhost' IDENTIFIED BY 'my_secret_password';
```

The query above will create a user named `thomas` that is only allowed to connect
from `localhost`. His password is `my_secret_password`.

The same username can be used multiple times if you change the host part. Each user
can have a different password for each allowed host.

```sql
CREATE USER 'thomas'@'%' IDENTIFIED BY 'anotherpassword';
```

Different privileges can be assigned to the different users allowing them to do
different things depending on where they make a connection from. For example if
'thomas' connects from a remote machine, the privileges can be more restricted
in order to prevent security issues.

### Deleting users

When users are no longer needed, they can be delete with the `DROP USER` query.

```sql
DROP USER 'thomas'@'localhost';
```

## Privileges

Each user can have its own set of privileges. The privileges allow users to give
permissions to some actions and deny others. This enables fine grained control
over who can do what.

For example in a company, sales people might need to only insert invoices into the
database, but might not be allowed to read them. On the other hand, accountants
might only be able to read invoiced, but not create them.

### Multiple isolated databases

An other way in which privileges are used is to allow certain users only to have
access to a single database. This principle is used by many shared hosting services.

This allows a single database server to host many databases for multiple users that
should not get access to each others databases.

### Adding Permissions

If you create a new user, the user does not have any privileges. This means the user
can only log in and do nothing. In order to give access to some tasks and resources
permissions must be created (granted) to that user.

```sql
GRANT ALL PRIVILEGES ON forta.products
TO 'thomas'@'localhost';
```

In this example, the user `thomas` that connects from `localhost` is granted all
privileges for the `products` table in the `forta` database.

Thomas can do anything only within this database. Thomas has no access nor is he
able to see any other table in the `forta` database or any other database.

Wildcards can be used for tables and databases in order to grant access to multiple
tables or databases as well.

The following query will give thomas permissions to all the tables in the forta database:

```sql
GRANT ALL PRIVILEGES ON forta.*
TO 'thomas'@'localhost';
```

The following query will give thomas permissions to all databases and all tables
(just like the root user):

```sql
GRANT ALL PRIVILEGES ON *.*
TO 'thomas'@'localhost';
```

Instead of granting `ALL PRIVILEGES`, which just allows anything, it is also possible
to grant specific privileges.

Here is a list of privileges that can be used to `GRANT`.

| Name | Description |
| --- | --- |
| ALL PRIVILEGES | You can do anything the database allows |
| CREATE | Allows the user to create new tables or databases |
| DROP | Allows the user to delete tables or databases |
| DELETE | Allows the user to delete rows from tables |
| INSERT | Allows them to insert rows into tables |
| SELECT | Allows them to use select queries to read data from tables |
| UPDATE | Allows them to update table rows |
| GRANT OPTION | Allows them to grant and remove other users' privileges |

Note: this is just a summary of the most important grants. Many others exist.

In the following example, Thomas can only read and insert rows into any table of
the forta database. He is not allowed to delete or update them.

```sql
GRANT SELECT, INSERT ON forta.*
TO 'thomas'@'localhost';
```

### Showing users grants

In order to view your privileges you can run the following query:

```sql
SHOW grants;
```

You can also request the grants of any other user (if you have the permission to
do this).

```sql
SHOW GRANTS FOR 'root'@'localhost';
```

## Revoking rights of a user

When needed you can also remove permissions from user by revoking grants.

```sql
REVOKE UPDATE ON forta.products
FROM 'thomas'@'localhost'
```

This will remove the `UPDATE` grant for thomas connecting from localhost.

## Logging in

We can now connect to the database using the credentials of the new user

```text
mysql -u username -p -h 10.177.33.192;
```

* `-p` specifies that the user requires a password to be filled in
* `-h` specifies that the user wants to access a database on another host
* `10.177.33.192` is the IP address of the machine with the database

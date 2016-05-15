# Database users

Before we can create a user we'll have to sign in as the root user
 ```shell
 mysql -u root;
 ```

To create a user in my MySQL use :
```sql
CREATE USER 'username'@'localhost';
```
The `@` and `localhost` ensures that certain users are only allowed to access the database from a certain hostname or Ip address.
In this case the `username` is only allowed to access the database from `localhost` (= same computer)

To create a user in my MySQL that can access the database from any host:
```sql
CREATE USER 'username'@'%';
```
`%` is a wildcard character and specifies that the user can connect from a variable path

We can now connect to the database using the credentials of the new user
```shell
mysql -u username -p -h 10.177.33.192;
```
`-p` specifies that the user requires a password to be filled in

`-h` specifies that the user wants to access a database on another host

`10.177.33.192` is the IP address of the machine with the database

Securing users by providing them with a password
```sql
CREATE USER 'username'@'localhost' IDENTIFIED by 'password';
```
Now that we've created a user we'll want to assign some privileges to each account
```sql
GRANT SELECT ON yourDatabase.yourTable TO 'username'@'localhost';
```
We assigned the privilege to use `select` on `yourDatabase.yourTable` to the `username` user on `localhost`,
this will also work with any other database or table that you specified

You can now view your grants or privileges with
```sql
SHOW grants;
```

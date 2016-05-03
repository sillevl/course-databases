# Database users

Before we can create a user we'll have to sign in as the root user, this is done via :
```sql
mysql -u root;
```

To create a user in my sql use :
```sql
create user 'username'@'localhost';
```
@localhost ensures that certain users are only allowed to access the database from a certain network or (local)host

To create a user in my sql that can acces the database from another host in the same network use :
```sql
create user 'username'@'%';
```
% specifies that the user comes from a variable path

We can now access a user via : 
```sql
mysql -u username -p -h 10.177.33.192;
```
-p specifies that the user requires a password to be filled in
-h specifies that the user wants to access a database on another host in the same network
10.177.33.192 is the IP address where the database is allocated

Securing users by providing them with a password is done via :
```sql
IDENTIFIED by 'password';
```
Now that we've created a user we'll want to assign some priveleges to each account, this is done by using :
```sql
GRANT SELECT ON yourDatabase.yourTable TO 'username'@'localhost';
```
We assigned the privelege to use the select command on yourDatabase.yourTable to the username user on localhost,
this will also work with any other database or table that you specified

You can now view your grants or priveleges via
```sql
SHOW grants;
```
 

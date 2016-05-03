# Database users

To create a user in my sql use :
```sql
create user 'username'@'localhost'
```
@localhost ensures that certain users are only allowed to acces the database from a certain network or (local)host

Securing users by providing them with a password is done via :
```sql
IDENTIFIED by 'password'
``

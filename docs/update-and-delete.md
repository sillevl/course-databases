# Updating and deleting data
##Update
This statement is used to update records in a table.
```sql
update users SET nickname='doenerbjoern' where id=154;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```
##Delete
The DELETE statement is used to delete records from a table.
```sql
delete from users where name='Enzo';
Query OK, 1 row affected (0.01 sec)
```

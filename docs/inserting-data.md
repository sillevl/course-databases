# Inserting data
#### Single column , multiple records 
```php
MariaDB [demo_db]> INSERT INTO contactinfo(email)
    -> VALUES ('David@vives'), ('Jonas@vives') , ('Milan@vives'),
    -> ('Nicolas@vives'), ('Bert@vives'), ('Charlie@vives') &&
Query OK, 6 rows affected (0.07 sec)
Records: 6  Duplicates: 0  Warnings: 0
```
showing the records :
```php
MariaDB [demo_db]> select * from contactinfo &&
+----+---------------+
| id | email         |
+----+---------------+
|  1 | David@vives   |
|  2 | Jonas@vives   |
|  3 | Milan@vives   |
|  4 | Nicolas@vives |
|  5 | Bert@vives    |
|  6 | Charlie@vives |
+----+---------------+
6 rows in set (0.00 sec)
```

#### Multiple columns , multiple records 
```php
MariaDB [demo_db]> INSERT INTO students(firstname,contactinfo_id,course_id)
    -> VALUES ('David', 1, 1),
    -> ('Jonas', 2 , 3),
    -> ('Milan', 3 ,3),
    -> ('Nicolas', 4, 1),
    -> ('Bert', 5, 4),
    -> ('Charlie', 6, 4)
    -> &&
Query OK, 6 rows affected (0.09 sec)
Records: 6  Duplicates: 0  Warnings: 0
```
showing the records :
```php
MariaDB [demo_db]> select * from students &&
+----+----------------+-----------+-----------+-------------------+
| id | contactinfo_id | course_id | firstname | registration_date |
+----+----------------+-----------+-----------+-------------------+
|  1 |              1 |         1 | David     | NULL              |
|  2 |              2 |         3 | Jonas     | NULL              |
|  3 |              3 |         3 | Milan     | NULL              |
|  4 |              4 |         1 | Nicolas   | NULL              |
|  5 |              5 |         4 | Bert      | NULL              |
|  6 |              6 |         4 | Charlie   | NULL              |
+----+----------------+-----------+-----------+-------------------+
6 rows in set (0.00 sec)
```


# Filtering data

In this chapter you can see examples that show you the different ways to filter data.

The following query will display `prod_name` \(product names\) from the `product` database, with a `LIMIT` of five. The word `LIMIT` ensures that only the first five elements are displayed.

```sql
SELECT prod_name
FROM products
LIMIT 5;
```

```text
+--------------+
| prod_name    |
+--------------+
| .5 ton anvil |
| 1 ton anvil  |
| 2 ton anvil  |
| Detonator    |
| Bird seed    |
+--------------+
5 rows in set (0.00 sec)
```

This query doesn't differ much from the previous. The only difference can be found by the `LIMIT` part. This time the `LIMIT` displays only five elements, starting from the fifth element in the table.

```sql
SELECT prod_name
FROM products
LIMIT 5, 5;
```

```text
+--------------+
| prod_name    |
+--------------+
| Carrots      |
| Fuses        |
| JetPack 1000 |
| JetPack 2000 |
| Oil can      |
+--------------+
5 rows in set (0.00 sec)
```

Maybe this will help you to understand LIMIT better:

LIMIT offset , count;

-&gt; The `offset` specifies the offset of the first row to return \(rows start from 1, not 0\).

-&gt; The `count` specifies the maximum number of rows to return.

Source: [http://www.mysqltutorial.org/mysql-limit.aspx](http://www.mysqltutorial.org/mysql-limit.aspx)

```sql
SELECT products.prod_name
FROM products;
```

```text
+----------------+
| prod_name      |
+----------------+
| .5 ton anvil   |
| 1 ton anvil    |
| 2 ton anvil    |
| Detonator      |
| Bird seed      |
| Carrots        |
| Fuses          |
| JetPack 1000   |
| JetPack 2000   |
| Oil can        |
| Safe           |
| Sling          |
| TNT (1 stick)  |
| TNT (5 sticks) |
+----------------+
14 rows in set (0.00 sec)
```

```sql
SELECT prod_name
FROM products
ORDER BY prod_name;
```

```text
+----------------+
| prod_name      |
+----------------+
| .5 ton anvil   |
| 1 ton anvil    |
| 2 ton anvil    |
| Bird seed      |
| Carrots        |
| Detonator      |
| Fuses          |
| JetPack 1000   |
| JetPack 2000   |
| Oil can        |
| Safe           |
| Sling          |
| TNT (1 stick)  |
| TNT (5 sticks) |
+----------------+
14 rows in set (0.00 sec)
```

```sql
SELECT prod_id, prod_price, prod_name
FROM products
ORDER BY prod_price, prod_name;
```

```text
+---------+------------+----------------+
| prod_id | prod_price | prod_name      |
+---------+------------+----------------+
| FC      |       2.50 | Carrots        |
| TNT1    |       2.50 | TNT (1 stick)  |
| FU1     |       3.42 | Fuses          |
| SLING   |       4.49 | Sling          |
| ANV01   |       5.99 | .5 ton anvil   |
| OL1     |       8.99 | Oil can        |
| ANV02   |       9.99 | 1 ton anvil    |
| FB      |      10.00 | Bird seed      |
| TNT2    |      10.00 | TNT (5 sticks) |
| DTNTR   |      13.00 | Detonator      |
| ANV03   |      14.99 | 2 ton anvil    |
| JP1000  |      35.00 | JetPack 1000   |
| SAFE    |      50.00 | Safe           |
| JP2000  |      55.00 | JetPack 2000   |
+---------+------------+----------------+
14 rows in set (0.03 sec)
```

```sql
SELECT prod_id, prod_price, prod_name
FROM products
ORDER BY prod_price DESC;
```

```text
+---------+------------+----------------+
| prod_id | prod_price | prod_name      |
+---------+------------+----------------+
| JP2000  |      55.00 | JetPack 2000   |
| SAFE    |      50.00 | Safe           |
| JP1000  |      35.00 | JetPack 1000   |
| ANV03   |      14.99 | 2 ton anvil    |
| DTNTR   |      13.00 | Detonator      |
| TNT2    |      10.00 | TNT (5 sticks) |
| FB      |      10.00 | Bird seed      |
| ANV02   |       9.99 | 1 ton anvil    |
| OL1     |       8.99 | Oil can        |
| ANV01   |       5.99 | .5 ton anvil   |
| SLING   |       4.49 | Sling          |
| FU1     |       3.42 | Fuses          |
| FC      |       2.50 | Carrots        |
| TNT1    |       2.50 | TNT (1 stick)  |
+---------+------------+----------------+
14 rows in set (0.00 sec)
```

```sql
SELECT prod_id, prod_price, prod_name
FROM products
ORDER BY prod_price DESC, prod_name;
```

```text
+---------+------------+----------------+
| prod_id | prod_price | prod_name      |
+---------+------------+----------------+
| JP2000  |      55.00 | JetPack 2000   |
| SAFE    |      50.00 | Safe           |
| JP1000  |      35.00 | JetPack 1000   |
| ANV03   |      14.99 | 2 ton anvil    |
| DTNTR   |      13.00 | Detonator      |
| FB      |      10.00 | Bird seed      |
| TNT2    |      10.00 | TNT (5 sticks) |
| ANV02   |       9.99 | 1 ton anvil    |
| OL1     |       8.99 | Oil can        |
| ANV01   |       5.99 | .5 ton anvil   |
| SLING   |       4.49 | Sling          |
| FU1     |       3.42 | Fuses          |
| FC      |       2.50 | Carrots        |
| TNT1    |       2.50 | TNT (1 stick)  |
+---------+------------+----------------+
14 rows in set (0.00 sec)
```

```sql
SELECT prod_price
FROM products
ORDER BY prod_price DESC LIMIT 1;
```

```text
+------------+
| prod_price |
+------------+
|      55.00 |
+------------+
1 row in set (0.00 sec)
```

```sql
SELECT prod_name, prod_price
FROM products
WHERE prod_price = 2.50;
```

```text
+---------------+------------+
| prod_name     | prod_price |
+---------------+------------+
| Carrots       |       2.50 |
| TNT (1 stick) |       2.50 |
+---------------+------------+
2 rows in set (0.00 sec)
```

```sql
SELECT prod_name, prod_price
FROM products
WHERE prod_name = 'fuses';
```

```text
+-----------+------------+
| prod_name | prod_price |
+-----------+------------+
| Fuses     |       3.42 |
+-----------+------------+
1 row in set (0.00 sec)
```

```sql
SELECT prod_name, prod_price
FROM products
WHERE prod_price <= 10;
```

```text
+----------------+------------+
| prod_name      | prod_price |
+----------------+------------+
| .5 ton anvil   |       5.99 |
| 1 ton anvil    |       9.99 |
| Bird seed      |      10.00 |
| Carrots        |       2.50 |
| Fuses          |       3.42 |
| Oil can        |       8.99 |
| Sling          |       4.49 |
| TNT (1 stick)  |       2.50 |
| TNT (5 sticks) |      10.00 |
+----------------+------------+
9 rows in set (0.00 sec)
```

```sql
SELECT vend_id, prod_name
FROM products
WHERE vend_id <> 1003;
```

```text
+---------+--------------+
| vend_id | prod_name    |
+---------+--------------+
|    1001 | .5 ton anvil |
|    1001 | 1 ton anvil  |
|    1001 | 2 ton anvil  |
|    1002 | Fuses        |
|    1005 | JetPack 1000 |
|    1005 | JetPack 2000 |
|    1002 | Oil can      |
+---------+--------------+
7 rows in set (0.00 sec)
```

```sql
SELECT vend_id, prod_name
FROM products
WHERE vend_id != 1003;
```

```text
+---------+--------------+
| vend_id | prod_name    |
+---------+--------------+
|    1001 | .5 ton anvil |
|    1001 | 1 ton anvil  |
|    1001 | 2 ton anvil  |
|    1002 | Fuses        |
|    1005 | JetPack 1000 |
|    1005 | JetPack 2000 |
|    1002 | Oil can      |
+---------+--------------+
7 rows in set (0.00 sec)
```

```sql
SELECT prod_name, prod_price
FROM products
WHERE prod_price BETWEEN 5 and 10;
```

```text
+----------------+------------+
| prod_name      | prod_price |
+----------------+------------+
| .5 ton anvil   |       5.99 |
| 1 ton anvil    |       9.99 |
| Bird seed      |      10.00 |
| Oil can        |       8.99 |
| TNT (5 sticks) |      10.00 |
+----------------+------------+
5 rows in set (0.00 sec)
```

```sql
SELECT prod_name
FROM products
WHERE prod_price IS NULL;
```

```text
Empty set (0.00 sec)
```

```sql
SELECT cust_id
FROM customers
WHERE cust_email IS NULL;
```

```text
+---------+
| cust_id |
+---------+
|   10002 |
|   10005 |
+---------+
2 rows in set (0.00 sec)
```

## Advanced Data Filtering

* `AND` operator
* `OR` operator
* `IN` operator
* `NOT` operator

## Wildcard filtering

When using a wildcard, you'll no longer be able to use `WHERE ... = ...`, instead of `=` use `LIKE`.

There are two types of wildcard:

* `%` wildcard: represents zero, one, or multiple characters. 
* `_` wildcard: represents a single character.


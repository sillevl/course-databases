# Calculated fields

Cases:

- Merging multiple columns into a single column
- Calculating new data based on existing data
  - eg: quantity * price = total price

## Concatinating fields

```sql
SELECT Concat(vend_name, ' (', vend_country, ')')
FROM vendors
ORDER BY vend_name;
```

Using the function **Concat\(\)** in this example results in: Concat\(arg1 , 'String1' , arg2 , 'String2'\) with arg1 = vend\_name , String1 = '\(' , arg2 = vend\_country , String2 = '\)'

```text
+--------------------------------------------+
| Concat(vend_name, ' (', vend_country, ')') |
+--------------------------------------------+
| ACME (USA)                                 |
| Anvils R Us (USA)                          |
| Furball Inc. (USA)                         |
| Jet Set (England)                          |
| Jouets Et Ours (France)                    |
| LT Supplies (USA)                          |
+--------------------------------------------+
```

## Aliases

```sql
SELECT Concat(RTrim(vend_name), ' (', RTrim(vend_country), ')') AS vend_title
FROM vendors
ORDER BY vend_name;
```

Using the **AS 'someName'** statement, you can display a sort of 'virtual column' with the name you've given within the statement

RTRIM\(\) removes the trailing spaces of a string. \(empty spaces\)

```text
+-------------------------+
| vend_title              |
+-------------------------+
| ACME (USA)              |
| Anvils R Us (USA)       |
| Furball Inc. (USA)      |
| Jet Set (England)       |
| Jouets Et Ours (France) |
| LT Supplies (USA)       |
+-------------------------+
```

## Mathematical calculations

```sql
SELECT prod_id, quantity, item_price
FROM orderitems
WHERE order_num = 20005;
```

```text
+---------+----------+------------+
| prod_id | quantity | item_price |
+---------+----------+------------+
| ANV01   |       10 |       5.99 |
| ANV02   |        3 |       9.99 |
| TNT2    |        5 |      10.00 |
| FB      |        1 |      10.00 |
+---------+----------+------------+
```

```sql
SELECT  prod_id, quantity, item_price,
        quantity * item_price AS expanded_price
FROM orderitems
WHERE order_num = 20005;
```

```text
+---------+----------+------------+----------------+
| prod_id | quantity | item_price | expanded_price |
+---------+----------+------------+----------------+
| ANV01   |       10 |       5.99 |          59.90 |
| ANV02   |        3 |       9.99 |          29.97 |
| TNT2    |        5 |      10.00 |          50.00 |
| FB      |        1 |      10.00 |          10.00 |
+---------+----------+------------+----------------+
```

| Operator | Description |
| :---: | --- |
| + | Addition |
| - | Subtraction |
| \* | Multiplication |
| / | Division |

## Filtering on calculated fields

It is not possible to filter on aliased fields using the `WHERE` clause. This is caused by the way SQL queries are executed. At the moment of evaluating the `WHERE` the column value may not be determined yet.

The following statement is illegal and will result in an error.

```sql
SELECT  quantity * item_price AS expanded_price
FROM orderitems
WHERE expanded_price < 30;
```

```text
ERROR 1054 (42S22): Unknown column 'expanded_price' in 'where clause'
```

To solve this problem, the `HAVING` clause can be used. The `HAVING` clause will be discussed later, but makes it possible to filter on groups of data. Because groups are calculated after the `WHERE` conditions, all the information to filter is available when the `HAVING` clause is executed.

```sql
SELECT  quantity * item_price AS expanded_price
FROM orderitems
HAVING expanded_price < 30;
```

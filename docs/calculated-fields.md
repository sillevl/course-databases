# Calculated fields

## Concatinating fields



```sql
SELECT Concat(vend_name, ' (', vend_country, ')')
FROM vendors
ORDER BY vend_name;
```
Using the function <b>Concat()</b> in this example results in: Concat(arg1 , 'String1' , arg2 , 'String2') </br>
with arg1 = vend_name , String1 = '(' , arg2 = vend_country , String2 = ')'
```
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
```
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
```
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
SELECT  prod_id,
        quantity,
        item_price,
        quantity * item_price AS expanded_price
FROM orderitems
WHERE order_num = 20005;
```
```
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
|:--------:|-------------|
| +         | Addition |
| -         | Subtraction |
| *         | Multiplication |
| /         | Division |

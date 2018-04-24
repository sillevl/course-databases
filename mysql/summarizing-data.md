# Summarizing data

## Using aggregate functions

| Function | Description |
| :--- | :--- |
| AVG\(\) | Returns a column's average value |
| COUNT\(\) | Returns the number of rows in a column |
| MAX\(\) | Returns a column's highest value |
| MIN\(\) | Returns a column's lowest value |
| SUM\(\) | Returns the sum of a column's value |

### The AVG\(\) function

```sql
SELECT AVG(prod_price) AS avg_price
FROM products;
```

```text
+-----------+
| avg_price |
+-----------+
| 16.133571 |
+-----------+
```

```sql
SELECT AVG(prod_price) AS avg_price
FROM products
WHERE vend_id = 1003;
```

```text
+-----------+
| avg_price |
+-----------+
| 13.212857 |
+-----------+
```

### The COUNT\(\) function

```sql
SELECT COUNT(*) AS num_cust
FROM customers;
```

```text
+----------+
| num_cust |
+----------+
|        5 |
+----------+
```

```sql
SELECT COUNT(cust_email) AS num_cust
FROM customers;
```

```text
+----------+
| num_cust |
+----------+
|        3 |
+----------+
```

### The MAX\(\) function

```sql
SELECT MAX(prod_price) AS max_price
FROM products;
```

```text
+-----------+
| max_price |
+-----------+
|     55.00 |
+-----------+
```

### The MIN\(\) function

```sql
SELECT MIN(prod_price) AS min_price
FROM products;
```

```text
+-----------+
| min_price |
+-----------+
|      2.50 |
+-----------+
```

### The SUM\(\) function

```sql
SELECT SUM(quantity) AS items_ordered
FROM orderitems
WHERE order_num = 20005;
```

```text
+---------------+
| items_ordered |
+---------------+
|            19 |
+---------------+
```

```sql
SELECT SUM(item_price * quantity) AS total_price
FROM orderitems
WHERE order_num = 20005;
```

```text
+-------------+
| total_price |
+-------------+
|      149.87 |
+-------------+
```

## Aggregates on distinct values

```sql
SELECT AVG(DISTINCT prod_price) AS avg_price
FROM products
WHERE vend_id = 1003;
```

```text
+-----------+
| avg_price |
+-----------+
| 15.998000 |
+-----------+
```

## Combining aggregate functions

```sql
SELECT COUNT(*) AS num_items,
    MIN(prod_price) AS price_min,
    MAX(prod_price) AS price_max,
    AVG(prod_price) AS price_avg
FROM products;
```

```text
+-----------+-----------+-----------+-----------+
| num_items | price_min | price_max | price_avg |
+-----------+-----------+-----------+-----------+
|        14 |      2.50 |     55.00 | 16.133571 |
+-----------+-----------+-----------+-----------+
```


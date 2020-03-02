---
title: Data
---

# Databases Data

Managing data follows the CRUD principles. The SQL languages provides keywords to implement these CRUD principles.

CRUD | Action | SQL statement
---------|----------|---------
 C | Create | `INSERT`
 R | Read | `SELECT`
 U | Update | `UPDATE`
 D | Delete | `DELETE`

::: tip ℹ️ Examples
The examples in this chapter are applied on the `forta` example database.
:::

## Reading Data

Reading or _selecting_ data can be done using an `SELECT` statement. The `SELECT` statement is a very versatile statement, but only the basics are discussed here. The more advanced features will be discussed later.

The most simple `SELECT` statement looks like follows:

```sql
SELECT * FROM table_name
```

The `*` means that we want te select all columns from the table
In the `FROM` clause we add the name of the table we want the data to be selected from.

An example:

The following query will produce the following result.

```sql
SELECT * FROM products;
```

```text
+---------+---------+----------------+------------+----------------------------------------------------------------+
| prod_id | vend_id | prod_name      | prod_price | prod_desc                                                      |
+---------+---------+----------------+------------+----------------------------------------------------------------+
| ANV01   |    1001 | .5 ton anvil   |       5.99 | .5 ton anvil, black, complete with handy hook                  |
| ANV02   |    1001 | 1 ton anvil    |       9.99 | 1 ton anvil, black, complete with handy hook and carrying case |
| ANV03   |    1001 | 2 ton anvil    |      14.99 | 2 ton anvil, black, complete with handy hook and carrying case |
| DTNTR   |    1003 | Detonator      |      13.00 | Detonator (plunger powered), fuses not included                |
| FB      |    1003 | Bird seed      |      10.00 | Large bag (suitable for road runners)                          |
| FC      |    1003 | Carrots        |       2.50 | Carrots (rabbit hunting season only)                           |
| FU1     |    1002 | Fuses          |       3.42 | 1 dozen, extra long                                            |
| JP1000  |    1005 | JetPack 1000   |      35.00 | JetPack 1000, intended for single use                          |
| JP2000  |    1005 | JetPack 2000   |      55.00 | JetPack 2000, multi-use                                        |
| OL1     |    1002 | Oil can        |       8.99 | Oil can, red                                                   |
| SAFE    |    1003 | Safe           |      50.00 | Safe with combination lock                                     |
| SLING   |    1003 | Sling          |       4.49 | Sling, one size fits all                                       |
| TNT1    |    1003 | TNT (1 stick)  |       2.50 | TNT, red, single stick                                         |
| TNT2    |    1003 | TNT (5 sticks) |      10.00 | TNT, red, pack of 10 sticks                                    |
+---------+---------+----------------+------------+----------------------------------------------------------------+
14 rows in set (0.00 sec)
```

## Creating Data

### Inserting a single complete row

When inserting a complete row into the table, all fields must be specified in the order in which they appear in the table definition. All columns must be specified. If no value is available for a particular column, the `NULL` value can be used \(If `NULL` is allowed by the table definition\).

Notice that the first value for the `cust_id` is `NULL`. This is possible by the `AUTO_INCREMENT` attribute that is defined for this field.

```sql
INSERT INTO customers
VALUES (
    NULL,
    'Pep E. LaPew',
    '100 Main Street', 
    'Los Angeles',
    'LA',
    '90046',
    'USA',
    NULL,
    NULL
);
```

No output is generated for these kind of queries. The client will tell the amount of affected rows. In this case it is only 1.

```text
Query OK, 1 row affected (0.01 sec)
```

This way of inserting rows is not recommended. A clear knowledge of the table structure is required.

### Inserting a single partial row

To insert a partial row, the column names must be stated explicitly. Columns that are not specified will get the _default_ value. The default value is specified in the table definition.

Notice that `cust_id` is not specified. It won't receive a `NULL` value, because the `AUTO_INCREMENT`attribute is set for this field. It will use an value that is 1 larger than the last used `cust_id`.

```sql
INSERT INTO customers (
    cust_name,
    cust_address,
    cust_city,
    cust_state,
    cust_zip,
    cust_country
)
VALUES (
    'Pep E. LaPew',
    '100 Main Street', 
    'Los Angeles',
    'LA',
    '90046',
    'USA'
);
```

This is a safer way to insert data into an table. It is more verbose, but not all structure of the table must be known to safely insert any data. It is possible to change the order of fields \(columns\) independently from the table structure.

```sql
INSERT INTO customers (
    cust_country,
    cust_state,
    cust_address,
    cust_name,
    cust_city,
    cust_zip
)
VALUES (
    'USA',
    'LA',
    '100 Main Street', 
    'Pep E. LaPew',
    'Los Angeles',
    '90046'
);
```

### Inserting multiple rows

Multiple columns can be inserted at once by adding sets of values, each enclosed within parentheses and separated by commas.

```sql
INSERT INTO customers (
    cust_name,
    cust_address,
    cust_city,
    cust_state,
    cust_zip,
    cust_country
)
VALUES (
    'Pep E. LaPew',
    '100 Main Street', 
    'Los Angeles',
    'LA',
    '90046',
    'USA'
),(
    'M. Martian',
    '42 Galaxy Way', 
    'New York',
    'NY',
    '11213',
    'USA'
);
```

This way of inserting multiple rows improves the performance of the database. It is more efficient than separate INSERT statements.

### Insert the result of a query

Instead of a `VALUES` clause, a `SELECT` clause can be used to insert data from existing data in other tables.

```sql
INSERT INTO customers (
    cust_name,
    cust_address,
    cust_city,
    cust_state,
    cust_zip,
    cust_country
)
SELECT 
    cust_name,
    cust_address,
    cust_city,
    cust_state,
    cust_zip,
    cust_country
FROM custnew;
```

## Updating data

### Updating a single field

```sql
UPDATE customers
SET cust_email = 'elmer@fudd.com'
WHERE cust_id = 10005;
```

::: tip ⚠️ Don't forget the `WHERE` clause !
If you omit the `WHERE` clause, all rows in the table will be updated. In most cases, this is not what you want to do.
:::

### Updating multiple fields

```sql
UPDATE customers
SET cust_name = 'The Fudds',
    cust_email = 'elmer@fudd.com'
WHERE cust_id = 10005;
```

### Deleting a value from a row

To delete an existing value, you can update it with the `NULL` value.

```sql
UPDATE customers
SET cust_email = NULL
WHERE cust_id = 10005;
```

## Deleting data

To delete a row from a table the `DELETE` clause can be used. It can also be used to delete _all_ rows by omitting the `WHERE` clause.

```sql
DELETE FROM customers
WHERE cust_id = 10006;
```

::: tip ⚠️ Don't forget the `WHERE` clause !
If you omit the `WHERE` clause, all rows in the table will be deleted. In most cases, this is not what you want to do.
:::

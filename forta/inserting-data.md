# Inserting data

## Inserting a single complete row

When inserting a complete row into the table, all fields must be specified in the order in which they appear in the table definition. All columns must be specified. If no value is available for a particular column, the `NULL` value can be used (If `NULL` is allowed by the table definition).

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

```
Query OK, 1 row affected (0.01 sec)
```

This way of inserting rows is not recommended. A clear knowledge of the table structure is required.

## Inserting a single partial row

To insert a partial row, the column names must be stated explicitly. Columns that are not specified will get the *default* value (mostly `NULL`). 

Notice that `cust_id` is not specified. It won't receive a `NULL` value, because the `AUTO_INCREMENT`attribute is set for this field. It will use an value that is 1 larger than the last used `cust_id`.

```sql
INSERT INTO customers (
    cust_name,
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

## Inserting multiple rows

```sql

```

```

```

## Insert the result of a query

```sql

```

```

```


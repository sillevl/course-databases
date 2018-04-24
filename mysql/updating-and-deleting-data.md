# Updating and deleting data

## Update

### Updating a single field

```sql
UPDATE customers
SET cust_email = 'elmer@fudd.com'
WHERE cust_id = 10005;
```

_DON'T OMIT THE WHERE CLAUSE !_ If you omit the `WHERE` clause, all rows in the table will be updated. In most cases, this is not what you want to do.

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

## Delete

To delete a row from a table the `DELETE` clause can be used. It can also be used to delete _all_ rows by omitting the `WHERE` clause.

```sql
DELETE FROM customers
WHERE cust_id = 10006;
```


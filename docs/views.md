# Views

A view is known as a "virtual table" where you can query data in.
It can be used to simplify difficult queries. This way you can reuse SQL statements.
You can also use this to add a bit of security to your queries (eg. Read only for a normal use)

###Rules:
- Name has to be unique
- You need enough rights to add these
- You can theoretically make an infinite amount of these
- Views can be nested
- Views should not be indexed, there are also no triggers allowed

###Example:

```SQL
CREATE VIEW productcustomers AS             -- Create a view called productcustomers
SELECT cust_name, cust_contact, prod_id     -- These three lines will be executed when you use this view
FROM customers, orders, orderitems
WHERE customers.cust_id = orders.cust_id AND orderitems.order_num = orders.order_num;

SELECT * FROM productcustomers;             -- This is how a view can be used
```

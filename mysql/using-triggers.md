# Using triggers

Triggers are actions that can be initiated by doing something else. For example updating the stock of an item when an order has been made.

## Different Possibilities:

| ... | Before | Instead | After |
| --- | --- | --- | --- |
| Delete | x |  | x |
| Insert | x |  | x |
| Update | x |  | x |

MySQL can only use "Before" and "After".

## Rules:

* The names have to be unique
* There must be stated on what table the trigger applies to
* Also on what action it triggers on
* And when it triggers

```sql
CREATE TRIGGER newproduct AFTER INSERT ON products
FOR EACH ROW
-- Placeholder for the action
```

## Example

We will create a trigger that archives a row before deleting that row.

```sql
CREATE TRIGGER archive                     
BEFORE DELETE ON users                        -- Before there is a delete on the table "users"
FOR EACH ROW
INSERT INTO usersarch(name, count, updated)   -- Do an insert into the archive table with the values that will be deleted
VALUES (OLD.name, OLD.count, OLD.updated);    -- OLD. holds these values
```

With this small example we will update the timestamp in a row with the date when it was last changed.

```sql
CREATE TRIGGER updatedate
AFTER UPDATE ON users                          -- Trigger after there has been an update to the table "users"
FOR EACH ROW                                  
SET @updated = NOW();                          -- change the value of the row that has been updated to NOW() (Current date/time)
```


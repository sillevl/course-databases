# Creating and manipulating tables

##Creating a new table

```sql
CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text,
  `price` decimal(6,2) NOT NULL,
  `platform` set('XBOX','PS','PC') NOT NULL,
  `multiplayer` enum('YES','NO') NOT NULL,
  `timestamp` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  PRIMARY KEY (id)
); 
```
To create a new table use the command CREATE TABLE 'yourTableName'(column1, column2,...);
In this case for column1 = `id` int(11) NOT NULL
- NOT NULL means that the value from your column can't be a null value.
- Not every new table needs a primary key, a table can also exist with 2 or more foreign keys.
- Note that when you add a primary key that you don't forget to give an argument: PRIMARY KEY (id)

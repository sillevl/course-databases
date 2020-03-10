# Sorting retreived data

When receiving a lot of data from the database, It can be hard to find what you need. For example, when you want a list of all employees with their name. You will get list of the names in a random order. Or so it seems, they are actually sorted by their primary key number. You can solve this with the `ORDER BY` statement.

```sql
SELECT name, surname FROM employees ORDER BY name;
```

Now the results will be returned in alphabetical order. \(When placing `ORDER BY BINARY`, you can force the sorting to be case-sensitive\)

## Ascending and Descending

You can change if the results will be displayed from A to Z or the other way around. When choosing `ASC` it will go from A to Z for data with letters. And for numbers it will go from 0 to the highest number there is. `DESC` does the complete opposite. **When you do not state any of these two, it will default to ascending.**

```sql
SELECT name, email FROM employees ORDER BY name DESC;
```

## Multiple sorting statements

When sorting data, the chances are high that you will have the same value for something. For example, you want to sort the names of your employees in alphabetical order but you also want to sort by gender \(first Male, than Female\).

```sql
SELECT name, gender FROM employees ORDER BY gender DESC, name;
```

The result should look something like this:

| name | gender |
| --- | --- |
| John | Male |
| Sam | Male |
| Steven | Male |
| Tom | Male |
| Anna | Female |
| Ellen | Female |
| Lucy | Female |
| Mary | Female |

As you can see, first the men and then women will be shown alphabetically. When you take a look at the query you can see I placed `DESC` behind gender. I did this because the 'F' from female comes earlier then the 'M' from male in the alphabet. This shows you that you can decide how to sort any table.


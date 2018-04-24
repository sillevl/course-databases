# Working with subqueries

```sql
SELECT
(SELECT count(*) as aantalusers FROM users),
(SELECT count(*) as aantalgames FROM games),
(SELECT count(*) as aantalreviews FROM reviews);
```

```text
+-------------+------------+---------------+
| aantalusers |aantalgames | aantalreviews |
+-------------+------------+---------------+
| 75          |       100  |      534      |
+-------------+------------+---------------+
```


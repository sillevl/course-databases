# Working with subqueries

```sql
SELECT
(SELECT count(*) FROM users) AS aantalusers ,
(SELECT count(*) FROM games) AS aantalgames,
(SELECT count(*) FROM reviews) AS aantalreviews;
```

```text
+-------------+------------+---------------+
| aantalusers |aantalgames | aantalreviews |
+-------------+------------+---------------+
| 75          |       100  |      534      |
+-------------+------------+---------------+
```


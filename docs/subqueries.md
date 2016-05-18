# Subqueries
```sql
SELECT
(SELECT count(*) as aantalusers FROM users),
(SELECT count(*) as aantalgames FROM games),
(SELECT count(*) as aantalreviews FROM reviews);
```
```
+-------------+------------+---------------+
| aantalusers |aantalgames | aantalreviews |
+-------------+------------+---------------+
| 75          |       100  |      534      |
+-------------+------------+---------------+
```

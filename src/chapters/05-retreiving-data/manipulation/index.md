# Data manipulation

## Text manipulation functions

```sql
SELECT vend_name, UPPER(vend_name) AS vend_name_upcase
FROM vendors
ORDER BY vend_name;
```

```text
+----------------+------------------+
| vend_name      | vend_name_upcase |
+----------------+------------------+
| ACME           | ACME             |
| Anvils R Us    | ANVILS R US      |
| Furball Inc.   | FURBALL INC.     |
| Jet Set        | JET SET          |
| Jouets Et Ours | JOUETS ET OURS   |
| LT Supplies    | LT SUPPLIES      |
+----------------+------------------+
```

| Function | Description |
| :--- | :--- |
| Left\(\) | Returns characters from left of string.  **Left\('String' , int\)** with **int** the amount of left characters |
| Length\(\) | Returns the length of a string |
| Locate\(\) | Finds a substring within a string.    **Locate\('SubString', 'String'\)** with SubString = the string you are searching for |
| Lower\(\) | Converts string to lowercase |
| LTrim\(\) | Trims white space from left of string |
| Right\(\) | Returns chraracters from right of string. **Right\('String' , int\)** with **int** the amount of right characters |
| RTrim\(\) | Trims white space from right of string |
| Soundex\(\) | Returns a string's SOUNDEX value |
| SubString\(\) | Returns characters from within a string. **SubString\('String', intStart, intLength\)** example: SubString\('w3resource',4,3'\) returns 'eso' |
| Upper | Converts string to uppercase |

## Date and time manipulation functions

| Function | Description |
| :--- | :--- |
| AddDate\(\) | Add to a date \(days, weeks, and so on\) |
| AddTime\(\) | Add to a time \(hours, minutes, and so on\) |
| CurDate\(\) | Returns the current date |
| CurTime\(\) | Returns the current time |
| Date\(\) | Returns the date portion of a date time |
| DateDiff\(\) | Calculates the difference between two dates |
| Date\_Add\(\) | Highly flexible date arithmetic function |
| Date\_Format\(\) | Returns a formatted date or time string |
| Day\(\) | Returns the day portion of a date |
| DayOfWeek\(\) | Returns the day of the week for a date |
| Hour\(\) | Returns the hour portion of a time |
| Minute\(\) | Returns the minute portion of a time |
| Month\(\) | Returns the month portion of a date |
| Now\(\) | Returns the current date and time |
| Second\(\) | Returns the second portion of a time |
| Time\(\) | Returns the time portion of a date time |
| Year\(\) | Returns the year portion |

### Select by date example

```sql
SELECT cust_id, order_num
FROM orders
WHERE Date(order_date) = '2005-09-01';
```

```text
+---------+-----------+
| cust_id | order_num |
+---------+-----------+
|   10001 |     20005 |
+---------+-----------+
1 row in set (0.01 sec)
```

### Select between two dates example

```sql
SELECT cust_id, order_num
FROM orders
WHERE Date(order_date) BETWEEN '2005-09-01' AND '2005-09-30';
```

```text
+---------+-----------+
| cust_id | order_num |
+---------+-----------+
|   10001 |     20005 |
|   10003 |     20006 |
|   10004 |     20007 |
+---------+-----------+
3 rows in set (0.00 sec)
```

Alternative, but better way to select for years or months.

```sql
SELECT cust_id, order_num
FROM orders
WHERE Year(order_date) = 2005 AND Month(order_date) = 9;
```

```text
+---------+-----------+
| cust_id | order_num |
+---------+-----------+
|   10001 |     20005 |
|   10003 |     20006 |
|   10004 |     20007 |
+---------+-----------+
```

## Numeric manipulation functions

| Function | Description |
| :--- | :--- |
| Abs\(\) | Returns a nuber's absolute value |
| Cos\(\) | Returns the trigonometric cosine of a specified angle |
| Exp\(\) | Returns the exponential value of a specific number |
| Mod\(\) | Returns the remainder of a division operation |
| Pi\(\) | Returns the value of pi |
| Rand\(\) | Returns a random number |
| Sin\(\) | Retunrs the trigonometric sine of a specified angle |
| Sqrt\(\) | Returns the square root of a specied number |
| Tan\(\) | Returns the trigonometric tangent of a specified angle |

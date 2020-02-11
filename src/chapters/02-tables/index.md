---
title: Tables
---

# Database Tables

<!-- introduction -->

- Listing Tables
- Inspecting Tables
- Managing Tables

MySQL provides some commands to inspect the existing databases, tables, and there structure \(columns and properties of those columns\).

The following features are just some of the available:

* Listing the available databases
* Listing the tables from a specific database
* Listing the columns and there properties from a specific table
* ...

This can be used to explore the existing databases and getting to know what is available.


<!-- use statement -->

## Listing Tables

```sql
SHOW TABLES;
```

## Setting The Default Database

```sql
USE database_name;
```

To refer to a table, you have two choices:

A `fully qualified table` name consists of a database identifier and a table identifier:

```sql
SHOW COLUMNS FROM db_name.tbl_name;
SELECT * FROM db_name.tbl_name;
```

A table identifier by itself refers to a table in the default (current) database. If sampledb is the default database (set using the `USE` statement), the following statements are equivalent:

```sql
SELECT * FROM member;
SELECT * FROM sampledb.member;
```

### Inspecting Table Structure

```sql
DESCRIBE [table_name];
```

```sql
SHOW COLUMNS FROM [table_name] [options]
```

The difference is that with SHOW COLUMNS, you have more options, like showing columns from a specific DB and using LIKE to display a list of columns using wildcards. This is especially useful if you have a table with a lot of columns that have similar names or names that contain prefixes/suffixes. For example,

<!-- example -->

## Managing Tables

::: tip There is no Undo
Be very careful with the features and commands explained below. There is no undo functionality in a database. If something went wrong, if did not result in expected behavior, there is no way to get your data back. Always make sure to backup your data before making changes that you are not confident with.
:::

### Creating Tables

```sql
CREATE TABLE [table_name] (
  column_name datatype....
);
```

### Updating Tables

#### Renaming a Table

```sql
ALTER TABLE websites
  RENAME TO sites;
```

#### Add a New Column

```sql
ALTER TABLE games
  ADD release datetime;
```

You can add multiple columns in a single statement by chaining them with a `,`;

```sql
ALTER TABLE games
  ADD release datetime,
  ADD early_access boolean;
```

#### Renaming Columns

```sql
ALTER TABLE table_name
  RENAME COLUMN old_col_name TO new_col_name;
```

#### Changing a Datatype

```sql
ALTER TABLE games
  MODIFY COLUMN name char(50);
```

#### Remove Existing Column

```sql
ALTER TABLE games
  DROP COLUMN release;
```

### Deleting Tables

```sql
DROP TABLE [table_name];
```

## Indexing


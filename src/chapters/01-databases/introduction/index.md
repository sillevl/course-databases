---
title: Databases
---

# Databases Introduction

::: tip ℹ️ MySQL vs MariaDB
MySQL is maintained by Oracle. MySQL is free to use but not entirely open source. Some parts are closed source. This was not the vision of the original developers. Therefor they created a fork that replaces the closed source parts with open source alternatives. This fork is called **MariaDB**, and guarantees to stay open source.

MariaDB and MySQL are therefor compatible. All MySQL command are compatible with MariaDB and vica versa.
:::

MySQL has become one of the most popular database management systems in the world. It can be used for small development projects to large and prestigious sites on the web. MySQL has proven itself to be solid, reliable, fast and trusted to all sorts of data storage needs

MySQL and MariaDB are open source and free to use. This makes it one of the most popular databases. It is also the best supported and best documented database for web based projects. For example with PHP.

![MariaDB and MySQL logo](./img/mariadb_vs_mysql.jpg)

## What is a database?

The word database is used in many ways. For our purpose we will use the following definition:

> A database is a collection of data stored in some organized fashion

You can think of a database as some kind of cabinet. It is simply a physical location to store data, regardless of what data is or how it is stored.

### DataBase Management System - DBMS

The term `database` does not refer to the database software that is used. This might create much confusion if not used correctly. The _database software_ is called the Database Management System or DBMS.

The database is the container that is created and can be manipulated using the DBMS. MySQL in this case is a DBMS system, not the fysical database.

A database might be a file on a hard drive, but it might not. It is not even significant as you never access a database directly anyway. You always use the DBMS that accesses the database for you.

![Database vs DBMS](./img/dbms.jpg)

## Tables

When storing information in a filing cabinet, you don’t just toss it in a drawer. You create files within the cabinet. You file related data in specific files.

In the database world, the file is called a table. A table is a _structured file_ that can store data of a specific type. A table may contain a list of customers, a product catalog or any other list of information.

![Filing cabinet](./img/ficherosclasicoscatalogo.jpg)

When using tables in a database, there are some rules that the tables need to apply to. Tables that do not fit the following description cannot be stored inside a database, and need to be reorganized.

- Rows contain data about an entity
- Columns contain data about the attributes of that entity
- All entries in a column are of the same kind
- Each column has a unique name
- Cells of a table hold a single value
- Order of columns is not important
- Order of rows is not important
- No two rows may be identical

The key is that data stored in a table is of _one type_ of data or a list. You should never store a list of customers and a list of orders in the same database table. Technically it is possible, but it would make retrieving information and access very difficult.

A better solution is to create two tables for each list Every table in a database has a name that identifies it. The name is always unique for a given database.

**Customers table**:

| Name | Email | Address | City | State |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

### Schema's

> Rows contain data about an entity
> Columns contain data about the attributes of that entity

Tables have characteristics and properties that define how data is stored in them. This includes information about what data may be stored, how it is broken up, how individual pieces of information are named and much more… The set of information that describes a table is known as a schema. Schema’s are used to describe specific tables within a database, as well as entire relationships between tables in them.

### Columns and datatypes

> All entries in a column are of the same kind

Tables are made up of columns. Columns contain a particular piece of information within the table. You can envision database tables as grids \(like spreadsheets\). Each column on the grid contains a particular piece of information.

Each column in a database has an associated **datatype**. It defines what the type the data the column can contain

Eg: Numeric, date, text, currency,…

Datatypes are very important for a database. They restrict the type of data that can be stored in the column, preventing wrong information to be stored. It can also help sorting the data correctly and efficiently. They play an important role in optimizing disk usage.

### Rows

Data in a table is stored in rows. Each record saved is stored in its own row.

Eg: A customer table might store one customer per row

The number of rows in the table is the number of records in it. _Record_ and _row_ are used interchangeably but row is technically the correct term.

### Primary keys

> No two rows may be identical

Every row in a table must have a column \(or set of columns\) that uniquely identifies it. These column or set of columns are called the primary key. The primary key is used to refer to a specific row.

Without a primary key updating or deleting specific rows in a table becomes extremely difficult. There is no guaranteed safe way to refer to just the rows to be affected.

_Always define primary keys !_

Primary keys are not required, but defining them makes future data manipulation is possible and manageable.

A primary key consisting out of multiple columns is also called a composite key.

Any column can be selected as the primary key as long as it meets the following conditions:

1. No two rows can have the same primary key value \(unique\)
2. Every row must have a primary key value \(NULL is not allowed\)

These rules are enforced by the MySQL. When multiple columns are used, the same rules apply to all columns that make up the primary key. Individual columns need not to have unique values, but the whole key must be unique.

#### Primary key best practices

In addition to the rules that MySQL enforces, there are some best practices when choosing a primary key

- Don't update values in primary key columns
- Don't reuse values in primary key columns
- Don't use values that might change in primary key columns

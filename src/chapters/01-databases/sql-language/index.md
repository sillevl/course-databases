# What is SQL

SQL pronounced as:

* Letters: S-Q-L
* Or as `sequal`

Stands for Structured Query Language and is a language that is designed specifically for communicating with databases. Unlike other languages \(spoken languages, or programming languages such as Java or C++\) SQL is made up of very few words. This is deliberate. SQL is designed to do one thing, and do it very well. SQL provides you with a simple and efficient way to read and write data from a database.

## Advantages

SQL is not proprietary. It is not used by specific database vendors. Almost every major DBMS system supports SQL. This enables you to interact with just about every database you’ll run into.

SQL is easy to learn. The statements are all made up of descriptive English words \(and there aren’t many of them\). Despite its apparent simplicity, SQL is actually very powerful. Cleverly using its language elements, you can perform very complex and sophisticated database operations.

## DDL vs DML

SQL statements can be divided into two categories:

* **Data definition language \(DDL\)** statements are used for creating tables, relationships and other structures.
* **Data manipulation language \(DML\)** statements are used for queries and data modification.

## CRUD

In computer programming, **create**, **read**, **update**, and **delete** (CRUD) are the four basic functions of persistent storage.

* **C**reate: Adding new data
* **R**ead: Requesting data
* **U**pdate: Changing data
* **D**elete: Removing data

Virtualy any software application makes use of this CRUD functionality.

For relational databases we can even apply this to the data definition and data manipulation languages.

Action | DDL | DML
---|---|---
C | `CREATE TABLE` | `INSERT INTO`
R | `SHOW COLUMNS` | `SELECT`
U | `ALTER TABLE` | `UPDATE`
D | `DROP TABLE` | `DELETE FROM`

The query statements mentioned above will be explained thoroughly in the next chapters.

# Joins
An SQL JOIN clause is used to combine rows from two or more tables, based on a common field between them.

We need the name of the game and the name of the publisher who made the game.
```sql
select games.name as name, publishers.name as publisher 
from games, publishers 
where games.publisher_id=publishers.id limit 10;
```
```
+--------------------------------+------------------------------------------------+
| name                           | publisher                                      |
+--------------------------------+------------------------------------------------+
| Resident Evil 4                | Pastel Games                                   |
| Call of Duty 4: Modern Warfare | Koei Co., Ltd.                                 |
| Assassin's Creed               | Pluto 13 GmbH                                  |
| Prototype                      | SunSoft                                        |
| No More Heroes                 | Black Isle Studios                             |
| Burnout Paradise               | Shrapnel Games, Inc.                           |
| Shadow of the Colossus         | Shrapnel Games, Inc.                           |
| Rock Band                      | Anirog Software                                |
| Halo 3                         | Virgin Interactive Entertainment (Europe) Ltd. |
| Crysis                         | Cyan Worlds, Inc.                              |
+--------------------------------+------------------------------------------------+



```




What does this query do?
We need the id, name, description, price, platform, multiplayer, publisher and the user who added the game.
The common field between these tables are user_id and publisher_id.
They are the foreign keys in the table games, with these foreign keys we can link these tables together.
```sql
SELECT games.id as id, games.name as name, games.description as description, games.price as price, games.platform as platform, games.multiplayer as multiplayer, games.timestamp as
timestamp, users.nickname as username, publishers.name as publisher 
FROM games, users, publishers 
WHERE games.user_id=users.id AND games.publisher_id=publishers.id AND games.id=30088;
```
```
-------+-------------+-------------------------------------------------------------------------------------------------
 id    | name        | description   | price | platform   | multiplayer |  timestamp | username    | publisher       |
-------+-------------+-------------------------------------------------------------------------------------------------
 30088 | Bulletstorm | Stylish. | 29.76 | XBOX,PS,PC | YES   | 2011-02-22 00:00:00 | Luuk.Dekker | BAP Interactive |
-------+-------------+-------------------------------------------------------------------------------------------------
```

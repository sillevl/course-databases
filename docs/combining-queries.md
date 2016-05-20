# Combining queries
The UNION operator is used to combine the result-set of two or more SELECT statements.

Notice that each SELECT statement within the UNION must have the same number of columns. The columns must also have similar data types. Also, the columns in each SELECT statement must be in the same order.

##Union
Get all the publishers and all the games and combine them together in 1 result.
We use limit because the list would be too long.
```sql
select distinct games.name as game, publishers.name from games, publblishers where games.publisher_id=publishers.id 
union 
select distinct publishers.name, publishers.id from publishers limit 50;
+------------------------------------------+------------------------------------------------+
| game                                     | name                                           |
+------------------------------------------+------------------------------------------------+
| Resident Evil 4                          | Pastel Games                                   |
| Call of Duty 4: Modern Warfare           | Koei Co., Ltd.                                 |
| Assassin's Creed                         | Pluto 13 GmbH                                  |
| Prototype                                | SunSoft                                        |
| No More Heroes                           | Black Isle Studios                             |
| Burnout Paradise                         | Shrapnel Games, Inc.                           |
| Shadow of the Colossus                   | Shrapnel Games, Inc.                           |
| Rock Band                                | Anirog Software                                |
| Halo 3                                   | Virgin Interactive Entertainment (Europe) Ltd. |
| Crysis                                   | Cyan Worlds, Inc.                              |
| Gears of War                             | ChessBase GmbH                                 |
| The Legend of Zelda: Ocarina of Time     | U.S. Gold Ltd.                                 |
| Uncharted: Drake's Fortune               | MicroProse Software, Inc.                      |
| Super Mario Galaxy                       | Black Isle Studios                             |
| Mass Effect                              | Sega                                           |
| BioShock                                 | Designer Software                              |
| The Orange Box                           | SunSoft                                        |
| Team Fortress 2                          | Eurocom Entertainment Software                 |
| The Elder Scrolls IV: Oblivion           | Ariolasoft UK                                  |
| Street Fighter IV                        | Ariolasoft UK                                  |
| Grand Theft Auto IV                      | Pluto 13 GmbH                                  |
| God of War III                           | Pluto 13 GmbH                                  |
| Tom Clancy's Splinter Cell: Conviction   | Positech Computing Ltd.                        |
| Borderlands                              | Designer Software                              |
| Too Human                                | Software Storm, Inc.                           |
| Fallout 3                                | Koei Co., Ltd.                                 |
| Fable II                                 | SunSoft                                        |
| Mafia II                                 | Whiptail Interactive                           |
| Resident Evil 5                          | Hyperbole Studios                              |
| Sid Meier's Civilization Revolution      | Designer Software                              |
| Super Smash Bros. Brawl                  | Progressive Peripherals and Software           |
| inFamous                                 | Mana Games                                     |
| Killzone 2                               | EA Bright Light                                |
| LittleBigPlanet                          | Visceral Games                                 |
| Star Wars: The Force Unleashed           | Square Enix                                    |
| Mario Kart Wii                           | dtp entertainment AG                           |
| Battlefield: Bad Company                 | MicroProse Software, Inc.                      |
| Gears of War 2                           | THQ                                            |
| Final Fantasy XIII                       | Hyperbole Studios                              |
| Far Cry 2                                | Acclaim Studios Cheltenham                     |
| Metal Gear Solid 4: Guns of the Patriots | Z-Axis, Ltd.                                   |
| StarCraft II: Wings of Liberty           | Sony Computer Entertainment Europe             |
| Soulcalibur IV                           | Dinamic Software                               |
| Left 4 Dead                              | Positech Computing Ltd.                        |
| Mercenaries 2: World in Flames           | Mindscape Entertainment                        |
| BrxFCtal Legend                          | ChessBase GmbH                                 |
| Bayonetta                                | JoWooD Productions Software AG                 |
| Rock Band 2                              | EA Bright Light                                |
| Braid                                    | Radon Labs GmbH                                |
| Duke Nukem Forever                       | BAP Interactive                                |
+------------------------------------------+------------------------------------------------+
50 rows in set (0.00 sec)
+------------------------------------------+------------------------------------------------+
| game                                     | name                                           |
+------------------------------------------+------------------------------------------------+
| Resident Evil 4                          | Pastel Games                                   |
| Call of Duty 4: Modern Warfare           | Koei Co., Ltd.                                 |
| Assassin's Creed                         | Pluto 13 GmbH                                  |
| Prototype                                | SunSoft                                        |
| No More Heroes                           | Black Isle Studios                             |
| Burnout Paradise                         | Shrapnel Games, Inc.                           |
| Shadow of the Colossus                   | Shrapnel Games, Inc.                           |
| Rock Band                                | Anirog Software                                |
| Halo 3                                   | Virgin Interactive Entertainment (Europe) Ltd. |
| Crysis                                   | Cyan Worlds, Inc.                              |
| Gears of War                             | ChessBase GmbH                                 |
| The Legend of Zelda: Ocarina of Time     | U.S. Gold Ltd.                                 |
| Uncharted: Drake's Fortune               | MicroProse Software, Inc.                      |
| Super Mario Galaxy                       | Black Isle Studios                             |
| Mass Effect                              | Sega                                           |
| BioShock                                 | Designer Software                              |
| The Orange Box                           | SunSoft                                        |
| Team Fortress 2                          | Eurocom Entertainment Software                 |
| The Elder Scrolls IV: Oblivion           | Ariolasoft UK                                  |
| Street Fighter IV                        | Ariolasoft UK                                  |
| Grand Theft Auto IV                      | Pluto 13 GmbH                                  |
| God of War III                           | Pluto 13 GmbH                                  |
| Tom Clancy's Splinter Cell: Conviction   | Positech Computing Ltd.                        |
| Borderlands                              | Designer Software                              |
| Too Human                                | Software Storm, Inc.                           |
| Fallout 3                                | Koei Co., Ltd.                                 |
| Fable II                                 | SunSoft                                        |
| Mafia II                                 | Whiptail Interactive                           |
| Resident Evil 5                          | Hyperbole Studios                              |
| Sid Meier's Civilization Revolution      | Designer Software                              |
| Super Smash Bros. Brawl                  | Progressive Peripherals and Software           |
| inFamous                                 | Mana Games                                     |
| Killzone 2                               | EA Bright Light                                |
| LittleBigPlanet                          | Visceral Games                                 |
| Star Wars: The Force Unleashed           | Square Enix                                    |
| Mario Kart Wii                           | dtp entertainment AG                           |
| Battlefield: Bad Company                 | MicroProse Software, Inc.                      |
| Gears of War 2                           | THQ                                            |
| Final Fantasy XIII                       | Hyperbole Studios                              |
| Far Cry 2                                | Acclaim Studios Cheltenham                     |
| Metal Gear Solid 4: Guns of the Patriots | Z-Axis, Ltd.                                   |
| StarCraft II: Wings of Liberty           | Sony Computer Entertainment Europe             |
| Soulcalibur IV                           | Dinamic Software                               |
| Left 4 Dead                              | Positech Computing Ltd.                        |
| Mercenaries 2: World in Flames           | Mindscape Entertainment                        |
| BrxFCtal Legend                          | ChessBase GmbH                                 |
| Bayonetta                                | JoWooD Productions Software AG                 |
| Rock Band 2                              | EA Bright Light                                |
| Braid                                    | Radon Labs GmbH                                |
| Duke Nukem Forever                       | BAP Interactive                                |
+------------------------------------------+------------------------------------------------+
50 rows in set (0.00 sec)

```
###Union All
```sql


```

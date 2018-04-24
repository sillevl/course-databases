# Entity-Relation Diagram

An **ERD** or **Entity-Relation Diagram** displays the _relation_ between different _entities_ of a database.

There are different types of ERD. The types are different in the details they provide or hide, going from high-level to detailed.

* Conceptual ERD 
* Logical ERD
* Physical ERD \(all details available, depending on the DBMS\)

| Feature | Conceptual | Logical | Physical |
| --- | --- | --- | --- |
| Entity names | x | x |  |
| Entity relationships | x | x |  |
| Attributes |  | x |  |
| Primary keys |  | x | x |
| Foreign keys |  | x | x |
| Table names |  |  | x |
| Column names |  |  | x |
| Column data types |  |  | x |

Conceptual ER diagrams show the _concept_ and are very abstract. They show no internal details and are thus independent from the DBMS. Logical ER diagrams show the implementation details, but are still independent from the DBMS. Physical ER diagrams are the closest diagram representation that come to the real implementation in the DBMS. They are dependent on the DBMS and show details that are specific for that DBMS.

## Entity-Relation Diagram Types

### Conceptual ERD

A conceptual ER diagrams are general desciptions and only display the entities and their relations, the details of each entity is not described here. ![Conceptual ERD example](https://www.uky.edu/~dsianita/622/t4.gif)

### Logical ERD

A logical ERD diplays the relations between entities as well as the contents.

![Logical ERD example](http://databaseanswers.org/data_models/website_analytics/images/2_website_analytics_ERD_Server_Log_model.gif)

### Physical ERD

A physical ERD displays the relations between the entities, their contents as well as the details. Here all

![Physical ERD example](https://images.visual-paradigm.com/docs/vp_user_guide/11/3563/3564/3573/physical_erd_27342.png)

## ERD Symbols

An example of an ERD diagram: !\[alt text\]\([http://www.conceptdraw.com/solution-park/resource/images/solutions/entity-relationship-diagram-\(erd\)/Diagramming-Crow's-Foot-ERD-Sample60.png](http://www.conceptdraw.com/solution-park/resource/images/solutions/entity-relationship-diagram-%28erd%29/Diagramming-Crow's-Foot-ERD-Sample60.png) "ERD example"\)

## Cardinality

We describe how tables relate to one another using **cardinality**, below are some cardinalities ![ERD example](https://docs.joomla.org/images/6/62/Cardinality.JPG)

Furthermore certain relations between entities can either be mandatory or optional this is indicated as following :

* A mandatory relation is indicated by a `+`
* An optional relation is indicated by a `O`

![ERD example](https://docs.joomla.org/images/0/04/ER_diagram.JPG)

## Key fields

There are 2 types of key fields :

* Primary key
* Foreign key

**A primary key** assigns a field to its "special order table", for example : the "Doctor Last Name" field might be assigned as a primary key of the Doctor table with all people having same last name organized alphabetically according to the first three letters of their first name.

**A foreign key** indicates that field is linked to the primary key of another table.

In data modeling, collections of data elements are grouped into "data tables" which contain groups of data field names called "database attributes". These tables are then linked by "key fields".

Sources:

* [https://www.lucidchart.com/pages/er-diagrams](https://www.lucidchart.com/pages/er-diagrams)
* [https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning](https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning)


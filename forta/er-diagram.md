# Entity-Relation Diagrams

An **ERD** or **Entity-Relation Diagram** displays the *relation* between different *entities* of a database.

## Entity-Relation Diagram Types
There are different types of ERD. The types are different in the details they provide or hide, going from high-level to detailed.

* Conceptual ERD (very abstract, no details, independent from the DBMS)
* Logical ERD
* Physical ERD (all details available, depending on the DBMS)

|_ Feature _|_ Conceptual _|_ Logical _|_ Physical _|
|---|---|---|---|
| Entity names  |  x | x  |   |
| Entity relationships  | x  | x  |   |
| Attributes  |   |  x |   |
| Primary keys  |   | x  | x  |
| Foreign keys  |   | x  | x  |
| Table names  |   |   |  x |
| Column names  |   |   | x  |
| Column data types  |   |   | x  |


### Conceptual ERD
A conceptual ERD only displays the entities and their relations, the details of each entity is not described here.
![alt text](https://www.uky.edu/~dsianita/622/t4.gif "Conceptual ERD example")

### Logical ERD
A logical ERD diplays the relations between entities as well as the contents.

![alt text](http://databaseanswers.org/data_models/website_analytics/images/2_website_analytics_ERD_Server_Log_model.gif "Logical ERD example")

### Physical ERD
A physical ERD displays the relations between the entities, their contents as well as the details. Here all

![alt text](https://images.visual-paradigm.com/docs/vp_user_guide/11/3563/3564/3573/physical_erd_27342.png "Physical ERD example")







An example of an ERD diagram:
![alt text](http://www.conceptdraw.com/solution-park/resource/images/solutions/entity-relationship-diagram-%28erd%29/Diagramming-Crow's-Foot-ERD-Sample60.png "ERD example")

## Cardinality
We describe how tables relate to one another using **cardinality**, below are some cardinalities
![alt text](https://docs.joomla.org/images/6/62/Cardinality.JPG "ERD example")

Furthermore certain relations between entities can either be mandatory or optional this is indicated as following :

* A mandatory relation is indicated by a `+`
* An optional relation is indicated by a `O`

![alt text](https://docs.joomla.org/images/0/04/ER_diagram.JPG "ERD example")


## Key fields
There are 2 types of key fields :

* Primary key
* Foreign key


**A primary key** assigns a field to its "special order table", for example : the "Doctor Last Name" field might be assigned as a primary key of the Doctor table with all people having same last name organized alphabetically according to the first three letters of their first name.

**A foreign key** indicates that field is linked to the primary key of another table.

In data modeling, collections of data elements are grouped into "data tables" which contain groups of data field names called "database attributes". These tables are then linked by "key fields".

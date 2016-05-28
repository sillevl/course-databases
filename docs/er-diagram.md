# Entity-Relation Diagrams

An ERD or entity realtion diagram displays the relation between different entities of a database.
![alt text](http://www.conceptdraw.com/solution-park/resource/images/solutions/entity-relationship-diagram-%28erd%29/Diagramming-Crow's-Foot-ERD-Sample60.png "ERD example")

## Cardinality
We describe how tables relate to one another using cardinality, below are some cardinalities
![alt text](https://docs.joomla.org/images/6/62/Cardinality.JPG "ERD example")

Furthermore certain relations between entities can either be mandatory or optional this is indicated as following :

* A mandatory relation is indicated by a "+"
* An optional relation is indicated by a "O"

![alt text](https://docs.joomla.org/images/0/04/ER_diagram.JPG "ERD example")

## Different ERD's
In total there are three distinct types of ERD :

  Conceptual ERD
  Logical ERD
  Physical ERD

### Conceptual ERD
A conceptual ERD only displays the entities and their relations, the contents of each entity isn't displayed here
![alt text](https://www.uky.edu/~dsianita/622/t4.gif "Conceptual ERD example")

### Logical ERD
A logical ERD diplays the relations between entities aswell as there contents but the specifics of the contents remain still untouched

![alt text](http://databaseanswers.org/data_models/website_analytics/images/2_website_analytics_ERD_Server_Log_model.gif "Logical ERD example")

### Physical ERD
A physical ERD displays the relations between the entities, their contents aswell as there specifics. This is the final designing stage in constructing an ERD neccesary to construct a database

![alt text](https://images.visual-paradigm.com/docs/vp_user_guide/11/3563/3564/3573/physical_erd_27342.png "Physical ERD example")

## Key fields
There are 2 types of key fields :

* Primary key
* Foreign key


**A primary key** assigns a field to its "special order table", for example : the "Doctor Last Name" field might be assigned as a primary key of the Doctor table with all people having same last name organized alphabetically according to the first three letters of their first name.

**A foreign key** indicates that field is linked to the primary key of another table.

In data modeling, collections of data elements are grouped into "data tables" which contain groups of data field names called "database attributes". These tables are then linked by "key fields".

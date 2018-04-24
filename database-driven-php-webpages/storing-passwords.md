# Storing passwords

When passwords are entrusted to a database it's always a good practice to encode these,  
 this has certain advantages such as :

* If the database were to be physically accessed by an unauthorized visitor, the integrity of the passwords  would still be intact as the encoded password wouldn't be interpretable by humans anymore.
* If the database were to be virtually attacked causing the passwords to be leaked to the public then they would still remain noninterpretable as they would still be encoded.
* **It's advised to never insert sensitive data as clear text**

When encoding passwords or other sensitive information an encoding technique is applied, commonly referred to as a cryptographic hash function.   
  
This allows a mathematical algorithm to map the inserted string of arbitrary size to a string of fixed size, it's also designed to work solely unidirectional.  
  
 A commonly used algorithm is MD5, this produces a 128 bit string independently of the inserted string. This 128 bit string is then expressed as 32 digit hexadecimal number.  
   
 A MD5 hash can be applied as following :  


```text
MD5('Password')
```

Whereas the data that is wished to be encoded is inserted between \(' and '\)   


Additional security measures can be taken to further secure sensitive data such as :

* Adding a "salt", this refers to automatically adding an additional word/sentence to the inserted data by the server.
* Adding a "pepper", this refers to automatically adding an additional number to the inserted data by the server.

The example below shows how to implement a salt in a database that stores the information of users along with their passwords.  
 In order to use this additional security measure you need to add a column in mytable called salt and then retrieve this value when creating the MD5 hash:

```text
SELECT * FROM mytable WHERE email=@email AND password=MD5(salt + ':' +@pwd)
```

The code above searches the database for a match between the entered information and an already registered user.  
 When inserting the record you would do:

```text
INSERT INTO mytable(email, salt, password)
VALUES (@email, @salt, MD5(salt + ':' + @pwd)
```


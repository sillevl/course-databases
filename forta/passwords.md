# Passwords
When passwords are entrusted to a database it's always a good practice to encode these,<br>
this has certain advantages such as :
<ul>
  <li>If the database were to be physically accessed by an unauthorized visitor, the integrity of the passwords<br> would still be intact as the encoded password wouldn't be interpretable by humans anymore.</li>
  <li>If the database were to be virtually attacked causing the passwords to be leaked to the public then they would still remain noninterpretable as they would still be encoded.</li>
</ul>
<ul><b>It's advised to never insert sensitive data as clear text</b></ul>

When encoding passwords or other sensitive information an encoding technique is applied, commonly referred to as a cryptographic hash function. <br><br>This allows a mathematical algorithm to map the inserted string of arbitrary size to a string of fixed size, it's also designed to work solely unidirectional.<br><br>
A commonly used algorithm is MD5, this produces a 128 bit string independently of the inserted string. This 128 bit string is then expressed as 32 digit hexadecimal number.<br>
<br>
A MD5 hash can be applied as following :<br>
```mysql
MD5('Password')
```
Whereas the data that is wished to be encoded is inserted between ('  and  ')
<br>

Additional security measures can be taken to further secure sensitive data such as :
<ul>
  <li>Adding a "salt", this refers to automatically adding an additional word/sentence to the inserted data by the server. </li>
  <li>Adding a "pepper", this refers to automatically adding an additional number to the inserted data by the server.</li>
</ul>

The example below shows how to implement a salt in a database that stores the information of users along with their passwords.<br>
In order to use this additional security measure you need to add a column in mytable called salt and then retrieve this value when creating the MD5 hash:
```mysql
SELECT * FROM mytable WHERE email=@email AND password=MD5(salt + ':' +@pwd)
```
The code above searches the database for a match between the entered information and an already registered user.<br>
When inserting the record you would do:
```mysql
INSERT INTO mytable(email, salt, password)
VALUES (@email, @salt, MD5(salt + ':' + @pwd)
```

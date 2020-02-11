
# MySQL Client

## Connecting to the database

Before we can start and connect to the DBMS, we need to start it. This can be done by starting MySQL or MariaDB using the XAMPP control panel.

One way to communicate with a DBMS is by using the _command line_. On Windows you can use `powershell`. The `mysql` command is not context or location aware, so it does not matter what the current directory is.

As we will see later on, MySQL makes use of users. By default a user `root` without password is available to use. To tell the `mysql` command that we want to log in as the user `root` we need to pass the `-u`option followed by the username.

To connect to the database you can use the following command:

```bash
mysql -u root
```

* `mysql`: this tells your commandpromp or powerschell to start the mysql client.
* `-u root`: the -u tells the client to log with the given name, in this case 'root'.
* `-p`: the -p tells the client to ask for a password after you pressed enter.
* `-h 127.0.0.1`: this tells the client to connect on ip-adress 127.0.0.1, can be used for connection on remote servers, when not specified it will use the default of localhost.

Running the command should show you something like this:

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.1.9-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

Take a look at the last line. MariaDB is the name of the database server that is installed and used by XAMPP. Between the `[ ]`is the name of the selected database, for the moment we don't have a database selected so it says `(none)`.

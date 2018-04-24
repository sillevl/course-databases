# Gitlab setup

Every student should have got an email with an account for [https://git.labict.be](https://github.com/sillevl/course-databases/tree/206419169b16ae8f1090a6cddabb3b670a35fa4f/excercises/git.labict.be). To get everything working properly some setup must be finished.

The creation of keypairs must be done seperatly on every machine you want to use with git.labict.be.

## Check if keys are already available

First check if you have a key available. The files should be available in the following directory:

```text
C:\Users\USER_NAME\.ssh\
```

Note: `USER_NAME` should be replaced by the user name of the current signed-on user.

In this directory some files could be available. The most important files for us are:

```text
id_rsa
id_rsa.pub
```

If you do not have this `.ssh` directory or the `id_rsa` and `id_rsa.pub` files you should create them first using the following steps:

## Creating a private/public keypair for authentication

Open powershell and type the following command:

```text
ssh-keygen -t rsa -C username@machinename
```

Note: Change `username@machinename` to your own settings. For example: `jos@laptop` or `stef@pc-thuis`

This should create two files:

```text
C:\Users\USER_NAME\.ssh\id_rsa
C:\Users\USER_NAME\.ssh\id_rsa.pub
```

Those files include the `public` and `private` keys used to authenticate you over the internet.

The `public` key can be shared between other services or people, the `private` key should be kept `private` at all times.

## Adding your public key to git.labict.be

Open your public key file `C:\Users\USER_NAME\.ssh\id_rsa.pub` with atom or notepad. And copy the full content of the file. It should look something like this:

```text
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA7LDjWNaCVFewzOw3y0k2g
ITZR3PgbZldy49w/sP+UBDn80IMqPacXsPcqoZOuyysAfxZlnCi79YDOT
asdcl/zw0+t9xhFk4aN6n/SqDD3/1+LvamokkGATWSFB/cqrqS2XiHUUw
98zqKn9EkXAY7XVAYX0Ga51sJj+30iba3tOas4yj2bvbabTA9fexEAZWj
l9pWPfLoSUbsSh++4rbUiYyGwU5Kt9sUexx4Mau3D2wU6o86i4nH+vuHK
0jIX7ZgYIjnan4vXcp30iyerJTo1Otb6/BucvWRkDPhgH+2TkMo+ayOGr
d7G80bXNwBf1i2mLqNOvaA9a2yO8Sw57/qIQ== sille@laptop-vives
```

Now go to your profile page on [http://git.labict.be/profile](https://github.com/sillevl/course-databases/tree/206419169b16ae8f1090a6cddabb3b670a35fa4f/excercises/git.labict.be/profile/README.md). In the menu you should find an option `SSH Keys`. On this page you can add your `public` key using the `+ add SSH key` button.

Paste your key in the 'key' field. In the 'title' field you can state to what user and machine the key belongs to. \(Should be the same value a you used with the `ssh-keygen` command\)

![Add SSH key to your account](../../.gitbook/assets/add-ssh-key.png)

Click on the 'Add key' button and you should be ready to `push` and `pull` using git.


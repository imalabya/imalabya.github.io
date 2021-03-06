---
layout:     post
title:      "Set an authentication password in XAMPP"
subtitle:   "The basic http authentication created with <kbd>.htaccess</kbd> and <kbd>.htpasswd</kbd> files works pretty well on online real server. How about trying it out in XAMPP"
date:       2014-09-21 12:00:00
tags:       security xampp
category:   Devops
---
The basic http authentication created with <kbd>.htaccess</kbd> and <kbd>.htpasswd</kbd> files works pretty well on online real server. However implementing them locally on our Xampp server (on Windows) may be a little problematic. As I already said authentication requires two files viz <kbd>.htaccess</kbd> and <kbd>.htpasswd</kbd> ,but Drupal provides a <kbd>.htaccess</kbd> file while installation. So no problem in that. All we need to do is create the <kbd>.htpasswd</kbd> file and we are done. We will create the <kbd>.htpasswd</kbd> file with the help of <kbd>.htpasswd</kbd> command. The corresponding windows executable file <kbd>.htpasswd</kbd>.exe resides in xampp\apache\bin folder. Using the command prompt in Windows type in the following line. N.B Better if you pwd in the Drupal installation directory.

`c:\xampp\htdocs\my_drupal_directory>..\..\apache\bin\htpasswd -c -m -b .htpasswd admin admin_pass`

We gave the command “htpasswd -c -m -b .htpasswd admin admin_pass”. “admin” is going to be the username and “admin_pass” would be our password. -c : create a new file -m : MD5 encryption is enforced -b : Use the password given at the command prompt Now, open the .htaccess file, we need to write the following lines inside it.


{% highlight shell %}
  AuthName "This My Awesome Drupal Site Area!!.. Identify Yourself First."
  AuthType Basic
  AuthUserFile c:\xampp\htdocs\my_drupal_directory\.htpasswd
  require valid-user
{% endhighlight %}


Check the third line where the path of the password file is clearly mentioned. Now when we try to go to http://localhost/my_drupal_directory, a prompt appears asking for user id and password. If valid id and password given, then we are redirected to homepage.  :)

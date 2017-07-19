---
layout:     post
title:      "Connecting to a Microsoft SQL Server Database from PHP in Ubuntu"
subtitle:   "A tutorial to let your Ubuntu retrieve data from a Microsoft Database."
date:       2014-11-24 12:00:00
tags:       localhost mssql ubuntu
---

To use the MSSQL extension on Unix/Linux, you first need to build and install the FreeTDS library.

I am assuming we got this:
- A Microsoft **SQL Server** installation running under Windows.
- **Ubuntu** Linux. I am using 14.04 LTS

Without further ado, here are the steps you should follow to get this working.

1. Install FreeTDS and the PHP MS SQL extension<br/>
<kbd>sudo apt-get install freetds-common freetds-bin unixodbc php5-sybase</kbd>

2. Restart Apache<br/>
<kbd>sudo service apache2 restart</kbd>

3. Test FreeTDS<br/>
<kbd>tsql -H your.server.name -p 1433 -U yourusername -P yourpassword -D yourdatabasename</kbd><br/>
<small>If it connects, it’s working. Note: If you try to SELECT an NTEXT or NVARCHAR column you may get an error saying “Unicode data in a Unicode-only collation or ntext data cannot be sent to clients using DB-Library (such as ISQL) or ODBC version 3.7 or earlier”. That is expected and will be fixed in the next step.</small>

4. Configure FreeTDS<br/>
<kbd>sudo vim /etc/freetds/freetds.conf</kbd>

    Add this at the end of the file:
{% highlight bash %}
[yourserver]
host = your.server.name
port = 1433
tds version = 8.0
{% endhighlight %}

5. Test FreeTDS using server name<br/>
<kbd>tsql -S yourserver -U yourusername -P yourpassword -D yourdatabasename</kbd><br/>
<small>If you try to select something, you shouldn’t get the Unicode error now – because you specified “tds version = 8.0″.</small>

6. Test in PHP
{% highlight php %}       
<?php
  $link = mssql_connect('yourserver', 'yourusername', 'yourpassword');
  if (!$link)
    die('Unable to connect!');
  if (!mssql_select_db('yourdatabasename', $link))
    die('Unable to select database!');
  $result = mssql_query('SELECT * FROM yourtable');
  while ($row = mssql_fetch_array($result)) {
    var_dump($row);
  }
  mssql_free_result($result);
?>
{% endhighlight %}


That should do it

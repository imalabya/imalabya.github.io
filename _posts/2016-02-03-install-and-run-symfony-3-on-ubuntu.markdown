---
layout:     post
title:      "Install and Run Symfony 3 on Ubuntu"
date:       2016-02-03 12:00:00
tags:       php installation ubuntu beginner
---

Finally I started exploring Symfony because Drupal 8 (the biggest things ever happened to Drupal community) uses a few components of Symfony. So I thought instead having a vague idea why don’t dedicate this month in exploring Symfony and get an idea of the base on which Drupal 8 is built.


Symfony in Ubuntu can be installed in 2 ways viz. using the Symfony installer or using the dependency manager used by modern PHP applications Composer. In this post we will look into how to install Symfony using the Symfony installer. Composer can be used when you are using PHP < 5.3 (which is old IMO, upgrade it ASAP)

To install the Symfony installer open your terminal and write:

    $ sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
    $ sudo chmod a+x /usr/local/bin/symfony

This will install Symfony globally in your system which you can invoke by the <kbd>symfony</kbd> command.

Now we can create our new project using the symfony new command anywhere in your system. I did in my ~/Documents/sites folder.

    symfony new symblog

This command creates a new directory called symblog that contains a fresh new project based on the most recent stable Symfony version available.

NB: You need set the date.timezone in your php.ini file.

    ;date.timezone =  //Change this to
    date.timezone = Asia/Kolkata

Once the project is created you can use the run command to start the server.

    $ php bin/console server:run

    [OK] Server running on http://127.0.0.1:8000

    // Quit the server with CONTROL-C.

To run the server in the background you can use

    $ php bin/console server:run

To stop the server use:

    $ php bin/console server:stop

Once the server is running you can open http://localhost:8000 to see the Symfony welcome screen.

Note:

If you have created a project using Symfony < 3 then the console resides inside the app directory. So the server commands will be:

    $ php app/console server:start
    $ php app/console server:stop

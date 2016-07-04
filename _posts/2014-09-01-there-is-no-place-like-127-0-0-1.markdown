---
layout:     post
title:      "There is no place like 127.0.0.1"
subtitle:   "A look into how to install Drupal 7 in Windows using XAMPP."
date:       2014-09-01 12:00:00
header-img: "img/post-bg-04.jpg"
tags:       xampp liquid localhost
---
<p>No matter where you go if you have your localhost running then you got a home. A local server is like a playground for developers. Don’t have an internet connection, want to test out dummy lorem ipsum text for content, want to constantly upload photos, these doesn’t matter when you are working on 127.0.0.1 aka “localhost”. With a few clicks you can easily setup your own website using the champ Drupal. The local server is the legs with which a Drupal website can start running like Forrest Gump.</p>

<p>There are several approaches to set up a local server to run a Drupal site in localhost. You could:</p>
1. Manually install Apache, MySQL, PHP and configure it yourself.
2. Install an application which automatically setup this environment e.g.: XAMPP, MAMP, LAMP, etc.
3. Use a virtual machine to set up your server in its own environment, even with a different operating system. See Quickstart, DrupalPro, Drupal-up, or Aegir-up for examples of fully loaded development VMs that can be run on any operating system.

<p>Let’s install Drupal in our localhost using XAMPP in Windows. First we need to setup the XAMPP and when it is up and running we can install Drupal to build our site.</p>
**Installing XAMPP**

<li> Download the XAMPP for Windows from https://www.apachefriends.org/index.html </li>
<li>Install XAMPP like any other software in Windows</li>
<li>After installation is completed hit the XAMPP control panel</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/1.png" alt="Post Sample Image">

<li>Start Apache and MySQL.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture.png" alt="Post Sample Image">
  <p class="text-muted">If you have IIS or another program using default http port (80), you can change the default port for Apache opening up the config file C:\xampp\apache\conf\http.conf in a text editor and replace the following entries:
  Listen 80 by Listen 81
  ServerName localhost:80 by ServerName:81</p>

<li>Now enter http://localhost/xampp/ in a web browser and boom your local server is up. It should show something like this.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-2.png" alt="Post Sample Image">

Now that we have our local server lets install Drupal to build an awesome website.

<li>Go to http://drupal.org/project/drupal and download the latest Drupal releases.</li>
<li>Unzip the downloaded zip file and extract it to C:\xampp\htdocs</li>
<li>Rename the folder according to your comfort. Let’s rename it foobar.</li>
<li>Goto http://localhost/phpmyadmin and login to your PHPMyAdmin and create a database for your Drupal site.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-3.png" alt="Post Sample Image">

<li>Enter http://localhost/foobar/install.php in your browser to start the installation.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-4.png" alt="Post Sample Image">

<li>Hit Save and continue. In the next page choose the language which is English by default</li>
<li>On the next page you need to enter the database details to connect the Drupal site with the database.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-5.png" alt="Post Sample Image">

<li>The Drupal installation will start in the next page.</li>
  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-6.png" alt="Post Sample Image">

<li>Enter your website details like Site name, the super user/admin username and password, time zone, etc.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-8.png" alt="Post Sample Image">

<li>Save and Continue. And you are done. Now checkout you’re your new website running in your local server.</li>

  <img src="{{ site.baseurl }}/img/posts/there-is-no-place-like-127-0-0-1/capture-9.png" alt="Post Sample Image">

Related Links:

1. <a href="http://how-to.linuxcareer.com/how-to-install-drupal-7-on-ubuntu-linux">Install Drupal in Ubuntu.</a>
2. <a href="http://www.jenlampton.com/blog/using-mamp-local-drupal-development">Install Drupal using MAMP.</a>

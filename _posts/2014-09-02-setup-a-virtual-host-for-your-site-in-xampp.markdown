---
layout:     post
title:      "Setup a Virtual Host for Your site in XAMPP"
subtitle:   "What if I tell you you that you can run multiple domains in your local machine and each one of them is separated from each other? Yes, this can be achieve using Virtual Hosts"
date:       2014-09-02 12:00:00
tags:       virtualhosts xampp
category:   Devops
---
In my <a href="/2014/09/01/there-is-no-place-like-127-0-0-1/">previous blog</a> I explained how you can setup a Drupal site in you local environment using XAMPP. As I already mentioned there that it is great to run a website in a local machine  using http://localhost but it have a drawback. By default you have a single domain and you have to pull all your work under the same domain in different directories. This isn’t very real and can cause problem while using server side includes and root relative links. But there is always a solution to every problem.

What if I tell you you that you can run multiple domains in your local machine and each one of them is separated from each other? Yes, this can be achieve using <a href="http://httpd.apache.org/docs/2.2/vhosts/">Virtual Hosts</a>

**Virtual Hosts** gives you the ability to host multiple web-sites and domains in you local machine. Using this you can separate your websites like http://localhost/site1 & http://localhost/site1 as http://site1 and http://site2. When you type in the Virtual Host URL in your browser it doesn’t go to the internet to search the site but pull out the sites from your Web Server. Plus you don’t need to place each working site under htdocs or var/www (For Ubuntu) directory. With Virtual Hosts you can place your directory anywhere in your computer and place the correct path to the directory under the hosts.

Adding a Virtual Host in XAMPP is not very difficult. All you need to do is to edit two files but with administrative permissions.

**Step 1:**
*Add a new entry to the hosts folder.* A host file contains all the hosts IPs to point to the domain running in your Virtual Hosts and lets you re-direct to particular domain and tell your computer to NOT go out looking in internet when you type in a particular URL.

Go to <kbd>C:\windows\system32\drivers\etc\</kbd>  and open the file hosts in a Notepad with administrative rights.

You may not be able to see the windows folder–some files are hidden by default under Windows. Here are instructions to make those files visible.
{:.info}

Add the following line to the end of the hosts  file.  
`127.0.0.1 site1.dev`

127.0.0.1 is the localhost. This is how the computer refers itself. Its a kind of saying “ME”.  
The second part is the host that will you will enter in the browser. This can be anything of your choice ranging from site1.local to simply site1.

Save and close the file and you are done adding a host. Now as there is a host setup with a domain we need to inform our Web Server about the same.

**Step 2:**

Again in Notepad open the file <kbd>C:\xampp\apache\conf\extra\httpd-vhosts.conf</kbd>

This is the file which tell the Web Server about the Virtual Hosts residing your computer.

I suppose you have a directory placed under <kbd>C:\xampp\htdocs\site1</kbd> then you can go ahead and add the following line to end of the file.

{% highlight conf %}
NameVirtualHost *
  <VirtualHost *>
    DocumentRoot "C:\xampp\htdocs"
    ServerName localhost
  </VirtualHost>
  <VirtualHost *>
    DocumentRoot "C:\xampp\htdocs\site1"
    ServerName site1.local
  <Directory "C:\xampp\htdocs\site1">
    Order allow,deny
    Allow from all
  </Directory>
</VirtualHost>
{% endhighlight %}

Whenever you need to add more Virtual Hosts just copy the code from here and paste. You need to change the directory portion though.

Now save the Apache configuration file and close. You need to restart the Apache from XAMPP control to reflect your changes.

Now that we are all setup lets hit the URL in  your browser and check if everything is working.
Just type http://site1.local and you will have your website running under this URL.

However if you don’t see your website there cross check the directory names and host names.

So, this is how you can setup a Virtual Host in your Windows machine using XAMPP. Will also show you how you can do the same in Ubuntu. Feel free to put your questions/doubts/feedback in the comment section.

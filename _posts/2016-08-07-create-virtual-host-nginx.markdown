---
layout:     post
title:      "How to create Virtual Host in Nginx 1.9+"
subtitle:   "Run multiple websites or domains off a single system or system powered by Nginx 1.9."
date:       2016-08-07 12:00:00
tags:       nginx devops
category:   Devops
---
Nginx has grown in popularity since its release due to its light-weight resource utilization and its ability to scale easily on minimal hardware. Nginx excels at serving static content quickly and is designed to pass dynamic requests off to other software that is better suited for those purposes. Nginx is often selected by administrators for its resource efficiency and responsiveness under load.

In Nginx 1.9+ there is no <kbd>site-available</kbd> or <kbd>sites-enabled</kbd> directories. The default configurations for the hosts are in the <kbd>/etc/nginx/conf.d/default.conf</kbd> directory. All we would need to do is use this default.conf file to create our own Virtual Hosts.

The default root directory for Nginx is <kbd>/usr/share/nginx/html</kbd>. We will be creating our projects in this directory to serve our websites.

>It's not necessary to put the projects in the Nginx default directory. Using Virtual Hosts we can place our prpjects anywhere we want. Just put the appropriate path for the root of your project. For eg: If we want to serve our site to serve from "/srv/public_html/site" then this should be the root of your project in the Virtual Host configuration file

**Step 1**: Create your projects

<code>cd /usr/share/nginx/html</code>

Site One:
{% highlight bash%}
mkdir site1
cd sites1
touch index.html
echo "Welcome to Site One" >> index.html
{% endhighlight %}

Site Two:

{% highlight bash%}
mkdir site2
cd sites2
touch index.html
echo "Welcome to Site Two" >> index.html
{% endhighlight %}

**Step 2**: Add your Virtual host configuration files.

Next we add the Virtual host files which will have the Virtual host infomation for the projects.

<code> sudo cp /usr/nginx/conf.d/default.conf /usr/nginx/conf.d/site1.local.conf</code>

<code> sudo cp /usr/nginx/conf.d/default.conf /usr/nginx/conf.d/site2.local.conf</code>

**Step 3**: Setup your Virtual Host

Open your Virtual host file for Site 1 and configure it.

<code>sudo vim site1.local.conf</code>

We need to make a couple of changes in this file.

* Change the server name to access your local project.
* Change the Document root to serve the project to Nginx.

{% highlight bash%}
server {
    listen       80;
    server_name  site1.local;

    #charset koi8-r;
    #access_log  /var/log/nginx/log/host.access.log  main;

    location / {
        root   /usr/share/nginx/html/site1;
        index  index.html index.htm;
    }

{% endhighlight %}

Similarly, setup the Virtual host for Site 2.

{% highlight bash%}
server {
    listen       80;
    server_name  site2.local;

    #charset koi8-r;
    #access_log  /var/log/nginx/log/host.access.log  main;

    location / {
        root   /usr/share/nginx/html/site2;
        index  index.html index.htm;
    }

{% endhighlight %}


> The index section tell what is the type of the files that is allowed as the project's index files. For PHP it will be index index.php

**Step 4**: Restart the Nginx server

You will need to restart the Nginx server to have the changes in effect.

<code>sudo services nginx restart</code>

**Step 5**: Add in the site entries in hosts file.

For localhosts you will have to add the <kbd>server_name</kbd> in the hosts file to access.

<code> sudo vim /etc/hosts</code>

You can add the local hosts details to this file. As long as that line is there, directing your browser toward, say, example.com will give you all the virtual host details for the corresponding IP address.

{% highlight bash%}
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost

# For local virtual hosts
127.0.0.1       site1.local
127.0.0.1       site2.local

#Virtual Hosts via a VM or vagrant box.
192.168.10.10   site1.local
192.168.10.10   site2.local

{% endhighlight %}
> The last block can be used when you are woking on a VM or a Vagrant box. So, you can add the ip of the VM along with the host name to point your browser to the desired location and access with the Virtual Host.

**Step 6**: Access you projects with the Virtual Hosts in the browser.

Now, when you type in http://site1.local it should show up like this.

![Site one](/img/posts/setup-virtual-hosts-nginx/site1.local.png)

For Site Two, enter http://site2.local.

![Site two](/img/posts/setup-virtual-hosts-nginx/site2.local.png)

<h3>Creating More Virtual Hosts</h3>
To add more virtual hosts, you can just repeat the process above, being careful to set up a new document root with the appropriate domain name, and then creating and activating the new virtual host file.

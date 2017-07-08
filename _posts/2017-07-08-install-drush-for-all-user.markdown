---
layout:     post
title:      "Install Drush for all users"
subtitle:   "Let all users in the system enjoy the power of Drush"
date:       2017-07-08 12:00:00
header-img: "img/post-bg-02.jpg"
tags:       drupal drush
---
Usually I install [Drush using Composer](http://whaaat.com/installing-drush-9-using-composer) but the problem it need to be installed per user. Recently I came across a situation while configuring Jenkins that the `jenkins` user should also have access to Drush to run the build. So, instead of installing it again for `jenkins` I was looking for a solution where all the users in the system can have the benfits of Drush. Still, Composer is the best way to do it with some minor tweaks.

First, install Composer globally:
{% highlight shell %}
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

Next, symlink to System-wide binary
{% highlight shell %}
ln -s /usr/local/bin/composer /usr/bin/composer
{% endhighlight %}

Then, clone the Drush git repository and place in `/usr/local/src` to install. Create a symlink of the `src` folder to the binary
{% highlight shell %}
git clone https://github.com/drush-ops/drush.git /usr/local/src/drush
cd /usr/local/src/drush
git checkout 8.x  #or whatever version you want.
ln -s /usr/local/src/drush/drush /usr/bin/drush
composer install
{% endhighlight %}

Now when you do `drush --version` you will get the Latest Drush version which is same for all the users in the system.

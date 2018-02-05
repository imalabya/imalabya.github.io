---
layout:     post
title:      "Give commands to your Ubuntu system in your own way."
subtitle:   "Control you Ubuntu environment with your own custom commands and be the master of your system."
date:       2015-03-26 12:00:00
tags:       ubuntu
category:   Devops
---

Ubuntu is great for someone who wants to control his system like the way he wants. But that requires someone like Yoda to master it. Though there are some things which can be done easily. One of such things is the commands that we use in Terminal.

Usually every Ubuntu user uses the terminal a lot. Commands like clear, pwd, ls, etc does not matter; but when we want to execute commands like restarting Apache and MySQL we end up writing 2-3 commands. This may not be too time consuming but it is helpful if we can replace the commands with something handy like restart-apache and boom everything is done.

Thus to save the day comes <kbd>alias</kbd>. Aliases are shorthand for terminal commands and can be created very easily.  We just need to create a file in home folder and add the aliases there then configure <kbd>bashrc</kbd>.

{% highlight shell %}
#This will create a blank file in your home folder
sudo nano .bash_aliases

#Add the alias in the file and save the file.
alias clr="clear"

#Configure your .bashrc
. ~/.bashrc

#Check the alias.
alias
{% endhighlight %}

Now you can just type 'clr' to clear out your terminal.

So it is that easy to command your Ubuntu:)

To create more complex aliases where multiple commands needs to be run we need to add it like:

`alias restart-apache="sudo services apache2 restart; sudo services mysql restart"`

Now we an just use <kbd>restart-apache</kbd> to run the commands.

These aliases comes is very handy when you want to run commands in your terminal in a tight situation when every seconds counts

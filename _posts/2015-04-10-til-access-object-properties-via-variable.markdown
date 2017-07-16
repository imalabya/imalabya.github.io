---
layout:     post
title:      "Access object properties via variable"
subtitle:   "After struggling  for hours today I learnt how PHP works to access object using variable. Silly stuff."
date:       2015-04-10 12:00:00
tags:       drupalplanet drupal7 php
---

Have been struggling a lot since morning doing a simple stuff. Goal was to create a node object by adding the node field object properties dynamically. Everything looked fine but it was not working. After nearly burning around 4 hours I finally got the mistake and seriously makes me feel like a noob😦

So lets say we have an object <kbd>$obj</kbd> which have a property <kbd>test</kbd>. So basically to put in data in the object we can access it like this and put in the value.

    $obj->test = "Blah Blah!!"

And was getting error of illegal string offset. Tried many different ways to make it work but all was in vain.

Finally got the solution. Need to wrap the variable to make it accessible by the object. So the proper working way will be:

    $obj->{$test} = "Blah Blah!!"

Again, feeling like a noob in PHP programming after this. But  feels great because there is always something to learn everyday. #BeingOptimistic

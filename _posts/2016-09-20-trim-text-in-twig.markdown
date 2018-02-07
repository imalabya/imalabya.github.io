---
layout:     post
title:      "How to Trim texts in Twig - Drupal 8"
subtitle:   "Trim down text field with rich texts in Drupal 8 twig."
date:       2016-09-20 12:00:00
tags:       drupal twig theme
category:   Drupal
---
In Twig templating, text can be trimmed down using the <kbd>slice</kbd> filter.

However in case of rendering a text field of a content type we will have to strip out the attributes of the field data.

Directly putting the twig variable of the field will not yeild any result. Since it's a rendered array alogn with the attributes provided by Drupal.

We need the rendered output from the field variable. Once we have the rendered output, strip out the HTML tags to get the clean raw text out of the field.

{% highlight html%}
{% raw %}
{% set text = content.body|render|striptags %}
{% endraw %}
{% endhighlight %}

Now, that we have the raw text out of the field value, we can use the twig slice filter to get the trimmed result with ellipses.

{% highlight html%}
{% raw %}
{{ text|length > 100 ? text|slice(0, 100) ~ '...' : text }}
{% endraw %}
{% endhighlight %}

It's advisible to truncate strings with html is generally a bad idea due to having potential unclosed or malformed tags.

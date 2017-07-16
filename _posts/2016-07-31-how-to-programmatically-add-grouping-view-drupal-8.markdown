---
layout:     post
title:      "How to Programmatically Add Grouping in Views in Drupal 8"
subtitle:   "Add grouping to views based on conditions or whenever you need via code."
date:       2016-07-31 12:00:00
tags:       drupalplanet drupal8 views snippet
---

Recently, I encountered a situation where I had to add grouping in Views based on a condition. The scenario was - I had an exposed sorting dropdown which had three options viz. Date(Asc), Date(Desc) & Category. Now when a user will sort the Views using Category then the Views should be grouped by the category names.

Drupal has 4 View hooks which acts on the Views before it is being displayed and I was a bit unsure about using [hook_views_pre_build](https://api.drupal.org/api/drupal/core%21modules%21views%21views.api.php/function/hook_views_pre_build/8.2.x) & [hook_views_pre_view](https://api.drupal.org/api/drupal/core%21modules%21views%21views.api.php/function/hook_views_pre_view/8.2.x). From the documentations I started with <kbd>hook_views_pre_build</kbd>.

First, I added the group in my View through Views UI and exported the configuration using Drupal 8 [configuration tool](https://www.drupal.org/documentation/administer/config). Digging into the YAML file of my view the <kbd>grouping</kbd> was in the style plugin of the View.

With all these gatherings and a couple of hours of hit and trials finally I had a working code which grouped the View items by category when sorted by Category field.

{% highlight php%}
<?php
function MODULENAME_views_pre_build(ViewExecutable $view) {
  $params = Drupal::request()->getQueryString();
  if (strstr($params, 'sort_by=field_category_target_id')) {
    $view->style_plugin->options['grouping'][0] = array('field' => 'field_category');
  }
}
?>
{% endhighlight %}

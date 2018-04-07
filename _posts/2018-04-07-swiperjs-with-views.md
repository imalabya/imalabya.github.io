---
title: Drupal 8 - Swiperjs with Drupal views
subtitle: Swipe your contents in a Drupal 8 views unformatted list using the power
  of Twig templating
layout: post
date: '2018-04-06 04:05:34'
tags: twig drupal views
category: Drupal
---

I love [swiperjs](http://idangero.us/swiper/) which is very lightweight Javascript plugin library created by [iDangero.us](http://idangero.us/). Intended to be used in mobile to for a better experience while swiping away for contents.

I had used the plugin in the past to create an image swiper of Instagram images for one of my client. But while working on the rebuilding of the Valuebound website, I faced a different situation; use the swiper in a views display.

Now, swiper js requires the HTML structure to be very specific. Firstly, it needs a  `swiper-container`  to contain the whole swiper sturcture and a specific require class `swiper-wrapper` to wrap the swiper items.

{% highlight html%}
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
 
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
 
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
{% endhighlight %}

In my previous case, I had created a block where I had full control over the HTML stucture of the block. But here I was dealing with views. Here, I have to add a container class which will be used to initialize the swiper and a required wrapper class for the slides.

### Twig comes to the rescue

Twig is the powerful templating engine for Drupal 8. Twig have a naming convention or pattern for views. 

`views-view-DISPLAYNAME--VIEWS_MACHINENAME--DISPLAY_MACHINENAME.html.twig`

Based on this, I created a twig file named `views-view-unformatted--article-slideshow--page-1.html.twig`.

If you dig the code for `views-view-unformatted.html.twig`, you can see it renders each row while running in a loop.

{% highlight twig %}
  {% for row in rows %}
    {% set row_classes = [ default_row_class ? 'views-row', ] %}
    <div{{ row.attributes.addClass(row_classes) }}>
      {{ row.content }}
    </div>
  {% endfor %}
{% endhighlight %}

All, I had to do is add a `swiper-container` class followed by a `swiper-wrapper` class outside the for loop. Also, an additional `swiper-slides` along with the `views-row` class.

{% highlight twig %}
  {{ attach_library('drupal/swiperjs') }}

  <div class="article-swiper-container">
    <div class="swiper-wrapper">
      {% for row in rows %}
        {% set row_classes = [ default_row_class ? 'views-row', 'swiper-slide' ] %}
        <div{{ row.attributes.addClass(row_classes) }}>
          {{ row.content }}
        </div>
      {% endfor %}
    </div>
  </div>
{% endhighlight %}

If you notice, on top I have attached a library where the JS to initialize the swiper will be written, to initialize and keep the swiperjs plugin to load only for the pages where it is required.

![Views Unformatted](http://res.cloudinary.com/imalabya-media/image/upload/c_scale,w_1920/v1523099421/Screen_Shot_2018-04-07_at_4.38.16_PM_gmnual.png)
--
![Swiper](http://res.cloudinary.com/imalabya-media/image/upload/v1523099933/Swipergif_qxu1rc.gif)
---
layout: page
title: Tags
description: List of articles and posts by tags.
---

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- Build the Page -->

<!-- List of all tags -->
<ul class="tags tags-page">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
  <li>
    <a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }}
      <span>({{ site.tags[this_word].size }})</span>
    </a>
  </li>
  {% endunless %}{% endfor %}
</ul>

<hr>

<!-- Posts by Tag -->
<div>
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
  <div class="tag-contents">
    <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <div class="post-preview tag-content">
      <div class="post-meta">
        Posted on {{ post.date | date_to_string }}
      </div>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </div>
    {% endif %}{% endfor %}
  </div>
  {% endunless %}{% endfor %}
</div>

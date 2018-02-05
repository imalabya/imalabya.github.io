--- 
layout: default 
title: "Tags" 
permalink: /tags 
---

<h1 class="mv3 zero-margin-top">
  <span>Tags</span>
</h1>

<section class="tag-posts">
  {% for tag in site.tags %}
    <h2 class="tag-title" id="{{ tag[0] | slugify }}">#{{ tag[0] }}</h2>
    <ul class="post-list">
      {% assign pages_list = tag[1] %}
      {% for post in pages_list reversed %}
        {% if post.title != null %}
          {% if group == null or group == post.group %}
            <li class="post-item mv1 pad1 zero-margin-top zero-pad-top">
              <span class="post-meta">
                Posted on
                <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time>
                under
                {{post.category}}
              </span>
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                <h2 class="post-title">
                  {{ post.title | escape }}
                </h2>
              </a>
            </li>
          {% endif %}
        {% endif %}
      {% endfor %}
      {% assign pages_list = nil %}
      {% assign group = nil %}
    </ul>
  {% endfor %}
</section>

<aside class="tag-cloud">
  <ul class="tags">
    {% assign tags_list = site.tags %}
    {% if tags_list.first[0] == null %}
      {% for tag in tags_list %}
        <li><a href="#{{ tag | slugify }}" class="tag">{{ tag }}</a></li>
      {% endfor %}
    {% else %}
      {% for tag in tags_list %}
        <li><a href="#{{ tag[0] | slugify }}" class="tag">{{ tag[0] }}</a></li>
      {% endfor %}
    {% endif %}
    {% assign tags_list = nil %}
  </ul>
</aside>
---
title: Drupal 8 - Show only parent term using views
layout: post
subtitle: Things are not always what they seem; the first appearance deceives many;
  the intelligence of a few perceives what has been carefully hidden.
date: '2018-02-07 12:00:00'
tags: drupal views
category: Drupal
---

I recently needed to create a view of type "Term" that displayed taxonomy terms and their description for a certain vocabulary.

The setup for that was quite simple:
* Create a taxonomy view
* Choose the vocabulary in filter
* Add the description field

This gave me the list of all the terms under the vocabulary.

But, the view has to show only the parent terms or the top level terms in the vocabulary herirarchy.

I instantly went looking for a depth modifier filter or argument handler, but no such luck, you just can't restrict to a level in the hierarchy.

Then, it struck me that a term with no parent is the top level term or parent term based on the `Relationships`.

With this assumption, it was fairly simple to get the parent terms
* I added a relationship - `Relationship: Parent`
![Relationship config](http://res.cloudinary.com/imalabya-media/image/upload/v1518017862/Screen_Shot_2018-02-07_at_9.07.21_PM_llhqvw.png)
* Under filter criteria added `Taxonomy term: Term ID`
* Added the `Relationship: Parent`
* Selected `Is Empty (NULL)` under operator
![Filter config](https://res.cloudinary.com/imalabya-media/image/upload/v1518017526/Screen_Shot_2018-02-07_at_8.58.06_PM_xldwmd.png)

Voila. I got the parent terms under the vocabulary.

![Category view](http://res.cloudinary.com/imalabya-media/image/upload/v1518018203/Screen_Shot_2018-02-07_at_9.12.51_PM_hw8g2h.png)
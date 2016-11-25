---
layout:     post
title:      "Redirect using Drupal Events"
subtitle:   "Use Events subscriber like goto to set a global redirect for pages."
date:       2016-11-25 12:00:00
header-img: "img/post-bg-04.jpg"
tags:       drupalplanet eventsubscriber api
---

Event Subscribers in Drupal 8 is great, which allow various system components to interact and communicate with one another while remaining independent, or decoupled. Drupal core dispatches many events on every request while other components can subscribe to these dispatched events.

In this post I will show how you can use the Drupal Event Subscriber to set a redirect. We can use the [Redirect](https://www.drupal.org/project/redirect) module to redirect users to a different page when a particular page is requested. But using a module when you need only a couple of redirections seems an overkill.

The use case here is, I need to redirect to a custom node when an anonymous user visits the registration page.

First we need define a service tagged with *event_subscriber* in your `module.services.yml` files.

{% highlight yaml%}
services:
utility.signup_redirect:
  class: Drupal\utility\EventSubscriber\SignUpRedirect
  arguments: []
  tags:
    - { name: event_subscriber }
{% endhighlight%}

Next, we need to define the `SignUpRedirect` class in `src/EventSubscriber/SignUpRedirect.php` file which implements the `EventSubscriberInterface` interface.

{% highlight php %}
<?php

namespace Drupal\utility\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Class SignUpRedirect.
 */
class SignUpRedirect implements EventSubscriberInterface {


  /**
   * Constructor.
   */
  public function __construct() {

  }

  /**
   * {@inheritdoc}
   */
  static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['redirectSignUp'];
    return $events;
  }

  /**
   * Code that should be triggered on event specified
   */
  public function redirectSignUp() {
    // Check current path.
    $current_path = \Drupal::service('path.current')->getPath();

    // Redirect the user if the current path is the register page.
    if ($current_path == '/user/register') {
      $response = new RedirectResponse('/signup', 302);
      $response->send();
    }
  }
}

{% endhighlight %}

So, what we are doing is on a page request, defined by the KernelEvents constant `REQUEST`, we are checking for the current path. If the current path is the user register page we are redirecting the user to a custom page setting a `302` redirect.

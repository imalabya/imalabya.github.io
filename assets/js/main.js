window.onload = function () {
  // Site header slide-in effect
  $(document).ready(function ($) {
    var MQL = 960;
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
      var headerHeight = $('.site-header').height();
      $(window).on('scroll', {
          previousTop: 0
        },
        function () {
          var currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop) {
            //if scrolling up...
            if (currentTop > 0 && $('.site-header').hasClass('is-fixed')) {
              $('.site-header').addClass('is-visible');
            } else {
              $('.site-header').removeClass('is-visible is-fixed');
            }
          } else {
            //if scrolling down...
            $('.site-header').removeClass('is-visible');
            if (currentTop > headerHeight && !$('.site-header').hasClass('is-fixed')) $('.site-header').addClass('is-fixed');
          }
          this.previousTop = currentTop;
        });
    }
  });


  // Load Disqus on demand.
  $(document).ready(function () {
    $('.show-comments').on('click', function () {
      var disqus_shortname = 'imalabya'; // Replace this value with *your* username.

      // ajax request to load the disqus javascript
      $.ajax({
        type: "GET",
        url: "http://" + disqus_shortname + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
      });
      // hide the button once comments load
      $(this).fadeOut();
    });
  });

  // Fadein effect for posts
  $(document).ready(function () {
    $('.page-type-post').hide(0).delay(250).fadeIn(1000);
  });

  // Push menu for the navigation
  $(document).ready(function () {
    $('.hamburger').click(function () {
      $(this).toggleClass('is-active');
      $('.push-menu').toggleClass('show-menu');
      $('.site-header').toggleClass('menu-open');
      $('body').toggleClass('no-overflow');
    })
  });

  // Search modal
  $('#search-button').click(
    function () {
      $.ajax({
        url: '/search.html',
        dataType: 'html',
        success: function (response) {
          $("#search-overlay").html(response);
        }
      });
      $("#search-overlay").toggleClass('overlay-open');
      $('body').toggleClass('search-overlay-open');
    }
  );

  // FLoating label
  var input = $('.form-element :input');
  var form_elem = $('.form-element');
  var events = "propertychange change paste input";
  input.focus( function() {
    $(this).closest(form_elem).addClass("in-focus")
  }).blur( function() {
    $(this).closest(form_elem).removeClass("in-focus")
  }), input.bind( events, function() {
    var e = $(this).val();
    "" === e || e.length < 1 ? $(this).closest(form_elem).removeClass("has-value") : $(this).closest(form_elem).addClass("has-value")
  })

  // Open links in posts in a new tab
  $('.post-content a').attr("target", "_blank");
}

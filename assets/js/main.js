//Particle Hero on homepage
if ( window.location.pathname == '/' ) {
  var canvasDiv = document.getElementById('hero-canvas');
  var options = {
    particleColor: '#fff',
    interactive: true,
    background: 'http://res.cloudinary.com/imalabya-media/image/upload/v1500188230/universe_soujvz.jpg',
    speed: 'slow',
    density: 'medium'
  };
  var particleCanvas = new ParticleNetwork(canvasDiv, options);
  $(".rotate").textrotator({
    animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 5000 // How many milliseconds until the next word show.
  });
}

// Site header slide-in effect
$(document).ready(function($) {
  var MQL = 960;
  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.site-header').height();
    $(window).on('scroll', {
      previousTop: 0
    },
    function() {
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
$(document).ready(function() {
  $('.show-comments').on('click', function(){
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
$(document).ready(function() {
  $('.page-type-post').hide(0).delay(250).fadeIn(1000);
});

// Push menu for the navigation
$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.push-menu').toggleClass('show-menu');
    $('.site-header').toggleClass('menu-open');
    $('body').toggleClass('no-overflow');
  })
});

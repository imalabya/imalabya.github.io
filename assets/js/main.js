if ( window.location.pathname == '/' ){
  var canvasDiv = document.getElementById('hero-canvas');
  var options = {
    particleColor: '#fff',
    interactive: true,
    background: 'http://res.cloudinary.com/imalabya-media/image/upload/v1500188230/universe_soujvz.jpg',
    speed: 'slow',
    density: 'medium'
  };
  var particleCanvas = new ParticleNetwork(canvasDiv, options);
}
window.onscroll = function(ev) {
  if (document.body.scrollTop == 0) {
    $('header').addClass('nav-top');
  }
  else{
    $('header').removeClass('nav-top');
  }
};

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 0);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
  return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}


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

$(document).ready(function() {
  $('.page-type-post').hide(0).delay(250).fadeIn(1000);
});

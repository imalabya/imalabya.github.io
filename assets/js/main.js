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

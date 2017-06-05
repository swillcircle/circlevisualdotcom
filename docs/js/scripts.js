$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/////////////////////////////////////////////////SCROLL NAV
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('.nav-links').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.nav-links').removeClass('scrolled-nav');
    }
  });
});
/////////////////////////////////////////////////LOGO SCROLL NAV
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('.logo').addClass('scrolled-logo');
    } else if (scrollTop < 100) {
      $('.logo').removeClass('scrolled-logo');
    }
  });
});

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('.nav-item').addClass('scrolled-nav-item');
    } else if (scrollTop < 100) {
      $('.nav-item').removeClass('scrolled-nav-item');
    }
  });
});

$(document).ready(function() {

  $(".menu-link").click(function(event) {
    event.preventDefault();
    $(".mobile-nav").toggleClass("is-closed");
    $(".menu").toggleClass("open");
  });
});

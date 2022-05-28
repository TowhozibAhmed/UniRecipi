(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function () {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offmenu a').click(function () {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function () {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function (e) {
    var container = $(".offcanvas-menu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  $('input[type="checkbox"]').closest('label').css('cursor', 'pointer');
  $('input[type="radio"]').closest('label').css('cursor', 'pointer');


  $('.f-slider-active').owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: true,
    items: 1,
    animateOut: 'fadeOut',
    mouseDrag: false,
    touchDrag: false,
    navText: ['<img src="images/f-left.png"></img>', '<img src="images/f-right.png"></img>']
  });


  // owl-carousel
  $('.dummy').owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false,
        loop: false
      }
    }
  });

  // preloader
  $("#preloader").fadeOut(500);

})(jQuery);



 











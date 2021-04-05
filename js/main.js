
$(window).on('scroll',function(){
    if ($(window).scrollTop()){
      $('nav').addClass('black');
    }
    else 
    {
        $('nav').removeClass('black');
    }
  })

//   nav
$(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 30) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 30) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });

// scrolling buttom
$(window).scroll(function(){
    if ($(window).scrollTop() > 500)
     {
     $("#top").fadeIn();
     }
     else
     {
      $("#top").fadeOut();
     
     }

 });
$("#top").click(function(){
    $("html").animate({scrollTop:0},1000);
});


jQuery("#carousel-banner").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 70,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});

jQuery("#carousel-services").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 0,
  // animateOut: 'fadeOut',
  // animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 5
    },

    1024: {
      items: 5
    },

    1366: {
      items: 5
    }
  }
});

$('.main-slider').owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 0,
  dots:false,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});




document.addEventListener("DOMContentLoaded", function(){
	/////// Prevent closing from click inside dropdown
	document.querySelectorAll('.dropdown-menu').forEach(function(element){
		element.addEventListener('click', function (e) {
		  e.stopPropagation();
		});
	})
}); 
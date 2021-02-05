
// JQUERY RIPPLE EFFECT
jQuery(document).ready(function () {
      'use strict'

      $('#showcase').ripples({
  dropRadius: 20,
  perturbance: 0.01
});

let options = {
  strings: ['I Love <span class="primary">Coding</span>', 'And To <span class="primary">Explore !!</span>'],
  typeSpeed: 50,
  backSpeed: 50,

  loop: true
};

var typed = new Typed('.typed-text', options);

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll < 60) {
        $('#navbar').removeClass('fixed');
    } else {
        $('#navbar').addClass('fixed');
    }
});

$('.team-members').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.blogs').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 989,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});

$( document ).ready( function() {
	
	jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
    
    	var $counters = $(".counter-value");
    
    	/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 1000,
						delay: 10
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});
 });
 

 // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.querySelector('.contact-form')

      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    
})();


// smooth scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

new WOW().init();

$('.Responsive_Slider').slick({
  dots: false,
  autoplay:true,
  centerMode: true,
  centerPadding: '200px',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          centerPadding: '10px',
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          centerPadding: '10px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          centerPadding: '10px',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Testimonials start

$('.testimonial_slider').slick({
  centerMode: true,
  centerPadding: '250px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	
// Counter Js Start Here

	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 850,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 500,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 10,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 45,duration: 2500});


// Email js 



  document.querySelector(".Submit_Form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error fields
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear old errors
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Regex patterns
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^[\w\s.,!?'-]{5,500}$/;

    // Validation
    let isValid = true;

    if (!nameRegex.test(name)) {
      nameError.textContent = "Please enter a valid name (letters and spaces only).";
      isValid = false;
    }

    if (!phoneRegex.test(phone)) {
      phoneError.textContent = "Enter a valid phone number (10–14 digits).";
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (!messageRegex.test(message)) {
      messageError.textContent = "Message must be 5–500 characters.";
      isValid = false;
    }

    if (isValid) {
      // Success message or submission logic here
      alert("Form submitted successfully!");
      // this.submit(); // use if real form action is set
    }
  });


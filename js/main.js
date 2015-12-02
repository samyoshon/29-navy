$(document).ready(function() {
	var stickyNavTop = $('nav').offset().top-1;
	console.log(stickyNavTop);
	 
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});


	$("nav ul li a[href^='#']").on('click', function(e) {

		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

			// when done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;
		});

	});

});


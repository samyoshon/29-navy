$(document).ready(function() {
	
	//Sticky navbar on scroll
	var mn = $(".navbar");
    mns = "navbar-scrolled";
    hdr = $('#location').height();

	$(window).scroll(function() {
		if( $(this).scrollTop() > hdr ) {
			mn.addClass(mns);
		} else {
			mn.removeClass(mns);
		}
	});


	//Smooth scroll
	$("a[href^='#']").on('click', function(e) {

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


	//Collapses navbar on click
	$('.nav a').on('click', function(){
		$('.navbar-toggle').click();
	});
});


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


	//Show floorplan on click
	$('.loft-front-divs').on('click', function(){
		$('.floorplan').empty();
		if ($(this).attr("id") === "floor-3") {
			$('.floorplan').append('<img src="img/floorplan-level-1.png">');
		} else if ($(this).attr("id") === "floor-2") {
			$('.floorplan').append('<img src="img/29-navy-front.png">');
		} else {
			$('.floorplan').append('<img src="img/floorplan-level-1.png">');
		}
	});
});


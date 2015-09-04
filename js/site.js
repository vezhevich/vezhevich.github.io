if (window.jQuery) $(document).ready(function() {
     if ($('.owl-carousel').length) owlCarousel();
     if ($('input[type=tel]').length) tel();
});


function owlCarousel()
{
	$(".owl-carousel").owlCarousel({
	 
	loop:true,
	items : 1,
	nav:true,
	navText: '',
	 
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}


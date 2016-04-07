if (window.jQuery) $(document).ready(function() {
	if ($('input[type=tel]').length) tel();
	if ($('.anchor').length) anchor();
	if ($('.g-carousel').length) owlCarousel2();
});



function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function anchor (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1600);
        return false; 
   }); 
}

function owlCarousel2 (){
	$('.g-carousel').owlCarousel({
	    nav: true,
	    loop:true,
	    items: 3,
	    margin: 3,
	    navText: ' '
	});
}


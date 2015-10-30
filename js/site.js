if (window.jQuery) $(document).ready(function() {
	if ($('.owl-carousel').length) owlCarousel();
	if ($('.anchor').length) anchor();
	if ($('input[type=tel]').length) tel();
	if ($('.popup .teaser .img a').length) show();
	if ($('.item-news.inner dl').length) masonry();
	if ($('.b-gallery').length) owlCarousel2();
	if ($('select.custom').length) sel();
});


function owlCarousel (){
	$('.owl-carousel').owlCarousel({
	    nav: true,
	    loop:true,
	    items: 1,
	    navText: ' '
	});
}

function anchor (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1600);
        return false; 
   }); 
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function show()
{
	$(".popup .teaser .img a").click(function() {
		$(this).toggleClass('active')
		$(".img").toggleClass('w100')
		$(".text").toggleClass('pl40')
		return false;
	});
}

function masonry()
{
	var $container = $('.item-news.inner dl');
	// initialize
	$container.masonry({
	  itemSelector: '.item-photo'
	});
}

function owlCarousel2 (){
	$('#myModal2').on('shown.bs.modal', function () {
	$('.b-gallery').owlCarousel({
	    nav: true,
	    loop:true,
	    items: 1,
	    navText: ' '
		});
	});
}

function sel(){ 
	$('select.custom').styler();  
}



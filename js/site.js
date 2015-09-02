if (window.jQuery) $(document).ready(function() {
	if ($('.grid').length) mason();
	if ($('#navi').length) navi ();
	if ($('input[type=tel]').length) tel();
	if ($('.anchor').length) anchor();
	if ($('.owl-carousel').length) owlCarousel();
});


function mason()
{
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
}

function navi()
{
	$(window).scroll(function(){
		var distanceTop = $('#show').offset().top - $(window).height();
		if  ($(window).scrollTop() > distanceTop)
			$('#navi').animate({'top':'0px'},300);
		else
			$('#navi').stop(true).animate({'top':'-60px'},200);
	});
}

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


function owlCarousel (){
	$('.owl-carousel').owlCarousel({
	    nav: true,
	    loop:true,
	    items: 1,
	    navText: ' '
	});
}


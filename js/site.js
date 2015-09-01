if (window.jQuery) $(document).ready(function() {
	if ($('.grid').length) mason();


	if ($('#carousel').length) carousel();
	if ($('input[type=tel]').length) tel();
	if ($('.anchor').length) anchor();
	if ($('.rooms').length) owlCarousel();
	if ($('.feedback-list').length) owlCarousel2();
});


function mason()
{
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
}




function carousel()
{
	$('#carousel').bxSlider({
		auto: false,
		pager: false,
		controls: true,
		slideWidth: '1020',
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 30,
		prevText: '',
		nextText: ''
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
	$('.rooms').owlCarousel({
	    center: true,
	    items:2,
	    nav: true,
	    navText: ' ',
	    loop:true,
	    responsive:{
	        600:{
	            items:4
	        },	        
	        1600:{
	            items:5
	        },	        
	        1920:{
	            items:5
	        }
	    }
	});
}

function owlCarousel2 (){
	$('.feedback-list').owlCarousel({
	    nav: true,
	    loop:true,
	    items: 1,
	    navText: ' '
	});
}


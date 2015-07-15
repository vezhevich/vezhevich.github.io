if (window.jQuery) $(document).ready(function() {
	if ($('#carousel').length) carousel();
	if ($('#carousel2').length) carousel2();
	if ($('.popup').length) popup();
	if ($('.hidden').length) hidden();
	if ($('.calc .bg-white').length) tabs();
	if ($('.carousel-fruit').length) owl();
	if ($('#dish').length) dish();
	if ($('.carousel-animation').length) carousel3();
	if ($('.carousel-holiday').length) carousel4();
});

function tabs()
{
	$('.calc .navi a').bind('click', function(){
		var rel = this.rel;
		$('.calc .bg-white').hide();
		$('.calc .bg-white.'+rel).show();
		$('.calc .navi a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
}

function carousel()
	{
		$('#carousel').bxSlider({
		auto: false,
		pager: false,
		controls: true,
		slideWidth: '',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});	
}

function carousel2()
	{
		$('#carousel2').bxSlider({
		pagerCustom: '#bx-pager',
		infiniteLoop: false,
		auto: false,
		//pager: false,
		controls: true,
		slideWidth: '540',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: '',
	});	
}

function popup()
{

	$('.send-popup').bind('click', function(){
		var rel = $(this).attr('rel');
		$('.popup.'+rel).show();
		$('.bg-popup').show();

		$('.popup.'+rel+' .close').bind('click', function(){
			$('.popup.'+rel).hide();
			$('.bg-popup').hide();
			return false;
		});
		$('.bg-popup').bind('click', function(){
			$('.popup').hide();
			$('.bg-popup').hide();
			return false;
		});
		return false;
	});
}

function hidden (){
	$('.popup .button').on('click', function(){
		$('.popup .button').hide();
		$('.popup .hidden').show();
	});
}

function owl (){
	$('.loop').owlCarousel({
		center: true,
	    items:3,
	    loop:true,
	    nav:true,
	    dots: true,
	    // margin: 80,
	    autoWidth:false,
	    responsive:{
        0:{
            items:3
        },
        940:{
            items:3
        },
        1024:{
            items:3
        },        
        1280:{
            items:3
        },        
        1600:{
            items:3
        }
    }
	});
}

function dish ()
	{
		$('#dish').bxSlider({
		auto: false,
		controls: true,
		slideWidth: '640',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: '',
	});	
}

function carousel3 ()
	{
		$('.carousel-animation').owlCarousel({
		    margin:0,
		    loop:true,
		    nav: true,
		    navText: ' ',
		    items:1
		})
}
function carousel4 ()
	{
		$('.carousel-holiday').owlCarousel({
		    margin:0,
		    loop:true,
		    nav: true,
		    navText: ' ',
		    items:1
		})
}




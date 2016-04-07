if (window.jQuery) $(document).ready(function() {
	if ($('.btn-top-menu').length) topmenu();
	if ($('.btn-catalog-menu').length) menu();
	if ($('#footer .title').length) slidedown();
	if ($('.owl-carousel').length) owlCarousel();
	if ($('#lv2').length) menu2();
	if ($('.preview-tovar').length) prev();
	if ($('.catalog-mason').length) catalog();
	if ($('.b-filter').length) filter();
	if ($('.b-sorter').length) sorter();
	if ($('input[type=tel]').length) tel();
	if ($('.search-box').length) src();

	if ($(window).width() >= '991')
	    {
	    	$('body').removeClass('mobile').addClass('full');
	    }
	    else
	    {
	    	$('body').removeClass('full').addClass('mobile');
	    }	

	$(window).resize(function() {
	    if ($(window).width() >= '991')
	    {
	    	$('body').removeClass('mobile').addClass('full');
	    }
	    else
	    {
	    	$('body').removeClass('full').addClass('mobile');
	    }
	});	
});

function topmenu()
{
	$(".btn-top-menu").click(function() {
		$(".navigation").slideToggle();
		return false;
	});
}

function menu()
{
	$(".btn-catalog-menu > a").click(function() {
		$(this).toggleClass('active')
		$(".catalog-menu .wrapper").slideToggle();
		return false;
	});
}

function owlCarousel()
{
	$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    responsiveClass:true,
    items:1
	})
}

function slidedown()
{
	$("#footer .cl .title").on('click', function(){
		   $(this).toggleClass('active');
	       $('dl.list', $(this).parents('.cl')).slideToggle();
	       return false;
	   });
}

function menu2()
{
	var $container = $('#lv2');
	// initialize
	$container.masonry({
	  itemSelector: '.item'
	});
	$("#lv3").click(function() {
		
		$(".lv2").slideToggle();
		if ($('body').hasClass('mobile'))
		{
			$container.masonry('destroy');
		} else
		{
			$container.masonry({
			  itemSelector: '.item'
			});
		}

		return false;
	});
	
}

function prev()
{
	$('.preview-tovar').owlCarousel({
    margin:10,
    loop:true,
    responsiveClass:true,
    items:1
	})
}


function catalog()
{
	var $container = $('.catalog-mason');
	// initialize
	$container.masonry({
	  itemSelector: '.item'
	});
}

function filter()
{
	$(".b-filter .title").click(function() {
		$(this).toggleClass('active');
		$(".content-filter").slideToggle();
		return false;
	});
}

function sorter()
{
	$(".b-sorter .title").click(function() {
		$(this).toggleClass('active');
		$(".content-sorter").slideToggle();
		return false;
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function src()
{
	$(".search-box .btn-search a").click(function() {
		$(this).toggleClass('del');
		return false;
	});
	$(".search-box .btn-search a").click(function() {
		$(".search-box .wrapper").slideToggle();
		$(".wrapper").removeClass('position');
		$(".wrapper").addClass("position");
	});
}

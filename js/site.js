if (window.jQuery) $(document).ready(function() {
	if ($('.owlCarousel').length) carousel();
	if ($('.navigation').length) slideToggle();
	if ($('.owlCarousel2').length) carousel2();
	if ($('.owlCarousel3').length) carousel3();
	if ($('input[type=tel]').length) tel();
	if ($('.modal').length) show();
});

function carousel()
{
	$('.owlCarousel').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
	responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        321:{
	            items:2,
	            margin:20,
	        }
	    }
	})
}

function slideToggle()
{
	$(".hamb").click(function() {
		$(this).addClass('active');
		$(".navigation").slideToggle();
		$("header").toggleClass('active');
		return false;
	});	
}


function carousel2()
{
	$('.owlCarousel2').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
    items: 1,
    autoHeight:true
	})
}

function carousel3()
{
	$('.modal').on('shown.bs.modal', function () {
		$('.owlCarousel3').owlCarousel({
	    loop:false,
	    nav:true,
	    navText: '',
	    items: 1,
	    autoHeight:true
		})
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function show()
{
	$('.modal').on('shown.bs.modal', function () {
		$("header .closed").addClass('active');
		return false;
	});
	$("header .closed").click(function() {
		$("header .closed").removeClass('active');
		$('.modal').modal('hide');
		return false;
	});
}

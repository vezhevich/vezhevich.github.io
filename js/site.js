if (window.jQuery) $(document).ready(function() {
     if ($('.owl-carousel').length) owlCarousel();
     if ($('input[type=tel]').length) tel();


     if ($('.owl-carousel2').length) owlCarousel2();
     if ($('.owl-carousel3').length) owlCarousel3();
     if ($('.menu').length) menu();
     if ($('.form-feedback').length) form();
     if ($('.anchor').length) link();
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







function owlCarousel2()
{
	$(".owl-carousel2").owlCarousel({
	 
	loop:true,
	items : 4,
	navText: '',
	autoWidth:true,
	margin:10,
	});
}

function owlCarousel3()
{
	$(".owl-carousel3").owlCarousel({
	 
	loop:true,
	items : 6,
	navText: '',
	autoWidth:true,
	margin:20,
	});
}

function menu(){ 
	  $("#header .navi a").click(function(){
	  $(".menu").toggleClass("active");
	return false;
	});		  
	  $("#header .navi a").click(function(){
	  $("body").toggleClass("active");
	return false;
	});	
}

function form(){ 
	  $("#header .btn-appl a").click(function(){
	  $(".form-feedback").toggleClass("active");
	return false;
	});		  
	  $("#header .btn-appl a").click(function(){
	  $("body").toggleClass("active");
	return false;
	});	
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1600);
        return false; 
   }); 
}

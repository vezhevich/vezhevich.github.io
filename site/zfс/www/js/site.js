if (window.jQuery) $(document).ready(function() {
	if ($('input[type=tel]').length) tel();
	if ($('.v-navi').length) slidedown();
	if ($('.full-spec .item .link').length) slidedown2();
	if ($('.grid-catalog').length) catalog();
	if ($('select.custom').length) sel();
	if ($('.catalog-list').length) arrow();
	if ($('.owl-carousel').length) owlCarousel();
	if ($('.mobile-menu').length) mobile_menu();
	if ($('.modal-filter').length) modal_filter();
	if ($('.anchor').length) link();
	if ($('.carousel-news').length) owlCarousel2();

	$('.modal').on('shown.bs.modal', function () {
	$("#search").focus();
	});
});

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function slidedown(){
	$(".v-navi .lv1 a.title").on("click", function(){
	$(this).toggleClass('active');
	$(this).closest("li").find(".lv2").slideToggle();
	return false;
	});
}

function slidedown2(){
	$(".full-spec .item .link").click(function() {
		$(this).toggleClass('active');
		 $('.list', $(this).parents('.item')).slideToggle();
		return false;
	});	
}

function catalog(){
	var masonryOptions = {
	  columnWidth: 1,
	  itemSelector: '.grid-item'
	}
	// init Masonry
	var $grid = $('.grid-catalog').masonry( masonryOptions );

	var isActive = true;

	$('.v-navi.inner .title a').on( 'click', function() {
	  if ( isActive ) {
	    $grid.masonry('destroy');
	  } else {
	    // re-init Masonry
	    $grid.masonry( masonryOptions );
	  }
	  isActive = !isActive;
	});
}

function sel(){ 
	$('select.custom').styler();  
}

function arrow(){
	$(".link-sort").click(function() {
		$(this).toggleClass('active');
		return false;
	});	
}

function owlCarousel(){
$('.owl-carousel').owlCarousel({
    margin:10,
    loop:false,
    autoWidth:true,
    items: 1
	})
}

function mobile_menu(){
	$(".mobile-menu .nav-top .dropdown").click(function() {
		$(this).toggleClass('active');
		$('.v-navi').slideToggle();
		return false;
	});	
}

function modal_filter(){
	$(".modal-filter .nav .link").click(function() {
		$(this).toggleClass('active');
		return false;
	});	
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   }); 
}

function owlCarousel2(){
	$('.carousel-news').owlCarousel({
	    loop:false,
	    margin:40,
	    nav:true,
	    navText: ' ',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        940:{
	            items:3
	        },
	        1240:{
	        	items:4
	        }
	    }
	})
}

$(window).load(function() {
	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  horizontalOrder: false,
	  initLayout: true
	});	
}

$("[data-fancybox]").fancybox({
	selector : '[data-fancybox="images"]',
	loop     : true
});
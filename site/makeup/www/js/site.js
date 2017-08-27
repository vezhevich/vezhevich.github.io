$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  horizontalOrder: false
});

$("[data-fancybox]").fancybox({
	selector : '[data-fancybox="images"]',
	loop     : true
});
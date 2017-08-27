$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  horizontalOrder: false,
  percentPosition: true
});

$("[data-fancybox]").fancybox({
	selector : '[data-fancybox="images"]',
	loop     : true
});
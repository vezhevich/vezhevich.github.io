$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  horizontalOrder: false,
  percentPosition: true,
  initLayout: false
});

$("[data-fancybox]").fancybox({
	selector : '[data-fancybox="images"]',
	loop     : true
});
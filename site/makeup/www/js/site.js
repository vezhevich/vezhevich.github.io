$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  horizontalOrder: false,
  percentPosition: true,
  initLayout: false,
  columnWidth: 1
});

$("[data-fancybox]").fancybox({
	selector : '[data-fancybox="images"]',
	loop     : true
});
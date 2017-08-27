$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  horizontalOrder: false,
  percentPosition: true,
  initLayout: true,
  columnWidth: 1
});

$("[data-fancybox]").fancybox({
	selector : '[data-fancybox="images"]',
	loop     : true
});
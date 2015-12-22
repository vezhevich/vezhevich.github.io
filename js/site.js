if (window.jQuery) $(document).ready(function() {
	if ($('.owlCarousel').length) carousel();
	if ($('.owlCarousel2').length) carousel2();
	if ($('.grid').length) masonry();
});

function carousel()
{
	$('.owlCarousel').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
    items: 3,
	})
}

function carousel2()
{
	$('.owlCarousel2').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
    items: 1,
	})
}

function masonry()
{
	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item'
	});
}


if (window.jQuery) $(document).ready(function() {
	if ($('.carousel-result').length) carousel();
	if ($('#carousel').length) carousel2();
});

function carousel()
{
	$('.carousel-result').bxSlider({
		auto: false,
		pager: false,
		infiniteLoop: false,
		controls: true,
		slideWidth: '',
		maxSlides: '8',
		minSlides: '8',
		prevText: '',
		nextText: ''
	});
}


function carousel2()
{
	$('#carousel').bxSlider({
		auto: true,
		mode: 'fade',
		pager: true,
		controls: false,
		slideWidth: '380',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});
}




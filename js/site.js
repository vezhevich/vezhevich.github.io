if (window.jQuery) $(document).ready(function() {
	if ($('.promo-carousel').length) carousel();
	if ($('input[type=tel]').length) tel();
	if ($('.grid-gallery').length) masonry();
	if ($('.carousel-action').length) carousel2();
	if ($('.feedback-carousel').length) carousel3();
	if ($('#org-carousel').length) carousel4();
	if ($('.show-map1').length) drop();
	if ($('.anchor').length) link();
});


function carousel()
{
	$('.promo-carousel').bxSlider({
		auto: false,
		controls: true,
		pager: true,
		slideWidth: '1170',
		maxSlides: '4',
		minSlides: '4',
		slideMargin: '30',
		prevText: '',
		nextText: ''
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function masonry(){ 
	$('.grid-gallery').masonry({
	  itemSelector: '.grid-gallery .item'
	});
}

function carousel2()
{
	$('.carousel-action').bxSlider({
		auto: false,
		controls: false,
		pager: true,
		slideWidth: '750',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});
}

function carousel3()
{
	$('.feedback-carousel').bxSlider({
		auto: false,
		controls: true,
		pager: false,
		slideWidth: '650',
		adaptiveHeight: true,
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});
}

function carousel4()
{
	$('#org-carousel').bxSlider({
		auto: false,
		controls: true,
		pager: true,
		slideWidth: '',
		adaptiveHeight: true,
		maxSlides: '4',
		minSlides: '4',
		slideMargin: 30,
		prevText: '',
		nextText: ''
	});
}


function drop()
{
	$(".show-map1").click(function() {
		$('.map1').slideToggle();
		return false;
	});
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1600);
        return false; 
   }); 
}
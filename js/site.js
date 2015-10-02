if (window.jQuery) $(document).ready(function() {
	if ($('.bxslider').length) carousel();
	if ($('.anchor').length) link();
	if ($('#scroll').length) jScrollPane();
	if ($('.location').length) loc();

	$('#scroll').height(window.innerHeight-270);
});

function carousel()
{
	$('#bxslider').bxSlider({
		auto: false,
		controls: true,
		pagerCustom: '#bx-pager',
		slideWidth: '460',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1600);
        return false; 
   }); 
}

function jScrollPane(){
	$('#scroll').jScrollPane();
}

function loc()
{
	$(".location .link").on('click', function(){
		   $(this).toggleClass('active');
	       $(".list").toggleClass('show');
	       return false;
	   });
}



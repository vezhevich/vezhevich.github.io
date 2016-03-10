if (window.jQuery) $(document).ready(function() {
	if ($('.bxslider').length) carousel();
	if ($('#carousel-tarif').length) carousel3();
	if ($('.owl-carousel').length) carousel2();
	if ($('.anchor').length) link();
	if ($('.list-advantages').length) list();
	if ($('.form').length) form();
});

function carousel()
{
	$('.bxslider').bxSlider({
		auto: false,
		controls: true,
		pagerCustom: '#bx-pager',
		// slideWidth: '940',
		// maxSlides: '1',
		// minSlides: '1',
		// prevText: '',
		// nextText: ''
	});
}

function carousel3()
{
	$('#carousel-tarif').bxSlider({
		auto: true,
		controls: true,
		pager: false,
		slideWidth: '940',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});
}

function carousel2()
{
$('.owl-carousel').owlCarousel({
	items: 1,
    loop:true,
    margin:30,
    nav:true,
})
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1600);
        return false; 
   }); 
}

function list (){
		$(".list-advantages .text a").on('click', function(){
		$(".desc").show();
		return false;
	});	
	$(".desc .close").on('click', function(){
		$(".desc").hide();
		return false;
	});	
}

function form (){
	  	$(".form .form-col").click(function(){
	  	$(".form .form-col").each(function(){
	  		//if ($('input[type=text]', $(this)).val() == '') $(this).removeClass('active');
	  		var val = $('input[type=text]', $(this)).val();
	  		if (val == '') $(this).removeClass('active');
	  	});
	  	//$(".form .form-col").removeClass("active");
	  	$(this).addClass("active");
		return false;
	});	
}
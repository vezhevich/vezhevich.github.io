if (window.jQuery) $(document).ready(function() {
	if ($('select.custom').length) select();
	if ($('.m-navi').length) slidedown();
	if ($('.gamb').length) slidedown2();
});

function select(){ 
	$('select.custom').styler();  
}

function slidedown()
{
	$(".m-navi-mobile .lv1 > dt > a").on('click', function(){
		   $('.m-navi-mobile .lv1 > dt > a').removeClass('active');
		   $(this).addClass('active');
		   $(this).next().slideToggle();
			return false;
	   });
}

function slidedown2()
{
	$(".gamb a").on('click', function(){
		   $(".m-navi-mobile").slideToggle();
		return false;
	   });
}


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
	$(".m-navi .lv1 > dt > a").on('click', function(){
		   $(this).toggleClass('active');
		   $(".lv2").slideToggle();
			return false;
	   });
}

function slidedown2()
{
	$(".gamb a").on('click', function(){
		   $(".m-navi").slideToggle();
		return false;
	   });
}
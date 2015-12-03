if (window.jQuery) $(document).ready(function() {
	if ($('.scroll').length) jScrollPane();
	if ($('.search a').length) show_search();
	if ($('.slidedown-link').length) slideToggle();
	if ($('input[type=tel]').length) tel();
	if ($('select.custom').length) sel();
});

function jScrollPane(){
	$('.scroll').jScrollPane();
}

function show_search()
{
	$(".search a").click(function() {
		$(this).toggleClass('active')
		$(".search-wrapper").slideDown();
		return false;
	});	
	$(".search-wrapper .close").click(function() {
		$(".search-wrapper").slideUp();
		return false;
	});
}

function slideToggle()
{
	$(".slidedown-link").click(function() {
		$(this).addClass('active')
		$(".slidedown-content").slideDown();
		return false;
	});	
	$(".slidedown-content .del").click(function() {
		$(".slidedown-link").removeClass('active');
		$(".slidedown-content").slideUp();
		return false;
	});
}


function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}


function sel(){ 
	$('select.custom').styler();  
}




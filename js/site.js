if (window.jQuery) $(document).ready(function() {
	if ($('input[type=tel]').length) tel();
	if ($('.history-link').length) slidedown();
	if ($('select.custom').length) sel();
	if ($('#wrap').length) jScrollPane();
	if ($('#scroll').length) jScrollPane2();
});

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function slidedown()
{
	$(".history-link .link").click(function() {
		$(this).toggleClass('active')
		$(".history-list").slideToggle();
		return false;
	});
}

function sel(){ 
	$('select.custom').styler();  
}

function jScrollPane(){
	$('#myModal4').on('shown.bs.modal', function () {
	$('#wrap').jScrollPane();
	});
}

function jScrollPane2(){
	$('#scroll').jScrollPane();
}

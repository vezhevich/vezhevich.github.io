if (window.jQuery) $(document).ready(function() {
	if ($('#carousel').length) carousel();
	if ($('#carousel2').length) carousel2();
	if ($('input[type=tel]').length) tel();
});

function carousel()
{
	$('#carousel').bxSlider({
		auto: false,
		pager: false,
		controls:true,
		slideWidth: '520',
		prevText: '',
		nextText: ''
	});
}
function carousel2()
{
	$('#carousel2').bxSlider({
		auto: false,
		pager: false,
		controls:true,
		slideWidth: '750',
		prevText: '',
		nextText: ''
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}
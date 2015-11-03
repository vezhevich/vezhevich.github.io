if (window.jQuery) $(document).ready(function() {
	if ($('#carousel').length) carousel();
	if ($('#carousel2').length) carousel2();
	if ($('input[type=tel]').length) tel();
	if ($('select.custom').length) sel();
	if ($('.comment').length) comment();
	if ($('.address-edit').length) edit();
	if ($('.new-address').length) addnew();
	if ($('.cp').length) cp();
	if ($('.message').length) message();

	if ($('.modal.sms').length>0) $('.modal.sms').modal('show');
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

function sel(){ 
	$('select.custom').styler();  
}

function comment()
{
	$(".comment .link").click(function() {
		$(this).toggleClass('active');
		$(".comm").toggleClass('show');
		return false;
	});	
	$(".comment .close").click(function() {
		$(".comm").removeClass('show');
		$(".link").removeClass('active');
		return false;
	});
}

function edit()
{
	$(".address-edit .edit-link").click(function() {
		$(this).toggleClass('active');
		$(".b-hide").slideToggle();
		return false;
	});	
}

function addnew()
{
	$(".new-address").click(function() {
		$(this).toggleClass('active');
		$(".add-new.b-hide").slideToggle();
		return false;
	});	
}

function cp()
{
	$('.cp').bxSlider({
		auto: false,
		pager: false,
		controls:true,
		slideWidth: '',
		maxSlides: 5,
		minSlides: 5,
		prevText: '',
		nextText: ''
	});
}

function message()
{
	$(".message .close").click(function() {
		$(".message").hide();
		return false;
	});	
}
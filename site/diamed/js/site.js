if (window.jQuery) $(window).load(function() {
	if ($('.gallery').length) gallery();
});

if (window.jQuery) $(document).ready(function() {
	if ($('.doctor-carousel').length) carousel();
	if ($('#programms').length) carousel1();
	if ($('#datepicker').length) calendar();
	if ($('#orderTime').length) time();

	if ($('.service-list').length) menu_open();
	if ($('.open_menu').length) menu_open();

	if ($('.catalog-list').length) masonry();
	if ($('.catalog-menu').length) catalog();
	if ($('select.custom').length) sel();
	if ($('input[type=tel]').length) tel();
	if ($('.comment').length) comm();
	if ($('.order').length) order();
	if ($('.comment-popup').length) popuptext();
	if ($('.anchor').length) link();

	if ($('.video-link').length) video();

	if ($('.go_top').length) go_top();
	if ($('#orderSend').length) orderSend();
	if ($('#sendServ').length) sendServ();
	if ($('#sendSpec').length) sendSpec();
	if ($('#feedSend').length) feedSend();
	if ($('#directorSend').length) directorSend();

	if ($('.promo .carousel').length) carousel_promo();
	if ($('.b-service-list .list').length) masonry2();
	if ($('.popup-service .b-service-list .list').length) masonry_popup();
	if ($('.item.inner .list-two-cols').length) masonry_list();

	$('.fancy').fancybox();

	metrics();

	var bad__enabled = $.cookie('bad__enabled');

	if(bad__enabled)
	{
		$('html').addClass('for-bad');
	settings__bad();
	}

	$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Пред',
	nextText: 'След',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	'Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$('#orderDate').datepicker({ minDate: 0,firstDay: 1,regional: "ru"});

	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player;

	$('#myModal3').on('shown.bs.modal',function()
	{
		player = new YT.Player('player', {
			height: '390',
			width: '640',
			events: {
				'onReady': onPlayerReady,
			}
		});
	});

	$('#myModal3').on('hidden.bs.modal',function()
	{
		player.stopVideo();
	});

	jQuery(function($){
		$(document).mouseup(function (e){
			var div = $(".service-menu");
			if (!div.is(e.target)
				&& div.has(e.target).length === 0) {
				div.hide();
			}
		});
	});

	$(document).on('click','.from_bad_to_normal',function()
	{
		$('body').removeClass();
		$('html').removeClass('for-bad');

		$('#header').removeClass('after_bad');

		$.removeCookie('bad__enabled');

		return false;
	});
	$(document).on('click','.to-bad',function()
	{
		$('html').addClass('for-bad');

		$.cookie('bad__enabled','yes');
		settings__bad();

		return false;
	});
	$(document).on('click','.bad__spacing',function()
	{
		var spacing = $(this).data('value');

		$.cookie('bad__spacing',spacing);

		$('.bad__spacing').removeClass('current');
		$(this).addClass('current');

		settings__bad();

		return false;
	});
	$(document).on('click','.bad__fontfamily',function()
	{
		var spacing = $(this).data('value');

		$.cookie('bad__fontfamily',spacing);

		$('.bad__fontfamily').removeClass('current');
		$(this).addClass('current');

		settings__bad();

		return false;
	});
	$(document).on('click','.bad__font__size',function()
	{
		var size = $(this).data('value');

		$.cookie('bad__fontsize', size);

		$('.bad__font__size').removeClass('current');
		$(this).addClass('current');

		settings__bad();

		return false;
	});
	$(document).on('click','.bad__color , .bad__more__settings__color',function()
	{
		var color = $(this).data('value');

		$.cookie('bad__color', color);

		$('.bad__color').removeClass('current');
		$(this).addClass('current');
		settings__bad();

		return false;
	});
	$(document).on('click','.bad__image',function()
	{
		var image = $(this).data('value');

		$.cookie('bad__showimage', image);

		$('.bad__image').removeClass('current');
		$(this).addClass('current');
		settings__bad();
		return false;
	});

	$(document).on('click','.bad__settings button',function()
	{
		$('.bad__more__settings').slideToggle();
		return false;
	});

	$(window).scroll(function()
	{
		var doc = $(document);
		var fixed = $('#header').hasClass('fixed');
		var anchor = $('#anchor_header');
		var content = $('#header');

		var docTop = doc.scrollTop();
		var anchorTop = anchor.offset().top;
		var window_height = $(window).height();

		if(docTop > window_height)
			$('.go_top').show();
		else
			$('.go_top').hide();

		if(docTop > 100)
		{
			if(!fixed)
			{
				anchor.height(content.outerHeight());
				content.addClass('fixed');
				if($('.bad').css('display') == "block")
				{
					$('.bad').addClass('fixed');
					content.addClass('after_bad');
				}

				$('#header').find('.top-line').hide();
				$('#header').css('height','75px');
			}
		}
		else
		{
			if(fixed)
			{
				anchor.height(0);
				content.removeClass('fixed after_bad');
				$('.bad').removeClass('fixed');
				$('#header').find('.top-line').show();
				$('#header').css('height','205px');
			}
		}

	});
});

function metrics() {

	$('#header .btn > a[data-toggle=modal]').on('click', function() {

		if (typeof yaCounter24945605 == 'object') {
			yaCounter24945605.reachGoal('header-form-opened');
		}
		if (typeof ga == 'object') {
			//ga('send', 'event', 'modal', 'opened', 'header-form-opened');
		}
	});

	$('.step .btn > a[data-toggle=modal]').on('click', function() {
		if (typeof yaCounter24945605 == 'object') {
			yaCounter24945605.reachGoal('four-steps-opened');
		}
		if (typeof ga == 'object') {
			//ga('send', 'event', 'modal', 'opened', 'four-steps-opened');
		}
	});

	$('#myModal #orderSend').on('click', function() {
		if (typeof yaCounter24945605 == 'object') {
			yaCounter24945605.reachGoal('signed-on-common-form');
		}
		if (typeof ga == 'object') {
			//ga('send', 'event', 'modal', 'opened', 'signed-on-common-form');
		}
	});

	$('#feedSend').on('click', function() {
		if (typeof yaCounter24945605 == 'object') {
			yaCounter24945605.reachGoal('feedback-written');
		}
		if (typeof ga == 'object') {
			//ga('send', 'event', 'modal', 'opened', 'feedback-written');
		}
	});

	$('#directorSend').on('click', function() {
		if (typeof yaCounter24945605 == 'object') {
			yaCounter24945605.reachGoal('feedback-to-boss-written');
		}
		if (typeof ga == 'object') {
			//ga('send', 'event', 'modal', 'opened', 'feedback-to-boss-written');
		}
	});

	$('a.tel').on('click', function() {
		if (typeof yaCounter24945605 == 'object') {
			yaCounter24945605.reachGoal('phonecall-made');
		}
		if (typeof ga == 'object') {
			//ga('send', 'event', 'modal', 'opened', 'phonecall-made');
		}
	});
}

function onPlayerReady(event)
{
	var videoList = $('#videos').html().split(',');

	event.target.cuePlaylist({playlist:videoList});
}

function go_top()
{
	$('.go_top').on('click',function()
	{
        $('html, body').animate({scrollTop: 0}, 1600);
		return false;
	});
}

function video()
{
	$('.video-link a').on('click',function()
	{
		var video = $(this).data('video');

		$('#videos').html(video);

		$('#myModal3').modal('show');

		return false;
	});
}

function time()
{
	$('#orderTime').mask("99:99");
}

function directorSend()
{
	$('#directorSend').on('click',function()
	{
		var name = $('#directorName').val();
		var email = $('#directorEmail').val();
		var text = $('#directorText').val();

		var true_data = true;

		var email_filter = /[a-z0-9!$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|ru|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;

		$('.form-app input').removeClass('er');
		$('.form-app error').hide();

		if(/^\s*$/.test(name))
		{
			$('#directorName').addClass('er');
			$('#directorName').next().show();
			true_data = false;
		}
		if(!email_filter.test(email))
		{
			$('#directorEmail').addClass('er');
			$('#directorEmail').next().show();
			true_data = false;
		}
		if(/^\s*$/.test(text))
		{
			$('#directorText').addClass('er');
			$('#directorText').next().show();
			true_data = false;
		}

		if(!true_data)
			return false;

		$.ajax({
			type: 'POST',
			url: '/include/ajax/director.php',
			data: {name: name,email: email,text: text},
			success: function(data){
				if(data == "true")
					window.location.href = "/order/?query=true";
				else
					window.location.href = "/order/?query=false";
			}
		});

		return false;
	});
}

function feedSend()
{
	$('#feedSend').on('click',function()
	{
		var name = $('#feedName').val();
		var email = $('#feedEmail').val();
		var text = $('#feedText').val();

		var email_filter = /[a-z0-9!$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|ru|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;

		$('.form-app input').removeClass('er');
		$('.form-app .error').hide();

		var true_data = true;

		if(/^\s*$/.test(name))
		{
			$('#feedName').addClass('er');
			$('#feedName').next().show();
			true_data = false;
		}
		if(!email_filter.test(email))
		{
			$('#feedEmail').addClass('er');
			$('#feedEmail').next().show();
			true_data = false;
		}
		if(/^\s*$/.test(text))
		{
			$('#feedText').addClass('er');
			$('#feedText').next().show();
			true_data = false;
		}

		if(!true_data)
			return false;

		$.ajax({
			type: 'POST',
			url: '/include/ajax/feed.php',
			data: {name: name,email: email,text: text},
			success: function(data){
				if(data == "true")
					window.location.href = "/feed/send/?query=true";
				else
					window.location.href = "/feed/send/?query=false";
			}
		});

		return false;
	});
}

function sendSpec()
{
	$('#sendSpec').on('click',function()
	{
		var name = $('#specName').val();
		var email = $('#specEmail').val();
		var theme = $('#specTheme').val();
		var text = $('#specText').val();
		var spec = $('#sendSpec').data('spec');

		var true_data = true;

		var email_filter = /[a-z0-9!$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|ru|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;

		$('.form-app .error').hide();
		$('.form-app input').removeClass('er');

		if(/^\s*$/.test(name))
		{
			$('#specName').addClass('er');
			$('#specName').next().show();
			true_data = false;
		}
		if(!email_filter.test(email))
		{
			$('#specEmail').addClass('er');
			$('#specEmail').next().show();
			true_data = false;
		}
		if(/^\s*$/.test(theme))
		{
			$('#specTheme').addClass('er');
			$('#specTheme').next().show();
			true_data = false;
		}
		if(/^\s*$/.test(text))
		{
			$('#specText').addClass('er');
			$('#specText').next().show();
			true_data = false;
		}

		if(!true_data)
			return false;

		$.ajax({
			type: 'POST',
			url: '/include/ajax/spec.php',
			data: {name: name,email: email,theme: theme,text: text,spec: spec},
			success: function(data){
				if(data == "true")
					window.location.href = "/order/?query=true";
				else
					window.location.href = "/order/?query=false";
			}
		});

		return false;
	});
}

function sendServ()
{
	$('#sendServ').on('click',function()
	{
		var servName = $('#nameServ').val();
		var client = $('#clientServ').val();
		var phoneServ = $('#phoneServ').val();
		var date = $('#datepicker').val();

		var true_data = true;

		var phone_filter = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/;

		$('.form-app .error').hide();
		$('.form-app input').removeClass('er');

		if(/^\s*$/.test(servName))
		{
			$('#nameServ').next().show();
			$('#nameServ').addClass('er');
			true_data = false;
		}
		if(/^\s*$/.test(client))
		{
			$('#clientServ').next().show();
			$('#clientServ').addClass('er');
			true_data = false;
		}
		if(!phone_filter.test(phoneServ))
		{
			$('#phoneServ').next().show();
			$('#phoneServ').addClass('er');
			true_data = false;
		}
		if(/^\s*$/.test(date))
		{
			$('#datepicker').next().show();
			$('#datepicker').addClass('er');
			true_data = false;
		}

		if(!true_data)
			return false;

		$.ajax({
			type: 'POST',
			url: '/include/ajax/service.php',
			data: {service: servName,client: client,phone: phoneServ,date: date},
			success: function(data){
				if(data == "true")
					window.location.href = "/order/?query=true";
				else
					window.location.href = "/order/?query=false";
			}
		});

		return false;
	});
}

function orderSend()
{
	$('#orderSend').on('click',function()
	{
		var phone = $('#orderPhone').val();
		var text = $('#orderText').val();
		var time = $('#orderTime').val();
		var date = $('#orderDate').val();

		var true_data = true;

		var phone_filter = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/;

		$('#myModal .error').hide();
		$('#myModal input').removeClass('er');

		if(!phone_filter.test(phone))
		{
			$('#orderPhone').addClass('er');
			$('#orderPhone').next().show();
			true_data = false;
		}
		if(!/^[0-1]+[0-9]+:[0-5]+[0-9]+$/.test(time))
		{
			$('#orderTime').addClass('er');
			$('.error.time').show();
			true_data = false;
		}
		if(/^\s*$/.test(date))
		{
			$('#orderDate').addClass('er');
			$('.error.date').show();
			true_data = false;
		}
		if(/^\s*$/.test(text))
		{
			$('#orderText').addClass('er');
			$('#orderText').next().show();
			true_data = false;
		}

		if(!true_data)
			return false;

		$.ajax({
			type: 'POST',
			url: '/include/ajax/order.php',
			data: {phone: phone,text: text,time: time,date: date},
			success: function(data){
				if(data == "true")
					window.location.href = "/order/?query=true";
				else
					window.location.href = "/order/?query=false";
			}
		});

		return false;
	});
}

function menu_open()
{
	$('.service-list .btn.open_link').click(function()
	{
		$('#myModal10').modal('show');

		return false;
	});
	$('.open_menu').click(function()
	{
		$('#myModal10').modal('show');

		return false;
	});
}
function carousel()
{
	$('.doctor-carousel .owl').owlCarousel({
    items:6,
    loop:true,
    margin:30,
    nav: true,
    navText: ''
  });
}

function carousel1()
{
	$('.item-category .clearfix').bxSlider({
		auto: false,
		controls: true,
		pager: false,
		slideWidth: '758',
		maxSlides: '1',
		minSlides: '1',
		prevText: '',
		nextText: ''
	});
}



function calendar(){
	  $('#datepicker').datepicker({
            inline: true,
            firstDay: 1,
			minDate: 0,
            showOtherMonths:true,
            dateFormat: "dd.mm.yy",
            hideIfNoPrevNext: true,
            onSelect: function(dateText, inst) {
                $("#actualDate").html(dateText);
            }
        });
}

function masonry()
{
	$('#service').masonry({
	  // options
	  itemSelector: '.item',
	});

	$('#service_office').masonry({
	  // options
	  itemSelector: '.item',
	});
}

function gallery()
{
	$('.gallery').masonry({
	  // options
	  itemSelector: '.item',
	});
}

function catalog()
{
	$(".catalog-menu .lv1 a ").click(function() {
		$(this).toggleClass('active');
		$('.lv2').slideToggle();
		return false;
	});
}

function sel(){
	$('select.custom').styler();
}

function tel(){
	$("input[type=tel]").mask("+7 (999) 999-99-99");
	return false;
}

function comm()
{
	$(".comment").click(function() {
		$(this).toggleClass('active');
		$('textarea.comm').slideToggle();
		return false;
	});
}

function order()
{
	$(".payment-info .btn a ").click(function() {
		$(this).toggleClass('active');
		$('.order').slideToggle();
		return false;
	});
}

function popuptext()
{
	$(".comment-popup").click(function() {
		$(this).toggleClass('active');
		$('textarea').slideToggle();
		return false;
	});
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1600);
        return false;
   });
}

function carousel_promo(){
  $('.promo .carousel').owlCarousel({
    items:3,
    loop:true,
    margin:30,
    nav: true,
    navText: ''
  })
}

function masonry2()
{
	$('.b-service-list .list').masonry({
	  itemSelector: '.item',
	  gutter: 30
	});
}

function masonry_popup()
{
	$('#myModal10').on('shown.bs.modal', function () {
		$('.b-service-list .list').masonry({
		  itemSelector: '.item',
		  gutter: 30
		});
	});
}

function masonry_list()
{
	$('.item.inner .list-two-cols').masonry({
	  itemSelector: '.item-grid'
	});
}

function settings__bad()
{
	if($('html').hasClass('for-bad'))
	{
		var color = $.cookie('bad__color');
		var font_size = $.cookie('bad__fontsize');
		var spacing = $.cookie('bad__spacing');
		var imageshow = $.cookie('bad__showimage');
		var fontfamily = $.cookie('bad__fontfamily');

		if(!color)
			color = "bad-white";
		else
		{
			$('.bad__color[data-value="'+color+'"]').addClass('current');
		}
		if(!font_size)
			font_size = "";
		else
		{
			$('.bad__font__size[data-value="'+font_size+'"]').addClass('current');
		}
		if(!spacing)
			spacing = "";
		else
		{
			$('.bad__spacing[data-value="'+spacing+'"]').addClass('current');
		}
		if(!imageshow)
			imageshow = "";
		else
		{
			$('.bad__image[data-value="'+imageshow+'"]').addClass('current');
		}
		if(!fontfamily)
			fontfamily = "";
		else
		{
			$('.bad__fontfamily[data-value="'+fontfamily+'"]').addClass('current');
		}

		$('body').removeClass();
		$('body').addClass(color);
		$('body').addClass(font_size);
		$('body').addClass(spacing);
		$('body').addClass(imageshow);
		$('body').addClass(fontfamily);
	}
}
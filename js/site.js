if (window.jQuery) $(document).ready(function() {

	if ($('.search a').length) show_search();
	if ($('.slidedown-link').length) slideToggle();
	if ($('input[type=tel]').length) tel();
	if ($('.anchor').length) anchor();
	if ($('.tabs').length) tabs();
	if ($('.tab-carousel').length) tabslide();
	if ($('.slick-carousel').length) carousel();
	if ($('#datepicker').length) calendar();
	if ($('.v-menu.mobile').length) menumobile();
	if ($('.channel-mobile').length) slideDown();
});



function show_search()
{
	$(".search a").click(function() {
		$(this).toggleClass('active');
		$(".search-wrapper").addClass('active');
		return false;
	});	
	$(".search-wrapper .close").click(function() {
		$(".search-wrapper").removeClass('active');
		return false;
	});
}

function slideToggle()
{
	$(".slidedown-link").click(function() {
		$(this).addClass('active');
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

function anchor (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1600);
        return false; 
   }); 
}

function tabs(){
	$('.b-channel .tabs-caption').each(function() {
    $(this).find('dt').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.b-channel').find('div.tabs-content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
}

function tabslide(){
	$('.inner-news .tabs-caption').each(function() {
    $(this).find('dt').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.inner-news').find('.tabs-content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
}

function carousel(){
	$('.slick-carousel').slick({
  		variableWidth: true,
  		infinite: false
	});
}

function calendar(){
	$(function(){
	  $.datepicker.regional['ru'] = {
	  closeText: 'Закрыть',
	  prevText: '&#x3c;Пред',
	  nextText: 'След&#x3e;',
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
	  $.datepicker.setDefaults($.datepicker.regional['ru']); $("#datepicker").datepicker();
	});
}

function menumobile()
{
	$(".v-menu.mobile .category").click(function() {
		$(this).toggleClass('active');
		$(".lv2").toggleClass('show');
		return false;
	});	
}

function slideDown()
{
	$(".channel-mobile .link").click(function() {
		$(this).toggleClass('active');
		$(".channel-mobile .head").toggleClass('active');
		$(".channel-mobile-hidden").slideToggle();
		$(".btn-border").toggleClass('show');
		return false;
	});	
}

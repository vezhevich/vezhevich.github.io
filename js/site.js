if (window.jQuery) $(document).ready(function() {
	if ($('.owlCarousel').length) carousel();
	if ($('.navigation').length) slideToggle();
	if ($('.owlCarousel2').length) carousel2();
	if ($('.owlCarousel3').length) carousel3();
	if ($('input[type=tel]').length) tel();
	if ($('.modal').length) show();
	if ($('.show-btn').length) showbtn();
	if ($('select.custom').length) sel();
	if ($('.datepicker').length) calendar();
	if ($('.btn-reserved').length) btnreserved();
	if ($('.anchor').length) up();
});

function carousel()
{
	$('.owlCarousel').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
	responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        321:{
	            items:2,
	            margin:20,
	        }
	    }
	})
}

function slideToggle()
{
	$(".hamb").click(function() {
		$(this).addClass('active');
		$(".navigation").slideToggle();
		$("header").toggleClass('active');
		return false;
	});	
}


function carousel2()
{
	$('.owlCarousel2').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
    items: 1,
    autoHeight:true
	})
}

function carousel3()
{
	$('.modal').on('shown.bs.modal', function () {
		$('.owlCarousel3').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: '',
	    items: 1,
	    autoHeight:true
		})
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function show()
{
	$('.modal').on('shown.bs.modal', function () {
		$("header .closed").addClass('active');
		return false;
	});
	$("header .closed").click(function() {
		$("header .closed").removeClass('active');
		$('.modal').modal('hide');
		return false;
	});
}

function showbtn()
{
	$(".show-btn").click(function() {
		$(this).toggleClass('active');
		$(".wrapper-form").toggleClass('show');
		return false;
	});	
}

function sel(){ 
	$('select.custom').styler();  
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
	  $.datepicker.setDefaults($.datepicker.regional['ru']); $(".datepicker").datepicker();
	});
}

function btnreserved()
{
	$(".btn-reserved").click(function() {
		$(".room-detail").addClass('hide');
		$(".send-message").addClass('show');
		return false;
	});	
}

function up(){
		$('.modal').on('shown.bs.modal', function () {
		   $('a.anchor[href^="#"]').click(function(){
		        var target = $(this).attr('href');
		        $('.modal').animate({scrollTop: $(target).offset().top}, 1600);
		        return false; 
		   }); 	
	});
}

if (window.jQuery) $(document).ready(function() {
	if ($('.owlCarousel').length) carousel();
	if ($('.owlCarousel2').length) carousel2();
	if ($('.grid').length) masonry();
	if ($('.grid2').length) masonry2();
	if ($('.grid3').length) masonry3();
	if ($('input[type=tel]').length) tel();
	if ($('.datepicker').length) calendar();
	if ($('.form-reserve-fixed').length) show();
	if ($('.navi-room').length) modal();
	if ($('.modal header').length) fixhead();
});

function carousel()
{
	$('.owlCarousel').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
    items: 3,
	})
}

function carousel2()
{
	$('.owlCarousel2').owlCarousel({
    margin:30,
    loop:false,
    nav:true,
    navText: '',
    items: 1,
	})
}

function masonry()
{
	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item'
	});
}

function masonry2()
{
	$('#myModal2').on('shown.bs.modal', function () {
		$('.grid2').masonry({
		  itemSelector: '.item',
		  columnWidth: 1,
		});

	});
}

function masonry3()
{
	$('#myModal9').on('shown.bs.modal', function () {
		$('.grid3').masonry({
		  itemSelector: '.item',
		  columnWidth: 1,
		});

	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
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

function show()
{
	$(".btn-reserve").click(function() {
		$(".form-reserve-fixed").addClass('active');
		return false;
	});	
	$(".form-reserve-fixed .close").click(function() {
		$(".form-reserve-fixed").removeClass('active');
		return false;
	});
}

function modal()
{
		$('#myModal').on('shown.bs.modal', function () {
			$(".navi-room").addClass('active');
			return false;
		});
		$("#myModal").click(function() {
		$(".navi-room").removeClass('active');
		return false;
	});	
}

function fixhead()
{
	$('.modal').on('scroll', function() {
	var threshold = 60;
	$('.modal header').css({"top":$(this).scrollTop() + 0});
	});
}

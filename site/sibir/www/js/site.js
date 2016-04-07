if (window.jQuery) $(document).ready(function() {
	if ($('#gallery').length) carousel();
	if ($('.service-list').length) list();
	if ($('#carousel').length) carousel2();
	if ($('.bxslider').length) carousel3();
	if ($('select.custom').length) sel();
	if ($('#datepicker').length) calendar();
	if ($('input[type=tel]').length) tel();
});


function carousel()
{
	$('#gallery').bxSlider({
		auto: false,
		controls: true,
		pager: false,
		slideWidth: '940',
		slideMargin: 20,
		maxSlides: '4',
		minSlides: '4',
		prevText: '',
		nextText: ''
	});
}

function list()
{
	var $container = $('#masonry');
	$container.masonry({
	  itemSelector: '.item'
	});
}

function carousel2()
{
	$('#carousel').bxSlider({
		auto: false,
		controls: true,
		pager: false,
		slideWidth: '940',
		slideMargin: 20,
		maxSlides: '4',
		minSlides: '4',
		prevText: '',
		nextText: ''
	});
}

function carousel3()
{
	$('.bxslider').bxSlider({
	  pagerCustom: '#bx-pager'
	});
}

function sel(){ 
	$('select.custom').styler();  
}

function calendar(){ 
	  $('#datepicker').datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths:true,
            dateFormat: "dd.mm.yy",
            dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            hideIfNoPrevNext: true,
            onSelect: function(dateText, inst) {
                $("#actualDate").html(dateText);
            }
        });
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99");  
}







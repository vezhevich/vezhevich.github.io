if (window.jQuery) $(document).ready(function() {
	if ($('.carousel').length) carousel();
	if ($('.carousel-feedback').length) carousel2();
	if ($('input[type=tel]').length) tel();
	if ($('#wrap').length) jScrollPane();
	if ($('#wrap').length) jScrollPane2();
	if ($('.promo').length) Scroll();
	if ($('.form-order textarea').length) autoHeight();
	if ($('.carousel-item').length) carousel3();
	if ($('.h-gradient').length) grad();
});

function carousel()
{
	$('.carousel').slick({
	  vertical: true,
	  verticalSwiping: true,
	  dots: true
	});
}

function carousel2()
{
	$('.carousel-feedback').owlCarousel({
    margin:30,
    loop:true,
    nav:true,
    navText: '',
    items: 1,
    autoHeight:true
	})
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function jScrollPane(){
	$('#wrap').jScrollPane();
}

function jScrollPane2(){
	$('.modal').on('shown.bs.modal', function () {
	$('#wrap').jScrollPane();
	});
}

function Scroll(){
	$(function() {
	  function get_random(min, max) {
	    return Math.floor(Math.random() * (max - min)) + min;
	  }

	  var
	    $content = $('html'),
	    $squares = $('.form-order .black');

	  $('.promo').on('click', 'button', function(e) {
	    var 
	      $link = $(this),
	      mode = $link.data('mode'),
	      $target = $squares.eq(get_random(0, $squares.length));

	    e.preventDefault();
	    $.scrollport($target, {
	      mode: mode,
	      delta: {
	        top: 50
	      }
	    });
	  });
	});
}

function autoHeight(){
	autosize(document.querySelectorAll('textarea'));
}

function carousel3()
{
	$('.carousel-item').owlCarousel({
    loop:true,
    nav:true,
    navText: '',
    items: 1
	})
}

function grad()
{
	$('.example h2, .example span').gradientText({
	    colors: ['#e3c28f', '#ae8a5f']
	});
}
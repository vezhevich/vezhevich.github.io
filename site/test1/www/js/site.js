if (window.jQuery) $(document).ready(function() {

  if ($('.promo-carousel').length) carousel();
  if ($('.seasons').length) select();
  if ($('select.custom').length) sel();
  if ($('.modal-menu-inner').length) menu();
  if ($('.icon-search-mobile').length) open();
  if ($('.search-md-text').length) open2();
  if ($('input,textarea').length) placeholder_off();
  if ($('#ex6').length) slider();
  if ($('.datepicker').length) datepicker();
});


function carousel(){ 
  $('.promo-carousel').owlCarousel({
      loop:true,
      margin:40,
      nav:false,
      dots:true,
      items: 1
  });
}

function select(){
  $(".seasons .item").click(function() {
  $(this).parent().find('.item').removeClass('active');
  $(this).addClass('active');
  return false;
  }); 
}

function sel(){ 
	$('select.custom').styler();  
}

function menu(){ 
  $(".hamburger").click(function() {
      $('.modal-menu-inner').addClass('open');
      $('body').addClass('modal-open');
      $('.menu-overlay').fadeIn();
      return false;
  });   
  $(".modal-menu-inner .close").click(function() {
      $('.modal-menu-inner').removeClass('open');
      $('body').removeClass('modal-open');
      $('.menu-overlay').fadeOut('slow');
      return false;
  }); 
  $(".menu-overlay").click(function() {
      $('.modal-menu-inner').removeClass('open');
      $('body').removeClass('modal-open');
      $('.menu-overlay').fadeOut('slow');
      return false;
  }); 

}

function open(){ 
  $(".icon-search-mobile .wrap").click(function() {
      $('.icon-search-mobile').toggleClass('open');
      $('#inputsearch').focus();
      return false;
  });   
}

function open2(){ 
  $(".search-md a").click(function() {
      $('.search-md-text').toggleClass('open');
      $('.main-header').toggleClass('index');
      $('.menu-overlay').toggleClass('open');
      $('body').toggleClass('modal-open');
      $('#inputsearch2').focus();
      return false;
  });   
  $(".menu-overlay").click(function() {
      $('.search-md-text').removeClass('open');
      $('.main-header').removeClass('index');
      $('.menu-overlay').removeClass('open');
      $('body').removeClass('modal-open');
  });  
}

function placeholder_off(){ 
  $('input,textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });  
}

function slider(){ 
   $("#ex6").slider({
      ticks: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      ticks_labels: ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
  });
  $("#ex6").on("slide", function(slideEvt) {
    $("#ex6SliderVal").text(slideEvt.value);
  });
}

function datepicker(){ 
  $('.datepicker').pickadate({
    monthsFull: [ 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь' ],
    monthsShort: [ 'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ],
    weekdaysFull: [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ],
    weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
    today: 'сегодня',
    clear: 'удалить',
    close: 'закрыть',
    firstDay: 1,
    format: 'd.mm.yyyy',
    formatSubmit: 'yyyy/mm/dd'
  })
}

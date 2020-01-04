
$( function() {

  var body_h = $('body').height(), 
      cb_h = $('.content_block').outerHeight(true),
      tb_h = $('.tab-content').outerHeight(true),
      cb = $(window).height() - body_h + cb_h - 61;
      tb = $(window).height() - body_h + tb_h - 61;
  $('.content_block').css('min-height', cb);
  $('.tab-content').css('min-height', tb);

if ($("*").is(".slider_range_class")) {
    $( ".slider_range_class" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }
  } );



$(document).ready(function() {

  // alert($('body').width());
if($('body').width()>1200) {
   if ($("*").is(".left_cat_sidebar")) {

  lsh = $('.left_cat_sidebar').offset().top;

  $(document).scroll(function() {
        if ($(this).scrollTop() > lsh) {
                $('.left_cat_sidebar>div').addClass('lcs_fix');
        } else {
           $('.left_cat_sidebar>div').removeClass('lcs_fix');
        }
    });

}
}
 

$('.iw_line_href').on('click', function(e) {
  e.preventDefault();
  $(this).parent().find('.iw_line_href').removeClass('active');
  $(this).addClass('active');
});

$('.info').on('click', function() {
  $(this).parent().find('.info_block').slideToggle();
  $('#overlay').show();
});

$('.close_info').on('click', function() {
  $(this).parent().parent().slideToggle();
  $('#overlay').hide();
});

$('.login_btn').on('click', function(e) {
  e.preventDefault(); 
  $('#login_block').animate({ 
            right: '0px'
        }, 200, function() {
          $('#login_block').css('position', 'absolute')
        }); 
  $('#register_block').animate({ 
            right: '-450px'
        }, 200, function() {
          $('#register_block').css('position', 'fixed')
        }); 
  $('#overlay').show();
});

$('.register_href').on('click', function(e) {
  e.preventDefault();
  $('#login_block').animate({ 
            right: '-450px'
        }, 200, function() {
          $('#login_block').css('position', 'fixed')
        });
  $('#register_block').animate({ 
            right: '0px'
        }, 200, function() {
          $('#register_block').css('position', 'absolute')
        });
  $('#overlay').show();
});



$('.close_btn').on('click', function() {
    $('#login_block').animate({ 
            right: '-450px' 
        }, 200, function() {
          $('#login_block').css('position', 'fixed')
        });
    $('#register_block').animate({ 
            right: '-450px' 
        }, 200, function() {
          $('#register_block').css('position', 'fixed')
        });
    $('#overlay').hide();
});

// $('.add_activs').on('click', function(e) {
//   e.preventDefault();
//   e_h = $(this).offset().top;
//   if($('body').width()<1200) $('#modal_add_active').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
//   $('#modal_add_active').show('slow');
//   $('#overlay').show();
// });

$('.made_operation_a').on('click', function(e) {
  e.preventDefault();
  e_h = $(this).offset().top;
  if($('body').width()<1200) $('#modal_made_operation').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
  $('#modal_made_operation').show('slow');
  $('#overlay').show();
});


$('.iw_line_href.blue_btn').on('click', function(e) {
  e.preventDefault();
  e_h = $(this).offset().top;
  if($('body').width()<1200) $('#i_want_modal').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
  $('#i_want_modal').show('slow');
  $('#overlay').show();
});

$('.filter_active').on('click', function(e) {
  e.preventDefault();
  e_h = $(this).offset().top;
  if($('body').width()<1200) $('#filter_modal').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
  $('#filter_modal').show('slow');
  $('#overlay').show();
});

/* модальное окно добавления комментария */
$('.send_comment .blue_btn').on('click', function(e) {
  e.preventDefault();
  e_h = $(this).offset().top;
  if($('body').width()<1200) $('#com_added').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
  $('#com_added').show('slow');
  $('#overlay').show();
});

/* модальное окно добавления отзыва */
$('#i_want_modal .modal_submit .blue_btn').on('click', function(e) {
    e.preventDefault();
    e_h = $(this).offset().top;
    if($('body').width()<1200) $('#review_added').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
    $('#i_want_modal').hide('slow');
    $('#review_added').show('slow');
    $('#overlay').show();
});

$('.close_mob_banner').on('click', function() {
  if($('body').width()>500) {
  $('#modal_mobile_horiz').hide();
  $('#overlay').hide();
  }
});




$('.toogle_link').on('click', function() {
  
  $(this).parent().find('.sub_toggle').slideToggle();
  $(this).find('.rotate90').toggleClass('true');
});

$('.show_comment').on('click', function() {
    $(this).toggleClass('active');
    $(this).find('i').toggleClass('rotate180');
    $(this).parent().parent().find('.comments_block').slideToggle();
    
});

$('.modal_close').on('click', function() {
    $(this).parent().hide('');
    
});

$('.table_line>i').on('click', function() {
  $(this).toggleClass('active');
});

$('.history_line>i').on('click', function() {
  if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().find('a').hide();
        $('#overlay').hide();
      } else {
        $(this).addClass('active');
        $('#overlay').show();
        $(this).parent().find('a').show();
      }
  $(this).parents('.history_block').find('.history_line_1').toggleClass('zindex9999');
  $(this).parent().toggleClass('zindex9999 bg_show');
});

$('.close_history').on('click', function() {
  $(this).parents('.history_block').find('.history_line_1').toggleClass('zindex9999');  
  $(this).parent().toggleClass('zindex9999 bg_show');
  $('#overlay').hide();
  $(this).hide();
  $(this).parent().find('i').removeClass('active');
});

$('i.remove').on('click', function() {
    $(this).parents('.nav-item').remove();
});



    $('.selectBox li.option').click(function() {
        $(this).parent().parent().find('p.valueTag').text($(this).text());
      });

    $('.selectBox').on('click', function() {
      if($(this).hasClass('bblr')) {
        $(this).find('.selectMenuBox').slideToggle();
        $(this).toggleClass('bblr');
      } else {
        $(this).parents('body').find('.selectMenuBox').hide();
        $(this).parents('body').find('.bblr').removeClass('bblr');
        $(this).find('.selectMenuBox').slideToggle();
        $(this).toggleClass('bblr');
      }
      
    });


    $('.sidebar_item_title').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).parent().parent().find('.sidebar_item_title.active').removeClass('active');
      $(this).parent().parent().find('.sub_sidebar_item.open').slideToggle().removeClass('open');
    }  else {
      $(this).parent().parent().find('.sidebar_item_title.active').removeClass('active');
      $(this).parent().parent().find('.sub_sidebar_item.open').slideToggle().removeClass('open');
      $(this).addClass('active');
      $(this).parent().find('.sub_sidebar_item').slideToggle().addClass('open');
    } 

    });

    $('.acc_title').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).parent().parent().find('.acc_title.active').removeClass('active');
      $(this).parent().parent().find('.sub_acc_item.open').slideToggle().removeClass('open');
      $(this).find('img').removeClass('true');
    }  else {
      $(this).parent().parent().find('.acc_title.active').removeClass('active');
      $(this).parent().parent().find('.sub_acc_item.open').slideToggle().removeClass('open');
      $(this).parent().parent().find('img').removeClass('true');
      $(this).addClass('active');
      $(this).find('img').addClass('true');
      $(this).parent().find('.sub_acc_item').slideToggle().addClass('open');
    } 

  });

    $('.sd_line_3 .zoom_line img.arrow').on('click', function() {
      e_h = $(this).offset().top;
      if($('body').width()<1200) $('#modal_add_active').css({'top' : e_h, 'transform' : 'translate(-50%,0)'});
      $('#modal_add_active').show('slow');
      $('#overlay').show();
    });
      

  // $(this).parent().find('.sub_sidebar_item').slideToggle();


    $('.number_img').on('click', function() {
  var input = $(this).parent().find('input'); 
  var value = parseInt(input.val()) || 0; 
  if ($(this).hasClass('number_2')) {
    value = value - 1; 
  }
  if ($(this).hasClass('number_1')) {
    value = value + 1; 
  }
  input.val(value).change(); 
});

    
if ($("*").is(".single")) {



// pickmeup('.single').hide();

// pickmeup('.single', {
//   flat : true,
//   mode : 'multiple',
//   position : 'bottom',
//   locale: 'ru'
// });
// pickmeup('.multiple', {
//   flat : true,
//   position : 'bottom',
//   mode : 'multiple'
// });
// pickmeup('.range', {
//   flat : true,
//   position : 'bottom',
//   mode : 'range'
// });

pickmeup.defaults.locales['ru'] = {
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
};

pickmeup('.date_1', {
  position       : 'bottom',
  hide_on_select : true,
  locale : 'ru'
});

pickmeup('.date_2', {
  position       : 'bottom',
  hide_on_select : true,
  locale : 'ru'
});

}





}); //END DOCUMENT READY

$( function() {
    var availableTags = [
      "SPDR S&P 500 (SPY)",
      "SPDR Portfolio S&P 500 Growth ETF (SPYG)",
      "SPDR Portfolio S&P 500 Growth ETF (SPYG)",
      "SPDR Portfolio S&P 500 Growth ETF (SPYG)",
      "SPDR Portfolio S&P 500 Growth ETF (SPYG)"
    ];
    $( ".tags" ).autocomplete({
      source: availableTags
    });
  } );


// добавляем/показываем меню авторизации пользователя на мобилах
$( function() {
    $('.js-av-auth-show').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});

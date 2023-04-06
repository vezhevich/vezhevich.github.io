// фиксированная шапка
// $(function() {
//     $(".js-header-sticky").sticky({
//         topSpacing:0,
//         responsiveWidth: true,
//         zIndex: 100,
//         className: 'b-header_fix',
//         wrapperClassName: 'b-header__wrapper'
//     });
// });


//скролл до элемента
// $(function() {
//     $('.anchor[href^="#"]').click(function(){
//         var target = $(this).attr('href');
//         $('html, body').animate({scrollTop: $(target).offset().top }, 800);
//         return false;
//     });
// });

var scroll = new SmoothScroll('.anchor[href^="#"]', {
    speed: 500,
    speedAsDuration: true
});

$(function() {
    $(document).on('click', '.js-select-entity', function() {
        var inputCheck = $('#entity').prop("checked");

        if (inputCheck == false) {
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_show').removeClass('hidden');
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_show').addClass('show');
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_hidden').removeClass('show');   
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_hidden').addClass('hidden');   
        } else if (inputCheck == true) {
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_show').addClass('hidden');
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_show').removeClass('show');
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_hidden').addClass('show');
            $(this).parents('.b-cards-wrapper').find('.b-cards-ctn_hidden').removeClass('hidden');
            
        }
    });
});

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


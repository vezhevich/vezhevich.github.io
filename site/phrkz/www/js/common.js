if (window.jQuery) $(document).ready(function() {
  if ($('.header-hamburger').length) navi();
  if ($('.form-input-password').length) show_password();
  if ($('.header-account__link').length) show_modal();
  // if ($('.header-lang__link').length) show_lang();
  if ($('.header-lang__link').length) show_lang();
  if ($('select.custom').length) select();
  if ($('.slick').length) carousel();
});


function navi(){ 
  $('.header-hamburger').on("click", function(){
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('navigation--active');
    return false;
  }); 
}

function show_password(){ 
  $(".checkPassword").on("change", function(){
   if(this.checked) {
      $('.form-input-password', $(this).parents('.modal-auth__line')).attr("type", "text");
      $('label', $(this).parents('.modal-auth__line')).addClass ('active')
    } else {
      $(".form-input-password").attr("type", "password");
      $('label').removeClass ('active')
    }
  }); 
}

function show_modal(){ 
  $('.header-account__link').on("click", function(){
    $('.modal-auth').toggleClass('modal-auth--active');
    return false;
  }); 
}

// function show_lang(){ 
//   $('.header-lang__link').on("click", function(){
//     $(this).toggleClass('header-lang__link--active');
//     $('.header-lang-select').toggleClass('header-lang-select--active');
//     return false;
//   }); 
// }

function show_lang(){ 
  $('.header-lang__link').on("click", function(){
    $('.header-lang-select').toggleClass('header-lang-select--active');
    return false;
  }); 
}

function select(){ 
  $('select.custom').styler();  
}

function carousel() {
      if ($(window).width() <= '767')
      {
       $('.slick').slick({
         dots: true,
         arrows: false,
         adaptiveHeight: true,
         infinite: false,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1
       });
      }
      else
      {
        $('.slick').slickRemove();
      } 

  $(window).resize(function() {
      if ($(window).width() <= '767')
      {
        $('.slick').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
      else
      {
         $('.slick').slickRemove();
      }
  }); 
}

if (window.jQuery) $(document).ready(function() {
   if ($('.main-form-wrapper').length) scrollTop();
   if ($('input').length) placeholder_off();

});

function scrollTop(){ 
  $('.main-form-wrapper').on( 'click', function(e){
    if( window.innerWidth <= 768)
    {
      $('.main-wrapper').animate({
          scrollTop: $(this).offset().top
      }, 300);
    }
    });
}

function placeholder_off(){ 
  $('input').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });  
}
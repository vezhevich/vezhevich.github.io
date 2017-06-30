if (window.jQuery) $(document).ready(function() {
  // if ($('input').length) tel();
  //   if ($('input').length) placeholder_off();
   if ($('.main-form-wrapper').length) scrollTop();

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

// function tel(){ 
//   $("input").mask("+7-999-999-9999"); 
//   return false; 
// }


// function placeholder_off(){ 
//   $('input').focus(function(){
//     $(this).data('placeholder',$(this).attr('placeholder'))
//     $(this).attr('placeholder','');
//   });
//   $('input,textarea').blur(function(){
//     $(this).attr('placeholder',$(this).data('placeholder'));
//   });  
// }
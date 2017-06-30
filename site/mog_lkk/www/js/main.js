if (window.jQuery) $(document).ready(function() {
  if ($('input[type=tel]').length) tel();
    if ($('input').length) placeholder_off();

});

function tel(){ 
  $("input[type=tel]").mask("+7 999 999-9999"); 
  return false; 
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
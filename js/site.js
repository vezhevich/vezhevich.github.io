if (window.jQuery) $(document).ready(function() {
  if ($('input[type=tel]').length) tel();
});

function tel(){ 
  $("input[type=tel]").mask("+7 (999) 999-99-99"); 
  return false; 
}
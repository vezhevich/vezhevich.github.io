if (window.jQuery) $(document).ready(function() {
  if ($('input[type=tel]').length) tel();
  if ($('input,textarea').length) placeholder_off();
  if ($('.carousel').length) carousel();
  if ($('.slide .type').length) select_table();
});

function tel(){ 
  $("input[type=tel]").mask("+7 (999) 999-99-99"); 
  return false; 
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

function carousel(){ 
  $('.carousel').owlCarousel({
      loop:false,
      margin:40,
      nav:true,
      dots: false,
      autoHeight:true,
      lazyLoad: true,
      onInitialized: setOwlStageHeight,
      onResized: setOwlStageHeight,
      onTranslated: setOwlStageHeight,
      navText: ['', ''],
      items: 1,
      responsive:{
        0:{
            
        },
        768:{    
          autoHeight:false,
        },
        940:{
            
        }
    }
  });
  function setOwlStageHeight(event) {
      var maxHeight = 0;
      $('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
          var thisHeight = parseInt( $(this).height() );
          maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
      });
      $('.owl-carousel').css('height', maxHeight );
      $('.owl-stage-outer').css('height', maxHeight ); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
  }
}


function select_table(){
  $(".slide .type a").click(function() {
  $(this).parent().find('.table').slideToggle();
  $(this).toggleClass('active');
  return false;
  }); 
}


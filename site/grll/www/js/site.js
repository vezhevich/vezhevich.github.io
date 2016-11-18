if (window.jQuery) $(document).ready(function() {
  if ($('input[type=tel]').length) tel();
  if ($('.anchor').length) anchor();
  if ($('.add-basket').length) basket();
  if ($('.filter-catalog-mobile').length) filter();
  if ($('.grid').length) mason();
  if ($('.grid-isotop').length) filteris();
  if ($('.link-show').length) link_show();
  if ($('.step1').length) hide_step1();
  if ($('.order').length) hide_address();
  if ($('.order').length) show_tooltip();
  if ($('.type-password').length) show_password();
  if ($('.modal.product .modal-add-basket').length) show_qnt();
  if ($('.b-product .modal-add-basket').length) show_qnt2();
  if ($('.right-column-fixed').length) hide_item();
  if ($('.get-focus').length) focus();
  if ($('.tovar .delete').length) delet();
});

function tel(){ 
  $(".normal-tel").mask("(999) 999-9999"); 
  $(".mobile-tel").mask("+7 (999) 999-9999"); 
  return false; 
}


function anchor (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
   }); 
}

function basket(){ 
  $(".link-buy").click(function() {
    $('.qnt', $(this).parents('.item-card')).addClass('active');
    $('.in', $(this).parents('.item-card')).hide();
    $('.bottom', $(this).parents('.item-card')).addClass('active');
    $('.text', $(this).parents('.item-card')).addClass('active');
    $('.right-column-fixed .cart i').addClass ('bounceIn');
    $('.right-column-fixed .item-round').addClass ('active');
    $('.m-header .info-top .shopping-cart.icon').addClass ('active');
    return false;
  });   
  $(".qnt .up").click(function() {
   $('.right-column-fixed .wrap-item-round').addClass ('active');
    return false;
  });  
}

function filter(){ 
  $(".filter-catalog-mobile .link").click(function() {
    $(this).toggleClass('active');
    $('.list').slideToggle();
    return false;
  });  
  $(".filter-catalog-mobile .list").click(function() {
    $('.list').slideUp();
    $('.link').removeClass('active');
    return false;
  });   
}

function mason(){ 
  $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true
  }); 
}

function filteris(){ 
  var $grid = $('.grid-isotop').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };


  // bind filter button click
  $('.filters-button-group').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
}

function link_show(){ 
  $(".link-show").click(function() {
    $(this).hide();
    $('.show-content').show();
    return false;
  });   
}

function hide_step1(){ 
  $(".link-to-step2").click(function() {
    $('.step1').hide();
    $('.step2').show();
    return false;
  });   
}

function hide_address(){ 
  $('.hide-address input[type=checkbox]').change(function(){
    if($('.hide-address input[type=checkbox]:checked').length)
      $('.address').slideUp();
    else
      $('.address').slideDown();
    }
  ); 
}

function show_tooltip(){ 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  }) 
}

function show_password(){ 
  $(".checkPassword").on("change", function(){
   if(this.checked) {
      $('.type-password', $(this).parents('.wrap-password')).attr("type", "text");
      $('label', $(this).parents('.wrap-password')).addClass ('active')
    } else {
      $(".type-password").attr("type", "password");
      $('label').removeClass ('active')
    }
  }); 
}

function show_qnt(){ 
  $(".modal.product .modal-add-basket").click(function() {
   $('.modal.product .modal-add-basket .qnt').addClass ('active');
    return false;
  });   
}

function show_qnt2(){ 
  $(".b-product .modal-add-basket").click(function() {
   $('.b-product .modal-add-basket .qnt').addClass ('active');
    return false;
  });   
}

function hide_item(){
$('.right-column-fixed').click(function(e){
    e.preventDefault();
    if($(this).hasClass('active'))
  {
    $('#myModal3').modal('hide');
    $(".right-column-fixed").removeClass('active');
  }
  else
  {
    $('#myModal3').modal('show');
    $(".right-column-fixed").addClass('active');
  }
});
}

function focus(){ 
  $(".get-focus span").click(function() {
    $('input', $(this).parents('.get-focus')).focus()
    return false;
  });   
}

function delet(){
  $(".delete").click(function(e) {
    e.preventDefault();

    $(this).parents('.wrap-animation').animate({opacity: 0}, 100, function() {
      $(this).slideUp(200, function(){
        $(this).remove();
      });
    });
  });
}

if (window.jQuery) $(document).ready(function() {
  $('.main-header').scrollupbar();

  if ($('.anchor').length) anchor();
  if ($('.main-collections').length) mason();
  if ($('.blog-wrapper-carousel .blog-list').length) carousel();
  if ($('.popular-collections.carousel').length) carousel2();
  if ($('.main-collections').length && window.innerWidth < 680) remove_card();
  if ($('.main-collections .wrap-carousel').length) res();
  if ($('.main-collections .carousel').length) carousel3();
  if ($('.promotions .grid').length) mason2();
  if ($('.promotions .grid').length) res2();
  if ($('.sorter-cost-toggle').length) sort();
  if ($('.anchor').length) link();
  if ($('.blog-carousel-page').length) carousel4();
  if ($('.blog-carousel-page-full').length) carousel5();
  if ($('.example .item-card .row').length) res3();
  if ($('.example .item-card .carousel').length) carousel6();  
  // if ($('.composition-carousel .row').length) res4();
  if ($('.composition-carousel').length) carousel7();  
  if ($('.navi-tabs .nav').length) res5();
  if ($('.mCustomScrollbar').length) scroller();
  if ($('.mCustomScrollbar').length) scroller_destroy();
  if ($('.modal-filter').length) sorter();
  if ($('.tovar-list .wrap-animation').length) delet();
  if ($('.composition-detail .round').length) select();
  if ($('.questions .btn-form-question').length) show();
  if ($('.item-tovar .btn-favorite a').length) show2();
  if ($('.composition-preview').length) carousel9();
  if ($('.select-width').length) select2();
  if ($('.description .btn-wrapper').length) show3();
  if ($('.module-detail .btn-wrapper').length) show4();
  if ($('.module-detail .item-tovar .round').length) select3();
  if ($('.environment-carousel').length) carousel10();
  if ($('.hamburger').length) effect();
  if ($('.hamburger').length) effect2();
  if ($('.composition-preview').length && window.innerWidth > 1000) hover();
  if ($('.qnt').length) qnt();
  if ($('.blog-post.inner').length) carousel11();
  if ($('.main-menu').length) menu();
  if ($('.modal-menu-inner').length) menu2();
  if ($('#inputBoxSearch').length) focus();
  if ($('#inputBoxLocation').length) focus2();
  if ($('.modal-help .modal-body').length) scroll_help();
  if ($('.b-blog-list').length && window.innerWidth > 1000) hover2();
  if ($('.b-blog-list .carousel-xs').length) res6();
  if ($('.b-blog-list .carousel-xs').length) carousel12();
  if ($('.panel-slide').length) slide();
  if ($('.fotorama').length) foto();
  if ($('.filter').length) filter();
  if ($('.favorite .tovar-list .qnt').length) border();

  setTimeout(function(){$('.modal-location').modal('show');},1000);

   $(window).bind('scroll resize', function(){
      $('.background-image-top').css('background-position', '50% -' + $(window).scrollTop() * 0.25 + 'px');
  }).scroll();
});


function anchor (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
   }); 
}

function mason(){ 
  $('.main-collections .grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true
  }); 
}

function carousel(){ 
  $('.blog-list').owlCarousel({
      loop:true,
      margin:40,
      nav:true,
      navText: "",
      responsive:{
          0:{
              items:1,
              nav: false,
              margin: 20,
              autoWidth:true
          },
          680:{
              items:3,
              margin: 40,
              autoWidth:true
          },
          1000:{
              items:3
          },          
          1360:{
              items:4
          }
      }
  });
}

function carousel2(){ 
  $('.popular-collections.carousel').owlCarousel({
      margin: 40,
      nav: true,
      navText: "",
      responsive:{
        0:{
            items:1,
            margin: 0,
            autoWidth:true
        },
        680:{
            items:3,
            margin: 40
        },
        1000:{
            items:4
        }
    }
  });
}

function remove_card() {
    $('.main-collections .grid-item.big').remove();
}

function res() {
      if ($(window).width() <= '679')
      {
        $('.main-collections .wrap-carousel').addClass('carousel');
        $('.main-collections .grid').masonry('destroy');
      }
      else
      {
       $('.main-collections .wrap-carousel').removeClass('carousel');
       $('.main-collections .grid').masonry({
         itemSelector: '.grid-item',
         percentPosition: true
       }); 
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
         $('.main-collections .wrap-carousel').addClass('carousel');
         $('.main-collections .grid').masonry('destroy');
      }
      else
      {
        $('.main-collections .wrap-carousel').removeClass('carousel');
        $('.main-collections .grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true
        }); 
      }
  }); 
}

function carousel3(){ 
  $('.main-collections .carousel').owlCarousel({
      margin: 40,
      nav: false,
      dots: true,
      navText: "",
      items: 1
  });
}

function mason2(){ 
  $('.promotions .grid').masonry({
    itemSelector: '.item',
    percentPosition: true
  }); 
}

function res2() {
      if ($(window).width() <= '679')
      {
        $('.promotions .grid').masonry('destroy');
      }
      else
      {
       $('.promotions .grid').masonry({
         itemSelector: '.grid-item',
         percentPosition: true
       }); 
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
         $('.promotions .grid').masonry('destroy');
      }
      else
      {
        $('.promotions .grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true
        }); 
      }
  }); 
}

function sort(){ 
  $(".sorter-cost-toggle a").click(function() {
    $(this).toggleClass('active');
    return false;
  });  
}

function link (){
   $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top0}, 1600);
        return false; 
   }); 
}

function carousel4(){ 
  $('.blog-carousel-page').owlCarousel({
      margin: 40,
      nav: true,
      dots: false,
      center:true,
      autoWidth:true,
      navText: "",
      items: 2,
      responsive:{
        0:{
            nav: false,
            dots: true,
            autoWidth:false,
            center: false,
            items: 1
        },
        680:{
            center:false,
            autoWidth:false,
            items: 1
        },
        1000:{
            center:false,
            items: 1
        },        
        1360:{
            center:true,
            items: 2
        }
    }
  });
}

function carousel5(){ 
  $('.blog-carousel-page-full').owlCarousel({
      margin: 40,
      nav: true,
      dots: false,
      animateOut: 'fadeOut',
      navText: "",
      items: 1,
        responsive:{
          0:{
              nav: false,
              dots: true
          },
          680:{
              
          },
          1000:{
              
          }
      }
  });
}


function res3() {
      if ($(window).width() <= '679')
      {
       $('.example .item-card .row').addClass('carousel');
      }
      else
      {
        $('.example .item-card .row').removeClass('carousel');
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
        $('.example .item-card .row').addClass('carousel');
      }
      else
      {
         $('.example .item-card .row').removeClass('carousel');
      }
  }); 
}

function carousel6(){ 
  $('.example .item-card .carousel').owlCarousel({
      nav: true,
      dots: false,
      navText: "",
      items: 1,
        responsive:{
          0:{
              nav: false,
              dots: true
          },
          680:{
              
          },
          1000:{
              
          }
      }
  });
}

// function res4() {
//       if ($(window).width() <= '999')
//       {
//        $('.composition-carousel .row').addClass('carousel');
//       }
//       else
//       {
//         $('.composition-carousel .row').removeClass('carousel');
//       } 

//   $(window).resize(function() {
//       if ($(window).width() <= '999')
//       {
//         $('.composition-carousel .row').addClass('carousel');
//       }
//       else
//       {
//          $('.composition-carousel .row').removeClass('carousel');
//       }
//   }); 
// }

function carousel7(){ 
  $('.composition-carousel .carousel').owlCarousel({
      nav: true,
      dots: false,
      navText: "",
      responsive:{
          0:{
              items:1,
              nav: false,
              dots: true,
              margin: 20,
              autoWidth:true
          },
          680:{
              items:1,
              margin: 40,
              autoWidth:true
          },
          1000:{
              items: 4,
              margin: 40
          }
      }
  });
}

function res5() {
      if ($(window).width() <= '679')
      {
       $('.navi-tabs .nav').addClass('carousel');
       $('.navi-tabs .carousel').owlCarousel({
           nav: false,
           dots: false,
           navText: "",
           autoWidth:true,
           loop:false,
           items: 1
       });
      }
      else
      {
        $('.navi-tabs .carousel').trigger('destroy.owl.carousel');
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
        $('.navi-tabs .nav').addClass('carousel');
        $('.navi-tabs .carousel').owlCarousel({
            nav: false,
            dots: false,
            navText: "",
            autoWidth:true,
            loop:false,
            items: 1
        });
      }
      else
      {
         $('.navi-tabs .carousel').trigger('destroy.owl.carousel');
      }
  }); 
}

function scroller() {
   $(".mCustomScrollbar").mCustomScrollbar({
      theme:"dark"
  });
}

function scroller_destroy() {
      if ($(window).width() <= '679')
      {
        $('.mCustomScrollbar').mCustomScrollbar("destroy");
      }
      else
      {
          $(".mCustomScrollbar").mCustomScrollbar({
              theme:"dark"
          });
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
         $('.mCustomScrollbar').mCustomScrollbar("destroy");
      }
      else
      {
          $(".mCustomScrollbar").mCustomScrollbar({
              theme:"dark"
          });
      }
  }); 
}

function sorter(){
  $(".modal-filter .sort a").click(function() {
  $(this).parent().find('a').removeClass('active');
  $(this).addClass('active');
  return false;
  }); 
}

function delet(){
  $(".tovar-list .delete a").click(function(e) {
    e.preventDefault();

    $(this).parents('.wrap-animation').animate({opacity: 0}, 100, function() {
      $(this).slideUp(200, function(){
        $(this).remove();
      });
    });
  });
}

function select(){
  $(".composition-detail .round").click(function() {
  $(this).parent().find('.round').removeClass('active');
  $(this).addClass('active');
  return false;
  }); 
}

function show()
{
    $(".questions .btn-form-question a").click(function() {
      $( '.form-question' ).fadeIn( "fast", function() {
      $('#textareaBoxQuestion').focus();
      });
      return false;
    });   
    $(".form-question .close").click(function() {
      $('.form-question').fadeOut();
      return false;
    }); 
}

function show2(){
$(".item-tovar .item .btn-favorite").click(function() {
$(this).addClass('active');
$(this).parent().find('.qnt').addClass('active');
$('.fixed-panel-composition').addClass('active');
return false;
}); 
}

function carousel9() {
  if ($(window).width() <= '679')
      {
       $('.composition-preview').owlCarousel({
           nav: false,
           dots: false,
           navText: "",
           autoWidth:true,
           loop:false,
           items: 1
       });
      }
      else
      {
        $('.composition-preview').trigger('destroy.owl.carousel');
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
        $('.composition-preview').owlCarousel({
            nav: false,
            dots: false,
            navText: "",
            autoWidth:true,
            loop:false,
            items: 1
        });
      }
      else
      {
         $('.composition-preview').trigger('destroy.owl.carousel');
      }
  }); 
}

function select2(){
  $(".select-width .tab").click(function() {
  $(this).parent().find('.tab').removeClass('active');
  $(this).addClass('active');
  return false;
  }); 
}

function show3(){
  $(".description .btn-wrapper .btn-favorite-big").click(function() {
  $(this).addClass('active');
  $(this).parent().find('.group').addClass('active');
  return false;
  }); 
}

function show4(){
  $(".module-detail .btn-wrapper .btn-add").click(function() {
  $(this).addClass('active');
  $(this).parent().find('.qnt').addClass('active');
  return false;
  }); 
}

function select3(){
  $(".module-detail .item-tovar .round").click(function() {
  $(this).parent().find('.round').removeClass('active');
  $(this).addClass('active');
  return false;
  }); 
}

function carousel10(){ 
  $('.environment-carousel').owlCarousel({
      margin:40,
      center: true,
      nav:true,
      autoWidth:true,
      navText: "",
      items: 2,
      responsive:{
        0:{
            items:1,
            margin: 20,
            center: false,
            nav: false
        },
        680:{
          center: false,
            margin: 20,
            items: 1
        },
        1000:{
          center: false,
          items: 1
        },
        1360: {
          canter: true
        }
    }
  });
}

function effect(){ 
  $(".hamburger").click(function() {
    $('.modal-menu').on('shown.bs.modal', function () {
      $('.modal-menu .effect').addClass('active');
    return false;
    }); 
  }); 
  $(".modal-menu .close").click(function() {
    $('.modal-menu').on('hide.bs.modal', function () {
      $('.modal-menu .effect').removeClass('active');
    });
  });   
  return false;
}

function effect2(){ 
  $(".hamburger").click(function() {
    $('.modal-menu-inner').on('shown.bs.modal', function () {
      $('.modal-menu-inner .dummy').addClass('dummy--active');
    return false;
    }); 
  }); 
  $(".modal-menu-inner .close").click(function() {
    $('.modal-menu-inner').on('hide.bs.modal', function () {
      $('.modal-menu-inner .dummy').removeClass('dummy--active');
    });
  });   
  return false;
}

function hover(){ 
  $('.composition-preview .item').hover(
      function() {
        $('.wrapper-carousel-full-width').addClass('active');
      }, function() {
        $('.wrapper-carousel-full-width').removeClass('active');
      }
    );
  return false;
}

function qnt(){ 
  $('.qnt .plus').click(function(e){ 
  // Stop acting like a button 
  e.preventDefault(); 
  // Get its current value 
  var field = $(this).siblings('input[name=quantity]'); 
  var value = parseInt(field.val()); 
  // If is not undefined 
  if (!isNaN(value) ) { 
  // Increment 
  field.val(value + 1); 
  } 
  else if (value > 24) { 
  field.val(value); 
  }else { 
  // Otherwise put a 0 there 
  field.val(0); 
  } 
  }); 
  $(".qnt .minus").click(function(e) { 
  // Stop acting like a button 
  e.preventDefault(); 
  // Get the field name 
  var field = $(this).siblings('input[name=quantity]'); 
  var value = parseInt(field.val()); 

  if (!isNaN(value) && value > 0) { 
  // Decrement one 
  field.val(value - 1); 
  } else { 
  // Otherwise put a 0 there 
  field.val(0); 
  } 
  }); 
}

function carousel11(){ 
  $('.blog-post.inner .item-card').owlCarousel({
      margin: 40,
      nav: true,
      dots: true,
      navText: "",
      items: 3,
      responsive:{
          0:{
              items:1,
              nav: false
          },
          680:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
}


function menu(){ 
  $(".hamburger.large").click(function() {
      $('.main-menu').addClass('open');
      return false;
  });   
  $(".main-menu .close").click(function() {
      $('.main-menu').removeClass('open');
      return false;
  }); 
}

function menu2(){ 
  $(".hamburger.small").click(function() {
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

function focus(){ 
    $('.modal').on('shown.bs.modal', function () {
          setTimeout(function() {
          document.getElementById('inputBoxSearch').focus();
        }, 0);
    }); 
}

function focus2(){ 
    $('.modal').on('shown.bs.modal', function () {
          setTimeout(function() {
          document.getElementById('inputBoxLocation').focus();
        }, 0);
    }); 
}

function scroll_help() {
   $(".modal-help .modal-body").mCustomScrollbar({
      theme:"dark"
  });
}

function hover2(){ 
$('.b-blog-list .item .title').hover(function() {
$('.b-blog-list .item .img').removeClass('active');
$(this).parents('.item').find('.img').addClass('active');
return false;} ,
function() {
$('.b-blog-list .item .img').removeClass('active');
return false;

});
}

function res6() {
      if ($(window).width() <= '679')
      {
       $('.b-blog-list .carousel-xs').addClass('carousel');
      }
      else
      {
        $('.b-blog-list .carousel-xs').removeClass('carousel');
      } 

  $(window).resize(function() {
      if ($(window).width() <= '679')
      {
        $('.b-blog-list .carousel-xs').addClass('carousel');
      }
      else
      {
         $('.b-blog-list .carousel-xs').removeClass('carousel');
      }
  }); 
}

function carousel12(){ 
  $('.b-blog-list .carousel-xs.carousel').owlCarousel({
      nav: true,
      dots: false,
      navText: "",
      items: 1,
        responsive:{
          0:{
              nav: false,
              dots: true
          },
          680:{
              
          },
          1000:{
              
          }
      }
  });
}

function slide(){
  $(".panel-slide .head-slide a").click(function() {
  $(this).parents('.item-slide').find('.head-slide').toggleClass('active');
  $(this).parents('.item-slide').find('.content').slideToggle();
  $(this).parents('.item-slide').find('.content').toggleClass('active');
  return false;
  }); 
}

function foto(){
  $(function () {
    $('.fotorama').fotorama();
  });
}

function filter(){
  $(".filter .color a").click(function() {
  $(this).parent().find('a').toggleClass('active');
  return false;
  }); 
  $(".filter .style a").click(function() {
    $(".filter .style a").not(this).removeClass('active');
    $(this).toggleClass('active');
  return false;
  });
}

function border(){
  $(".favorite .tovar-list .qnt").click(function() {
    $(".favorite .tovar-list .qnt").removeClass('active');
    $(this).addClass('active');
  return false;
  });
  $(body).click(function() {
    $(".favorite .tovar-list .qnt").removeClass('active');
  });
}
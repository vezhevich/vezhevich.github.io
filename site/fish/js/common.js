if (window.jQuery) $(document).ready(function () {
  if ($('.slider-full-width').length) slider();
  if ($('.catalog-cards-item-carousel-js').length) slider2();
  if ($('.card-wrapper-js').length) slider3();
  if ($('.grid').length) masonry();
  if ($('.catalog-tovars').length) masonry2();
  if ($('.live-head').length) hideLive();
  if ($('.fotorama').length) fotorama();
  if ($('.product-sorter-link-js').length) popupSorter();
  if ($('.recipes-carousel-main-js').length) slider4();
  if ($('.product-card-view-alert').length) showAlert();
  if ($('.catalog-tovars-title').length) showList();
  if ($('.select-custom').length) select();
  if ($('.modal-sorter-list-item').length) selectActive();
  if ($('.tabs').length) radio();
  if ($('.product-sorter-category-js').length) dropdown();
  if ($('.product-sorter-category-inner-js').length) dropdown2();
  if ($('.progress-cart-wrapper-js').length) sticky();
  if ($('.cart-info-pay-bonuses-link').length) showBonus();
  if ($('.order-payment-item').length) checkPay();
  if ($('.checkbox-item label').length) showPayText();
  if ($('.order-map-switch').length) switchItem();
  if ($('.order-map-list-location-item-js').length) slideLocation();
  if ($('#order-map-list-search-input').length) newAttr();
  if ($('.cart-info-result').length) toggleResult();
  if ($('.order-block-text-points-head').length) togglePoint();
  if ($('.modal-auth .checkbox-item label').length) showInn();
  if ($('.catalog-cards-one-col-center-js').length) slider5();
  if ($('.recipes-carousel-js').length) slider6();
  if ($('.recipe-feedback-button').length) showFeedback();
  if ($('.inspiration-js').length) slider7();
  if ($('.stock-carousel-js').length) slider8();
  if ($('.catalog-cards-wrapper-js').length) slider9();
  if ($('.hamburger').length) hambAction();
  if ($('.mobile-menu-list-item-dropdown').length) showMenu();
  if ($('.cabinet-personal-info-form-link-js').length) showInputGroup();
  if ($('.cabinet-personal-info-form-item .checkbox-item label').length) showPerson();
  if ($('.cabinet-personal-info-form-link-inner-js').length) showInputGroupInner();
  if ($('#modal-info').length) modalInfo();
  if ($('.activity').length) masonry3();
  if ($('.js-modal').length) modalShow();
  if ($('.popup-gallery').length) popupGallery();
  if ($('.cart-info-one-click a').length) showOneClick();
  // if ($('.order-tab-two').length) showCom();
  if ($('#person-inner').length) showСonsignee();
  if ($('.js-order-form-delivery-address').length) selectAddress();
  if ($('.js-order-form-delivery-address-add').length) addNewAddress();
  if ($('.js-subscription-btn').length) showFormSub();
  if ($('.js-shopping-cart-item-wrapper').length) scrollShopCart();
  if ($('.js-header-favourite-list-scroll').length) scrollFavourite();
    if ($('.anchor').length) link();
    if ($('.product-card-teaser-rating-item').length) showActiveTab();
  if ($('.order-map-balloon').length) hideBallon();
  if ($('.activity-feedback-user .product-card-feedback-item-text').length) hideTextFeeedback();
  if ($('.js-order-block-btn-share').length) orderShare();
	if(window.location.hash.indexOf("review") > 0){scrollToReview();}

  $(window).resize(function() {
    if ($('.slider-full-width').length) slider();
    if ($('.catalog-cards-item-carousel-js').length) slider2();
    if ($('.card-wrapper-js').length) slider3();
    if ($('.grid').length) masonry();
    if ($('.catalog-tovars').length) masonry2();
    if ($('.fotorama').length) fotorama();
    if ($('.product-sorter-link-js').length) popupSorter();
    if ($('.catalog-cards-wrapper-js').length) slider4();
    if ($('.progress-cart-wrapper-js').length) sticky();
    if ($('#order-map-list-search-input').length) newAttr();
    if ($('.catalog-cards-one-col-center-js').length) slider5();
    if ($('.recipes-carousel-js').length) slider6();
    if ($('.inspiration-js').length) slider7();
    if ($('.stock-carousel-js').length) slider8();
    if ($('.catalog-cards-wrapper-js').length) slider9();
    if ($('.activity').length) masonry3();
    if ($('.js-shopping-cart-item-wrapper').length) scrollShopCart();
		if ($('.js-header-favourite-list-scroll').length) scrollFavourite();
  });
});

function slider() {
  $('.slider-full-width').owlCarousel({
      nav: false,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 2000,
      loop: true,
      items: 1,
      margin: 40
  });
}

function scrollToReview() {
	var reviewTab = $(document).find('.js-product-page-reviews-tab');
	var reviewItemId = window.location.hash;
	var reviewItem = $(document).find(reviewItemId);
	var headerHeight = $('header.header').height();
	if(reviewTab.length){
		reviewTab.click();
	}
	if(reviewItem.length > 0){
		$('html, body').animate({
			scrollTop: reviewItem.eq(0).offset().top - (headerHeight + 20) + 'px'
		}, 500);
	}

}

function slider2() {
  $('.catalog-cards-item-carousel-js').owlCarousel({
      nav: false,
      items: 1
  });
}

function slider3() {
  $('.card-wrapper-js').owlCarousel({
    nav: true,
    dots: false,
    autoWidth:true,
    margin: 15,
    responsive:{
        0:{
            autoWidth:true,
            margin: 10
        },
        768:{
            items:3,
            margin: 20,
            autoWidth: false
        },
        959:{
            autoWidth:true,
            margin: 15
        }
    }
  });
}

function masonry() {
    var $container = $('.grid');

  if ($(window).width() <= '1159')
  {
    $container.masonry('destroy');
  } else
  {
    $container.imagesLoaded( function() {
      $container.masonry({
        itemSelector: '.grid-item',
        columnWidth: 1
      });
      $container.addClass('loaded');
    });
  }
}

function masonry2() {
  if ($(window).width() <= '767') {
    $('.catalog-tovars').masonry('destroy');
  } else {
    $('.catalog-tovars').masonry({
      columnWidth: 1,
      percentPosition: true
    });
  }
}

function hideLive() {
  $(".live-head").click(function () {
    $.cookie('activity_panel', 'hidden', { expires: 1000, path: '/'});

    $('.live').addClass('live--active');
    $('.layout-wrapper-live').addClass('layout-wrapper-live--modified');
    $('.footer').addClass('footer-full-width');

        var $carousel = $('.owl-carousel');
        $carousel.data('owl.carousel')._invalidated.width = true;
        $carousel.trigger('refresh.owl.carousel');

        var $containerGrid = $('.grid');
        $containerGrid.masonry('layout');
        return false;
    });
    $(".live-button-show").click(function() {
        $.cookie('activity_panel', 'visible', { expires: 1000, path: '/'});

        $('.live').removeClass('live--active');
        $('.layout-wrapper-live').removeClass('layout-wrapper-live--modified');
        $('.footer').removeClass('footer-full-width');

        var $carousel = $('.owl-carousel');
        $carousel.data('owl.carousel')._invalidated.width = true;
        $carousel.trigger('refresh.owl.carousel');

        var $containerGrid = $('.grid');
        $containerGrid.masonry('layout');
        return false;
    });
}

function fotorama() {
    if ($(window).width() <= '767')
    {
        $('.fotorama').fotorama({
            nav: 'dots'
        });
    }
    else
    {
        $('.fotorama').fotorama({
            nav: 'thumbs',
            thumbheight: 70,
            thumbwidth: 70,
            thumbmargin: 20,
            maxwidth: '100%',
            thumbborderwidth: 1,
            thumbfit: 'contain'
        });
    }
}

function  popupSorter() {
  if ($(window).width() <= '767')
  {
    $('.product-sorter-link-modal-catalog-list-js').magnificPopup({
      mainClass: 'product-sorter1',
      items: {
          src: '#modal-catalog-list',
          type: 'inline'
      }
    });    

    $('.product-sorter-modal-sorter-first-js').magnificPopup({
      mainClass: 'product-sorter2',
      items: {
          src: '#modal-sorter-first',
          type: 'inline'
      }
    });

    $('.product-sorter-modal-sorter-first-js').click(function() {
      $('.modal-sorter').addClass('active');
    });    

    $('.product-sorter-link-modal-sorter-last-js').magnificPopup({
      mainClass: 'product-sorter3',
      items: {
          src: '#modal-sorter-last',
          type: 'inline'
      }
    });

    $('.product-sorter-link-modal-sorter-last-js').click(function() {
      $('.modal-sorter').addClass('active');
    });     

    $('.product-sorter-link-modal-catalog-list-js').click(function() {
      $('.modal-catalog-list-inner').addClass('showed');
    });   

    $(".product-sorter-link-js").click(function() {
      $('.mfp-bg').toggleClass('mfp-bg-red');
      $('.mfp-content').toggleClass('mfp-content-top');
    });

    $('.modal-sorter-button').click(function() {
      $.magnificPopup.close();
    });
  }
}

function slider4() {
  $('.recipes-carousel-main-js').owlCarousel({
    nav: true,
    dots: false,
    responsive: {
      0: {
        margin: 15,
        autoWidth: true,
        items: 2
      },
      768: {
        items: 3,
        margin: 15
      },
      959: {
        margin: 15,
        items: 4
      },
      1440: {
        margin: 15,
        items: 5
      }
    }
  });
}

function showAlert() {
  var promoAlerts = $('.product-card-view-alert');
  var timeout = 0;
  $.each(promoAlerts, function(key, alert) {
    timeout += 2000;
    setTimeout(function () {
      $(alert).addClass('product-card-view-alert--active');
    }, timeout);
  });
  $(".product-card-view-alert-close").click(function() {
    $(this).parent('.product-card-view-alert').removeClass('product-card-view-alert--active');
    return false;
  });
}

function showList() {
  $(".catalog-tovars-title").click(function () {
    $(this).parent('.catalog-tovars-item').toggleClass('catalog-tovars-item--active');
    //return false;
  });
}

function select() {
    $('.select-custom').niceSelect();
}

function selectActive() {
  $('.modal-sorter-list-first a').click(function () {
    $('.modal-sorter-list-first .modal-sorter-list-item').not(this).removeClass('modal-sorter-list-item--active');
    $(this).toggleClass('modal-sorter-list-item--active');
    return false;
  });
  $(".modal-sorter-list-three a").click(function() {
    $(".modal-sorter-list-three .modal-sorter-list-item").not(this).removeClass('modal-sorter-list-item--active');
    $(this).toggleClass('modal-sorter-list-item--active');
    return false;
  });
  $(".modal-sorter-list-second a").click(function() {
    $(".modal-sorter-list-second .modal-sorter-list-item").not(this).removeClass('modal-sorter-list-item--active');
    $(this).toggleClass('modal-sorter-list-item--active');
    return false;
  });
}


function radio() {
    if ($(window).width() <= '767') {
        $(".tabs label").on("click", function(event) {
            var tab = $('#tabs').offset().top - 50;
            $("html, body").scrollTop(tab);
        });
    }
}

function dropdown() {
  $('.product-sorter-category-js').click(function () {
    $(this).toggleClass('product-sorter-category--active');
  });
  $('.select-custom').click(function () {
    $('.product-sorter-category').removeClass('product-sorter-category--active');
  });
}

function dropdown2() {
    $('.product-sorter-category-inner-js').click(function() {
        $(this).parent().find('.product-sorter-category').not(this).removeClass('product-sorter-category--active');
        $(this).toggleClass('product-sorter-category--active');
    });
    $(".dropdown-checkbox-item").click(function() {
        $(this).parent().find('.dropdown-checkbox-item').removeClass('dropdown-checkbox-item--active');
        $(this).toggleClass('dropdown-checkbox-item--active');
    });
}

function sticky() {
  $(window).scroll(function () {
    var headerHeight = $('header').outerHeight();

    if ($(this).scrollTop() >= headerHeight) {
      $('.progress-cart-wrapper-js').addClass('stickytop');
      $('.container-main-stickytop').addClass('container-main-stickytop--active');
    }
    else {
      $('.progress-cart-wrapper-js').removeClass('stickytop');
      $('.container-main-stickytop').removeClass('container-main-stickytop--active');
    }

    if ($(window).width() <= '767') {
      var progressHeight = $('.progress-cart-back-xs').outerHeight();
      if ($(this).scrollTop() >= headerHeight + progressHeight) {
        $('.progress-cart-wrapper-js').addClass('stickytop');
        $('.container-main-stickytop').addClass('container-main-stickytop--active');
      }
      else {
        $('.progress-cart-wrapper-js').removeClass('stickytop');
        $('.container-main-stickytop').removeClass('container-main-stickytop--active');
      }
    }
  });
}

function showBonus() {
  $('.cart-info-pay-bonuses-link').click(function () {
    $(this).toggleClass('cart-info-pay-bonuses-link--active');
    $('.cart-info-pay-bonuses').slideToggle();
  });

  $('.cart-info-pay-bonuses-close').click(function () {
    $('.cart-info-pay-bonuses-link').toggleClass('cart-info-pay-bonuses-link--active');
    $('.cart-info-pay-bonuses').slideUp();
  });

  $('.cart-info-input-button--js').click(function () {
    /*$('.cart-info-pay-bonuses-link').hide();
    $('.cart-info-text--hidden').show();
    $('.cart-info-pay-bonuses').hide();*/
  });
}

if ($('.js-input-tel').length) {
  $('.js-input-tel').each(function() {
    
    var $this = $(this)
    var val = $this.val()
    
    if ($.trim(val).length === 0) {
      $this.val(7)
    }
    
    $(this).inputmask({
      'mask': '+9 (999) 999-99-99'
      })
    
  })

  $(document).on('keyup', '.js-input-tel', function(e){
    var $this = $(this)
    var val = $this.inputmask('unmaskedvalue')
    
    if (!$.trim(val).length) {
      $this.val(7)
    }
  })
}

function checkPay() {
  $('.order-payment-item').click(function () {
    $('.order-payment-item').removeClass('order-payment-item--active');
    $(this).toggleClass('order-payment-item--active');
		updateCartInfo('payment', $(this).data('id'));
    return false
  });
}

$(window).on('load resize ready', function () {
    if ($(window).width() <= '767') {
        $(".order-map-balloon-content").mCustomScrollbar('destroy');
        $(".order-map-list-location").mCustomScrollbar('destroy');
    }
    else {
        $(".order-map-balloon-content").mCustomScrollbar();
        $(".order-map-list-location").mCustomScrollbar({
            updateOnContentResize: true
        });
    }
});


function showPayText() {
  $(".js-checkbox-item-person label").on("click", function () {
    var inputCheck = $('.js-checkbox-item-person input[type="checkbox"]').prop("checked");
    if (inputCheck == false) {
      $('.order-payment-item-text--hidden').addClass('order-payment-item-text--show');
      $('.order-payment-item').addClass('order-payment-item-text--hidden');
      $('.order-payment-item-comment').addClass('order-payment-item-comment--hide');
			//$('.js-order-info-payment-ctn').hide();
    } else if (inputCheck == true) {
      $('.order-payment-item-text--hidden').removeClass('order-payment-item-text--show');
      $('.order-payment-item').removeClass('order-payment-item-text--hidden');
      $('.order-payment-item-comment').removeClass('order-payment-item-comment--hide');
			//$('.js-order-info-payment-ctn').show();
    }
    ;
  });
}

function switchItem() {
  $('.order-map-switch .order-map-switch-item').click(function () {
    $('.order-map-switch-item').removeClass('order-map-switch-item--active');
    $(this).toggleClass('order-map-switch-item--active');
  });
  $('.order-map-switch-location').click(function() {
    $('.order-map-location').removeClass('order-map-location--hidden');
    $('.order-map-list').removeClass('order-map-list--active');
  });
  $('.order-map-switch-list').click(function() {
    $('.order-map-location').addClass('order-map-location--hidden');
    $('.order-map-list').addClass('order-map-list--active');
  });
}

function slideLocation() {
    $('.order-map-list-location-item-js').click(function() {
        $('.order-map-list-location-item').removeClass('order-map-list-location-item--active');
        $(this).toggleClass('order-map-list-location-item--active');
    });
}

function newAttr() {
  var el = document.getElementById("order-map-list-search-input");
  if ($(window).width() <= '767') {
    el.placeholder = "Начните вводить адрес";
  }
  else {
    el.placeholder = "Начните вводить адрес или станцию метро";
  }
}

function toggleResult() {
  $('.cart-info-result .cart-info-title').click(function () {
    $(this).toggleClass('cart-info-title--active');
    $('.cart-info-result .cart-info-top').toggleClass('cart-info-top--active');
    $('.cart-info-result .cart-info-middle').toggleClass('cart-info-middle--active');
  });
}

function togglePoint() {
  $('.order-block-text-points-head').click(function () {
    $(this).toggleClass('order-block-text-points-head--active');
    $(this).parent().toggleClass('order-block-text-points-item--active');
  });
}

function showInn() {
  $(".modal-auth .checkbox-item label").on("click", function () {
    var inputCheck = $('.modal-auth .checkbox-item input[type="checkbox"]').prop("checked");
    if (inputCheck == false) {
      $('.modal-auth-form-item-hidden').addClass('modal-auth-form-item-hidden--show');
    } else if (inputCheck == true) {
      $('.modal-auth-form-item-hidden').removeClass('modal-auth-form-item-hidden--show');
    }
    ;
  });
}

function slider5() {
    $('.catalog-cards-one-col-center-js').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:2,
                margin: 0
            },
            768:{
                items:3,
                margin: 20
            },
            959:{
                margin: 20,
                items: 4
            }
        }
    });
}

function slider6() {
    $('.recipes-carousel-js').owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        responsive:{
            0:{
                autoWidth: true
            },
            768:{
                items:3
            },
            959:{
                items: 4
            }
        }
    });
}

function showFeedback() {
  $('.recipe-feedback-button').click(function () {
    $(this).toggleClass('recipe-feedback-button--active');
    $('.product-card-feedback').toggleClass('product-card-feedback--active');
  });
}

function slider7() {
    $('.inspiration-js').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            0:{
                margin: 15,
                autoWidth: true
            },
            768:{
                margin: 15,
                items:3
            },
            959:{
                margin: 15,
                items: 4
            },
            1440:{
                margin: 15,
                autoWidth: true
            }
        }
    });
}

function slider8() {
    $('.stock-carousel-js').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            0:{
                margin: 15,
                autoWidth: true,
                nav: true,
                items: 2
            },
            768:{
                margin: 15,
                items:3
            },
            959:{
                margin: 15,
                items: 4
            }
        }
    });
}

function slider9() {
    $('.catalog-cards-wrapper-js').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:2,
                margin: 0
            },
            768:{
                items:3,
                margin: 20,
                autoWidth: false
            },
            959:{
                items: 4,
                margin: 15
            },
            1440:{
                margin: 15,
                items:5
            }
        }
    });
}

function hambAction() {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('body').toggleClass('body-fixed');
    $('.mobile-menu-overlay').toggleClass('mobile-menu-overlay--active');
  });
  $('.mobile-menu-overlay').click(function() {
    $('.hamburger').removeClass('is-active');
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('body').removeClass('body-fixed');
    $('.mobile-menu-overlay').removeClass('mobile-menu-overlay--active');
  });
}

function showMenu() {
  $('.mobile-menu-list-item-dropdown').click(function () {
    $(this).toggleClass('mobile-menu-list-item-dropdown--active');
    $('.mobile-menu-dropdown-list').toggleClass('mobile-menu-dropdown-list--active');
  });
}



$(document).on('click', '.cabinet-aside-navi-mobile-item-current', function(e){
  e.preventDefault()
    $(this).toggleClass('cabinet-aside-navi-mobile-item-current--active');
    $('.cabinet-aside-navi-mobile-dropdown').toggleClass('cabinet-aside-navi-mobile-dropdown--active');
})

function showInputGroup() {

}


function showPerson() {
    $(".cabinet-personal-info-form-item .checkbox-item label").on("click", function() {
        var inputCheck = $('.checkbox-item input[type="checkbox"]').prop("checked");
        if (inputCheck == false) {
            $(this).parents('.cabinet-personal-info-item-js').find('.cabinet-personal-info-form-hidden').addClass('cabinet-personal-info-form-hidden--active');
        } else if(inputCheck == true){
            $(this).parents('.cabinet-personal-info-item-js').find('.cabinet-personal-info-form-hidden').removeClass('cabinet-personal-info-form-hidden--active');
        };
    });
    $('.cabinet-personal-info-form-btn-cancel-js').click(function() {
        $('.checkbox-item input[type="checkbox"]').prop("checked", false);
    });
}

function showInputGroupInner() {
    $('.cabinet-personal-info-form-link-inner-js').click(function() {
        var $this = $(this)
        var addText = $this.data('add-content')
        var hideText = $this.data('hide-content')
        var iconSrc = $this.data('icon-url')
      
        $this.toggleClass('active');
        $this.parent().find('.cabinet-personal-info-form-hidden-inner')
          .toggleClass('cabinet-personal-info-form-hidden-inner--active');
      
      if ($this.hasClass('active')) {
        $this.html('<div class="circle-minus"></div> ' + hideText )
      } else {
        $this.html('<img src="' + iconSrc + '" alt=""> ' + addText )
      }
    });
    $('.cabinet-personal-info-form-btn-cancel-inner-js').click(function() {
        $(this).parents('.cabinet-personal-info-form-input-group-js').find('.cabinet-personal-info-form-link-inner-js').removeClass('cabinet-personal-info-form-link-inner-js--active');
        $(this).parents('.cabinet-personal-info-form-input-group-js').find('.cabinet-personal-info-form-hidden-inner').removeClass('cabinet-personal-info-form-hidden-inner--active');
    });
}


var is_safari = navigator.userAgent.indexOf("Safari") > -1;
if (is_safari) {
    $('.inspiration-js').addClass('inspiration-js-safari');
    $('.inspiration-js-safari').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            0:{
                margin: 15,
                items:1,
                autoWidth: true
            },
            768:{
                margin: 15,
                items:3
            },
            959:{
                margin: 15,
                items: 4
            },
            1440:{
                margin: 15,
                items: 4
            }
        }
    });
}

function modalInfo() {
  $(".js-modal-delivery").on("click", function() {
    $('.modal-info-tab-paymnet').removeClass('modal-info-tab--active');
    $('.modal-info-tab-warranty').removeClass('modal-info-tab--active');
    $('.modal-info-navi-item').removeClass('modal-info-navi-item--active');
    $('.modal-info-tab').removeClass('modal-info-tab--active');

    $('.modal-info-navi-item-delivery').addClass('modal-info-navi-item--active');
    $('.modal-info-tab-delivery').addClass('modal-info-tab--active');
  });    
  $(".js-modal-warranty").on("click", function() {
    $('.modal-info-tab-delivery').removeClass('modal-info-tab--active');
    $('.modal-info-tab-paymnet').removeClass('modal-info-tab--active');
    $('.modal-info-navi-item').removeClass('modal-info-navi-item--active');
    $('.modal-info-tab').removeClass('modal-info-tab--active');

    $('.modal-info-tab-warranty').addClass('modal-info-tab--active');
    $('.modal-info-navi-item-warranty').addClass('modal-info-navi-item--active');
  });  
  $(".js-modal-payment").on("click", function() {
    $('.modal-info-tab-delivery').removeClass('modal-info-tab--active');
    $('.modal-info-tab-warranty').removeClass('modal-info-tab--active');
    $('.modal-info-navi-item').removeClass('modal-info-navi-item--active');
    $('.modal-info-tab').removeClass('modal-info-tab--active');

    $('.modal-info-tab-payment').addClass('modal-info-tab--active');
    $('.modal-info-navi-item-payment').addClass('modal-info-navi-item--active');
  });

  $(".modal-info-navi-item-delivery").on("click", function() {
    $('.modal-info-tab-payment').removeClass('modal-info-tab--active');
    $('.modal-info-tab-warranty').removeClass('modal-info-tab--active');
    $('.modal-info-navi-item').removeClass('modal-info-navi-item--active');
    $('.modal-info-tab').removeClass('modal-info-tab--active');

    $('.modal-info-navi-item-delivery').addClass('modal-info-navi-item--active');
    $('.modal-info-tab-delivery').addClass('modal-info-tab--active');
  });  
  $(".modal-info-navi-item-payment").on("click", function() {
    $('.modal-info-tab-warranty').removeClass('modal-info-tab--active');
    $('.modal-info-tab-delivery').removeClass('modal-info-tab--active');
    $('.modal-info-tab').removeClass('modal-info-tab--active');
    $('.modal-info-navi-item').removeClass('modal-info-navi-item--active');

    $('.modal-info-navi-item-payment').addClass('modal-info-navi-item--active');
    $('.modal-info-tab-payment').addClass('modal-info-tab--active');
  });  
  $(".modal-info-navi-item-warranty").on("click", function() {
    $('.modal-info-tab-delivery').removeClass('modal-info-tab--active');
    $('.modal-info-tab-payment').removeClass('modal-info-tab--active');
    $('.modal-info-navi-item').removeClass('modal-info-navi-item--active');
    $('.modal-info-tab').removeClass('modal-info-tab--active');
    
    $('.modal-info-navi-item-warranty').addClass('modal-info-navi-item--active');
    $('.modal-info-tab-warranty').addClass('modal-info-tab--active');

  });
}

function masonry3() {
    var $container = $('.activity');
    $container.imagesLoaded( function() {
        $container.masonry({
            itemSelector: '.activity-item',
            percentPosition: true,
        });
        $container.addClass('loaded');
    });
}

$(".order-tab-one").bind('click', function () {
  setTimeout(function(){
    if (typeof myMap !== 'undefined') {
      myMap.container.fitToViewport();
    }
  }, 100);
});

$(".order-tab-two").bind('click', function () {
  setTimeout(function(){
    if (typeof myMap2 !== 'undefined') {
      myMap2.container.fitToViewport();
    }
  }, 100);
});

$('.order-map-list-location-item-link-js').click(function() {
    $(this).parent().find('.order-map-list-location-item-link-js').toggleClass('order-map-list-location-item-link-js--active');
    $(this).parent().find('.order-map-list-location-teaser').toggleClass('order-map-list-location-teaser--active');
});


$('.order-tab-one').click(function() {
    $('.order-tab').removeClass('active');
    $('.order-tab-one').addClass('active');
    $('.order-map-location').removeClass('order-map-location--hidden');
});

$('.order-tab-two').click(function() {
    $('.order-tab').removeClass('active');
    $('.order-tab-two').addClass('active');
});

function modalShow() {
  $('.js-modal').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  }); 
}

function popupGallery() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
}

function showOneClick() {
  $('.cart-info-one-click a').click(function() {
    $('.cart-info-one-click-container').toggleClass('showed');
  });  
  $('.cart-info-one-click-container__close').click(function() {
    $('.cart-info-one-click-container').removeClass('showed');
  });
}

// function showCom() {
//   var tabTwo = $("#order-tab-two");
//   if (tabTwo.attr('checked') == 'checked') {
//     $('.order-payment-item-comment').addClass('order-payment-item-comment--show');
//   }
//   tabTwo.on("click", function() {
//     $('.order-payment-item-comment').addClass('order-payment-item-comment--show');
//   });
//   $("#order-tab-one").on("click", function() {
//     $('.order-payment-item-comment').removeClass('order-payment-item-comment--show');
//   });
// }

function showСonsignee() {
  $(".js-checkbox-item-person-inner label").on("click", function () {
    var inputCheck = $('.js-checkbox-item-person-inner input[type="checkbox"]').prop("checked");
    if (inputCheck == false) {
      $('.order-form-delivery-item-group').addClass('order-form-delivery-item-group--show');
    } else if (inputCheck == true) {
      $('.order-form-delivery-item-group').removeClass('order-form-delivery-item-group--show');
    };
    
    if ($(document).find('.js-input-order-delivery-phone').hasClass('error')) {
      $(document).find('.js-input-order-delivery-phone').removeClass('error')
    }

    if ($(document).find('#input-tel').hasClass('error')) {
      $(document).find('#input-tel').removeClass('error')
    }
    
    if ($('.js-order-button').hasClass('disabled')) {
      $('.js-order-button').removeClass('disabled')
    }
  });
}

function selectAddress() {
  $('.js-order-form-delivery-address').click(function() {
    $('.js-order-form-delivery-address').removeClass('selected');
    $(this).addClass('selected');
  });
}

function addNewAddress() {
  $('.js-order-form-delivery-address-add').click(function() {
    $('.order-form-delivery-address-link-add').hide();
    $('.order-form-delivery-address-new-line').toggleClass('order-form-delivery-address-new-line--hide');
    $('#delivery-address').val('');
  });
}

function showFormSub() {
  $('.js-subscription-btn').click(function() {
    $(this).hide();
    $('.subscription-form').toggleClass('show');
  });
}

function scrollShopCart() {
  $(".js-shopping-cart-item-wrapper").mCustomScrollbar({
      updateOnContentResize: true
  });
}

function scrollFavourite() {
	$('.js-header-favourite-list-scroll').mCustomScrollbar({
		updateOnContentResize: true
	});
}

function showActiveTab() {
    $('.js-link-to-feedback-tab').click(function() {
        $('#tabtwo').prop("checked", true);
    });

    $('.js-link-to-recipe-tab').click(function() {
        $('#tabthree').prop("checked", true);
    });
}


function link (){
    $('a.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
        return false;
    });
}

function hideBallon (){
    $('.order-map-balloon-close').click(function(){
      $('.order-map-balloon').hide();
    });
}

function hideTextFeeedback (){ 
  $('.activity-feedback-user .product-card-feedback-item-text').each(function(){ 
  if($(this).height() > 120) 
    $(this).addClass('product-card-feedback-item-text_hide'); 
  else 
    $(this).removeClass('product-card-feedback-item-text_hide'); 
  }); 
}

function orderShare (){ 
  $('.js-order-block-btn-share').click(function(event) {
    $(this).toggleClass('active');
    event.stopPropagation();
    event.preventDefault();
    $('.order-share').toggleClass('show');
  });
}

/**
 @desc: toggle favorite product
 */

var manageFavouriteStatus = {
  handleFav: function(el) {
    this.triggerFavActions( el)
  },
  triggerFavActions: function(el) {
    var action = el.data('action')
    var id = el.data('id')
		var otherElements = $(document).find('.js-fav-btn[data-id="'+id+'"]');
    var favouriteTotal = $(document).find('.js-header-favourite-num')
    var favouriteHeaderList = $(document).find('.js-header-favourite-list')
		var $productListCtn = $(document).find('.catalog-cards');
    var currentPage = $(document).find('.pagination-item--active').index() +1;
    var token = $('.user-token').data('token')
    var self = this
    var tokenData = ''
		var data = {
    	'page': ''
			};
    if (token.length) {
      tokenData = {'token': token}
    }
    if(currentPage < 2){
    	currentPage = '';
		}
		if (window.location.pathname.match(/\/favourites/)) {
			data.page = currentPage
		}
		$.ajax({
      type: 'POST',
      url: '/api/catalog/' + id + '/favourite',
			data: data,
			'headers': tokenData
    }).done(function(res) {
    	if (res.success && res.success === true) {
        if (action === 'add') {
          self.addToFav(otherElements, favouriteTotal, favouriteHeaderList)
        } else if (action === 'remove') {
          self.removeFromFav(otherElements, favouriteTotal, favouriteHeaderList)
          // скрываем товар при удалении, если находимся на странице со списком избранного
					if (window.location.pathname.match(/\/favourites/)) {
						$productListCtn.html(self.buildFavouriteContent(res.data.catalogs))
						self.changeFavouritePage(res);
            el.closest('.catalog-cards-item').fadeOut(200);
          }
        }
				self.changeHeaderList(res.data.catalogs)
      } else {
      }
    }).fail(function(err){
      console.log(err)
    })
  },
  addToFav: function(el, total, list) {
    el.addClass('catalog-cards-label-favorite--active')
    el.data('action', 'remove')
    var totalNum = parseInt(total.html()) + 1
		var productCardButton = el.parents('.js-product-item-ctn').find('.js-fav-text-button');
    if(productCardButton.length){
			productCardButton.html('Товар в извранном');
		}
    total.html(totalNum)
    total.show(0)
  }, 
  removeFromFav: function(el, total, list) {
    el.removeClass('catalog-cards-label-favorite--active')
    el.data('action', 'add')
    var totalNum = parseInt(total.html() - 1)
		var productCardButton = el.parents('.js-product-item-ctn').find('.js-fav-text-button');
		if(productCardButton.length){
			productCardButton.html('добавить в избранное');
		}
    total.html(totalNum)
    if (totalNum === 0) {
      total.hide(0)
    }
  },
	changeHeaderList: function(data){
  	var measureSymbol = '';
		var $favouriteHeaderListItems = $(document).find('.js-header-favourite-list-items');
		$favouriteHeaderListItems.html('');
		for (key in data) {
			if (data.hasOwnProperty(key)) {
				if(data[key].measure.symbol === null){
					measureSymbol = ''
				}else{
					measureSymbol = '/'+data[key].measure.symbol;
				}
				var $favouriteItem = ''+
					'<div class="catalogFav" data-product-id="'+data[key].id+'" data-id="'+data[key].favouriteId+'"></div>'+
					'<a href="/product/'+data[key].slug+'" class="favorite-dropdown-item">\n' +
						'<div class="favorite-dropdown-item-img">\n';
						if(data[key].image !== undefined){
							$favouriteItem += ''+
								'<img src="'+data[key].image+'" alt="">\n'
						}else{
							$favouriteItem += ''+
								'<img src="http://wildfish.kr.digital/app/img/default_catalog.png" alt="">\n'
						}
					$favouriteItem += ''+
						'</div>\n' +
						'<div class="favorite-dropdown-item-text">\n' +
							'<div class="favorite-dropdown-item-text-title">'+data[key].title+'</div>\n' +
							'<div class="favorite-dropdown-item-text-cost">'+data[key].price+' р'+measureSymbol+'</div>\n' +
						'</div>\n' +
					'</a>';
				$favouriteHeaderListItems.append($favouriteItem);
			}
		}
	},
	changeFavouritePage: function(response){
		var pageNavigation = $(document).find('.pagination');
		var pageNavigationItem = pageNavigation.find('.pagination-item');
		var categoryList = $(document).find('#modal-catalog-list .catalog-list');
		var categoriesData = response.data.categories;
		var totalProducts = $(document).find('.js-catalog-products-num-total');
		var currentCount = $(document).find('.js-catalog-products-num-current');
		var counterData = response.meta;
		var BeforeCount = parseInt(((counterData.page - 1) * counterData.limit));
		var NowCount = BeforeCount;
		if(response.data.catalogs.length) {
			NowCount = BeforeCount + response.data.catalogs.length;
		}
		totalProducts.html(counterData.total);
		if(counterData.total == 0){
			currentCount.html('0');
		}else {
			currentCount.html((+BeforeCount + 1) + '-' + NowCount);
		}
		categoryList.html('');
		for (key in categoriesData) {
			if (categoriesData.hasOwnProperty(key)) {
				var categoryItem =''+
					'<li>\n' +
					'<a class="catalog-list-item" href="/category/'+categoriesData[key].slug+'">'+categoriesData[key].title+'</a>\n' +
					'</li>\n';
				categoryList.append(categoryItem);
			}
		}
		if ($('.catalog-cards-item:visible').length < 1) {

			if(counterData.pages === 0){
				$('.catalog-cards').html('<p>Вы еще ничего не добавили...</p>')
			}else{
				var redirPage = counterData.page - 1;
				if(redirPage === 1){
					$(document).find('.js-product-sorter-sum').html('');
					window.location.href = '/favourites'
				}else{
					$(document).find('.js-product-sorter-sum').html('');
					window.location.href = '/favourites?page=' + redirPage
				}
			}

		}
		if(counterData.pages < pageNavigationItem.length){
			if(pageNavigationItem.length > 2){
				pageNavigationItem.eq(counterData.pages).remove();
			}else{
				pageNavigation.remove();
			}
		}
	},
	buildFavouriteContent: function(items) {
		return items.map(function(item) {

			var oldPrice = ''
			var measureSymbol = ''
			var url = item.defaultFile

			var inFavouritesCssClass = ''
			var inFavouritesTitle = 'Добавить в избранное'
			var inFavouritesAction = 'add'
			var badges = ''
			var catalogButtonClass = ''
			var catalogCount = ''
			var catalogDiscussed = ''
			var weighedItemTooltip = '';
			var weightGradation = '';

			if (item.countInCart > 0) {
				catalogButtonClass = 'catalog-cards-button-buy-active'
				catalogCount = '+' + item.countInCart
			}

			if (item.inFavourites) {
				inFavouritesCssClass = 'catalog-cards-label-favorite--active'
				inFavouritesTitle = 'Товар в избранном'
				inFavouritesAction = 'remove'
			}

			if (item.image) {
				url = item.image
			}

			if (item.measure && item.measure.symbol) {
				measureSymbol = '/' + item.measure.symbol
			}

			if (item.oldPrice && item.oldPrice > 0) {
				oldPrice = '<div class="catalog-cards-cost catalog-cards-cost-old">' + item.oldPrice +
					'<span> р' + measureSymbol +'</span>' +
					'</div>'
			}

			if (item.badges && item.badges.length) {
				badges = item.badges.slice(0, 1).map(function(item){
					return '<span class="catalog-cards-label catalog-cards-label-' + item.slug + '"> ' + item.title + ' </span>'
				})
			}

			if (item.discussed) {
				catalogDiscussed = '<span class="catalog-cards-comment-fire"><span class="icon-icon-fire"></span></span>'
			}
			var content = '<div class="catalog-cards-item js-product-item-ctn">'+
				'<div class="product-id" data-id="' + item.id + '" data-remnants="' + item.remnants + '"></div>';
			if(item.weighted) {
				if(item.measureGradation){
					weightGradation = item.measureGradation;
				}else{
					weightGradation = item.measureValue * 1000;
				}
				weighedItemTooltip = '<div class="catalog-cards-button__tooltip">В корзине <br/><span class="js-catalog-item-weight-tooltip">'+ item.weightGInCart / 1000 +'</span> кг</div>';
				content += '<div class="product-weight" data-gradation-g="' + item.measureGradation + '" data-weight-g="' + weightGradation + '"></div>'
			}
			content +=  '<a href="/product/' + item.slug + '" >' +
				'<div class="catalog-cards-image">' +
				'<img src="' + url + '" alt="' +item.title + '" />' +
				'</div>' +
				'<div class="catalog-cards-teaser">' +
				'<div class="catalog-cards-comment">' + catalogDiscussed  +
				'<span class="catalog-cards-comment-counter">' +
				parseInt(item.activeReviewsQuantity) +
				'</span>' +
				'</div>' +
				'<div class="catalog-cards-title">' + item.title + '</div>' +
				'<div class="catalog-cards-weight">' + item.measureValue + measureSymbol + '</div>' + oldPrice +
				'<div class="catalog-cards-cost">' + item.price + '<span> р' + measureSymbol +'</span></div>' +
				'</div>' +
				'<div class="catalog-cards-label-list">' + badges +
				'<span class="js-fav-btn catalog-cards-label catalog-cards-label-favorite ' + inFavouritesCssClass + '"' +
				' title="' + inFavouritesTitle + '" data-action="' + inFavouritesAction + '" data-id="'+ item.id + '">' +
				'<span class="icon-icon-favorite"></span>' +
				'</span>' +
				'</div>' +
				'</a>' +
				'<div class="catalog-cards-button-wrapper">' +
				'<div class="cart-item-data" data-count="' +
				item.countInCart +
				'" data-weight-g="' +
				item.weightGInCart+ '"></div>' +
				'<a href="" class="catalog-cards-button-buy js-catalog-item-buy ' + catalogButtonClass +'">' +
				'<span class="icon-icon-shopping-cart-inner"></span>' +
				'<span class="catalog-cards-button-buy-counter js-catalog-item-counter">' + catalogCount +'</span>' +
				'</a>' +
				weighedItemTooltip +
				'</div>' +
				'</div>'
			return content

		})
	}
}


$(document).on('click', '.js-fav-btn', function(e){
  e.preventDefault();
  e.stopPropagation();
  manageFavouriteStatus.handleFav($(this))
})

$(document).on('click', '.js-fav-text-button', function () {
	$(this).parents('.js-product-item-ctn').find('.js-fav-btn').click();
})

$(document).on('click', '.js-recipe-feedback-more', function(e) {
  e.preventDefault()

  var reviewEntity = $('.js-request-entity').data('entity')
  var reviewEntityId = $('.js-request-entity-id').data('entity-id')

  var $el = $(this),
    data = {
      page: parseInt($el.data("page")) || 1,
      limit: $el.data("limit") || 10
    };
  
  data.page++;
  if ($el.hasClass("disabled")) {
    return false;
  }
  $el.html('Загрузка').addClass("disabled");
  $el.data("page", data.page);
  $.ajax({
    context: $el,
    data: data,
    dataType: "json",
    type: "GET",
    url: "/api/" + reviewEntity + "/" + reviewEntityId + "/reviews"
  }).done(function (response) {
    if (response && response.success) {

      var data = response.data, review;
      for (var i in data.items) {
        if (data.items.hasOwnProperty(i)) {
          review = data.items[i];

          var reviewHtmlImages = '<div class="product-card-feedback-item-text-gallery fancybox-js">';
          for (var j in review.files) {
            var reviewFile = review.files[i];
            if (reviewFile.fileType != undefined && reviewFile.fileType.match(/image/)) {
              reviewHtmlImages +=
                '<a data-fancybox="group" href="' + reviewFile.image + '">' +
                '<img src="' + reviewFile.thumb + '" alt="">' +
                '</a>';
            }
          }
          reviewHtmlImages += '</div>';

          var reviewHtml =
            '<div class="product-card-feedback-item">' +
            '<div class="product-card-feedback-item-head">' +
            '<div class="product-card-feedback-item-user">' +
            '<img src="' + review.user.image + '" alt="">' +
            '</div>' +
            '<div class="product-card-feedback-item-info">' +
            '<div class="product-card-feedback-item-info-date">' +
            '<span>' + review.dateCreated + '</span>' +
            '<div class="product-card-feedback-item-rating">' +
            '<span class="icon-icon-star icon-icon-star--active"></span>' +
            '<span class="icon-icon-star icon-icon-star--active"></span>' +
            '<span class="icon-icon-star icon-icon-star--active"></span>' +
            '<span class="icon-icon-star"></span>' +
            '<span class="icon-icon-star"></span>' +
            '</div>' +
            '</div>' +
            '<div class="product-card-feedback-item-info-name">' + review.user.fio + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="product-card-feedback-item-text">\n' +
            review.text +
            reviewHtmlImages +
            '</div>' +
            '</div>';

          $("#reviews-list").append(reviewHtml);
        }
      }

      if (false === data.hasMore) {
        this.hide()
      }

    }
  }).fail(function (jqXHR, textStatus) {
    console.log("Reviews request failed: " + textStatus);
  }).always(function(){
    $el.removeClass("disabled").html("Показать еще отзывы");
  });
  
  
})

$(document).on('keyup', 'input.error', function(e){
  $(this).removeClass('error')
})

$(document).on('click', '.js-feedback-redirect', function(e){
  
  var url = $(this).data('redirect-url')
  history.pushState(null, null, url);
  
})

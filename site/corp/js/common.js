//галерея на детальной странице
$(function() {
    mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
        preloadImages: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

$(window).on('ready load resize', function () {
    $(document).on('click', '.r-tabs-anchor', function(e) {
        e.preventDefault();
        mySwiper = new Swiper('.swiper-container');
        mySwiper.update();
    });
});

// слайдер стоимости недвижимости в форме
$(function() {
    var $range = $(".js-cost-object"),
        $result = $(".amount-cost");

    var track = function (data) {
        $result.html(data.from + ' ₽');
    };

    $range.ionRangeSlider({
        type: "single",
        min: 0,
        max: 10000000,
        from: 2000000,
        step: 100000,
        hide_min_max: true,
        hide_from_to: true,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track
    });
});

// слайдер требуемая сумма недвижимости в форме
$(function() {
    var $range = $(".js-search-cost-object"),
        $result = $(".amount-search-cost");

    var track = function (data) {
        $result.html(data.from + ' ₽');
    };

    $range.ionRangeSlider({
        type: "single",
        min: 0,
        max: 10000000,
        from: 1500000,
        step: 100000,
        hide_min_max: true,
        hide_from_to: true,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track
    });
});


// слайдер ежемесячного доходв в форме
$(function() {
    var $range = $(".js-profit"),
        $result = $(".amount-profit");

    var track = function (data) {
        $result.html(data.from + ' ₽');
    };

    $range.ionRangeSlider({
        type: "single",
        min: 0,
        max: 1000000,
        from: 150000,
        step: 10000,
        hide_min_max: true,
        hide_from_to: true,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track
    });
});

// слайдер времени работы
$(function() {
    var $range = $(".js-time-work"),
        $result = $(".amount-time-work");

    var track = function (data) {
        $result.html(data.from + ' лет');
    };

    $range.ionRangeSlider({
        type: "single",
        min: 0,
        max: 50,
        from: 5,
        step: 1,
        hide_min_max: true,
        hide_from_to: true,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track
    });
});

// маска для телефона
$(function() {
    if ($(document).find('.js-mask-tel').length) {
        var selector = document.getElementsByClassName("input-mask");

        var im = new Inputmask({"mask": "+7 (999) 999-99-99"});
        im.mask(selector);
    }
});

//слайдер новостей
$(window).on('ready load resize', function () {
    if ($(document).find('.js-news-carousel').length) {
        var $newsCarousel = $('.js-news-carousel');
        var newsItem = $('.news-main__item-shadow').length;

        if (newsItem > 1) {
            $newsCarousel.owlCarousel({
                nav: true,
                dots: true,
                autoWidth: true,
                navText: ["<span>asd</span>","<span>ads</span>"]
            });
        } else {
            $newsCarousel.trigger('destroy.owl.carousel');
        }
    }
});

//fancybox модальное окно оставить заявку
$(function() {
    // Step 1: Create jQuery plugin
// ============================

    $.fn.fancyMorph = function( opts ) {

        var Morphing = function( $btn, opts ) {
            var self = this;

            self.opts = $.extend({
                animationEffect : false,
                infobar    : false,
                buttons    : ['close'],
                smallBtn   : true,
                touch      : false,
                baseClass  : 'fancybox-morphing',
                afterClose : function() {
                    self.close();
                }
            }, opts);

            self.init( $btn );
        };

        Morphing.prototype.init = function( $btn ) {
            var self = this;

            self.$btn = $btn.addClass('morphing-btn');

            self.$clone = $('<div class="morphing-btn-clone" />')
                .hide()
                .insertAfter( $btn );

            // Add wrapping element and set initial width used for positioning
            $btn.wrap( '<span class="morphing-btn-wrap"></span>' ).on('click', function(e) {
                e.preventDefault();

                self.start();
            });

        };

        Morphing.prototype.start = function() {
            var self = this;

            if ( self.$btn.hasClass('morphing-btn_circle') ) {
                return;
            }

            // Set initial width, because it is not possible to start CSS transition from "auto"
            self.$btn.width( self.$btn.width() ).parent().width( self.$btn.outerWidth() );

            self.$btn.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {

                if ( e.originalEvent.propertyName === 'width' ) {
                    self.$btn.off('.fm');

                    self.animateBg();
                }

            }).addClass('morphing-btn_circle');

        };

        Morphing.prototype.animateBg = function() {
            var self = this;

            self.scaleBg();

            self.$clone.show();

            // Trigger repaint
            self.$clone[0].offsetHeight;

            self.$clone.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
                self.$clone.off('.fm');

                self.complete();

            }).addClass('morphing-btn-clone_visible');
        };

        Morphing.prototype.scaleBg = function() {
            var self = this;

            var $clone = self.$clone;
            var scale  = self.getScale();
            var $btn   = self.$btn;
            var pos    = $btn.offset();

            $clone.css({
                top       : pos.top  + $btn.outerHeight() * 0.5 - ( $btn.outerHeight() * scale * 0.5 ) - $(window).scrollTop(),
                left      : pos.left + $btn.outerWidth()  * 0.5 - ( $btn.outerWidth()  * scale * 0.5 ) - $(window).scrollLeft(),
                width     : $btn.outerWidth()  * scale,
                height    : $btn.outerHeight() * scale,
                transform : 'scale(' + ( 1 / scale ) + ')'
            });
        };

        Morphing.prototype.getScale = function() {
            var $btn    = this.$btn,
                radius  = $btn.outerWidth() * 0.5,
                left    = $btn.offset().left + radius - $(window).scrollLeft(),
                top     = $btn.offset().top  + radius - $(window).scrollTop(),
                windowW = $(window).width(),
                windowH = $(window).height();

            var maxDistHor  = ( left > windowW / 2 ) ? left : ( windowW - left ),
                maxDistVert = ( top > windowH / 2 )  ? top  : ( windowH - top );

            return Math.ceil(Math.sqrt( Math.pow( maxDistHor, 2 ) + Math.pow( maxDistVert, 2 ) ) / radius );
        };

        Morphing.prototype.complete = function() {
            var self = this;
            var $btn = self.$btn;

            $.fancybox.open({ src : $btn.data('src') || $btn.attr('href') }, self.opts);

            $(window).on('resize.fm', function() {
                //self.scaleBg();
            });
        };

        Morphing.prototype.close = function() {
            var self   = this;
            var $clone = self.$clone;

            self.scaleBg();

            $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                $clone.hide();

                self.$btn.removeClass('morphing-btn_circle');
            });

            $clone.removeClass('morphing-btn-clone_visible');

            $(window).off('resize.fm');
        };

        // Init
        this.each(function() {
            var $this = $(this);

            if ( !$this.data("morphing") ) {
                $this.data( "morphing", new Morphing( $this, opts ) );
            }

        });

        return this;
    };


// Step 2: Start using it!
// =======================

    $("[data-morphing]").fancyMorph({
        hash : 'morphing'
    });

});

//модальное окно оставить заявку
$(function() {
    $('.js-modal-calc').fancybox({
        src  : '#morphing-content',
        type : 'inline',
        baseClass  : 'fancybox-ctn'
    });
});

//акордеон подкаты
$(function() {
    $(document).on('click', '.js-collapse__head', function(e) {
        e.preventDefault();
        $(this).toggleClass('collapse__head_active');
        $(this).parents('.collapse__item').find('.collapse__ctn').slideToggle('500');
        $(this).parents('.collapse__item').find('.collapse__ctn').toggleClass('collapse__ctn_showed');
    });
});

//модальное окно с контентом на белом фоне
$(function() {
    $('.js-modal-content').fancybox({
        src  : '#modal-content',
        type : 'inline',
        baseClass  : 'fancybox-ctn'
    });
});

//модальное окно обратной связи на белом фоне
$(function() {
    $('.js-modal-feedback').fancybox({
        src  : '#modal-feedback',
        type : 'inline',
        baseClass  : 'fancybox-ctn'
    });
});

//модальное окно с картой
$(function() {
    $('.js-modal-map').fancybox({
        src  : '#modal-map',
        type : 'inline',
        baseClass  : 'fancybox-ctn'
    });
});

//модальное окно спасибо
$(function() {
    $('.js-modal-thanks').fancybox({
        src  : '#modal-thanks',
        type : 'inline',
        baseClass  : 'fancybox-ctn'
    });

    var $links = $('.js-modal-close');
    $links.on('click', function() {
        $.fancybox.close(true);
    });
});

// тултип на форме авторизации
if ($(document).find('.js-tooltip').length) {
    $('.js-tooltip').tooltipster({
        theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
        side:  ['right', 'left'],
    });
}

//табы планировок
$(function() {
    $('.js-plan-building').responsiveTabs({
        startCollapsed: 'accordion'
    });
});

//табы галереи
$(function() {
    $('.js-tab-gallery').responsiveTabs({
        startCollapsed: 'accordion'
    });
});

//табы программ
$(function() {
    $('.js-tab-object').responsiveTabs({
        startCollapsed: 'accordion'
    });
});

//карта в модальном окне
$(function() {
    if ($(document).find('#map').length) {
        var createButton = document.getElementById('js-map');

        createButton.onclick = function() {
            var container = document.createElement('div'),
                mapBlock = document.getElementById('map');

            container.id = 'map';
            container.style.width = '100%';
            container.style.height = '400px';
            mapBlock.appendChild(container);

            DG.then(function() {
                var map = DG.map('map', {
                    center: [51.832147, 107.591285],
                    zoom: 15
                });

                DG.marker([51.832147, 107.591285]).addTo(map);
            });
        }
    }
});

//автовысота textarea
$(function() {
    autosize(document.querySelectorAll('textarea'));
});

//карта на странице контактов
$(function() {
    if ($(document).find('#map-contacts').length) {
        DG.then(function() {
            var map = DG.map('map-contacts', {
                center: [51.832147, 107.591285],
                zoom: 15,
                scrollWheelZoom: false,
            });

            DG.marker([51.832147, 107.591285]).addTo(map);
        });
    }
});

//липкий блок справа
$(window).on('load ready resize', function () {
    sticky = new Sticky('#sticker');
});

//липкая шапка
$(window).on('load ready resize', function () {


    if ($(window).width() < '768') {
        $.scrollupbar.destroy();

        function hideNav() {
            $("[data-nav-status='toggle']").removeClass("is-visible");
        }
        function showNav() {
            $("[data-nav-status='toggle']").removeClass("is-hidden");
        }
    } else {
        $('#topbar').scrollupbar();
    }

        var previousScroll = 0;
        $(window).scroll(function(){

            var currentScroll = $(this).scrollTop();

            /*
              If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
            */
            if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
                /*
                  If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
                */
                if (currentScroll > previousScroll){
                    window.setTimeout(hideNav, 300);
                    /*
                      Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
                    */
                } else {
                    window.setTimeout(showNav, 300);
                }
                /*
                  Set the previous scroll value equal to the current scroll.
                */
                previousScroll = currentScroll;
            }

        });

        function hideNav() {
            $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
        }
        function showNav() {
            $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
        }

        function hideNav() {
            $('#sticker').removeClass("is-visible").addClass("is-hidden");
        }
        function showNav() {
            $('#sticker').removeClass("is-hidden").addClass("is-visible");
        }
});

//скролл до элемента
$(function() {
    $('.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 20}, 800);
        return false;
    });
});

//меню в правой колонке
$(function() {
        new ScrollSpy('.sidebar-navi', {
        nav: '.sidebar-navi li a',
        className: 'sidebar-navi__item_active',
        callback: function () {
        }
    });
});

//скролл до элемента в горзинтальном меню на детальной объекта
$(function() {
    $('.navigation-inner-anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 80}, 800);
        return false;
    });
});

//меню горзинтальное на детальной объекта
$(function() {
        new ScrollSpy('.navigation-inner', {
        nav: '.navigation-inner li a',
        className: 'navigation-inner__item_active',
        callback: function () {
        }
    });
});

// паралакс
$(window).on('ready load resize', function () {
    if ($(window).width() > '1260') {
        $('.parallax-window').parallax();
    } else {
        $('.parallax-window').parallax('destroy');
    }
});

//эффект полета при скроле
$(function() {
    AOS.init();
});

//input focus по ховеру
$(function() {
    $('input[type="text"].form-calc__input,  input[type="password"],  input[type="tel"], textarea').mouseenter(function() {$(this).focus()});
    // $('input[type="text"].form-calc__input,  input[type="password"],  input[type="tel"], textarea').mouseleave(function() {$(this).blur()});
    $('input[type="text"].form-calc__input, input[type="password"], input[type="tel"], textarea').dblclick(function() {$(this).val('')});
});

//валидация формы ховеру на кнопку
$(function() {
    $('.js-btn-form-calc').mouseenter(function(){
        var form = $(this).closest('form');
        var isInputValue = false;

        $.each(form.find('input:required'), function(){
            if ($(this).val() == '') {
                $(this).addClass('form-calc__input_error');
            }

            isInputValue = true;
        });
    })
        .mouseleave(function(){
            var form = $(this).closest('form');

            $.each(form.find('input:required'), function(){
                $(this).removeClass('form-calc__input_error');

                isInputValue = true;
            });
            isInputValue = false;
        });
});

//акивизируем гамбургер и мобильное меню
$(function() {
    $(document).on('click', '.js-hamburger', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.header-main__bottom').toggleClass('mobile-menu');
        $('body').toggleClass('body-fixed');
    });

    //при ресайзе убиваем все открытое
    $(window).on('resize', function () {
        if ($(".header-main__bottom").hasClass("mobile-menu") && $(window).width() >= 1260) {
            $('.header-main__bottom').removeClass('mobile-menu');
        }

        if ($(".hamburger").hasClass("is-active") && $(window).width() >= 1260) {
            $('.hamburger').removeClass('is-active');
        }

        if ($("body").hasClass("body-fixed") && $(window).width() >= 1260) {
            $('body').removeClass('body-fixed');
        }
    });
});


//мобильное меню
$(window).on('ready load resize', function () {
    if ($(window).width() < '1260') {
        $('.header__nav-item').click(function() {
            $('.header__nav-item').removeClass('header__nav-item_active')
            $(this).addClass('header__nav-item_active');
        });
    }
});

//карусель advantages на главной странице
$(window).on('ready load resize', function () {
    var $advCarousel = $('.js-advantage-carousel');
    var advItem = $('.advantage-list__item').length;

    $('.js-advantage-carousel').addClass('owl-carousel');

    if (advItem > 1 && $(window).width() < '768') {
        $advCarousel.owlCarousel({
            nav: false,
            dots: true,
            autoHeight: true,
            margin: 20,
            items: 1
        });
    } else {
        $advCarousel.trigger('destroy.owl.carousel');
        $('.js-advantage-carousel').removeClass('owl-carousel');
    }
});

//карусель steps
$(window).on('ready load resize', function () {
    var $stepsCarousel = $('.js-steps-carousel');
    var stepItem = $('.steps__item').length;

    $('.js-steps-carousel').addClass('owl-carousel');

    if (stepItem > 1 && $(window).width() < '1260') {
        $stepsCarousel.owlCarousel({
            nav: false,
            dots: true,
            autoHeight: true,
            margin: 20,
            items: 1
        });
    } else {
        $stepsCarousel.trigger('destroy.owl.carousel');
        $('.js-steps-carousel').removeClass('owl-carousel');
    }
});


//карусель преимуществ на странице объекта
$(window).on('ready load resize', function () {
    var $advObjectCarousel = $('.js-advantage-list-object-detail');
    var advObjectItem = $('.advantage-list__item').length;

    $('.js-advantage-list-object-detail').addClass('owl-carousel');

    if (advObjectItem > 1 && $(window).width() < '768') {
        $advObjectCarousel.owlCarousel({
            nav: false,
            dots: true,
            autoHeight: true,
            margin: 20,
            items: 1
        });
    } else {
        $advObjectCarousel.trigger('destroy.owl.carousel');
        $('.js-advantage-list-object-detail').removeClass('owl-carousel');
    }
});

//свайп табов галлерей
$(window).on('ready load resize', function () {
    var $tabSwipe = $('.js-tab-swiper');

    if ($(window).width() < '768') {
        $tabSwipe.owlCarousel({
            nav: false,
            dots: false,
            autoHeight: true,
            autoWidth: true,
            items: 1
        });
        $tabSwipe.addClass('owl-carousel');
    } else {
        $tabSwipe.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
});

//скролл вверх когда шапка появляется
$(function() {
    $('a[href^="#scroll-up"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 140}, 800);
        return false;
    });
});
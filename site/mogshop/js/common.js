//закрываем банненр над шапкой
$(function() {
    $(document).on('click touchstart', '.sale-top__close', function() {
        $('.sale-top').addClass('sale-top_hide');
    });
});

//карусель promo на главной странице
$(window).on('load ready resize', function () {
    var $promoCarousel = $('.js-promo__carousel');
    var promoItem = $('.promo__carousel-item').length;

    $promoCarousel.addClass('owl-carousel');

    if (promoItem > 1) {
        $promoCarousel.owlCarousel({
            nav: false,
            dots: true,
            margin: 10,
            items: 1,
            responsiveClass:true,
            responsive:{
                0:{
                    margin: 0
                }
            }
        });
    } else {
        $promoCarousel.trigger('destroy.owl.carousel');
        $promoCarousel.removeClass('owl-carousel');
    }
});

//добавляем active для favorite и compare в карточке товара
$(function() {
    $(document).on('click touchstart', '.js-product-card-icon', function(e) {
        e.preventDefault();
        $(this).toggleClass('js-product-card-icon_active');
    });
});

//tooltip в карточке товара
$(function() {
    $('.js-tooltip-compare').tooltipster({
        animation: 'fade',
        delay: 200,
        content: $('#tooltip-compare'),
        side: ['bottom']
    });
});

//карусель популярное на главной странице
$(window).on('load ready resize', function () {
    var $cardCarousel = $('.js-carousel-card-list');
    var cardItem = $('.product-card').length;

    $cardCarousel.addClass('owl-carousel');

    if (cardItem > 1) {
        $cardCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 10,
            navText: '',
            responsive:{
                0:{
                    items:2,
                    dots: false,
                    nav: false
                },
                768:{
                    items:3,
                    dots: false,
                    nav: false
                },
                1024:{
                    items:3,
                    dots: false,
                    nav: false
                },
                1425:{
                    items:4
                }
            }
        });
    } else {
        $cardCarousel.trigger('destroy.owl.carousel');
        $cardCarousel.removeClass('owl-carousel');
    }
});

//карусель брендов
$(window).on('load ready resize', function () {
    var $brandCarousel = $('.js-brand-carousel');
    var brandItem = $('.brand-carousel__item').length;

    $brandCarousel.addClass('owl-carousel');

    if (brandItem > 1) {
        $brandCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 40,
            items: 1,
            autoWidth: true,
            navText: '',
            responsive:{
                0:{
                    dots: false,
                    nav: false,
                    margin: 10
                },
                768:{
                    dots: false,
                    nav: false
                },
                1024:{
                    nav: false,
                    dots: false
                },
                1425:{
                    nav: true,
                    dots: false
                }
            }
        });
    } else {
        $brandCarousel.trigger('destroy.owl.carousel');
        $brandCarousel.removeClass('owl-carousel');
    }
});

//карусель скидок
$(window).on('load ready resize', function () {
    var $saleCarousel = $('.js-product-card-list-sale');
    var saleItem = $('.product-card').length;

    $saleCarousel.addClass('owl-carousel');

    if (saleItem > 1 && $(window).width() < '1420') {
        $saleCarousel.owlCarousel({
            margin: 10,
            navText: '',
            responsive:{
                0:{
                    nav: false,
                    dots: false,
                    items: 2
                },
                768:{
                    nav: false,
                    dots: false,
                    items: 4
                },
                1024:{
                    nav: false,
                    dots: false,
                    items: 4
                }
            }
        });
    } else {
        $saleCarousel.trigger('destroy.owl.carousel');
        $saleCarousel.removeClass('owl-carousel');
    }
});

//карусель мнений специалистов
$(window).on('load ready resize', function () {
    var $mediaCarousel = $('.js-media-carousel');
    var mediaItem = $('.media__item').length;

    $mediaCarousel.addClass('owl-carousel');

    if (mediaItem > 1) {
        $mediaCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 45,
            items: 1,
            autoWidth: true,
            navText: '',
            onInitialized: counter,
            onTranslated: counter,
            responsive:{
                0:{
                    margin: 10,
                    nav: false,
                    dots: false,
                    items: 1,
                    autoWidth: true,
                },
                768:{
                    margin: 10,
                    nav: false,
                    dots: false,
                    autoWidth: false,
                    items: 3
                },
                1024:{
                    nav: false,
                    dots: false
                },
                1425:{
                    nav: true,
                    dots: false
                }
            }
        });
    } else {
        $mediaCarousel.trigger('destroy.owl.carousel');
        $mediaCarousel.removeClass('owl-carousel');
    }

    function counter(event) {
        var element   = event.target;
        var items     = event.item.count;
        var item      = event.item.index + 1;
        $('.media-counter').html(item+"/"+items);
    }
});

//карусель рекомендуем на главной странице
$(window).on('load ready resize', function () {
    var $cardCarousel = $('.js-carousel-card-list_full-width');
    var cardItem = $('.product-card').length;

    $cardCarousel.addClass('owl-carousel');

    if (cardItem > 1) {
        $cardCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 10,
            items: 5,
            navText: '',
            responsive:{
                0:{
                    nav: false,
                    dots: false,
                    items: 2
                },
                768:{
                    nav: false,
                    dots: false,
                    items: 4
                },
                1024:{
                    nav: false,
                    dots: false,
                    items: 4
                },
                1425:{
                    nav: true,
                    dots: false,
                    items: 5
                }
            }
        });
    } else {
        $cardCarousel.trigger('destroy.owl.carousel');
        $cardCarousel.removeClass('owl-carousel');
    }
});

//карусель нововсти на главной странице
$(window).on('load ready resize', function () {
    var $newsCarousel = $('.js-news-list');
    var newsItem = $('.news-list__item').length;

    $newsCarousel.addClass('owl-carousel');

    if (newsItem > 1) {
        $newsCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 10,
            items: 1,
            autoWidth: true,
            navText: '',
            onInitialized: counter,
            onTranslated: counter,
            responsive:{
                0:{
                    nav: false,
                    dots: false
                },
                768:{
                    nav: false,
                    dots: false
                },
                1024:{
                    nav: false
                },
                1425:{
                    nav: true
                }
            }
        });
    } else {
        $newsCarousel.trigger('destroy.owl.carousel');
        $newsCarousel.removeClass('owl-carousel');
    }

    function counter(event) {
        var element   = event.target;
        var items     = event.item.count;
        var item      = event.item.index + 1;
        $('.news-counter').html(item+"/"+items)
    }
});

//показываем текст о компании на главной
$(function() {
    $(document).on('click touchstart', '.js-about-company-text__link', function(e) {
        e.preventDefault();
        $(this).toggleClass('about-company-text__link_active');
        $('.about-company-text__wrapper').toggleClass('about-company-text__wrapper_show');
    });
});

//карусель преимуществ на главной странице
$(window).on('load ready resize', function () {
    var $advCarousel = $('.js-advantages');
    var advItem = $('.advantages__item').length;

    $advCarousel.addClass('owl-carousel');

    if (advItem > 1 && $(window).width() < '1420') {
        $advCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 10,
            items: 1,
            autoWidth: true,
            navText: '',
            responsive:{
                0:{
                    nav: false
                }
            }
        });
    } else {
        $advCarousel.trigger('destroy.owl.carousel');
        $advCarousel.removeClass('owl-carousel');
    }
});

//показываем меню в подвале
$(function() {
    $(document).on('click touchstart', '.js-footer-main-nav', function() {
        $(this).toggleClass('show');
    });
});

//подкатегории в мобильном меню
$(function() {
    $(document).on('click touchstart', '.mobile-menu__nav-lv1 > li > a', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});

//взрываем мобильное меню
$(function() {
    $(document).on('click  touchstart', '.header-main__burder', function() {
        $('.mobile-menu').toggleClass('mobile-menu_show');
        $('.mobile-menu-wrapper').toggleClass('mobile-menu-wrapper_pull');
        $('body').toggleClass('body-fixed');
    });
});

//добавляем в избранное на странице товара
$(function() {
    $(document).on('click touchstart', '.js-product__info-item', function(e) {
        e.preventDefault();
        $(this).toggleClass('product__info-activity-item_active');
    });
});

//показываем все характеристики в товаре
$(function() {
    $(document).on('click touchstart', '.js-product__info-characteristic', function(e) {
        e.preventDefault();
        $(this).toggleClass('product__info-characteristic-link_active');
        $(this).parent('.product__info-characteristic').toggleClass('product__info-characteristic_show');
    });
});

//кастомный селект
$(function() {
    $('.custom-select').niceSelect();
});

//карусель c горизонтальными карточками
$(window).on('load ready resize', function () {
    var $cardCarousel = $('.js-product-card-horizontal');
    var cardItem = $('.product-card-horizontal__item').length;

    $cardCarousel.addClass('owl-carousel');

    if (cardItem > 1) {
        $cardCarousel.owlCarousel({
            nav: true,
            dots: false,
            margin: 10,
            items: 1,
            autoWidth: true,
            navText: '',
            responsive:{
                0:{
                    nav: false
                },
                768:{
                    nav: false
                },
                1024:{
                    nav: false
                },
                1425:{
                    nav: true
                }
            }
        });
    } else {
        $cardCarousel.trigger('destroy.owl.carousel');
        $cardCarousel.removeClass('owl-carousel');
    }
});

//показываем информацию о товаре
$(function() {
    $(document).on('click touchstart', '.js-product-teaser__link', function(e) {
        e.preventDefault();
        $(this).toggleClass('product-teaser__link_active');
        $('.product-teaser__wrapper-text').toggleClass('product-teaser__wrapper-text_show');
    });
});

//карусель c набором товаров
$(window).on('load ready resize', function () {
    var $setCarousel = $('.js-product-set__wrapper');
    var setItem = $('.product-set__item').length;

    $setCarousel.addClass('owl-carousel');

    if (setItem > 1) {
        $setCarousel.owlCarousel({
            nav: false,
            dots: false,
            margin: 10,
            autoWidth: true,
            navText: '',
            responsive:{
                1024:{
                    margin: 0
                }
            }
        });
    } else {
        $setCarousel.trigger('destroy.owl.carousel');
        $setCarousel.removeClass('owl-carousel');
    }
});

//показываем характеристики товара
$(function() {
    $(document).on('click touchstart', '.js-product-characteristic-link', function(e) {
        e.preventDefault();
        $(this).toggleClass('product-characteristic-link_active');
        $('.product-characteristic__list').toggleClass('product-characteristic__list_show');
    });
});

//скролл до элемента
$(function() {
    $('.anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');

        if ($(window).width() < '768') {
            $('html, body').animate({scrollTop: $(target).offset().top - 80}, 800);
        } else {
            $('html, body').animate({scrollTop: $(target).offset().top - 20}, 800);
        }
        return false;
    });
});

//фиусированная панель на странице товара
$(function() {
    // Получаем нужный элемент
    var element = document.querySelector('.product');

    var Visible = function (target) {
        // Все позиции элемента
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            $('.product-panel-item').removeClass('product-panel-item_show');
        } else {
            // Если элемент не видно, то запускаем этот код
            $('.product-panel-item').addClass('product-panel-item_show');
        };
    };

// Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function() {
        Visible (element);
    });

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
    Visible (element);
});


//если есть на странице фиксированная плашка с товаром, приподнимаем подвал
$(function() {
    if ($(document).find('.product-panel').length) {
        $('.footer-main').addClass('footer-main_product-panel')
    }
});

//карусель товаров "результаты подборов" и "вы недавно смотрели"
$(window).on('load ready resize', function () {
    var $cardCarousel = $('.js-product-card-carousel_page-product');
    var cardItem = $('.product-card').length;

    $cardCarousel.addClass('owl-carousel');

    if (cardItem > 1 && $(window).width() < '1420') {
        $cardCarousel.owlCarousel({
            nav: false,
            dots: false,
            margin: 10,
            navText: '',
            responsive:{
                0:{
                    nav: false,
                    dots: false,
                    items: 2
                },
                768:{
                    nav: false,
                    dots: false,
                    items: 4
                },
                1024:{
                    nav: false,
                    dots: false,
                    items: 4
                }
            }
        });
    } else {
        $cardCarousel.trigger('destroy.owl.carousel');
        $cardCarousel.removeClass('owl-carousel');
    }
});

//взрываем попап
$(function() {
    $('.js-modal').magnificPopup({
        type:'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });
})

//карусель облегченных товаров в модальном окне
$(window).on('load ready resize', function () {
    var $cardCarousel = $('.js-product-card-light-carousel');
    var cardItem = $('.product-card_light').length;

    $cardCarousel.addClass('owl-carousel');

    if (cardItem > 1) {
        $cardCarousel.owlCarousel({
            nav: false,
            dots: false,
            margin: 10,
            navText: '',
            autoWidth: true,
        });
    } else {
        $cardCarousel.trigger('destroy.owl.carousel');
        $cardCarousel.removeClass('owl-carousel');
    }
});

//masonry
$(window).on('load ready resize', function () {
    $('.js-catalog').masonry({
        itemSelector: '.catalog__item',
        percentPosition: true
    });
});

//удаляем товар в корзине
$(function() {
    $(".shopping-cart__delete").click(function(e) {
        e.preventDefault();

        $(this).parents('.shopping-cart__item').animate({opacity: 0}, 100, function() {
            $(this).slideUp(200, function(){
                $(this).remove();
            });
        });
    });
});

//tooltip на странице корзины
$(function() {
    $('.js-input-error').tooltipster({
        animation: 'fade',
        delay: 200,
        content: $('#tooltip-promo'),
        side: ['left'],
        theme: 'tooltip-promo',
        maxWidth: '240'
    });
});

//показываем фильтры в правой колонке на странице категории
$(function() {
    $(document).on('click touchstart', '.js-filters__item-title', function(e) {
        e.preventDefault();
        $(this).toggleClass('filters__item-title_active');
    });
});

//перебираем активные кнопки в фильтрах
$(function() {
    $(document).on('click touchstart', '.js-filters__group-btn-item', function() {
        $('.js-filters__group-btn-item').removeClass('filters__group-btn-item_active');
        $(this).addClass('filters__group-btn-item_active');
    });
});

//dropdown
$(function() {
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $('.dropdown .dropdown-menu li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.dropdown').find('span').html($(this).html());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('class'));
    });

    $('.dropdown_popular').find($(".dropdown_popular .select span").html($(".dropdown-menu").find(".popular-up").html()));

    $('.dropdown_cost').find($(".dropdown_cost .select span").html($(".dropdown-menu").find(".show-10").html()));
});

//показываем фильтры справа
$(function() {
    $(document).on('click touchstart', '.js-filters__btn-show', function() {
        $(this).toggleClass('filters__btn-show_active');
        $('body').toggleClass('body-fixed');
        $('.filters__pull').toggleClass('filters__pull_show');
        $('.filters__pull-content').toggleClass('filters__pull-content_hide');
    });

    $(window).on('resize', function () {
        $('.filters__pull').removeClass('filters__pull_show');
        $('.filters__pull-content').removeClass('filters__pull-content_hide');
        $('body').removeClass('body-fixed');
    });
});


//показываем сортировку на мобиле
$(window).on('load ready resize', function () {
    if ($(window).width() < '768') {
        $('.sorter').hide();
        $('.sorter').addClass('sorter_hide');

        $(document).on('click touchstart', '.js-sorter', function() {
            $('.sorter__left .dropdown-menu').addClass('dropdown-menu_show-xs');
            $('body').addClass('body-fixed');
            $('.sorter').show();
            $('.sorter').removeClass('sorter_hide');
        });

        $(document).on('click touchstart', '.dropdown .dropdown-menu li', function() {
            $('.dropdown .dropdown-menu').removeClass('dropdown-menu_show-xs');
            $('.sorter').hide();
            $('.sorter').addClass('sorter_hide');
        });

        $(document).on('click touchstart', '.js-dropdown-menu__close', function() {
            $('.sorter__left .dropdown-menu').removeClass('dropdown-menu_show-xs');
            $('body').removeClass('body-fixed');
            $('.sorter').hide();
            $('.sorter').addClass('sorter_hide');
        });
    } else {
        $('.sorter').show();
        $('.sorter').removeClass('sorter_hide');
        $(document).on('click touchstart', '.dropdown .dropdown-menu li', function() {
            $('.sorter').show();
            $('.sorter').removeClass('sorter_hide');
        });
    }
});

//показываем фильтрацию на мобиле
$(function() {
    $(document).on('click touchstart', '.js-filter', function() {
        $('.filters__pull').addClass('filters__pull_show-xs');
        $('body').addClass('body-fixed');
    });

    $(document).on('click touchstart', '.js-filters__close_xs', function() {
        $('body').removeClass('body-fixed');
        $('.filters__pull').removeClass('filters__pull_show-xs');
    });
});

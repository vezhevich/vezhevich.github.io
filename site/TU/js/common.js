// кастомный селект
$(function() {
    $('.js-custom-select').niceSelect();
});

// проверяю пустое ли поле ввода в шапке
// а также результат поиска в шапке
$(function() {
    $('.js-valid-input-header').keyup(function() {
        if ($(this).val().trim().length) {
            $(this).prev().addClass('show');
            $(this).parents().find('.b-header__search-result').addClass('show');
            $('.b-action-link').addClass('b-action-link_up-index');
            $('.b-header').addClass('b-header_up-index');
            $('.b-overlay').addClass('show');
        } else {
            $(this).prev().removeClass('show');
            $(this).parents().find('.b-header__search-result').removeClass('show');
            $('.b-action-link').addClass('b-action-link_up-index');
            $('.b-overlay').removeClass('show');
            $('.b-header').removeClass('b-header_up-index');
        }
    });
});

//везде кроме шапки
$(function() {
    $('.js-valid-input').keyup(function() {
        if ($(this).val().trim().length) {
            $(this).prev().addClass('show');
        } else {
            $(this).prev().removeClass('show');
        }
    });
});

//показываем результат поиска в модальном окне
$(function() {
    $('.js-valid-input-search-modal').keyup(function() {
        if ($(this).val().trim().length) {
            $(this).parents().find('.b-modal-search__wrap').addClass('show');
        } else {
            $(this).parents().find('.b-modal-search__wrap').removeClass('show');
        }
    });
});

//слайдер с товарами на главной
$(function() {
    $('.js-product-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1158,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    variableWidth: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false,
                }
            }
        ]
    });
});

// взрываем модальное окно
$(function() {
    var startWindowScroll = 0;
    $('.js-modal').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal mfp-fade',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        callbacks: {
            beforeOpen: function () {
                startWindowScroll = $(window).scrollTop();
            },
            open: function () {
                if ($('.mfp-content').height() < $(window).height()) {
                    $('body').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function () {
                $(window).scrollTop(startWindowScroll);
                $('body').off('touchmove');
            }
        }
    });
});

// взрываем модальное окно поиска
$(function() {
    var startWindowScroll = 0;
    $('.js-modal-full-width').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal b-modal_full-width mfp-fade',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        callbacks: {
            beforeOpen: function () {
                startWindowScroll = $(window).scrollTop();
            },
            open: function () {
                if ($('.mfp-content').height() < $(window).height()) {
                    $('body').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function () {
                $(window).scrollTop(startWindowScroll);
                $('body').off('touchmove');
            }
        }
    });
});

// взрываем мобильное меню
$(function() {
    var startWindowScroll = 0;
    $('.js-mobile-menu').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal b-modal-mobile-menu mfp-fade',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        callbacks: {
            beforeOpen: function () {
                startWindowScroll = $(window).scrollTop();
            },
            open: function () {
                if ($('.mfp-content').height() < $(window).height()) {
                    $('body').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function () {
                $(window).scrollTop(startWindowScroll);
                $('body').off('touchmove');
            }
        }
    });
});

// маска номера телефона
$(function() {
    $('[type="tel"]').inputmask({
        "mask": "+7 (999) 999-99-99",
        "clearIncomplete": true,
        autoUnmask: true,
        removeMaskOnSubmit: false,
        showMaskOnHover: false,
    });
});

// карусель плиток каталога
$(window).on('load ready resize', function () {
    var $catalogSlider = $('.js-catalog-card-slider');

    if ($(window).width() < '1158') {
        $catalogSlider.not('.slick-initialized').slick({
            infinite: false,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            dots: false,
        });
    } else {
        if ($catalogSlider.is('.slick-initialized'))
            $catalogSlider.slick('unslick');
    }
});

// карусель плиток каталога
// после формы подбора запчастей
// на главной странице
$(window).on('load ready resize', function () {
    var $catalogSlider = $('.js-catalog-card-slider-top');

    if ($(window).width() < '768') {
        $catalogSlider.not('.slick-initialized').slick({
            infinite: false,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            dots: false,
        });
    } else {
        if ($catalogSlider.is('.slick-initialized'))
            $catalogSlider.slick('unslick');
    }
});

//дропдаун категорий каталога
$(function() {
    if ($(window).width() < '768') {
        $('.js-slidedown-catalog-list').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('.b-main-catalog__list-wrapper').toggleClass('show');
        });
    }
});

//дропдаун меню в подвале
$(function() {
    if ($(window).width() < '768') {
        $('.js-slidedown-footer-nav').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('.list_unstyle').toggleClass('show');
        });
    }
});

//дропдаун фильтров в левой колонке
$(function() {
    $(document).on('click', '.js-filters-aside-slidedown', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.b-filters-aside__ctn').slideToggle();
    });
});


//слайдер значений
$(function() {
    var $range = $(".js-range-slider");
    var $inputFrom = $(".js-input-from");
    var $inputTo = $(".js-input-to");
    var instance;
    var min = 0;
    var max = 1000;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 800,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });
});

//quantity
$(function() {
    $('.js-value-button-up').click(function () {
        $(this).prev().val(+$(this).prev().val() + 1);
    });
    $('.js-value-button-down').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
});

//дропдаун фильтров
//вариант закрывать только по клику кнопки
// $(function() {
//     $(document).on('click', '.js-show-filters', function(e) {
//         e.preventDefault();
//         $(this).toggleClass('active');
//         $(this).parents().find('.b-filters-aside').toggleClass('show');
//     });
// });

//вариант если нужно закрывать по клику вне вильтра
$(function() {
    const menuBtn = $('.js-show-filters'),
        menuBtnClose = $('.js-close-filters'),
        menu    = $('.b-filters-aside');

    menuBtn.on('click', function(e) {
        e.stopPropagation();
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            menu.removeClass('show');
        } else {
            $(this).addClass('active');
            menu.addClass('show');
        }
    });

    menuBtnClose.on('click', function(e) {
        e.stopPropagation();
        menu.removeClass('show');
        menuBtn.removeClass('active');
    });

    $(document).click(function (e) {
        if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
            menuBtn.removeClass('active');
        };
    });
});

//tooltip
$(function() {
    $(document).ready(function () {
        $('.js-tooltip').tooltipster({
            contentAsHTML: true,
            animation: 'fade',
            delay: 200,
            interactive: true,
            contentCloning: true,
            maxWidth: '220',
            theme: 'b-tooltip tooltipster-light',
            arrow: false,
            trigger: 'custom',
            triggerOpen: {
                mouseenter: true,
                tap: true
            },
            triggerClose: {
                mouseleave: true,
                tap: true
            },
            side: ['right', 'bottom'],
        });
    });
});

//dropdown в меню в левой колонке
$(function() {
    $(document).on('click', '.js-nav-aside-dropdown', function(e) {
        e.preventDefault();
        $(this).toggleClass(' b-nav-aside__li_active');
        $(this).parent().find('.b-nav-aside__ul-lv2').slideToggle();
    });
});


//таблица с горизонтальным скролом
$(function() {
    $('#table-scroll').DataTable( {
        scrollCollapse: true,

        scrollX: '100%',
        bScrollCollapse: true,

        searching: false,
        lengthChange: false,
        paging: false,
        info: false,
        ordering: false,
        retrieve: true,
        responsive: true,
        fixedColumns:   true
    } );
});


//карусель товара
$(function() {
    $('.js-product-preview-for').slick({
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-product-preview-nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });
    $('.js-product-preview-nav').slick({
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        asNavFor: '.js-product-preview-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
    });
});

//слайдер товаров в табах на странице товара
$(function() {
    var $productSliderMini = $('.js-product-slider-mini');
    $productSliderMini.slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1158,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false,
                }
            }
        ]
    });

    $(document).on('click', '.js-reload-slider', function() {
        $('.js-product-slider-mini').slick('setPosition');
    });

});

//слайдим табы
$(window).on('load ready resize', function () {
    var $tabsSlider = $('.js-tabs-slide');

    if ($(window).width() < '768') {
        $tabsSlider.not('.slick-initialized').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 2,
            variableWidth: true,
            arrows: false,
            dots: false,
        });
    } else {
        if ($tabsSlider.is('.slick-initialized'))
            $tabsSlider.slick('unslick');
    }
});

// табы
$(function() {
    $('.js-tab-trigger').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');
    });
});

//примитивный readmore
$(function() {
    $('.js-read-more').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).prev().toggleClass('active');
    });
});

//выбор всех чекбокс
$(function() {
    $(document).on('change', '.b-shopping-cart__table-col .input', function () {
        var $this = $(this), $chks = $(document.getElementsByName(this.name)), $all = $chks.filter(".js-chk-all");

        if ($this.hasClass('js-chk-all')) {
            $chks.prop('checked', $this.prop('checked'));
        } else switch ($chks.filter(":checked").length) {
            case +$all.prop('checked'):
                $all.prop('checked', false).prop('indeterminate', false);
                break;
            case $chks.length - !!$this.prop('checked'):
                $all.prop('checked', true).prop('indeterminate', false);
                break;
            default:
                $all.prop('indeterminate', true);
        }
    });
});

//шагаем по оформлению заказа
$(function() {
    $(document).on('click', '.js-order-go-step2', function(e) {
        e.preventDefault();
       $('.b-order__step1').removeClass('b-order__step_active');
       $('.b-order__step2').addClass('b-order__step_active');
    });

    $(document).on('click', '.js-order-go-step3', function(e) {
        e.preventDefault();
       $('.b-order__step2').removeClass('b-order__step_active');
       $('.b-order__step3').addClass('b-order__step_active');
    });

    $(document).on('click', '.js-order-go-step4', function(e) {
        e.preventDefault();
       $('.b-order__step3').removeClass('b-order__step_active');
       $('.b-order__step4').addClass('b-order__step_active');
    });

    $(document).on('click', '.js-order-back-step2', function(e) {
        e.preventDefault();
       $('.b-order__step2').removeClass('b-order__step_active');
       $('.b-order__step1').addClass('b-order__step_active');
    });

    $(document).on('click', '.js-order-back-step3', function(e) {
        e.preventDefault();
       $('.b-order__step3').removeClass('b-order__step_active');
       $('.b-order__step2').addClass('b-order__step_active');
    });

    $(document).on('click', '.js-order-back-step4', function(e) {
        e.preventDefault();
       $('.b-order__step4').removeClass('b-order__step_active');
       $('.b-order__step3').addClass('b-order__step_active');
    });
});

//проверяем способ оплаты
$(function() {
    $(document).on('click', '.js-select-delivery', function() {
        var inputCheck = $('#delivery2').prop("checked");

        if (inputCheck == false) {
            $('.js-hide-delivery').addClass('hide');
            $('.js-show-delivery').addClass('show');
        } else if (inputCheck == true) {
            $('.js-hide-delivery').removeClass('hide');
            $('.js-show-delivery').removeClass('show');
        }
    });
});


//карта контактов
$(function() {
    if ( $('#map').length > 0 ) {
        var myMap;

        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('map', {
                center: [59.889670, 30.478032],
                zoom: 10,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),
                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/svg/icon-pin.svg',
                    // Размеры метки.
                    iconImageSize: [38, 45],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                }),

                myMap.geoObjects
                    .add(myPlacemark);

        }
    }
});

// выбор локации на странице о компании
$(function() {
    $(document).on('click', '.js-select-location-spb', function(e) {
        e.stopPropagation()
        $('.b-about__map-list-item').removeClass('active');
        $('.js-select-location-spb').addClass('active');
        $('.b-about__map-loc').removeClass('active');
        $('.b-about__map-spb').addClass('active');
    });

    $(document).on('click', '.js-select-location-msc', function(e) {
        e.stopPropagation()
        $('.b-about__map-list-item').removeClass('active');
        $('.js-select-location-msc').addClass('active');
        $('.b-about__map-loc').removeClass('active');
        $('.b-about__map-msc').addClass('active');
    });

    $(document).on('click', '.js-select-location-ekb', function(e) {
        e.stopPropagation()
        $('.b-about__map-list-item').removeClass('active');
        $('.js-select-location-ekb').addClass('active');
        $('.b-about__map-loc').removeClass('active');
        $('.b-about__map-ekb').addClass('active');
    });

    $(document).on('click', '.js-select-location-volg', function(e) {
        e.stopPropagation()
        $('.b-about__map-list-item').removeClass('active');
        $('.js-select-location-volg').addClass('active');
        $('.b-about__map-loc').removeClass('active');
        $('.b-about__map-volg').addClass('active');
    });

    $(document).on('click', '.js-select-location-kras', function(e) {
        e.stopPropagation()
        $('.b-about__map-list-item').removeClass('active');
        $('.js-select-location-kras').addClass('active');
        $('.b-about__map-loc').removeClass('active');
        $('.b-about__map-kras').addClass('active');
    });
});

// lightbox
$(function() {
    $('.js-lightbox-single').magnificPopup({
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
});

// показываем/скрывем список каталога на главной
$(function() {
    $('.js-alphabet-show-all').click(function () {
        $(this).toggleClass('active');
        $(this).parent().find('.b-alphabet-wrap').toggleClass('show');
    });
});

// выбор юр лица в оформлении заказа
$(function() {
    $(document).on('click', '.js-select-entity', function() {
        var inputCheck = $('#entity').prop("checked");

        if (inputCheck == false) {
            $(this).parents('.b-order__form-group').find('.b-order__form-item-wrap').addClass('b-order__form-item-wrap_hide');
        } else if (inputCheck == true) {
            $(this).parents('.b-order__form-group').find('.b-order__form-item-wrap').removeClass('b-order__form-item-wrap_hide');
        }
    });
});

//липкий блок в шапке
$(window).on('load ready resize', function () {
    if ($(window).width() > '1157') {
        $(".js-sticky").stick_in_parent();
    } else {
        $(".js-sticky").trigger("sticky_kit:detach");
    }
});


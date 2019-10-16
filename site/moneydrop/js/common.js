// взрываем модальное окно
$(function () {
    $('.js-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        mainClass: 'b-modal-white-bg',
        midClick: true,
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        focus: '.first-input',
        callbacks: {
            beforeOpen: function() {
                startWindowScroll = $(window).scrollTop();
                if($(window).width() < 768) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            },
            open: function(){
                if ( $('.mfp-content').height() < $(window).height() ){
                    $('body').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function() {
                $(window).scrollTop(startWindowScroll);
                $('body').off('touchmove');
            }
        }

    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

// маска для телефона
$(function () {
    if ($(document).find('.input-mask').length) {
        var selector = document.getElementsByClassName("input-mask");

        var im = new Inputmask({"mask": "+7 (999) 999-99-99"});
        im.mask(selector);
    }
});

// скрываем/показываем пароль
$(function () {
    $('.b-form-show-pass').click(function(){
        var type =  $(this).parents('.b-form__input-wrapper').find('.input-password').attr('type') == "text" ? "password" : 'text';
        $(this).parents('.b-form__input-wrapper').find('.input-password').prop('type', type);
    });
});

//результаты поиска
$(function () {
    $(document).on('keyup', '.js-input-search', function () {
        $('.b-form__item-search-wrap').find('.js-input-search').each(function () {
            if ($(this).val() != '' && $(this).val().length > 0) {
                // Если поле не пустое удаляем класс-указание
                $('.b-form__search-result-bg').addClass('show');
            } else {
                // Если поле пустое добавляем класс-указание
                $('.b-form__search-result-bg').removeClass('show');
            }
        });
    });
});

//редактируем номер телефона
$(function () {
    $('.js-b-form__item-link').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $(".b-form__item-edit .input-mask").removeAttr("readonly");
        $(".b-form__item-edit").addClass("active");
        $(".js-b-form__item-close").show();
    });

    $('.js-b-form__item-close').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $(".b-form__item-edit .input-mask").attr('readonly', true);
        $(".b-form__item-edit").removeClass("active");
        $(".js-b-form__item-link").show();
    });
});

//кастомный селект
$(function () {
    $('.custom-select').niceSelect();
});

//акордеон
$(function () {
    $("#my-accordion").accordionjs({
        closeOther  : false,
        activeIndex : false,
    });
});

//tooltip
$(function () {
    $('.tooltip').tooltipster({
        // trigger: 'click',
        trigger: 'ontouchstart' in window || navigator.maxTouchPoints ? 'click' : 'hover',
        minWidth: '315',
        side: ['top', 'bottom', 'left', 'right'],
        contentAsHTML: true,
        interactive: true,
        contentCloning: true
    });
});

//в резиновых таблицах показываем группу иконок
$(function () {
    $('.js-b-table__slide-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});

//по клику показываем календарь на мобилах
$(function () {
    $('.js-b-calendar').click(function(e) {
        e.preventDefault();
        $('.b-calendar').toggleClass('active');
        $('body').addClass('scroll-lock');
        $('.page-overlay').addClass('active');
    });

    $('.b-calendar__close').click(function(e) {
        e.preventDefault();
        $('.b-calendar').removeClass('active');
        $('body').removeClass('scroll-lock');
        $('.page-overlay').removeClass('active');
    });
});

/* вводить только цифры */
$(function () {
    $("#only_num").keydown(function(event) {

        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });
});


// скрываем/показываем сообщение об успехе отправки формы
$(function () {
    $('.js-b-send-message_show').click(function(){
        $('.b-send-message').addClass('active');
    });

    $('.js-b-send-message_hide').click(function(){
        $('.b-send-message').removeClass('active');
    });
});

// ставим фокус в поле при открытии модального окна
$(function () {
    $('js-modal-focus').click(function(){
        $('#b-modal-edit-phone .input-mask').focus();
    });

});


/* на мобиле крутим навигацию */
$(function () {
    var mySwiper = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();

        if(screenWidth < 767 && mySwiper == undefined) {
            mySwiper = new Swiper('.js-b-navi-ctn', {
                slidesPerView: 'auto',
                freeMode: true,
                spaceBetween: 20,
            });
        } else if (screenWidth > 768 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }
    //
    // $(window).on('load ready', function(){
    //     mySwiper.slideTo(getSlideIndexByClass('b-navi__item_active'));
    //
    //     function getSlideIndexByClass(className) {
    //         var index = 0;
    //         $.each($('.swiper-wrapper').children(), function(i, item) {
    //             if ($(item).hasClass(className)) {
    //                 index = i;
    //                 return false;
    //             }
    //         });
    //         return index;
    //     }
    // });

    // другой способ который тоже не работает на 3 пукнте меню
    $(function () {
        if ($('.b-navi__item').hasClass('b-navi__item_active')) {
            mySwiper.slideTo($('.b-navi__item.b-navi__item_active').index(),1000,false );
        };
    });

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });

});


диаграмма
$(function () {
    new Chartist.Pie('.ct-chart', {
        series: [72, 28]
    }, {
        donut: true,
        donutWidth: 27,
        donutSolid: true,
        startAngle: 1,
        showLabel: false
    });
});

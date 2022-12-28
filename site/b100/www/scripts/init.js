jQuery(function ($) {

    const scrollbarWidth = window.innerWidth - $(document).width();

    $('[data-svg]').not('loaded').each(function () {
        var $i = $(this).addClass('loaded');

        $.get($i.data('svg'), function (data) {
            var $svg = $(data).find('svg');

            $svg.attr('class', $i.attr('class'));
            $i.replaceWith($svg);
        }, 'xml');
    });

    //    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    $('.quize-slider__js').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        fade: false,
        swipeToSlide: true,
        //        autoplay: true,
        //        autoplaySpeed: 6000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
          ]
    });

    /* init Jarallax */
    jarallax(document.querySelectorAll('.jarallax'));

    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
        keepImg: true,
    });
    /* Jaralax End */

    $('.periods li a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    })

    $('[data-modal="menu-modal"]').on('click', function (e) {
        e.preventDefault();
        $('#menu-modal').addClass('active');
        $("body").addClass('shadow-overlay');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.menu-modal').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.menu-modal').css('padding-right', '');
        };
    })

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".modal.active"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("body").removeClass('shadow-overlay');
            $(".modal").removeClass('active');
        }
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
        };
    });

    $('.menu-modal .close').on('click', function (e) {
        $('#menu-modal').removeClass('active');
        $("body").removeClass('shadow-overlay');
    })

    addEventListener('DOMContentLoaded', function () {
        pickmeup('.calendar', {
            flat: true,
            title_format: 'B',
            prev: '<img src="images/svg/icons/date-prev.svg" alt="">',
            next: '<img src="images/svg/icons/date-next.svg" alt="">',
        });
    });

});

jQuery('a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            jQuery('html,body').animate({
                scrollTop: target.offset().top - 132
            }, 1000);
            return false;
        }
    }
});

// модальное окно по середине
if ($('.js-modal').length > 0) {
    var startWindowScroll = 0;
    $('.js-modal').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade modal-default',
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
}

// модальное окно сверху
if ($('.js-modal-top').length > 0) {
    var startWindowScroll = 0;
    $('.js-modal-top').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade modal-top',
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
}

// закрытие модалки
$('.js-close-modal').click(function(){
    $.magnificPopup.close();
});

// custom select
if ($('.select-custom').length > 0) {
    $('.select-custom').niceSelect();
}

//datepicker period
if ($('.datepicker-here').length > 0) {
    $('.datepicker-here').datepicker({
        language: 'ru',
        classes: 'aircalendar',
        navTitles: {
            days: 'MM yyyy'
        },
        prevHtml: '<img src="images/svg/icons/date-prev2.svg" alt="">',
        nextHtml: '<img src="images/svg/icons/date-next2.svg" alt="">',
        autoClose: true,
    })
}







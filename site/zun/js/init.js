jQuery(function ($) {

    $('[data-svg]').not('loaded').each(function () {
        var $i = $(this).addClass('loaded');

        $.get($i.data('svg'), function (data) {
            var $svg = $(data).find('svg');

            $svg.attr('class', $i.attr('class'));
            $i.replaceWith($svg);
        }, 'xml');
    });

    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    $('.mobmenu-trigger').click(function () {
        $('body').toggleClass('mobile-menu-open');
    })

    $('a[data-modal="card-modal"]').on('click', function (e) {
        e.preventDefault();
        $('#card-modal').addClass('active');
        $("body").addClass('shadow-overlay');
    })

    $('a[data-modal="feedback-modal"]').on('click', function (e) {
        e.preventDefault();
        $('#feedback-modal').addClass('active');
        $("body").addClass('shadow-overlay');
    })

    $('.modal-box__close').on('click', function (e) {
        $(this).parent().removeClass('active');
        $("body").removeClass('shadow-overlay');
    })

    $('*[data-modal="search-modal"]').on('click', function (e) {
        e.preventDefault();
        $('#search-modal').toggleClass('active');
        $('.menu-main__search').toggleClass('active');
    })

    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(".menu-main ul").toggleClass('active');
        $("body").toggleClass('overflow');
    })

    $('.page-title .js-btn-search').on('click', function (e) {
        e.preventDefault();
        $('.header .menu-main__search').addClass('active');
        $('.footer .menu-main__search').removeClass('active');
    })

    jQuery(function () {
        jQuery('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.header .menu-main__search').click(function () {
        $('.footer .menu-main__search').removeClass('active');
    })

    $('.menu-block__btn').click(function () {
        $(this).parent().siblings('.menu-block').removeClass('active');
        $(this).parent().siblings('.menu-block').children('.menu-block__dropdown').slideUp();
        $(this).parent().toggleClass('active');
        $(this).siblings('.menu-block__dropdown').slideToggle();
    })

    $('.accordion__title').click(function (event) {
        event.preventDefault();
        $(this).siblings(".accordion__content").slideToggle();
        $(this).parent().toggleClass('active');
        $('.accordion__title').not($(this)).parent().removeClass('active');
        $('.accordion__title').not($(this)).siblings('.accordion__content').slideUp();
    });

    $(window).on('load resize', function (e) {
        if ($(window).width() > 1024) {
            $('.footer .menu-main__search').click(function () {
                $(this).removeClass('active');
                $('#search-modal').addClass('active');
                $('.header .menu-main__search').addClass('active');

                $("html, body").animate({
                    scrollTop: 0
                }, 1000);
            })
        }
    });

    $(window).on('load resize', function (e) {
        if ($(window).width() < 1023) {
            $('.footer .menu-main__search').click(function () {
                $(this).removeClass('active');
                $('#search-modal').addClass('active');
                $('.header .menu-main__search').addClass('active');
            })
        }
    });

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

    $(window).on('load resize', function () {
        if ($(window).width() > 1024) {
            $(function () {
                $(' .textillate ').textillate({
                    in: {
                        effect: 'slideInUp',
                    }
                });
            })
        }
    });


    $('.slider__js').slick({
        infinite: false,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

    $('.form__field').click(function (e) {
        $(this).children('label').addClass('active');
    })

    $('.form__field .inputbox').blur(function () {
        if ($(this).val() == "") {
            $(this).siblings('label').removeClass('active');
        }
    });

    $('.form__field input').blur(function () {
        if ($(this).val() == "") {
            $(this).siblings('label').removeClass('active');
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('[data-fancybox="gallery"]').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

});

/* SmoothScroll Site Start */
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
})
/* SmoothScroll Site End */

/* Jaralax Start */
//objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});
/* Jaralax End */

// выдает ошибку
// $(window).on('popstate', function() {
// 		page(location.pathname);
// 	});
//
//
// function page(url, push = false) {
// 	$.get(url, {ajax: true, init: true}, function(data) {
// 		var page = $(data).filter('#page');
// 		window.scroll(0, 0);
//
// 		$('body').attr('class', page.data('body'));
// 		$('#page').replaceWith(page);
//
// 		document.title = page.data('title');
//
// 		if (push)
// 			history.pushState(null, null, url);
// 	});
// }

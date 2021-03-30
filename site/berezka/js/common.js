document.addEventListener('DOMContentLoaded', () => {
    // селект в шапке
    $(function() {
        $('.js-select-custom').niceSelect();
    });

    // калькулятор
    $(function() {
        var sum = document.querySelector('.js-range-sum');

        var init = new Powerange(sum, {
            decimal: false,
            min: 1000,
            max: 100000,
            step: 1000,
            start: 25000,
            hideRange: true,
        });

        var date = document.querySelector('.js-range-date');

        var initDate = new Powerange(date, {
            decimal: false,
            min: 5,
            max: 30,
            start: 10,
            hideRange: true,
        });

        $('.js-range-sum').on('change', function () {
            $('#calculator_sum').text($(this).val());
        });

        $('.js-range-date').on('change', function () {
            $('#calculator_date').text($(this).val());
        });
    });

    //sort
    $(function() {
        $('.js-sort a').click(function (e) {
            e.preventDefault();
            $('.b-sort a').removeClass('active');
            $(this).addClass('active');
        });
    });

    //close alert
    $(function() {
        $('.js-close-alert').click(function (e) {
            e.preventDefault();
            $(this).parent().hide();
        });
    });

    //show card
    $(function() {
        $('.js-show-card').click(function (e) {
            e.preventDefault();
            $('.b-card__item').find('.b-card_hidden').removeClass('show');
            $(this).parents('.b-card__item').find('.b-card_hidden').addClass('show');
            $('.overlay').addClass('show');
        });
    });

    //close card
    $('.js-close-card').click(function (e) {
        e.preventDefault();
        $('.b-card__item').find('.b-card_hidden').removeClass('show');
        $('.overlay').removeClass('show');
    });

    //close card
    $('.overlay').click(function (e) {
        e.preventDefault();
        $('.b-card_hidden').removeClass('show');
        $(this).removeClass('show');
    });

    // маски
    $('[type="tel"]').inputmask({
        "mask": "+7 (999) 999-99-99",
        "clearIncomplete": true,
        autoUnmask: true,
        removeMaskOnSubmit: false,
        showMaskOnHover: false,
    });

    // взрываем модальное окно
    var startWindowScroll = 0;
    $('.js-modal').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal-default',
        removalDelay: 300,
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
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

    //slider табов
    $(window).on('load ready resize', function () {
        if ($(window).width() <= '767') {
            $('.js-tabs').not('.slick-initialized').slick({
                infinite: false,
                dots: false,
                arrows: false,
                speed: 300,
                variableWidth: true
            });
        } else {
            if ($('.js-tabs').is('.slick-initialized'))
                $('.js-tabs').slick('unslick');
        }
    });
});




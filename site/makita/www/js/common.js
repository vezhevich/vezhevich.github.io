$(function() {
    // dropdown
    $('.js-b-dropdown__show').click(function() {
        $(this).parent().addClass('open');
        $('.js-b-dropdown__input').focus();
    });

    $('.js-b-dropdown__toggle').click(function() {
        $(this).parent().toggleClass('open');
        $('.js-b-dropdown__input').focus();
    });

    // кастомный скролл
    $(window).on("load",function(){
        $(".js-b-dropdown__list").mCustomScrollbar();
    });
});

// взрываем модальное окно
$(function() {
    var startWindowScroll = 0;
    $('.js-modal').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal',
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
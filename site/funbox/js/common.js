//добавляем актив для карточки
$(function () {
    $(".js-b-cards").click(function() {
        $(this).parent('.b-cards__item').removeClass('b-cards__item_selected');
        $(this).toggleClass("b-cards__item_selected");
        if ($(".b-cards__item").hasClass('b-cards__item_disabled')) {
            $('.b-cards__item_disabled').removeClass('b-cards__item_selected');
        }
    });

    $(".js-b-cards-link").click(function(e) {
        e.preventDefault();
        $(this).parents('.b-cards__item-wrap').find('.b-cards__item').addClass('b-cards__item_selected');
        if ($(".b-cards__item").hasClass('b-cards__item_disabled')) {
            $('.b-cards__item_disabled').removeClass('b-cards__item_selected');
        }
    });
});

//ховер по элементу
$(function () {
    $(".js-b-cards").click(function() {
        $(this).parents('.b-cards__item-wrap').hover(function() {
            $(this).find('.b-cards__item').addClass('second-hover');
            if ($(".b-cards__item").hasClass('b-cards__item_disabled')) {
                $('.b-cards__item_disabled').removeClass('second-hover');
            }
        }, function() {
            $(this).find('.b-cards__item').addClass('second-hover');
            if ($(".b-cards__item").hasClass('b-cards__item_disabled')) {
                $('.b-cards__item_disabled').removeClass('second-hover');
            }
        });
    });

    $(".js-b-cards-link").click(function(e) {
        e.preventDefault();
        $('.b-cards__item-wrap').hover(function() {
            $(this).find('.b-cards__item').addClass('second-hover');
            if ($(".b-cards__item").hasClass('b-cards__item_disabled')) {
                $('.b-cards__item_disabled').removeClass('second-hover');
            }
        }, function() {
            $(this).find('.b-cards__item').addClass('second-hover');
            if ($(".b-cards__item").hasClass('b-cards__item_disabled')) {
                $('.b-cards__item_disabled').removeClass('second-hover');
            }
        });
    });
});

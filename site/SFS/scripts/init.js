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

    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    $('.cat-tabs .cat-tabs__title').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parents('.cat-tabs').find('.cat-tabs__title').not($(this)).removeClass('active');
        $(this).parents('.cat-tabs').find('.cat-tabs__content[data-tab="' + $(this).attr('data-tab') + '"]').addClass('active');
        $(this).parents('.cat-tabs').find('.cat-tabs__content').not('[data-tab="' + $(this).attr('data-tab') + '"]').removeClass('active');
    });

    $(document).on('change', 'input:file', function () {
        var input = $(this);

        input.next('span').text(input.val().split(/(\\|\/)/g).pop());
    });

    $('[data-modal="modal-nav"]').on('click', function (e) {
        e.preventDefault();
        $('#modal-nav').addClass('active');
        $("body").addClass('shadow-overlay');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })

    $('[data-modal="modal-cart"]').on('click', function (e) {
        e.preventDefault();
        $('#modal-nav').removeClass('active');
        $('#modal-cart').addClass('active');
        $("body").addClass('shadow-overlay');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })



    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".modal-nav, .modal-custom, .modal-edit, .modal-cart"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("body").removeClass('shadow-overlay');
            $(".modal-nav, .modal-custom, .modal-edit, .modal-cart").removeClass('active');
        }
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });
            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    });

    $('[data-modal="modal-delete"]').on('click', function (e) {
        e.preventDefault();
        $('#modal-delete').addClass('active');
        $("body").addClass('shadow-overlay');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })

    $('[data-modal="modal-edit"]').on('click', function (e) {
        e.preventDefault();
        $('#modal-edit').addClass('active');
        $("body").addClass('shadow-overlay');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })

    $('.modal-custom__close, .modal-edit__close').on('click', function (e) {
        $(this).parent().removeClass('active');
        $("body").removeClass('shadow-overlay');
        //        $(".modal").removeClass('active');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })

    $('.modal-btn__close').on('click', function (e) {
        $(this).parent().parent().parent().parent().parent().removeClass('active');
        $("body").removeClass('shadow-overlay');
        //        $(".modal").removeClass('active');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })

    $(".deal__your-price input.inputbox2").on("input", function () {
        var test = (this);
        test.onkeypress = event => {
            // Control buttons
            if (event.key.length > 1) return true;
            test.value = (test.value + event.key)
                .replace(/\D/g, '')
                .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') +
                ' ₽';
            event.preventDefault();
        }
    });

    // Placeholder for dropdowns
    const $placeholder = $("select[placeholder]");
    if ($placeholder.length) {
        $placeholder.each(function () {
            const $this = $(this);

            // Initial
            $this.addClass("placeholder-shown");
            const placeholder = $this.attr("placeholder");
            $this.prepend(`<option value="" selected>${placeholder}</option>`);

            // Change
            $this.on("change", (event) => {
                const $this = $(event.currentTarget);
                if ($this.val()) {
                    $this.removeClass("placeholder-shown").addClass("placeholder-hidden");
                } else {
                    $this.addClass("placeholder-shown").removeClass("placeholder-hidden");
                }
            });
        });
    }

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".select-custom"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".select-custom").removeClass('active');

        };
    });

    $(function () {
        $('.select-custom__title').click(function () {
            $(this).parent().toggleClass('active');
        });

        $('.select-custom__label').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $(this).parent().parent().siblings('.select-custom__title').html($(this).html()).addClass('selected');
            $(this).parent().parent().removeClass('active');
            $(this).removeClass('inactive');
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().addClass('inactive');
        });
    });

    $('.calc-tabs .calc-tabs__title').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parents('.calc-tabs').find('.calc-tabs__title').not($(this)).removeClass('active');
        $(this).parents('.calc-tabs').find('.calc-tabs__content[data-tab="' + $(this).attr('data-tab') + '"]').addClass('active');
        $(this).parents('.calc-tabs').find('.calc-tabs__content').not('[data-tab="' + $(this).attr('data-tab') + '"]').removeClass('active');
    });

    $('[data-modal="modal-add-photo"]').on('click', function (e) {
        e.preventDefault();
        $('#modal-add-photo').addClass('active');
        $("body").addClass('shadow-overlay');
        if ($('body').hasClass('shadow-overlay')) {

            $('body').css({
                'margin-right': scrollbarWidth + 'px'
            });

            $('.header').css({
                'padding-right': scrollbarWidth + 'px'
            });
        } else {
            $('body').css('margin-right', '');
            $('.header').css('padding-right', '');
        };
    })

});

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
});

// маска номера телефона
$(function() {
    $(".js-mask-tel").mask("+7 (999) 999-99-99");
    $(".js-mask-cadastr").mask("99 : 9999 : 999999 : 999");
    $(".js-mask-passport").mask("9999 : 999999");
    $(".js-mask-code").mask("999-999");
});

// маска для времени
$(function() {
    Inputmask("datetime", {
        inputFormat: "HH:MM",
        max: 24
    }).mask(".js-mask-time");
});

// взрываем модальное окно меню гамбургера
$(function() {
    var startWindowScroll = 0;
    $('.js-modal-menu').magnificPopup({
        // removalDelay: 500,
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal-menu b-modal',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: false,
        showCloseBtn: false,
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
                $('.b-header__burger .icon-icon-burger').addClass('hide');
                $('.b-header__burger .icon-icon-close').addClass('show');
                $('.b-header').addClass('b-header_z-index');
            },
            beforeClose: function() {
                $('.b-header__burger .icon-icon-burger').removeClass('hide');
                $('.b-header__burger .icon-icon-close').removeClass('show');
                $('.b-header').removeClass('b-header_z-index');
            },
            close: function () {
                $(window).scrollTop(startWindowScroll);
                $('body').off('touchmove');
            }
        }
    });

    $(document).on('click', '.js-modal-menu-close', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

// drop с поиском
$(function() {
    $(".b-dropdown-search").select2({
        placeholder: "Выберите город",
        minimumInputLength: 1,
        theme: 'default b-dropdown-search'
    });
});

// drop с поиском на главной
$(function() {
    $(".b-dropdown-search-main").select2({
        placeholder: "Выберите город",
        minimumInputLength: 1,
        theme: 'default b-dropdown-search b-dropdown-search-main'
    });
});

// drop с поиском на странице калькулятор
$(function() {
    $(".b-dropdown-calc").select2({
        placeholder: "Выберите город",
        minimumInputLength: 1,
        theme: 'default b-dropdown-search b-dropdown-calc'
    });
});

/* на мобиле крутим навигацию */
$(function () {
    var mySwiper = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();

        if(screenWidth < 768 && mySwiper == undefined) {
            mySwiper = new Swiper('.swiper-box', {
                slidesPerView: 'auto',
                spaceBetween: 15,
                freeMode: true,
            });

            // mySwiper.slideTo(getSlideIndexByClass('b-nav-sidebar__item_active'));
            //
            // function getSlideIndexByClass(className) {
            //     var index = 0;
            //     $.each($('.swiper-wrapper').children(), function(i, item) {
            //         if ($(item).hasClass(className)) {
            //             index = i;
            //             return false;
            //         }
            //     });
            //     return index;
            // }

        } else if (screenWidth > 768 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });

});


//сортер
$(function() {
    $(".b-select").select2({
        theme: 'default b-select',
        minimumResultsForSearch: Infinity,
    });
});

//пагинация
$(function() {
    $(".b-select-page").select2({
        theme: 'default b-select b-select-page',
        minimumResultsForSearch: Infinity,
    });
});

//пагинация
$(function() {
    $(".b-select-form").select2({
        theme: 'default b-select b-select-form',
        minimumResultsForSearch: Infinity,
    });
});

//filter main
$(function() {
    $(".b-select-form-inner").select2({
        theme: 'default b-select b-select-form-inner',
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true
    });
});

//filter white
$(function() {
    $(".b-select-form-white").select2({
        theme: 'default b-select b-select-form-white',
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true
    });
});

//filter white full
$(function() {
    $(".b-select-form-white-full-width").select2({
        theme: 'default b-select b-select-form-white b-select-form-white-full-width',
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true
    });
});

$(function() {
    $(".b-select-form-grey").select2({
        theme: 'default b-select b-select-form-grey',
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true
    });
});

// навигация на странице партнеров
$(function() {
    $(".b-select-navigation").select2({
        theme: 'default b-select b-select-navigation',
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true
    });
});

//селект на странице калькулятора
$(function() {
    $(".b-select-form-calc").select2({
        theme: 'default b-select b-select-form-calc',
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: true
    });
});


// фокус на input в paginator
$(function() {
    $(document).on('click', '.js-paginator-page-focus', function() {
        $('.b-paginator__select-page-input').focus();
    });

    $('.b-paginator__select-page-input').focusin(function(){
        $('.b-paginator__select-page').addClass('active');
    }).focusout(function(){
        $('.b-paginator__select-page').removeClass('active');
    });
});


// слайде в карточке объекта
$(function() {
    $('.js-card-object__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    infinite: false,
                }
            }
        ]
    });
});

// слайде в карточке объекта compact
$(function() {
    $('.js-card-object-slider-compact').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    variableWidth: true,
                    infinite: false,
                }
            }
        ]
    });
});

// загрузчик файлов drop
Dropzone.autoDiscover = false;

$(document).ready(function () {
    Dropzone.prototype.defaultOptions.dictDefaultMessage = "Выберите файл";
    Dropzone.prototype.defaultOptions.dictFallbackMessage = "Ваш браузер не поддерживает dropzone js";
    Dropzone.prototype.defaultOptions.dictFallbackText = "Please use the fallback form below to upload your files like in the olden days.";
    Dropzone.prototype.defaultOptions.dictFileTooBig = "Недопустимый размер файла (@{{filesize}}MiB). Максимальный размер файла: @{{maxFilesize}}MiB.";
    Dropzone.prototype.defaultOptions.dictInvalidFileType = "Вы не можете загрузить файлы с данным расширением";
    Dropzone.prototype.defaultOptions.dictResponseError = "Ошибка @{{statusCode}} code.";
    Dropzone.prototype.defaultOptions.dictCancelUpload = "Отменить";
    Dropzone.prototype.defaultOptions.dictCancelUploadConfirmation = "Вы уверены, что хотите отменить загрузку?";
    Dropzone.prototype.defaultOptions.dictRemoveFile = "Удалить";
    Dropzone.prototype.defaultOptions.dictMaxFilesExceeded = "Максимальное количество файлов";


    $("#image-upload").dropzone({
        maxFiles: 2000,
        url: "/ajax_file_upload_handler/",
        success: function (file, response) {
            console.log(response);
        }
    });

    $("#image-upload-inner").dropzone({
        maxFiles: 2000,
        url: "/ajax_file_upload_handler/",
        success: function (file, response) {
            console.log(response);
        }
    });
})

// автовысота textarea
$(function() {
    autosize($('.textarea-autosize'));
});

// если флаг стоит то активируем input
$(function () {
    // $('.js-entity').click(function () {
    //     var inputCheck2 = $('#comm2').prop("checked");
    //
    //     if (inputCheck2 == false) {
    //         $('.input-wrapper').addClass('input-wrapper_opacity');
    //         $('#input-comm').attr("readonly", true);
    //         $('#input-comm').blur();
    //     } else if (inputCheck2 == true) {
    //         $('.input-wrapper').removeClass('input-wrapper_opacity');
    //         $('#input-comm').attr("readonly", false);
    //         $('#input-comm').focus();
    //     }
    // });

    $('.js-entity').click(function () {
        $('.input-wrapper').removeClass('input-wrapper_opacity');
        $('#input-comm').attr("readonly", false);
        $('#input-comm').focus();
    });

    $('.js-disabled').click(function () {
        $('.input-wrapper').addClass('input-wrapper_opacity');
        $('#input-comm').attr("readonly", true);
        $('#input-comm').blur();
    });
});


$(function () {
    var $range = $("#apartment-area-slider");
    var $input = $("#apartment-area-input");
    var instance;
    var min = 0;
    var max = 1000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 100,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

$(function () {
    var $range = $("#kitchen-area-slider");
    var $input = $("#kitchen-area-input");
    var instance;
    var min = 0;
    var max = 1000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 30,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

$(function () {
    var $range = $("#living-space-slider");
    var $input = $("#living-space-input");
    var instance;
    var min = 0;
    var max = 1000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 0,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

$(function () {
    var $range = $("#floor-slider");
    var $input = $("#floor-input");
    var instance;
    var min = 0;
    var max = 1000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 0,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

$(function () {
    var $range = $("#floor-house-slider");
    var $input = $("#floor-house-input");
    var instance;
    var min = 0;
    var max = 1000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 0,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

$(function () {
    var $range = $("#height-floor-slider");
    var $input = $("#height-floor-input");
    var instance;
    var min = 0;
    var max = 5;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 2.6,
        step: 0.1,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

$(function () {
    var $range = $("#build-year-slider");
    var $input = $("#build-year-input");
    var instance;
    var min = 1920;
    var max = 2020;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 2000,
        step: 1,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});


$(function () {
    var $range = $("#time-slider");
    var $inputFrom = $("#time-slider-from");
    var $inputTo = $("#time-slider-to");

    $range.ionRangeSlider({
        grid: false,
        skin: "round",
        type: 'double',
        min: moment("0000", "hhmm").valueOf(),
        max: moment("2359", "hhmm").valueOf(),
        from: moment("0800", "hhmm").valueOf(),
        to: moment("1900", "hhmm").valueOf(),
        force_edges: true,
        drag_interval: true,
        step: 3600000,
        min_interval: 3600000,
        prettify: function (num) {
            return moment(num).format('HH:mm');
        }
    });
});

// ввод только цифр
$(function () {
    $('[name=quantity]').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
});

/* мультиселект */
$(function () {
    $('.b-multiseleсt').multiselect({
        numberDisplayed: 1,
        nonSelectedText: 'Выберите...',
        nSelectedText  : "выбрано",
        allSelectedText: "Выбраны все",
        inheritClass: true,
        templates: {
            li: '<li class="checkList"><a tabindex="0"><div class="b-checkbox"><label for=""></label></div></a></li>'
        }
    });

    $('.multiselect-container div.b-checkbox').each(function(index) {

        var id = 'multiselect-' + index,
            $input = $(this).find('input');

        // Associate the label and the input
        $(this).find('label').attr('for', id);
        $input.attr('id', id);

        // Remove the input from the label wrapper
        $input.detach();

        // Place the input back in before the label
        $input.prependTo($(this));

        $(this).click(function(e) {
            // Prevents the click from bubbling up and hiding the dropdown
            e.stopPropagation();
        });

    });
});

//показываем меню в карточке избранного
$(document).on('click', '.js-card-object__menu', function(e) {
    e.preventDefault();
    $(this).parent().find('.b-card-object__group-actions-wrapper').toggleClass('show');
});

//badge
$(document).on('click', '.js-badge', function(e) {
    e.preventDefault();
    $('.b-badge__item').removeClass('b-badge__item_active');
    $(this).addClass('b-badge__item_active');
});

//slider filter main
$(function () {
    var $range = $("#area-slider");
    var $inputFrom = $("#area-slider-from");
    var $inputTo = $("#area-slider-to");
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
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function () {
    var $range = $("#area-slider2");
    var $inputFrom = $("#area-slider-from2");
    var $inputTo = $("#area-slider-to2");
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
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function () {
    var $range = $("#area-slider3");
    var $inputFrom = $("#area-slider-from3");
    var $inputTo = $("#area-slider-to3");
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
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function () {
    var $range = $("#cost-slider");
    var $inputFrom = $("#cost-slider-from");
    var $inputTo = $("#cost-slider-to");
    var instance;
    var min = 0;
    var max = 20000000;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 3000000,
        to: 10000000,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' ₽');
        $inputTo.prop("value", to + ' ₽');
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

$(function () {
    var $range = $("#cost-slider2");
    var $inputFrom = $("#cost-slider-from2");
    var $inputTo = $("#cost-slider-to2");
    var instance;
    var min = 0;
    var max = 20000000;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 3000000,
        to: 10000000,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' ₽');
        $inputTo.prop("value", to + ' ₽');
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

$(function () {
    var $range = $("#cost-slider3");
    var $inputFrom = $("#cost-slider-from3");
    var $inputTo = $("#cost-slider-to3");
    var instance;
    var min = 0;
    var max = 20000000;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 3000000,
        to: 10000000,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' ₽');
        $inputTo.prop("value", to + ' ₽');
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

// слайдер promo
$(function() {
    var swiper = new Swiper('.js-promo__slider', {
        slidesPerView: 'auto',
    });
});

// слайдер media
$(function() {
    var swiper = new Swiper('.js-media-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            1320: {
                slidesPerView: 4,
            },
        },

        navigation: {
            nextEl: '.b-media-control.swiper-button-next',
            prevEl: '.b-media-control.swiper-button-prev',
        },
    });
});

// слайдер media inner
$(function() {
    var swiper = new Swiper('.js-media-slider2', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 'auto',
            },
            768: {
                slidesPerView: 2,
            },

            1320: {
                slidesPerView: 1,
            }
        },

        navigation: {
            nextEl: '.b-media-inner-control.swiper-button-next',
            prevEl: '.b-media-inner-control.swiper-button-prev',
        },
    });
});

// слайдер media
$(function() {
    var swiper = new Swiper('.js-media-slider3', {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            1320: {
                slidesPerView: 4,
            },
        },

        navigation: {
            nextEl: '.b-media-control2.swiper-button-next',
            prevEl: '.b-media-control2.swiper-button-prev',
        },
    });
});

// слайдер media
$(function() {
    var swiper = new Swiper('.js-media-slider4', {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            1320: {
                slidesPerView: 4,
            },
        },

        navigation: {
            nextEl: '.b-media-control3.swiper-button-next',
            prevEl: '.b-media-control3.swiper-button-prev',
        },
    });
});

//слайдер useful
$(function() {
    var mySwiper = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 1320 && mySwiper == undefined) {
            mySwiper = new Swiper('.js-useful-slider', {
                slidesPerView: 'auto',
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 'auto',
                    },
                },
            });
        } else if (screenWidth > 1309 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }

//Swiper plugin initialization
    initSwiper();

//Swiper plugin initialization on window resize
    $(window).on('resize', function(){
        initSwiper();
    });
});

//переключатель в b-filter-main
$(function() {
    $(document).on('click', '.js-filter-switch', function(e) {
        e.preventDefault();
        $(this).parent('').find('span').removeClass('active');
        $(this).addClass('active');
    });
});

//добавляем в избранное в карточке объекта
$(function() {
    $(document).on('click', '.js-add-favorite-button', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});

//dou slider floor
$(function() {
    var $range = $("#floor-slider-duo");
    var $inputFrom = $("#floor-slider-duo-from");
    var $inputTo = $("#floor-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 3,
        to: 10,
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


$(function() {
    var $range = $("#all-area-slider-duo");
    var $inputFrom = $("#all-area-slider-duo-from");
    var $inputTo = $("#all-area-slider-duo-to");
    var instance;
    var min = 0;
    var max = 200;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 56,
        to: 120,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function() {
    var $range = $("#kitchen-area-slider-duo");
    var $inputFrom = $("#kitchen-area-slider-duo-from");
    var $inputTo = $("#kitchen-area-slider-duo-to");
    var instance;
    var min = 0;
    var max = 200;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 30,
        to: 180,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function() {
    var $range = $("#living-area-slider-duo");
    var $inputFrom = $("#living-area-slider-duo-from");
    var $inputTo = $("#living-area-slider-duo-to");
    var instance;
    var min = 0;
    var max = 200;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 70,
        to: 190,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function() {
    var $range = $("#building-time-slider-duo");
    var $inputFrom = $("#building-time-slider-duo-from");
    var $inputTo = $("#building-time-slider-duo-to");
    var instance;
    var min = 1980;
    var max = 2020;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 1994,
        to: 2010,
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


$(function() {
    var $range = $("#all-floor-slider-duo");
    var $inputFrom = $("#all-floor-slider-duo-from");
    var $inputTo = $("#all-floor-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 10,
        to: 90,
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

$(function() {
    var $range = $("#radius-slider-duo");
    var $inputFrom = $("#radius-slider-duo-from");
    var $inputTo = $("#radius-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 20,
        to: 30,
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

$(function() {
    var $range = $("#land-area-slider-duo");
    var $inputFrom = $("#land-area-slider-duo-from");
    var $inputTo = $("#land-area-slider-duo-to");
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
        from: 10,
        to: 100,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from + ' сот');
        $inputTo.prop("value", to + ' сот');
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

$(function() {
    var $range = $("#all-area-inner-slider-duo");
    var $inputFrom = $("#all-area-inner-slider-duo-from");
    var $inputTo = $("#all-area-inner-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 10,
        to: 60,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from  + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function() {
    var $range = $("#all-area-commercial-slider-duo");
    var $inputFrom = $("#all-area-commercial-slider-duo-from");
    var $inputTo = $("#all-area-commercial-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 10,
        to: 60,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from  + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function() {
    var $range = $("#land-area-commercial-slider-duo");
    var $inputFrom = $("#land-area-commercial-slider-duo-from");
    var $inputTo = $("#land-area-commercial-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 10,
        to: 80,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from  + ' м²');
        $inputTo.prop("value", to + ' м²');
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

$(function() {
    var $range = $("#floor-inner-slider-duo");
    var $inputFrom = $("#floor-inner-slider-duo-from");
    var $inputTo = $("#floor-inner-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 10,
        to: 80,
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

$(function() {
    var $range = $("#floor-inner-house-slider-duo");
    var $inputFrom = $("#floor-inner-house-slider-duo-from");
    var $inputTo = $("#floor-inner-house-slider-duo-to");
    var instance;
    var min = 0;
    var max = 100;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 10,
        to: 90,
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

// скрываем/показываем детальную на карте
$(document).on('click', '.js-show-detail-page', function(e) {
    e.preventDefault();
    $('.b-map-full-width__detail').addClass('show');
});

$(document).on('click', '.js-hide-detail-page', function(e) {
    e.preventDefault();
    $('.b-map-full-width__detail').removeClass('show');
});

// слайдер на детальной страник на карте поиска
$(function() {
    $('.js-detail-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    variableWidth: true,
                    infinite: false,
                    arrows: false,
                }
            }
        ]
    });
});

// взрываем модальное окно
$(function() {
    var startWindowScroll = 0;
    $('.js-modal-gallery').magnificPopup({
        // removalDelay: 500,
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal b-modal-gallery',
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
});

// галерея в содальном окне
$(document).on('click', '.js-modal-gallery', function(e) {
    e.preventDefault();
    var galleryThumbs = new Swiper('.b-modal-gallery__slider-nav', {
        spaceBetween: 4,
        slidesPerView: '5',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('.b-modal-gallery__slider-for', {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});

// галерея на странице объекта
$(function() {
    var galleryThumbs = new Swiper('.b-object__gallery-thumbs', {
        spaceBetween: 4,
        slidesPerView: 5,
        direction: 'vertical',
        breakpoints: {
            0: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            }
        },

        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.b-object__gallery-top', {
        spaceBetween: 10,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            768: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});

// взрываем модальное окно
$(function() {
    var startWindowScroll = 0;
    $('.js-modal-call').magnificPopup({
        // removalDelay: 500,
        type: 'inline',
        midClick: true,
        mainClass: 'b-modal b-modal-centered',
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
});

//refresh slider on modal
$(document).on('click', '.js-modal-call', function(e) {
    e.preventDefault();
    $('.b-card-object__slider').slick('setPosition');
});


//tooltip bootstrap
$(function() {
    $('.b-tooltip').tooltip({
        // trigger: 'click',
        template: '<div class="tooltip b-tooltip-default bs-tooltip-top" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        offset: '0 4'
    });
});

$(function() {
    $(document).on('click', '.nav-link', function(e) {
        e.preventDefault();
        if ($('#member-tab').hasClass('active')) {
            $('.b-card-profile-company__group').addClass('show');
        } else {
            $('.b-card-profile-company__group').removeClass('show');
        }
    });
});

//слайдер цены на странице калькулятора
$(function () {
    var $range = $("#calc-cost-slider");
    var $input = $("#calc-cost-input");
    var instance;
    var min = 0;
    var max = 10000000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 2000000,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

//слайдер цены на странице калькулятора
$(function () {
    var $range = $("#calc-first-cost-slider");
    var $input = $("#calc-first-cost-input");
    var instance;
    var min = 0;
    var max = 1000000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 300000,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

//слайдер месяца на странице калькулятора
$(function () {
    var $range = $("#calc-time-credit-slider");
    var $input = $("#calc-time-credit-input");
    var instance;
    var min = 0;
    var max = 96;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 24,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

//слайдер долга на странице калькулятора
$(function () {
    var $range = $("#calc-debt-slider");
    var $input = $("#calc-debt-input");
    var instance;
    var min = 0;
    var max = 10000000;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 2000000,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

// /слайдер срока кредита на странице калькулятора
$(function () {
    var $range = $("#calc-time-credit-inner-slider");
    var $input = $("#calc-time-credit-inner-input");
    var instance;
    var min = 0;
    var max = 50;

    $range.ionRangeSlider({
        skin: "round",
        type: "single",
        min: min,
        max: max,
        from: 15,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
        }
    });

    instance = $range.data("ionRangeSlider");

    $input.on("input", function() {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            from: val
        });
    });
});

//datepicker
$(function() {
    $(function() {
        pickmeup('.b-datepicker', {
            locale : 'ru',
            mode: 'single',
            default_date: false,
            class_name: 'b-datepicker__ctn',
            hide_on_select: true,
            locales :
                {
                    ru :{
                        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                        daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
                    },
                },
        });
    });
});
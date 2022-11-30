// loader
$(document).ready(function(){
    $('body').removeClass('loading');
});

// скрыть/показать сайдбар
$(function() {
    if ($('.js-show-sidebar-button').length > 0) {
        let button = document.querySelector('.js-show-sidebar-button')
        let content = document.querySelector('.l-main__wrapper-content')
        let sidebar = document.querySelector('.l-main__sidebar')

        button.onclick = () => {
            content.classList.toggle('l-main__wrapper-content_pushed')
            sidebar.classList.toggle('l-main__sidebar_pushed')
            button.classList.toggle('opened')
        }

        let screenWidth = $(window).width();
        if(screenWidth < 767) {
            $('.l-main__wrapper-content').removeClass('l-main__wrapper-content_pushed')
            $('.l-main__sidebar').removeClass('l-main__sidebar_pushed')
            $('.js-show-sidebar-button').removeClass('opened')
        }

    };
});



// подменю в сайдбаре
$(function() {
    $(".js-show-submenu").click(function () {
        $(this).toggleClass('show');
    });
});

//скролл до элемента
$(function() {
    $('.js-anchor[href^="#"]').click(function(){
        var target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
});

//переход к следующему вопросу теста
$(function() {
    $('.js-next').on('click', function () {
        if ($('div.active').index() == -1) {
            $('.test__card div:first-child').addClass('active');
        } else {
            $('div.active').next('div').addClass('active');
            $('div.active').prev('div').removeClass('active');
        }

    });

    $('.js-prev').on('click', function () {
        if ($('div.active').index() == -1) {
            /* без действий */
        } else {

            $('div.active').prev('div').addClass('active');
            $('div.active').next('div').removeClass('active');
        }

    });
});

// загрузка файла
$(function() {
    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-button-text').innerText;

        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.input__file-button-text').innerText = labelVal;
        });
    });
});

// проверяем линию поиска
// если что то есть показываем кнопку х
$(function() {
    $('.js-input-search').keyup(function() {
        if ($(this).val().trim().length) {
            $(this).parent().addClass('show');
        } else {
            $(this).parent().removeClass('show');
        }
    });

    // по клику ошчищаем поле поиска
    $('.js-clear-input').click(function(){
        $(this).parent().removeClass('show');
        $('.search__line-input').val('');
    });
});

// кастомный селект
$(function() {
    if ($('.js-choice').length > 0) {
        let element = document.querySelector('.js-choice');
        let choices = new Choices(element, {
            classNames: {
                containerOuter: 'choices select',
            },
            placeholder: true,
            itemSelectText: '',
            searchEnabled: false,
        });
    };
});

$(function() {
    if ($('.js-choice2').length > 0) {
        let element2 = document.querySelector('.js-choice2');
        let choices = new Choices(element2, {
            classNames: {
                containerOuter: 'choices select select_multiply',
            },
            placeholder: false,
            itemSelectText: '',
            searchEnabled: false,
            noChoicesText: 'Курсов больше нет',
            removeItemButton: true
        });
    };
});

// взрываем модальное окно
$(function() {
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
});

// закрытие модалки
$('.js-close-modal').click(function(){
    $.magnificPopup.close();
});

// datepicker
$(function() {
    $('.datepicker').datepicker({
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        dateFormat : "dd-mm-yy",
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });
});

// поиск в шапке
$(function() {
    $('.js-show-search-line').click(function(){
        $('.header__search').addClass('show');
    });

    $('.js-close-search-line').click(function(){
        $('.header__search').removeClass('show');
    });
});

// dropdown
$(function() {
    if ($('.dropdown__button').length > 0) {
        const btnMenu = document.querySelector(".dropdown__button");
        const menu = document.querySelector(".dropdown__ctn");
        const toggleMenu = function () {
            menu.classList.toggle("open");
        }

        const toggleBtn = function () {
            btnMenu.classList.toggle("open");
        }

        btnMenu.addEventListener("click", function (e) {
            e.stopPropagation();
            toggleMenu();
            toggleBtn();
        });

        document.addEventListener("click", function (e) {
            const target = e.target;
            const its_menu = target == menu || menu.contains(target);
            const its_btnMenu = target == btnMenu;
            const menu_is_active = menu.classList.contains("open");

            if (!its_menu && !its_btnMenu && menu_is_active) {
                toggleMenu();
                toggleBtn();
            }
        });
    }
});
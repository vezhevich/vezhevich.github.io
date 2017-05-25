$(document).ready(function () {

    $('.c-instruction-aside-item').on('click', function (e) {
        e.preventDefault();
        showPopup($(this).next('.c-popup'));
    });

    $('.c-popup').on('click', function (e) {
        if(!$(e.target).closest('.c-popup__inner').length){
            hidePopup();
        }
    });
    $(document).on('click', '.js-popup-close', function (e) {
       e.preventDefault();
       hidePopup();
    });

    $('.js-tab').on('click', function(e) {
        e.preventDefault();
        var target = $('[data-tab="'+$(this).data('tab-target')+'"]');
        $('.js-tab').removeClass('active');
        $(this).addClass('active');
        $('.js-tab-col').removeClass('active');
        target.addClass('active');

    });

    $('.js-tab-xs').on('click', function(e) {
        e.preventDefault();
        var target = $('[data-tab="'+$(this).data('tab-target')+'"]');
        $(this).toggleClass('active');
        target.toggleClass('active');

    });

    $('a.js-scene-btn').on('click', function (e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            //если ты видишь это, надо сделать функцию__))
            $(this).addClass('active').siblings('.js-scene-btn').removeClass('active');
            var _nextstep = $(this).parents('.js-step').next('.js-step'),
                _nextAll = $(this).parents('.js-step').nextAll('.js-step');
            _nextAll.removeClass('active').find('[data-scene-item]').addClass('hidden');
            _nextAll.find('.js-scene-btn').removeClass('active');
            _nextAll.find('.c-instruction-block__check').prop('checked',false);
            $('[data-scene-final-item]').find('.c-instruction-block__check').prop('checked', false);
            $(this).parents('.l-instruction__cont').find('[data-scene-final-item]').addClass('hidden');
    
            if(_nextstep) {
                _nextstep.addClass('active').find('[data-scene-item="'+$(this).data('scene')+'"]').removeClass('hidden');
                // $('body').animate({scrollTop:_nextstep.find(':first-child').offset().top + _nextstep.find(':first-child').height()/1.5  - $(window).height()/2}, 200)
            }
            if($(this).attr('data-scene-final')){
                $(this).parents('.l-instruction__cont').find('[data-scene-final-item]').removeClass('hidden');
            }
            addDots($('.js-tab-col.active .c-instruction-block'), '.c-instruction-dots', 'c-instruction-dots__item');
        }
    
    });
    $('input.js-scene-btn').on('change', function (e) {
        if($(this).is(':checked')) {
            //если ты видишь это, надо сделать функцию__))
            $(this).addClass('active').siblings('.js-scene-btn').removeClass('active');
            var _nextstep = $(this).parents('.js-step').next('.js-step');
            var _nextAll = $(this).parents('.js-step').nextAll('.js-step');
            _nextAll.removeClass('active').find('[data-scene-item]').addClass('hidden');
            _nextAll.find('.js-scene-btn').removeClass('active');
            // _nextAll.find('.c-instruction-block__check').prop('checked', false);
            // $('[data-scene-final-item]').find('.c-instruction-block__check').prop('checked', false);
            $(this).parents('.l-instruction__cont').find('[data-scene-final-item]').addClass('hidden');
    
            if(_nextstep) {
                _nextstep.addClass('active').find('[data-scene-item="'+$(this).data('scene')+'"]').removeClass('hidden');
                // $('body').animate({scrollTop:_nextstep.find(':first-child').offset().top + _nextstep.find(':first-child').height()/1.5  - $(window).height()/2}, 200)
            }
            if($(this).attr('data-scene-final')){
                $(this).parents('.l-instruction__cont').find('[data-scene-final-item]').removeClass('hidden');
            }
            addDots($('.js-tab-col.active .c-instruction-block'), '.c-instruction-dots', 'c-instruction-dots__item');
        }
    
    });

    $('.js-tab-compact').on('click', function(e) {
        e.preventDefault();
        var target = $('[data-tab="'+$(this).data('tab-compact-target')+'"]');
        $('.js-tab-compact').removeClass('active');
        $(this).addClass('active');
        $('.js-tab-col-compact').removeClass('active');
        target.addClass('active');

    });

    $(document).on('click', '.js-map-popup-control-item',  function(e){
        e.preventDefault();
        var $this = $(this);
        var ctn = $this.parents('.map-popup');
        var tabVal = $this.data('tab');

        ctn.find('.map-popup-control-item--active').removeClass('map-popup-control-item--active');
        $this.addClass('map-popup-control-item--active');
        ctn.find('.map-popup-tabs-content-item--active').removeClass('map-popup-tabs-content-item--active');
        ctn.find('.js-map-popup-tabs-content-item[data-target="'+tabVal+'"]').addClass('map-popup-tabs-content-item--active');
    });

    function showPopup (el) {
        $('body').addClass('overflow');
        el.addClass('active');
        if(!el.find('.c-popup__close').length) {
            el.children('.c-popup__inner').append('<a href="#" class="js-popup-close c-popup__close"><img src="../images/icons/popup-close.svg" alt=""></a>');
        }
        // if(!el.find('.c-popup__share').length) {
        //     el.children('.c-popup__inner').append('<a href="#" class="c-popup__share">поделиться<img src="../images/icons/popup-share.svg" alt=""></a>');
        // }
    }
    function hidePopup() {
        $('body').removeClass('overflow');
        $('#shade').removeClass('active');
        $('.c-popup.active').removeClass('active');
    }

    if($('.c-instruction-dots').length){
        addDots($('.js-tab-col.active .c-instruction-block'), '.c-instruction-dots', 'c-instruction-dots__item', true);
        var dotsOffset = $('.c-instruction-dots').offset().top;
    }

    $(window).on('scroll', function () {
        $('.js-tab-col.active .c-instruction-block').each(function () {
            if(!$(this).hasClass('hidden')){
                if($(window).scrollTop() > $(this).offset().top + $(this).height()/1.5 - $(window).height()) {
                    $('.c-instruction-dots__item').removeClass('active');
                    $('[data-step-dot="'+$(this).data('step')+'"]').addClass('active');
                    $('[data-step-dot="'+$(this).data('step')+'"]').prevAll().addClass('ended');
                    // $(this).find('.c-instruction-block__check').prop('checked', true);
                }else{
                    // $(this).find('.c-instruction-block__check').prop('checked', false);
                }
            }
        });
        if($(window).scrollTop() + 20 > dotsOffset) {
            $('.c-instruction-dots').css({'position':'fixed','top':120,'left':$('.c-instruction-dots').parent().offset().left - 40})
        }else{
            $('.c-instruction-dots').css({'position':'absolute', 'left':-20, 'top':0})
        }

    }).trigger('scroll');

    function addDots(el, wrap, wrapItemClass, load) {
        $(wrap).html('');
        var i = 0,
            _class;
        el.each(function () {
            if(!$(this).hasClass('hidden')){
                i++;
                _class = wrapItemClass;
                if(load && i == 1) {
                    _class = wrapItemClass+' active';
                }else if(load && i > 1){
                    _class = wrapItemClass;
                }
                $(this).attr('data-step', i);
                $(wrap).append('<a href="#" data-step-dot="'+i+'" class="'+_class+'"></a>')
            }
        });
        $(window).trigger('scroll');
    }



    var hospitalMap = $('#hospital-map');
    var instructMap = $('#instructionMap');

    if (hospitalMap.length || instructMap.length) {
        var coordsArray = [];
        var titleArr = [];
        var i = 0;
        $('.address-card-list-item').each(function() {
            if($(this).data('coords')){
                coordsArray.push($(this).data('coords'));
            }
            // if($(this).data('id') >= 0){
                titleArr.push({
                    id: i,
                    title: $(this).find('.js-baloon-title').text(),
                    balloonDescription: '<p>'+$(this).find('.js-baloon-description').text()+'</p>',
                    balloonTimetable: '<p>'+$(this).find('.js-baloon-time').text()+'</p>',
                    balloonRoute: '<p>'+$(this).data('road')+'</p>'
                });
                i++;
            // }
        });
        // $('#hospital-map').data('coords', 'wtf');
        var hospitalCoords = coordsArray;
        var titles = titleArr;

        ymaps.ready(init);


    }
    function init(){
        if(hospitalMap.length){
           var myMap = new ymaps.Map('hospital-map' ,{
                center: [55.76, 37.64],
                zoom: 10
            });
        }
        if(instructMap.length){
            var myMap2 = new ymaps.Map('instructionMap' ,{
                center: [55.76, 37.64],
                zoom: 10
            });
        }


        var coords = hospitalCoords;
        // if(hospitalMap.data('hospital') == 'scrining'){
        //     var titles = [
        //         {
        //             id: 0,
        //             title: 'Онкологический клинический диспансер №1 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №1 Департамента здравоохранения города Москвы </p>',
        //             balloonTimetable: '<p>С 8:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Бауманская</p>'
        //         },
        //         {
        //             id: 1,
        //             title: 'Онкологический клинический диспансер №2 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №2 Департамента здравоохранения города Москвы </p>',
        //             balloonTimetable: '<p>С 9:00 до 21:00</p>',
        //             balloonRoute: '<p>Пешком от метро Серпуховская</p>'
        //         },
        //         {
        //             id: 2,
        //             title: 'Онкологический клинический диспансер №3 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №3 Департамента здравоохранения города Москвы</p> ',
        //             balloonTimetable: '<p>С 8:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Бауманская</p>'
        //         },
        //         {
        //             id: 3,
        //             title: 'Онкологический клинический диспансер №4 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №4 Департамента здравоохранения города Москвы </p>',
        //             balloonTimetable: '<p>С 9:00 до 21:00</p>',
        //             balloonRoute: '<p>Пешком от метро Серпуховская</p>'
        //         },
        //         {
        //             id: 4,
        //             title: 'Онкологический клинический диспансер №5 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №5 Департамента здравоохранения города Москвы </p>',
        //             balloonTimetable: '<p>С 9:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Площадь Ильича</p>'
        //         },
        //         {
        //             id: 5,
        //             title: 'Онкологический клинический диспансер №6 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №6 Департамента здравоохранения города Москвы </p>',
        //             balloonTimetable: '<p>С 9:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Кантемировская</p>'
        //         },
        //         {
        //             id: 6,
        //             title: 'Онкологический клинический диспансер №7 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №7 Департамента здравоохранения города Москвы</p>',
        //             balloonTimetable: '<p>С 9:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Кантемировская</p>'
        //         },
        //         {
        //             id: 7,
        //             title: 'Онкологический клинический диспансер №8 Департамента здравоохранения города Москвы',
        //             balloonDescription: '<p>Онкологический клинический диспансер №8 Департамента здравоохранения города Москвы </p> ',
        //             balloonTimetable: '<p>С 9:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Кантемировская</p>'
        //         }
        //
        //     ];
        // }
        // if(hospitalMap.data('hospital') == 'kohlear') {
        //     var titles = [
        //         {
        //             id: 0,
        //             title: 'Научно-исследовательский клинический институт оториноларингологии им. Л.И. Свержевского',
        //             balloonDescription: '<p> Научно-исследовательский клинический институт оториноларингологии им. Л.И. Свержевского </p> ',
        //             balloonTimetable: '<p>С 8:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Выставочная</p>'
        //         },
        //         {
        //             id: 1,
        //             title: 'детский городской консультативно диагностический сурдологический центр',
        //             balloonDescription: '<p>детский городской консультативно диагностический сурдологический центр</p> ',
        //             balloonTimetable: '<p>С 9:00 до 21:00</p>',
        //             balloonRoute: '<p>Пешком от метро Университет</p>'
        //         },
        //         {
        //             id: 2,
        //             title: 'Научно-клинический центр оториноларингологии',
        //             balloonDescription: '<p>Научно-клинический центр оториноларингологии</p> ',
        //             balloonTimetable: '<p>С 8:00 до 20:00</p>',
        //             balloonRoute: '<p>Пешком от метро Щукинская или Сокол</p>'
        //         },
        //         {
        //             id: 3,
        //             title: 'Российский научно-практический центр аудиологии и слухопротезирования',
        //             balloonDescription: '<p> Российский научно-практический центр аудиологии и слухопротезирования </p> ',
        //             balloonTimetable: '<p>С 9:00 до 21:00</p>',
        //             balloonRoute: '<p>Пешком от метро Тропарево</p>'
        //         }
        //
        //     ];
        // }


        // Создание макета балуна на основе Twitter Bootstrap.
        var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="map-popup-ctn">' +
            '<div class="map-popup-arrow"></div>' +
            '<div class="map-popup-inner">' +
            '<a class="map-popup-close" href="#">×</a>' +
            '$[[options.contentLayout observeSize minWidth=425 maxWidth=425]]' +
            '</div>' +
            '</div>', {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.map-popup-ctn', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.map-popup-close')
                        .on('click', $.proxy(this.onCloseClick, this));

                    var itemId = this._templateDataManager._data.geoObject._data.properties._data.baloonNum;

                    var result = titles.filter(function( obj ) {
                        return obj.id === itemId;
                    });

                    var baloonItemTitle = result[0].title;

                    var baloonItemDescription = result[0].balloonDescription;

                    var baloonItemTimetable = result[0].balloonTimetable;

                    var baloonItemRoute = result[0].balloonRoute;

                    if (baloonItemTitle) {
                        this._templateDataManager._data.geoObject._data.properties.set('balloonTitle', baloonItemTitle);
                    }

                    if (baloonItemDescription) {
                        this._templateDataManager._data.geoObject._data.properties.set('balloonDescription', baloonItemDescription);
                    }

                    if (baloonItemTimetable) {
                        this._templateDataManager._data.geoObject._data.properties.set('balloonTimetable', baloonItemTimetable);
                    }

                    if (baloonItemRoute) {
                        this._templateDataManager._data.geoObject._data.properties.set('balloonRoute', baloonItemRoute);
                    }



                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function () {
                    this._$element.find('.map-popup-close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function () {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if(!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.map-popup-arrow')[0].offsetHeight)
                    });
                },

                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function (e) {
                    e.preventDefault();

                    this.events.fire('userclose');
                },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                getShape: function () {
                    if(!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top], [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight + this._$element.find('.map-popup-arrow')[0].offsetHeight
                        ]
                    ]));
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function (element) {
                    return element && element[0] && element.find('.map-popup-arrow')[0];
                }
            });

        // Создание вложенного макета содержимого балуна.
        var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="map-popup js-hospital-map-{{properties.baloonNum}}">'+
            '<div class="map-popup-title">' +
            '<h4>{{properties.balloonTitle}}</h4>'+
            '</div>'+
            '<div class="map-popup-content">' +
            '<div class="map-popup-tab-controls">' +
            '<a href="#" class="map-popup-control-item js-map-popup-control-item map-popup-control-item--active" data-tab="map-popup-description">Описание</a>'+
            '<a href="#" class="map-popup-control-item js-map-popup-control-item" data-tab="map-popup-timetable">Режим работы</a>'+
            '<a href="#" class="map-popup-control-item js-map-popup-control-item" data-tab="map-popup-route">Как добраться</a>'+
            '</div>'+
            '<div class="map-popup-tabs-content js-map-popup-tabs-content">'+
            '<div class="map-popup-tabs-content-item js-map-popup-tabs-content-item map-popup-tabs-content-item--active" data-target="map-popup-description">' +
            '$[properties.balloonDescription]' +
            '</div>' +
            '<div class="map-popup-tabs-content-item js-map-popup-tabs-content-item" data-target="map-popup-timetable">' +
            '$[properties.balloonTimetable]' +
            '</div>' +
            '<div class="map-popup-tabs-content-item js-map-popup-tabs-content-item" data-target="map-popup-route">' +
            '$[properties.balloonRoute]' +
            '</div>' +
            '</div>'+
            '</div>'
            + '</div>'
        );


        var myCollection = new ymaps.GeoObjectCollection({

        }, {
            iconLayout: 'default#image',
            iconImageHref: '/images/icons/pin.svg',
            iconImageSize: [25, 35],
            iconImageOffset: [-3, -42],
            balloonShadow: false,
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0
        });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i], {
                balloonTitle: '',
                balloonDescription: '',
                balloonTimetable: '',
                balloonRoute: '',
                baloonNum: i
            }));
        };

        var myCollection2 = new ymaps.GeoObjectCollection({

        }, {
            iconLayout: 'default#image',
            iconImageHref: '/images/icons/pin.svg',
            iconImageSize: [25, 35],
            iconImageOffset: [-3, -42],
            balloonShadow: false,
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0
        });

        for (var i = 0; i < coords.length; i++) {
            myCollection2.add(new ymaps.Placemark(coords[i], {
                balloonTitle: '',
                balloonDescription: '',
                balloonTimetable: '',
                balloonRoute: '',
                baloonNum: i
            }));
        };

        if(myMap) myMap.geoObjects.add(myCollection);
        if(myMap2) myMap2.geoObjects.add(myCollection2);
    }

        $(".panel-slide .panel-slide-head").click(function() {
        $(this).parents('.panel-slide-item').find('.panel-slide-head').toggleClass('active');
        $(this).parents('.panel-slide-item').find('.panel-slide-content').slideToggle();
        $(this).parents('.panel-slide-item').find('.panel-slide-content').toggleClass('active');
        $(this).parents('.panel-slide-item').toggleClass('active');
        return false;
        });

    var slickSlider = $('.slide-slick')

    if (slickSlider.length) {
        $('.slide-slick').slick({
            infinite: false,
            verticalSwiping: true,
            vertical: true,
            slidesToShow: 3,
            adaptiveHeight: true,
            slidesToScroll: 1
        });

    }

    $(document).on('click', function(e) {
      if (!$(e.target).closest(".ya-share2__popup_visible").length) {
        $('.ya-share2__popup_visible').removeClass('ya-share2__popup_visible');
      }
      e.stopPropagation();
    });

    // при добавлении класса active кнопки шаре не работают
    $(".button-share").click(function() {
        $(this).toggleClass('active');
        $('.ya-share2__popup').toggleClass('ya-share2__popup_visible');
        return false;
    });

    $(".button-favorite").click(function() {
        if (document.all) window.external.addFavorite('');
    });

    $(document).on('click', '.js-header-burger', function(e){
        e.preventDefault();


        $('body').toggleClass('overflow');
        $('html').toggleClass('overflow');

        if ($(window).width() < 1259) {
            $('.js-menu-list').toggleClass('menu-list-ctn--visible')
        }
        else {
            $('.js-left-menu').addClass('left-menu--visible');
            $('.js-left-menu').find('.left-nav-box').addClass('left-nav-box--visible');
            $('.js-td-nav').toggleClass('td-nav--visible');
        }

    });

    $(document).on('click', '.js-left-nav-close', function(e){
        e.preventDefault();
        $('body').removeClass('overflow');
        $('html').removeClass('overflow');

        $('.js-left-menu').find('.left-nav-box').removeClass('left-nav-box--visible');

        setTimeout(function(){
            $('.js-left-menu').removeClass('left-menu--visible');
        },300);
        $('.js-td-nav').removeClass('td-nav--visible');
    });

    $(document).on('click', function (e){
        var menu = $('.left-nav-box');
        var burger = $('.js-header-burger');
        var navMobile = $('.js-td-nav');
        if ($('.js-left-menu').hasClass('left-menu--visible')) {
            if ((!menu.is(e.target) && menu.has(e.target).length === 0) &&
                (!burger.is(e.target) && burger.has(e.target).length === 0) &&
                (!navMobile.is(e.target) && navMobile.has(e.target).length === 0)   ) {
                $('body').removeClass('overflow');
                $('html').removeClass('overflow');
                $('.js-left-menu').find('.left-nav-box').removeClass('left-nav-box--visible');


                setTimeout(function(){
                    $('.js-left-menu').removeClass('left-menu--visible');
                },300);
                $('.js-td-nav').removeClass('td-nav--visible');
            }
        }
    });

    $(document).on('click', '.header-nav-link', function(e){
        var $this = $(this);
        $this.toggleClass('.header-nav-link--active');
        $this.next('.sub-nav-box').slideToggle(0);
    });


    $(document).on('click', '.sub-cat-link', function(e){
        var $this = $(this);
        $this.toggleClass('sub-cat-link--active');
        $this.next('.sub-dd-list').slideToggle(0);
    });

    $(window).on('resize', function(){

        if ($(document).width() > 1260) {
            console.log($('.js-menu-list'))
         if ($('.js-menu-list').hasClass('menu-list-ctn--visible')) {
             $('.js-menu-list').removeClass('menu-list-ctn--visible');
             $('body').removeClass('overflow');
             $('html').removeClass('overflow');
         }
        }
    });



    $(document).on('click', '.js-td-nav .nav-link', function(e){
        var $this = $(this);
        var navList = $this.parents('.nav-list');
        if ($this.parents('.sub-nav').hasClass('active')) {
            $this.parents('.sub-nav').removeClass('active');
        }
        else {
            navList.find('.sub-nav.active').removeClass('active');
            $this.parents('.sub-nav').addClass('active');
        }
    });

    $(document).on('click', '.js-td-nav .dd-item', function(e){
        var $this = $(this);
        var navList = $this.parents('.nav-list');
        if ($this.hasClass('active')) {
            $this.removeClass('active');
        }
        else {
            navList.find('.dd-item.active').removeClass('active');
            $this.addClass('active');
        }
    })

    $(".address-card-list-item__title").click(function() {
        $(this).toggleClass('active');
        $(this).parents('.address-card-list-item-inner').find('.address-card__hidden-block').toggleClass('active');
        return false;
    });

    $(".test-mode").click(function() {
        $('body').addClass('fixed-body');
        $('.feedback-modal').addClass('active');
        $('.shade').addClass('active');
        return false;
    });
    $(".feedback-modal .close-modal").click(function() {
        $('.feedback-modal').removeClass('active');
        $('.shade').removeClass('active');
        $('body').removeClass('fixed-body');
        return false;
    });
    $(".shade").click(function() {
        $('.feedback-modal').removeClass('active');
        $('.shade').removeClass('active');
        $('body').removeClass('fixed-body');
        return false;
    });
});
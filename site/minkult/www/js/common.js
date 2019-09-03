//select
$(function () {
    $('.b-select-custom').niceSelect();
});

//gallery на детальной
$(function () {
    var swiper = new Swiper('.js-b-gallery-detail', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        }
    });
});

//gallery на детальной
$(function () {
    $('.js-b-gallery-detail').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'b-gallery-detail-popup',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1], // Will preload 0 - before current, and 1 after the current image
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
        },
        image: {
            tError: '<a href="%url%">Изображение #%curr%</a> в данный момент недоступно.',
            // titleSrc: function(item) {
            //     return item.el.attr('title') + '<small></small>';
            // }
        }
    });
});

//gallery на media
$(function () {
    $('.js-b-gallery-list').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'b-gallery-list-popup',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1], // Will preload 0 - before current, and 1 after the current image
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
        },
        image: {
            tError: '<a href="%url%">Изображение #%curr%</a> в данный момент недоступно.',
            // titleSrc: function(item) {
            //     return item.el.attr('title') + '<small></small>';
            // }
        }
    });
});

//gallery на media
// $(function () {
//     $().fancybox({
//         selector : '.js-b-gallery-list a:visible',
//         buttons : [
//             'close'
//         ]
//     });
// });

//gallery product
$(function () {
    var swiper = new Swiper('.js-b-product-detail__carousel', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

// взрываем модальное окно
$(function () {
    $('.js-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        mainClass: 'b-modal-white-bg',
        midClick: true,
        alignTop: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

//проверяем, если поля не заполнены то кнопка disabled
function checkParams() {
    var name = $('.b-application__input').val();

    if(name.length != 0) {
        $('.b-application__button').removeAttr('disabled');
    } else {
        $('.b-application__button').attr('disabled', 'disabled');
    }
}

//автовысота textarea
$(function () {
    autosize(document.querySelectorAll('textarea'));
});

// взрываем модальное окно поиска
$(function () {
    $('.js-modal-search').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        mainClass: 'b-modal-black-bg',
        midClick: true,
        alignTop: true,
        showCloseBtn: false
    });
});

// гамбургер
$(function () {
    $('.js-modal-menu').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        mainClass: 'b-modal-menu',
        midClick: true,
        alignTop: true,
        showCloseBtn: false
    });
});

$(function () {
    $('.js-dropdown-menu').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});

// главный слайдер на главной
$(function () {
    var swiper = new Swiper('.js-b-main-slider', {
        autoHeight: true,
        spaceBetween: 40,
        // slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

// слайдер статей на главной
$(function () {
    var swiper = new Swiper('.js-b-media_vertical-carousel', {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            659: {
                slidesPerView: 1,
                autoHeight: true
            }
        }
    });
});

// слайдер афиши на главной
$(function () {
    var swiper = new Swiper('.js-b-playbill_full-page-carousel', {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            659: {
                spaceBetween: 20
            }
        }
    });
});

// слайдер медиа на главной
$(function () {
    var swiper = new Swiper('.js-b-media_main-mod', {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            659: {
                spaceBetween: 20
            }
        }
    });
});

// слайдер товар на главной
$(function () {
    swiper = new Swiper('.js-b-product-carousel', {
        slidesPerView: 6,
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

$(function () {
    var mySwiper = undefined;
    var mySwiper2 = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();

        if(screenWidth < 1259 && mySwiper == undefined) {
            mySwiper = new Swiper('.js-swiper-tablet', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        } else if (screenWidth > 1260 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }

        if(screenWidth < 759 && mySwiper2 == undefined) {
            mySwiper2 = new Swiper('.js-b-navi-page', {
                slidesPerView: 'auto',
                freeMode: true
            });
        } else if (screenWidth > 760 && mySwiper2 != undefined) {
            mySwiper2.destroy();
            mySwiper2 = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });
});

/* map */
// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [51.840782, 107.577908],
//             zoom: 12,
//             behaviors: ['default', 'scrollZoom'],
//             controls: []
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         /**
//          * Создадим кластеризатор, вызвав функцию-конструктор.
//          * Список всех опций доступен в документации.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#constructor-summary
//          */
//         clusterer = new ymaps.Clusterer({
//             /**
//              * Через кластеризатор можно указать только стили кластеров,
//              * стили для меток нужно назначать каждой метке отдельно.
//              * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
//              */
//             preset: 'islands#invertedVioletClusterIcons',
//             /**
//              * Ставим true, если хотим кластеризовать только точки с одинаковыми координатами.
//              */
//             groupByCoordinates: false,
//             /**
//              * Опции кластеров указываем в кластеризаторе с префиксом "cluster".
//              * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ClusterPlacemark.xml
//              */
//             clusterDisableClickZoom: true,
//             clusterHideIconOnBalloonOpen: false,
//             geoObjectHideIconOnBalloonOpen: false
//         }),
//         /**
//          * Функция возвращает объект, содержащий данные метки.
//          * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
//          * Поле balloonContentBody - источник данных для контента балуна.
//          * Оба поля поддерживают HTML-разметку.
//          * Список полей данных, которые используют стандартные макеты содержимого иконки метки
//          * и балуна геообъектов, можно посмотреть в документации.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
//          */
//         getPointData = function (index) {
//             return {
//                 balloonContentBody: 'балун <strong>метки ' + index + '</strong>',
//                 clusterCaption: 'метка <strong>' + index + '</strong>'
//             };
//         },
//         /**
//          * Функция возвращает объект, содержащий опции метки.
//          * Все опции, которые поддерживают геообъекты, можно посмотреть в документации.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
//          */
//         getPointOptions = function () {
//             return {
//                 preset: 'islands#violetIcon'
//             };
//         },
//         points = [
//             // [51.840277, 107.577700], [51.840198, 107.578816], [51.840683, 107.578934], [51.840012, 107.579428]
//         ],
//         geoObjects = [];
//
//     /**
//      * Данные передаются вторым параметром в конструктор метки, опции - третьим.
//      * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark.xml#constructor-summary
//      */
//     for (var i = 0, len = points.length; i < len; i++) {
//         geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i));
//     }
//
//     clusterer.add(geoObjects);
//     myMap.geoObjects.add(clusterer);
//     myMap.behaviors.disable('scrollZoom');
//
//     // Откроем балун на третьей метке в массиве.
//     var objectState = clusterer.getObjectState(geoObjects[2]);
//     if (objectState.isClustered) {
//         // Если метка находится в кластере, выставим ее в качестве активного объекта.
//         // Тогда она будет "выбрана" в открытом балуне кластера.
//         objectState.cluster.state.set('activeObject', geoObjects[2]);
//         clusterer.balloon.open(objectState.cluster);
//     } else if (objectState.isShown) {
//         // Если метка не попала в кластер и видна на карте, откроем ее балун.
//         geoObjects[2].balloon.open();
//     }
// });

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [51.825422188487, 107.58953090772],
            zoom: 14,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            clusterize: true
        });

    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
        // Откроем балун на метке с id == 1.
        var objectState = objectManager.getObjectState(1);
        if (objectState.isClustered) {
            // Сделаем так, чтобы указанный объект был "выбран" в балуне.
            objectManager.clusters.state.set('activeObject', objectManager.objects.getById(1));
            // Все сгенерированные кластеры имеют уникальные идентификаторы.
            // Этот идентификатор нужно передать в менеджер балуна, чтобы указать,
            // на каком кластере нужно показать балун.
            objectManager.clusters.balloon.open(objectState.cluster.id);
        } else {
            objectManager.objects.balloon.open(1);
        }
    });

}
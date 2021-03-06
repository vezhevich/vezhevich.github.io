$(document).ready(function() {
	if($('.js-delivery-info-tabs-ctn').length){
		fInfoTabs($('.js-delivery-info-tabs-ctn'));
	}

	if($('.js-delivery-address-content-list-fog').length){
		fSetFogWidth($('.js-delivery-address-content-list-fog'), '.js-delivery-address-content-list');
	}

	if($('#delivery-map').length){
		ymaps.ready(deliveryMapInit);
	}

	if($('.js-delivery-address-header-search-ctn').length){
		fAddressListSearch();
	}

	$('.js-return-info-tabs-content-item-title').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});

	$('.js-article-video-button').on('click', function (e) {
		fPlayYoutubeVideo($(this));
		e.preventDefault();
	});

	$('.js-article-tooltip').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $tooltipItems = $('.js-article-tooltip');
		var $this = $(this);
		if($this.hasClass('active')){
			return false;
		}
		$tooltipItems.removeClass('active');
		$this.addClass('active');

	});
	$('body').on('click', function () {
		var $tooltipItems = $('.js-article-tooltip');
		$tooltipItems.removeClass('active');
	});

	if($('.js-rounded-timer').length > 0){
		fRoundedTimer();
	}


});

function fRoundedTimer() {
	var $roundedTimer = $('.js-rounded-timer');
	$roundedTimer.each(function () {
		var $this = $(this);
		var elemId = $this.attr('id');

		var $timerBlockDays = $this.find('.js-rounded-timer-days');
		var $timerBlockDaysValue = $timerBlockDays.find('.js-rounded-timer-value');
		var $timerBlockDaysText = $timerBlockDays.find('.js-rounded-timer-text');
		var $timerBlockHours = $this.find('.js-rounded-timer-hours');
		var $timerBlockHoursValue = $timerBlockHours.find('.js-rounded-timer-value');
		var $timerBlockHoursText = $timerBlockHours.find('.js-rounded-timer-text');
		var $timerBlockMinutes = $this.find('.js-rounded-timer-minutes');
		var $timerBlockMinutesValue = $timerBlockMinutes.find('.js-rounded-timer-value');
		var $timerBlockMinutesText = $timerBlockMinutes.find('.js-rounded-timer-text');
		var $timerBlockSeconds = $this.find('.js-rounded-timer-seconds');
		var $timerBlockSecondsValue = $timerBlockSeconds.find('.js-rounded-timer-value');
		var $timerBlockSecondsText = $timerBlockSeconds.find('.js-rounded-timer-text');

		var dateStart = $this.data('start');
		var dateEnd = $this.data('end');
		var secondStart = Date.parse(dateStart)/1000;
		var secondEnd = Date.parse(dateEnd)/1000;
		var currentDate = Date.parse(new Date())/1000;
		var fullTime = secondEnd - secondStart;
		var currentInterval = secondEnd - currentDate;

		if(currentInterval < 0){
			$this.html('Акция закончилась');
			return false;
		}

		var intervalPercent = currentInterval/(fullTime / 100) ^ 0;
		var intervalPercentNew = intervalPercent;
		var currentDays = currentInterval/86400 ^ 0;
		var currentHours = (currentInterval-currentDays*86400)/3600 ^ 0;
		var currentMinutes = (currentInterval-currentDays*86400-currentHours*3600)/60 ^ 0;
		var currentSeconds = currentInterval-currentDays*86400-currentHours*3600-currentMinutes*60;

		var progressBarCtn = $this.find('.js-rounded-timer-progress');
		var progressBarPoint = progressBarCtn.find('.js-rounded-timer-point');
		var progressBarSvg = progressBarCtn.find('.js-rounded-timer-progress-svg');
		var progressBarSvgCircle = progressBarSvg.find($('circle.complete'));
		var radius = progressBarSvgCircle.attr('r');
		var circumference = 2 * Math.PI * radius;
		var strokeDashOffset = circumference - ((intervalPercent * circumference) / 100) ^ 0;
		progressBarCtn.data('percent', intervalPercent);

		fChangeTimerValues();
		fSetProgressInterval(true);
		fStartTimer();
		setPointPosition();
		console.log(intervalPercent);

		//Рисуем progressbar
		function fSetProgressInterval() {
			strokeDashOffset = circumference - ((intervalPercent * circumference) / 100) ^ 0;
			progressBarSvgCircle.animate({'stroke-dashoffset': strokeDashOffset}, 1200);
		}
		
		function fStartTimer() {
			var timerTicks = setInterval(function () {
				currentSeconds--;
				if(currentSeconds === 0 && currentMinutes === 0 && currentHours === 0 && currentDays === 0){
					console.log('Timer end');
					currentDays = 0;
					clearInterval(timerTicks);
				}
				if(currentSeconds < 0){
					currentMinutes--;
					currentSeconds = 59;
					if(currentMinutes < 0){
						currentHours--;
						currentMinutes = 59;
						if(currentHours < 0){
							currentDays--;
							currentHours = 23;
							if(currentDays < 0){
								currentDays = 0;
							}
						}
					}
				}
				fChangeTimerValues();
			}, 100);
		}

		function fChangeTimerValues(){
			// Проставляем значения dd hh mm ss
			$timerBlockDaysValue.html(currentDays);
			$timerBlockDaysText.html(declOfNum(currentDays,['день','дня','дней']));
			$timerBlockHoursValue.html(currentHours);
			$timerBlockHoursText.html(declOfNum(currentHours,['час','часа','часов']));
			$timerBlockMinutesValue.html(currentMinutes);
			$timerBlockMinutesText.html(declOfNum(currentMinutes,['минута','минуты','минут']));
			$timerBlockSecondsValue.html(currentSeconds);
			$timerBlockSecondsText.html(declOfNum(currentSeconds,['секунда','секунды','секунд']));
			//
			currentInterval = currentDays*86400+currentHours*3600+currentMinutes*60+currentSeconds;
			intervalPercentNew = currentInterval/(fullTime / 100) ^ 0;
			if(intervalPercentNew < intervalPercent){
				intervalPercent = intervalPercentNew;
				progressBarCtn.attr('data-percent', intervalPercent);
				fSetProgressInterval();
				setPointPosition();
			}
		}

		function setPointPosition(){
			var $ = {
				radius  :     70, // радиус окружности
				speed   :     20
			};
			currentOffset = 100 - intervalPercent;
			var f = 15.7;
			var s = 2 * Math.PI / 180; //Вычислим угол
			f += (s*1.8)*currentOffset;
			progressBarPoint.css('left', 70 + $.radius * Math.sin(f)  + 'px');
			progressBarPoint.css('top', 70 + $.radius * Math.cos(f)  + 'px');
			if(!progressBarPoint.hasClass('active')){
				setTimeout(function () {
					progressBarPoint.addClass('active');
				},900);
			}
		}
	});
}

function fPlayYoutubeVideo($btn) {
	var $videoBlock = $btn.parents('.js-article-video').eq(0);
	var $videoPlayer = $videoBlock.find('#article-player');
	var	videoSrc = $videoPlayer.attr('src');
	$videoPlayer.attr('src', videoSrc + '&autoplay=1');
	setTimeout(function () {
		$videoBlock.addClass('active');
	},200);

}
var mapActivePoint = -1;

function fSetFogWidth(item, itemWidthCtn) {
	var itemWidth = item.parent().find(itemWidthCtn).width();
	item.width(itemWidth);
	$(window).resize(function () {
		itemWidth = item.parent().find(itemWidthCtn).width();
		item.width(itemWidth);
	});
}

function fAddressListSearch() {
	var $searchCtn = $('.js-delivery-address-header-search-ctn');
	var $searchList = $searchCtn.find('.js-delivery-address-header-search-list');
	$('.js-delivery-address-header-search-button').on('click',function (e) {
		e.preventDefault();
		e.stopPropagation();
		$searchCtn.addClass('active');
	});
	$('.js-delivery-address-header-search-close').on('click',function (e) {
		e.preventDefault();
		e.stopPropagation();
		$searchCtn.removeClass('active');
		$searchList.removeClass('active');
	});
	$('.js-delivery-address-header-search-input').on('input', function (e) {
		e.stopPropagation();
		$searchList.addClass('active');
	});
	$('body').on('click', function () {
		$searchList.removeClass('active');
	});
}

function fInfoTabs($infoTabsCtn, $map) {
	var $infoTabsMenuCtn = $infoTabsCtn.find('.js-info-tabs-menu');
	var $infoTabsMenuItem = $infoTabsMenuCtn.find('.js-info-tabs-menu--item');
	var $infoTabsContentCtn = $infoTabsCtn.find('.js-info-tabs-content');
	var $infoTabsContentItem = $infoTabsContentCtn.find('.js-info-tabs-content-item');
	fTabsSetHeight($infoTabsContentCtn,$infoTabsContentItem.eq(0));
	$infoTabsMenuItem.on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var activeItem = $infoTabsMenuItem.index($this);
		if($this.hasClass('active')){
			return false;
		}else{
			$infoTabsMenuItem.removeClass('active');
			$infoTabsContentItem.removeClass('active');
			$this.addClass('active');
			$infoTabsContentItem.eq(activeItem).addClass('active');
			fTabsSetHeight($infoTabsContentCtn, $infoTabsContentItem.eq(activeItem));
			if(typeof $map !== 'undefined' && activeItem === 1){
				setTimeout(function () {
					if(mapActivePoint !== -1){
						$map.setCenter(mapActivePoint, 10, {
							useMapMargin: true,
							checkZoomRange: true
						});
					}
					$map.container.fitToViewport();
				},2000);
			}
		}
	});

}

function fTabsSetHeight(ctn, item){
	ctn.height(item.innerHeight());
	$(window).resize(function () {
		ctn.height(item.innerHeight());
	})
}

function deliveryMapInit() {
	var mapPinSize = [15,15];
	if($(window).innerWidth() < 768){
		mapPinSize = [12,12];
	}
	$(window).resize(function () {
		if($(window).innerWidth() < 768){
			mapPinSize = [12,12];
		}else{
			mapPinSize = [15,15];
		}
	});
	var $addressListCtn = $('.js-delivery-address-content-list');
	var $addressListItems = $addressListCtn.find('.js-delivery-address-content-list-item');
	var $addressListItemsCoords = $addressListCtn.find('.js-address-map-coords');
	var geolocation = ymaps.geolocation;
	var myMap = new ymaps.Map('delivery-map', {
				center: [50.443705, 30.530946],
				zoom: 5,
				controls: []
			}),
			deliveryMapBalloonLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="itb_delivery_map_balloon_wrapper">' +
						'<a class="close" href="#"><span class="icon-close"></span></a>' +
					'$[[options.contentLayout observeSize minWidth=150 maxWidth=310 minHeight=50]]' +
					'<div class="arrow"></div>'+
					'</div>', {
						build: function () {
							this.constructor.superclass.build.call(this);

							this._$element = $('.itb_delivery_map_balloon_wrapper', this.getParentElement());

							this.applyElementOffset();

							this._$element.find('.close')
									.on('click', $.proxy(this.onCloseClick, this));
						},

						clear: function () {
							this._$element.find('.close')
									.off('click');

							this.constructor.superclass.clear.call(this);
						},

						onSublayoutSizeChange: function () {
							deliveryMapBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

							if(!this._isElement(this._$element)) {
								return;
							}

							this.applyElementOffset();

							this.events.fire('shapechange');
						},

						applyElementOffset: function () {
							this._$element.css({
								left: -(this._$element[0].offsetWidth/2),
								top: -(this._$element[0].offsetHeight)
							});
						},

						onCloseClick: function (e) {
							e.preventDefault();

							this.events.fire('userclose');
						},

						getShape: function () {
							if(!this._isElement(this._$element)) {
								return deliveryMapBalloonLayout.superclass.getShape.call(this);
							}

							var position = this._$element.position();

							return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
								[position.left, position.top], [
									position.left + this._$element[0].offsetWidth,
									position.top + this._$element[0].offsetHeight - 250
								]
							]));
						},

						_isElement: function (element) {
							return element && element[0] && element.find('.arrow')[0];
						}
					}),
			deliveryMapBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="itb_delivery_balloon_title">$[properties.balloonHeader]</div>'+
					'<div class="itb_delivery_balloon_description">$[properties.balloonContent]</div>'
			),
			wayPointsCollection = new ymaps.GeoObjectCollection(null, {
				hideIconOnBalloonOpen: false,
				balloonLayout: deliveryMapBalloonLayout,
				balloonContentLayout: deliveryMapBalloonContentLayout,
				iconImageSize: mapPinSize,
				iconLayout: 'default#image'
			});
		myMap.margin.addArea({
			left: 0,
			top: 100,
			width: 100,
			height: 10
		});

	if($addressListItemsCoords.length > 0){
		deliveryCreatePlacemark($addressListItemsCoords, './images/view/map-pin.svg');
	}

	var myPolygon = new ymaps.Polygon([deliveryMapPolyline],
			// Описываем свойства геообъекта.
			{}, {
				fillColor: '#006daa',
				strokeColor: '#006daa',
				fillOpacity: 0.1,
				strokeWidth: 1,
				strokeOpacity: 0.5,
				strokeStyle: 'solid'
			}
	);
	myMap.geoObjects
			.add(wayPointsCollection)
			.add(myPolygon)
	myMap.setBounds(wayPointsCollection.getBounds(wayPointsCollection),{
		useMapMargin: true,
		checkZoomRange: true,
		zoomMargin: [100, 0, 0, 0]
	});
	$(window).resize(function () {
		myMap.setBounds(wayPointsCollection.getBounds(wayPointsCollection),{
			useMapMargin: true,
			checkZoomRange: true,
			zoomMargin: [100, 0, 0, 0]
		});
	});

	if($('.js-delivery-address-list').length){
		fInfoTabs($('.js-delivery-address-list'), myMap);
	}

	function deliveryCreatePlacemark(data, imageUrl){
		var coordsLength = $addressListItemsCoords.length;
		var itemDataLat;
		var itemDataLon;
		var itemContentTitle;
		var itemContentDescription;
		var itemContentPhone;
		var itemContentWorking;
		var itemContentButtons;

		/*var coordsLength = getObjectSize(data);

		for (var i = 0, l = coordsLength; i < l; i++) {
			wayPointsCollection.add(new ymaps.Placemark(data[i].coords,
					{
						balloonHeader: data[i].title,
						balloonContent: data[i].description +
								'<div class="itb_delivery_balloon_phone">Телефон: '+data[i].phone+'</div>'
					}, {
						iconImageHref: imageUrl,
					})
			);
		}*/
		$addressListItemsCoords.each(function () {
			var $this = $(this);
			var itemBalloonContent;
			itemDataLat = $this.data('lat');
			itemDataLon = $this.data('lon');
			itemContentTitle = $this.find('.js-delivery-address-content-list-item-title').text();
			itemContentDescription = $this.find('.js-delivery-address-content-list-item-description').text();
			itemContentPhone = $this.find('.js-delivery-address-content-list-item-phone').text();
			itemContentWorking = $this.find('.js-delivery-address-content-list-item-working').html();
			itemContentButtons = $this.find('.js-delivery-address-content-list-item-buttons').html();
			itemBalloonContent = itemContentDescription;
			if(itemContentPhone.length > 0){
				itemBalloonContent += '<div class="itb_delivery_balloon_phone">Телефон: '+itemContentPhone+'</div>';
			}
			if(typeof itemContentWorking !== 'undefined'){
				itemBalloonContent += '<div class="itb_delivery_balloon_working">'+itemContentWorking+'</div>';
			}
			if(typeof itemContentButtons !== 'undefined'){
				itemBalloonContent += '<div class="itb_delivery_balloon_buttons">'+itemContentButtons+'</div>';
			}
			wayPointsCollection.add(new ymaps.Placemark([itemDataLat, itemDataLon],
					{
						balloonHeader: itemContentTitle,
						balloonContent: itemBalloonContent
					}, {
						iconImageHref: imageUrl,
					})
			);
		});
	}

	$('.js-delivery-map-closest').on('click', function (e) {
		e.preventDefault();
		fClosestPoint();
	});

	$addressListItems.on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$this = $(this);
		if($this.hasClass('js-address-map-coords')){
			elemIndex = $addressListItemsCoords.index($this);
			fSetActiveAddress(elemIndex, true);
			console.log('coords');
		}else{
			elemIndex = $addressListItems.index($this);
			fSetActiveAddress(elemIndex, false);
			console.log('no-coords');
		}
	});

	$('.delivery-address-content-list-item--phone').on('click', function (e) {
		e.stopPropagation();
	});

	function fClosestPoint() {
		var givenPoint;
		var coordsLength = $addressListItemsCoords.length;
		var minDist = 6200000;
		var closestPointIdx = 0;
		geolocation.get({
			provider: 'yandex',
			mapStateAutoApply: true
		}).then(function (result) {
			givenPoint = result.geoObjects.position;
			var minDist = ymaps.coordSystem.geo.getDistance(givenPoint, wayPointsCollection.get(0).geometry.getCoordinates());
			wayPointsCollection.each(function (obj, i) {
				var dist = ymaps.coordSystem.geo.getDistance(givenPoint, obj.geometry.getCoordinates());
				if (minDist > dist) {
					minDist = dist;
					closestPointIdx = i;
				}
				if(coordsLength - 1 <= i ){
					fSetActiveAddress(closestPointIdx, true);
				}
			})
		});
	}

	function fSetActiveAddress(activeIndex, hasCoords){
		var $infoTabsContentCtn = $addressListItems.parents('.js-info-tabs-content');
		var $infoTabsContentItem = $infoTabsContentCtn.find('.js-info-tabs-content-item.active');


			$addressListItems.removeClass('active');
			if(!hasCoords){
				if(!$addressListItems.eq(activeIndex).hasClass('active')) {
					$addressListItems.eq(activeIndex).addClass('active');
				}
			}else{
				if(!$addressListItemsCoords.eq(activeIndex).hasClass('active')) {
					$addressListItemsCoords.eq(activeIndex).addClass('active');
					wayPointsCollection.get(activeIndex).balloon.open();
					mapActivePoint = wayPointsCollection.get(activeIndex).geometry.getCoordinates();
					setTimeout(function () {
						myMap.setCenter(mapActivePoint, 10, {
							useMapMargin: true,
							checkZoomRange: true
						});
						myMap.container.fitToViewport();
					},200);
				}
			}
			fTabsSetHeight($infoTabsContentCtn, $infoTabsContentItem);

	}

}

function getObjectSize(dataElement){
	var elementIndex = 0;
	for (var i in dataElement) {
		elementIndex = Number(i) + 1;
	}
	return elementIndex;
}

function declOfNum(number, titles)
{
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
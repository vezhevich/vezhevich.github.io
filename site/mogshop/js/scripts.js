$(document).ready(function() {
	if($('.js-delivery-info-tabs-ctn').length){
		fInfoTabs('.js-delivery-info-tabs-ctn');
	}

	if($('.js-delivery-address-list').length){
		fInfoTabs('.js-delivery-address-list');
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
});

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
	})
	$('.js-delivery-address-header-search-input').on('input', function (e) {
		e.stopPropagation();
		$searchList.addClass('active');
	})
	$('body').on('click', function () {
		$searchList.removeClass('active');
	})
}

function fInfoTabs(item) {
	var $infoTabsCtn = $(document).find(item);
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
									position.left + this._$element[0].offsetWidth/2,
									position.top + this._$element[0].offsetHeight + 100
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

	if(typeof deliveryMapData !== 'undefined'){
		deliveryCreatePlacemark(deliveryMapData, '/images/view/map-pin.svg');
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

	var suggestView = new ymaps.SuggestView('suggest', {provider: deliveryAddressProvider, results: 3});

	function deliveryCreatePlacemark(data, imageUrl){
		var coordsLength = getObjectSize(data);

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
		}
	}

	$('.js-delivery-map-closest').on('click', function (e) {
		e.preventDefault();
		fClosestPoint();
	});

	$addressListItems.on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$this = $(this);
		elemIndex = $addressListItems.index($this);
		fSetActiveAddress(elemIndex);
	});

	$('.delivery-address-content-list-item--phone').on('click', function (e) {
		e.stopPropagation();
	});

	function fClosestPoint() {
		var givenPoint;
		var coordsLength = getObjectSize(deliveryMapData);
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
					fSetActiveAddress(closestPointIdx);
				}
			})
		});
	}

	function fSetActiveAddress(activeIndex){
		if(!$addressListItems.eq(activeIndex).hasClass('active')){
			var $infoTabsContentCtn = $addressListItems.parents('.js-info-tabs-content');
			var $infoTabsContentItem = $infoTabsContentCtn.find('.js-info-tabs-content-item.active');
			$addressListItems.removeClass('active');
			$addressListItems.eq(activeIndex).addClass('active');
			wayPointsCollection.get(activeIndex).balloon.open();
			myMap.setCenter(wayPointsCollection.get(activeIndex).geometry.getCoordinates(), 10, {
				useMapMargin: true,
				checkZoomRange: true
			});
			fTabsSetHeight($infoTabsContentCtn, $infoTabsContentItem);
		}
	}

}

function getObjectSize(dataElement){
	var elementIndex = 0;
	for (var i in dataElement) {
		elementIndex = Number(i) + 1;
	}
	return elementIndex;
}
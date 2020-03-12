$(document).ready(function() {
	// Добавление в корзину
	$(document).on('click', '.js-catalog-item-buy', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $notAvailable = $this.parents('.js-product-count-ctn').find('.js-product-card-teaser-not-available');

		if ($(this).hasClass('disabled-by-remnants') || $(this).hasClass('disabled')) {
			if ($(this).hasClass('disabled-by-remnants')) {
				if($notAvailable.length){
					$notAvailable.slideDown('300');
					setTimeout(function(){
						$notAvailable.slideUp('300');
					},3000)
				}
			}
			return;
		}
		addProductToCart($(this))
	});

	var updateProductCountTimeout = false;
	//Изменение количества\веса
	$(document).on('click', '.js-product-count-plus, .js-product-count-minus', function (e) {
		var $this = $(this);
		var $notAvailable = $this.parents('.js-product-count-ctn').find('.js-product-card-teaser-not-available');
		if($this.hasClass('remnants')){
			if($notAvailable.length){
				$notAvailable.slideDown('300');
				setTimeout(function(){
					$notAvailable.slideUp('300');
				},3000)
			}
		}
		if(!$this.hasClass('disabled')){
			changeProductsCount($this);
		}


	});

	//Применение промокода
	$(document).on('click', '.js-promocode-button', function (e) {
		if($(this).hasClass('disabled')){
			return false;
		}
		var $this = $(this);
		var $promocodeContainer = $(this).parents('.js-promocode-ctn');
		var $userField = $promocodeContainer.find('.js-promocode-field');
		var $errorField = $promocodeContainer.find('.js-promocode-error-field');
		var userFieldValue = $.trim($userField.val());
		if(userFieldValue.length > 0){
			$this.addClass('disabled');
			$.ajax({
				'method': 'post',
				'dataType': 'json',
				'url': '/api/cart/promoCode',
        'data': {
				  'code': userFieldValue
        },
				'headers': {
					'Content-Type': 'application/x-www-form-urlencoded',
          'token': $('.user-token').data('token')
				}
			}).done(function (answer) {
				if (answer.success && answer.success === true) {
					$errorField.html('Промокод активирован');
					$errorField.removeAttr('style').addClass('success');
					$userField.removeClass('cart-info-input--error');
          $userField.attr('readonly', 'readonly');
          $('.js-promocode-button').hide();
          showBonusesInfo(answer.data);
					responseInfo = answer;
					updateCartSummary();
				}
			}).fail(function (answer) {
				if (answer.status && answer.responseJSON.success === false) {
					if(answer.status === 404){
						$errorField.html('Неверный промокод');
					} else if(answer.status === 400){
						$errorField.html(answer.responseJSON.data.message);
					} else{
						$errorField.html('Что-то пошло не так');
					}
					$errorField.removeAttr('style');
					$userField.addClass('cart-info-input--error');
				}
			}).always(function () {
				$this.removeClass('disabled');
			});
		} else {
			$errorField.html('Не указан промокод');
			$errorField.removeAttr('style');
			$userField.addClass('cart-info-input--error');
		}
	});
	
	// Удаление товара из корзины
	$(document).on('click', '.js-cart-list-item-delete', function (e) {
		e.preventDefault();
		removeProductFromCart($(this));
	})

	$(document).on('click', '.js-cart-info-order-btn', function(e){
		var $cartListCtn = $(document).find('.js-cart-elements-ctn');
		var $cartItemNotAvailable = $cartListCtn.find('.js-cart-product-item[data-status-available="0"]');
		if($cartItemNotAvailable.length > 0){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $cartItemNotAvailable.eq(0).offset().top - 100 + 'px'
			}, 500);
			$cartItemNotAvailable.css('border-left', '2px solid red');
			setTimeout(function(){
				$cartItemNotAvailable.css('border-left', '2px solid transparent');
			},3000)
		}
	})

});

var catalogItemId = '';
var catalogItemInfo = '';
var responseInfo = '';

function showBonusesInfo(data) {
	var $promocodeContainer = $(document).find('.js-promocode-ctn');
	var $userField = $promocodeContainer.find('.js-promocode-field');
	var $errorField = $promocodeContainer.find('.js-promocode-error-field');
	var $promocodeButton = $promocodeContainer.find('.js-promocode-button');
	if (data.bonusesSpent) {
    $('.js-cart-page-bonuses-spent-ctn')
      .html('Оплачено бонусами: <span class="js-cart-page-price-discount">' + data.bonusesSpent +'</span> р');
  }
  $('.js-cart-page-promocodes').html('');
  $.each(data.promoCodes, function (key, promoCode) {
    var codeData = '<div class="js-cart-page-promocode">';
    codeData += promoCode.title;
    if (promoCode.discountRub) {
      codeData += ': <span>' + promoCode.discountRub + '</span> р';
    } else if (promoCode.discount) {
      codeData += ': <span>' + promoCode.discount + '</span> %';
    } else if (promoCode.bonusAmount) {
      codeData += ': <span>' + promoCode.bonusAmount + '</span> р';
    }
    codeData += '</div>'
    $('.js-cart-page-promocodes').append(codeData);
  });
	if(data.promoCodes.length === 0){

		if($promocodeButton.length){
			$promocodeButton.show();
		}else{
			$userField.after('<button class="cart-info-input-button js-promocode-button">Применить</button>');
		}
		$errorField.removeClass('success').css('visibility', 'hidden');
		$userField.removeAttr('readonly');
	}
}

// Добавляем в корзину
function addProductToCart(trigger){
	var $parentContainer = trigger.parents('.js-product-item-ctn');
	var isWeightedProduct = $parentContainer.find('.product-weight');
	var measureGradation = isWeightedProduct.data('gradation-g');
	var weightedProductCartInfo = $parentContainer.find('.cart-item-data');
	var productDataWeight = '';
	var $topcart = $(document).find('.header-shopping-cart');
	catalogItemId = $parentContainer.find('.product-id').data('id');
	var otherProductElements = $(document).find('.product-id[data-id="'+catalogItemId+'"]').parents('.js-product-item-ctn');
	var productWeightG = isWeightedProduct.data('weight-g');
	var productRemnants = $parentContainer.find('.product-id').data('remnants');
	var productCountAddValue = $parentContainer.find('.js-product-count-value');
	var productCountDecimalValue = $parentContainer.find('.js-product-count-decimal-value');
	var $productCounter = otherProductElements.find('.js-catalog-item-counter');
	var $productWeight = otherProductElements.find('.cart-item-data');
	var productCounterCurrentValue = 0;
	var productCounterNewValue = 1;
	var cartContainer = $(document).find('.js-updateCart-ctn');
	var $cartItems = cartContainer.find('.js-cart-product-item');
	var $weightedTooltip = $parentContainer.find('.js-catalog-item-weight-tooltip');
	var $itemInCart = '';
	if($parentContainer.hasClass('product-kit-ctn')){
		catalogItemId = $parentContainer.find('.kit-id').data('id');
		productRemnants = $parentContainer.find('.kit-id').data('remnants');
	}
	if($parentContainer.find('.product-id').hasClass('underOrder')){
		productRemnants = 1000;
	}
	if(measureGradation === undefined){
		if(productWeightG !== undefined){
			measureGradation = productWeightG;
		}else{
			measureGradation = 100;
		}

	}

	var data = {
		'type': 'post',
		'id': catalogItemId,
		'count': '',
		'weight_g': ''
	};

	// Смотрим остаток товара, если 0 или текущее количество = остатку ничего не делаем
	if (parseInt($productCounter.text()) >= productRemnants || productRemnants === 0) {
		if(!productCountAddValue.length){
			alert('Товара недостаточно');
			trigger.addClass('disabled-by-remnants');
			return;
		}
	}
	if($weightedTooltip.length && Number($weightedTooltip.html()) >= productRemnants){
		alert('Товара недостаточно');
		trigger.addClass('disabled-by-remnants');
		return;
	}

	if (parseInt(productCountAddValue.val()) >= productRemnants || productRemnants === 0) {
		trigger.addClass('disabled-by-remnants');
		if (parseInt(productCountAddValue.val()) > productRemnants){
			return;
		}
	}
	// Если товар уже был добавлен, присваиваем текущее кол-во
	if(parseInt($productCounter.text()) > 0){
		productCounterCurrentValue = parseInt($productCounter.text());
		productWeightG = Number(weightedProductCartInfo.data('weight-g')) + Number(measureGradation);

	}

	// Смотрим, добавлять ли количество
	if (productCountAddValue.length && !productCountDecimalValue.length) {
		productCounterNewValue = $.trim(productCountAddValue.val());
	}else if(!productCountAddValue.length && !isWeightedProduct.length){
		productCounterNewValue = productCounterCurrentValue + 1;
	}

	// Считаем отправляемый вес
	if (productCountDecimalValue.length) {
		var calculateDecimal = $.trim(productCountDecimalValue.val());
		if (String(calculateDecimal).length === 1){
			calculateDecimal = '00' + calculateDecimal
		}else if(String(calculateDecimal).length === 2){
			calculateDecimal = '0' + calculateDecimal
		}
		productDataWeight = $.trim(productCountAddValue.val()) + String(calculateDecimal);
		data.weight_g = productDataWeight;
	} else if(isWeightedProduct.length){
		data.weight_g = productWeightG;
	}
	data.count = productCounterNewValue;

	$(document).find('.js-catalog-item-buy').addClass('disabled');

	$.ajax({
		'method': 'post',
		'dataType': 'json',
		'url': Routing.generate('api_cart_item_post'),
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded',
			'token': $('.user-token').data('token')
		},
		'data': data
	}).done(function (answer) {
		if (answer.success && answer.success === true) {
			responseInfo = answer;
			getProductInfo(responseInfo);
			if(catalogItemInfo.count == undefined){
				return false
			}
			if(catalogItemInfo.weighted && isWeightedProduct.length){
				$productWeight.data('weight-g', catalogItemInfo.weightG);
			}
			$productCounter.text('+' + catalogItemInfo.count);
			if (trigger.hasClass('catalog-cards-button-buy')) {
				trigger.addClass('catalog-cards-button-buy-active');
			}
			if(cartContainer.length){
				$itemInCart = cartContainer.find('.js-cart-product-item[data-product-id="'+ catalogItemId +'"]');
				if($itemInCart.length){
					updateCartProductData($itemInCart, answer.data, productCounterCurrentValue);

				} else {
					addElementToCart();
				}
			}
			if($weightedTooltip.length){
				$weightedTooltip.html(catalogItemInfo.weightG / 1000);
			}
			if($topcart.length){
				updateCartProductData($(this), answer.data, productCounterCurrentValue);
			}

			//counters
			if($parentContainer.hasClass('product-kit-ctn')){
				if (typeof yaCounter46987521 !== "undefined") {
					yaCounter46987521.reachGoal('product_set');
				}
				gtag('event', ' send_feedback', { 'event_category': 'product', 'event_action': 'product_set', });
			} else {
				if (typeof yaCounter46987521 !== "undefined"){
					yaCounter46987521.reachGoal('buy');
				}
				gtag('config', 'UA-111468262-1', {'page_path':'/virtual/buy/'});
			}

			if(window.location.pathname === '/cart'){
				checkEmptyCart();
				showBonusesInfo(answer.data);
			}

			updateCartSummary();
		}

	}).always(function (answer) {
		$(document).find('.js-catalog-item-buy').removeClass('disabled');
	});
}

function getProductInfo(response){
	var catalogItems = response.data.items;
	for (key in catalogItems) {
		if (catalogItems[key].catalog.id === catalogItemId) {
			catalogItemInfo = catalogItems[key];
		}
	}

}

//Изменение количества\веса
function changeProductsCount($this) {
	var countContainer = $this.parents('.js-product-count-ctn');
	var updateCartCtn = countContainer.parents('.js-updateCart-ctn');
	var updateCartItem = countContainer.parents('.js-cart-product-item');
	var itemId = updateCartItem.data('product-id');
	var $countDecimalField = countContainer.find('.js-product-count-decimal-value');
	var $countField = countContainer.find('.js-product-count-value');
	var productCard = countContainer.parents('.js-product-item-ctn');
	var currentWeightValue = '';
	var countDecimalFieldValue = parseInt($countDecimalField.val());
	var countFieldValue = parseInt($countField.val());
	var countWeightStep = updateCartItem.data('gradation-g');
	var countWeightStepCalculate = $countDecimalField.val();
	var productWeightDataCalculate = [1,0];
	var countStep = 1;
	var countType = 'count';
	var productRemnants = $countField.data('remnants');
	var newCountValue = countFieldValue;
	var newCountDecimalValue = countDecimalFieldValue;
	var $catalogCardsItem = $(document).find('.product-id[data-id="'+itemId+'"]').parents('.js-product-item-ctn');
	var productCardCounter = $catalogCardsItem.find('.js-product-count-value');
	var productCardDecimalCounter = $catalogCardsItem.find('.js-product-count-decimal-value');
	var productCardWeight = $catalogCardsItem.find('.cart-item-data');
	var catalogCardsItemId = '';
	var $notAvailable = $(document).find('.js-product-card-teaser-not-available');
	var $weightedTooltip = $catalogCardsItem.find('.js-catalog-item-weight-tooltip');
	if(countWeightStep == undefined){
		countWeightStep = productCard.find('.product-id').data('gradation-g');
	}
	if($countField.hasClass('underOrder')){
		productRemnants = 1000;
	}
	const countWeightStepValue = countWeightStep;
	if($this.hasClass('js-product-count-minus')){
		countWeightStep = countWeightStep * -1;
		countStep = countStep * -1;
	}

	if($countDecimalField.length){
		countType = 'weight';
	}
	if(countType === 'count'){
		newCountValue = newCountValue + countStep;
		$countField.val(newCountValue);
		if(newCountValue >= productRemnants){
			newCountValue = productRemnants;
			if(newCountValue == 0){
				newCountValue = 1;
			}
			if(productRemnants > 1){
				countContainer.find('.js-product-count-minus').removeClass('disabled');
				$this.parents('.js-product-count-ctn').find('.js-catalog-item-buy').removeClass('disabled');
			}
			if($notAvailable.length && countContainer.find('.js-product-count-plus').hasClass('remnants')){
				$notAvailable.removeClass('hidden');
			}
			countContainer.find('.js-product-count-plus').addClass('remnants');
			$this.addClass('disabled');
		} else if(newCountValue <= 1){
			newCountValue = 1;
			if(productRemnants > 1){
				countContainer.find('.js-product-count-plus').removeClass('disabled remnants');
				$this.parents('.js-product-count-ctn').find('.js-catalog-item-buy').removeClass('disabled disabled-by-remnants');
				$catalogCardsItem.find('.js-catalog-item-buy').removeClass('disabled disabled-by-remnants');
				if($notAvailable.length){
					$notAvailable.addClass('hidden');
				}
			}
			$this.addClass('disabled');
		}else{
			countContainer.find('.js-product-count-minus').removeClass('disabled');
			countContainer.find('.js-product-count-plus').removeClass('disabled');
			$this.parents('.js-product-count-ctn').find('.js-catalog-item-buy').removeClass('disabled');
			if($notAvailable.length){
				$notAvailable.addClass('hidden');
			}
		}
		if(updateCartCtn.length){
			if(typeof updateProductCountTimeout !== "undefined"){
				clearTimeout(updateProductCountTimeout);
			}
			updateProductCountTimeout = setTimeout(function () {
				updateProductCount(updateCartItem, newCountValue);
			}, 800);
			// Меняем кол-во в маленьких карточках
			if($catalogCardsItem.length){
				$catalogCardsItem.find('.js-catalog-item-counter').text('+' + newCountValue);
				if(productCardCounter.length){
					productCardCounter.val(newCountValue)
				}
			}

		} else{
			$countField.val(newCountValue);
		}
		if($countField.hasClass('js-card-count-value')){
			$countField.val(newCountValue);
		}
	}else if(countType === 'weight'){
		var newValueTmp = '';
		var productWeightG = '';
		if(String(countWeightStepCalculate).length === 1){
			countWeightStepCalculate = '00' + countWeightStepCalculate
		}else if(String(countWeightStepCalculate).length === 2){
			countWeightStepCalculate = '0' + countWeightStepCalculate
		}
		currentWeightValue = String($countField.val()) + String(countWeightStepCalculate)
		newValueTmp = Number(currentWeightValue) + Number(countWeightStep);
		if (Number(newValueTmp) >= (productRemnants * 1000)) {
			newValueTmp = productRemnants * 1000;
			countContainer.find('.js-product-count-plus').addClass('remnants disabled');
			if((productRemnants * 1000) > countWeightStepValue){countContainer.find('.js-product-count-minus').removeClass('disabled')};
		} else if (Number(newValueTmp) <= Number(countWeightStepValue)) {
			newValueTmp = countWeightStepValue;
			countContainer.find('.js-product-count-plus').removeClass('disabled remnants');
			countContainer.find('.js-product-count-minus').addClass('disabled');
			$this.parents('.js-product-count-ctn').find('.js-catalog-item-buy').removeClass('disabled disabled-by-remnants');
			$catalogCardsItem.find('.js-catalog-item-buy').removeClass('disabled disabled-by-remnants');
		}else{
			countContainer.find('.js-product-count-plus').removeClass('disabled remnants');
			countContainer.find('.js-product-count-minus').removeClass('disabled');
			$this.parents('.js-product-count-ctn').find('.js-catalog-item-buy').removeClass('disabled disabled-by-remnants');
			$catalogCardsItem.find('.js-catalog-item-buy').removeClass('disabled disabled-by-remnants');
		}
		if(Number(newValueTmp) > (productRemnants * 1000) && Number(newValueTmp) <= Number(countWeightStepValue)){
			countContainer.find('.js-product-count-plus').addClass('disabled');
			countContainer.find('.js-product-count-minus').addClass('disabled');
		}
		if($weightedTooltip.length){
			$weightedTooltip.html(newValueTmp / 1000);
		}
		if(String(newValueTmp).length < 4){newValueTmp = '0' + newValueTmp}
		productWeightDataCalculate = String(String(newValueTmp).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')).split(" ");
		if(productCardWeight){
			productCardWeight.data('weight-g', String(productWeightDataCalculate[0]) + String(productWeightDataCalculate[1]));
		}
		if (productWeightDataCalculate[1] == '000'){
			productWeightDataCalculate[1] = '0';
		}
		$countField.val(productWeightDataCalculate[0]);
		$countDecimalField.val(productWeightDataCalculate[1]);

		if(updateCartCtn.length){
			if(typeof updateProductCountTimeout !== "undefined"){
				clearTimeout(updateProductCountTimeout);
			}
			updateProductCountTimeout = setTimeout(function () {
				updateProductCount(updateCartItem, 1, productWeightDataCalculate[0], productWeightDataCalculate[1]);
			}, 600);


		}

	}
}

// Меняем количество товаров
function updateProductCount(item, count, weight_kg, weight_g){
	var itemId = item.data('id');
    catalogItemId = item.data('product-id');
    var productPrice = item.data('product-price');
    var productCatalogTree = item.data('catalog-tree');
    var productTitle = item.find('.cart-list-item-teaser-title').text();
		var productManufacturer = item.data('manufacturer');
		if (String(weight_g).length == 1){
			weight_g = '00' + weight_g;
		}else if (String(weight_g).length == 2){
			weight_g = '0' + weight_g;
		}
    var weightData = String(weight_kg) + String(weight_g);
	var data = {
		'count': count,
		'weight_g': weightData
	};
	if(data.count !== undefined){
		$.ajax({
			'method': 'patch',
			'dataType': 'json',
			'url': '/api/cartItem/' + itemId,
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded',
        'token': $('.user-token').data('token')
			},
			'data': data
		}).done(function (answer) {
			if (answer.success && answer.success === true) {
				responseInfo = answer;
				getProductInfo(responseInfo);
				updateCartProductData(item, count);
				if(window.location.pathname === '/cart'){
					showBonusesInfo(answer.data);
				}
				if(item.parents('.js-updateCart-ctn').hasClass('header-dropdown-shopping-cart')){
					if(catalogItemInfo.weighted){
						var productWeightData = catalogItemInfo.weightG;
						if(String(productWeightData).length < 4){productWeightData = '0' + productWeightData}
						var productWeightDataArr = String(String(productWeightData).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')).split(" ");
						if(productWeightDataArr[1] == '000'){
							productWeightDataArr[1] = '0';
						}
						item.find('.js-product-count-value').val(productWeightDataArr[0]);
						item.find('.js-product-count-decimal-value').val(productWeightDataArr[1]);

					}else{
						item.find('.js-product-count-value').val(catalogItemInfo.count);
					}
				}
			}
            gtag('event', 'remove_from_cart', {
                "items": [
                    {
                        "id": catalogItemId,
                        "name": productTitle,
                        "price": productPrice,
                        "category": productCatalogTree,
                        "brand": productManufacturer,
                        "quantity": item.find("input.js-product-count-value").val()
                    }
                ]
            });
		})
	}
}


function removeProductFromCart(trigger){
	var $item = trigger.parents('.js-cart-product-item');
	var itemId = $item.data('id');
	catalogItemId = $item.data('product-id');
	var $productItem = $(document).find('.product-id[data-id="'+ catalogItemId +'"]').parents('.js-product-item-ctn');
	$.ajax({
		'method': 'delete',
		'dataType': 'json',
		'url': '/api/cartItem/' + itemId,
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded',
			'token': $('.user-token').data('token')
		}
	}).done(function (answer) {
		//if (answer.success && answer.success === true) {
			responseInfo = answer;
			getProductInfo(responseInfo);
			$item.animate({opacity: 0}, 100, function () {
				$(this).slideUp(200, function () {
					$(this).remove();
					if($productItem.length){
						$productItem.find('.js-catalog-item-buy').removeClass('catalog-cards-button-buy-active');
						$productItem.find('.js-catalog-item-counter').html('');
					}
					updateCartSummary(itemId);
				});
			});

			if(window.location.pathname === '/cart'){
				showBonusesInfo(answer.data);
				checkEmptyCart();
			}
		//}
	})
}

function updateCartProductData(item){
	var cartContainer = item.parents('.js-updateCart-ctn');
	var countContainer = item.find('.js-product-count-ctn');
	var countDecimalField = countContainer.find('.js-product-count-decimal-value');
	var countField = countContainer.find('.js-product-count-value');
	var buttonPlus = countContainer.find('.js-product-count-plus');
	var buttonMinus = countContainer.find('.js-product-count-minus');
	var $productPriceItem = item.find('.js-item-price-value');
	var $oldProductPriceItem = item.find('.js-item-old-price-value');
	var $productCountItem = item.find('.js-cart-item-count');
	var $productSummaryItem = item.find('.js-cart-item-summary');
	var productWeightData = catalogItemInfo.weightG;
	var productRemnants = item.data('remnants');
	var headerProductPrice = item.find('.js-shopping-cart-item-cost');
	if(countField.hasClass('underOrder')){
		productRemnants = 999999;
	}
	if(item.hasClass('shopping-cart-weighted-item') || item.hasClass('cart-list-weighted-item')){
		if(productWeightData >= productRemnants * 1000){
			buttonPlus.addClass('disabled');
		}else{
			buttonPlus.removeClass('disabled');
		}
		if(productWeightData <= item.data('gradation-g')){
			buttonMinus.addClass('disabled');
		}else{
			buttonMinus.removeClass('disabled');
		}
	}else{
		if(catalogItemInfo.count >= productRemnants){
			buttonPlus.addClass('disabled');
		}else{
			buttonPlus.removeClass('disabled');
		}
		if(catalogItemInfo.count <= 1){
			buttonMinus.addClass('disabled');
		}else{
			buttonMinus.removeClass('disabled');
		}
	}
	if(String(productWeightData).length < 4){productWeightData = '0' + productWeightData}
	var productWeightDataArr = String(String(productWeightData).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')).split(" ");
	if(productWeightDataArr[1] == '000'){
		productWeightDataArr[1] = '0'
	}
	if(catalogItemInfo.weighted === true){
		if(countField.length){countField.val(productWeightDataArr[0])}
		if(countDecimalField.length){countDecimalField.val(productWeightDataArr[1])}
	} else {
		if(countField.length){countField.val(catalogItemInfo.count)}
	}
	if($productPriceItem.length){ $productPriceItem.html(catalogItemInfo.catalog.price) }
	if($productSummaryItem.length){ $productSummaryItem.html(catalogItemInfo.price) }
	if($oldProductPriceItem.length && catalogItemInfo.oldPrice){ $oldProductPriceItem.html(catalogItemInfo.oldPrice) }
	if($productCountItem.length) {
		if(catalogItemInfo.weighted){
			$productCountItem.html(catalogItemInfo.weightG / 1000 + ' ');
		}else{
			$productCountItem.html(catalogItemInfo.count + ' ');
		}

	}
	if(headerProductPrice.length) {headerProductPrice.html(catalogItemInfo.price + ' р')}
	updateCartSummary();
}

// Считаем сумму всех товаров и динамически меням на странице корзины
function updateCartSummary(data){
	var cartContainer = $(document).find('.js-updateCart-ctn');
	var cartPagePriceTotal = cartContainer.find('.js-cart-page-price-total');
	var cartPagePriceDiscount = cartContainer.find('.js-cart-page-price-discount');
	var cartPagePriceBonuses = cartContainer.find('.js-cart-page-price-bonuses');
	var cartPagePriceBonusesText = cartContainer.find('.js-cart-page-price-bonuses-text');
	var cartPagePriceSummary = $(document).find('.js-cart-page-price-summary');
	var $cartItemsPrice = cartContainer.find('.js-item-price-value');
	var $headerCartSummary = $(document).find('.js-cart-header-summary');
	var $headerCartCount = $(document).find('.js-cart-header-count');
	var cartItemsPriceSummary = 0;
	var $cartCounterText = $(document).find('.js-cart-header-text');
	var counterText = '';
	var bonusesText = '';
	var $cartDiscount = $(document).find('.js-cart-page-price-discount');
	counterText=declOfNum(responseInfo.data.items.length,['товар', 'товара', 'товаров']);
	bonusesText=declOfNum(responseInfo.data.bonusesAccrued,['бонус', 'бонуса', 'бонусов']);
	if(cartPagePriceTotal.length){cartPagePriceTotal.html(String(responseInfo.data.amount).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '))}
	if($headerCartSummary.length){$headerCartSummary.html(String(responseInfo.data.amount).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '))}
	if($headerCartCount.length){$headerCartCount.html(responseInfo.data.items.length)}
	if($cartCounterText.length){$cartCounterText.html(counterText)}

	if($cartDiscount.length){
		if(responseInfo.data.pricesDifference > 0){
			$cartDiscount.html(responseInfo.data.pricesDifference)
		}else{
			$('.js-cart-page-price-discount-ctn').fadeOut('fast');
		}

	}
	if(cartPagePriceBonuses.length && responseInfo.data.bonusesCount != undefined){
		cartPagePriceBonuses.html(responseInfo.data.bonusesCount);
		cartPagePriceBonusesText.html(bonusesText)
	}
	if(cartPagePriceSummary.length){cartPagePriceSummary.html(String(responseInfo.data.totalAmount).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '))}
}

function declOfNum(number, titles)
{
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
function orderRepeatProductCart(itemsData){
	var cartPagePriceSummary = $(document).find('.js-cart-page-price-summary');
	var $headerCartCount = $(document).find('.js-cart-header-count');
	var $cartCounterText = $(document).find('.js-cart-header-text');
	var counterText = '';
	counterText=declOfNum(itemsData.items.length,['товар', 'товара', 'товаров']);
	if($headerCartCount.length){$headerCartCount.html(itemsData.items.length)}
	if($cartCounterText.length){$cartCounterText.html(counterText)}
	if(cartPagePriceSummary.length){cartPagePriceSummary.html(String(itemsData.totalAmount).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '))}

	$('.js-top-cart-elements-ctn').html('');
	for (key in itemsData.items) {
		catalogItemInfo = itemsData.items[key];
		addElementToCart();
	}
}
function addElementToCart(){
	var $elementData = '';
	var weightedClass = '';
	var disabledClass = '';
	var disabledPlusClass = '';
	var weightData = '';
	var underOrder = '';
	var productRemnants = catalogItemInfo.catalog.remnants;
	var cartProductCalculateCount = '';
	if (productRemnants == 0){
		productRemnants = 999999;
	}
	if(catalogItemInfo.catalog.measureSymbol !== null){
		measureSymbol = catalogItemInfo.catalog.measureSymbol;
	}else{
		measureSymbol = '';
	}
	if(window.location.pathname === '/cart'){
		if(catalogItemInfo.weighted === true){
			cartProductCalculateCount = catalogItemInfo.weightG / 1000;
			weightedClass = 'cart-list-weighted-item';
			disabledClass = 'disabled';
			disabledPlusClass = '';
			var productWeightData = catalogItemInfo.weightG;
			if(productWeightData >= productRemnants * 1000){
				disabledPlusClass = 'disabled';
			}
			if(String(productWeightData).length < 4){productWeightData = '0' + productWeightData}
			weightData = String(String(productWeightData).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')).split(" ");
			if(weightData[1] == '000'){
				weightData[1] = '0';
			}
		}else{
			cartProductCalculateCount = catalogItemInfo.count;
			weightedClass = '';
			disabledClass = 'disabled';
			disabledPlusClass= '';
			if(catalogItemInfo.count === productRemnants){
				disabledPlusClass = 'disabled';
			}
		}
		if(catalogItemInfo.catalog.status.id === 2){
			underOrder = 'underOrder'
		}else{
			underOrder = '';
		}
		$elementData = ''+
			'<div class="cart-list-item js-cart-product-item '+weightedClass+'" data-product-id="' + catalogItemInfo.catalog.id + '" data-id="' + catalogItemInfo.id + '"  data-gradation-g="'+catalogItemInfo.catalog.measureGradation+'" data-remnants="' + catalogItemInfo.catalog.remnants +'">\n' +
			'<div class="cart-list-item-image">\n';
		if(catalogItemInfo.catalog.photo != undefined){
			$elementData += '<img src="' + catalogItemInfo.catalog.photo + '" alt="">';
		}else{
			$elementData += '<img src="/app/img/default_catalog.png" alt="">';
		}
		$elementData += ''+
			'</div>\n' +
			'<div class="cart-list-item-text">\n' +
			'<div class="cart-list-item-teaser">\n' +
			'<a href="/product/'+catalogItemInfo.catalog.slug+'" class="cart-list-item-teaser-title">'+catalogItemInfo.catalog.title+'</a>\n';
		if(catalogItemInfo.weighted){
			$elementData += '<div class="cart-list-item-teaser-in">' + catalogItemInfo.catalog.measureValue + ' ' +measureSymbol+'</div>\n'
		}
		if(catalogItemInfo.catalog.status.id === 2){
			$elementData += '<div class="cart-list-item-teaser-stock">Товар доступен под заказ</div>\n'
		}
		$elementData += ''+
			'</div>\n' +
			'<div class="cart-list-item-qnt cart-list-item-qnt-weight js-product-count-ctn">\n' +
			'<div class="shopping-cart-item-qnt">\n' +
			'<button type="button" class="shopping-cart-item-qnt-button js-product-count-minus '+disabledClass+'">\n' +
			'<svg width="12" height="3" viewBox="0 0 12 3" xmlns="http://www.w3.org/2000/svg">\n' +
			'<title>Rectangle 10</title>\n' +
			'<rect transform="rotate(90 18.1 3.5)" x="15" y="10" width="2.2" height="11" rx="1.1" fill="#1A1A1A" fill-rule="evenodd"></rect>\n' +
			'</svg>\n' +
			'</button>\n';
		if(catalogItemInfo.weighted === true){
			$elementData += ''+
				'<input name="" class="shopping-cart-item-qnt-numer js-product-count-value '+underOrder+'" value="'+ weightData[0] +'"  data-remnants="'+ catalogItemInfo.catalog.remnants +'" readonly="" type="text">'+
				'<span class="shopping-cart-item-qnt-in">'+measureSymbol +' </span>'+
				'<input name="" class="shopping-cart-item-qnt-numer js-product-count-decimal-value shopping-cart-item-qnt-numer-inner" value="'+ weightData[1] +'" readonly="" type="text">'+
				'<span class="shopping-cart-item-qnt-in shopping-cart-item-qnt-in-inner">г</span>'
		}else{
			$elementData += ''+
				'<input name="" class="shopping-cart-item-qnt-numer js-product-count-value '+underOrder+'" value="'+ catalogItemInfo.count +'" data-remnants="'+ catalogItemInfo.catalog.remnants +'" readonly="" type="text">\n' +
				'<span class="shopping-cart-item-qnt-in">'+measureSymbol+' </span>\n'
		}
		$elementData += ''+
			'<button type="button" class="shopping-cart-item-qnt-button js-product-count-plus '+disabledPlusClass+'">\n' +
			'<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">\n' +
			'<title>Group 15</title>\n' +
			'<g fill="#1A1A1A" fill-rule="evenodd">\n' +
			'<rect x="4.4" width="2.2" height="11" rx="1.1"></rect>\n' +
			'<rect transform="rotate(90 5.5 5.5)" x="4.4" width="2.2" height="11" rx="1.1"></rect>\n' +
			'</g>\n' +
			'</svg>\n' +
			'</button>\n' +
			'</div>\n' +
			'</div>\n' +
			'<div class="cart-list-item-cost">\n' +
			'<div class="cart-list-item-cost-wrapper">\n'
		if(catalogItemInfo.oldPrice){
			$elementData += ''+
				'<span class="cart-list-item-cost-old">\n' +
					'<span class="js-item-old-price-value">'+ catalogItemInfo.oldPrice +'</span> р\n' +
				'</span>\n'
		}
			$elementData += ''+
					'<span class="cart-list-item-cost-new">\n' +
						'<span class="js-cart-item-summary">'+ catalogItemInfo.price +'</span> р\n' +
					'</span>\n' +
				'</div>\n'+
				'<div class="cart-list-item-cost-calc">\n' +
					'<span class="js-item-price-value">'+ catalogItemInfo.catalog.price +'</span>р × <span class="js-cart-item-count">'+ cartProductCalculateCount +'</span>'+measureSymbol+' = <span class="js-cart-item-summary">'+ catalogItemInfo.price +'</span>р\n' +
				'</div>\n'+
				'<a href="#" class="cart-list-item-delete js-cart-list-item-delete">Удалить</a>\n' +
			'</div>\n' +
			'</div>\n' +
			'</div>';
		$('.js-cart-elements-ctn').append($elementData);
	}else{
		if(catalogItemInfo.weighted === true){
			weightedClass = 'shopping-cart-weighted-item';
			disabledPlusClass = '';
			var productWeightData = catalogItemInfo.weightG;
			if(productWeightData <= catalogItemInfo.catalog.measureGradation){
				disabledClass = 'disabled';
			}else{
				disabledClass = '';
			}
			if(productWeightData >= productRemnants * 1000){
				disabledPlusClass = 'disabled';
			}
			if(String(productWeightData).length < 4){productWeightData = '0' + productWeightData}
			weightData = String(String(productWeightData).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')).split(" ");
			if(weightData[1] == '000'){weightData[1] = '0'}
		}else{
			weightedClass = '';
			disabledClass = 'disabled';
			disabledPlusClass = '';
			if(catalogItemInfo.count <= 1){
				disabledClass = 'disabled';
			}else{
				disabledClass = '';
			}
			if(catalogItemInfo.count === productRemnants){
				disabledPlusClass = 'disabled';
			}

		}
		if(catalogItemInfo.catalog.status.id === 2){
			underOrder = 'underOrder'
		}else{
			underOrder = '';
		}
		$elementData = ''+
			'<div class="shopping-cart-item js-cart-product-item '+weightedClass+'" data-product-id="' + catalogItemInfo.catalog.id + '" data-id="' + catalogItemInfo.id + '" data-gradation-g="'+catalogItemInfo.catalog.measureGradation+'" data-remnants="' + catalogItemInfo.catalog.remnants + '">\n' +
				'<div class="shopping-cart-item-img">\n';
		if(catalogItemInfo.catalog.photo != undefined){
			$elementData += '<img src="' + catalogItemInfo.catalog.photo + '" alt="">';
		}else{
			$elementData += '<img src="/app/img/default_catalog.png" alt="">';
		}
		$elementData += ''+
				'</div>\n' +
				'<a href="/product/'+catalogItemInfo.catalog.slug+'" class="shopping-cart-item-title">'+catalogItemInfo.catalog.title+'</a>\n' +
				'<div class="shopping-cart-item-qnt top-cart-item-count js-product-count-ctn">\n' +
					'<button type="button" class="shopping-cart-item-qnt-button js-product-count-minus '+disabledClass+'">\n' +
						'<svg width="12" height="3" viewBox="0 0 12 3" xmlns="http://www.w3.org/2000/svg"><title>Rectangle 10</title><rect transform="rotate(90 18.1 3.5)" x="15" y="10" width="2.2" height="11" rx="1.1" fill="#1A1A1A" fill-rule="evenodd"></rect></svg>\n' +
					'</button>\n'
		if(catalogItemInfo.weighted === true){
			$elementData += ''+
				'<input name="" class="shopping-cart-item-qnt-numer js-product-count-value '+underOrder+'" value="'+ weightData[0] +'"  data-remnants="'+ catalogItemInfo.catalog.remnants +'" readonly="" type="text">'+
				'<span class="shopping-cart-item-qnt-in">кг</span>'+
				'<input name="" class="shopping-cart-item-qnt-numer js-product-count-decimal-value shopping-cart-item-qnt-numer-inner" value="'+ weightData[1] +'" readonly="" type="text">'+
				'<span class="shopping-cart-item-qnt-in shopping-cart-item-qnt-in-inner">г</span>'
		}else{
			$elementData += ''+
				'<input name="" class="shopping-cart-item-qnt-numer js-product-count-value '+underOrder+'" value="'+ catalogItemInfo.count +'" data-remnants="'+ catalogItemInfo.catalog.remnants +'" readonly="" type="text">\n' +
				'<span class="shopping-cart-item-qnt-in">'+measureSymbol+'</span>\n'
		}
		$elementData += ''+
					'<button type="button" class="shopping-cart-item-qnt-button js-product-count-plus '+disabledPlusClass+'">\n' +
						'<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><title>Group 15</title><g fill="#1A1A1A" fill-rule="evenodd"><rect x="4.4" width="2.2" height="11" rx="1.1"></rect><rect transform="rotate(90 5.5 5.5)" x="4.4" width="2.2" height="11" rx="1.1"></rect></g></svg>\n' +
					'</button>\n' +
				'</div>\n' +
				'<div class="shopping-cart-item-cost js-shopping-cart-item-cost">'+ catalogItemInfo.price +' р</div>\n' +
				'<span href="#" class="shopping-cart-item-delete js-cart-list-item-delete">×</span>' +
			'</div>';
		$('.js-top-cart-elements-ctn').append($elementData);
	}

}

function getCartData(){

	$.ajax({
		'method': 'get',
		'dataType': 'json',
		'url': Routing.generate('api_cart_get'),
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded',
			'token': $('.user-token').data('token')
		}
	}).done(function (answer) {
		if (answer.success && answer.success === true) {
			responseInfo = answer;
			return getProductInfo(responseInfo);

		}
	})
}

/**
 * Клик по кнопке "Оплатить" у любого заказа
 * Необходимо, чтобы на кнопке были три data-атрибута:
 * - data-order-pay-by-sberbank – тригерный атрибут
 * - data-order-id – ID заказа
 * - data-order-key – Специальный hash-ключ заказа
 */
$(document).on("click.payButton", "[data-order-pay-by-sberbank]", function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.attr("disabled")) {
        return false;
    }
    $this.attr("disabled", "disabled").addClass("disabled");

    var data = {
            "action": "register.do",
            "orderId": $this.data("order-id"),
            "orderKey": $this.data("order-key")
        },
        defaultErrorMessage = "Не удалось создать заявку на&nbsp;оплату в&nbsp;системе Сбербанка.<br />Приносим Вам свои извинения.";

    if (data.orderId && data.orderKey) {
        $.ajax({
            type: "POST",
            data: data,
            url: Routing.generate('api_payment_sberbank_regiter'),
            dataType : "json"
        }).done(function (response) {
            if (response && response.success) {
                top.window.location.assign(response.formURL);
            } else {
              var errorMessage = (response && response.errors)?response.errors.shift().message:defaultErrorMessage;
              alert(errorMessage);
              console.log("Sberbank Error", errorMessage);
            }
        }).always(function () {
            $this.removeAttr("disabled").removeClass("disabled");
        });
    }

    return false;
});

function checkEmptyCart(){
	var $noItemsCtn = $(document).find('.js-cart-no-items');
	var emptyCartBlockMessage = '';
	if(responseInfo.data.items.length < 1){
		if($noItemsCtn.length){
			$noItemsCtn.removeClass('hidden');
		}else{
			emptyCartBlockMessage = '' +
				'<div class="cart-list-item js-cart-product-item js-cart-no-items">' +
					'<div class="cart-list-item-text cart-list-item-text_message">' +
						'Упс ваша корзина пока пуста!<br>' +
						'Начните покупки с <a href="/categories">каталога</a>, множество отличных продуктов ждут вас. А специальные предложения и обзоры интересных рецептов на <a href="/">главной странице</a> помогут вам определиться с выбором!' +
					'</div>' +
				'</div>';
			$('.js-cart-elements-ctn').append(emptyCartBlockMessage);
		}

	}else{
		$noItemsCtn.addClass('hidden');
	}
}

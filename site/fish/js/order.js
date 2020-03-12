$(document).ready(function () {

    orderDeliveryDate = $('.js-order-date-select').val();
		headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'token': $('.user-token').data('token')
		};

		// Оформление заказа
    $(document).on('click', '.js-order-button', function (e) {
      e.preventDefault();
      var $this = $(this);
      var orderButton = $(this);
			var contactInfoCtn = $(document).find('.order-contact-info');
      var selectedAddress = $(document).find('.js-order-form-delivery-address.selected')
      var isAuthorized = $('.js-authorised-user').length
      
			if($this.hasClass('waiting')){
				return
			}
      
      
			if(contactInfoCtn.length){
        var nameField = contactInfoCtn.find('#input-name');
        var isPhoneKnown = true
        var phoneField

        if ($(document).find('#person-inner').prop('checked') === true) {
          phoneField = $(document).find('.js-input-order-delivery-phone');
          if(phoneField && phoneField.inputmask('unmaskedvalue').length < 11 ){
            isPhoneKnown = false
            phoneField.addClass('error');
            orderButton.addClass('disabled');
          }
        } else if (selectedAddress.length) {
          var selectedAddressPhone = selectedAddress.data('address-phone')
          if (!selectedAddressPhone.length) {
            phoneField = contactInfoCtn.find('#input-tel');
            if(phoneField && phoneField.inputmask('unmaskedvalue').length < 11 ){
              isPhoneKnown = false
              if (isAuthorized) {
                alert('Не указан номер телефона для данного адреса и в профиле')
              } else {
                phoneField.addClass('error');
                orderButton.addClass('disabled');
              }
              
            }
          } 
        } else {
          phoneField = contactInfoCtn.find('#input-tel');
          if(phoneField && phoneField.inputmask('unmaskedvalue').length < 11 ){
            isPhoneKnown = false
            if (isAuthorized) {
              alert('Не указан номер телефона')
            } else {
              phoneField.addClass('error');
              orderButton.addClass('disabled');
            }
          }
        }

        if(nameField.val().length == 0 ){
          nameField.addClass('error');
          orderButton.addClass('disabled');
        }
        
			}
			var errorFields = contactInfoCtn.find('input.error')


      if($(this).hasClass('disabled') || errorFields.length || !isPhoneKnown){

        if(errorFields.length > 0){
          $('html, body').animate({
            scrollTop: errorFields.eq(0).offset().top - 100 + 'px'
          }, 300);
        }
      } else{
        orderComplete($this);
      }
      
      setTimeout(function(){
        $this.removeClass('disabled')
      }, 500)
      
    });

    // Оформление заказа в один клик
    $(document).on('click', '.js-order-one-click-button', function (e) {
        e.preventDefault();
        var $cartListCtn = $(document).find('.js-cart-elements-ctn');
        var $cartItemNotAvailable = $cartListCtn.find('.js-cart-product-item[data-status-available="0"]');
        if($cartItemNotAvailable.length > 0){
            $('html, body').animate({
                scrollTop: $cartItemNotAvailable.eq(0).offset().top - 100 + 'px'
            }, 500);
            $cartItemNotAvailable.css('border-left', '2px solid red');
            setTimeout(function(){
                $cartItemNotAvailable.css('border-left', '2px solid transparent');
            },3000);
            return;
        }
        orderOneClickComplete();
    });
    
    // Кнопки выбора магазина
    $(document).on('click', '.js-order-shop-button', function (e) {
        e.preventDefault();
        if(!$(this).hasClass('active')){
					orderShopId = $(this).parents('.js-order-selected-shop-id').data('id');
					var noShopBalloon = $(document).find('.js-order-no-shop');
					selectOrderShop();
					noShopBalloon.fadeOut('fast');
					updateCartInfo('shop', orderShopId);

				}
    });

    // Списать бонусы
    $('.js-order-info-bonuses-apply').on('click', function () {
        var bonusesField = $(document).find('.js-order-info-bonuses-input');
        var errorField = $(document).find('.js-order-info-bonuses-error');
        var orderTotalAmount = $(document).find('.js-order-info-total-amount');
        var orderAmount = $(document).find('.js-order-info-price');
        var bonusesFieldValue = $.trim(bonusesField.val());
        var bonusCard = $('.bonus-card');
        var number = bonusCard .data('number');
        var bonuses = parseInt(bonusCard.data('bonuses'));
        
        errorField.addClass('hidden');
        
        var data = {
            'number': number,
            'count': bonusesFieldValue
        };
        $.ajax({
            'method': 'patch',
            'dataType': 'json',
            'url': Routing.generate('api_bonus_card_patch'),
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
								'token': $('.user-token').data('token')
            },
            'data': data
        }).done(function (answer) {
            if (answer.success && answer.success === true) {
                var bonusesAvailable = bonuses - parseInt(answer.data.bonusesSpent);
                if (bonusesAvailable < 0) {
                  bonusesAvailable = 0;
                }
                $('.cart-info-input-group-helper').html(
                    'Доступно для списания: <b>' + 
                    bonusesAvailable + 
                    ' ' +
                    declOfNum(bonusesAvailable, ['бонус', 'бонуса', 'бонусов']) + 
                    '</b>'
                  );
                bonusesField.val(Math.min(bonuses, bonusesFieldValue));
                orderTotalAmount.html(answer.data.totalAmount + answer.data.deliveryCost);
								orderAmount.html(answer.data.totalAmount);
            }
        }).fail(function (answer) {
            if (answer.status && answer.success === false) {
                var errorMessage = answer.responseJSON.data.message;
                errorField.removeClass('hidden').text(errorMessage);
            }
        })
    })

    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

		$(document).on('click', '.order-map-balloon-close', function(){
			var orderInfoAddressField = $('.js-order-info-address');
			var noShopBalloon = $(document).find('.js-order-no-shop');
			$('.js-order-selected-shop-ctn').hide();
			if(orderInfoAddressField.html() == '' || !orderInfoAddressField.length){
				if(!noShopBalloon.hasClass('disabled')){
					noShopBalloon.fadeIn('fast');
				}
			}
		})


});
var orderShopId = '';
var orderDeliveryDate = '';


function selectOrderShop() {
    var $shopElements = $(document).find('.js-order-selected-shop-id[data-id="' + orderShopId + '"]');
    $('.js-order-selected-shop-ctn').find('.js-order-shop-button').removeClass('active').text('ДА, ВЫБРАТЬ ЭТОТ ПУНКТ');
    $('.order-map-list-location-item-js').find('.js-order-shop-button').removeClass('active').text('Выбрать');
		$('.js-order-no-shop').addClass('disabled');
    $shopElements.each(function () {
        $(this).find('.js-order-shop-button').addClass('active');
				$(this).find('.js-order-shop-button').text('Выбрано');
        if ($(this).hasClass('order-map-list-location-item')) {
            $('.order-map-list-location-item').removeClass('order-map-list-location-item--active');
            $(this).addClass('order-map-list-location-item--active')
        }
    });
}

function orderOneClickComplete() {
    var phone = $.trim($('#one-click-phone').val().replace(/[^\d\+]/g,""));
    if (!phone.match(/^(\+7|8)([0-9]){10}$/)) {
        alert('Неверный формат телефона');
        return;
    }
    var token = $('.user-token').data('token');
  
    $.ajax({
        'method': 'patch',
        'url': Routing.generate('api_cart_patch'),
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': token
        },
        'data': {
            'field': 'phone',
            'value': phone
        },
        'success': function (response) {

        }
    }).done(function(answer){
        if(answer.success && answer.success === true){
            $.ajax({
                'method': 'post',
                'url': '/api/order',
                'headers': {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'token': token
                },
                'data': {
                  'isOneClick': 1
                },
                'success': function (response) {

                }
            }).done(function (response) {
                if (response.success && response.success === true) {
                  location.assign('/cart/order-thanks?id=' + response.data.id + '&key=' + response.data.hash_key);
                }
              }
            ).fail(function (response) {
                alert($.parseJSON(response.responseText).data.message);
                location.reload();
            })
        }
    });
}

function orderComplete(el) {
	el.addClass('waiting');
	el.css('opacity', '0.5');
  var data = {
    'isOneClick': 0
  };
  $.ajax({
    'method': 'post',
    'url': '/api/order',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'token': $('.user-token').data('token')
    },
    'data': data,
    'success': function (response) {

    }
  }).done(function (response) {
      if (response.success && response.success === true) {
        if (response.data != undefined
          && response.data.payment != undefined
          && response.data.payment.id != undefined
          && response.data.payment.id == 2) {
          sberbankPayment(response.data);
        } else {
          location.assign('/cart/order-thanks?id=' + response.data.id + '&key=' + response.data.hash_key);
        }
      }
    }
  ).fail(function (response) {
			alert($.parseJSON(response.responseText).data.message);
		}
  ).always(function (response) {
  	el.removeClass('waiting');
		el.css('opacity', '1');
	})
}

function sberbankPayment(orderData) {
    var data = {
        "action": "register.do",
        "orderId": orderData.id,
        "orderKey": orderData.hash_key
    }

    $.ajax({
        'method': 'post',
        'url': '/api/sberbank/orderRegister',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': $('.user-token').data('token')
        },
        'data': data,
        'success': function (response) {
        }
    }).done(function (response) {
        location.assign(response.formURL);
        if(response.success && response.success == true && response.formURL) {
        }
    }).fail(function (response) {

    })
}

function cabinetOrderRepeat(el) {
	var orderData = $('.order-data');
	var orderId = orderData.data('id');
	var hashKey = orderData.data('key');

	if (!checkData()) {
		return;
	}
	$(el).css('opacity', 0.3);
	var data = {'hashKey': hashKey};

	$.ajax({
		'method': 'post',
		'url': Routing.generate('api_cabinet_order_repeat', { id: orderId }),
		'headers': headers,
		'data': data,
		'success': function (data) {
			$(el).css('opacity', 1);
			openModal($('#modal-order-repeat'));
		},
		'error': function (data) {
			$(el).css('opacity', 1);
			onError(data);
		}
	});
	return false;
}

function cabinetOrderCancel(el) {
	var orderData = $('.order-data');
	var orderId = orderData.data('id');
	var hashKey = orderData.data('key');
	if (!checkData()) {
		return;
	}
	$(el).css('opacity', 0.3);
	var data = {'hashKey': hashKey};

	$.ajax({
		'method': 'patch',
		'url': Routing.generate('api_cabinet_order_cancel', { id: orderId }),
		'headers': headers,
		'data': data,
		'success': function (data) {
			$(el).css('opacity', 1);
			openModal($('#modal-order-cancel'));
			$('.btn-cancel-order').remove();
			$('.order-status-title').html('Отмена покупателем');
		},
		'error': function (data) {
			$(el).css('opacity', 1);
			onError(data);
		}
	});
	return false;
}

function checkData() {
	var orderData = $('.order-data');
	var orderId = orderData.data('id');
	var hashKey = orderData.data('key');
	if (!orderId || !hashKey) {
		return false;
	}
	return true;
}

function onError(data) {
	var error = $.parseJSON(data.responseText);
	alert(error.data.message);
}

function openModal(elem) {
	if (elem.length) {
		$.magnificPopup.open({
			items: {
				src: elem
			},
			type: 'inline'
		});
	}
}
var address = undefined;
var orderIntervals = undefined;
var orderDeliveryDate = '';
var addressID = $('.user-data').data('address-id');

setGlobalOnLoad(function(){
	orderRequaredCheck();
})
$('.js-dadata-address').each(function () {
  var $this = $(this),
    $fieldId = $("#"+$this.prop("id")+"-id");
  // принимаем за правило, что если поле с автокомплитом имеет id="some-field-name",
  // то hidden поле для «id» адреса будет иметь id="some-field-name-id"
  if ($fieldId.length) {
    $this.suggestions({
      token: $('.dadata-token').data('token'),
      type: "ADDRESS",
      constraints: {
        // ограничиваем поиск Казанью
        label: "",
        locations: {
          city: "Казань"
        }
      },
      count: 10,
      // Вызывается, когда пользователь выбирает одну из подсказок
      onSelect: function (suggestion) {
        $.ajax({
          'method': 'post',
          'url': Routing.generate('api_create_address'),
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': $('.user-token').data('token')
          },
          'data': suggestion,
          'success': function (data) {

          }
        }).done(function (response) {
          if (response.success && response.success === true) {
            // номинально: подставляем id адреса в hidden поле
            $fieldId.val(response.data.id);
          }
        });
      }
    });
  }
});


$(document).on('click', '.cabinet-personal-info-form-link-js' , function() {
	$(this).addClass('cabinet-personal-info-form-link-js--active');
	$(this).parent().find('.cabinet-personal-info-form-hidden').toggleClass('cabinet-personal-info-form-hidden--active');
});
$(document).on('click','.cabinet-personal-info-form-btn-cancel-js', function() {
	$(this).parents('.cabinet-personal-info-item-js').find('.cabinet-personal-info-form-link-js').removeClass('cabinet-personal-info-form-link-js--active');
	$(this).parents('.cabinet-personal-info-item-js').find('.cabinet-personal-info-form-hidden').removeClass('cabinet-personal-info-form-hidden--active');
});
//Выбор даты доставки
$(document).on('change', '.js-order-date-select', function () {
	var $listItem = $('div.js-order-date-select').find('.list .option.selected');
	var $tempItem = $('div.js-order-date-select').find('.list .option[data-id="0"]');
	orderDeliveryDate = $listItem.data('value');
	if(orderIntervals === undefined){
		if(addressID !== undefined){
			orderGetIntervals(true);
		}else{
			$('.js-order-button').addClass('disabled');
			return false
		}
	}else{
		orderChangeIntervals(orderDeliveryDate);
	}
	if($tempItem.length){
		$tempItem.remove();
	}
	updateCartInfo('deliveryDate', orderDeliveryDate);
	orderRequaredCheck();

});

$(document).on('change', '#input-name, #input-tel, #input-email, #delivery-address-comment, #js-order-comment-field, .js-input-order-delivery-name, .js-input-order-delivery-phone', function () {
	if($(this).val().length > 0){
		var option = $(this).data('option');
		var usrChangeDataValue = $.trim($(this).val());
		updateCartInfo(option, usrChangeDataValue);
		orderRequaredCheck();
	}
});
$(document).on('input', '#input-name, #input-tel', function () {
	$(this).removeClass('error');
});
$(document).on('input', '#delivery-address', function () {
	orderRequaredCheck();
});

$('.js-order-tab').on('click', function(){
	var $listItem = $('div.js-order-date-select').find('.list .option.selected');
	orderDeliveryDate = $listItem.data('value');
	$('.js-order-tab').removeClass('active');
	$(this).addClass('active');
	updateCartInfo('delivery', $(this).data('id'), 'deliveryType');
	$(document).find('.js-order-info-address').remove();
});

$('.js-checkbox-do-not-call input').on('change', function(){
	var doNotCallValue = 0;
	if($(this).prop('checked')){
		doNotCallValue = 1;
	}
	updateCartInfo('doNotCall', doNotCallValue);
});

$(document).on('click', '.js-order-form-delivery-address', function () {
	addressID = $(this).data('id');
	//orderGetIntervals();
	orderRequaredCheck();
	updateCartInfo('userAddress', $(this).data('id'), false, true);
});

$(document).on('change', '.js-order-time-select', function () {
	var $listItem = $('div.js-order-time-select').find('.list .option.selected');
	var $tempItem = $('div.js-order-time-select').find('.list .option[data-id="0"]');
	if($tempItem.length){
		$tempItem.remove();
	}
	if($listItem.data('id') == 0){

	}
	var deliveryInterval = $listItem.data('id');
	var deliveryCost = $listItem.data('value');
	if(deliveryInterval > 0){
		updateCartInfo('deliveryInterval', deliveryInterval);
		orderRequaredCheck();
	}

});

$('#delivery-address').suggestions({
	token: $('.dadata-token').data('token'),
	type: "ADDRESS",
	constraints: {
		// ограничиваем поиск Казанью
		label: "",
		locations: {
			city: "Казань"
		}
	},
	count: 10,
	// Вызывается, когда пользователь выбирает одну из подсказок
	onSelect: function (suggestion) {
		address = suggestion;
		$.ajax({
			'method': 'post',
			'url': Routing.generate('api_create_address'),
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded',
				'token': $('.user-token').data('token')
			},
			'data': suggestion,
			'success': function (data) {

			}
		}).done(function (response) {
			if (response.success && response.success === true) {
				// всё, у нас есть address_id, дальше работаем именно с ним
				addressID = response.data.id
				//orderGetIntervals();
				updateCartInfo('address', addressID);
				$('.user-data').data('address', addressID);
				// номинально: подставляем id адреса в hidden поле
			}
		}).fail(function () {

		});
	}
});

// Переделается когда будет известен список тригеров
function updateCartInfo(option, value, selected, changeAddress){
	var data ={
		'field' : option,
		'value': value
	};

  $.ajax({
    'method': 'patch',
    'url': Routing.generate('api_cart_patch'),
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'token': $('.user-token').data('token')
    },
    'data': data,
    'success': function (response) {

    }
  }).done(function(answer){
    
    if(answer.success && answer.success === true){
    	if(changeAddress){
				//orderIntervals = answer.data.intervals
			}
      updateOrderInfo(answer.data, selected);
    }
    if(selected === 'deliveryType' && value === 1){
			var $listItem = $('div.js-order-date-select').find('.list .option.selected');
			orderDeliveryDate = $listItem.data('value');
			updateCartInfo('deliveryDate', orderDeliveryDate, 'interval');
		}
		if(selected === 'interval'){
			var $listItem = $('div.js-order-time-select').find('.list .option.selected');
			var deliveryInterval = $listItem.data('id');
			if(deliveryInterval > 0){
				updateCartInfo('deliveryInterval', deliveryInterval);
			}
		}

	}).always(function(){
		orderRequaredCheck();
	});
}

function updateOrderInfo(orderInfo, selected) {
	var $orderCount = $('.js-order-info-count');
	var $orderPrice = $('.js-order-info-price');
	var $orderAddress = $(document).find('.js-order-info-address');
	var orderPaymentTitle = $(document).find('.order-payment-item--active').find('.order-payment-item-title').text();
	var $orderTotalAmount = $('.js-order-info-total-amount');
	var $orderBonusesSpent = $('.js-order-info-bonuses-spent');
	var deliveryTypeCtn = $('.js-order-info-delivery-type-ctn');
	var $orderDeliveryType = $('.js-order-info-delivery-type');
	var $orderDeliveryTypeText = $('.js-order-info-delivery-type-text');
	var $orderDeliveryCost = $('.js-order-info-delivery-cost');
	var deliveryAddress = $('.js-order-info-address-text');
	var deliveryPaymentCtn = $('.js-order-info-payment-ctn');
	var $orderPayment = $('.js-order-info-payment-text');
	var commentField = $('#js-order-comment-field');
	var pickupCtn = $('.js-order-tab-pickup');
	var pickupDate = $(document).find('.js-order-pickup-date');
	var pickupPrice = $(document).find('.js-order-pickup-price');
	var timeField = $(document).find('div.js-order-time-select .current');
	var deliveryShopDate = '';
	var deliveryShopDateValue = '';


	var deliveryCostValue = '';

	if ($orderCount.length) {
		$orderCount.html(orderInfo.items.length)
	}
	if ($orderPrice.length) {
		$orderPrice.html(orderInfo.totalAmount)
	}

	//Тип  истоимость доставки
	deliveryTypeCtn.removeClass('hidden');
	if (orderInfo.deliveryCost === 0) {
		deliveryCostValue = 'бесплатно';
	} else {
		deliveryCostValue = orderInfo.deliveryCost + 'р';
	}
		if (orderInfo.delivery.id === 2) {
			if(orderInfo.shopAddressTitle !== null){
				deliveryAddress.html('<span class="js-order-info-address">' + orderInfo.shopAddressTitle + '</span>');
			}else{
				deliveryAddress.html('');
			}

		} else {
			deliveryAddress.html('<span class="js-order-info-address">' + orderInfo.address.title + '</span>')
		}

	if($orderDeliveryType.length){
		$orderDeliveryType.text(orderInfo.delivery.title);
	}else{
		$orderDeliveryTypeText.append('<span class="js-order-info-delivery-type">'+ orderInfo.delivery.title +'</span>')
	}

		if($orderDeliveryCost.length){
			$orderDeliveryCost.text(deliveryCostValue);
		}else{
			$orderDeliveryTypeText.append(', <span class="js-order-info-delivery-cost">'+deliveryCostValue+'</span>')
		}

	//адрес доставки
	deliveryPaymentCtn.removeClass('hidden');
	$orderPayment.html('<span class="js-order-info-payment">'+orderPaymentTitle+'</span>')

	//Сумма
	if($orderTotalAmount.length > 0){$orderTotalAmount.html(orderInfo.totalAmount + orderInfo.deliveryCost)}
	if($orderBonusesSpent.length){$orderBonusesSpent.html(orderInfo.bonusesSpent)}

	if(orderInfo.comment){
		commentField.val(orderInfo.comment);
	}else{
		commentField.val('');
	}

	if (orderInfo.delivery.id === 2) {
		if(orderInfo.deliveryDate){
			var date = new Date(orderInfo.deliveryDate);
			var curDate = new Date().getDate();
			deliveryShopDate = setMonth(date.getMonth());
			if(curDate === date.getDate()){
				deliveryShopDateValue = 'сегодня'
			}else if(curDate + 1 === date.getDate()){
				deliveryShopDateValue = 'завтра'
			}else{
				deliveryShopDateValue = date.getDate() + ' ' + deliveryShopDate;
			}
			if(pickupDate.length){
				pickupDate.html(deliveryShopDateValue)
			}
		}

		if (pickupPrice.length) {
			pickupPrice.html(', '+deliveryCostValue)
		}else{
			pickupCtn.append('<span class="js-order-pickup-price">, '+deliveryCostValue+'</span>');
		}

	}else{
		deliveryCostChange(orderInfo);
	}
}

function orderGetIntervals(savedAddress){
	$.ajax({
		'method': 'get',
		'dataType': 'json',
		'url': Routing.generate('api_address_get_delivery', { id: addressID }),
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).done(function (answer) {
		if (answer.success && answer.success === true) {
			orderIntervals = answer;
			if(!savedAddress){
				orderSetIntervals();
			}else{
				orderChangeIntervals(orderDeliveryDate);
			}
			orderRequaredCheck();
		}
	})

}
function orderSetIntervals(currentDate){
	var $dateList = $(document).find('div.js-order-date-select .list');
	var $timeList = $(document).find('div.js-order-time-select .list');
	var $selectedDate = $(document).find('div.js-order-date-select span.current');
	var $selectedTime = $(document).find('div.js-order-time-select span.current');
	var dates = orderIntervals.data.dates;
	$dateList.html('');
	/*$timeList.html('<li class="option selected">---------</li>');
	$dateList.append('<li data-id="0" data-value="" class="option">---------</li>');
	$selectedTime.html('---------');*/
	for (key in dates) {
		if (dates.hasOwnProperty(key)) {
			$dateList.append('<li data-value="' + key + '" class="option">' + dates[key].title + '</li>');
		}
	}
	$dateList.find('li').eq(0).addClass('selected');
	$selectedDate.text($dateList.find('li').eq(0).text());
	$(document).find('div.js-order-date-select').trigger('change');
	orderChangeIntervals($dateList.find('li').eq(0).data('value'));
	return false;
}

function orderChangeIntervals(date){
	var intervals = orderIntervals.data.dates[date].intervals;
	var $timeList = $(document).find('div.js-order-time-select ul');
	var $selectedTime = $(document).find('div.js-order-time-select span.current');
	$timeList.html('');

	for (key in intervals) {
		if (intervals.hasOwnProperty(key)) {
			$timeList.append('<li data-id="' + intervals[key].id + '" data-value="' + intervals[key].price + '" class="option">' + intervals[key].title + '</li>');
		}
	}
	$timeList.find('li').eq(0).addClass('selected');
	$selectedTime.text($timeList.find('li').eq(0).text());
	//$(document).find('div.js-order-time-select').trigger('change');
	orderRequaredCheck();
}

function deliveryCostChange(orderInfo){
	var $dateList = $('div.js-order-date-select').find('.list .option.selected');
	var deliveryDate = $.trim($dateList.text());
	var deliveryCost = '';
	var $deliveryCostCtn = $(document).find('.js-order-delivery-cost');
	deliveryCost = orderInfo.deliveryCost;

	if(deliveryCost === 0){
		deliveryCost = 'бесплатно';
	}else{
		deliveryCost += 'р';
	}
	if($deliveryCostCtn.length){
		$deliveryCostCtn.html(deliveryDate + ', ' + deliveryCost);
	}else{
		$('.js-delivery-tab').append('<span class="js-order-delivery-cost">'+ deliveryDate+', '+deliveryCost + '</span>');
	}
	$deliveryCostCtn.fadeIn('fast');
	$('.js-order-form-delivery-summ').html(deliveryCost).fadeIn('fast');
}

function orderRequaredCheck(){
	var addressField = $('#delivery-address');
	var dateField = $(document).find('div.js-order-date-select');
	var selectedDateField = dateField.find('.selected');
	var timeField = $(document).find('div.js-order-time-select');
	var selectedTimeField = timeField.find('.selected');
	var orderButton = $('.js-order-button');
	var orderInfoAddressField = $('.js-order-info-address');
	var deliveryType = $(document).find('.js-order-tab.active').data('id');
	var $deliveryInfoCtn = $(document).find('.js-order-info-delivery-type-text');
	var activeShop = $(document).find('.js-order-shop-button.active');
	if(deliveryType === 1){
		if(selectedDateField.data('id') == 0){
			orderButton.addClass('disabled');
			return false;
		}
		if(typeof selectedTimeField.data('id') == undefined || selectedTimeField.data('id') == 0){
			orderButton.addClass('disabled');
			return false;
		}
	}
	if((orderInfoAddressField.html() == '' || !orderInfoAddressField.length)){
		orderButton.addClass('disabled');
		return false;
	}
	if($('.js-order-info-count').html() == 0){
		orderButton.addClass('disabled');
		return false;
	}
	orderButton.removeClass('disabled');
}


$(document).on('click', '.js-profile-save-phone-btn', function(){
  
  var $this = $(this)
  if ($this.prop('disabled') === true) {
    return false
  }
  
  $this.prop('disabled', true)
  $('.js-profile-save-phone-input').prop('disabled', false)
  
  profileFormFieldChanged($('.js-profile-save-phone-input'))
})

function repeatCode(el, input, btn) {
  var total = 30
  var smsInput = $('.js-profile-sms-code')
  input.prop('disabled', true)
  btn.prop('disabled', true)
  
  
  var timer = setInterval(function(){
    
    if (smsInput.length === 0 || !smsInput.hasClass('shown')) {
      clearInterval(timer)
      total = 30
      return false
    }

    if (total === 1) {
      clearInterval(timer)
      el.html('<a href="#" class="cabinet-personal-info-form-link js-repeat-profile-code">Запросить код</a>')
      input.prop('disabled', false)
      return false
    }
    total = total - 1

    el.html('Запросить код через ' + total + ' сек.')
  }, 1000)
}

function sendRequest (unmaskedVal, errCtn, input) {

  var smsCodeCtn = $(document).find('.js-profile-sms-code')
  var confirmationCtn = $('.js-repeat-sms-confirmation')
  var btn = $('.js-profile-save-phone-btn')
  
  $.ajax({
    url: '/api/confirmationCode',
    type: 'POST',
    data: {
      credentials: unmaskedVal,
      type: 'register'
    }
  }).done(function(res) {

    if (res.success && res.success === true) {
      smsCodeCtn.addClass('shown').slideDown('300')
      repeatCode(confirmationCtn, input, btn)
    }
  }).fail(function(err) {

    var errText = 'Призошла ошибка'

    if (err && err.responseJSON && err.responseJSON.data && err.responseJSON.data.message) {
      errText = err.responseJSON.data.message
    }

    input.addClass('input-default-error')

    errCtn.show(0).html(errText)
    input.prop('disabled', false)
  })
}

$(document).on('keyup', '.js-profile-sms-confirm', function(){
  var $this = $(this)
  var val = $(this).val()
  var errCtn = $this.next('.input-error-default')
  if (errCtn && errCtn.html().length){
    errCtn.html('').hide(0)
  }
  
  if ($this.hasClass('input-default-error')) {
    $this.removeClass('input-default-error')
  }
  
  if (val && val.length === 6) {

    $this.prop('disabled', true)
    
    $.ajax({
      url: '/api/confirmationCode',
      type: 'PATCH',
      data: {
        code: val,
        type: 'register'
      }
    }).done(function(res) {
      if (res.success && res.success === true) {
        $('.js-profile-save-phone-btn').prop('disabled', false)
        $('.js-profile-save-phone-input').prop('disabled', false)
        
        $('.js-profile-sms-code').slideUp('300').removeClass('shown')
      }
      
    }).fail(function(err) {
      var errText = 'Призошла ошибка'

      if (err && err.responseJSON && err.responseJSON.data && err.responseJSON.data.message) {
        errText = err.responseJSON.data.message
      }
      errCtn.show(0).html(errText)
      $this.addClass('input-default-error')
      
    }).always(function(){
      $this.prop('disabled', false)
    })
  }
})

$(document).on('click', '.js-repeat-profile-code', function(e){
  
  var input = $('.js-profile-save-phone-input')
  var unmaskedVal = input.inputmask('unmaskedvalue')
  var errCtn = input.next('.input-error-default')
  var btn = $('.js-profile-save-phone-btn')
 
  e.preventDefault()
  repeatCode($(this), input, btn)
  sendRequest(unmaskedVal, errCtn, input)
})



$(document).on('keyup', '.js-profile-save-phone-input', function(){
  
  var $this = $(this)
  var unmaskedVal = $this.inputmask('unmaskedvalue')
  var errCtn = $this.next('.input-error-default')
  var smsCodeCtn = $(document).find('.js-profile-sms-code')
  var btn = $('.js-profile-save-phone-btn')
  var confirmInput = $('.js-profile-sms-confirm ')

  if ($this.hasClass('input-default-error')) {
    $this.removeClass('input-default-error')
  }
  
  if (confirmInput.next('.input-error-default').html().length) {
    confirmInput.next('.input-error-default').hide(0).html('')
  }
  
  if (confirmInput.val().length) {
    confirmInput.val('')
  }

  if (confirmInput.hasClass('input-default-error')) {
    confirmInput.removeClass('input-default-error')
  }
  
  if (errCtn.html().length) {
    errCtn.hide(0).html('')
  }
  
  if (smsCodeCtn && smsCodeCtn.html().length) {
    $('.js-repeat-profile-code').html('')
  }
  
  if (btn.prop('disabled') !== true) {
    btn.prop('disabled', true)
  }
  
  if (unmaskedVal.length && unmaskedVal.length === 11) {
    $this.prop('disabled', true)

    sendRequest(unmaskedVal, errCtn, $this)
    
  } else {
    if(smsCodeCtn.hasClass('shown')) {
      smsCodeCtn.removeClass('shown').slideUp('300')
    }
  }
})

function profileFormFieldChanged(el) {
	var $el = $(el),
		data = {
			field: $el.prop("name"),
			value: ""
		};
	if ($el.prop("type") === "checkbox") {
		data.value = $el.is(":checked");
	} else {
		data.value = $.trim($el.val());
	}
	$el.removeClass('input-default-error');
	$el.parent().find(".err-lbl").remove();
	if ($el.attr("disabled")) {
		return false;
	}
	$el.attr("disabled", "disabled");
	$.ajax({
		context: $el,
		data: data,
		dataType: "json",
		headers: {
			"Token": $(".user-token").data("token")
		},
		type: "POST",
		url: Routing.generate('api_cabinet_update_profile_field')
	}).done(function (response) {
		if (response && response.success) {
			$el.addClass('input-default-success');
      if ($(el).hasClass('js-profile-save-phone-input')){
        $('.js-profile-save-phone-btn').remove()
        $('.js-profile-sms-code').remove()
          setTimeout(function(){
            $el.prop('disabled', true)
          }, 20);
      }
			setTimeout(function(){
				$el.removeClass('input-default-success');
			}, 2000);
		}
	}).fail(function (jqXHR, textStatus) {
		var response = jQuery.parseJSON(jqXHR.responseText);
		$el.addClass('input-default-error');
		$el.after('<label class="err-lbl form-error-default">'+response.data.message+'</label>')
    if ($(el).hasClass('js-profile-save-phone-input')){
      $('.js-profile-save-phone-btn').prop('disabled', false)
    }
	}).always(function () {
		$el.removeAttr('disabled');
	});

	return false;
}
function profileFormUpdateLegalEntity(el) {
	var $el = $(el),
		data = { };
	var $container = $(".cabinet-personal-info-legal-entity-js");
	$container.find(".err-lbl").remove();
	$container.find('.cabinet-personal-info-form-input').each(function () {
		var $this = $(this);
		data[$this.prop("name")] = $this.val();
	});
	if ($el.attr("disabled")) {
		return false;
	}
	$el.attr("disabled", "disabled");
	$.ajax({
		context: $el,
		data: data,
		dataType: "json",
		headers: {
			"Token": $(".user-token").data("token")
		},
		type: "POST",
		url: Routing.generate('api_cabinet_update_legal_entity')
	}).done(function (response) {
		if (response && response.success) {
			$container.find('input.input-default-error').removeClass('input-default-error');
		}
	}).fail(function (jqXHR, textStatus) {
		var response = jQuery.parseJSON(jqXHR.responseText);
		for (var field in response.errors) {
			if (response.errors.hasOwnProperty(field)) {
				$container.find("#cabinet-legalEntity-"+field).addClass('input-default-error');
				$container.find("#cabinet-legalEntity-"+field).after('<label class="err-lbl form-error-default">'+response.errors[field].join('<br />')+'</label>');
			}
		}
	}).always(function () {
		$el.removeAttr("disabled");
	});

	return false;
}
function cabinetAddressAdd(el) {
	var $el = $(el),
		data = { };
	var $container = $el.parent().parent();
	var addAddressLink = $container.parent().find('.cabinet-personal-info-form-link-js');
	var savedAddressValue;
	var savedAddressTitle = '';
	var savedAddressFio = '';
	var savedAddressPhone = '';
	var savedAddressFlat = '';
	var savedAddressComment = '';
	var savedAddressesCount = $('#cabinet-personal-info-addresses').find('.cabinet-personal-info-item-js').length;
	var newAddress = false;
	if($container.find('#cabinet-user-address-new-address').length){
		newAddress = true;
	}
	$container.find(".err-lbl").remove();
	$container.find('.cabinet-personal-info-form-input').each(function () {
		var $this = $(this);
		data[$this.prop("name")] = $this.val();
		$this.removeClass('input-default-error');
	});
	savedAddressValue = $container.find('[name="address[address_value]"]').val();
	savedAddressPhone = $container.find('[name="address[phone]"]').val();
	savedAddressComment = $container.find('[name="address[comment]"]').val();

	if (!data["address[address]"] || !data["address[address_value]"]) {
		$container.find('[name="address[address_value]"]').addClass('input-default-error');
		$container.find('[name="address[address_value]"]').after('<label class="err-lbl form-error-default">Обязательно укажите адрес</label>');

		return false;
	}
	if ($el.attr("disabled")) {
		return false;
	}
	$el.attr("disabled", "disabled");
	$.ajax({
		context: $el,
		data: data,
		dataType: "json",
		headers: {
			"Token": $(".user-token").data("token")
		},
		type: "POST",
		url: Routing.generate('api_cabinet_user_address')
	}).done(function (response) {
		if (response && response.success) {
			if(newAddress){


				if(response.data.title){savedAddressTitle = response.data.title;}
				if(response.data.fio){savedAddressFio = response.data.fio;}
				if(response.data.flat_and_intercom){savedAddressFlat = response.data.flat_and_intercom;}
				var savedAddressContent = '' +
					'<div class="cabinet-personal-info-address-item cabinet-personal-info-item-js">\n' +
						'<span>'+savedAddressTitle+'</span>\n' +
						'<a href="javascript:;" class="cabinet-personal-info-address-item-edit cabinet-personal-info-form-link-js"></a>\n' +
					'<div class="cabinet-personal-info-form-hidden">\n' +
					'<input class="cabinet-personal-info-form-input" name="address[id]" value="'+response.data.id+'" type="hidden">\n' +
					'<div class="cabinet-personal-info-form-input-group">\n' +
					'<label for="cabinet-user-address-'+savedAddressesCount+'-title" class="cabinet-personal-info-form-label">Название адреса</label>\n' +
					'<input class="cabinet-personal-info-form-input" name="address[title]" value="'+savedAddressTitle+'" id="cabinet-user-address-'+savedAddressesCount+'-title" placeholder="" type="text">\n' +
					'<div class="order-form-delivery-helper">Например, "Дом" или "Работа"</div>\n' +
					'</div>\n' +
					'<div class="cabinet-personal-info-form-input-group">\n' +
					'<label for="cabinet-user-address-'+savedAddressesCount+'-address" class="cabinet-personal-info-form-label">Адрес<sup style="color: red;">*</sup></label>\n' +
					'<input class="cabinet-personal-info-form-input" name="address[address]" value="'+response.data.id+'" id="cabinet-user-address-'+savedAddressesCount+'-address-id" type="hidden">\n' +
					'<input class="cabinet-personal-info-form-input js-dadata-address suggestions-input" name="address[address_value]" value="'+savedAddressValue+'" id="cabinet-user-address-2-address" autocomplete="off" style="box-sizing: border-box;" type="text"><div class="suggestions-wrapper"><span class="suggestions-addon" data-addon-type="spinner" style="left: -42.25px; top: 1px; height: 41.25px; width: 41.25px;"></span><ul class="suggestions-constraints" style="left: -267px; top: 22px;"></ul><div class="suggestions-suggestions" style="position: absolute; display: none; left: -280px; top: 42.25px; width: 280px;"></div></div>\n' +
					'<div class="order-form-delivery-helper">Начните вводить адрес и вам будут предложены варианты</div>\n' +
					'</div>\n' +
					'<div class="cabinet-personal-info-form-input-group">\n' +
					'<label for="cabinet-user-address-'+savedAddressesCount+'-flatAndIntercom" class="cabinet-personal-info-form-label">Квартира, этаж, домофон</label>\n' +
					'<input class="cabinet-personal-info-form-input" name="address[flatAndIntercom]" value="'+savedAddressFlat+'" id="cabinet-user-address-'+savedAddressesCount+'-flatAndIntercom" type="text">\n' +
					'<div class="order-form-delivery-helper">Например, кв. 12, этаж 2, домофон 12В1234</div>\n' +
					'</div>\n' +
					'<div class="cabinet-personal-info-form-input-group">\n' +
					'<label for="cabinet-user-address-'+savedAddressesCount+'-fio" class="cabinet-personal-info-form-label">ФИО</label>\n' +
					'<input class="cabinet-personal-info-form-input" name="address[fio]" value="'+savedAddressFio+'" id="cabinet-user-address-'+savedAddressesCount+'-fio" placeholder="" type="text">\n' +
					'<div class="order-form-delivery-helper">Укажите ФИО получателя заказа, если это не Вы</div>\n' +
					'</div>\n' +
					'<div class="cabinet-personal-info-form-input-group">\n' +
					'<label for="cabinet-user-address-'+savedAddressesCount+'-phone" class="cabinet-personal-info-form-label">Телефон</label>\n' +
					'<input class="cabinet-personal-info-form-input cart-info-input js-input-tel" name="address[phone]" value="'+savedAddressPhone+'" id="cabinet-user-address-'+savedAddressesCount+'-phone" placeholder="+7 (999) 999 99 99" type="text">\n' +
					'<div class="order-form-delivery-helper">Укажите контактный номер получателя заказа, если это не Вы</div>\n' +
					'</div>\n' +
					'<div class="cabinet-personal-info-form-input-group">\n' +
					'<label for="cabinet-user-address-'+savedAddressesCount+'-comment" class="cabinet-personal-info-form-label">Комментарий</label>\n' +
					'<textarea class="cabinet-personal-info-form-input" name="address[comment]" id="cabinet-user-address-'+savedAddressesCount+'-comment" placeholder="">'+savedAddressComment+'</textarea>\n' +
					'<div class="order-form-delivery-helper">Получатель — другой человек? К дому сложно проехать? Передайте эти и другие важные детали в этом примечании</div>\n' +
					'</div>\n' +
					'<div class="cabinet-personal-info-form-input-group cabinet-personal-info-form-input-group-btn">\n' +
					'<button class="cabinet-personal-info-form-btn-save" type="button" onclick="return cabinetAddressAdd(this);">Сохранить</button>\n' +
					'<button class="cabinet-personal-info-form-btn-cancel cabinet-personal-info-form-btn-cancel-js" type="button">Отменить</button>\n' +
					'</div>\n' +
					'<a class="cabinet-personal-info-delete" href="javascript:void(0);" data-id="'+response.data.id+'" onclick="return cabinetAddressDelete(this);">Удалить</a>\n' +
					'</div>\n' +
					'</div>'+
					'';
				$container.parent().before(savedAddressContent);
				$container.removeClass('cabinet-personal-info-form-hidden--active');
				addAddressLink.removeClass('cabinet-personal-info-form-link-js--active');
			}
		}
	}).fail(function (jqXHR, textStatus) {
		var response = jQuery.parseJSON(jqXHR.responseText);
		for (var field in response.errors) {
			if (response.errors.hasOwnProperty(field)) {
				$container.find('input[name="address['+field+']"]').addClass('input-default-error');
				$container.find('input[name="address['+field+']"]').after('<label class="err-lbl form-error-default">'+response.errors[field].join('<br />')+'</label>');
			}
		}
	}).always(function () {
		$el.removeAttr("disabled");
	});

	return false;
}
function cabinetAddressDelete(el) {
	if (!confirm("Вы действительно хотите удалить адрес?")) {
		return false;
	}
	var $el = $(el),
		data = {
			id: $el.data("id")
		};
	var $container = $el.parent().parent();
	$.ajax({
		context: $el,
		data: data,
		dataType: "json",
		headers: {
			"Token": $(".user-token").data("token")
		},
		type: "POST",
		url: Routing.generate('api_cabinet_delete_user_address')
	}).done(function (response) {
		if (response && response.success) {
			$container.remove();
		}
	}).fail(function (jqXHR, textStatus) {
		var response = jQuery.parseJSON(jqXHR.responseText);
	}).always(function () {
		$el.removeAttr("disabled");
	});

	return false;
}
function profileFormChangePassword(el) {
	var $el = $(el),
		data = {
			old_password: $.trim($("#cabinet-user-profile-password-old").val()),
			new_password: $.trim($("#cabinet-user-profile-password-new").val())
		};
	if ($el.attr("disabled")) {
		return false;
	}
	$el.attr("disabled", "disabled");
	$.ajax({
		context: $el,
		data: data,
		dataType: "json",
		headers: {
			"Token": $(".user-token").data("token")
		},
		type: "POST",
		url: Routing.generate('api_cabinet_change_password')
	}).done(function (response) {
		if (response && response.success) {
		  var $success = $("<span/>").css("color", "green").html("Изменено");
      window.setTimeout(function () {
        $success.remove();
      }, 5000);
      
			$("#cabinet-user-profile-password-old").css("border-color", "green");
			$("#cabinet-user-profile-password-new").css("border-color", "green").after($success);
		}
	}).fail(function (jqXHR, textStatus) {
		var response = jQuery.parseJSON(jqXHR.responseText);
		var $error = $("<span/>").css("color", "red").html("Ошибка: "+response.data.message);
		window.setTimeout(function () {
			$error.remove();
		}, 5000);

		$("#cabinet-user-profile-password-old").css("border-color", "red");
		$("#cabinet-user-profile-password-new").css("border-color", "red").after($error);

	}).always(function () {
		$el.removeAttr("disabled");
	});

	return false;
}
function validateINN(el) {
	var $el = $(el),
		number = $el.val(),
		parse, n;

	var $container = $(".cabinet-personal-info-legal-entity-js");
	$container.find(".err-lbl").remove();

	//Разрешаем использовать пробельные символы в номере
	number = number.replace(/\s/g, '');

	if (number.length) {
		//Проверка длины
		if (!/^([0-9]{10}|[0-9]{12})$/.test(number)) {
			$el.addClass('input-default-error');
			$el.after('<label class="err-lbl form-error-default">Укажите ИНН корректно</label>');
			return false;
		}

		//Проверка контрольных цифр
		if (number.length === 10) {
			parse = number.match(/^(.{9})(.)$/);
			n     = parse[1].split('');

			var controlCode = parse[2],
				checkCode   = ((2*n[0] + 4*n[1] + 10*n[2] + 3*n[3] + 5*n[4] + 9*n[5] + 4*n[6] + 6*n[7] + 8*n[8]) % 11) % 10;

			if (parseInt(checkCode) !== parseInt(controlCode)) {
				$el.addClass('input-default-error');
				$el.after('<label class="err-lbl form-error-default">Укажите ИНН корректно</label>');
				return false;
			}
		} else {
			parse = number.match(/^(.{10})(.)(.)$/);
			n     = parse[1].split('');
			var controlCode1 = parse[2],
				controlCode2 = parse[3],
				checkCode1   = ((7*n[0] + 2*n[1] + 4*n[2] + 10*n[3] + 3*n[4] + 5*n[5] + 9*n[6] + 4*n[7] + 6*n[8] + 8*n[9]) % 11) % 10,
				checkCode2   = ((3*n[0] + 7*n[1] + 2*n[2] + 4*n[3] + 10*n[4] + 3*n[5] + 5*n[6] + 9*n[7] + 4*n[8] + 6*n[9] + 8*checkCode1) % 11) % 10;

			if (parseInt(checkCode1) !== parseInt(controlCode1) || parseInt(checkCode2) !== parseInt(controlCode2)) {
				$el.addClass('input-default-error');
				$el.after('<label class="err-lbl form-error-default">Укажите ИНН корректно</label>');
				return false;
			}
		}
		$el.removeClass('input-default-error');
	}

	return true;
}

function setMonth(month){
	if(month === 0){return 'января'}
	if(month === 1){return 'февраля'}
	if(month === 2){return 'марта'}
	if(month === 3){return 'апреля'}
	if(month === 4){return 'мая'}
	if(month === 5){return 'июня'}
	if(month === 6){return 'июля'}
	if(month === 7){return 'августа'}
	if(month === 8){return 'сентября'}
	if(month === 9){return 'октября'}
	if(month === 10){return 'ноября'}
	if(month === 11){return 'декабря'}
}

function setGlobalOnLoad(f) {
  var root = window.addEventListener || window.attachEvent ? window : document.addEventListener ? document : null
  if (root){
   if(root.addEventListener) root.addEventListener("load", f, false)
   else if(root.attachEvent) root.attachEvent("onload", f)
  } else {
   if(typeof window.onload == 'function') {
    var existing = window.onload
    window.onload = function() {
     existing()
     f()
    }
   } else {
    window.onload = f
   }
  }
 }





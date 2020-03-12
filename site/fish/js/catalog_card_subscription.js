$(document).ready(function () {

  var form = $('.product-card-teaser-form');
  var btn = form.find('.btn[type="submit"]');
  var credentialsInput = form.find('input[type="text"].product-card-teaser-form__input');
  var errorLbl = form.find('.product-card-teaser-form__input-text-error');
  var successLbl = form.find('.product-card-teaser-form__input-text-success');

  var addError = function (message) {
      errorLbl.css('display', 'inherit');
      errorLbl.addClass('product-card-teaser-form__input-error');
      errorLbl.text(message);
  };
  var hideError = function () {
      errorLbl.css('display', 'none');
      errorLbl.removeClass('product-card-teaser-form__input-error');
  };
  var addSuccess = function (message) {
      successLbl.removeClass('hidden');
      credentialsInput.attr('disabled', 'disabled');
      btn.attr('disabled', 'disabled');
      successLbl.text(message);
  };
  var hideSuccess = function () {
      successLbl.addClass('hidden');
      credentialsInput.removeAttr('disabled');
      btn.removeAttr('disabled');
  };
  
  btn.on('click', function (e) {
      e.preventDefault();

      hideSuccess();
      hideError();
      
      var credentials = $.trim(credentialsInput.val());
      var isEmail = false;
      var isPhone = false;
      
      if (credentials.match(/^.+\@\S+\.\S+$/)) {
          isEmail = true;
      }
      if (credentials.match(/^(\+7)?([0-9]){9,12}$/)) {
          isPhone = true;
      }
      if (!isEmail && !isPhone) {
          addError('неверный формат данных');
          return;
      }

      $.ajax({
          'method': 'post',
          'url': Routing.generate('api_catalog_post_subscribe', { id: $('.product-id').data('id') }),
          'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
          'data': {
              'email': isEmail ? credentials : null,
              'phone': isPhone ? credentials : null
          },
          'success': function (data) {
              addSuccess('Вы успешно подписались на товар');
          },
          'error': function (data) {
              var error = $.parseJSON(data.responseText);
              addError(error.data.message);
          }
      })
  });
  
});
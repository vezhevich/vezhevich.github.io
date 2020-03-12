$(document).ready(function () {

  var form = $('.subscription-form');
  var btn = form.find('.subscription-form__button');
  var emailInput = form.find('.subscription-form__input');
  var emailError = emailInput.siblings('.err-lbl');

  var addError = function (message) {
    emailInput.addClass('input-default-error');
    emailError.removeClass('hidden').text(message);
    emailError.siblings('.input-default').addClass('input-default-error');
  };
  var hideError = function () {
    emailError.addClass('hidden');
    emailInput.removeClass('input-default-error');
  };
  var addSuccess = function (message) {
    emailInput.attr('disabled', 'disabled');
    emailInput.val('');
    emailInput.attr('placeholder', 'Вы подписаны');
    btn.addClass('hidden');
  };
  var hideSuccess = function () {
    emailInput.removeAttr('disabled');
    emailInput.attr('placeholder', 'Введите Email');
    btn.removeClass('hidden');
  };

  btn.on('click', function (e) {
    e.preventDefault();

    hideSuccess();
    hideError();

    var email = $.trim(emailInput.val());

    if (!email.match(/^.+\@\S+\.\S+$/)) {
      addError('Неверный формат email');
      return;
    }

    $.ajax({
      'method': 'post',
      'url': Routing.generate('api_subscriber_post'),
      'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
      'data': {
        'email': email
      },
      'success': function (data) {
        addSuccess();
      },
      'error': function (data) {
        var error = $.parseJSON(data.responseText);
        addError(error.data.message);
      }
    })
  });

});
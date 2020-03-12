$(document).ready(function () {
    
    var resettingForm = $('#resettingForm');
  
    var credentials = $('#resetCredentials');
    var credentialsDiv = credentials.parent();
    var resetBtn = resettingForm.find('button').eq(0);
    var resetBtnDiv = resetBtn.parent();
    var credentialsErr = credentials.siblings('.err-lbl');

    var code = $('#confirmCode');
    var password = $('#newPassword');
    var codeDiv = code.parent();
    var passwordDiv = password.parent();
    var passwordBtn = resettingForm.find('button').eq(1);
    var passwordBtnDiv = passwordBtn.parent();
    var codeErr = code.siblings('.err-lbl');
    var passwordError = password.siblings('.err-lbl');
    
    var isResetError = false;
    var isPasswordError = false;
    var addError = function (elem, error, type) {
        elem.removeClass('hidden').text(error);
        elem.siblings('.input-default').addClass('input-default-error');
        if (type == 'reset') {
            isResetError = true;
        } else {
            isPasswordError = true;
        }
    };
  
    /* нажатие на кнопку генерации и отправки кода подтверждения */
    $(resetBtn).on('click', function (e) {
        e.preventDefault();
    
        isResetError = false;
        credentialsErr.addClass('hidden');
        credentials.removeClass('input-default-error');
    
        var credentialsValue = $.trim(credentials.val());
        if (credentialsValue.length < 5) {
            addError(credentials, 'Минимум 5 символов', 'reset');
        }
        if (isResetError) {
            return;
        }

        credentials.attr('disabled', 'disabled');
        resetBtn.attr('disabled', 'disabled');
        
        $.ajax({
            'method': 'post',
            'url': Routing.generate('api_confirmation_post'),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'data': {
                'credentials': credentialsValue,
                'type': 'resetting'
            },
            'success': function (data) {
                credentials.removeAttr('disabled');
                resetBtn.removeAttr('disabled');
                credentialsDiv.addClass('hidden');
                resetBtnDiv.addClass('hidden');
                
                $('.modal-reset-password-text')
                  .text('На вашу почту или телефон был отправлен код. Введите его, а также новый пароль в поле ниже');
                
                codeDiv.removeClass('hidden');
                passwordDiv.removeClass('hidden');
                passwordBtnDiv.removeClass('hidden');
            },
            'error': function (data) {
                credentials.attr('disabled', 'disabled');
                credentials.css('opacity', 0.2);
                var error = $.parseJSON(data.responseText);
                var wait = 30;
                var timer = setInterval(function(){
                    addError(credentialsErr, error.data.message + ', для новой попытки ждите ' + (wait--) + ' сек', 'reset');
                    if(wait <= -1) {
                        clearInterval(timer);
                        credentialsErr.addClass('hidden');
                        credentials.removeClass('input-default-error');
                    }
                }, 1000);
                setTimeout(function(){
                    resetBtn.removeAttr('disabled');
                    credentialsErr.addClass('hidden');
                    credentials.removeClass('input-default-error');
                    credentials.css('opacity', 1);
                    credentials.removeAttr('disabled');
                }, 31000);
            }
        });
    });

    /* нажатие на кнопку создания нового пароля */
    $(passwordBtn).on('click', function (e) {
        e.preventDefault();
  
        isPasswordError = false;
        passwordError.addClass('hidden');
        password.removeClass('input-default-error');
  
        var codeValue = $.trim(code.val());
        var passwordValue = $.trim(password.val());
        if (codeValue.length !== 6) {
            addError(code, 'ожидается 6 символов', 'password');
        }
        if (passwordValue.length < 5) {
            addError(password, 'Минимум 5 символов', 'password');
        }
        if (isPasswordError) {
            return;
        }
  
        password.attr('disabled', 'disabled');
        code.attr('disabled', 'disabled');
        passwordBtn.attr('disabled', 'disabled');

        $.ajax({
            'method': 'post',
            'url': Routing.generate('api_cabinet_check_code_and_change_password'),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'data': {
                'code': codeValue,
                'new_password': passwordValue
            },
            'success': function (data) {
                $('#modal-auth-reset-password').magnificPopup('close');
                openModal($('#modal-password-change'));
                password.removeAttr('disabled');
                password.val('');
                code.removeAttr('disabled');
                code.val('');
                passwordBtn.removeAttr('disabled');
                credentialsErr.addClass('hidden');
                credentials.removeClass('input-default-error');
                password.css('opacity', 1);
                code.css('opacity', 1);
            },
            'error': function (data) {
                password.css('opacity', 0.2);
                code.css('opacity', 0.2);
                var error = $.parseJSON(data.responseText);
                var wait = 30;
                var timer = setInterval(function(){
                    addError(passwordError, error.data.message + ', для новой попытки ждите ' + (wait--) + ' сек', 'reset');
                    if(wait <= -1) {
                      clearInterval(timer);
                      passwordError.addClass('hidden');
                      password.removeClass('input-default-error');
                    }
                }, 1000);
                setTimeout(function(){
                    password.removeAttr('disabled');
                    code.removeAttr('disabled');
                    passwordBtn.removeAttr('disabled');
                    credentialsErr.addClass('hidden');
                    credentials.removeClass('input-default-error');
                    password.css('opacity', 1);
                    code.css('opacity', 1);
                }, 31000);
            }
        });

        // Opens modal
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
        
        // при закрытии модалки менять внутрение поля на дефолтные
        $('#modal-auth-reset-password button.mfp-close').click(function () {
          credentials.attr('disabled');
          resetBtn.attr('disabled');
          credentialsDiv.removeClass('hidden');
          resetBtnDiv.removeClass('hidden');

          $('.modal-reset-password-text').text('');

          codeDiv.addClass('hidden');
          passwordDiv.addClass('hidden');
          passwordBtnDiv.addClass('hidden');
        });
    });
});
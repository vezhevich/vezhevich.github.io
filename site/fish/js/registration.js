$(document).ready(function () {

    var regFio = $('#regFio');
    var regPhone = $('#regPhone');
    var regEmail = $('#regEmail');
    var regPassword = $('#regPassword');
    var regInn = $('#regInn');
    var regKpp = $('#regKpp');
    var regBtn = $('#regForm').find('button');
    var regFioErr = regFio.siblings('.err-lbl');
    var regPhoneErr = regPhone.siblings('.err-lbl');
    var regEmailErr = regEmail.siblings('.err-lbl');
    var regPasswordErr = regPassword.siblings('.err-lbl');
    var regInnError = regInn.siblings('.err-lbl');
    var regKppError = regKpp.siblings('.err-lbl');
    
    /* SMS countdown */
    var smsRepeatBtn = $('#sms-repeat-btn');
    var countdown = $('.sms-countdown'); 
    var isCountdownShown = false;
    var startFrom = 30;
    var countdownStr = $('.sms-countdown-str');
    var isCountDown = false;
  
    var showLegalClass = 'modal-auth-form-item-hidden--show';
    var smsCheckClass = 'modal-auth--sms-code-check';
    var smsSendClass = 'modal-auth--sms-code-send';
  
    var isSendOnKeyUp = true;
    
    var confirmSms = $('#confirmSms');
    var phoneIsConfirmedStr = $('.modal-auth-form-message');
    var isSmsSending = false;
    var isConfirmed = false;
    
    var isError = false;
    var addError = function (elem, error) {
        elem.removeClass('hidden').text(error);
        elem.siblings('.input-default').addClass('input-default-error');
        isError = true;
    };

    /* Нажитие на кнопку повторной отправки СМС */
    smsRepeatBtn.on('click', function () {
        regPhoneErr.addClass('hidden');
        regPhone.removeClass('input-default-error');
        if (isCountDown || isConfirmed) {
            return;
        }
        var phone = $('#regPhone').val().replace(/[^\d\+]/g,"");
        if ($.inArray(phone.length, [12, 13, 14]) === -1) {
            addError(regPhoneErr, 'неверный формат');
            return;
        }
        phone = phone.substring(0,12);
        if (!phone.match(/^\+7([0-9]){10}$/)) {
            addError(regPhoneErr, 'неверный формат');
            return;
        }
        var form = $(document).find('#modal-reg');
        if (form.hasClass(smsSendClass)) {
            form.removeClass(smsSendClass);
        }
        
        generateConfirmCode(phone);
    });
    
    /* Ввод символов в поле с телефоном */
    regPhone.keyup(function() {
        regPhoneErr.addClass('hidden');
        regPhone.removeClass('input-default-error');
        if (isConfirmed || !isSendOnKeyUp) {
            return;
        }
        if (isCountDown) {
            isCountdownShown = true;
            addError(regPhoneErr, 'ждите ' + startFrom + ' сек');
            return;
        }
        var phone = $('#regPhone').val().replace(/[^\d\+]/g,"");
        if ($.inArray(phone.length, [12, 13, 14]) === -1) {
            return;
        }
        phone = phone.substring(0,12);
        if (!phone.match(/^\+7([0-9]){10}$/)) {
            addError(regPhoneErr, 'неверный формат');
            return;
        }
        
        var form = $(document).find('#modal-reg');
        if (form.hasClass(smsSendClass)) {
            form.removeClass(smsSendClass);
        }
        if (form.hasClass(smsCheckClass)) {
            form.removeClass(smsCheckClass);
        }
      
        generateConfirmCode(phone);
    });

    /* Ввод символов в поле с кодом из СМС */
    confirmSms.keyup(function() {
        if (isSmsSending) {
            return;
        }

        var sms = $('#confirmSms').val();
        if ($.inArray(sms.length, [6, 7, 8]) === -1) {
            return;
        }
        sms = sms.substring(0,6);
        if (!sms.match(/^\d{6}$/)) {
            return;
        }

        confirmConfirmCode(sms);
    });
    
    /* Нажатие на кнопку регистрации */
    $(regBtn).on('click', function (e) {
        e.preventDefault();
        
        var innDiv = $(document).find('#regInn').parent();
        var kppDiv = $(document).find('#regKpp').parent();
        var isLegalEntity = innDiv.hasClass(showLegalClass) && kppDiv.hasClass(showLegalClass);

        regBtn.prop('disabled', true)
      
        isError = false;
        regFioErr.addClass('hidden');
        regPhoneErr.addClass('hidden');
        regEmailErr.addClass('hidden');
        regPasswordErr.addClass('hidden');
        regInnError.addClass('hidden');
        regKppError.addClass('hidden');
        regFio.removeClass('input-default-error');
        regPhone.removeClass('input-default-error');
        regEmail.removeClass('input-default-error');
        regPassword.removeClass('input-default-error');
        regInn.removeClass('input-default-error');
        regKpp.removeClass('input-default-error');

        var fioValue = $.trim(regFio.val());
        var phoneValue = $.trim(regPhone.val().replace(/[^\d\+]/g,""));
        var emailValue =  $.trim(regEmail.val());
        var passwordValue =  $.trim(regPassword.val());
        var innValue = $.trim(regInn.val());
        var kppValue = $.trim(regKpp.val());
        if (fioValue.length < 2) {
            addError(regFioErr, 'Минимум 2 символа');
        }
        if (phoneValue.length < 5) {
            addError(regPhoneErr, 'Минимум 5 символов');
        }
        if (passwordValue.length < 5) {
            addError(regPasswordErr, 'Минимум 5 символов');
        }
        if (isLegalEntity) {
            if (!kppValue.match(/^[0-9]{9}$/)) {
                addError(regKppError, 'Значение должно быть из 9 цифр');
            }
            if (!innValue.match(/^[0-9]{10,}$/)) {
                addError(regInnError, 'Минимум 10 цифр');
            }
          
        }
        
        if (isError) {
          regBtn.prop('disabled', false)
            return;
        }

        var data = {
            'registration[fio]': fioValue,
            'registration[phone]': phoneValue,
            'registration[email]': emailValue,
            'registration[plainPassword]': passwordValue
        };
        if (isLegalEntity) {
            data["legalEntity[inn]"] = innValue;
            data["legalEntity[kpp]"] = kppValue;
        }
  
        $.ajax({
            'method': 'post',
            'url': Routing.generate('registration'),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'data': data,
            'success': function (data) {
                $.fancybox.close($('#modal-reg'));
                $.fancybox.open($('#modal-reg-success'));
                window.location.replace(Routing.generate('homepage'));
            },
            'error': function (data) {
                regBtn.prop('disabled', false);
                var errors = $.parseJSON(data.responseText);
                $.each(errors, function (key, error) {
                    var errText = error instanceof Array ? error[0] : error;
                    switch (key) {
                        case 'fio': addError(regFioErr, errText); break;
                        case 'phone': addError(regPhoneErr, errText); break;
                        case 'email': addError(regEmailErr, errText); break;
                        case 'plainPassword': addError(regPasswordErr, errText);break;
                        case 'inn': addError(regInnError, errText); break;
                        case 'kpp': addError(regKppError, errText); break;
                        default: addError(regFioErr, error.message); break;
                    }
                });
            }
        })
    });

    /* счетчик до отправки новой СМС */
    function startCountdown(){
        if (isSendOnKeyUp) {
            regPhone.attr('disabled', 'disabled');
        }
        isCountDown = true;
        countdown.text(30);
        startFrom = 30;
        countdownStr.removeClass('hidden');
        smsRepeatBtn.css('opacity', 0.2);
        var timer = setInterval(function(){
            countdown.text(startFrom--);
            
            if (isCountdownShown) {
                addError(regPhoneErr, 'ждите ' + startFrom + ' сек');
            }
                
            if (startFrom <= 0) {
                regPhone.removeAttr('disabled');
                clearInterval(timer);
                countdownStr.addClass('hidden');
                isCountDown = false;
                smsRepeatBtn.css('opacity', 1);
                
                regPhoneErr.addClass('hidden');
                regPhone.removeClass('input-default-error');
                isCountdownShown = false;
                
                regPhone.trigger('keyup');
            }
        }, 1000);
    }
  
    /* запрос на генерацию нового кода */
    function generateConfirmCode(phone) {
        isSendOnKeyUp = false;
        var form = $(document).find('#modal-reg');
        regPhoneErr.addClass('hidden');
        regPhone.removeClass('input-default-error');
        confirmSms.val('');

        startCountdown();

        regPhone.attr('disabled', 'disabled');
        
        $.ajax({
            'method': 'post',
            'url': Routing.generate('api_confirmation_post'),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'data': {
                'credentials': phone,
                'type': 'register'
            },
            'success': function (data) {
                regPhone.removeAttr('disabled');
                if (!form.hasClass(smsSendClass)) {
                    form.addClass(smsSendClass);
                }
            },
            'error': function (data) {
                isSendOnKeyUp = true;
                regPhone.removeAttr('disabled');
                var error = $.parseJSON(data.responseText);
                addError(regPhoneErr, error.data.message)
            }
        })
    }
    
    /* запрос на подтверждение кода */
    function confirmConfirmCode(sms) {
        isSmsSending = true;
        phoneIsConfirmedStr.text('Телефон подтвержден');
        var form = $(document).find('#modal-reg');
        var smsCheckClass = 'modal-auth--sms-code-check';
        var smsSendClass = 'modal-auth--sms-code-send';

        confirmSms.attr('disabled', 'disabled');
      
        $.ajax({
            'method': 'patch',
            'url': Routing.generate('api_confirmation_confirm'),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'data': {
              'code': sms,
              'type': 'register'
            },
            'success': function (data) {
                confirmSms.removeAttr('disabled');
                isSmsSending = false;
                isConfirmed = true;
                isCountdownShown = false;
                startFrom = 0;
                regPhone.attr('disabled', 'disabled');
                if (form.hasClass(smsSendClass)) {
                    form.removeClass(smsSendClass);
                }
                if (!form.hasClass(smsCheckClass)) {
                    form.addClass(smsCheckClass);
                }
            },
            'error': function (data) {
                confirmSms.removeAttr('disabled');
                regPhone.attr('disabled', 'disabled');
                isSmsSending = false;
                var error = $.parseJSON(data.responseText);
                phoneIsConfirmedStr.text('Неверный код');
                if (form.hasClass(smsSendClass)) {
                    form.removeClass(smsSendClass);
                }
                if (!form.hasClass(smsCheckClass)) {
                    form.addClass(smsCheckClass);
                }
                var wait = 30;
                var timer = setInterval(function(){
                    addError(regPhoneErr, error.data.message + ', для новой попытки ждите ' + (wait--) + ' сек');
                    if(wait <= -1) {
                        clearInterval(timer);
                        regPhoneErr.addClass('hidden');
                        regPhone.removeClass('input-default-error');
                    }
                }, 1000);
                regPhone.css('opacity', 0.2);
                form.removeClass(smsCheckClass);
                isSendOnKeyUp = true;
                setTimeout(function(){
                    regPhoneErr.addClass('hidden');
                    regPhone.removeClass('input-default-error');
                    regPhone.css('opacity', 1);
                    form.removeClass(smsCheckClass);
                }, 31500);
            }
        })
    }
});
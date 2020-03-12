$(document).ready(function () {

    var loginUsername = $('#loginUsername');
    var loginPassword = $('#loginPassword');
    var loginBtn = $('#loginForm').find('button');
    var loginUsernameErr = loginUsername.siblings('.err-lbl');
    var loginPasswordErr = loginPassword.siblings('.err-lbl');
    var isError = false;
    var addError = function (elem, error) {
        elem.removeClass('hidden').text(error);
        elem.siblings('.input-default').addClass('input-default-error');
        isError = true;
    };

    $(loginBtn).on('click', function (e) {
        e.preventDefault();

        isError = false;
        loginUsernameErr.addClass('hidden');
        loginPasswordErr.addClass('hidden');
        loginUsername.removeClass('input-default-error');
        loginPassword.removeClass('input-default-error');

        var usernameValue = $.trim(loginUsername.val());
        var passwordValue =  $.trim(loginPassword.val());
        if (usernameValue.length < 2) {
            addError(loginUsernameErr, 'Минимум 2 символа');
        }
        if (passwordValue.length < 5) {
            addError(loginPasswordErr, 'Минимум 5 символов');
        }
        if (isError) {
            return;
        }

        $.ajax({
            'method': 'post',
            'url': Routing.generate('login'),
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
            'data': {
                'username': usernameValue,
                'password': passwordValue
            },
            'success': function (data) {
              var urlParams = new URLSearchParams(window.location.search);
              if (urlParams.get('redirect') && window.location.pathname !== '/cart/order') {
                location.assign(urlParams.get('redirect'));
              } else {
                location.reload();
              }
              // window.location.replace(Routing.generate('homepage'))
            },
            'error': function (data) {
                var error = $.parseJSON(data.responseText);
                addError(loginUsernameErr, error.data.message);
                addError(loginPasswordErr, error.data.message);
            }
        })
    });
});

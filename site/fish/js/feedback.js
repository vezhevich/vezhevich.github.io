$(document).ready(function () {
    var feedbackName = $("input[name='feedback-name']");
    var feedbackEmail = $("input[name='feedback-phone-email']");
    var feedbackText = $("textarea[name='feedback-text']");
    var feedbackButton = $("#form-feedback button");
    var errLabelName = $("#form-feedback label.err-lbl[for='feedback-name']")
    var errLabelEmail = $("#form-feedback label.err-lbl[for='feedback-phone-email']")
    var errLabelText = $("#form-feedback label.err-lbl[for='feedback-text']")
    var form = $("#form-feedback");
    var okMessageBlock = $(".feedback__ok-message");
    var errorMessageBlock = $(".feedback__error-message");
  
    $(document).on('click', '.js-modal-feedback', function() {
      if (!okMessageBlock.hasClass('hidden')) {
        form.show(0);
        okMessageBlock.addClass('hidden');
      }
    })

    feedbackButton.on("click", function (e) {
        e.preventDefault();
        var hasEmptyFields = false;

        errorMessageBlock.addClass("hidden");
        $("#form-feedback label.err-lbl").addClass("hidden");

        var feedbackNameValue = feedbackName.val();
        var feedbackEmailValue = feedbackEmail.val();
        var feedbackTextValue = feedbackText.val();

        if(feedbackNameValue == undefined || feedbackNameValue == "") {
            hasEmptyFields = true;
            errLabelName.removeClass("hidden");
        }
        if(feedbackEmailValue == undefined || feedbackEmailValue == "") {
            hasEmptyFields = true;
            errLabelEmail.removeClass("hidden");
        }
        if(feedbackTextValue == undefined || feedbackTextValue == "") {
            hasEmptyFields = true;
            errLabelText.removeClass("hidden");
        }

        if(hasEmptyFields == true) {
            return false;
        }

        $.ajax({
            'method': 'post',
            'dataType': 'json',
            'url': Routing.generate('feedback'),
            'data': {
                'feedbackName': feedbackNameValue,
                'feedbackPhoneEmail': feedbackEmailValue,
                'feedbackText': feedbackTextValue
            },
            'success': function (data) {
                if(data.result == true) {
                    form.hide(0);
                    okMessageBlock.removeClass("hidden");
                    yaCounter46987521.reachGoal('feedback');
                    gtag('event', ' send_feedback', { 'event_category': 'form', 'event_action': 'feedback', });
                    form.find('.form-feedback-input').val('')
                    form.find('.form-feedback-textarea').val('')
                  
                  setTimeout(function(){
                    form.show(0);
                    okMessageBlock.addClass("hidden");
                  }, 5000)
                } else {
                    errorMessageBlock.removeClass("hidden");
                }
            },
            'error': function (data) {
                errorMessageBlock.removeClass("hidden");
            }
        });
    });
});

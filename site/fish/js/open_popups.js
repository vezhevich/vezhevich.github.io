$(document).ready(function () {
    //Open auth modal
    if (window.location.href.match(/popup=auth/)) {
        $($.find('a[href="#modal-auth"]')).click();
    }
    //Open reg modal
    if (window.location.href.match(/popup=reg/)) {
        $($.find('a[href="#modal-reg"]')).click();
    }
    //Open check-email modal
    if (window.location.href.match(/popup=check-email/)) {
      openModal($('#modal-check-email'));
    }
    //Open check-phone modal
    if (window.location.href.match(/popup=check-phone/)) {
      openModal($('#modal-check-phone'));
    }
    //Open password-change modal
    if (window.location.href.match(/popup=reset-success/)) {
      openModal($('#modal-password-change'));
    }
    //Open user-not-found modal
    if (window.location.href.match(/popup=user-not-found/)) {
      openModal($('#modal-user-not-found'));
    }
    //Open review-success modal
    if (window.location.href.match(/popup=review-success/)) {
      openModal($('#modal-review-success'));
    }
    
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
});
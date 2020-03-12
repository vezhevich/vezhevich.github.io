// создание отзыва для магазина, товара и рецепта через модалку
$(document).ready(function() {

  var location = window.location;
  var pathName = location.pathname;
  
  var reviewModal = $('#modal-review');
  var reviewTextarea = $('#review-text');
  var reviewTextareaErr = reviewTextarea.siblings('.err-lbl');
  var reviewStarsErr = $('#reviewStars-input').siblings('.err-lbl');
  var btn = reviewModal.find('.js-popup-send-review');

  var isError = false;
  var addError = function (elem, error) {
    elem.removeClass('hidden').text(error);
    elem.siblings('.input-default').addClass('input-default-error');
    isError = true;
  };
  
  
  $(document).on('click', '#modal-review .js-popup-send-review', function(e) {
    e.stopImmediatePropagation()
    e.preventDefault()

    var inputFile = reviewModal.find('.js-review-file');

    isError = false;
    reviewTextareaErr.addClass('hidden');
    reviewTextarea.removeClass('input-default-error');
    reviewStarsErr.text('');

    var rating = 0
    if (reviewModal.find('input[name=reviewStars]:checked').length) {
      rating =  parseInt(reviewModal.find('input[name=reviewStars]:checked').attr('id').substring(5)) + 1;
    }

    var review = $.trim(reviewTextarea.val());
    if (review.length < 5) {
      addError(reviewTextareaErr, 'Минимум 5 символов');
      return;
    }
    if (!rating) {
      addError(reviewStarsErr, 'Выставьте корректную оценку');
      return;
    }


    var data = {
      'review': review,
      'rating': rating,
      'images': []
    };

    var query = getQueryParams(location.search);
    if (query.orderId && query.key) {
      data.orderId = query.orderId;
      data.key = query.key;
    }

    var filesArray = []

    if ($(inputFile).length) {
      $(inputFile).each(function(){
        filesArray.push($(this).val())
      })

      data.images = filesArray
    }

    // в зависимости от страницы формируем url для запроса
    var url = Routing.generate('api_shop_reviews_post');
    if (pathName.match(/\/product\//)) {
      url = Routing.generate('api_catalog_reviews_post', { id: $('.product-id').data('id') });
    }
    if (pathName.match(/\/recipe\//)) {
      url = Routing.generate('api_recipe_reviews_post', { slug: $('.recipe-slug').data('slug') });
    }

    $.ajax({
      method: 'post',
      url: url,
      headers: {
        token: $('.user-token').data('token')
      },
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      success: function (data) {
        reviewModal.find('#review-text').val('')
        reviewModal.find('.js-uploaded-files-list').html('')
        reviewModal.find('.dz-image-preview').html('')
        reviewModal.find('input[type="radio"]:checked').prop('checked', false)

        $.magnificPopup.open({
          items: {
            src: $('#modal-review-success')
          },
          type: 'inline'
        });
      },
      error: function (data) {
        addError(reviewTextareaErr, $.parseJSON(data.responseText).data.message);
      }
    })
    
  })

  function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
});

(function ($) {
  var $container = $("#activity-live-scroll");
  if ($container.length) {
    $("#activity-live-refresh").on("click", function (e) {
      e.preventDefault();
      getActivityLiveList($container);

      return false;
    });
    getActivityLiveList($container);
  }

  function getActivityLiveList($container) {
    $.ajax({
      type: 'GET',
      url: Routing.generate('api_activity_live')
    }).done(function (response) {
      if (response.success && response.success === true) {
        $container.html(response.data.list);
        // if ($.cookie('activity_panel') !== 'hidden') {
        //   $('.live').removeClass('live--active');
        //   $('.layout-wrapper-live').removeClass('layout-wrapper-live--modified');
        //   $('.footer').removeClass('footer-full-width');
        //
        //       var $carousel = $('.owl-carousel');
        //       $carousel.data('owl.carousel')._invalidated.width = true;
        //       $carousel.trigger('refresh.owl.carousel');
        //
        //       var $containerGrid = $('.grid');
        //       $containerGrid.masonry('layout');
        // }
      }
    });
  }
  
  $(document).on('click', '.js-load-activity', function(e){
    e.preventDefault()

    var $list =  $('#activity-list')
    var $el = $(this),
      data = {
        page: parseInt($el.data('page')) || 1
      };
    data.page++;
    if ($el.hasClass('disabled')) {
      return false;
    }
    $el.html('Загрузка').addClass('disabled');
    $el.data('page', data.page);
    $.ajax({
      context: $el,
      data: data,
      dataType: 'json',
      type: 'GET',
      url: Routing.generate('api_activity')
    }).done(function (response) {
      if (response && response.success) {
        var data = response.data;

        $list.append(data.list).masonry('destroy')
        $list.masonry()

        $('html, body').animate({
          scrollTop: $('.activity-more').offset().top - 400
        }, 0)
        
        if (false === data.hasMore) {
          this.hide()
        }
      }
    }).fail(function (jqXHR, textStatus) {
      console.log('Reviews request failed: ' + textStatus);
    }).always(function(){
      $el.removeClass('disabled').html('Показать ещё');
    });
    
    
  })
  
})(jQuery);
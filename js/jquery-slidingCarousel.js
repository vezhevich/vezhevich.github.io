(function($) {
  $.fn.slidingCarousel = function (options) {
      options = $.extend({}, $.fn.slidingCarousel.defaults, options || {});

      var pluginData = {
          container: $(this),
          sinus:   [0],
          images:  null,
          mIndex:  null
      };

      var preload = function(callback) {
          var images = pluginData.container.find(".slide img"),
              total  = images.length,
              result = [],
              loaded = 0;

          images.each(function (index, element) {
			  var img = new Image();

              $(img).bind('load error', function () {
                  loaded++;

                  // push loaded images into regular array
                  result.push(element);

                  // need ratio for calculating new widths
                  element.ratio = this.width / this.height;
                  element.origH = this.height;

                  if (loaded == total) {
                      var mid = ~~(total / 2)+(total % 2);

                      pluginData.mIndex = mid;
                      pluginData.images = result;
                      pluginData.sinsum = 0;

                      // prepare symetric sinus table

                      for (var n=1, freq=0; n<total; n++) {
                          pluginData.sinus[n] = (n<=mid) ? Math.sin(freq+=(1.6/mid)) : pluginData.sinus[total-n];

                          if (n < mid)
                              pluginData.sinsum += pluginData.sinus[n]*options.squeeze;
                      };
                      callback(pluginData.images);
                  }
              });
			  img.src = element.src;
          });
      };

      var setupCarousel = function() {
          preload(doLayout);
          setupEvents();
      };

      var setupEvents = function() {
          $('#carousel-right').click(function() {
              var images = pluginData.images;

              images.splice(0,0,images.pop());
              doLayout(images, true);
          });
          $('#carousel-left').click(function() {
              var images = pluginData.images;

              images.push(images.shift());
              doLayout(images, true);
          });
      };

      var doLayout = function(images, animate) {
          var mid  = pluginData.mIndex,
              sin  = pluginData.sinus,
              posx = 0,
              diff = 0,
              width  = images[mid-1].origH * images[mid-1].ratio,  /* width of middle picture */
              middle = (pluginData.container.width() - width)/2,   /* center of middle picture, relative to container */
              offset = middle - pluginData.sinsum,                 /* to get the center, all sinus offset that will be added below have to be substracted */
              height = images[mid-1].origH, top, left, idx, j=1;

          // hide description before doing layout
          pluginData.container.find('.carousel-caption').hide();

          $.each(images, function(i, img) {
              idx = Math.abs(i+1-mid);
              top = idx * 15;

              // calculating new width and caching it for later use
              img.cWidth = (height-(top*2)) * img.ratio;

              diff = sin[i] * options.squeeze;
              left = posx += (i < mid) ? diff : images[i-1].cWidth + diff - img.cWidth;

              var fn = function() {
                  if (i === mid-1) addDescription($(img));
              };

              if (animate) {
                  $(img).animate({
                      height   : height - (top*2),
                      zIndex   : mid-idx,
                      top      : top,
                      left     : left+offset,
                      opacity  : i==mid-1 ? 1 : sin[j++]*0.8
                  }, options.animate, fn);
              }
              else
              {
                  $(img).css({
                      zIndex   : mid-idx,
                      height   : height - (top*2),
                      top      : top,
                      left     : left+offset,
                      opacity  : 0
                  }).show().animate({opacity: i==mid-1 ? 1 : sin[j++]*0.8 }, fn);

                  if (options.shadow)
                      $(img).addClass('shadow');
              }
          });

          if (!animate) {
              $('#carousel-left').css('left', middle+50);
              $('#carousel-right').css('left', middle+width-75);
          }
      };

      var addDescription = function(img) {
          var caption = img.closest('.slide').find('.carousel-caption');
          var position = img.position();

          caption.css('width', img.width()).css({
              top: position.top + img.height()-$(caption).height(),
              left: position.left,
              opacity: 0
          }).show().animate({opacity: 0.8});

      };

      this.initialize = function () {
          setupCarousel();
      };

      // Initialize the plugin
      return this.initialize();

  };

  $.fn.slidingCarousel.defaults = {
      shadow: true,
      squeeze: 124,
      animate: 250
  };

})(jQuery);

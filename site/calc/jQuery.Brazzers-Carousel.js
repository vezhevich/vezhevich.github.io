/*!
 * jQuery Brazzers Carousel v1.0.0 (http://webdesign-master.ru)
 * Copyright 2015 WebDesign Master.
 */
(function($) {
   $.fn.brazzersCarousel = function() {
      return this.addClass("brazzers-daddy").append("<div class='tmb-wrap'><div class='tmb-wrap-table'>").append("<div class='image-wrap'>").each(function() {
         var this_wrapper = $(this);
            
            this_wrapper.removeClass("thumb-item");
            this_wrapper.find("img").appendTo(this_wrapper.find(".image-wrap")).each(function() {
               this_wrapper.find(".tmb-wrap-table").append("<div>");
            });
         
      }).find(".tmb-wrap-table").bind('touchstart', function(event) {
         var xClick = event.originalEvent.touches[0].pageX;
         
         $(this).one("touchmove", function (event) {
            
               var xMove = event.originalEvent.touches[0].pageX;
            
            if (Math.floor(xClick - xMove) > 5) {
               var this_img = $(this).closest(".brazzers-daddy").find("img");
               var all_thmbs = $(this).find("div");
               var index_div = $(this).find("div.active").index();
               all_thmbs.removeClass("active");
               next = index_div+1;
               if(!this_img.eq(next).length){
                  next = 0;
               }
               this_img.hide().eq(next).css("display", "block");
               all_thmbs.eq(next).addClass("active");
                           
            }
            else if (Math.floor(xClick - xMove) < -5) {
               
               var this_img = $(this).closest(".brazzers-daddy").find("img");
               var all_thmbs = $(this).find("div");
               var index_div = $(this).find("div.active").index();
               all_thmbs.removeClass("active");
               next = index_div-1;
               if(!this_img.eq(next).length){
                  next = this_img.length;
               }
               this_img.hide().eq(next).css("display", "block");
               all_thmbs.eq(next).addClass("active");
            }
            
         });
         $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
         });
         
      }).find("div").hover(function() {
         var this_img = $(this).parent(".tmb-wrap-table").closest(".brazzers-daddy").find("img");
         var all_thmbs = $(this).parent(".tmb-wrap-table").find("div");
         this_img.hide().eq($(this).index()).css("display", "block");
         all_thmbs.removeClass("active");
         $(this).addClass("active");
      }).parent().find(":first").addClass("active");
      
      
   };
})(jQuery);
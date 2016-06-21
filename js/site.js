if (window.jQuery) $(document).ready(function() {
  if ($('.mCustomScrollbar').length) scroller();
	if ($('.mCustomScrollbar2').length) scroller2();
  if ($('.main-carousel').length) tab();
  if ($('.page-slider .slide-content').length) carousel();
	if ($('.fancybox-thumb').length) fancy();
});

function scroller() {
  $(window).load(function(){
    $(".content").mCustomScrollbar();
  });
}

function scroller2() {
  $(".mCustomScrollbar2").mCustomScrollbar({
    scrollButtons:{enable:true,scrollType:"stepped"},
    keyboard:{scrollType:"stepped"},
    mouseWheel:{scrollAmount:188},
    theme:"rounded-dark",
    autoExpandScrollbar:true,
    snapAmount:188,
    snapOffset:65,
    scrollInertia: 500,
    snapAmount: [400,0],
    callbacks:{
    onImageLoad:function(){
      console.log("Image loaded");
    }
}
  });
}

function tab(){
	$('.main-carousel .b-panel').each(function() {
    $(this).find('.link').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.main-carousel').find('.tab').removeClass('active').eq(i).addClass('active');
      });      
      $('.tab .close').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.main-carousel').find('.tab.active').removeClass('active').eq(i).addClass('active');
      });      
      $('.tab .close').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.main-carousel').find('.b-panel .link.active').removeClass('active').eq(i).addClass('active');
      });
    });    
  });
}

function carousel() {
    $('.page-slider .slide-content').bxSlider({
      pagerType: 'short',
      nextText: '',
      prevText: ''
    });
}

function fancy() {      
    $(".fancybox-thumb").fancybox({
      prevEffect  : 'none',
      nextEffect  : 'none',
      helpers : {
        title : {
          type: 'outside'
        }
        // thumbs  : {
        //   width : 100,
        //   height  : 100
        // }
      }
    });
}
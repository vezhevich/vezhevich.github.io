if (window.jQuery) $(document).ready(function() {
	if ($('.menu-fixed').length) menu();
	if ($('.right_news_list').length) right_news_list();
});

function menu()
{
		$('.menu-fexed-link a').on('click', function(){
		$('.menu-fixed').show();
		return false;
	});		
		$('.menu-fixed .close').on('click', function(){
		$('.menu-fixed').hide();
		return false;
	});
}

function right_news_list()
{
 var height_left_col = $('.left_news_list').outerHeight();
 if (!height_left_col) height_left_col = '500px';
 $('.right_news_list #scroll-div').slimScroll({
  height: height_left_col,
  distance: '0px',
  wheelStep: 10,
  alwaysVisible: true,
  color: '#58B676',
  railVisible: true,
  railOpacity: 1,
  railColor: '#ddd',
  size: '14px'
 });
}
if (window.jQuery) $(document).ready(function() {
	if ($('#carousel').length) carousel();
	if ($('.all-catalog').length) slidedown();
	if ($('.popup').length) popup_reserve();
	var params = {
		changedEl: "select.custom",
		visRows: 5,
		scrollArrows: true
	}
	
	cuSel(params);
	$(".cusel").each(
	function(){
	    var w = parseInt($(this).width()),
	        scrollPanel = $(this).find(".cusel-scroll-pane");
	    if(w>=scrollPanel.width())
	    {
	        $(this).find(".jScrollPaneContainer").width(w);
	        scrollPanel.width(w);
		}
	});
});

function carousel()
{
	$('#carousel').bxSlider({
		auto: true,
		pager: true,
		controls:true,
		slideWidth: '700',
		prevText: '',
		nextText: ''
	});
}

function slidedown()
{
	$('.all-catalog a').bind('click', function(){
		$('.all-catalog-list').slideToggle();
		return false;
	});
}

function popup_reserve()
{
	$('.send-popup').bind('click', function(){
		$('.popup').show();
		$('.bg-popup').show();

		$('.popup .btn-close a').bind('click', function(){
			$('.popup').hide();
			$('.bg-popup').hide();
			return false;
		});

		$('.bg-popup').bind('click', function(){
			$('.popup').hide();
			$('.bg-popup').hide();
			return false;
		});
		return false;
	});
}
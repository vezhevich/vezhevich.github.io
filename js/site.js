if (window.jQuery) $(document).ready(function() {
	if ($('.popup').length) popup();
	if ($('#carousel').length) carousel();
	if ($('input[type=tel]').length) tel();
	if ($('.info-room .navi').length) tabs();
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

function popup()
{

	$('.send-popup').bind('click', function(){
		var rel = $(this).attr('rel');
		$('.popup.'+rel).show();
		$('.bg-popup').show();

		$('.popup.'+rel+' .close').bind('click', function(){
			$('.popup.'+rel).hide();
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

function carousel()
{
	$('#carousel').bxSlider({
		auto: false,
		pager: true,
		controls: false,
		slideWidth: '1000',
		prevText: '',
		nextText: ''
	});
}

function tel(){ 
	$("input[type=tel]").mask("+7 (999) 999-99-99"); 
	return false; 
}

function tabs()
{
	$('.info-room .navi a').bind('click', function(){
		var rel = this.rel;
		$('.info-room .tab').hide();
		$('.info-room .tab.'+rel).show();
		$('.info-room .navi a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
}
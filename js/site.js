if (window.jQuery) $(document).ready(function() {
	if ($('.item-card .link').length) slidedown();
});

function slidedown()
{
	$(".item-card .link").click(function() {
		$(this).toggleClass('active')
		$('.list', $(this).parents('dt')).slideToggle();
		return false;
	});
}

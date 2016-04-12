if (window.jQuery) $(document).ready(function() {
	if ($('.hide-list').length) show();
});

// function show()
// {
// 	$(".recommendations .item .link-js").click(function() {
// 		$(".hide-list").toggleClass('on');
// 		$(this).toggleClass('active');
// 		return false;
// 	});	
// }

function show(){
	$(".recommendations .link-js").on("click", function(){
	$(this).toggleClass("active");
	$(this).closest(".col").toggleClass("active");
	return false;
	});
}
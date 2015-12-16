if (window.jQuery) $(document).ready(function() {
	if ($('.owlCarousel').length) carousel();
	if ($('.owlCarousel2').length) carousel2();
});

function carousel()
{
	$('.owlCarousel').owlCarousel({
    margin:5,
    loop:false,
    autoWidth:true,
    items: 3,
	})
}

function carousel2(){
	$('#myModal2').on('shown.bs.modal', function () {
		$('.owlCarousel2').owlCarousel({
	    margin:5,
	    loop:false,
	    autoWidth:true,
	    items: 3,
		})
	})
}


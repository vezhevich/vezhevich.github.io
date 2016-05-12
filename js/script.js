$(document).ready(function(){
	$(document).on('focus blur', 'input', function(){
		$(this).parents('label').toggleClass('focus');
	});

	$('[title]').each(function(){
    	$(this).attr({'data-title': $(this).attr('title')}).removeAttr('title');
	});

	setTimeout(function(){
		$('.subscribe.fixed').removeClass('hidden');
	}, 3000);

	$(document).on('click', '.subscribe .fa-close', function(){
		$(this).parent().addClass('hidden');
	});

	$('aside .label').click(function() {
		$(this).parent().toggleClass('open');
	});

	$('aside').swipe({
		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') $('aside').removeClass('open');
		},

		threshold: 60
	});

	last = 0;

	$(window).bind('scroll resize', function(){
		var aside = $('aside.left'),

			height = aside.outerHeight(),
			top = aside.offset().top,

			viewport = $(window).height(),
			scroll = $(window).scrollTop();

		if (height > viewport) {
			if (last > scroll) {
				if (scroll > top) { $(aside).attr('style', 'top:' + top + 'px;'); }
				else { $(aside).attr('style', 'position: fixed;'); }
			} else {
				if (height + top > viewport + scroll) { $(aside).attr('style', 'top:' + top + 'px;'); }
				else { $(aside).attr('style', 'position: fixed; bottom: 0;'); }
			}
		} else {
			$(aside).attr('style', 'position: fixed;');
		}

		last = scroll;
	}).scroll();
});

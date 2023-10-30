// tabs
// if ($(document).find('.js-tabs').length) {
// 	var tabNavs = $(this).find(".tabs__nav-item");
// 	var tabPanes = $(this).find(".tabs__pane");
//
// 	for (var i = 0; i < tabNavs.length; i++) {
//
// 		tabNavs[i].addEventListener("click", function (e) {
// 			e.preventDefault();
// 			var activeTabAttr = e.target.getAttribute("data-tab");
//
// 			for (var j = 0; j < tabNavs.length; j++) {
// 				var contentAttr = tabPanes[j].getAttribute("data-tab-content");
//
// 				if (activeTabAttr === contentAttr) {
// 					tabNavs[j].classList.add("active");
// 					tabPanes[j].classList.add("active");
// 				} else {
// 					tabNavs[j].classList.remove("active");
// 					tabPanes[j].classList.remove("active");
// 				}
// 			};
// 		});
// 	}	
// }

$('.tab-wrap').each(function(){
	let tabTabs = $(this).find('.tabs__nav-item');
	let tabItems = $(this).find('.tabs__pane');

	tabTabs.each(function(i){
		$(this).click(function(){
			$(this).addClass('active');
			tabTabs.not(this).removeClass('active');
			$(tabItems[i]).addClass('active');
			tabItems.not(tabItems[i]).removeClass('active');
		});
	});

});

// slider-tab1
$(function () {
	var swiper = new Swiper('.js-slider-tab1', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab1.swiper-button-next',
			prevEl: '.swiper-button-slider-tab1.swiper-button-prev',
		}
	});
});

// slider-tab2
$(function () {
	var swiper = new Swiper('.js-slider-tab2', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab2.swiper-button-next',
			prevEl: '.swiper-button-slider-tab2.swiper-button-prev',
		}
	});
});

// slider-tab3
$(function () {
	var swiper = new Swiper('.js-slider-tab3', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab3.swiper-button-next',
			prevEl: '.swiper-button-slider-tab3.swiper-button-prev',
		}
	});
});

// slider-tab4
$(function () {
	var swiper = new Swiper('.js-slider-tab4', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab4.swiper-button-next',
			prevEl: '.swiper-button-slider-tab4.swiper-button-prev',
		}
	});
});

// slider-tab5
$(function () {
	var swiper = new Swiper('.js-slider-tab5', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab5.swiper-button-next',
			prevEl: '.swiper-button-slider-tab5.swiper-button-prev',
		}
	});
});

// slider-tab6
$(function () {
	var swiper = new Swiper('.js-slider-tab6', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab6.swiper-button-next',
			prevEl: '.swiper-button-slider-tab6.swiper-button-prev',
		}
	});
});

// slider-tab7
$(function () {
	var swiper = new Swiper('.js-slider-tab7', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab7.swiper-button-next',
			prevEl: '.swiper-button-slider-tab7.swiper-button-prev',
		}
	});
});

// slider-tab8
$(function () {
	var swiper = new Swiper('.js-slider-tab8', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab8.swiper-button-next',
			prevEl: '.swiper-button-slider-tab8.swiper-button-prev',
		}
	});
});

// slider-tab9
$(function () {
	var swiper = new Swiper('.js-slider-tab9', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab9.swiper-button-next',
			prevEl: '.swiper-button-slider-tab9.swiper-button-prev',
		}
	});
});

// slider-tab10
$(function () {
	var swiper = new Swiper('.js-slider-tab10', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab10.swiper-button-next',
			prevEl: '.swiper-button-slider-tab10.swiper-button-prev',
		}
	});
});

// slider-tab11
$(function () {
	var swiper = new Swiper('.js-slider-tab11', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab11.swiper-button-next',
			prevEl: '.swiper-button-slider-tab11.swiper-button-prev',
		}
	});
});

// slider-tab12
$(function () {
	var swiper = new Swiper('.js-slider-tab12', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab12.swiper-button-next',
			prevEl: '.swiper-button-slider-tab12.swiper-button-prev',
		}
	});
});

// slider-tab13
$(function () {
	var swiper = new Swiper('.js-slider-tab13', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab13.swiper-button-next',
			prevEl: '.swiper-button-slider-tab13.swiper-button-prev',
		}
	});
});

// slider-tab14
$(function () {
	var swiper = new Swiper('.js-slider-tab14', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab14.swiper-button-next',
			prevEl: '.swiper-button-slider-tab14.swiper-button-prev',
		}
	});
});

// slider-tab15
$(function () {
	var swiper = new Swiper('.js-slider-tab15', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab15.swiper-button-next',
			prevEl: '.swiper-button-slider-tab15.swiper-button-prev',
		}
	});
});

// slider-tab16
$(function () {
	var swiper = new Swiper('.js-slider-tab16', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab16.swiper-button-next',
			prevEl: '.swiper-button-slider-tab16.swiper-button-prev',
		}
	});
});

// slider-tab17
$(function () {
	var swiper = new Swiper('.js-slider-tab17', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab17.swiper-button-next',
			prevEl: '.swiper-button-slider-tab17.swiper-button-prev',
		}
	});
});

// slider-tab18
$(function () {
	var swiper = new Swiper('.js-slider-tab18', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab18.swiper-button-next',
			prevEl: '.swiper-button-slider-tab18.swiper-button-prev',
		}
	});
});

// slider-tab19
$(function () {
	var swiper = new Swiper('.js-slider-tab19', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab19.swiper-button-next',
			prevEl: '.swiper-button-slider-tab19.swiper-button-prev',
		}
	});
});

// slider-tab20
$(function () {
	var swiper = new Swiper('.js-slider-tab20', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab20.swiper-button-next',
			prevEl: '.swiper-button-slider-tab20.swiper-button-prev',
		}
	});
});

// slider-tab21
$(function () {
	var swiper = new Swiper('.js-slider-tab21', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab21.swiper-button-next',
			prevEl: '.swiper-button-slider-tab21.swiper-button-prev',
		}
	});
});

// slider-tab22
$(function () {
	var swiper = new Swiper('.js-slider-tab22', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab22.swiper-button-next',
			prevEl: '.swiper-button-slider-tab22.swiper-button-prev',
		}
	});
});

// slider-tab23
$(function () {
	var swiper = new Swiper('.js-slider-tab23', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab23.swiper-button-next',
			prevEl: '.swiper-button-slider-tab23.swiper-button-prev',
		}
	});
});

// slider-tab24
$(function () {
	var swiper = new Swiper('.js-slider-tab24', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab24.swiper-button-next',
			prevEl: '.swiper-button-slider-tab24.swiper-button-prev',
		}
	});
});

// slider-tab25
$(function () {
	var swiper = new Swiper('.js-slider-tab25', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-slider-tab25.swiper-button-next',
			prevEl: '.swiper-button-slider-tab25.swiper-button-prev',
		}
	});
});

// card-view-slider
$(function () {
	var swiper = new Swiper('.js-card-view-slider', {
		slidesPerView: 5,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view.swiper-button-next',
			prevEl: '.swiper-button-card-view.swiper-button-prev',
		}
	});
});

// card-view-slider2
$(function () {
	var swiper = new Swiper('.js-card-view-slider2', {
		slidesPerView: 5,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view2.swiper-button-next',
			prevEl: '.swiper-button-card-view2.swiper-button-prev',
		}
	});
});

// card-view-slider3
$(function () {
	var swiper = new Swiper('.js-card-view-slider3', {
		slidesPerView: 5,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view3.swiper-button-next',
			prevEl: '.swiper-button-card-view3.swiper-button-prev',
		}
	});
});

// card-view-slider4
$(function () {
	var swiper = new Swiper('.js-card-view-slider4', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view4.swiper-button-next',
			prevEl: '.swiper-button-card-view4.swiper-button-prev',
		}
	});
});

// card-view-slider5
$(function () {
	var swiper = new Swiper('.js-card-view-slider5', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view5.swiper-button-next',
			prevEl: '.swiper-button-card-view5.swiper-button-prev',
		}
	});
});

// card-view-slider6
$(function () {
	var swiper = new Swiper('.js-card-view-slider6', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view6.swiper-button-next',
			prevEl: '.swiper-button-card-view6.swiper-button-prev',
		}
	});
});

// card-view-slider7
$(function () {
	var swiper = new Swiper('.js-card-view-slider7', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view7.swiper-button-next',
			prevEl: '.swiper-button-card-view7.swiper-button-prev',
		}
	});
});

// card-view-slider8
$(function () {
	var swiper = new Swiper('.js-card-view-slider8', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view8.swiper-button-next',
			prevEl: '.swiper-button-card-view8.swiper-button-prev',
		}
	});
});

// card-view-slider9
$(function () {
	var swiper = new Swiper('.js-card-view-slider9', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view9.swiper-button-next',
			prevEl: '.swiper-button-card-view9.swiper-button-prev',
		}
	});
});


// card-feedback-slider
$(function () {
	var swiper = new Swiper('.js-card-feedback-slider', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-card-feedback.swiper-button-next',
			prevEl: '.swiper-button-card-feedback.swiper-button-prev',
		}
	});
});

// card-feedback-slider-inner
$(function () {
	var swiper = new Swiper('.js-card-feedback-slider-inner', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-card-feedback-inner.swiper-button-next',
			prevEl: '.swiper-button-card-feedback-inner.swiper-button-prev',
		}
	});
});


// card-object-inner
$(function () {
	var swiper = new Swiper('.js-card-object-inner-slider1', {
		slidesPerView: 1,
		spaceBetween: 16,
		pagination: {
			el: ".swiper-pagination",
		},
	});
});

// card-object-slider2
$(function () {
	var swiper = new Swiper('.js-card-object-slider2', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider2.swiper-button-next',
			prevEl: '.swiper-button-object-slider2.swiper-button-prev',
		}
	});
});

// card-object-slider3
$(function () {
	var swiper = new Swiper('.js-card-object-slider3', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider3.swiper-button-next',
			prevEl: '.swiper-button-object-slider3.swiper-button-prev',
		}
	});
});

// card-object-slider4
$(function () {
	var swiper = new Swiper('.js-card-object-slider4', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider4.swiper-button-next',
			prevEl: '.swiper-button-object-slider4.swiper-button-prev',
		}
	});
});

// card-object-slider5
$(function () {
	var swiper = new Swiper('.js-card-object-slider5', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider5.swiper-button-next',
			prevEl: '.swiper-button-object-slider5.swiper-button-prev',
		}
	});
});

// card-object-slider6
$(function () {
	var swiper = new Swiper('.js-card-object-slider6', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider6.swiper-button-next',
			prevEl: '.swiper-button-object-slider6.swiper-button-prev',
		}
	});
});

// card-object-slider7
$(function () {
	var swiper = new Swiper('.js-card-object-slider7', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider7.swiper-button-next',
			prevEl: '.swiper-button-object-slider7.swiper-button-prev',
		}
	});
});

// card-object-slider8
$(function () {
	var swiper = new Swiper('.js-card-object-slider8', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider8.swiper-button-next',
			prevEl: '.swiper-button-object-slider8.swiper-button-prev',
		}
	});
});

// card-object-slider9
$(function () {
	var swiper = new Swiper('.js-card-object-slider9', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider9.swiper-button-next',
			prevEl: '.swiper-button-object-slider9.swiper-button-prev',
		}
	});
});

// card-object-slider10
$(function () {
	var swiper = new Swiper('.js-card-object-slider10', {
		slidesPerView: 4,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider10.swiper-button-next',
			prevEl: '.swiper-button-object-slider10.swiper-button-prev',
		}
	});
});

// card-object-slider11
$(function () {
	var swiper = new Swiper('.js-card-object-slider11', {
		slidesPerView: 5,
		spaceBetween: 16,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-object-slider11.swiper-button-next',
			prevEl: '.swiper-button-object-slider11.swiper-button-prev',
		}
	});
});

// card-feedback__media1
$(function () {
	var swiper = new Swiper('.js-card-feedback__media', {
		spaceBetween: 8,
		freeMode: true,
		slidesPerView: '3',
	});
});

// card-article
$(function () {
	var swiper = new Swiper('.js-card-article-slider', {
		slidesPerView: 4,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-article.swiper-button-next',
			prevEl: '.swiper-button-card-article.swiper-button-prev',
		}
	});
});

$(function () {
	var accordion = (function(){

		var $accordion = $('.js-accordion');
		var $accordion_header = $accordion.find('.js-accordion-header');
		var $accordion_item = $('.js-accordion-item');

		// default settings 
		var settings = {
			// animation speed
			speed: 400,

			// close all other accordion items if true
			oneOpen: false
		};

		return {
			// pass configurable object literal
			init: function($settings) {
				$accordion_header.on('click', function() {
					accordion.toggle($(this));
				});

				$.extend(settings, $settings);

				// ensure only one accordion is active if oneOpen is true
				if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
					$('.js-accordion-item.active:not(:first)').removeClass('active');
				}

				// reveal the active accordion bodies
				$('.js-accordion-item.active').find('> .js-accordion-body').show();
			},
			toggle: function($this) {

				if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
					$this.closest('.js-accordion')
						.find('> .js-accordion-item')
						.removeClass('active')
						.find('.js-accordion-body')
						.slideUp()
				}

				// show/hide the clicked accordion item
				$this.closest('.js-accordion-item').toggleClass('active');
				$this.next().stop().slideToggle(settings.speed);
			}
		}
	})();

	$(document).ready(function(){
		accordion.init({ speed: 300, oneOpen: true });
	});
});

// Оптимизировать и сделать один код для всех дропдаунов
// dropdown
$(function () {
	if ($(document).find('.js-dropdown').length) {
		const btnMenu = document.querySelector(".js-dropdown-open");
		const menu = document.querySelector(".js-dropdown");
		const toggleMenu = function () {
			menu.classList.toggle("open");
		}

		btnMenu.addEventListener("click", function (e) {
			e.stopPropagation();
			toggleMenu();
		});

		document.addEventListener("click", function (e) {
			const target = e.target;
			const its_menu = target == menu || menu.contains(target);
			const its_btnMenu = target == btnMenu;
			const menu_is_active = menu.classList.contains("open");

			if (!its_menu && !its_btnMenu && menu_is_active) {
				toggleMenu();
			}
		});	
	}
});
// Оптимизировать и сделать один код для всех дропдаунов
// header auth menu
$(function () {
	if ($(document).find('.dropdown-menu-auth').length) {
		const btnMenu = document.querySelector(".js-dropdown-menu-open");
		const menu = document.querySelector(".dropdown-menu-auth");
		const toggleMenu = function () {
			menu.classList.toggle("open");
		}

		btnMenu.addEventListener("click", function (e) {
			e.stopPropagation();
			toggleMenu();
		});

		document.addEventListener("click", function (e) {
			const target = e.target;
			const its_menu = target == menu || menu.contains(target);
			const its_btnMenu = target == btnMenu;
			const menu_is_active = menu.classList.contains("open");

			if (!its_menu && !its_btnMenu && menu_is_active) {
				toggleMenu();
			}
		});
	}
});

// счетчик
$(function () {
	var countInput = document.getElementsByClassName('js-qnt-value');
	var minus = document.getElementsByClassName('js-qnt-minus');
	var plus = document.getElementsByClassName('js-qnt-plus');
	
	[...document.querySelectorAll('.form-search__dropdown-item')].forEach((s, i) => {

		minus[i].addEventListener('click', function() {
			if ((countInput[i].innerHTML) * 1 >= 1) {
				countInput[i].innerHTML = (countInput[i].innerHTML) * 1 - 1;
			}
		});

		plus[i].addEventListener('click', function() {
			countInput[i].innerHTML = (countInput[i].innerHTML) * 1 + 1;
		})
	})
});


// select
$(function () {
	$('.select-custom').niceSelect();
});

// tooltip
$(document).ready(function() {
	$('.js-tooltip').tooltipster({
		contentCloning: true,
		animation: 'fade',
		delay: 200,
		trigger: 'hover',
		maxWidth: '250',
		theme: 'tooltipster-shadow tooltip-default',
		contentAsHTML: true,
		interactive: true,
		distance: 10,
		side: 'top',
		trigger: 'custom',
		triggerOpen: {
			mouseenter: true,
			tap: true
		},
		triggerClose: {
			mouseleave: true,
			tap: true
		},
	});
});

// content slider
$(function () {
	var swiper = new Swiper('.js-content-slider', {
		slidesPerView: "auto",
		spaceBetween: 24,
		freeMode: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
});
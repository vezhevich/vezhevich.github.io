// tabs
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
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab1.swiper-button-next',
			prevEl: '.swiper-button-slider-tab1.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab2
$(function () {
	var swiper = new Swiper('.js-slider-tab2', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab2.swiper-button-next',
			prevEl: '.swiper-button-slider-tab2.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab3
$(function () {
	var swiper = new Swiper('.js-slider-tab3', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab3.swiper-button-next',
			prevEl: '.swiper-button-slider-tab3.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab4
$(function () {
	var swiper = new Swiper('.js-slider-tab4', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab4.swiper-button-next',
			prevEl: '.swiper-button-slider-tab4.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab5
$(function () {
	var swiper = new Swiper('.js-slider-tab5', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab5.swiper-button-next',
			prevEl: '.swiper-button-slider-tab5.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab6
$(function () {
	var swiper = new Swiper('.js-slider-tab6', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab6.swiper-button-next',
			prevEl: '.swiper-button-slider-tab6.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab7
$(function () {
	var swiper = new Swiper('.js-slider-tab7', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab7.swiper-button-next',
			prevEl: '.swiper-button-slider-tab7.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab8
$(function () {
	var swiper = new Swiper('.js-slider-tab8', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab8.swiper-button-next',
			prevEl: '.swiper-button-slider-tab8.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab9
$(function () {
	var swiper = new Swiper('.js-slider-tab9', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab9.swiper-button-next',
			prevEl: '.swiper-button-slider-tab9.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab10
$(function () {
	var swiper = new Swiper('.js-slider-tab10', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab10.swiper-button-next',
			prevEl: '.swiper-button-slider-tab10.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab11
$(function () {
	var swiper = new Swiper('.js-slider-tab11', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab11.swiper-button-next',
			prevEl: '.swiper-button-slider-tab11.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab12
$(function () {
	var swiper = new Swiper('.js-slider-tab12', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab12.swiper-button-next',
			prevEl: '.swiper-button-slider-tab12.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab13
$(function () {
	var swiper = new Swiper('.js-slider-tab13', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab13.swiper-button-next',
			prevEl: '.swiper-button-slider-tab13.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab14
$(function () {
	var swiper = new Swiper('.js-slider-tab14', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab14.swiper-button-next',
			prevEl: '.swiper-button-slider-tab14.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab15
$(function () {
	var swiper = new Swiper('.js-slider-tab15', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab15.swiper-button-next',
			prevEl: '.swiper-button-slider-tab15.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab16
$(function () {
	var swiper = new Swiper('.js-slider-tab16', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab16.swiper-button-next',
			prevEl: '.swiper-button-slider-tab16.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab17
$(function () {
	var swiper = new Swiper('.js-slider-tab17', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab17.swiper-button-next',
			prevEl: '.swiper-button-slider-tab17.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab18
$(function () {
	var swiper = new Swiper('.js-slider-tab18', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab18.swiper-button-next',
			prevEl: '.swiper-button-slider-tab18.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab19
$(function () {
	var swiper = new Swiper('.js-slider-tab19', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab19.swiper-button-next',
			prevEl: '.swiper-button-slider-tab19.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab20
$(function () {
	var swiper = new Swiper('.js-slider-tab20', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab20.swiper-button-next',
			prevEl: '.swiper-button-slider-tab20.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab21
$(function () {
	var swiper = new Swiper('.js-slider-tab21', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab21.swiper-button-next',
			prevEl: '.swiper-button-slider-tab21.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab22
$(function () {
	var swiper = new Swiper('.js-slider-tab22', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab22.swiper-button-next',
			prevEl: '.swiper-button-slider-tab22.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab23
$(function () {
	var swiper = new Swiper('.js-slider-tab23', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab23.swiper-button-next',
			prevEl: '.swiper-button-slider-tab23.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab24
$(function () {
	var swiper = new Swiper('.js-slider-tab24', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab24.swiper-button-next',
			prevEl: '.swiper-button-slider-tab24.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// slider-tab25
$(function () {
	var swiper = new Swiper('.js-slider-tab25', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-slider-tab25.swiper-button-next',
			prevEl: '.swiper-button-slider-tab25.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-view-slider
$(function () {
	var swiper = new Swiper('.js-card-view-slider', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view.swiper-button-next',
			prevEl: '.swiper-button-card-view.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
			}
		},
	});
});

// card-view-slider2
$(function () {
	var swiper = new Swiper('.js-card-view-slider2', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-view2.swiper-button-next',
			prevEl: '.swiper-button-card-view2.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
			}
		},
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
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-feedback.swiper-button-next',
			prevEl: '.swiper-button-card-feedback.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-feedback-slider-inner
$(function () {
	var swiper = new Swiper('.js-card-feedback-slider-inner', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-feedback-inner.swiper-button-next',
			prevEl: '.swiper-button-card-feedback-inner.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});


// card-object-inner-slider
$(function () {
	var swiper = new Swiper('.js-card-object-inner-slider', {
		slidesPerView: 1,
		spaceBetween: 16,
		pagination: {
			el: ".swiper-pagination",
		},
	});
});

// card-object-slider
$(function () {
	var swiper = new Swiper('.js-card-object-slider', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider.swiper-button-next',
			prevEl: '.swiper-button-object-slider.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider2
$(function () {
	var swiper = new Swiper('.js-card-object-slider2', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider2.swiper-button-next',
			prevEl: '.swiper-button-object-slider2.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider3
$(function () {
	var swiper = new Swiper('.js-card-object-slider3', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider3.swiper-button-next',
			prevEl: '.swiper-button-object-slider3.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider4
$(function () {
	var swiper = new Swiper('.js-card-object-slider4', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider4.swiper-button-next',
			prevEl: '.swiper-button-object-slider4.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider5
$(function () {
	var swiper = new Swiper('.js-card-object-slider5', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider5.swiper-button-next',
			prevEl: '.swiper-button-object-slider5.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider6
$(function () {
	var swiper = new Swiper('.js-card-object-slider6', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider6.swiper-button-next',
			prevEl: '.swiper-button-object-slider6.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider7
$(function () {
	var swiper = new Swiper('.js-card-object-slider7', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider7.swiper-button-next',
			prevEl: '.swiper-button-object-slider7.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider8
$(function () {
	var swiper = new Swiper('.js-card-object-slider8', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider8.swiper-button-next',
			prevEl: '.swiper-button-object-slider8.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider9
$(function () {
	var swiper = new Swiper('.js-card-object-slider9', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider9.swiper-button-next',
			prevEl: '.swiper-button-object-slider9.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider10
$(function () {
	var swiper = new Swiper('.js-card-object-slider10', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider10.swiper-button-next',
			prevEl: '.swiper-button-object-slider10.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-object-slider11
$(function () {
	var swiper = new Swiper('.js-card-object-slider11', {
		slidesPerView: "auto",
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-object-slider11.swiper-button-next',
			prevEl: '.swiper-button-object-slider11.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
				spaceBetween: 16,
				allowTouchMove: false,
			}
		},
	});
});

// card-feedback__media1
$(function () {
	var swiper = new Swiper('.js-card-feedback__media', {
		allowTouchMove: false,
		slidesPerView: '3',
		spaceBetween: 8,
		breakpoints: {
			768: {
				freeMode: true,
				allowTouchMove: true,
			}
		},
	});
});

// card-article
$(function () {
	var swiper = new Swiper('.js-card-article-slider', {
		slidesPerView: 1,
		spaceBetween: 16,
		navigation: {
			nextEl: '.swiper-button-card-article.swiper-button-next',
			prevEl: '.swiper-button-card-article.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
			}
		},
	});
});


// accordion
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

// dropdown
$(function () {
	if ($(document).find('.js-dropdown').length) {
		const btnMenus = document.querySelectorAll(".js-dropdown-open");
		const menus = document.querySelectorAll(".js-dropdown");

		const toggleMenu = function (menu) {
			menu.classList.toggle("open");
		}

		btnMenus.forEach(function (btnMenu) {
			btnMenu.addEventListener("click", function (e) {
				e.stopPropagation();
				const menu = this.nextElementSibling;
				toggleMenu(menu);
			});
		});

		document.addEventListener("click", function (e) {
			const target = e.target;

			menus.forEach(function (menu) {
				const its_menu = target == menu || menu.contains(target);
				const its_btnMenu = target == menu.previousElementSibling;
				const menu_is_active = menu.classList.contains("open");

				if (!its_menu && !its_btnMenu && menu_is_active) {
					toggleMenu(menu);
				}
			});
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

// datepicker
$(function () {
	if ($('#datepicker').length > 0) {
		$('#datepicker').dateRangePicker({
			autoClose: true,
			language: 'ru',
			separator: ' - ',
			duration: 200,
			showTopbar: false,
			startOfWeek: 'monday',
			format: 'DD.MM',
			container: 'body',
			customOpenAnimation: function(cb)
			{
				$(this).fadeIn(300, cb);
			},
			customCloseAnimation: function(cb)
			{
				$(this).fadeOut(300, cb);
			},
			getValue: function()
			{
				return this.value;
			},
			setValue: function(s)
			{
				this.value = s;
			},
		});	
	}
});

// custom select
$(function () {
	const optionMenus = document.querySelectorAll(".select-menu");

	optionMenus.forEach(optionMenu => {
		const selectBtn = optionMenu.querySelector(".select-btn"),
			options = optionMenu.querySelectorAll(".option"),
			sBtn_text = optionMenu.querySelector(".sBtn-text");

		selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

		options.forEach(option =>{
			option.addEventListener("click", ()=>{
				
				let selectedOption = option.querySelector(".option-text").innerText;
				sBtn_text.innerText = selectedOption;
				optionMenu.classList.remove("active");
			})
		})
	})
});

// взрываем модальное окно
$(function() {
	if ($('.js-modal').length > 0) {
		var startWindowScroll = 0;
		$('.js-modal').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'mfp-fade modal-filters',
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'auto',
			callbacks: {
				beforeOpen: function () {
					startWindowScroll = $(window).scrollTop();
				},
				open: function () {
					if ($('.mfp-content').height() < $(window).height()) {
						$('body').on('touchmove', function (e) {
							e.preventDefault();
						});
					}
				},
				close: function () {
					$(window).scrollTop(startWindowScroll);
					$('body').off('touchmove');
				}
			}
		});
	}
});

// range-slider
$(function() {
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 10000,
		from: 0,
		to: 5000,
		skin: "big",
		hide_min_max: true,
		extra_classes: 'range-slider'
	});
});


// modal gallery
$(function() {
	if ($('.js-gallery').length > 0) {
		$('.gallery').each(function () { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile modal-gallery',
				closeBtnInside: false,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
					tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
				}
			});
		});
	}
});

// modal-review
$(function() {
	if ($('.js-modal-review').length > 0) {
		var startWindowScroll = 0;
		$('.js-modal-review').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'mfp-fade modal-review',
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'auto',
			callbacks: {
				beforeOpen: function () {
					startWindowScroll = $(window).scrollTop();
				},
				open: function () {
					if ($('.mfp-content').height() < $(window).height()) {
						$('body').on('touchmove', function (e) {
							e.preventDefault();
						});
					}
				},
				close: function () {
					$(window).scrollTop(startWindowScroll);
					$('body').off('touchmove');
				}
			}
		});
	}
});

//slider review
$(function () {
	if ($('.js-review-slider').length > 0) {
		var swiper = new Swiper('.js-review-slider', {
			slidesPerView: 1,
			spaceBetween: 16,
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: '.swiper-button-review.swiper-button-next',
				prevEl: '.swiper-button-review.swiper-button-prev',
			},
		});	
	}
});

//show comments in modal
$(function () {
	const btnShowCom = document.querySelectorAll(".js-show-comm");
	const btnHideCom = document.querySelectorAll(".js-hide-comm");
	const com = document.querySelectorAll(".modal-review__comm");
	
	btnShowCom.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			e.stopPropagation();
			com.forEach(function (item) {
				item.classList.add('open')
			})
		})
	});	
	btnHideCom.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			e.stopPropagation();
			com.forEach(function (item) {
				item.classList.remove('open')
			})
		})
	})
})

// модальное окно по центру экрана
$(function() {
	if ($('.js-modal-default').length > 0) {
		var startWindowScroll = 0;
		$('.js-modal-default').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'mfp-fade modal-default',
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'auto',
			callbacks: {
				beforeOpen: function () {
					startWindowScroll = $(window).scrollTop();
				},
				open: function () {
					if ($('.mfp-content').height() < $(window).height()) {
						$('body').on('touchmove', function (e) {
							e.preventDefault();
						});
					}
				},
				close: function () {
					$(window).scrollTop(startWindowScroll);
					$('body').off('touchmove');
				}
			}
		});
	}
});

// feedback modal slider
$(function () {
	var swiper = new Swiper('.js-feedback-modal-slider', {
		slidesPerView: "auto",
		spaceBetween: 8,
		freeMode: true,
	});
});

//media slider
$(function () {
	if ($('.gallery').length > 0) {
		var swiperMedia1 = undefined;
		var swiperMedia2 = undefined;

		function initSwiper() {
			var screenWidth = $(window).width();

			if(screenWidth < 768 && swiperMedia1 == undefined) {
				swiperMedia1 = new Swiper('.js-media-slider-thumb', {
					spaceBetween: 4,
					slidesPerView: 'auto',
					freeMode: true,
					watchSlidesProgress: true,
				});

				swiperMedia2 = new Swiper('.js-media-slider-preview', {
					spaceBetween: 10,
					thumbs: {
						swiper: swiperMedia1,
					},
				});
			} else if (screenWidth > 768 && swiperMedia1 != undefined) {
				swiperMedia1.destroy();
				swiperMedia2.destroy();
				swiperMedia1 = undefined;
				swiperMedia2 = undefined;
				jQuery('.gallery .swiper-wrapper').removeAttr('style');
				jQuery('.gallery .swiper-slide').removeAttr('style');
			}
		}

		initSwiper();

		$(window).on('resize', function(){
			initSwiper();
		});	
	}
});

//скролл навигации табов на мобиле
$(function () {
	if ($('.tabs-wrapper-scroll').length > 0) {
		var swiperHorScroll = undefined;

		function initSwiper() {
			var screenWidth = $(window).width();

			if(screenWidth < 768 && swiperHorScroll == undefined) {
				swiperHorScroll = new Swiper('.js-tabs-wrapper-scroll', {
					slidesPerView: "auto",
					freeMode: true,
				});
			} else if (screenWidth > 768 && swiperHorScroll != undefined) {
				swiperHorScroll.destroy();
				swiperHorScroll = undefined;
				jQuery('.tabs-wrapper-scroll .swiper-wrapper').removeAttr('style');
				jQuery('.tabs-wrapper-scroll .swiper-slide').removeAttr('style');
			}
		}

		initSwiper();

		$(window).on('resize', function(){
			initSwiper();
		});	
	}
});

//скролл карточек на мобиле
$(function () {
	if ($('.card-view-line-wrapper-scroll').length > 0) {
		var swiperViewLineScroll = undefined;

		function initSwiper() {
			var screenWidth = $(window).width();

			if(screenWidth < 768 && swiperViewLineScroll == undefined) {
				swiperViewLineScroll = new Swiper('.js-card-view-line-slider', {
					slidesPerView: "auto",
					spaceBetween: 8,
				});
			} else if (screenWidth > 768 && swiperViewLineScroll != undefined) {
				swiperViewLineScroll.destroy();
				swiperViewLineScroll = undefined;
				jQuery('.card-view-line-wrapper-scroll .swiper-wrapper').removeAttr('style');
				jQuery('.card-view-line-wrapper-scroll .swiper-slide').removeAttr('style');
			}
		}

		initSwiper();

		$(window).on('resize', function(){
			initSwiper();
		});	
	}
});

//скролл tags
$(function () {
	if ($('.tags-wrapper-scroll').length > 0) {
		var swiperTagsScroll = undefined;

		function initSwiper() {
			var screenWidth = $(window).width();

			if(screenWidth < 768 && swiperTagsScroll == undefined) {
				swiperTagsScroll = new Swiper('.js-tags-wrapper-scroll', {
					slidesPerView: "auto",
				});
			} else if (screenWidth > 768 && swiperTagsScroll != undefined) {
				swiperTagsScroll.destroy();
				swiperTagsScroll = undefined;
				jQuery('.tags-wrapper-scroll .swiper-wrapper').removeAttr('style');
				jQuery('.tags-wrapper-scroll .swiper-slide').removeAttr('style');
			}
		}

		initSwiper();

		$(window).on('resize', function(){
			initSwiper();
		});	
	}
});

//скролл nav-line
$(function () {
	if ($('.nav-line').length > 0) {
		var swiperNavLineScroll = undefined;

		function initSwiper() {
			var screenWidth = $(window).width();

			if(screenWidth < 768 && swiperNavLineScroll == undefined) {
				swiperNavLineScroll = new Swiper('.js-nav-line-scroll', {
					slidesPerView: "auto",
					freeMode: 'true'
				});
			} else if (screenWidth > 768 && swiperNavLineScroll != undefined) {
				swiperNavLineScroll.destroy();
				swiperNavLineScroll = undefined;
				jQuery('.nav-line .swiper-wrapper').removeAttr('style');
				jQuery('.nav-line .swiper-slide').removeAttr('style');
			}
		}

		initSwiper();

		$(window).on('resize', function(){
			initSwiper();
		});	
	}
});

//services slider
$(function () {
	if ($('.js-services-slider').length > 0) {
		var swiper = new Swiper('.js-services-slider', {
			slidesPerView: "auto",
			freeMode: true,
			spaceBetween: 10,
			navigation: {
				nextEl: ".b-services-slider__button-next",
				prevEl: ".b-services-slider__button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				760: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1500: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1920: {
					slidesPerView: 4,
					spaceBetween: 10,
				}
			},
		});
	};
});

//partner slider
$(function () {
	if ($('.js-partner-slider').length > 0) {
		var swiper = new Swiper('.js-partner-slider', {
			slidesPerView: "auto",
			freeMode: true,
			spaceBetween: 7,
		});	
	}
});

//slider gallery
$(function() {
	var galleryThumbs = new Swiper(".gallery-thumbs", {
		centeredSlides: true,
		centeredSlidesBounds: true,
		direction: "horizontal",
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		watchOverflow: true,
		breakpoints: {
			480: {
				direction: "vertical",
				slidesPerView: 3,
			}
		}
	});
	var galleryTop = new Swiper(".gallery-top", {
		direction: "horizontal",
		spaceBetween: 10,
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		thumbs: {
			swiper: galleryThumbs
		},
	});
	galleryTop.on('slideChangeTransitionStart', function() {
		galleryThumbs.slideTo(galleryTop.activeIndex);
	});
	galleryThumbs.on('transitionStart', function() {
		galleryTop.slideTo(galleryThumbs.activeIndex);
	});
});


// articles__slider
$(function() {
	if ($('.js-articles__slider').length > 0) {
		var articlesSlider = null;

		function initSwiper() {
			if ($(window).width() < 760) {
				if (!articlesSlider) {
					articlesSlider = new Swiper('.js-articles__slider', {
						slidesPerView: "auto",
						freeMode: true,
						spaceBetween: 10,
					});
				}
			} else {
				if (articlesSlider) {
					articlesSlider.destroy(true, true);
					articlesSlider = null;
				}
			}
		}

		initSwiper();

		$(window).on('resize', function() {
			initSwiper();
		});	
	}
});

// js-toggle-menu
$(function() {
	$('.js-toggle-menu').on('click', function() {
		var currentToggle = $(this);
		var currentNav = currentToggle.next('.b-footer__nav');

		if (currentNav.hasClass('is-active')) {
			currentNav.removeClass('is-active');
			currentToggle.removeClass('active');
			return;
		}
		
		$('.b-footer__nav').removeClass('is-active');
		$('.js-toggle-menu').removeClass('active');

		currentNav.addClass('is-active');
		currentToggle.addClass('active');
	});

	$('.b-footer__nav').removeClass('is-active');
	$('.js-toggle-menu').removeClass('active');
});

//toggle height cookies
const cookieText = document.querySelector('.js-toggle-hight');

if (cookieText) {
	cookieText.addEventListener('click', function() {
		this.classList.toggle('active'); // Добавляем/удаляем класс
	});

	const cookieBtn = document.querySelector('.js-hide-block');
	const cookieBlock = document.querySelector('.b-cookie');

	cookieBtn.addEventListener('click', function() {
		cookieBlock.classList.add('hide');
	});
} else {
	console.warn('Элемент .b-cookie__text не найден!');
}

// js-advantages-slider
$(function () {
	if ($('.js-advantages-slider').length > 0) {
		var swiper = new Swiper('.js-advantages-slider', {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				760: {
					slidesPerView: "auto",
					freeMode: true,
				},
				1500: {
					slidesPerView: 5,
					freeMode: false,
				},
			}
		});	
	}
});

// js-popular-services__slider
$(function() {
	if ($('.js-popular-services__slider').length > 0) {
		var popularSlider = null;

		function initSwiper() {
			if ($(window).width() < 1500) {
				if (!popularSlider) {
					popularSlider = new Swiper('.js-popular-services__slider', {
						slidesPerView: "auto",
						freeMode: true,
						spaceBetween: 10,
						pagination: {
							el: ".swiper-pagination",
						},
					});
				}
			} else {
				if (popularSlider) {
					popularSlider.destroy(true, true);
					popularSlider = null;
				}
			}
		}

		// Инициализация при загрузке
		initSwiper();

		// Обработка изменения размера окна
		$(window).on('resize', function() {
			initSwiper();
		});	
	}
});

// добавляем класс при скроле к header
document.addEventListener('DOMContentLoaded', function() {
	const header = document.querySelector('.b-header');
	const scrollThreshold = 1;
	let lastScroll = 0;
	let ticking = false;

	function updateHeader(scrollPos) {
		header.classList.toggle('b-header_sticky', scrollPos > scrollThreshold);
		ticking = false;
	}

	window.addEventListener('scroll', function() {
		lastScroll = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				updateHeader(lastScroll);
			});
			ticking = true;
		}
	});

	// Инициализация
	updateHeader(window.scrollY);
});

// мобильное меню
$(function() {
	if ($('.js-mobile-menu').length > 0) {
		var startWindowScroll = 0;
		$('.js-mobile-menu').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'mfp-fade b-mobile-menu',
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

// мобильное меню
document.addEventListener('DOMContentLoaded', function() {
	const menuContainer = document.querySelector('.b-mobile-menu__nav');
	const backButtons = document.querySelectorAll('.b-mobile-menu__back');
	const menuLinks = document.querySelectorAll('.has-submenu > a');

	// Функция для обновления состояния overflow
	function updateMenuOverflow(activeMenu) {
		// Находим все родительские меню активного подменю
		let parentMenus = [];
		let parent = activeMenu.parentElement.closest('.b-mobile-menu__nav-sub-menu, .b-mobile-menu__nav-menu');

		while (parent) {
			parentMenus.push(parent);
			parent = parent.parentElement.closest('.b-mobile-menu__nav-sub-menu, .b-mobile-menu__nav-menu');
		}

		// Проходим по всем меню
		document.querySelectorAll('.b-mobile-menu__nav-menu, .b-mobile-menu__nav-sub-menu').forEach(menu => {
			if (menu === activeMenu) {
				menu.style.overflow = 'auto'; // Активное меню - прокрутка
			} else if (parentMenus.includes(menu)) {
				menu.style.overflow = 'hidden'; // Родительские меню - скрыть прокрутку
			} else {
				menu.style.overflow = 'hidden'; // Все остальные - скрыть прокрутку
			}
		});
	}

	// Обработка клика по пунктам меню с подменю
	menuLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const submenu = this.nextElementSibling;

			// Закрываем все открытые подменю на текущем уровне
			const currentOpen = this.parentNode.querySelector('.b-mobile-menu__nav-sub-menu.active');
			if (currentOpen && currentOpen !== submenu) {
				currentOpen.classList.remove('active');
				currentOpen.classList.add('slide-out');
				setTimeout(() => {
					currentOpen.classList.remove('slide-out');
				}, 300);
			}

			// Открываем выбранное подменю
			submenu.classList.add('active');
			updateMenuOverflow(submenu); // Обновляем overflow для всех меню

			// Прокручиваем контейнер меню к началу
			menuContainer.scrollLeft = 0;
		});
	});

	// Обработка кнопок "Назад"
	backButtons.forEach(button => {
		button.addEventListener('click', function() {
			const currentSubmenu = this.parentNode;
			const parentMenu = currentSubmenu.parentElement.closest('.b-mobile-menu__nav-sub-menu, .b-mobile-menu__nav-menu');

			// Анимация закрытия
			currentSubmenu.classList.add('slide-out');
			currentSubmenu.style.overflow = 'hidden'; // Сразу скрываем прокрутку

			setTimeout(() => {
				currentSubmenu.classList.remove('active', 'slide-out');
				if (parentMenu) {
					parentMenu.style.overflow = 'auto'; // Восстанавливаем прокрутку родителя
				}
			}, 300);
		});
	});

	// Инициализация - скрыть прокрутку у всех кроме корневого меню
	document.querySelectorAll('.b-mobile-menu__nav-sub-menu').forEach(menu => {
		menu.style.overflow = 'hidden';
	});
	if (menuContainer.querySelector('.b-mobile-menu__nav-menu')) {
		menuContainer.querySelector('.b-mobile-menu__nav-menu').style.overflow = 'auto';
	}
});
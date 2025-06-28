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
			grid: {
				rows: 2,
				fill: "row",
			},
			breakpoints: {
				760: {
					grid: {
						rows: 1,
						fill: "row",
					},
				}
			}
		});	
	}
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

// datepicker
$(function() {
	$(".js-datepicker").datepicker({
		dateFormat: "dd MM",
		firstDay: 1,
		minDate: 0,
		monthNames: ["января", "февраля", "марта", "апреля", "мая", "июня",
			"июля", "августа", "сентября", "октября", "ноября", "декабря"],
		monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
			"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
		dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
		dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		closeText: "Закрыть",
		currentText: "Сегодня",
		prevText: "Пред",
		nextText: "След",

		beforeShow: function(input, inst) {
			requestAnimationFrame(function() {
				var $picker = inst.dpDiv;
				var inputTop = $(input).offset().top;
				var pickerTop = $picker.offset().top;

				$picker.toggleClass('up', pickerTop < inputTop)
					.toggleClass('down', pickerTop >= inputTop);
			});
		},
		onClose: function() {
			// Удаляем классы через анимационный фрейм для надёжности
			requestAnimationFrame(function() {
				$(".ui-datepicker").removeClass("up down");
			});
		}
	});
});

// tooltip
document.addEventListener('DOMContentLoaded', function() {
	const bookingFields = document.querySelectorAll('.js-booking-field');

	bookingFields.forEach(field => {
		const input = field.querySelector('.js-input');
		const tooltip = field.querySelector('.js-tooltip');
		let tooltipClick = false;

		if (!input || !tooltip) return;

		// Функция для обновления позиции tooltip
		const updateTooltipPosition = () => {
			const inputRect = input.getBoundingClientRect();
			const spaceBelow = window.innerHeight - inputRect.bottom;
			const tooltipHeight = tooltip.offsetHeight || 50;

			tooltip.classList.remove('b-tooltip--top', 'b-tooltip--bottom');

			if (spaceBelow < tooltipHeight + 20) {
				tooltip.classList.add('b-tooltip--top');
			} else {
				tooltip.classList.add('b-tooltip--bottom');
			}
		};

		// Показываем tooltip
		const showTooltip = () => {
			updateTooltipPosition();
			tooltip.classList.add('is-visible');
		};

		// Скрываем tooltip с проверкой
		const hideTooltip = () => {
			if (!tooltipClick) {
				tooltip.classList.remove('is-visible');
			}
		};

		// События для input
		input.addEventListener('focus', showTooltip);
		input.addEventListener('blur', hideTooltip);

		// События для tooltip
		tooltip.addEventListener('mousedown', (e) => {
			tooltipClick = true;
			e.preventDefault(); // Предотвращаем потерю фокуса
		});

		tooltip.addEventListener('mouseup', () => {
			setTimeout(() => {
				tooltipClick = false;
			}, 100);
		});

		// Закрытие при клике вне input и tooltip
		document.addEventListener('click', (e) => {
			if (!field.contains(e.target) && !tooltip.contains(e.target)) {
				tooltip.classList.remove('is-visible');
			}
		});

		// Обновляем позицию при изменении размера окна
		window.addEventListener('resize', () => {
			if (tooltip.classList.contains('is-visible')) {
				updateTooltipPosition();
			}
		});
	});
});

// добавление пассажира
document.addEventListener('DOMContentLoaded', function() {
	const input = document.querySelector('.b-booking__qnt .input');
	const plusBtn = document.querySelector('.qnt-plus');
	const minusBtn = document.querySelector('.qnt-minus');

	// Если нет нужных элементов - выходим без ошибок
	if (!input || !plusBtn || !minusBtn) return;

	// Обработчики для кнопок + и -
	plusBtn.addEventListener('click', function() {
		let value = parseInt(input.value) || 0;
		input.value = value + 1;
	});

	minusBtn.addEventListener('click', function() {
		let value = parseInt(input.value) || 0;
		if (value > 1) {
			input.value = value - 1;
		}
	});

	// Запрет ввода нечисловых значений
	input.addEventListener('input', function() {
		this.value = this.value.replace(/[^0-9]/g, '');
		if (this.value === '' || parseInt(this.value) < 1) {
			this.value = 1;
		}
	});

	// При потере фокуса проверяем значение
	input.addEventListener('blur', function() {
		if (this.value === '' || parseInt(this.value) < 1) {
			this.value = 1;
		}
	});
});

// gallery
$(function() {
	if ($('.b-gallery__thumbs').length > 0) {
		var galleryThumbs, galleryMain;

		function initSwipers() {
			// Уничтожаем старые экземпляры, если они существуют
			if (galleryThumbs) galleryThumbs.destroy(true, true);
			if (galleryMain) galleryMain.destroy(true, true);

			// Определяем направление в зависимости от ширины окна
			var direction = window.innerWidth >= 1500 ? 'vertical' : 'horizontal';

			// Инициализируем thumbs swiper
			galleryThumbs = new Swiper(".b-gallery__thumbs", {
				centeredSlides: true,
				centeredSlidesBounds: true,
				slidesPerView: 3,
				watchOverflow: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				spaceBetween: 10,
				direction: "horizontal",
				breakpoints: {
					0: {
						direction: "horizontal",
						spaceBetween: 0,
						slidesPerView: 3,
					},
					1500: {
						direction: 'vertical',
					}
				}
			});

			// Инициализируем main swiper
			galleryMain = new Swiper(".b-gallery__main", {
				watchOverflow: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				preventInteractionOnTransition: true,
				effect: 'fade',
				mousewheel: true,
				direction: "vertical",
				fadeEffect: {
					crossFade: true
				},
				thumbs: {
					swiper: galleryThumbs
				},
				scrollbar: {
					el: ".swiper-scrollbar",
					draggable: true,
					dragSize: 74,
				},
			});

			galleryMain.on('slideChangeTransitionStart', function() {
				galleryThumbs.slideTo(galleryMain.activeIndex);
			});

			galleryThumbs.on('transitionStart', function(){
				galleryMain.slideTo(galleryThumbs.activeIndex);
			});
		}

		// Инициализируем при загрузке
		initSwipers();

		// Обновляем при ресайзе
		$(window).on('resize', function() {
			initSwipers();
		});
	}
});



const buttonUp = document.querySelector('.button-up');

// Показываем/скрываем кнопку при прокрутке
window.addEventListener('scroll', function() {
	if (window.pageYOffset > 300) {
		buttonUp.classList.add('visible');
	} else {
		buttonUp.classList.remove('visible');
	}
});

// Плавный скролл вверх при клике
buttonUp.addEventListener('click', function() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
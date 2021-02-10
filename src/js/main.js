function slider() {
	var mySwiper = new Swiper('.js-slider', {
		// Optional parameters
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  dynamicBullets: true,
		},

		autoplay: {
			delay: 2000,
		}
	});
}

function navigation() {
	var $navBtn = $('.js-toggle');
	var $nav = $('.js-nav');
	var $navLink = $('.js-link');
	var navBtnOpen = 'nav-toggle-open';
	var navOpen = 'nav-open';

	$navBtn.on('click', function() {
		$(this).toggleClass(navBtnOpen);
		$nav.toggleClass(navOpen);
	});

	$navLink.on('click', function() {
		$navBtn.removeClass(navBtnOpen);
		$nav.removeClass(navOpen);
	});
}

navigation();
slider();
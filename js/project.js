	var swiper = new Swiper('body.project .swiper-container', {
		slidesPerView: 'auto',
	  	centeredSlides: true,
	  	spaceBetween: 32,
	  	navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
      	pagination: {
        	el: '.swiper-pagination',
        	type: 'fraction',
      	},
	});
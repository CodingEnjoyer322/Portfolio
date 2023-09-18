document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.slider-carousel', {
        loop: true,
		slidesPerView: 3,
		speed: 1800,

    })


	document.querySelector('video').playbackRate = 2

})

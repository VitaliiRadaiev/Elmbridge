{
    let carousels = document.querySelectorAll('[data-slider="carousel"]');
    if(carousels.length) {
        carousels.forEach(carousel => {
            let carouselSwiper = new Swiper(carousel, {
                speed: 600,
                navigation: {
                    nextEl: carousel.querySelector('.carousel__slider-btn.next'),
                    prevEl: carousel.querySelector('.carousel__slider-btn.prev'),
                },
                breakpoints: {
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    }
                },
            });
        })
    }
}
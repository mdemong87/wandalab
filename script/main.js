const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    autoplay: {
        enabled: true,
        delay: 10,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 50,
        },
    },

});
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".js-arrow-prev",
        prevEl: ".js-arrow-next",
    },
  });
const coachesSlider = document.querySelector('.coaches__slider');

const initCoachesSwiper = () => {
  if (coachesSlider) {
    // eslint-disable-next-line
    new Swiper('#coachesSwiper', {
      initialSlide: 0,

      loop: true,

      navigation: {
        nextEl: '.swiper-button-next--coaches',
        prevEl: '.swiper-button-prev--coaches',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          initialSlide: 2,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 1,
          initialSlide: 0,
        },
      },
    });
  }
};

export {initCoachesSwiper};

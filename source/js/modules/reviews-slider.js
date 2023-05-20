const reviewsSlider = document.querySelector('.reviews__slider');

const initReviewsSwiper = () => {
  if (reviewsSlider) {
    // eslint-disable-next-line
    new Swiper('#reviewsSwiper', {
      initialSlide: 0,
      autoHeight: true,
      loop: false,

      navigation: {
        nextEl: '.swiper-button-next--reviews',
        prevEl: '.swiper-button-prev--reviews',
      },
    });
  }
};

export {initReviewsSwiper};

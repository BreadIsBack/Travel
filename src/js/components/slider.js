import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

const sliderCounter = document.querySelector('.slider-nav__counter');

const heroSlider = new Swiper('.hero__slider-items', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-nav__btn--next',
    prevEl: '.slider-nav__btn--prev',
  },
  on: {
    slideChange: function (swiper) {
      let activeIndex = swiper.realIndex
      let slides = document.querySelectorAll('.swiper-slide');
      slides.forEach((item, index) => {
        if (index === activeIndex) {
          sliderCounter.innerHTML = index + 1;
        }
      });
    }
  },
});

const reviewsSlider = new Swiper('.reviews__swiper-items', {
  slidesPerView: 1,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
    // type: 'bullets',
  },
});

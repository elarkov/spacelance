import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export function renderSlider() {
  const swiper1 = new Swiper('#slider-1', {
    speed: 500,
    spaceBetween: 25,
    navigation: {
      nextEl: '.slider__arrow--next',
      prevEl: '.slider__arrow--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });
}
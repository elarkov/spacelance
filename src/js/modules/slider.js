import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
export function renderSlider() {
  const swiper1 = new Swiper('.slider', {
    speed: 500,
    spaceBetween: 25,
    observer: true, 
    observeParents: true,
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });
}
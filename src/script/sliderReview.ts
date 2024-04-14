import Swiper from "swiper";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";

const sliderReviews = () => {
  new Swiper("#sliderReviews", {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    navigation: {
      prevEl: ".prevReviews",
      nextEl: ".nextReviews",
    },
    breakpoints: {
      1368: {
        slidesPerView: 5,
        spaceBetween: 0,
        allowTouchMove: false,
        coverflowEffect: {
          rotate: 0,
          stretch: -20,
          depth: 35,
          modifier: 4,
          slideShadows: false,
        },
      },
      0: {
        slidesPerView: 3,
        allowTouchMove: true,
        coverflowEffect: {
          rotate: 0,
          stretch: -15,
          depth: 1,
          modifier: 1,
          slideShadows: false,
        },
      },
    },
  });
};

sliderReviews();

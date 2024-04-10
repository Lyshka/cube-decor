import Swiper from "swiper";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";

const sliderReviews = () => {
  new Swiper("#sliderReviews", {
    modules: [Navigation, EffectCoverflow],
    slidesPerView: 5,
    effect: "coverflow",
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    loop: true,
    navigation: {
      prevEl: ".prevReviews",
      nextEl: ".nextReviews",
    },
    coverflowEffect: {
      rotate: 0,
      stretch: -20,
      depth: 35,
      modifier: 4,
      slideShadows: false,
    },
  });
};

sliderReviews();

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const sliderGallery = () => {
  new Swiper("#sliderGallery", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      prevEl: ".prevGallery",
      nextEl: ".nextGallery",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

sliderGallery();

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const sliderCertificates = () => {
  new Swiper("#sliderCertificates", {
    modules: [Navigation],
    navigation: {
      prevEl: ".prevCertificates",
      nextEl: ".nextCertificates",
    },
    breakpoints: {
      1368: {
        height: 260,
        slidesPerView: 3,
        spaceBetween: 24,
      },
      0: {
        spaceBetween: 8,
        width: 166,
      },
    },
  });
};

sliderCertificates();

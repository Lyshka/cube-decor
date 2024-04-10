import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const sliderCertificates = () => {
  new Swiper("#sliderCertificates", {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    height: 260,
    navigation: {
      prevEl: ".prevCertificates",
      nextEl: ".nextCertificates",
    },
  });
};

sliderCertificates();

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const sliderGallery = () => {
  const sliderGalleryElements =
    document.querySelectorAll<HTMLElement>(".sliderGallery");

  sliderGalleryElements.forEach((sliderGallery) => {
    const idSlider = sliderGallery.id;

    new Swiper(`#slider${idSlider}`, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      navigation: {
        prevEl: `.prev${idSlider}`,
        nextEl: `.next${idSlider}`,
      },
      pagination: {
        el: `.swiper-pagination-${idSlider}`,
        clickable: true,
      },
    });
  });
};
sliderGallery();

const selectGallery = () => {
  const selectGallerysButtonElements =
    document.querySelectorAll<HTMLButtonElement>(".select-gallerys-button");

  selectGallerysButtonElements.forEach((selectGallerysButton) => {
    selectGallerysButton.onclick = () => {
      const selectButtonGallery = selectGallerysButton.dataset[
        "gallery"
      ] as string;
      const activeGallery = document.getElementById(selectButtonGallery);
      const allGallery =
        document.querySelectorAll<HTMLElement>(".sliderGallery");

      selectGallerysButtonElements.forEach((el) => {
        el.classList.remove("active");
      });

      allGallery.forEach((el) => {
        el.classList.remove("active");
      });

      selectGallerysButton.classList.add("active");
      activeGallery?.classList.add("active");
    };
  });
};
selectGallery();

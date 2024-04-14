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
      breakpoints: {
        1368: {
          pagination: {
            el: `.swiper-pagination-${idSlider}`,
            clickable: true,
          },
        },
        0: {
          pagination: {
            el: `.swiper-pagination-${idSlider}-mobile`,
            clickable: true,
          },
        },
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

const selectImg = () => {
  const AllGalleryElements =
    document.querySelectorAll<HTMLElement>(".sliderGallery");

  AllGalleryElements.forEach((GalleryElement) => {
    const allGallerySlidesElements =
      document.querySelectorAll<HTMLElement>(".swiper-slide");

    allGallerySlidesElements.forEach((GallerySlideElement) => {
      const bigImg = GallerySlideElement.querySelector(
        ".bigImg"
      ) as HTMLImageElement;

      const minImgElements =
        GallerySlideElement.querySelectorAll<HTMLImageElement>(".minImg");

      minImgElements.forEach((minImg) => {
        const imgSrc = minImg.src;

        minImg.onclick = () => {
          bigImg.src = imgSrc;
        };
      });
    });
  });
};

selectImg();

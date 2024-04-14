import Swiper from "swiper/bundle";
import { EffectFade } from "swiper/modules";
import toastr from "toastr";

import { typeWindow } from "./typeWindow";
import { templateDimension } from "./templateDimension";

import "swiper/css/bundle";

const quiz = () => {
  let globalDimension = [] as typeWindow[];
  let prevConfigureSlide = 1;

  const slider = () => {
    const sliderQuiz = new Swiper("#sliderQuiz", {
      modules: [EffectFade],
      slidesPerView: 1,
      autoplay: false,
      effect: "fade",
      fadeEffect: { crossFade: true },
      allowTouchMove: false,
    });

    return { sliderQuiz };
  };
  const { sliderQuiz } = slider();

  const selectHouse = () => {
    const selectHouseElements =
      document.querySelectorAll<HTMLElement>(".selectHouse");
    const nextButton = document.getElementById(
      "nextHouse"
    ) as HTMLButtonElement;
    const configureCardALL =
      document.querySelectorAll<HTMLElement>(".configureCard");

    selectHouseElements.forEach((selectHouseElement) => {
      const radioInputElement = selectHouseElement.querySelector(
        ".inputSelectHouse"
      ) as HTMLInputElement;

      radioInputElement.onchange = (event: Event) => {
        const selectedHouseValue = (event.target as HTMLInputElement).value;

        selectHouseElements.forEach((el) => {
          el.classList.remove("active");
        });
        selectHouseElement.classList.add("active");

        configureCardALL.forEach((configureCard) => {
          const configureInputValue = configureCard.querySelector(
            ".configureInputValue"
          ) as HTMLInputElement;

          configureCard.classList.remove("active");
          configureInputValue.value = "";
          globalDimension = [];
        });

        nextButton.addEventListener("click", () => {
          if (selectedHouseValue === "house4") {
            sliderQuiz.slideTo(2);
            prevConfigureSlide = 2;
            return;
          }

          if (selectedHouseValue === "house5") {
            sliderQuiz.slideTo(3);
            prevConfigureSlide = 3;
            return;
          }

          sliderQuiz.slideTo(1);
          prevConfigureSlide = 1;
        });
      };
    });

    nextButton.addEventListener("click", () => {
      sliderQuiz.slideTo(1);
    });
  };

  selectHouse();

  const selectDimension = () => {
    const containerInputRangeElements = document.querySelectorAll<HTMLElement>(
      ".containerInputRange"
    );
    const prevDimension = document.getElementById(
      "prevDimension"
    ) as HTMLButtonElement;
    const nextDimension = document.getElementById(
      "nextDimension"
    ) as HTMLButtonElement;

    containerInputRangeElements.forEach((containerInputRangeElement) => {
      const inputRangeElement = containerInputRangeElement.querySelector(
        ".inputRange"
      ) as HTMLInputElement;
      const inputName = inputRangeElement.dataset["name"];

      const rangeValueElement = containerInputRangeElement.querySelector(
        ".rangeValue"
      ) as HTMLElement;
      const inputNotValueElement = document.getElementById(
        `${inputName}NotValue`
      ) as HTMLInputElement;
      const inputNotValueContainerElement = document.getElementById(
        `${inputName}NotValueContainer`
      ) as HTMLElement;

      const handleVisibleInputNotValue = () => {
        inputNotValueElement.addEventListener("change", (event) => {
          const isChecked = (event.target as HTMLInputElement).checked;

          if (!isChecked) {
            inputNotValueContainerElement.classList.remove("active");
          } else {
            inputNotValueContainerElement.classList.add("active");
          }
        });
      };

      inputRangeElement.oninput = (event: Event) => {
        const valueInput = (event.target as HTMLInputElement).value;

        rangeValueElement.textContent = valueInput;
        inputNotValueElement.checked = false;
        inputNotValueContainerElement.classList.remove("active");

        handleVisibleInputNotValue();
      };

      handleVisibleInputNotValue();
    });

    prevDimension.onclick = () => {
      sliderQuiz.slideTo(prevConfigureSlide);
    };
  };

  const configure = () => {
    const configureCardsElements =
      document.querySelectorAll<HTMLElement>(".configureCard");
    const prevButtonsElements =
      document.querySelectorAll<HTMLButtonElement>(".prevConfigure");

    const nextButtonsElements =
      document.querySelectorAll<HTMLButtonElement>(".nextConfigure");

    configureCardsElements.forEach((configureCardElement) => {
      const configureDecrementButtonElement =
        configureCardElement.querySelector(
          ".configureDecremnt"
        ) as HTMLButtonElement;
      const configureIncrementButtonElement =
        configureCardElement.querySelector(
          ".configureIncrement"
        ) as HTMLButtonElement;
      const configureInputElement = configureCardElement.querySelector(
        ".configureInputValue"
      ) as HTMLInputElement;

      const objectInfoWindow = {
        ...configureCardElement.dataset,
      } as unknown as typeWindow;

      const handleAddWindowDimension = () => {
        const selectDimensionElement = document.getElementById(
          "selectDimension"
        ) as HTMLElement;

        console.log(globalDimension);

        const dimensionElements = globalDimension
          .map((dimensionObjectInfo) => {
            return templateDimension(dimensionObjectInfo);
          })
          .join("");

        selectDimensionElement.innerHTML = dimensionElements;
      };

      configureDecrementButtonElement.onclick = () => {
        const valueInput = configureInputElement.value;

        configureInputElement.value = `${+valueInput - 1}`;

        if (valueInput === "1" || valueInput === "") {
          configureInputElement.value = "";
          configureDecrementButtonElement.disabled = true;
          configureCardElement.classList.remove("active");

          globalDimension = globalDimension.filter(
            ({ name }) => name !== objectInfoWindow.name
          );

          handleAddWindowDimension();
          selectDimension();
        }
      };

      configureIncrementButtonElement.onclick = () => {
        const valueInput = configureInputElement.value;

        configureDecrementButtonElement.disabled = false;
        configureCardElement.classList.add("active");
        configureInputElement.value = `${+valueInput + 1}`;

        const nameInArray = () =>
          globalDimension.find(({ name }) => name === objectInfoWindow.name);

        if (!nameInArray()) {
          globalDimension.push(objectInfoWindow);
        }

        handleAddWindowDimension();
        selectDimension();
      };
    });

    prevButtonsElements.forEach((prevButtonsElement) => {
      prevButtonsElement.onclick = () => {
        sliderQuiz.slideTo(0);
      };
    });

    nextButtonsElements.forEach((nextButtonsElement) => {
      nextButtonsElement.onclick = () => {
        const configureCardAll = document.querySelectorAll<HTMLElement>(
          ".configureCard.active"
        );

        if (configureCardAll.length) {
          sliderQuiz.slideTo(4);
        } else {
          toastr.warning("Выберите одну из конфигураций!");
        }
      };
    });
  };
  configure();
};

quiz();

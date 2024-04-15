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
      breakpoints: {
        1368: {
          autoHeight: false,
        },
        0: {
          autoHeight: true,
        },
      },
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
    const cardVariantALL =
      document.querySelectorAll<HTMLElement>(".cardVariant");

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

        cardVariantALL.forEach((cardVariant) => {
          const inputValueCardVariantElement = cardVariant.querySelector(
            ".inputValueCardVariant"
          ) as HTMLInputElement;

          inputValueCardVariantElement.checked = false;
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

    nextDimension.onclick = () => {
      if (prevConfigureSlide === 3) {
        sliderQuiz.slideTo(6);
        return;
      }
      sliderQuiz.slideTo(5);
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

  const variant = () => {
    const prevVariantElements =
      document.querySelectorAll<HTMLButtonElement>(".prevVariant");

    const nextVariantElements =
      document.querySelectorAll<HTMLButtonElement>(".nextVariant");

    prevVariantElements.forEach((prevVariantElement) => {
      prevVariantElement.onclick = () => {
        sliderQuiz.slideTo(4);
      };
    });

    nextVariantElements.forEach((prevVariantElement) => {
      prevVariantElement.onclick = () => {
        const glazingType = (
          document.querySelector(
            'input.inputValueCardVariant[name="glazingType"]:checked'
          ) as HTMLInputElement
        )?.value;

        const finishing = (
          document.querySelector(
            'input.inputValueCardVariant[name="finishing"]:checked'
          ) as HTMLInputElement
        )?.value;

        const lamination = (
          document.querySelector(
            'input.inputValueCardVariant[name="lamination"]:checked'
          ) as HTMLInputElement
        )?.value;

        const material = (
          document.querySelector(
            'input.inputValueCardVariant[name="material"]:checked'
          ) as HTMLInputElement
        )?.value;

        if (prevConfigureSlide === 3) {
          if (!glazingType || !material || !lamination) {
            toastr.warning("Вы ответили не на все вопросы!");
          } else {
            sliderQuiz.slideTo(7);
          }
        } else {
          if (!glazingType || !finishing || !lamination) {
            toastr.warning("Вы ответили не на все вопросы!");
          } else {
            sliderQuiz.slideTo(7);
          }
        }
      };
    });
  };
  variant();

  const selectGift = () => {
    const selectGiftElements =
      document.querySelectorAll<HTMLElement>(".selectGift");

    const prevGiftButton = document.getElementById(
      "prevGift"
    ) as HTMLButtonElement;
    const nextGiftButton = document.getElementById(
      "nextGift"
    ) as HTMLButtonElement;

    selectGiftElements.forEach((selectGiftElement) => {
      const inputSelectGiftElement = selectGiftElement.querySelector(
        ".inputSelectGift"
      ) as HTMLInputElement;

      inputSelectGiftElement.onchange = () => {
        selectGiftElements.forEach((el) => {
          el.classList.remove("active");
        });

        selectGiftElement.classList.add("active");
      };
    });

    prevGiftButton.onclick = () => {
      if (prevConfigureSlide === 3) {
        sliderQuiz.slideTo(6);
      } else {
        sliderQuiz.slideTo(5);
      }
    };

    nextGiftButton.onclick = () => {
      sliderQuiz.slideTo(8);
    };
  };
  selectGift();

  const submit = () => {
    const QuizForm = document.getElementById("QuizForm") as HTMLFormElement;
    const slideSubmitElement = document.getElementById(
      "slideSubmit"
    ) as HTMLElement;

    const telInput = slideSubmitElement.querySelector(
      ".phone-input"
    ) as HTMLInputElement;
    const timeCallInput = slideSubmitElement.querySelector(
      ".timeCall"
    ) as HTMLInputElement;

    const containerConf = slideSubmitElement.querySelector(
      ".containerConf"
    ) as HTMLElement;

    const confValueInput = containerConf.querySelector(
      ".confValue"
    ) as HTMLInputElement;
    const iconColor = containerConf.querySelector(".iconColor") as HTMLElement;

    confValueInput.onchange = (event: Event) => {
      const isChecked = (event.target as HTMLInputElement).checked;

      if (!isChecked) {
        iconColor.classList.remove("active");
      } else {
        iconColor.classList.add("active");
      }
    };

    QuizForm.onsubmit = (event) => {
      event.preventDefault();
      const isConf = (
        (event.target as HTMLFormElement).elements.namedItem(
          "conf"
        ) as HTMLInputElement
      ).checked;
      const telLength = telInput.value.length;
      const timeCallInputLength = timeCallInput.value.length;

      if (telLength < 12) {
        toastr.error("Номер телефона не правильный!");
        return;
      }

      if (timeCallInputLength < 2) {
        toastr.error("Не правильное время для связи");
        return;
      }

      if (!isConf) {
        toastr.error(
          "Вы должны согласиться с Политикой обработки персональных данных!"
        );
        return;
      }

      const telValue = telInput.value;
      const timeCallValue = timeCallInput.value;
      const selectSocialValue = (
        slideSubmitElement.querySelector(
          'input[name="social"]:checked'
        ) as HTMLInputElement
      ).value;

      sliderQuiz.slideTo(9);

      console.log({telValue, timeCallValue, selectSocialValue})
    };
  };

  submit();
};

quiz();

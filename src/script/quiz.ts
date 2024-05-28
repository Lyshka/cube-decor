import Swiper from "swiper/bundle";
import { EffectFade } from "swiper/modules";
import toastr from "toastr";
import axios from "axios";

import { TEMPLTE, typeWindow } from "./typeWindow";
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
      const selectedHouseValue = (
        document.querySelector(
          ".inputSelectHouse[type='radio']:checked"
        ) as HTMLInputElement
      ).value;

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

  const selectHouseCondition = () => {
    const selectHouseSelected = (
      document.querySelector('input[name="house"]:checked') as HTMLInputElement
    )?.value;

    if (selectHouseSelected === "house1") {
      return "Кирпичный дом";
    }

    if (selectHouseSelected === "house2") {
      return "Панельный дом";
    }

    if (selectHouseSelected === "house3") {
      return "Частный дом";
    }

    if (selectHouseSelected === "house4") {
      return "Лоджия/Балкон";
    }

    if (selectHouseSelected === "house5") {
      return "Входная группа";
    }

    return "Кирпичный дом";
  };

  const selectedConfigure = () => {
    const copyGlobalDimension = globalDimension.map((item) => {
      const inputCount = document.querySelector<HTMLInputElement>(
        `input[name="${item.name}"]`
      )?.value;
      const inputNotValue = document.querySelector<HTMLInputElement>(
        `input[name="${item.name}NotValue"]`
      )?.checked;

      let size = "Я не знаю";

      if (!inputNotValue && item.template === TEMPLTE.template1) {
        const inputWidthWindowValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}WidthWindow"]`
        )?.value;
        const inputHeightWindowValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}HeightWindow"]`
        )?.value;

        size = `Ширина окна: ${inputWidthWindowValue} Высота окна: ${inputHeightWindowValue}`;
      }

      if (!inputNotValue && item.template === TEMPLTE.template2) {
        const inputWidthWindowValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}WidthWindow"]`
        )?.value;
        const inputHeightWindowValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}HeightWindow"]`
        )?.value;

        const inputWidthDoorValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}WidthDoor"]`
        )?.value;
        const inputHeightDoorValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}HeightDoor"]`
        )?.value;

        size = `Ширина окна: ${inputWidthWindowValue} Высота окна: ${inputHeightWindowValue} Ширина двери: ${inputWidthDoorValue} Высота двери: ${inputHeightDoorValue}`;
      }

      if (!inputNotValue && item.template === TEMPLTE.template3) {
        const inputWidthFrontValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}WidthFront"]`
        )?.value;
        const inputWidthBackValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}widthBack"]`
        )?.value;
        const inputHeightWindowValue = document.querySelector<HTMLInputElement>(
          `input[name="${item.name}HeightWindow"]`
        )?.value;

        size = `Ширина фронательная: ${inputWidthFrontValue} Ширина боковая: ${inputWidthBackValue} Высота окна: ${inputHeightWindowValue}`;
      }

      item.count = inputCount;
      item.size = size;

      return item;
    });

    return copyGlobalDimension;
  };

  const selectedVariant = () => {
    const glazingTypeValue = (
      document.querySelector(
        'input[name="glazingType"]:checked'
      ) as HTMLInputElement
    )?.value;

    const finishingValue = (
      document.querySelector(
        'input[name="finishing"]:checked'
      ) as HTMLInputElement
    )?.value;

    const materialValue = (
      document.querySelector(
        'input[name="material"]:checked'
      ) as HTMLInputElement
    )?.value;

    const laminationValue = (
      document.querySelector(
        'input[name="lamination"]:checked'
      ) as HTMLInputElement
    )?.value;

    return `<b>Тип остекления:</b> ${glazingTypeValue}\n${
      materialValue
        ? `<b>Материал:</b>${materialValue}\n`
        : `<b>Отделка:</b>${finishingValue}\n`
    }<b>Ламинация:</b>${laminationValue}`;
  };

  const selectedGift = () => {
    const selectGiftSelected = (
      document.querySelector('input[name="gift"]:checked') as HTMLInputElement
    )?.value;

    if (!selectGiftSelected) return "Набор по уходу за окнами";

    return selectGiftSelected;
  };

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

    QuizForm.onsubmit = async (event) => {
      event.preventDefault();
      const isConf = (
        (event.target as HTMLFormElement).elements.namedItem(
          "conf"
        ) as HTMLInputElement
      ).checked;
      const telLength = telInput.value.length;
      // const timeCallInputLength = timeCallInput.value.length;

      if (telLength < 12) {
        toastr.error("Номер телефона не правильный!");
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

      const selectedHouse = selectHouseCondition();
      const variants = selectedVariant();
      const gift = selectedGift();
      const configure = selectedConfigure();

      let configureString = "";
      configure.map((item) => {
        let title = item.title;
        let count = item.count;
        let size = item.size;

        configureString += "<b>Название:</b> " + title + "\n";
        configureString += "<b>Количество:</b> " + count + "\n";
        configureString += "<b>Размеры:</b> " + size + "\n";
        configureString += "*******************" + "\n";
      });

      // Replace <br/> tags with an empty string
      configureString = configureString.replace(/<br\/>/g, "");

      const {
        data: { ok: success },
      } = await axios.post(
        "https://api.telegram.org/bot6743627714:AAGDu7djoYQN7ZsIFqjUFRULxJRbYfC67r8/sendMessage",
        {
          chat_id: -4231881637,
          text: `
<b>Телефон: </b>${telValue}
<b>Тип дома: </b>${selectedHouse}
<b>Конфигурация: </b>
${configureString}
${variants}
<b>Подарок: </b>${gift}
<b>Врем для связи: </b>${timeCallValue}
<b>Соц. сеть: </b>${selectSocialValue}
`,
          parse_mode: "html",
        }
      );

      if (success) {
        // sliderQuiz.slideTo(9);
        window.location.href = "/straniczablagodarnosti";
      } else {
        toastr.error("Произошла ошибка при отправке!");
      }
    };
  };

  submit();
};

quiz();

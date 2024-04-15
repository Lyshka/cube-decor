import toastr from "toastr";

const lamination = () => {
  let back = document.querySelector(".selectBack.active span")?.textContent;
  let knob = document.querySelector(".selectKnob.active span")?.textContent;

  const selectBackHandle = () => {
    const selectBackElements =
      document.querySelectorAll<HTMLElement>(".selectBack");

    const changeBackImgElement = document.getElementById(
      "changeBackImg"
    ) as HTMLDivElement;

    selectBackElements.forEach((selectBack) => {
      const color = selectBack.dataset["color"] as string;
      const title = selectBack.dataset["title"] as string;

      selectBack.onclick = () => {
        selectBackElements.forEach((el) => {
          el.classList.remove("active");
        });

        selectBack.classList.add("active");

        changeBackImgElement.style.background = "none";

        if (color.startsWith("#")) {
          changeBackImgElement.style.backgroundColor = color;
        } else {
          changeBackImgElement.style.backgroundImage = `url(${window.location.origin}/${color})`;
        }

        back = title;
      };
    });
  };
  selectBackHandle();

  const selectKnob = () => {
    const selectKnobElemets =
      document.querySelectorAll<HTMLElement>(".selectKnob");

    const changeKnobsElements =
      document.querySelectorAll<HTMLImageElement>(".changeKnob");

    selectKnobElemets.forEach((selectKnob) => {
      const color = selectKnob.dataset["color"] as string;
      const title = selectKnob.dataset["title"] as string;

      selectKnob.onclick = () => {
        selectKnobElemets.forEach((el) => {
          el.classList.remove("active");
        });

        selectKnob.classList.add("active");

        changeKnobsElements.forEach((el) => {
          el.src = `${window.location.origin}/${color}`;
        });

        knob = title;
      };
    });
  };
  selectKnob();

  const handleSubmit = () => {
    const formLaminationElement = document.getElementById(
      "formLamination"
    ) as HTMLFormElement;
    const modalThank = document.getElementById("modalThank");

    formLaminationElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const telValue = (
        (event.target as HTMLFormElement).elements.namedItem(
          "tel"
        ) as HTMLInputElement
      ).value;

      if (telValue.length < 12) {
        toastr.error("Номер телефона не правильный!");
        return;
      }

      modalThank?.classList.add("active");
      (event.target as HTMLFormElement).reset();
      
      console.log({ back, knob, telValue });
    });
  };
  handleSubmit();
};

lamination();

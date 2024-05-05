import toastr from "toastr";
import axios from "axios";

const lamination = () => {
  let back = (
    document.querySelector(".selectBack.active span") as HTMLSpanElement
  ).textContent as string;
  let knob = (
    document.querySelector(".selectKnob.active span") as HTMLSpanElement
  ).textContent as string;

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

    formLaminationElement.addEventListener("submit", async (event) => {
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

      const {
        data: { ok: success },
      } = await axios.post(
        "https://api.telegram.org/bot6743627714:AAGDu7djoYQN7ZsIFqjUFRULxJRbYfC67r8/sendMessage",
        {
          chat_id: -4231881637,
          text: `
<b>Телефон: </b>${telValue}
<b>Цвет окна: </b>${back}
<b>Цвет ручек: </b>${knob}
`,
          parse_mode: "html",
        }
      );

      if (success) {
        modalThank?.classList.add("active");
        (event.target as HTMLFormElement).reset();
      } else {
        toastr.error("Произошла ошибка при отправке!");
      }
    });
  };
  handleSubmit();
};

lamination();

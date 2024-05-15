import axios from "axios";
import toastr from "toastr";

const defaultFormSubmit = () => {
  const formDefaultElements =
    document.querySelectorAll<HTMLFormElement>(".defaultForm");
  // const modalThankElement = document.getElementById(
  //   "modalThank"
  // ) as HTMLElement;

  formDefaultElements.forEach((formDefaultElement) => {
    formDefaultElement.addEventListener("submit", async (event: Event) => {
      event.preventDefault();

      const telValue = (
        (event.target as HTMLFormElement).elements.namedItem(
          "tel"
        ) as HTMLInputElement
      ).value;

      const targetValue = (
        (event.target as HTMLFormElement).elements.namedItem(
          "target"
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
<b>Цель заявки: </b> ${targetValue}
<b>Телефон: </b>${telValue}
`,
          parse_mode: "html",
        }
      );

      if (success) {
        // modalThankElement.classList.add("active");
        window.location.href = "/straniczablagodarnosti";
        (event.target as HTMLFormElement).reset();
      } else {
        toastr.error("Произошла ошибка при отправке!");
      }
    });
  });
};

defaultFormSubmit();

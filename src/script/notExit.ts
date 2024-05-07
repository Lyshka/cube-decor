import toastr from "toastr";
import axios from "axios";

const notExit = () => {
  const modalNotExitElement = document.getElementById("modalNotExit");
  const closeModal = modalNotExitElement?.querySelector(
    ".closeModal"
  ) as HTMLButtonElement;
  const body = document.querySelector("body") as HTMLBodyElement;
  const notExitForm = document.getElementById("notExitForm") as HTMLFormElement;
  // const modalThank = document.getElementById("modalThank") as HTMLElement;

  let counter = 0;

  body.addEventListener("mouseleave", (event) => {
    if (event.target === body && counter === 0) {
      modalNotExitElement?.classList.add("active");

      counter++;
    }
  });

  closeModal.onclick = () => {
    modalNotExitElement?.classList.remove("active");
  };

  notExitForm.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const telValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "tel"
      ) as HTMLInputElement
    ).value;
    const calledValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "called"
      ) as HTMLInputElement
    ).value;
    const conf = (
      (event.target as HTMLFormElement).elements.namedItem(
        "conf"
      ) as HTMLInputElement
    ).checked;

    if (telValue.length < 12) {
      toastr.error("Номер телефона не правильный!");
      return;
    }

    if (!conf) {
      toastr.error(
        "Вы должны согласиться с Политикой обработки персональных данных!"
      );
      return;
    }

    const {
      data: { ok: success },
    } = await axios.post(
      "https://api.telegram.org/bot6743627714:AAGDu7djoYQN7ZsIFqjUFRULxJRbYfC67r8/sendMessage",
      {
        chat_id: -4231881637,
        text: `
<b>Отправить полезное пособие</b>
<b>Телефон: </b>${telValue}
<b>Соц. сеть: </b>${calledValue}
`,
        parse_mode: "html",
      }
    );

    if (success) {
      modalNotExitElement?.classList.remove("active");
      // modalThank?.classList.add("active");
      window.location.href = "/straniczablagodarnosti";
      (event.target as HTMLFormElement).reset();
    } else {
      toastr.error("Произошла ошибка при отправке!");
    }
  });
};

notExit();

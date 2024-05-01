import toastr from "toastr";
import axios from "axios"

const notExit = () => {
  const modalNotExitElement = document.getElementById("modalNotExit");
  const closeModal = modalNotExitElement?.querySelector(
    ".closeModal"
  ) as HTMLButtonElement;
  const body = document.querySelector("body") as HTMLBodyElement;
  const notExitForm = document.getElementById("notExitForm") as HTMLFormElement;
  const modalThank = document.getElementById("modalThank") as HTMLElement;

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

    const formData = new FormData();
    formData.append("action", "form_main");
    formData.append("formName", "notExitForm");
    formData.append("tel", telValue);
    formData.append("called", calledValue);

    const {
      data: { success, message },
    } = await axios.post("/wp-admin/admin-ajax.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (success) {
      modalNotExitElement?.classList.remove("active");
      modalThank?.classList.add("active");
      (event.target as HTMLFormElement).reset();
    } else {
      toastr.error(message);
    }
  });
};

notExit();

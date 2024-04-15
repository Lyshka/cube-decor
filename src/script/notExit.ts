import toastr from "toastr";

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

  notExitForm.addEventListener("submit", (event: Event) => {
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

    modalNotExitElement?.classList.remove("active");
    modalThank?.classList.add("active");
    (event.target as HTMLFormElement).reset();

    console.log({ telValue, calledValue });
  });
};

notExit();

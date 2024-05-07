import toastr from "toastr";
import axios from "axios";

const orderForm = () => {
  const orderButtonElements =
    document.querySelectorAll<HTMLButtonElement>(".orderButton");
  const modalOrder = document.getElementById("modalOrder") as HTMLElement;
  const titleElement = modalOrder.querySelector(
    ".titleOrderForm"
  ) as HTMLElement;
  const orderForm = document.getElementById("orderForm") as HTMLFormElement;
  // const modalThank = document.getElementById("modalThank") as HTMLElement;

  orderButtonElements.forEach((orderButton) => {
    const title = orderButton.dataset["title"] as string;

    orderButton.onclick = () => {
      modalOrder.classList.add("active");

      titleElement.textContent = title;
    };
  });

  const closeModal = modalOrder.querySelector(
    ".closeModal"
  ) as HTMLButtonElement;

  closeModal.onclick = () => {
    modalOrder.classList.remove("active");
  };

  orderForm.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const telValue = (
      (event.target as HTMLFormElement).elements.namedItem(
        "tel"
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
        text: `<b>Телефон: </b>${telValue}`,
        parse_mode: "html",
      }
    );

    if (success) {
      modalOrder.classList.remove("active");
      // modalThank.classList.add("active");
      window.location.href = "/straniczablagodarnosti";
      (event.target as HTMLFormElement).reset();
    } else {
      toastr.error("Произошла ошибка при отправке!");
    }
  });
};

orderForm();

import toastr from "toastr";

const defaultFormSubmit = () => {
  const formDefaultElements =
    document.querySelectorAll<HTMLFormElement>(".defaultForm");
  const modalThankElement = document.getElementById(
    "modalThank"
  ) as HTMLElement;

  formDefaultElements.forEach((formDefaultElement) => {
    formDefaultElement.addEventListener("submit", (event: Event) => {
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

      modalThankElement.classList.add("active");
      (event.target as HTMLFormElement).reset();

      console.log({ telValue });
    });
  });
};

defaultFormSubmit();

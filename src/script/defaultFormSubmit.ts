import axios from "axios";
import toastr from "toastr";

const defaultFormSubmit = () => {
  const formDefaultElements =
    document.querySelectorAll<HTMLFormElement>(".defaultForm");
  const modalThankElement = document.getElementById(
    "modalThank"
  ) as HTMLElement;

  formDefaultElements.forEach((formDefaultElement) => {
    formDefaultElement.addEventListener("submit", async (event: Event) => {
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

      const formData = new FormData();
      formData.append("action", "form_main");
      formData.append("formName", "defaultForm");
      formData.append("tel", telValue);

      const {
        data: { success, message },
      } = await axios.post("/wp-admin/admin-ajax.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (success) {
        modalThankElement.classList.add("active");
        (event.target as HTMLFormElement).reset();
      } else {
        toastr.error(message);
      }
    });
  });
};

defaultFormSubmit();

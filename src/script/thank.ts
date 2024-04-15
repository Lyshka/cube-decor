const thankHandle = () => {
  const modalThankElement = document.getElementById(
    "modalThank"
  ) as HTMLElement;
  const closeModalElements =
    modalThankElement.querySelectorAll<HTMLButtonElement>(".closeModal");

  closeModalElements.forEach((closeModalButton) => {
    closeModalButton.onclick = () => {
      modalThankElement.classList.remove("active");
    };
  });
};
thankHandle();

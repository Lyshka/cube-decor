const notExit = () => {
  const modalNotExitElement = document.getElementById("modalNotExit");
  const closeModal = modalNotExitElement?.querySelector(
    ".closeModal"
  ) as HTMLButtonElement;
  const body = document.querySelector("body") as HTMLBodyElement;
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
};

notExit();

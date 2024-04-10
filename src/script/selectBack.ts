const selectBackHandle = () => {
  const selectBackElements =
    document.querySelectorAll<HTMLElement>(".selectBack");

  const changeBackImgElement = document.getElementById(
    "changeBackImg"
  ) as HTMLDivElement;

  selectBackElements.forEach((selectBack) => {
    const color = selectBack.dataset["color"] as string;

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
    };
  });
};

selectBackHandle();

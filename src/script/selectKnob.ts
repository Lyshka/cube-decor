const selectKnob = () => {
  const selectKnobElemets =
    document.querySelectorAll<HTMLElement>(".selectKnob");

  const changeKnobsElements =
    document.querySelectorAll<HTMLImageElement>(".changeKnob");

  selectKnobElemets.forEach((selectKnob) => {
    const color = selectKnob.dataset["color"] as string;

    selectKnob.onclick = () => {
      selectKnobElemets.forEach((el) => {
        el.classList.remove("active");
      });

      selectKnob.classList.add("active");

      changeKnobsElements.forEach((el) => {
        el.src = `${window.location.origin}/${color}`;
      });
    };
  });
};

selectKnob();

function buttonClick(buttonId, textStyle) {
  document.getElementById(buttonId).addEventListener("click", function () {
    const textAreaField = document.getElementById("textarea-field");
    textAreaField.classList.toggle(textStyle);
    this.classList.toggle("active");
  });
}

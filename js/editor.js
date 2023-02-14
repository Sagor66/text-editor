// Bold, Italic, Underline
buttonClick("btn-bold", "font-bold");
buttonClick("btn-italic", "italic");
buttonClick("btn-underline", "underline");

// Text-left-align, Text-center-align, Text-right-align, Text-justify
buttonClick("btn-left", "text-left");
buttonClick("btn-center", "text-center");
buttonClick("btn-right", "text-right");
buttonClick("btn-justify", "text-justify");

// Font Sizing
document
  .getElementById("btn-font-size")
  .addEventListener("keypress", function () {
    const fontSize = parseInt(document.getElementById("btn-font-size").value);
    const textAreaField = document.getElementById("textarea-field");
    textAreaField.classList.add(`text-[${fontSize}px]`);
  });

buttonClick("btn-case", "uppercase");

document.getElementById("btn-color").addEventListener("click", function () {
  const textColor = document.getElementById("btn-color").value;
  const textAreaField = document.getElementById("textarea-field");
  textAreaField.classList.add(`text-[${textColor}]`);
});

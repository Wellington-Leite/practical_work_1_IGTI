//Só será executado apos toda página estiver carregada
window.addEventListener("load", start);

function start() {
  console.log("Página totalmente carregada");
  getColorRGB();
}

function getColorRGB() {
  var red_slider = document.getElementById("red_slider");
  var green_slider = document.getElementById("green_slider");
  var blue_slider = document.getElementById("blue_slider");

  red_slider.addEventListener("change", startSetColor);
  green_slider.addEventListener("change", startSetColor);
  blue_slider.addEventListener("change", startSetColor);

  function startSetColor() {
    setColorRGB(red_slider.value, green_slider.value, blue_slider.value);
  }
}

function setColorRGB(r, g, b) {
  var displayR = document.getElementById("displayR");
  var displayG = document.getElementById("displayG");
  var displayB = document.getElementById("displayB");
  var divColor = document.querySelector("#colorRange");

  divColor.style.backgroundColor = `rgb(${r},${g},${b})`;

  displayR.value = r;
  displayG.value = g;
  displayB.value = b;

  console.log(`rgb(${r},${g},${b})`);
}

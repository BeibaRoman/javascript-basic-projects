const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const refs = {
  btn: document.getElementById("btn"),
  color: document.querySelector(".hero__text"),
};

refs.btn.addEventListener("click", onChangeBgColor);

function onChangeBgColor() {
  let hexColor = "#";

  for (let i = 0; i < 6; i += 1) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  refs.color.textContent = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

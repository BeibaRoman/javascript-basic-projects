const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const refs = {
  btn: document.getElementById("btn"),
  color: document.querySelector(".hero__text"),
};

refs.btn.addEventListener("click", onChangeBgColor);

function onChangeBgColor() {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  refs.color.textContent = colors[randomNumber];
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

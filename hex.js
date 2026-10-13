const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexColor = "#";

  for (let index = 0; index < 6; index += 1) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomIndex];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

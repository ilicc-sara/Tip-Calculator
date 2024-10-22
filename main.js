import "./style.css";

const header = document.querySelector("h1");

console.log(header);

header.addEventListener("click", function () {
  header.style.color = "red";
});

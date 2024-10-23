"use strict";
import "./style.css";

const header = document.querySelector("h1");

const button = document.querySelector("button");
console.log(button);

const inputBill = document.querySelector(".bill");
const inputPercent = document.querySelector(".percentage");

button.addEventListener("click", function () {
  // header.style.color = "red";

  console.log(inputBill.value);
  console.log(inputPercent.value);

  const total =
    inputBill.value * (inputPercent.value / 100) + Number(inputBill.value);

  console.log(total);

  document.querySelector(".total").textContent = total;
});

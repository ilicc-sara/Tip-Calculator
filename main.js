"use strict";
import "./style.css";

const header = document.querySelector("h1");

const button = document.querySelector("button");
console.log(button);

const inputBill = document.querySelector(".bill");
const inputPercent = document.querySelector(".percentage");

const form = document.querySelector(".container");

let bill;
let tipPercent;

inputBill.addEventListener("input", function (e) {
  bill = e.target.value;
  console.log(bill);
});

inputPercent.addEventListener("input", function (e) {
  tipPercent = e.target.value;
  console.log(tipPercent);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // header.style.color = "red";

  console.log(inputBill.value);
  console.log(inputPercent.value);

  const total = bill * (tipPercent / 100) + Number(bill);

  // console.log(total);

  document.querySelector(".total").textContent = total.toFixed(2);
});

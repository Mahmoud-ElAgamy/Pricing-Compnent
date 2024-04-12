// DOM Elements
const bills = document.querySelectorAll(".billing span");
const toggleELement = document.querySelector("input[type=checkbox]");
const prices = document.querySelectorAll(".price span");

toggleELement.addEventListener("click", () => {
  bills.forEach((bill) => bill.classList.toggle("default"));
  prices.forEach((price) => price.classList.toggle("d-none"));
});

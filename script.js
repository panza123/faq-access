"use strict";

const firstDown = document.querySelector("#first-down");
const first = document.querySelector("#first");
const secondDown = document.querySelector("#second-down");
const second = document.querySelector("#second");
const thirdDown = document.querySelector("#third-down");
const third = document.querySelector("#third");
const forthDown = document.querySelector("#forth-down");
const forth = document.querySelector("#forth");
const fifthDown = document.querySelector("#fifth-down");
const fifth = document.querySelector("#fifth");

//?add event listenings

first.addEventListener("click", (e) => {
  firstDown.classList.toggle("active");
  first.classList.toggle("active");
});

second.addEventListener("click", () => {
  secondDown.classList.toggle("active");
  second.classList.toggle("active");
});

third.addEventListener("click", () => {
  thirdDown.classList.toggle("actived");
  third.classList.toggle("actived");
});
forth.addEventListener("click", () => {
  forthDown.classList.toggle("actived");
  forth.classList.toggle("actived");
});
fifth.addEventListener("click", () => {
  fifthDown.classList.toggle("actived");
  fifth.classList.toggle("actived");
});

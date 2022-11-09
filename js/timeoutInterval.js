"use strict";
console.log("callback.js");

const btn1El = document.getElementById("btn1");
const timeEl = document.getElementById("time");

btn1El.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Paspaudei");
  }, 3000);
});

function sayHi() {
  console.log("Hello Timeout");
}

//vykdo nurodyta funkcija po nurodyto laiko milisekundemis
setTimeout(sayHi, 3000);

// vykdo nurodyta funkcija kas kazkiek ms
const int1 = setInterval(tick, 1000);

function tick() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString("lt-LT", { timeStyle: "medium" });
}

//clearInterval(int1);
//sustabdo intervala
setTimeout(() => clearInterval(int1), 3000);

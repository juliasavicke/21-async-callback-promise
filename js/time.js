"use strict";
console.log("time.js");

const timeEl = document.getElementById("time");
const int1 = setInterval(tick, 1000);
tick();
function tick() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString("lt-LT", { timeStyle: "medium" });
}

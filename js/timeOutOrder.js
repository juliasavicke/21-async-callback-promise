"use strict";
console.log("timeOutOrder.js");

console.log("one");

function sayHi() {
  console.log("two");
}
// asinchronine operacija niekada nevyks kartu, vyks tik tada, kai bus nuskaitytas visas kodas.
setTimeout(sayHi, 0);
//sayHi();

console.log("three");

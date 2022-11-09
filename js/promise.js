"use strict";
console.log("promise.js");

//promise anatomy

function pr1() {
  return new Promise((resolve, reject) => {
    // kazkokia logika
    let noError = true;
    if (noError) {
      resolve("OK");
    } else {
      reject("BAD BAD THINGS HAPPENED");
    }
  });
}

// const rez = pr1();
// console.log("rez ===", rez); //PROMISE

//resolve("OK"); ==> .then(('OK') => {})
//then gali buti keli
//catch yra vienas paciam gale
//reject("BAD "); ==> .catch(('BAD ') => {})

// pr1()
//   .then((ats) => console.log("ats ===", ats))
//   .catch((err) => console.log("err ===", err));

pr1()
  .then((ats) => {
    console.log("ats ===", ats);
    return ats.toLowerCase();
  })
  .then((antrasThen) => console.log("antrasThen ===", antrasThen))
  .catch((err) => console.log("err ===", err));

"use strict";
console.log("callback.js");

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Post 1");
      // cia as noriu kviesti post2
      resolve(10);
    }, 3000);
  });
}
function getPost2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Post 2");
      resolve(15);
    }, 2000);
  });
}
function getPost3() {
  return new Promise((resolve, reject) => {
    //throw new Error("klaida getPost3 su throw");
    setTimeout(() => {
      console.log("Post 3");
      resolve(20);
    }, 1800);
  });
}

//callback way
//getPost1(getPost2);
// getPost1();
// getPost2();
// getPost3();

// function makeNum() {
//   return 5;
// }

// function double(num) {
//   return num * 2;
// }

// const n1 = double(makeNum);

// promise way:
// getPost1()
//   .then(() => getPost2())
//   .then(() => getPost3())
//   .catch((err) => {
//     console.warn("klaida kazkur get post", err);
//   });

//Promise.all([pr1, pr2 ...]) - budas kazka daryti kai gris visi promise

Promise.all([getPost1(), getPost2(), getPost3(), Promise.resolve(50)])
  .then((values) => {
    console.log("values ===", values);
    const avg = values.reduce((total, sk) => total + sk, 0) / values.length;
    console.log("avg ===", avg);
  })
  .catch(console.warn());

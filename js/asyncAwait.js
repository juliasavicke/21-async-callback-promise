"use strict";
console.log("asyncAwait.js");

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Post 1");
      resolve(10);
    }, 3000);
  });
}
function getPost2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Post 2");
      reject();
      resolve(15);
    }, 2000);
  });
}
function getPost3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Post 3");
      resolve(20);
    }, 1800);
  });
}

// async ir await - galim naudoti funkcijose ir turim butinai naudoti su try catch bloku

async function app() {
  try {
    // await - palaukti kol ivyks promise.resolve ir tik tada vykdyti tolimesne uzduoti
    const p1Rez = await getPost1();
    const p2Rez = await getPost2();
    const p3Rez = await getPost3();
    console.log("p1Rez ===", p1Rez);
    console.log("p2Rez ===", p2Rez);
    console.log("p3Rez ===", p3Rez);
    const avg = (p1Rez + p2Rez + p3Rez) / 3;
    console.log("avg ===", avg);
  } catch (error) {
    console.warn(error, "kazkas negerai");
  }
}
app();

// try {
//   // testinis blokas
//   throw "boom";
//   console.log("po klaidos");
// } catch (error) {
//   // klaidu gaudymo blokas
//   console.log(error, "pagavau klaida");
// }

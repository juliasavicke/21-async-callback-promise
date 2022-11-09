"use strict";
console.log("uzd.js");

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://dummyjson.com/posts";
const divEl = document.getElementById("cardsDiv");
const productsListEl = document.getElementById("products");
const genCardsBtnEl = document.getElementById("btn2");
const genProductsBtnEl = document.getElementById("btn3");
const clearBtnEl = document.getElementById("btn4");

genCardsBtnEl.addEventListener("click", () => {
  fetch(url1)
    .then((response) => response.json())
    .then((dataInJsFormat) => {
      const data = dataInJsFormat.filter((obj) => obj["id"] <= 10);
      console.log("data ===", data);
      createCards(data);
    })
    .catch((err) => console.warn("klaida gaunant duomenis", err));

  fetch(url2)
    .then((response) => response.json())
    .then((dataInJsFormat) => {
      const data = dataInJsFormat["posts"].filter((obj) => obj["id"] <= 10);
      console.log("data ===", data);
      createCards(data);
    })
    .catch((err) => console.warn("klaida gaunant duomenis", err));
});

genProductsBtnEl.addEventListener("click", () => {
  const url3 = "https://dummyjson.com/products";
  fetchData(url3);
});

clearBtnEl.addEventListener("click", () => {
  divEl.innerHTML = "";
  productsListEl.innerHTML = "";
});

function createCards(data) {
  data.forEach((pObj) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    const h2El = document.createElement("h2");
    h2El.textContent = `${pObj["title"]}`;
    const pEl = document.createElement("p");
    pEl.textContent = `${pObj["body"]}`;
    cardEl.append(h2El, pEl);
    divEl.append(cardEl);
  });
}

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((dataInJsFormat) => {
      console.log("dataInJsFormat ===", dataInJsFormat);
      const data = dataInJsFormat["products"].filter((obj) => obj["id"] <= 10);
      console.log("data ===", data);
      createList(data);
    })
    .catch((err) => console.warn("klaida gaunant duomenis", err));
}

function createList(arr) {
  arr.forEach((pObj) => {
    const listEl = document.createElement("li");
    listEl.textContent = `${pObj["title"]}`;
    productsListEl.append(listEl);
  });
}

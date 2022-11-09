"use strict";
console.log("fetch.js");

// norim parsisiusti duomenis is interneto ir su jais sugeneruoti kazka
// fetch(url)
// .then((response) => response)
// let title = "NOT SET";

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//   .then((response) => {
//     console.log("response.json() ===", response);
//     return response.json();
//   })
//   .then((data) => {
//     // mes turim duomenis kuriu prasem is url, po tiek laiko kiek truko parsisiusti
//     console.log("cdata ===", data);
//     title = data.title;
//     document.title = title;
//   })
//   .catch(console.warn);

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json()) // .json() ==> JSON.parse()
  .then((dataInJsFormat) => {
    //gavau duomenis
    console.log("dataInJsFormat ===", dataInJsFormat);
    const data = dataInJsFormat.map((obj) => {
      return { name: obj["name"], email: obj["email"] };
    });
    console.log("data ===", data);
  })
  .catch((err) => console.warn("klaida gaunant duomenis", err));

// is gautu duomenu atvaizduoti sarasa su vardais ir telefono numeriais

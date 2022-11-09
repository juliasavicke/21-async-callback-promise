"use strict";
console.log("posts.js");

const posts = [
  { title: "Post One", body: "This is post One body" },

  { title: "Post Two", body: "This is post Two body" },
];

const postsListEl = document.getElementById("posts");

// gauti postus ir imituojam kad trunka 2 sec juos gauti

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sugeneruoti ri patalpinti posts masyvo elementus
      posts.forEach((pObj) => {
        const liEl = document.createElement("li");
        liEl.textContent = `${pObj.title} - ${pObj.body}`;
        postsListEl.append(liEl);
      });
      resolve();
    }, 1000);
  });
}

// create post funkcija, kuri ideda nauja posta i post masyva
function createPost(newPostObj) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPostObj);
      resolve();
      //callBackFn();
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post Three body" });

// getPosts();

//1. iskviesti tik po to, kai sukurem posta su create post
//2. iskviesti su callback funkcija

//createPost({ title: "Post Three", body: "This is post Three body" }, getPosts);

// promise way:
createPost({ title: "Post Three", body: "This is post Three body" })
  .then(() => getPosts())
  .catch((err) => {
    console.warn("klaida kazkur get post", err);
  });

// app.js

let subs = 50000000;
let watching = 0;
let likes = 0;

setInterval(() => {

  watching++;

  subs += Math.floor(Math.random() * 10) + 1;

  document.getElementById("subs").innerHTML = subs;
  document.getElementById("watching").textContent = watching;

}, 2000);

document.addEventListener("dblclick", () => {

  likes++;

  document.getElementById("likes").textContent = likes;

});

let lastTap = 0;

document.addEventListener("touchend", () => {

  const now = Date.now();

  if (now - lastTap < 300) {
    likes++;
    document.getElementById("likes").textContent = likes;
  }

  lastTap = now;

});

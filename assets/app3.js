// constants
const svg1 = document.querySelector("#heart ");
const svg2 = document.querySelector("#mail ");
const svg2Path = document.querySelector("#svg2Path ");
const check = document.querySelector("#check ");
const load = document.querySelector("#load ");
const tryin = document.querySelector("#try ");

let mailSong = new Audio("./assets/audio/mixkit-arrow-whoosh-1491.wav");
let loadSound = new Audio("./assets/audio/start-13691.mp3");

// 1SVG
svg1.addEventListener("mouseover", () => {
  svg1.classList.add("svg1hover");
  svg1.classList.remove("svg1NOThover");
});
svg1.addEventListener("mouseleave", () => {
  svg1.classList.remove("svg1hover");
  svg1.classList.add("svg1NOThover");
});
// 2SVG
let openedMail =
  "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z";
let closedMail =
  "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75";

svg2Path.addEventListener("mouseover", openMailWithSound);
function openMailWithSound() {
  playaudioMail();
  setTimeout(openMail, 320);
}
function playaudioMail() {
  mailSong.play();
}
function openMail() {
  svg2.classList.add("bgfixer");
  svg2Path.removeAttribute("d");
  svg2Path.setAttribute("d", openedMail);
  svg2.classList.add("translate-y-[-19px]");
}
svg2Path.addEventListener("mouseleave", () => {
  svg2.classList.remove("bgfixer");
  svg2Path.removeAttribute("d");
  svg2Path.setAttribute("d", closedMail);
  svg2.classList.remove("translate-y-[-19px]");
});

// 3SVG
tryin.addEventListener("mouseover", () => {
  load.classList.add("svg31");
  check.classList.add("svg32");
  setTimeout(playaudioCheck, 4000);
  function playaudioCheck() {
    loadSound.play();
  }
});
load.addEventListener("mouseleave", () => {
  load.classList.remove("svg31");
  check.classList.remove("svg32");
});

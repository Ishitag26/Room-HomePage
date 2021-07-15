let x = 0;
const arr = ["a", "b", "c"];
const left = document.querySelector(".left-btn");
const right = document.querySelector(".right-btn");
const buttons = document.querySelector(".buttons");
const images = document.querySelector(".image-container");
const texts = document.querySelector(".intro-text");
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav-links-container");

//Event Listeners
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  navbar.classList.toggle("show");
});
buttons.addEventListener("click", rotate);

//Handlers
function rotate(e) {
  if (e.target === right) {
    resetImgAndTxt();
    x += 1;
    if (x >= arr.length) {
      x = 0;
      updateImgAndTxt();
    }
    updateImgAndTxt();
  } else if (e.target === left) {
    resetImgAndTxt();
    x -= 1;
    if (x < 0) {
      x = arr.length - 1;
      updateImgAndTxt();
    }
    updateImgAndTxt();
  }
}

function resetImgAndTxt() {
  for (let i = 0; i < arr.length; i++) {
    images.children[i].style.display = "none";
    texts.children[i].style.display = "none";
  }
}

function updateImgAndTxt() {
  document.getElementById(`image-${arr[x]}`).style.display = "block";
  document.getElementById(`text-${arr[x]}`).style.display = "block";
}
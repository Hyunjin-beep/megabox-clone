"use strict";

//movie-service-slideAds
const prev = document.querySelector(".moveToLeft");
const next = document.querySelector(".moveToRight");
const ads = document.querySelector(".movie-service-slideAds-wrapper").children;
const caption = document.querySelector(".caption");
const totalAds = ads.length;
let index = 0;

const captionBar = document.querySelector(".caption-slide").children;
const totalCaptionBar = captionBar.length;
let captionBarIndex = 0;

const play = document.querySelector(".playAdsSlide");
let playStatus = false;

let imgTest;

caption.innerText = `1/ 9`;

prev.addEventListener("click", () => {
  nextImage("prev");
  chnageIcon();
});

next.addEventListener("click", () => {
  nextImage("next");
  chnageIcon();
});

function chnageIcon() {
  if (playStatus === true) {
    clearInterval(imgTest);
    play.innerHTML = '<i class="fas fa-caret-right"></i>';
    playStatus = false;
    console.log(playStatus);
  }
}

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalAds) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalAds - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < ads.length; i++) {
    // present img
    ads[i].classList.remove("main");
    ads[i].classList.add("others");

    // upcoming img
    ads[index].classList.add("main");
    ads[index].classList.remove("others");

    captionBar[i].classList.remove("caption-main");
    captionBar[i].classList.add("caption-others");

    captionBar[index].classList.add("caption-main");
    captionBar[index].classList.remove("caption-others");

    caption.innerText = `${index + 1}/ 9`;
  }
}

play.addEventListener("click", () => {
  playImgAutomatically();
});

function playImgAutomatically() {
  if (playStatus === false) {
    play.innerHTML = '<i class="fas fa-pause"></i>';
    playStatus = true;

    imgTest = setInterval(function () {
      nextImage("next");
    }, 6000);
  } else {
    play.innerHTML = '<i class="fas fa-caret-right"></i>';
    playStatus = false;
    console.log("stop");
    clearInterval(imgTest);
  }
}

// function startImgTest() {
//   console.log("start");
//   myCallBackTwo("next");
// }

// function stopImgTest() {
//   console.log("stop");
//   clearInterval(imgTest);
// }

// function myCallT(t) {
//   console.log(t);
// }

// let setTest;

// function startTest() {
//   setTest = setInterval(myCallBack, 1000);
// }

// function stopTest() {
//   clearInterval(setTest);
// }

// function myCallBack() {
//   console.log("div");
// }

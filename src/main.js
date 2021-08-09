"use strict";

//movie-service-slideAds
const prev = document.querySelector(".moveToLeft");
const next = document.querySelector(".moveToRight");
const ads = document.querySelector(".movie-service-slideAds-wrapper").children;
const caption = document.querySelector(".caption");
const totalAds = ads.length;
let index = 0;
console.log(totalAds);

caption.innerText = `1/ 9`;

prev.addEventListener("click", () => {
  nextImage("prev");
});

next.addEventListener("click", () => {
  nextImage("next");
});

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
    ads[i].classList.remove("main");
    ads[i].classList.add("others");
    caption.innerText = `${i + 1}/ 9`;
  }
  ads[index].classList.add("main");
  ads[index].classList.remove("others");
  caption.innerText = `${index + 1}/ 9`;
}

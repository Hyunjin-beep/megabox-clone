# TITLE: Where is Wally
### URL: https://hyunjin-beep.github.io/--where-is-wally/
# Languages: HTML, CSS, JavaScript


> ## TABLE OF CONTENTS
### 1. About the project

### 2. Why do I start this project?

### 3. Details of project

### 4. Reference


------
## 1. About the project
This project is a clone-coding of Megabox website, which is a Korean movie website such as Cineplex.


## 2. Why do I start this project?
The reason is why I did this project is I would like to increase my poor HTML and CSS skills.
While focusing on JavaScript or shcool works, I could not review these two languages well.
Via this project, I could learn and see the structure of web sites.


## 3. Details of project
This website can divide into three chunks: 
  - movie-menu 
  - movie-contents
  - movie-footer
  
  ---------------------------------------
  
  * movie-menu
  top-header-wrapper and bottom-nav-wrapper: These two menus shows users diverse their services and others.
  Based on logo, I divided two menus into each two parts - left and right
  
  ```
  <header class="movie-menu">
      <div class="top-header-wrapper">
        <nav class="left-list">
        </nav>

        <a href=""><div class="logo"></div></a>

        <nav class="right-list">
        </nav>
      </div>

      <div class="bottom-nav-wrapper">
        <div class="type-nave left-nav-main">
        </div>

        <div class="type-nave left-nav-main right">
        </div>
      </div>
  </header>
  ```
  
  ```
  <div class="type-nave left-nav-main">
          <div class="type type-icon total-menu">
            <div class="type-header">
              <a href="#"><i class="fas fa-bars"></i></a>
            </div>
          </div>

          <div class="type type-icon total-search">
            <div class="type-header">
              <a href="#"><i class="fas fa-search"></i></a>
            </div>
          </div>

          <div class="type movies">
            <div class="type-header type-header-main movies-content-header">
              <a href="#">영화</a>
            </div>
            <div class="type-content movies-content">
              <ul class="type-content-items movies-content-items">
                <li class="type-content-item type-content-iem-right movies-content-item">
                  <a href="#">빠른예매</a>
                </li>
                <li class="type-content-item type-content-iem-right movies-content-item">
                  <a href="#">N 스ㅣ크린</a>
                </li>
                <li class="type-content-item type-content-iem-right movies-content-item">
                  <a href="#">큐레이션</a>
                </li>
                <li class="type-content-item type-content-iem-right movies-content-item">
                  <a href="#">무비포스트</a>
                </li>
              </ul>
            </div>
          </div>
  </div>
  ```
  ```
  .type-nave {
      *overflow: hidden;*
   }

  .type-content {
    display: none;
    *position: absolute;*
    transform: translateY(20px);
    width: 100%;
    left: 10%;
    z-index: 1;

    background-image: linear-gradient(
      to right,
      rgb(18, 12, 14),
      rgb(31, 35, 48),
      rgb(18, 12, 14)
    );
  }

  .type:hover > .type-content {
    display: block;
  }
  ```
  (There are more divs but just for explain, I will use some of them.)
  In this css code, I want to emphasize those two parts.
  with 'overflow:hidden' to the outermost wrapper, I set the basic height of type-nav in order to fit to bottom-nav-wrapper.
  with 'position:absolute' to the dropdown menu-content, when hovering the header above contents, the dropdown-content will not effect the header and will be placed right below the head.
  
  ---------------------------------------
  
  * movie-contents
  ```
  <div class="movie-service-slideAds">
   <div class="movie-service-slideAds-wrapper">
    <div class="movie-service-slideAd-item main">
       <a href="#">
         <img src="img/service/1/originalTicket.jpg"
           alt="originalTicket"
           class="imgLeft"/>
       </a>
       <a href="#">
         <img src="img/service/1/originalTicketReal.jpg"
           alt="originalTicketReal"
           class="imgRight"/>
       </a>
    </div>

    <div class="movie-service-slideAd-item others">
      <a href="#">
        <img src="img/service/2/secondLeft.jpg"
            alt="originalTicket"
            class="imgLeft"/>
      </a>
      <a href="#">
        <img src="img/service/2/secondRight.jpg"
            alt="originalTicketReal"
            class="imgRight"/>
      </a>
    </div>
    
    <div class="movie-service-slideAd-item others">
    ...
    </div>
 </div>
  ```
  ```
 .movie-service-slideAd-item .main {
    display: block;
  }

.others {
  position: absolute;
  display: none;
}

  ```
  ```
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

  ```
  For advertisement image slideshow, I set two classes name to ad-images: main and others
  When users click next or previous button, the function nextImage will take direction as parameters.
  As an example: next image button clicked
  index(upcoming ads) will increase and the image corresponding to the number of index has main class name & is deleted others class name.
  
  Also, there is a play button: playing imageshow automatically
  
  ```
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
  ```
  I used setInterval for calling the function nextImage every 6 seconds when the button is clicked.


## 4. References
STUDY NOTE: https://indecisive-durian-7f7.notion.site/Megabox-clone-90461d2535d040d9970f01bbbd438fd2

setInterval: 
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
https://stackoverflow.com/questions/8779845/javascript-setinterval-not-working

imageSlide show:
https://dev.to/code_mystery/image-slider-using-html-css-and-javascript-5dfn

dropdown menu:
https://www.w3schools.com/howto/howto_css_mega_menu.asp



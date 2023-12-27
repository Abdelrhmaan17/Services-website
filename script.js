let go = document.querySelector(".go-up");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    go.style.display = "block";
  } else {
    go.style.display = "none";
  }
};

go.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// console.log(document.getElementsByClassName(".landing").length);

// let slideIndex = 0;
// showSlides();
// function changeLanding() {
//   let slides = document.getElementsByClassName(".landing");
//   let i;
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(changeLanding, 2000); // Change image every 2 seconds
// }

let cover = document.getElementsByClassName(".landing");
cover.style.setProperty("background-image: url(../Imgs/landing.jpg)");
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

//play video manuals
const playvideo = document.querySelectorAll("#videoOpenBtn");
const closevideo = document.querySelectorAll("#videoCloseBtn");

for (let i = 0; i < playvideo.length; i++) {
  const element = playvideo[i];
  element.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.style.display = "none";
    e.target.parentElement.querySelector("#videoCloseBtn").style.display =
      "inline-block";
    e.target.parentElement.querySelector("video").style.display = "flex";

    e.target.parentElement.querySelector(".project-image").style.display =
      "none";
  });
}

for (let i = 0; i < closevideo.length; i++) {
  const element = closevideo[i];
  element.addEventListener("click", (e) => {
    e.target.style.display = "none";
    e.target.parentElement.querySelector("#videoOpenBtn").style.display =
      "inline-block";
    e.target.parentElement.querySelector("video").style.display = "none";
    e.target.parentElement.querySelector("video").pause();
    e.target.parentElement.querySelector(".project-image").style.display =
      "inline";
  });
}

//

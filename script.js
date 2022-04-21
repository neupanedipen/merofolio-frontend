const headerDom = document.querySelector(".nav");

// const changeNavBarHeight = () => {
//   headerDom.style.height = "1rem";
//   //   console.log(headerDom);
// };

// document.addEventListener("scroll", changeNavBarHeight);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerDom.style.height = "5rem";
    headerDom.classList.add("nav-background");
  } else {
    headerDom.style.height = "8rem";
    headerDom.classList.remove("nav-background");
  }
}

import React from "react";

import loadable from "@loadable/component";

const Header = loadable(() => import("components/Header"));
const Filters = loadable(() => import("components/Filters"));
const Footer = loadable(() => import("components/Footer"));

const App = () => {
  return (
    <>
      <Header />
      <Filters />
      <Footer />
    </>
  );
};

export default App;

// const filterButtonClick = () => {
//   let filterButton = document.querySelector(`a.main-button.dialog`);
//   if (!filterButton) {
//     return;
//   }
//   filterButton.addEventListener(`click`, (event) => {
//     let overlay = document.querySelector(`.overlay`);
//     overlay.style.visibility = "visible";
//     overlay.style.opacity = 1;
//   });

//   let closeButton = document.querySelector(`a.close`);

//   closeButton.addEventListener(`click`, (event) => {
//     let overlay = document.querySelector(`.overlay`);
//     overlay.style.visibility = "hidden";
//     overlay.style.opacity = 0;
//   });
// };

// filterButtonClick();

// let navToggle = document.querySelector(`#toggle-menu`);
// let menu = document.querySelector(`.menu`);
// let closeIcon = document.querySelector(`.close-icon`);
// let menuIcon = document.querySelector(`.menu-icon`);

// navToggle.addEventListener(`click`, (event) => {
//   let menu = document.getElementById(`menu`);

//   if (!menu.style.display || menu.style.display === `none`) {
//     menu.style.display = `block`;
//     closeIcon.style.display = `block`;
//     menuIcon.style.display = `none`;
//   } else {
//     menu.style.display = `none`;
//     closeIcon.style.display = `none`;
//     menuIcon.style.display = `block`;
//   }
// });

// const showSlides = (n) => {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (slides.length === 0) return;

//   let dots = document.getElementsByClassName("img-bg");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// };

// let slideIndex = 1;
// showSlides(slideIndex);

// const plusSlides = (n) => {
//   showSlides((slideIndex += n));
// };

// const currentSlide = (n) => {
//   showSlides((slideIndex = n));
// };

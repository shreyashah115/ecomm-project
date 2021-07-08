import React from "react";

import Header from "components/Header";
import Filters from "components/Filters";
import Results from "components/Results";
import Footer from "components/Footer";

const App = () => {
  // const allFilters = {
  //   type: [],
  //   color: [],
  //   ratings: 0,
  // };

  // const filterProducts = (products) => {
  //   let filteredArray = products;

  //   if (allFilters.type.length > 0) {
  //     filteredArray = products.filter(function (product) {
  //       return allFilters.type.join().includes(product.type);
  //     });
  //   }

  //   if (allFilters.color.length > 0) {
  //     filteredArray = filteredArray.filter(function (product) {
  //       return allFilters.color.join().includes(product.color);
  //     });
  //   }

  //   if (allFilters.ratings > 0) {
  //     filteredArray = filteredArray.filter(function (product) {
  //       return product.ratings >= allFilters.ratings;
  //     });
  //   }

  //   getProducts(filteredArray);
  // };

  // const filterOptions = () => {
  //   let filters = document.querySelector(`.filter-options-large`);
  //   if (!filters) {
  //     return;
  //   }
  //   filters.addEventListener(`input`, function (event) {
  //     event.preventDefault();
  //     let filterName = event.target.name;
  //     let filterValue = event.target.value;
  //     let checked = event.target.checked;

  //     if (filterName === `type`) {
  //       if (checked) {
  //         allFilters.type.push(filterValue);
  //       } else {
  //         allFilters.type.pop(filterValue);
  //       }
  //     } else if (filterName === `color`) {
  //       if (checked) {
  //         allFilters.color.push(filterValue);
  //       } else {
  //         allFilters.color.pop(filterValue);
  //       }
  //     } else if (filterName === `rating`) {
  //       if (!event.target.disabled) {
  //         allFilters.ratings = Number(filterValue);
  //       }
  //     }

  //     filterProducts(products);
  //   });
  // };

  // filterOptions();

  // const fullStar = `<span className="material-icons-round star-rate"> star </span>`;
  // const starBorder = `<span class="material-icons-round star-rate"> star_border </span>`;
  // const halfStar = `<span class="material-icons-round star-rate"> star_half </span>`;

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

  // const sortProducts = () => {
  //   let sort = document.querySelector(`#sort`);
  //   if (!sort) {
  //     return;
  //   }
  //   sort.addEventListener("change", (event) => {
  //     let selectedSortOption = event.target.value;
  //     if (selectedSortOption == `high`) {
  //       products.sort(
  //         (firstItem, secondItem) => secondItem.amount - firstItem.amount
  //       );
  //     } else if (selectedSortOption == `low`) {
  //       products.sort(
  //         (firstItem, secondItem) => firstItem.amount - secondItem.amount
  //       );
  //     } else if (selectedSortOption == `ratings`) {
  //       products.sort(
  //         (firstItem, secondItem) => secondItem.ratings - firstItem.ratings
  //       );
  //     } else {
  //       getProducts(products);
  //     }
  //     filterProducts(products);
  //   });
  // };

  // getProducts(products);
  // sortProducts();

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

  return (
    <>
      <Header />
      <Filters />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import Article from "./Article";
import Product from "components/Product";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Pagination as PaginationANTD } from "antd";
import "antd/dist/antd.css";

const Main = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("img/bed-large", false, /\.(png|jpg|svg|webp)$/)
  );

  const mobileImages = importAll(
    require.context("img/bed-mobile", false, /\.(png|jpg|svg|webp)$/)
  );

  const products = [
    {
      name: `MALM`,
      description: `High bed frame/2 storage boxes, Queen`,
      amount: 356,
      ratings: 4.5,
      type: `storage`,
      color: `black`,
      total_ratings: `26`,
      images: [
        images["black.webp"],
        mobileImages["black.webp"],
        images["black-2.webp"],
        mobileImages["black-2.webp"],
      ],
      alt: `Black large bed with storage`,
    },
    {
      name: `HEMNES`,
      description: `Bed frame, Queen`,
      amount: 578,
      ratings: 5,
      type: `storage`,
      color: `white`,
      total_ratings: `81`,
      images: [
        images["white.webp"],
        mobileImages["white.webp"],
        images["white-2.webp"],
        mobileImages["white-2.webp"],
      ],
      alt: `White bed without storage`,
    },
    {
      name: `SOMBRE`,
      description: `Upholstered bed frame, Queen`,
      amount: 159,
      ratings: 2,
      type: `full`,
      color: `grey`,
      total_ratings: `6`,
      images: [
        images["grey.webp"],
        mobileImages["grey.webp"],
        images["grey-2.webp"],
        mobileImages["grey-2.webp"],
      ],
      alt: `Grey large bed with storage`,
    },
    {
      name: `KQITE`,
      description: `Bed frame, Full`,
      amount: 492,
      ratings: 4,
      type: `full`,
      color: `beige`,
      total_ratings: `47`,
      images: [
        images["beige.webp"],
        mobileImages["beige.webp"],
        images["beige-2.webp"],
        mobileImages["beige-2.webp"],
      ],
      alt: `Beige large bed with storage`,
    },
    {
      name: `IOSEU`,
      description: `High bed, Twin`,
      amount: 156,
      ratings: 3.5,
      type: `twin`,
      color: `white`,
      total_ratings: `9`,
      images: [
        images["twin-white-2.webp"],
        mobileImages["twin-white-2.webp"],
        images["twin-white.webp"],
        mobileImages["twin-white.webp"],
      ],
      alt: `White twin bed with storage`,
    },
    {
      name: `NIESTA`,
      description: `Metal frame bed, Twin`,
      amount: 98,
      ratings: 1,
      type: `twin`,
      color: `black`,
      total_ratings: `3`,
      images: [
        images["metal-2.webp"],
        images["metal-2.webp"],
        images["twin-metal.webp"],
        mobileImages["twin-metal.webp"],
      ],
      alt: `Metal twin bed without storage`,
    },
    {
      name: `KLAIR`,
      description: `Low Profile Platform Bed, Twin`,
      amount: 234,
      ratings: 5,
      type: `twin`,
      color: `black`,
      total_ratings: `89`,
      images: [
        images["blue-twin.webp"],
        mobileImages["blue-twin.webp"],
        images["blue-twin-2.webp"],
        mobileImages["blue-twin-2.webp"],
      ],
      alt: `Blue colored twin bed`,
    },
    {
      name: `BUSHWICK`,
      description: `Full bunk bed`,
      amount: 657,
      ratings: 3,
      type: `kids`,
      color: `grey`,
      total_ratings: `23`,
      images: [
        images["kids-2.webp"],
        mobileImages["kids-2.webp"],
        images["kids.webp"],
        mobileImages["kids.webp"],
      ],
      alt: `Kids bed with storage`,
    },
    {
      name: `ARROW`,
      description: `Twin over full bunk bed`,
      amount: 356,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["kids-white.webp"],
        mobileImages["kids-white.webp"],
        images["kids-white-2.webp"],
        mobileImages["kids-white-2.webp"],
      ],
      alt: `White colored kids bed`,
    },

    {
      name: `FLINN`,
      description: `Twin over full bunk bed`,
      amount: 267,
      ratings: 3,
      type: `kids`,
      color: `white`,
      total_ratings: `3`,
      images: [
        images["another-beige-2.png"],
        images["another-beige-2.png"],
        images["another-beige-1.png"],
        images["another-beige-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `KANIEL`,
      description: `Twin over full bunk bed`,
      amount: 983,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["beige-bed-2.png"],
        images["beige-bed-2.png"],
        images["beige-bed-1.png"],
        images["beige-bed-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `PINHEIRO`,
      description: `Twin over full bunk bed`,
      amount: 536,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["black-bed-2.png"],
        images["black-bed-2.png"],
        images["black-bed-1.png"],
        images["black-bed-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `IRENE`,
      description: `Twin over full bunk bed`,
      amount: 456,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["black-bed-another-2.png"],
        images["black-bed-another-2.png"],
        images["black-bed-another-1.png"],
        images["black-bed-another-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `EICHHORN`,
      description: `Twin over full bunk bed`,
      amount: 299,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["brown-bed-2.png"],
        images["brown-bed-2.png"],
        images["brown-bed-1.png"],
        images["brown-bed-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `MENDEZ`,
      description: `Twin over full bunk bed`,
      amount: 379,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["blue-bed-2.png"],
        images["blue-bed-2.png"],
        images["blue-bed-1.png"],
        images["blue-bed-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `SLEIGH`,
      description: `Twin over full bunk bed`,
      amount: 289,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["grey-bed-2.png"],
        images["grey-bed-2.png"],
        images["grey-bed-1.png"],
        images["grey-bed-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `BROWGH`,
      description: `Twin over full bunk bed`,
      amount: 356,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["metal-white-twin.png"],
        images["metal-white-twin.png"],
        images["metal-white-twin-2.png"],
        images["metal-white-twin-2.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `WYNSUM`,
      description: `Twin over full bunk bed`,
      amount: 289,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["twin-bed-2.png"],
        images["twin-bed-2.png"],
        images["twin-bed-1.png"],
        images["twin-bed-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `SAVANNAH`,
      description: `Twin over full bunk bed`,
      amount: 111,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["white-another-2.png"],
        images["white-another-2.png"],
        images["white-another-1.png"],
        images["white-another-1.png"],
      ],
      alt: `White colored kids bed`,
    },
    {
      name: `DRAVEN`,
      description: `Twin over full bunk bed`,
      amount: 221,
      ratings: 4,
      type: `kids`,
      color: `white`,
      total_ratings: `12`,
      images: [
        images["white-metal-2.jpg"],
        images["white-metal-2.jpg"],
        images["white-metal-1.png"],
        images["white-metal-1.png"],
      ],
      alt: `White colored kids bed`,
    },
  ];

  const fullStar = `<span class="material-icons-round star-rate"> star </span>`;
  const starBorder = `<span class="material-icons-round star-rate"> star_border </span>`;
  const halfStar = `<span class="material-icons-round star-rate"> star_half </span>`;

  products.forEach((product) => {
    let index = 0;
    let stars = [];

    if (Number.isInteger(product.ratings)) {
      while (index < product.ratings) {
        stars.push(fullStar);
        index++;
      }
    } else {
      while (index < Math.floor(product.ratings)) {
        stars.push(fullStar);
        index++;
      }
      stars.push(halfStar);
    }
    let starLength = stars.length;

    while (starLength < 5) {
      stars.push(starBorder);
      starLength++;
    }

    let starString = stars.join(``);
    product["starString"] = starString;
  });

  const [currPage, setCurrPage] = useState(1);
  const pageSize = 6;
  const productLength = products.length;
  const startRow = (currPage - 1) * pageSize;
  const endRow = startRow + pageSize;

  let allProducts = products
    .slice(startRow, endRow)
    .map(
      (
        {
          name,
          description,
          amount,
          ratings,
          type,
          color,
          total_ratings,
          images,
          alt,
          starString,
        },
        index
      ) => (
        <Article
          key={index}
          name={name}
          description={description}
          amount={amount}
          ratings={ratings}
          type={type}
          color={color}
          total_ratings={total_ratings}
          images={images}
          alt={alt}
          starString={starString}
        />
      )
    );

  // const updatePage = (page) => {
  //   if (page < 0) setCurrPage(1);
  //   else if (page > totalPages) setCurrPage(totalPages);
  //   else setCurrPage(page);
  // };

  return (
    <>
      <main className="products">
        <header className="heading">
          <h1>Products</h1>
          <a href="#" className="main-button dialog">
            <svg
              className="filters-icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <title />
              <g data-name="Layer 2" id="Layer_2">
                <path d="M28,9H11a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                <path d="M7,9H4A1,1,0,0,1,4,7H7A1,1,0,0,1,7,9Z" />
                <path d="M21,17H4a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
                <path d="M11,25H4a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z" />
                <path d="M9,11a3,3,0,1,1,3-3A3,3,0,0,1,9,11ZM9,7a1,1,0,1,0,1,1A1,1,0,0,0,9,7Z" />
                <path d="M23,19a3,3,0,1,1,3-3A3,3,0,0,1,23,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,15Z" />
                <path d="M13,27a3,3,0,1,1,3-3A3,3,0,0,1,13,27Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,13,23Z" />
                <path d="M28,17H25a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z" />
                <path d="M28,25H15a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
              </g>
              <g id="frame">
                <rect className="cls-1" height="32" width="32" />
              </g>
            </svg>
            <p>Filters</p>
          </a>

          <form className="filters-large">
            <details>
              <summary>
                Filters
                <svg
                  className="Icon Icon--select-arrow"
                  width="6"
                  height="8"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.76837e-07 -2.93462e-07L3.04478 0.223788L6 0L3.04478 7.83258L4.76837e-07 -2.93462e-07Z"
                    fill="#231F20"
                  ></path>
                </svg>
              </summary>

              <label htmlFor="sort">Sort by</label>
              <select name="sort" id="sort">
                <option value="best">Best match</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="ratings">Ratings</option>
              </select>

              <div className="filter-options-large">
                <div className="type">
                  <h4>Type</h4>
                  <ol className="filter-list-large">
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="storage"
                          id="storageBeds"
                        />
                        <label
                          htmlFor="storageBeds"
                          className="custom-check type"
                        >
                          Beds with Storage
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="twin"
                          id="twinBeds"
                        />
                        <label htmlFor="twinBeds" className="custom-check type">
                          Twin Beds
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="full"
                          id="fullBeds"
                        />
                        <label htmlFor="fullBeds" className="custom-check type">
                          Full Beds
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="kids"
                          id="kidsBeds"
                        />
                        <label htmlFor="kidsBeds" className="custom-check type">
                          Kids Beds
                        </label>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="color">
                  <h4>Color</h4>
                  <ul className="filter-list-large">
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="black"
                          id="colBlack"
                        />

                        <label
                          htmlFor="colBlack"
                          className="custom-check color"
                        >
                          <img
                            title="Black"
                            src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjA5OQ&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Black color"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="white"
                          id="colWhite"
                        />
                        <label
                          htmlFor="colWhite"
                          className="custom-check color"
                        >
                          <img
                            title="White"
                            src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjI2Mw&ixlib=rb-1.2.1&q=80&w=400"
                            alt="white color"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="grey"
                          id="colGrey"
                        />
                        <label htmlFor="colGrey" className="custom-check color">
                          <img
                            title="Grey"
                            src="https://images.unsplash.com/photo-1523878288860-7ad281611901?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc0NA&ixlib=rb-1.2.1&q=85"
                            alt="grey color"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="beige"
                          id="colBeige"
                        />
                        <label
                          htmlFor="colBeige"
                          className="custom-check color"
                        >
                          <img
                            title="Beige"
                            src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc5Mw&ixlib=rb-1.2.1&q=80&w=400"
                            alt="beige color"
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ratings-bar">
                  <h4>Ratings (above)</h4>
                  <ol className="ratings-list">
                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="4" />

                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="3" />
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="2" />
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="1" />
                        <span className="material-icons-round star-rate">
                          {" "}
                          star{" "}
                        </span>
                      </label>
                    </li>
                  </ol>
                </div>
              </div>
            </details>
          </form>

          <div id="popup1" className="overlay">
            <div className="popup">
              <h2>
                Filters
                <span>
                  <a className="close" href="#">
                    &times;
                  </a>
                </span>
              </h2>

              <div className="content">
                <form name="filters" className="filters-2">
                  <div className="filter-options-small">
                    <div className="type">
                      <h4>Type</h4>
                      <ol className="filter-list-large">
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="type"
                              value="storage"
                              id="storageBeds"
                            />
                            <label
                              htmlFor="storageBeds"
                              className="custom-check type"
                            >
                              Beds with Storage
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="type"
                              value="twin"
                              id="twinBeds"
                            />
                            <label
                              htmlFor="twinBeds"
                              className="custom-check type"
                            >
                              Twin Beds
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="type"
                              value="full"
                              id="fullBeds"
                            />
                            <label
                              htmlFor="fullBeds"
                              className="custom-check type"
                            >
                              Full Beds
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="type"
                              value="kids"
                              id="kidsBeds"
                            />
                            <label
                              htmlFor="kidsBeds"
                              className="custom-check type"
                            >
                              Kids Beds
                            </label>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div className="color">
                      <h4>Color</h4>
                      <ul className="filter-list-large">
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="color"
                              value="black"
                              id="colBlack"
                            />

                            <label
                              htmlFor="colBlack"
                              className="custom-check color"
                            >
                              <img
                                title="Black"
                                src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjA5OQ&ixlib=rb-1.2.1&q=80&w=400"
                                alt="Black color"
                              />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="color"
                              value="white"
                              id="colWhite"
                            />
                            <label
                              htmlFor="colWhite"
                              className="custom-check color"
                            >
                              <img
                                title="White"
                                src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjI2Mw&ixlib=rb-1.2.1&q=80&w=400"
                                alt="white color"
                              />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="color"
                              value="grey"
                              id="colGrey"
                            />
                            <label
                              htmlFor="colGrey"
                              className="custom-check color"
                            >
                              <img
                                title="Grey"
                                src="https://images.unsplash.com/photo-1523878288860-7ad281611901?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc0NA&ixlib=rb-1.2.1&q=85"
                                alt="grey color"
                              />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="option">
                            <input
                              type="checkbox"
                              name="color"
                              value="beige"
                              id="colBeige"
                            />
                            <label
                              htmlFor="colBeige"
                              className="custom-check color"
                            >
                              <img
                                title="Beige"
                                src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc5Mw&ixlib=rb-1.2.1&q=80&w=400"
                                alt="beige color"
                              />
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="ratings-bar">
                      <h4>Ratings (above)</h4>
                      <ol>
                        <li>
                          <label className="custom-radio">
                            <input type="radio" name="rating" value="4" />

                            <span className="material-icons-round star-rate">
                              star
                            </span>
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="custom-radio">
                            <input type="radio" name="rating" value="3" />
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="custom-radio">
                            <input type="radio" name="rating" value="2" />
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                          </label>
                        </li>

                        <li>
                          <label className="custom-radio">
                            <input type="radio" name="rating" value="1" />
                            <span className="material-icons-round star-rate">
                              star
                            </span>
                          </label>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <button type="submit" value="submit">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>

        <div className="results-container">
          <h2 className="subheading">Results</h2>
        </div>

        <section className="results" id="results">
          {allProducts}
        </section>
        <nav aria-label="Pagination" className="pagination">
          <PaginationANTD
            defaultCurrent={currPage}
            total={productLength}
            defaultPageSize={pageSize}
            onChange={(page) => setCurrPage(page)}
          />
          {/* <p>1-6 of {productLength} products found</p>*/}
        </nav>
      </main>
    </>
  );
};

export default Main;

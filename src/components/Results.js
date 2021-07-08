import React from "react";
import Article from "./Article";
import Filters from "components/Filters";
import { useState } from "react";
import { Pagination, Empty } from "antd";
import "antd/dist/antd.css";

const Results = ({ ...filters }) => {
  let filtersAndSort = { ...filters };

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

  let sortOptions = filtersAndSort.sortOptions;
  let filterOptions = filtersAndSort.allFilters;

  let filteredArray = products;

  if (filterOptions.type.length > 0) {
    filteredArray = products.filter(function (product) {
      return filterOptions.type.join().includes(product.type);
    });
  }

  if (filterOptions.color.length > 0) {
    filteredArray = filteredArray.filter(function (product) {
      return filterOptions.color.join().includes(product.color);
    });
  }

  if (filterOptions.ratings > 0) {
    filteredArray = filteredArray.filter(function (product) {
      return product.ratings >= filterOptions.ratings;
    });
  }

  if (sortOptions == `high`) {
    filteredArray.sort(
      (firstItem, secondItem) => secondItem.amount - firstItem.amount
    );
  } else if (sortOptions == `low`) {
    filteredArray.sort(
      (firstItem, secondItem) => firstItem.amount - secondItem.amount
    );
  } else if (sortOptions == `ratings`) {
    filteredArray.sort(
      (firstItem, secondItem) => secondItem.ratings - firstItem.ratings
    );
  }

  const fullStar = `<span class="material-icons-round star-rate"> star </span>`;
  const starBorder = `<span class="material-icons-round star-rate"> star_border </span>`;
  const halfStar = `<span class="material-icons-round star-rate"> star_half </span>`;

  filteredArray.forEach((product) => {
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
  const productLength = filteredArray.length;
  const startRow = (currPage - 1) * pageSize;
  const endRow = startRow + pageSize;

  let allProducts = filteredArray
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
  return (
    <>
      <div className="results-container">
        <h2 className="subheading">Results</h2>
      </div>

      <section className="results" id="results">
        {allProducts}
      </section>
      <Empty style={productLength < 1 ? {} : { display: "none" }} />
      <nav
        aria-label="Pagination"
        className="pagination"
        style={productLength > 0 ? {} : { display: "none" }}
      >
        <p>
          {startRow + 1} to {endRow < productLength ? endRow : productLength} of{" "}
          {productLength} {productLength === 1 ? `product` : `products`} found.
        </p>

        <Pagination
          defaultCurrent={currPage}
          total={productLength}
          defaultPageSize={pageSize}
          onChange={(page) => setCurrPage(page)}
        />
      </nav>
    </>
  );
};

export default Results;

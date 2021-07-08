import React from "react";
import Products from "./Products";
import { useState, useEffect } from "react";
// import "antd/dist/antd.css";


const Results = (props) => {
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
        images["another-beige-2.webp"],
        images["another-beige-2.webp"],
        images["another-beige-1.webp"],
        images["another-beige-1.webp"],
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
        images["beige-bed-2.webp"],
        images["beige-bed-2.webp"],
        images["beige-bed-1.webp"],
        images["beige-bed-1.webp"],
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
        images["black-bed-2.webp"],
        images["black-bed-2.webp"],
        images["black-bed-1.webp"],
        images["black-bed-1.webp"],
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
        images["black-bed-another-2.webp"],
        images["black-bed-another-2.webp"],
        images["black-bed-another-1.webp"],
        images["black-bed-another-1.webp"],
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
        images["brown-bed-2.webp"],
        images["brown-bed-2.webp"],
        images["brown-bed-1.webp"],
        images["brown-bed-1.webp"],
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
        images["blue-bed-2.webp"],
        images["blue-bed-2.webp"],
        images["blue-bed-1.webp"],
        images["blue-bed-1.webp"],
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
        images["grey-bed-2.webp"],
        images["grey-bed-2.webp"],
        images["grey-bed-1.webp"],
        images["grey-bed-1.webp"],
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
        images["metal-white-twin.webp"],
        images["metal-white-twin.webp"],
        images["metal-white-twin-2.webp"],
        images["metal-white-twin-2.webp"],
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
        images["twin-bed-2.webp"],
        images["twin-bed-2.webp"],
        images["twin-bed-1.webp"],
        images["twin-bed-1.webp"],
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
        images["white-another-2.webp"],
        images["white-another-2.webp"],
        images["white-another-1.webp"],
        images["white-another-1.webp"],
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
        images["white-metal-2.webp"],
        images["white-metal-2.webp"],
        images["white-metal-1.webp"],
        images["white-metal-1.webp"],
      ],
      alt: `White colored kids bed`,
    },
  ];

  let sortOptions = props.sortOptions;
  let filterOptions = props.allFilters;

  let filteredArray = products;

  const FilterAllProducts = () => {
    console.log("this is filtering code---");
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
  };
  FilterAllProducts();

  return <Products filteredProducts={filteredArray} currentPage={1} />;
};

export default Results;

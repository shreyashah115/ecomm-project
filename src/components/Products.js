import React from "react";
import Article from "pages/Article";
import { useState, useEffect } from "react";
import { Pagination, Empty } from "antd";
import "antd/lib/pagination/style/index.css";
import "antd/lib/empty/style/index.css";

const Products = (props) => {
  const [currPage, setCurrPage] = useState(props.currentPage);

  useEffect(() => {
    setCurrPage(props.currentPage);
  }, [props]);

  let allProducts = [];
  let productLength;
  let pageSize;
  let startRow;
  let endRow;

  const allResults = () => {
    const fullStar = `<span class="material-icons-round star-rate"> star </span>`;
    const starBorder = `<span class="material-icons-round star-rate"> star_border </span>`;
    const halfStar = `<span class="material-icons-round star-rate"> star_half </span>`;

    props.filteredProducts.forEach((product) => {
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

    pageSize = 6;
    productLength = props.filteredProducts.length;
    startRow = (currPage - 1) * pageSize;
    endRow = startRow + pageSize;

    allProducts = props.filteredProducts
      .slice(startRow, endRow)
      .map(
        (
          {
            slug,
            name,
            description,
            amount,
            ratings,
            type,
            color,
            total_ratings,
            images,
            alt,
            fav,
            cart,
            starString,
          },
          index
        ) => (
          <Article
            key={index}
            slug={slug}
            name={name}
            description={description}
            amount={amount}
            ratings={ratings}
            type={type}
            color={color}
            total_ratings={total_ratings}
            images={images}
            alt={alt}
            fav={fav}
            cart={cart}
            starString={starString}
          />
        )
      );
  };

  allResults();

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
          current={currPage}
          total={productLength}
          defaultPageSize={pageSize}
          onChange={(page) => setCurrPage(page)}
        />
      </nav>
    </>
  );
};

export default Products;

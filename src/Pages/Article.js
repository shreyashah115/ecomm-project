import React from "react";
import { Link } from "react-router-dom";

const Article = ({ ...productDetails }) => {
  let product = { ...productDetails };
  return (
    <section className="Article product">
      <header>
        <Link to={`/product/${product.slug}`}>
          <div className="image-container">
            <img
              className="product"
              srcSet={`${product.images[0]} 1920w, ${product.images[0]} 960w, ${product.images[1]} 480w`}
              sizes="(min-width: 1920px) 500px,
          (min-width: 800px) 500px,
          480px"
              src={product.images[0]}
              alt={product.alt}
            />
            <img
              className="product-2"
              srcSet={`${product.images[3]} 1920w, ${product.images[3]} 960w`}
              sizes="(min-width: 1920px) 500px,
            (min-width: 800px) 500px,
            480px"
              src={product.images[3]}
              alt={product.alt}
            />
          </div>
        </Link>

        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <data value={product.amount}>
          <strong>${product.amount}.00</strong>
        </data>
        <div className="ratings">
          <div dangerouslySetInnerHTML={{ __html: product.starString }}></div>

          <span className="total-ratings">
            ({product.total_ratings} ratings)
          </span>
        </div>
      </header>

      <footer className="product-footer">
        <button type="button" className="main-button add-cart">
          <span className="material-icons-round"> add_shopping_cart </span> Add
          to Cart
        </button>
        <button type="button" className="main-button add-wishlist">
          <span className="material-icons-round add-fav">favorite_border</span>
          Add to wishlist
        </button>
      </footer>
    </section>
  );
};

export default Article;

import React from "react";

const Article = ({ ...productDetails }) => {
  let product = { ...productDetails };
  let productPage = "../product.html";
  return (
    <section className="Article product">
      <header>
        <a href={productPage}>
          <div className="image-container">
            <img
              className="product"
              srcSet={`${product.images[0].default} 1920w, ${product.images[0].default} 960w, ${product.images[1].default} 480w`}
              sizes="(min-width: 1920px) 500px,
          (min-width: 800px) 500px,
          480px"
              src={product.images[0].default}
              alt={product.alt}
            />
            <img
              className="product-2"
              srcSet={`${product.images[3].default} 1920w, ${product.images[3].default} 960w`}
              sizes="(min-width: 1920px) 500px,
            (min-width: 800px) 500px,
            480px"
              src={product.images[3]}
              alt={product.alt}
            />
          </div>
        </a>

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

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "utils/firebase";
import ButtonIncrement from "components/ButtonIncrement";
import ButtonDecrement from "components/ButtonDecrement";
import Display from "components/Display";
import styled from "styled-components";

const Article = ({ ...productDetails }) => {
  let product = { ...productDetails };
  const db = firebase.firestore();
  const [favorite, setFav] = useState(product.fav);
  const [cartValue, setCart] = useState(product.cart);

  const incrementCounter = () => {
    updateCart("inc");
  };
  const decrementCounter = () => {
    if (cartValue == 0) {
      return;
    }
    updateCart("dec");
  };

  const setFavorite = (e) => {
    console.log(favorite);
    db.collection("products")
      .doc(product.slug)
      .update({
        fav: !favorite,
      })
      .then(() => {
        setFav(!favorite);
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const updateCart = (operator) => {
    if (operator == "inc") {
      db.collection("products")
        .doc(product.slug)
        .update({
          cart: cartValue + 1,
        })
        .then(() => {
          setCart(cartValue + 1);
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      db.collection("products")
        .doc(product.slug)
        .update({
          cart: cartValue - 1,
        })
        .then(() => {
          setCart(cartValue - 1);
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  };

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
        {cartValue == 0 ? (
          <button
            type="button"
            className="main-button add-cart"
            onClick={() => updateCart("inc")}
          >
            <span className="material-icons-round"> add_shopping_cart </span>{" "}
            Add to Cart
          </button>
        ) : (
          <CartButtons>
            <ButtonDecrement onClickFunc={decrementCounter} />
            <Display message={cartValue} />
            <ButtonIncrement onClickFunc={incrementCounter} />
          </CartButtons>
        )}
        {favorite ? (
          <button
            type="button"
            className="main-button add-wishlist"
            onClick={(e) => setFavorite(e)}
          >
            <span className="material-icons-round add-fav">favorite</span>
            Remove from favorites
          </button>
        ) : (
          <button
            type="button"
            className="main-button add-wishlist"
            onClick={(e) => setFavorite(e)}
          >
            <span className="material-icons-round add-fav">
              favorite_border
            </span>
            Add to favorites
          </button>
        )}
      </footer>
    </section>
  );
};

const CartButtons = styled.div`
  display: flex;
  width: 10em;
  height: 2.5em;
  margin-top: 1.5em;
  margin-right: 1em;
`;

export default Article;

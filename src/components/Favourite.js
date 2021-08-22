import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "components/Header";
import Layout from "components/Layout";
import facebook from "img/svg/facebook-square-brands.svg";
import instagram from "img/svg/instagram-square-brands.svg";
import twitter from "img/svg/twitter-square-brands.svg";

const Favourite = ({ data }) => {
  let products = data.productsData;
  const loading = data.loading;
  let totalFavQty = 0;
  products.map((a) => {
    return (totalFavQty += a.fav);
  });

  const allProducts = products.filter((product) => product.fav > 0);

  return (
    <>
      {loading ? (
        <p>Please wait while the page loads.</p>
      ) : (
        <Layout>
          <Header />
          <hr />
          <Products className="productsInCart">
            {allProducts &&
              allProducts.map((product) => {
                if (totalFavQty) {
                  return (
                    <Item className="bed-item" key={product.slug}>
                      <Image src={product.images[0]} alt={product.alt} />
                      <p>
                        {product.name}, {product.color}
                      </p>
                      <p>${product.amount * product.fav}.00</p>
                      <p>Qty: {product.fav}</p>
                    </Item>
                  );
                }
              })}
            {totalFavQty ? (
              <></>
            ) : (
              <NoItems>
                Uh oh, nothing here. Maybe go add some favourites?
              </NoItems>
            )}
          </Products>

          <footer className="page-footer">
            <nav aria-label="Legal" className="footer-nav">
              <button type="button" className="main-button mobile-app">
                Install the Siesta Mobile App
              </button>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <img src={facebook} alt="Facebook logo" width="32" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="Instagram logo" width="32" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="Twitter logo" width="32" />
                  </a>
                </li>
              </ul>
              <ul className="legal">
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Accessibility Policy</a>
                </li>
              </ul>
              <p className="copyright">Copyright © Siesta - 2021</p>
            </nav>
          </footer>
        </Layout>
      )}
    </>
  );
};

const Products = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: #f3f3f5;
  margin: 0 auto;
  width: 90%;
  max-width: 50em;
  padding: 1em;
  padding-bottom: 0;
  box-shadow: 0px 2px 4px #ccbccc;
`;

const NoItems = styled.p`
margin: 0 auto;
max-width: 50em;
font-size: 1.5em;
  color: #7f187f;
}`;

const Image = styled.img`
  width: 10em;
  margin-bottom: 1em;
`;

export default Favourite;

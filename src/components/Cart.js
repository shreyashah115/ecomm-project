import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "components/Header";
import Layout from "components/Layout";
import facebook from "img/svg/facebook-square-brands.svg";
import instagram from "img/svg/instagram-square-brands.svg";
import twitter from "img/svg/twitter-square-brands.svg";
import siestaMobile from "img/siesta-mobile.webp";

const Product = ({ data }) => {
  let products = data.productsData;
  const loading = data.loading;

  return (
    <>
      {loading ? (
        <p>Please wait while the page loads.</p>
      ) : (
        <Layout>
          <Header />
          <hr />

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

export default Product;
